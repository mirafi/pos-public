import { Component, OnInit } from '@angular/core';
import {OrderService} from "../services/orders.service";
import { Router } from '@angular/router';
import {HeaderButtonDisplayOptions} from "../models/header-button-display-options";

@Component({
  selector: 'app-start-order-page',
  templateUrl: './start-order-page.component.html',
  styleUrls: ['./start-order-page.component.css']
})
export class StartOrderPageComponent implements OnInit {
  displayOption:HeaderButtonDisplayOptions = new HeaderButtonDisplayOptions(false,false,false);
  constructor(private orders:OrderService, private router: Router) { }

  ngOnInit(): void {
  }
  startOrder(){
    this.orders.addOrder()
    this.router.navigate(['/category']).then(r => true);
  }
}
