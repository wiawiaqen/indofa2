import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermspolicyShippingComponent } from './termspolicy-shipping.component';

describe('TermspolicyShippingComponent', () => {
  let component: TermspolicyShippingComponent;
  let fixture: ComponentFixture<TermspolicyShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermspolicyShippingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermspolicyShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
