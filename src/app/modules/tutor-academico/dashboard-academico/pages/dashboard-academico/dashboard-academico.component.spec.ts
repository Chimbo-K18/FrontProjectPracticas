import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAcademicoComponent } from './dashboard-academico.component';

describe('DashboardAcademicoComponent', () => {
  let component: DashboardAcademicoComponent;
  let fixture: ComponentFixture<DashboardAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
