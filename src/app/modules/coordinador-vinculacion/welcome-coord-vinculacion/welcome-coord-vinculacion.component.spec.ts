import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCoordVinculacionComponent } from './welcome-coord-vinculacion.component';

describe('WelcomeCoordVinculacionComponent', () => {
  let component: WelcomeCoordVinculacionComponent;
  let fixture: ComponentFixture<WelcomeCoordVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeCoordVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCoordVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
