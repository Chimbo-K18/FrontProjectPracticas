import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAcademicoComponent } from './profile-academico.component';

describe('ProfileAcademicoComponent', () => {
  let component: ProfileAcademicoComponent;
  let fixture: ComponentFixture<ProfileAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
