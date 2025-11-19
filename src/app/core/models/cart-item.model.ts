import {Product} from "./product.mode";

export class CartItem {

  constructor(public item: Product,
              public quantity: number=0,
              public discountAmount: number=0) {
  }

  increaseQuantity():number {
    return ++this.quantity;
  }
  decreaseQuantity():number {
    if(this.quantity==0){
      return 0;
    }
    --this.quantity;
    return this.quantity
  }

  getTotalPrice(): number {
    return (this.item.price * this.quantity) - this.discountAmount
  }

  updateDiscount(discountAmount: number) {
    this.discountAmount = discountAmount
  }
}
