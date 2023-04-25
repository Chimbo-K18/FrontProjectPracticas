import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterResponsableComponent } from './register-responsable.component';

describe('RegisterResponsableComponent', () => {
  let component: RegisterResponsableComponent;
  let fixture: ComponentFixture<RegisterResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
