import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from 'src/app/components/authentications/login/login.component';
import { RegisterComponent } from 'src/app/components/authentications/register/register.component';
import { AuthLayoutComponent } from 'src/app/components/layouts/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from 'src/app/main-layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'Authentication', pathMatch: 'full'},

    {path:'authentication',component:AuthLayoutComponent,
    children:[
      // {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
   
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
