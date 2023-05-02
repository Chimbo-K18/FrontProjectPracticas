import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeEmpresarialComponent } from './welcome-empresarial.component';

describe('WelcomeEmpresarialComponent', () => {
  let component: WelcomeEmpresarialComponent;
  let fixture: ComponentFixture<WelcomeEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
