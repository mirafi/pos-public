import {Component, OnInit} from '@angular/core';
import {OrderService} from "../services/orders.service";
import {Cart} from "../models/cart.model";
import {Product} from "../models/product.mode";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart: Cart;
  constructor(orderService:OrderService) {
    this.cart = orderService.getCart();
  }

  ngOnInit(): void {
  }
  addQuantity(item: Product){
    this.cart.increaseQuantity(item)
  }
  removeQuantity(item: Product):void {
    this.cart.decreaseQuantity(item)

  }

}
