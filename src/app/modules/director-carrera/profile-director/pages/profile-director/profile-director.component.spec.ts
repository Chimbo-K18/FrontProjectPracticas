import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDirectorComponent } from './profile-director.component';

describe('ProfileDirectorComponent', () => {
  let component: ProfileDirectorComponent;
  let fixture: ComponentFixture<ProfileDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
