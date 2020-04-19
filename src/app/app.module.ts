import { ApiService } from './service/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartAction } from './store/actions/cart.actions';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers,
      // { metaReducers }
    ),
    HttpClientModule
  ],
  providers: [ApiService, CartAction],
  bootstrap: [AppComponent]
})
export class AppModule { }
