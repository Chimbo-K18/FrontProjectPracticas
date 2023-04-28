import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTutEmpresarialComponent } from './registro-tut-empresarial.component';

describe('RegistroTutEmpresarialComponent', () => {
  let component: RegistroTutEmpresarialComponent;
  let fixture: ComponentFixture<RegistroTutEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTutEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTutEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
