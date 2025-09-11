import { Component, OnInit } from '@angular/core';
import {HeaderButtonDisplayOptions} from "../models/header-button-display-options";

@Component({
  selector: 'app-cart-display-page',
  templateUrl: './cart-display-page.component.html',
  styleUrls: ['./cart-display-page.component.css']
})
export class CartDisplayPageComponent implements OnInit {
  headerButtonDisplayOptions:HeaderButtonDisplayOptions;

  constructor() {
    this.headerButtonDisplayOptions = new HeaderButtonDisplayOptions(true,false,false);
  }

  ngOnInit(): void {
  }


}
