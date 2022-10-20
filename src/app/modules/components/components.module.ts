import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from 'src/app/components/layouts/header/header.component';
import { FooterComponent } from 'src/app/components/layouts/footer/footer.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import {ImageModule} from 'primeng/image';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ImageModule,
    MenubarModule
  ]
})
export class ComponentsModule { }
