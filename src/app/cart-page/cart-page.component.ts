import {Component, OnInit} from '@angular/core';
import {OrderService} from "../services/orders.service";
import {Cart} from "../models/cart.model";
import {Product} from "../models/product.mode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart: Cart;
  constructor(private orderService:OrderService, private  router:Router) {
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
  removeItem(item: Product){
    this.cart.removeItem(item)
  }
  confirmOrder(){
    this.orderService.confirmOrder()
  }
  confirmAndPrint(){
    this.printInvoice()
    this.confirmOrder()
    this.router.navigate(['/start-order']).then(r => r);
  }
  printInvoice(){
    console.log('To be implemented...')
  }

}
