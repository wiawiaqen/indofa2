import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusreviewComponent } from './aboutusreview.component';

describe('AboutusreviewComponent', () => {
  let component: AboutusreviewComponent;
  let fixture: ComponentFixture<AboutusreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusreviewComponent]
    });
    fixture = TestBed.createComponent(AboutusreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
