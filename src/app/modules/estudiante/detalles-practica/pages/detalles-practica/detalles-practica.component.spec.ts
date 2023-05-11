import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPracticaComponent } from './detalles-practica.component';

describe('DetallesPracticaComponent', () => {
  let component: DetallesPracticaComponent;
  let fixture: ComponentFixture<DetallesPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
