import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresarialDashboardComponent } from './empresarial-dashboard.component';

describe('EmpresarialDashboardComponent', () => {
  let component: EmpresarialDashboardComponent;
  let fixture: ComponentFixture<EmpresarialDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresarialDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresarialDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
