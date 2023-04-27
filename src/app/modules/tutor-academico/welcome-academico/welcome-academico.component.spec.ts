import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAcademicoComponent } from './welcome-academico.component';

describe('WelcomeAcademicoComponent', () => {
  let component: WelcomeAcademicoComponent;
  let fixture: ComponentFixture<WelcomeAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
