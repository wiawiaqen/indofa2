import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryContainerComponent } from './product-category-container.component';

describe('ProductCategoryContainerComponent', () => {
  let component: ProductCategoryContainerComponent;
  let fixture: ComponentFixture<ProductCategoryContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryContainerComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
