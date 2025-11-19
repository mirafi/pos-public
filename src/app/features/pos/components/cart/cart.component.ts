import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../../core/services/orders.service";
import {Cart} from "../../../../core/models/cart.model";
import {Product} from "../../../../core/models/product.mode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
    alert("Order Confirmed! Redirecting to start order page")
    this.router.navigate(['/start-order']).then(r => r);
  }
  printInvoice(){
    console.log('To be implemented...')
  }

}
