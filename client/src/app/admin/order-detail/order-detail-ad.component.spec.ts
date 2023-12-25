import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailAdComponent } from './order-detail-ad.component';

describe('OrderDetailAdComponent', () => {
  let component: OrderDetailAdComponent;
  let fixture: ComponentFixture<OrderDetailAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailAdComponent]
    });
    fixture = TestBed.createComponent(OrderDetailAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
