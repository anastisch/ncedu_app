import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitter/emitters';
import { LoginResponse } from 'src/app/model/login-response';

const AUTH_API = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(name: string, password:string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(AUTH_API + '/login', {name, password}).pipe(
      tap((response => this.onLogin(response))),
      catchError(this.handleError)
    )
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(AUTH_API + '/register', {name, email, password}).pipe(
      catchError(this.handleError)
    );
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('id');

    Emitters.authEmitter.emit(false);

    this.router.navigate(['login']);
  }

  get token(): string | null {
    return localStorage.getItem('jwt');
  }

  get userId(): number | null {
    let id = localStorage.getItem('id')
    if (id != null) {
      return Number(id)
    }
    return null
  }

  get isLoggedIn(): boolean {
    return this.token !== null;
  }

  private onLogin(authResult: LoginResponse): void {
    console.log("login!!")
    // save jwt
    localStorage.setItem('jwt', authResult.token);
    localStorage.setItem('id', authResult.id.toString());
    Emitters.authEmitter.emit(true)
  }

  private handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }
}
