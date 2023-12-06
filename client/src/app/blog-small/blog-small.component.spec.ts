import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSmallComponent } from './blog-small.component';

describe('BlogSmallComponent', () => {
  let component: BlogSmallComponent;
  let fixture: ComponentFixture<BlogSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSmallComponent]
    });
    fixture = TestBed.createComponent(BlogSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
