import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDisplayPageComponent } from './cart-display-page.component';

describe('CartDisplayPageComponent', () => {
  let component: CartDisplayPageComponent;
  let fixture: ComponentFixture<CartDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDisplayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
