import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaraprobadosComponent } from './listaraprobados.component';

describe('ListaraprobadosComponent', () => {
  let component: ListaraprobadosComponent;
  let fixture: ComponentFixture<ListaraprobadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaraprobadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaraprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
