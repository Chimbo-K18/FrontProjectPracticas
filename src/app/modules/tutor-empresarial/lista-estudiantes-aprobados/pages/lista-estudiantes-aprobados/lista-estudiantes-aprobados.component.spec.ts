import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiantesAprobadosComponent } from './lista-estudiantes-aprobados.component';

describe('ListaEstudiantesAprobadosComponent', () => {
  let component: ListaEstudiantesAprobadosComponent;
  let fixture: ComponentFixture<ListaEstudiantesAprobadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudiantesAprobadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstudiantesAprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
