import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { CountryComponent } from './country/country.component';
import {UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    HeaderComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
