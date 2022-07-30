import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { graphQLURL } from 'src/environments/environment';
// import { HeaderComponent } from './main-layouts/header/header.component';
// import { FooterComponent } from './main-layouts/footer/footer.component';
import { PageNotFoundComponent } from './main-layouts/page-not-found/page-not-found.component';
// import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { RippleModule } from 'primeng/ripple';
import { } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {StyleClassModule} from 'primeng/styleclass';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,

    // FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
    FormsModule,
    // ButtonModule,
    TabMenuModule,
    MenubarModule,
    RippleModule,
    BrowserAnimationsModule,
    AccordionModule,
    StyleClassModule,
    CardModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link:  httpLink.create({
          // getting graphql endpoint from the env.
          // uri:  'https://lojee-app.herokuapp.com/v1/graphql'
        
          uri:graphQLURL.endpoint,
        })
      };
    },  
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
