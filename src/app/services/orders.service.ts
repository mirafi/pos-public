import {Order} from '../models/order.model'
import { Md5 } from 'ts-md5';
import {Injectable} from "@angular/core";

@Injectable()
export class Orders {
  pendingOrders: Order[] = [];
  currentOrder: Order = new Order();
  private md5 = new Md5();
  static _ORDER_PREFIX = 'Order ';
  constructor() {
    this.pendingOrders = [];
    this.currentOrder = new Order();
  }
  addOrder() {
    let order: Order = new Order()
    order.displayText = Orders._ORDER_PREFIX + (this.pendingOrders.length+1);
    order.orderId = this.md5.appendStr(order.displayText).end().toString();
    this.pendingOrders.push(order);
    this.currentOrder = order;
  }

}
