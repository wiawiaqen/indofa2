import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMemberComponent } from './about-us-member.component';

describe('AboutUsMemberComponent', () => {
  let component: AboutUsMemberComponent;
  let fixture: ComponentFixture<AboutUsMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsMemberComponent]
    });
    fixture = TestBed.createComponent(AboutUsMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
