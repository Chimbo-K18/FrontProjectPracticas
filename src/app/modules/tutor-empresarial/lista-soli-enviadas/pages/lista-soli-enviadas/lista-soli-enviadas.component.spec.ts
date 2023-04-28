import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSoliEnviadasComponent } from './lista-soli-enviadas.component';

describe('ListaSoliEnviadasComponent', () => {
  let component: ListaSoliEnviadasComponent;
  let fixture: ComponentFixture<ListaSoliEnviadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSoliEnviadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSoliEnviadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
