import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentproductsComponent } from './paymentproducts.component';

describe('PaymentproductsComponent', () => {
  let component: PaymentproductsComponent;
  let fixture: ComponentFixture<PaymentproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentproductsComponent]
    });
    fixture = TestBed.createComponent(PaymentproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
