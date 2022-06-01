import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppFailComponent } from './app-fail/app-fail.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGurd } from './auth/auth.gurd';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'login', component: AuthComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGurd]},
  {path: '404', component: AppFailComponent, canActivate: [AuthGurd]},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
