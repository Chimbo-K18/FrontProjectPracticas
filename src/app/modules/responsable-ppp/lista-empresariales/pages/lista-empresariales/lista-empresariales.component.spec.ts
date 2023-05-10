import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpresarialesComponent } from './lista-empresariales.component';

describe('ListaEmpresarialesComponent', () => {
  let component: ListaEmpresarialesComponent;
  let fixture: ComponentFixture<ListaEmpresarialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEmpresarialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmpresarialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
