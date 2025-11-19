import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CategoryPageComponent} from './features/pos/pages/category-page/category-page.component';
import {ItemPageComponent} from './features/pos/pages/item-page/item-page.component';
import {StartOrderPageComponent} from './features/pos/pages/start-order-page/start-order-page.component';
import {HeaderPageComponent} from './features/pos/components/header-page/header-page.component';
import {EurCurrencyConvertorPipe} from './pipes/currency-convertor.pipe';
import {CartComponent} from './features/pos/components/cart/cart.component';
import {OrdersComponent} from './features/pos/components/orders/orders.component';
import {CartPageComponent} from './features/pos/pages/cart-page/cart-page.component';
import {OrdersDisplayPageComponent} from './features/pos/pages/orders-display-page/orders-display-page.component';
import {ItemRepositoryImpl} from "./core/repository/impl/product-repository-impl.service";
import {CategoryRepositoryImpl} from "./core/repository/impl/category-repository-impl.service";
import {OrderService} from "./core/services/orders.service";
import {SERVICE} from "../environments/service";

const routes: Routes = [
  { path: '', redirectTo: '/start-order', pathMatch: 'full' }, // default
  { path: 'start-order', component: StartOrderPageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'item/:categoryId', component: ItemPageComponent },
  { path: 'cart', component: CartPageComponent },
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
    CartComponent,
    OrdersComponent,
    CartPageComponent,
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
