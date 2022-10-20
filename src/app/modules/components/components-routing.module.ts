import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: '', loadChildren: () => import('src/app/components/authentication/authentication.module').then(module => module.AuthenticationModule)},
  { path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
