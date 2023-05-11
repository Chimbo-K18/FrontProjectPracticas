import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaEspecificoComponent } from './asigna-especifico.component';

describe('AsignaEspecificoComponent', () => {
  let component: AsignaEspecificoComponent;
  let fixture: ComponentFixture<AsignaEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaEspecificoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
