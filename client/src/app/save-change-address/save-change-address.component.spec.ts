import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveChangeAddressComponent } from './save-change-address.component';

describe('SaveChangeAddressComponent', () => {
  let component: SaveChangeAddressComponent;
  let fixture: ComponentFixture<SaveChangeAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveChangeAddressComponent]
    });
    fixture = TestBed.createComponent(SaveChangeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
