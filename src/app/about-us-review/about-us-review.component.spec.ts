import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsReviewComponent } from './about-us-review.component';

describe('AboutUsReviewComponent', () => {
  let component: AboutUsReviewComponent;
  let fixture: ComponentFixture<AboutUsReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsReviewComponent]
    });
    fixture = TestBed.createComponent(AboutUsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
