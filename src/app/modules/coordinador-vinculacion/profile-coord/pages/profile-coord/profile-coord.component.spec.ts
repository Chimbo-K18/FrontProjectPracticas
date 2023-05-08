import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCoordComponent } from './profile-coord.component';

describe('ProfileCoordComponent', () => {
  let component: ProfileCoordComponent;
  let fixture: ComponentFixture<ProfileCoordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCoordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
