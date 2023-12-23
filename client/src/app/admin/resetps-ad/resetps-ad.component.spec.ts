import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpsAdComponent } from './resetps-ad.component';

describe('ResetpsAdComponent', () => {
  let component: ResetpsAdComponent;
  let fixture: ComponentFixture<ResetpsAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetpsAdComponent]
    });
    fixture = TestBed.createComponent(ResetpsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
