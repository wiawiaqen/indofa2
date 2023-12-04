import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPwComponent } from './forgot-pw.component';

describe('ForgotPwComponent', () => {
  let component: ForgotPwComponent;
  let fixture: ComponentFixture<ForgotPwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPwComponent]
    });
    fixture = TestBed.createComponent(ForgotPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
