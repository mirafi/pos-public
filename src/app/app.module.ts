import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CategoryPageComponent} from './category-page/category-page.component';
import {ItemPageComponent} from './item-page/item-page.component';
import {StartOrderPageComponent} from './start-order-page/start-order-page.component';
import {HeaderPageComponent} from './header-page/header-page.component';
import {EurCurrencyConvertorPipe} from './pipes/currency-convertor.pipe';
import {CartPageComponent} from './cart-page/cart-page.component';
import {OrdersPageComponent} from './orders-page/orders-page.component';
import {CartDisplayPageComponent} from './cart-display-page/cart-display-page.component';
import {OrdersDisplayPageComponent} from './orders-display-page/orders-display-page.component';
import {ItemRepositoryImpl} from "./repository/impl/product-repository-impl.service";
import {CategoryRepositoryImpl} from "./repository/impl/category-repository-impl.service";
import {OrderService} from "./services/orders.service";
import {SERVICE} from "../environments/service";

const routes: Routes = [
  { path: '', redirectTo: '/start-order', pathMatch: 'full' }, // default
  { path: 'start-order', component: StartOrderPageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'item/:categoryId', component: ItemPageComponent },
  { path: 'cart', component: CartDisplayPageComponent },
  { path: 'orders', component: OrdersDisplayPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    ItemPageComponent,
    StartOrderPageComponent,
    HeaderPageComponent,
    EurCurrencyConvertorPipe,
    CartPageComponent,
    OrdersPageComponent,
    CartDisplayPageComponent,
    OrdersDisplayPageComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [
    OrderService,
    {provide:"ItemRepository",useFactory:()=>{
        if(SERVICE.mock)
          return new ItemRepositoryImpl();
        // else if(SERVICE.api)
        //   return serviceOfHttpAPI
        else return new ItemRepositoryImpl(); // Default
      }
    },
    {provide:"CategoryRepository",useFactory:()=>{
        if(SERVICE.mock)
          return new CategoryRepositoryImpl();
          // else if(SERVICE.api)
        //   return serviceOfHttpAPI
        else return new CategoryRepositoryImpl(); // Default
      }
    }],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
