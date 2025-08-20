import { Component, OnInit } from '@angular/core';
import {Orders} from "../services/orders.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-order-page',
  templateUrl: './start-order-page.component.html',
  styleUrls: ['./start-order-page.component.css']
})
export class StartOrderPageComponent implements OnInit {

  constructor(private orders:Orders,private router: Router) { }

  ngOnInit(): void {
  }
  startOrder(){
    this.orders.addOrder()
    this.router.navigate(['/category']).then(r => true);
  }

}
