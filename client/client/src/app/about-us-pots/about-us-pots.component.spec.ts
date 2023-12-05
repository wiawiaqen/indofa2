import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPotsComponent } from './about-us-pots.component';

describe('AboutUsPotsComponent', () => {
  let component: AboutUsPotsComponent;
  let fixture: ComponentFixture<AboutUsPotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsPotsComponent]
    });
    fixture = TestBed.createComponent(AboutUsPotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
