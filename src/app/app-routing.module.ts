import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoffeeShopsListComponent } from './coffee-shops-list/coffee-shops-list.component';
import { AuthGuard } from './guards/auth-guard';
import { Role } from './model/role/Role';
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'coffeeShopsList', 
    component: CoffeeShopsListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
