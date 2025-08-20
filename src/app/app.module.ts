import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { StartOrderPageComponent } from './start-order-page/start-order-page.component';
import {ProductRepository} from "./repository/product-repository.service";
import {CategoryRepository} from "./repository/category.repository";
import {OrderService} from "./services/orders.service";
import { HeaderPageComponent } from './header-page/header-page.component';
import { EurCurrencyConvertorPipe } from './pipes/currency-convertor.pipe';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/start-order', pathMatch: 'full' }, // default
  { path: 'start-order', component: StartOrderPageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'item/:categoryId', component: ItemPageComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    ItemPageComponent,
    StartOrderPageComponent,
    HeaderPageComponent,
    EurCurrencyConvertorPipe,
    CartPageComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [ProductRepository,CategoryRepository,OrderService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
