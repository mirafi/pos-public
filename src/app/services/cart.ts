import {Product} from '../models/product.mode';

export class Cart{
  items: Product[] = []
  addProduct( product: Product): number |undefined {

    const response = this.items.push(product)

    if (response == null)
      console.error("Unable to add new product to cart!")
    else
      console.log("New Item added with response ", response)

    return response
  }
}
