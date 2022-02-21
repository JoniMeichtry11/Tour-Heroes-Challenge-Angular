import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgFallimgModule } from 'ng-fallimg';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    HomeComponent,
    TeamComponent,
    HeroSearchComponent,
    NavbarComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFallimgModule.forRoot({
      default: '../../assets/img/default.png',
    }),
    ToastrModule
  ]
})
export class HomeModule { }
