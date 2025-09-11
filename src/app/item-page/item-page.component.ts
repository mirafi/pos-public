import {Component, Inject, OnInit} from '@angular/core';
import {ItemRepository} from "../repository/item-repository.service";
import {Product} from "../models/product.mode";
import {ActivatedRoute} from '@angular/router';
import {Cart} from "../models/cart.model";
import {OrderService} from "../services/orders.service";
import {Category} from "../models/category.model";
import {CategoryRepository} from "../repository/category-repository.service";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  items:Product[]=[];
  category:Category|undefined|null;
  cart:Cart;
  constructor(private route: ActivatedRoute,@Inject("ItemRepository") private itemRepository: ItemRepository,@Inject("CategoryRepository") private categoryRepository:CategoryRepository, private orderService:OrderService) {
    this.cart = this.orderService.getCart();

  }

  addToCart(product:Product){
    this.cart.addProduct(product);
  }

  ngOnInit(): void {
    // Get the route parameter (snapshot version)
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.category = (categoryId!=null)?this.categoryRepository.getById(parseInt(categoryId,0)):null;
    console.log("categoryId",categoryId, this.route.snapshot.paramMap);
    if (categoryId != null){
      this.items = this.itemRepository.getItemByCategory(parseInt(categoryId))??[];
      console.log(" this.items", this.items);
    }else
      this.items = this.itemRepository.getAllItem();



    }

}
