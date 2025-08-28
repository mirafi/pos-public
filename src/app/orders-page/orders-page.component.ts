import { Component, OnInit } from '@angular/core';
import {Order} from "../models/order.model";
import {OrderService} from "../services/orders.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pending-order-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  orders: Order[]
  currentOrder:Order
  constructor(private orderService: OrderService,private router: Router ) {
    this.orders = orderService.pendingOrders
    this.currentOrder = orderService.currentOrder
  }

  ngOnInit(): void {
  }

  selectOrder(order:Order){
    this.orderService.currentOrder = order
    this.router.navigate(['/category']).then(r => true)
  }
  cancelOrder(order:Order){
    this.orderService.cancelOrder(order)
    if( this.orderService.orderCount()== 0){
      this.router.navigate(['/start-order']).then(r => true)
    }
    this.refreshOrder()
  }
  private refreshOrder(){
    this.orders = this.orderService.pendingOrders
    this.currentOrder = this.orderService.currentOrder
  }

}
