import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemModuleRoutingModule } from './system-module-routing.module';
import { LandingComponent } from 'src/app/components/landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SystemModuleRoutingModule
  ]
})
export class SystemModuleModule { }
