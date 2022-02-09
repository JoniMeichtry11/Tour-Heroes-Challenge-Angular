import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './pages/log-in/log-in.component';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
