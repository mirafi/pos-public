import { Component, OnInit } from '@angular/core';
import {HeaderButtonDisplayOptions} from "../../../../core/models/header-button-display-options";

@Component({
  selector: 'app-cart-display-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  headerButtonDisplayOptions:HeaderButtonDisplayOptions;

  constructor() {
    this.headerButtonDisplayOptions = new HeaderButtonDisplayOptions(true,false,false);
  }

  ngOnInit(): void {
  }


}
