import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCoordComponent } from './lista-coord.component';

describe('ListaCoordComponent', () => {
  let component: ListaCoordComponent;
  let fixture: ComponentFixture<ListaCoordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCoordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
