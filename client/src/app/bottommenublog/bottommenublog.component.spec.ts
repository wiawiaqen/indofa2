import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottommenublogComponent } from './bottommenublog.component';

describe('BottommenublogComponent', () => {
  let component: BottommenublogComponent;
  let fixture: ComponentFixture<BottommenublogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottommenublogComponent]
    });
    fixture = TestBed.createComponent(BottommenublogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
