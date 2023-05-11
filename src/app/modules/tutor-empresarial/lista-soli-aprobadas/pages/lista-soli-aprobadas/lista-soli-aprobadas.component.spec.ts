import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSoliAprobadasComponent } from './lista-soli-aprobadas.component';

describe('ListaSoliAprobadasComponent', () => {
  let component: ListaSoliAprobadasComponent;
  let fixture: ComponentFixture<ListaSoliAprobadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSoliAprobadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSoliAprobadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
