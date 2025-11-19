import {Component, Inject} from '@angular/core';
import {CategoryRepository} from "../../../../core/repository/category-repository.service";
import {Category} from "../../../../core/models/category.model";
import {OrderService} from "../../../../core/services/orders.service";
import {HeaderButtonDisplayOptions} from "../../../../core/models/header-button-display-options";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent  {

  categories: Category[]
  currentOrderDisplayText:string
  displayOption: HeaderButtonDisplayOptions = new HeaderButtonDisplayOptions(false,true,true);

  constructor(@Inject("CategoryRepository") private categoryRepository:CategoryRepository, private orders:OrderService){
    this.categories = this.categoryRepository.getAllCategory()
    this.currentOrderDisplayText = this.orders.currentOrder.displayText
  }
}
