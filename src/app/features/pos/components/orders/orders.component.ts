import { Component, OnInit } from '@angular/core';
import {Order} from "../../../../core/models/order.model";
import {OrderService} from "../../../../core/services/orders.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-page',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

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
