import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionEstudiantesComponent } from './aprobacion-estudiantes.component';

describe('AprobacionEstudiantesComponent', () => {
  let component: AprobacionEstudiantesComponent;
  let fixture: ComponentFixture<AprobacionEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobacionEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
