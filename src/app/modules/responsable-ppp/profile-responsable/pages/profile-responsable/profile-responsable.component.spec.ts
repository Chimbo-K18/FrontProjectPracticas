import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileResponsableComponent } from './profile-responsable.component';

describe('ProfileResponsableComponent', () => {
  let component: ProfileResponsableComponent;
  let fixture: ComponentFixture<ProfileResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
