import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDirectorComponent } from './lista-director.component';

describe('ListaDirectorComponent', () => {
  let component: ListaDirectorComponent;
  let fixture: ComponentFixture<ListaDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
