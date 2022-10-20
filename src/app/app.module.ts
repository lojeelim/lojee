import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { environment } from 'src/environments/environment'
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { RippleModule } from 'primeng/ripple';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {StyleClassModule} from 'primeng/styleclass';
import {CardModule} from 'primeng/card';

import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [ 
    AppComponent,

    // FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    RippleModule,
    BrowserAnimationsModule,
    AccordionModule,
    StyleClassModule,
    CardModule,
    ImageModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link:  httpLink.create({
          // getting graphql endpoint from the env.
          // uri:  'https://lojee-app.herokuapp.com/v1/graphql'
        
          uri:environment.endpoint,
        })
      };
    },  
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
