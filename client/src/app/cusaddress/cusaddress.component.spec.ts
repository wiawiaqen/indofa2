import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusaddressComponent } from './cusaddress.component';

describe('CusaddressComponent', () => {
  let component: CusaddressComponent;
  let fixture: ComponentFixture<CusaddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CusaddressComponent]
    });
    fixture = TestBed.createComponent(CusaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
