import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolConvocatoriasComponent } from './lista-sol-convocatorias.component';

describe('ListaSolConvocatoriasComponent', () => {
  let component: ListaSolConvocatoriasComponent;
  let fixture: ComponentFixture<ListaSolConvocatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSolConvocatoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
