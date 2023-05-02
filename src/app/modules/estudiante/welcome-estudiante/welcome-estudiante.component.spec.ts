import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeEstudianteComponent } from './welcome-estudiante.component';

describe('WelcomeEstudianteComponent', () => {
  let component: WelcomeEstudianteComponent;
  let fixture: ComponentFixture<WelcomeEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
