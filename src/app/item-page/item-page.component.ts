import {Component, OnInit} from '@angular/core';
import {ProductRepository} from "../repository/product-repository.service";
import {Product} from "../models/product.mode";
import {ActivatedRoute} from '@angular/router';
import {BackPageInfo} from "../models/back-page-info";
import {Cart} from "../models/cart.model";
import {OrderService} from "../services/orders.service";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  items:Product[]=[];
  backPageInfo:BackPageInfo = new BackPageInfo("/category","Category")
  cart:Cart;
  constructor(private route: ActivatedRoute,private itemRepository: ProductRepository, private orderService:OrderService) {
    this.cart = this.orderService.getCart();

  }

  addToCart(product:Product){
    this.cart.addProduct(product);
  }

  ngOnInit(): void {
    // Get the route parameter (snapshot version)
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    console.log("categoryId",categoryId, this.route.snapshot.paramMap);
    if (categoryId != null){
      this.items = this.itemRepository.getItemByCategory(parseInt(categoryId))??[];
      console.log(" this.items", this.items);
    }

    else
      this.items = this.itemRepository.getAllItem();
    }

}
