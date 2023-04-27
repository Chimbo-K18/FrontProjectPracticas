import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarEmpresarialComponent } from './side-bar-empresarial.component';

describe('SideBarEmpresarialComponent', () => {
  let component: SideBarEmpresarialComponent;
  let fixture: ComponentFixture<SideBarEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
