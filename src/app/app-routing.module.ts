import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/carList', pathMatch: 'full'},
  { path: 'carList/:_id', component: CarDetailsComponent},
  { path: 'carList', component: CarsListComponent},  
  { path: 'carDetails', component: CarDetailsComponent},
  { path: 'cart', component: CartComponent},
  { path: "**", component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CarsListComponent, CarDetailsComponent, PageNotFoundComponent, CartComponent]
