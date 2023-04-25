import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBienvenidaComponent } from './welcome-bienvenida.component';

describe('WelcomeBienvenidaComponent', () => {
  let component: WelcomeBienvenidaComponent;
  let fixture: ComponentFixture<WelcomeBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeBienvenidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
