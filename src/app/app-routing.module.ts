import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [HomeGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '**', redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
