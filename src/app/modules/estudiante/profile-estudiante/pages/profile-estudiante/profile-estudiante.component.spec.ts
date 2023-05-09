import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEstudianteComponent } from './profile-estudiante.component';

describe('ProfileEstudianteComponent', () => {
  let component: ProfileEstudianteComponent;
  let fixture: ComponentFixture<ProfileEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
