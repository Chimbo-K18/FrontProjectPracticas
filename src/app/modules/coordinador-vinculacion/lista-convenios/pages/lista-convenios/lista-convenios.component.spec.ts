import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConveniosComponent } from './lista-convenios.component';

describe('ListaConveniosComponent', () => {
  let component: ListaConveniosComponent;
  let fixture: ComponentFixture<ListaConveniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConveniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
