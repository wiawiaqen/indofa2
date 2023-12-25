import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartnoproductsComponent } from './cartnoproducts.component';

describe('CartnoproductsComponent', () => {
  let component: CartnoproductsComponent;
  let fixture: ComponentFixture<CartnoproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartnoproductsComponent]
    });
    fixture = TestBed.createComponent(CartnoproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
