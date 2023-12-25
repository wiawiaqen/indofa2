import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldUserAddressComponent } from './old-user-address.component';

describe('OldUserAddressComponent', () => {
  let component: OldUserAddressComponent;
  let fixture: ComponentFixture<OldUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OldUserAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
