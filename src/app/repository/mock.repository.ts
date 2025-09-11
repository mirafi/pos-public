import {Category} from '../models/category.model';
import {Product} from '../models/product.mode';

export class MockData{
  static dataItem: Map<number,Product[]>  = new Map<number,Product[]>()
  static dataCategory: Category[] = [];
  static {
    MockData.dataCategory[0] = new Category(1,"Drinks","assets/item/default_cat_drinks.jpg");
    MockData.dataCategory[1] = new Category(2,"Single Item","assets/item/default_cat_single_item.png");

    MockData.dataItem.set(MockData.dataCategory[0].id,[])
    MockData.dataItem.set(MockData.dataCategory[1].id,[])

    MockData.dataItem.get(MockData.dataCategory[0].id)?.push(new Product(1,"100001","Cola",1))
    MockData.dataItem.get(MockData.dataCategory[0].id)?.push(new Product(2,"100002","Cola Zero",1))
    MockData.dataItem.get(MockData.dataCategory[0].id)?.push(new Product(3,"100004","Ieran",1))

    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(4,"200001","Beef Burger",5))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(5,"200002","Chicken Burger",3))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(6,"200003","Beef Shawarma",5))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(7,"200004","Chicken Shawarma",3))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(8,"200005","Chicken soup",2))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(9,"200006","Beef soup",2))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(10,"200007","Vegetable soup",3))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(11,"200008","Tripe soup",2.5))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(12,"200009","Cream mushroom soup",2.5))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(13,"200010","Tom yam soup",3))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(14,"200011","Tomato soup",1))
    MockData.dataItem.get(MockData.dataCategory[1].id)?.push(new Product(15,"200012","Broccoli soup",1))



  }

}
