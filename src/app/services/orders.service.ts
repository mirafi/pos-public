import {Order} from '../models/order.model'
import { Md5 } from 'ts-md5';
import {Injectable} from "@angular/core";
import {Cart} from "../models/cart.model";

@Injectable()
export class OrderService {
  pendingOrders: Order[] = [];
  currentOrder: Order = new Order();
  private md5 = new Md5();
  static _ORDER_PREFIX = 'Order ';
  private carts:  Map<String, Cart> = new  Map<String, Cart>();

  constructor() {
    this.pendingOrders = [];
    this.currentOrder = new Order();
  }

  private addCart(){
    const orderId = this.currentOrder.orderId;
    if (!this.carts.has(orderId)) {
      this.carts.set(orderId, new Cart());
    }
  }
  getCart(): Cart {
    const orderId = this.currentOrder.orderId;
    const cart = this.carts.get(orderId);
    if (!cart) {
      throw new Error("Order cart not found");
    }
    return cart;
  }

  addOrder() {
    let order: Order = new Order()
    order.displayText = OrderService._ORDER_PREFIX + (this.pendingOrders.length+1);
    order.orderId = this.md5.appendStr(order.displayText).end().toString();
    this.pendingOrders.push(order);
    this.currentOrder = order;
    this.addCart()
  }

}
