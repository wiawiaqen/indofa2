import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsRealComponent } from './about-us-real.component';

describe('AboutUsRealComponent', () => {
  let component: AboutUsRealComponent;
  let fixture: ComponentFixture<AboutUsRealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsRealComponent]
    });
    fixture = TestBed.createComponent(AboutUsRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
