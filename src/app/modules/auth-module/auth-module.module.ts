import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { LoginComponent } from 'src/app/components/authentications/login/login.component';
import { RegisterComponent } from 'src/app/components/authentications/register/register.component';
import { AuthLayoutComponent } from 'src/app/components/layouts/auth-layout/auth-layout.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ImageModule} from 'primeng/image';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,

  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ImageModule,
    FormsModule
  ]
})
export class AuthModuleModule { }
