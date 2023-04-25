import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoordVinculacionComponent } from './register-coord-vinculacion.component';

describe('RegisterCoordVinculacionComponent', () => {
  let component: RegisterCoordVinculacionComponent;
  let fixture: ComponentFixture<RegisterCoordVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCoordVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoordVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
