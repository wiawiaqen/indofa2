import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermspolicyLeftMenuComponent } from './termspolicy-left-menu.component';

describe('TermspolicyLeftMenuComponent', () => {
  let component: TermspolicyLeftMenuComponent;
  let fixture: ComponentFixture<TermspolicyLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermspolicyLeftMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermspolicyLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
