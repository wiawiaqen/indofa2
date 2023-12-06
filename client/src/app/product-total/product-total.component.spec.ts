import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTotalComponent } from './product-total.component';

describe('ProductTotalComponent', () => {
  let component: ProductTotalComponent;
  let fixture: ComponentFixture<ProductTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTotalComponent]
    });
    fixture = TestBed.createComponent(ProductTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
