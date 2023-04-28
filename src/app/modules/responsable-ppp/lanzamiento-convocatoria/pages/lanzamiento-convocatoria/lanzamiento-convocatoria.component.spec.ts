import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientoConvocatoriaComponent } from './lanzamiento-convocatoria.component';

describe('LanzamientoConvocatoriaComponent', () => {
  let component: LanzamientoConvocatoriaComponent;
  let fixture: ComponentFixture<LanzamientoConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanzamientoConvocatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanzamientoConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
