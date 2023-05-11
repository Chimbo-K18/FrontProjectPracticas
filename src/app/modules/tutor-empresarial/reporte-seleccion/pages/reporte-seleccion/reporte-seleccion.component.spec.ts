import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSeleccionComponent } from './reporte-seleccion.component';

describe('ReporteSeleccionComponent', () => {
  let component: ReporteSeleccionComponent;
  let fixture: ComponentFixture<ReporteSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteSeleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
