import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioSolicitudComponent } from './envio-solicitud.component';

describe('EnvioSolicitudComponent', () => {
  let component: EnvioSolicitudComponent;
  let fixture: ComponentFixture<EnvioSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
