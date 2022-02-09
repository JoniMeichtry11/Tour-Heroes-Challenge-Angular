import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login', component: LogInComponent},
      {path: '**', redirectTo: 'login'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AuthRoutingModule { }
