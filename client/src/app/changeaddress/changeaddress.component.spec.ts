import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeaddressComponent } from './changeaddress.component';

describe('ChangeaddressComponent', () => {
  let component: ChangeaddressComponent;
  let fixture: ComponentFixture<ChangeaddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeaddressComponent]
    });
    fixture = TestBed.createComponent(ChangeaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
