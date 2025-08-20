import {Product} from './product.mode';
import {CartItem} from "./cart-item.model";
import {CartSummary} from "./cart-total-quantity.model";
import {BehaviorSubject, Subscription} from "rxjs";

export class Cart {

  items: CartItem[] = []
  private cartSummary:CartSummary = new CartSummary()
  cartBehaviorSubject:BehaviorSubject<CartSummary>
  constructor() {
   this.cartBehaviorSubject =  new BehaviorSubject<CartSummary>(this.cartSummary);
  }

  addProduct(product: Product) {
    this.items.find(ci => ci.item.id == product.id)?.increaseQuantity()
    ||
    this.items.push(new CartItem(product, 1))

    this.cartSummary.totalQuantity =
      this.items.map(ci => ci.quantity)
        .reduce((sum, quantity) => sum + quantity, 0);

    this.updateSummeryAndPublish()
  }
  private updateSummeryAndPublish(){
    this.cartSummary.totalItems = this.items.length
    this.cartSummary.totalAmount = this.totalAmount()

    this.cartBehaviorSubject.next(this.cartSummary)
  }
  totalAmount():number{
    return this.items.map(ci =>ci.getTotalPrice())
      .reduce((sum, price) => sum + price, 0);
  }

  changeSubscription(callback: (n: CartSummary) => void):Subscription {
      return this.cartBehaviorSubject.subscribe(callback)
  }
  increaseQuantity(product: Product):void {
    this.items.find(ci => ci.item.id == product.id)?.increaseQuantity()
    this.updateSummeryAndPublish()
  }
  decreaseQuantity(product: Product):void {
    if(this.items.find(ci => ci.item.id == product.id)?.quantity==0)return
    this.items.find(ci => ci.item.id == product.id)?.decreaseQuantity()
    this.updateSummeryAndPublish()
  }
}
