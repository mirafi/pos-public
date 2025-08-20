import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartOrderPageComponent } from './start-order-page.component';

describe('StartOrderPageComponent', () => {
  let component: StartOrderPageComponent;
  let fixture: ComponentFixture<StartOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
