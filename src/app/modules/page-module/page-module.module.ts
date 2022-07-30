import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageModuleRoutingModule } from './page-module-routing.module';
import { DashboardComponent } from 'src/app/components/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PageModuleRoutingModule
  ]
})
export class PageModuleModule { }
