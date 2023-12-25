import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserAddressComponent } from './new-user-address.component';

describe('NewUserAddressComponent', () => {
  let component: NewUserAddressComponent;
  let fixture: ComponentFixture<NewUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewUserAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
