import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAuthComponent } from './welcome-auth.component';

describe('WelcomeAuthComponent', () => {
  let component: WelcomeAuthComponent;
  let fixture: ComponentFixture<WelcomeAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
