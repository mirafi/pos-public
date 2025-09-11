import {Product} from "../models/product.mode";

export interface ItemRepository{
  getAllItem():Product[]
  getItemByCategory(categoryId:number): Product[]|undefined
}
