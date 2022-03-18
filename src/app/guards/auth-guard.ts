import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Role } from "../model/Role";
import { User } from "../model/user";
import { AuthService } from "../service/auth/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authService.user;
        if (user) {
            if (this.isRouteRestricted(route, user)) {
                this.router.navigate(['/']);
                return false;
            }

            return true;
        }

        this.router.navigate(['/login'])
        return false;
    }

    private isRouteRestricted(route: ActivatedRouteSnapshot, user: User): boolean {
        let allowedRoles = route.data['roles']
        if (!allowedRoles) {
            return false;
        }

        return !(allowedRoles as Array<string>).some(allowedRole => allowedRole as Role == user.role)
    }
}
