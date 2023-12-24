import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponvalueComponent } from './couponvalue.component';

describe('CouponvalueComponent', () => {
  let component: CouponvalueComponent;
  let fixture: ComponentFixture<CouponvalueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponvalueComponent]
    });
    fixture = TestBed.createComponent(CouponvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
