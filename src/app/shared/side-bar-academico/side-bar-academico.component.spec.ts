import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarAcademicoComponent } from './side-bar-academico.component';

describe('SideBarAcademicoComponent', () => {
  let component: SideBarAcademicoComponent;
  let fixture: ComponentFixture<SideBarAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
