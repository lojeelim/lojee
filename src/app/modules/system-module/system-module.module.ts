import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemModuleRoutingModule } from './system-module-routing.module';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { HeaderComponent } from 'src/app/main-layouts/header/header.component';
import {ButtonModule} from 'primeng/button';
import { FooterComponent } from 'src/app/main-layouts/footer/footer.component';
@NgModule({
  declarations: [LandingComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    SystemModuleRoutingModule,
    ButtonModule
  ]
})
export class SystemModuleModule { }
