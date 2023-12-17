import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPwAfterComponent } from './forgot-pw-after.component';

describe('ForgotPwAfterComponent', () => {
  let component: ForgotPwAfterComponent;
  let fixture: ComponentFixture<ForgotPwAfterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPwAfterComponent]
    });
    fixture = TestBed.createComponent(ForgotPwAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
