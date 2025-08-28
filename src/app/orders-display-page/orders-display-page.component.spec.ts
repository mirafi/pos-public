import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDisplayPageComponent } from './orders-display-page.component';

describe('OrdersDisplayPageComponent', () => {
  let component: OrdersDisplayPageComponent;
  let fixture: ComponentFixture<OrdersDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDisplayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
