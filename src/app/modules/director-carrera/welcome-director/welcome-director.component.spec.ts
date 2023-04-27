import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDirectorComponent } from './welcome-director.component';

describe('WelcomeDirectorComponent', () => {
  let component: WelcomeDirectorComponent;
  let fixture: ComponentFixture<WelcomeDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
