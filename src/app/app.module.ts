import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AppFailComponent } from './app-fail/app-fail.component';
import { SliderComponent } from './auth/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { EmailExistance } from './auth/password.validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    AppFailComponent,
    SliderComponent,
    EmailExistance
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
