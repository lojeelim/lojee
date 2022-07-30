import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './main-layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: '', loadChildren: () => import('src/app/modules/system-module/system-module.module').then(m => m.SystemModuleModule)},
  { path: '', loadChildren: () => import('src/app/modules/auth-module/auth-module.module').then(m => m.AuthModuleModule)},
  { path: '', loadChildren: () => import('src/app/modules/page-module/page-module.module').then(m => m.PageModuleModule)},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
