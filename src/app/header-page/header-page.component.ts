import {Component, Input, OnInit} from '@angular/core';
import {Orders} from "../services/orders.service";
import {Router} from '@angular/router';
import {BackPageInfo} from "../models/back-page-info";

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {


  currentOrderDisplayText: string
  pendingOrderCount: number;

  @Input("backPageInfo")
  backPageInfo: BackPageInfo | undefined;

  constructor(private orders: Orders, private router: Router) {
    if (this.orders.pendingOrders.length == 0) {
      this.router.navigate(['/start-order']).then(r => true);
    }
    this.currentOrderDisplayText = this.orders.currentOrder.displayText
    this.pendingOrderCount = this.orders.pendingOrders.length
  }

  ngOnInit(): void {
  }

}
