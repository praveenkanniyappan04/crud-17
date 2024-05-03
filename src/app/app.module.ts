import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SignFormComponent } from './sign-form/sign-form.component';


import { authGuard } from './auth.guard';
import { NgxPaginationModule } from 'ngx-pagination';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    UserTableComponent,
    SignFormComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
