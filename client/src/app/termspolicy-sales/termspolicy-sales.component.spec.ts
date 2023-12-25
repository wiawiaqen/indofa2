import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermspolicySalesComponent } from './termspolicy-sales.component';

describe('TermspolicySalesComponent', () => {
  let component: TermspolicySalesComponent;
  let fixture: ComponentFixture<TermspolicySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermspolicySalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermspolicySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
