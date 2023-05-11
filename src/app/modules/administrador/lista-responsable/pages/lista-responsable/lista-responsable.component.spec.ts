import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResponsableComponent } from './lista-responsable.component';

describe('ListaResponsableComponent', () => {
  let component: ListaResponsableComponent;
  let fixture: ComponentFixture<ListaResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
