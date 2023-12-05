import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordAfterComponent } from './forgot-password-after.component';

describe('ForgotPasswordAfterComponent', () => {
  let component: ForgotPasswordAfterComponent;
  let fixture: ComponentFixture<ForgotPasswordAfterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordAfterComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
