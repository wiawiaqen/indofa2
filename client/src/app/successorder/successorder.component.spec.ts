import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessorderComponent } from './successorder.component';

describe('SuccessorderComponent', () => {
  let component: SuccessorderComponent;
  let fixture: ComponentFixture<SuccessorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessorderComponent]
    });
    fixture = TestBed.createComponent(SuccessorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
