import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: '', loadChildren: () => import('src/app/modules/components/components.module').then(module => module.ComponentsModule)}
  
  //{ path: 'authentication', loadChildren: () => import('src/app/components/authentications/authentication-module/authentication-module-routing.module').then(module => module.AuthenticationModuleRoutingModule)},



  // { path: '', loadChildren: () => import('src/app/modules/system-module/system-module.module').then(m => m.SystemModuleModule)},
  // { path: '', loadChildren: () => import('src/app/modules/auth-module/auth-module.module').then(m => m.AuthModuleModule)},
  // { path: '', loadChildren: () => import('src/app/modules/page-module/page-module.module').then(m => m.PageModuleModule)},
  // {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
