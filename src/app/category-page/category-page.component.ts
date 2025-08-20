import { Component, OnInit } from '@angular/core';
import {CategoryRepository} from "../repository/category.repository";
import {Category} from "../models/category.model";
import {OrderService} from "../services/orders.service";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent  {

  categories: Category[]
  currentOrderDisplayText:string

  constructor(private categoryRepository:CategoryRepository, private orders:OrderService){
    this.categories = this.categoryRepository.getAllCategory()
    this.currentOrderDisplayText = this.orders.currentOrder.displayText
  }
}
