import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuscommentComponent } from './aboutuscomment.component';

describe('AboutuscommentComponent', () => {
  let component: AboutuscommentComponent;
  let fixture: ComponentFixture<AboutuscommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutuscommentComponent]
    });
    fixture = TestBed.createComponent(AboutuscommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
