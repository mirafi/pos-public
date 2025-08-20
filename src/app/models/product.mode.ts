export class Product{
  barcode:string
  name: string
  price:number


  constructor(barcode: string, name: string, price: number) {
    this.barcode = barcode;
    this.name = name;
    this.price = price;
  }
}
