import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermspolicySecurityComponent } from './termspolicy-security.component';

describe('TermspolicySecurityComponent', () => {
  let component: TermspolicySecurityComponent;
  let fixture: ComponentFixture<TermspolicySecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermspolicySecurityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermspolicySecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
