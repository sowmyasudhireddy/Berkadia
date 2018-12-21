import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IssueComponent} from './issue/issue.component';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'issue',
    component: IssueComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
