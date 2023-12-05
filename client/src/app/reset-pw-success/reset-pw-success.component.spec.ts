import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPwSuccessComponent } from './reset-pw-success.component';

describe('ResetPwSuccessComponent', () => {
  let component: ResetPwSuccessComponent;
  let fixture: ComponentFixture<ResetPwSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPwSuccessComponent]
    });
    fixture = TestBed.createComponent(ResetPwSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
