import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { LoginComponent } from 'src/app/components/authentications/login/login.component';
import { RegisterComponent } from 'src/app/components/authentications/register/register.component';
import { AuthLayoutComponent } from 'src/app/components/layouts/auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,

  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule
  ]
})
export class AuthModuleModule { }
