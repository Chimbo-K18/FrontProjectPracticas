import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmpresarialComponent } from './profile-empresarial.component';

describe('ProfileEmpresarialComponent', () => {
  let component: ProfileEmpresarialComponent;
  let fixture: ComponentFixture<ProfileEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
