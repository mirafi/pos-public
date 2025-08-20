import {Order} from '../models/order.service';
import {Cart} from './cart';


export class OrderCarts {
  carts:  Map<String, Cart> = new  Map<String, Cart>();
   constructor(public currentOrder:Order) {
  }


  getCart(): Cart|undefined
  {
    if (!this.carts.has(this.currentOrder.orderId)) {
      this.carts.set(this.currentOrder.orderId, new Cart())
    }

    return this.carts.get(this.currentOrder.orderId);
  }

}
