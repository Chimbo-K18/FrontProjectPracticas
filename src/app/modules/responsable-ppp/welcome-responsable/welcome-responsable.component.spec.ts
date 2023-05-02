import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeResponsableComponent } from './welcome-responsable.component';

describe('WelcomeResponsableComponent', () => {
  let component: WelcomeResponsableComponent;
  let fixture: ComponentFixture<WelcomeResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
