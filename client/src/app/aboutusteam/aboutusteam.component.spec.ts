import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusteamComponent } from './aboutusteam.component';

describe('AboutusteamComponent', () => {
  let component: AboutusteamComponent;
  let fixture: ComponentFixture<AboutusteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusteamComponent]
    });
    fixture = TestBed.createComponent(AboutusteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
