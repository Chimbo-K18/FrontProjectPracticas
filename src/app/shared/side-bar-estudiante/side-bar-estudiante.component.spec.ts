import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarEstudianteComponent } from './side-bar-estudiante.component';

describe('SideBarEstudianteComponent', () => {
  let component: SideBarEstudianteComponent;
  let fixture: ComponentFixture<SideBarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
