import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSoliRecibidasComponent } from './lista-soli-recibidas.component';

describe('ListaSoliRecibidasComponent', () => {
  let component: ListaSoliRecibidasComponent;
  let fixture: ComponentFixture<ListaSoliRecibidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSoliRecibidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSoliRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
