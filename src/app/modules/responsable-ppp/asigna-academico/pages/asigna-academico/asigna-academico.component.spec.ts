import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaAcademicoComponent } from './asigna-academico.component';

describe('AsignaAcademicoComponent', () => {
  let component: AsignaAcademicoComponent;
  let fixture: ComponentFixture<AsignaAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
