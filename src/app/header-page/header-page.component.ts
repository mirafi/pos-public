import {Component, Input, IterableDiffer, IterableDiffers, OnInit} from '@angular/core';
import {OrderService} from "../services/orders.service";
import {Router} from '@angular/router';
import {BackPageInfo} from "../models/back-page-info";
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {


  currentOrderDisplayText: string
  pendingOrderCount: number
  totalQuantity: number = 0
  totalAmount:number = 0
  private differ : IterableDiffer<any>|undefined
  private cartChangeSubscription : Subscription = Subscription.EMPTY

  @Input("backPageInfo")
  backPageInfo: BackPageInfo | undefined;

  constructor(private orderService: OrderService, private router: Router, private differs: IterableDiffers) {
    if (this.orderService.pendingOrders.length == 0) {
      this.router.navigate(['/start-order']).then(r => true);
    }
    this.currentOrderDisplayText = this.orderService.currentOrder.displayText
    this.pendingOrderCount = this.orderService.pendingOrders.length
    this.totalAmount = this.orderService.getCart().totalAmount()

  }

  ngOnInit(): void {
    this.differ = this.differs.find(this.orderService.getCart().items).create();
    this.cartChangeSubscription = this.orderService.getCart().changeSubscription(cartSummary=>{
      this.totalQuantity = cartSummary.totalQuantity;
      this.totalAmount = cartSummary.totalAmount;
    })
  }
  ngDoCheck(): void {
    let changes =  this.differ?.diff(this.orderService.getCart().items);
     console.log("ngDoCheck changes")

    if(changes!=null){
      console.log("Cart changes")
    }


  }
  ngOnDestroy(): void {
    this.cartChangeSubscription.unsubscribe();
  }

}
