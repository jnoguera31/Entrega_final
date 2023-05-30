
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomefooterComponent } from './homefooter/homefooter.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeheaderComponent,
    SliderComponent,
    LoginComponent,
    HomefooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,

  ]
})
export class HomeModule { }
