import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterConvenioComponent } from './register-convenio.component';

describe('RegisterConvenioComponent', () => {
  let component: RegisterConvenioComponent;
  let fixture: ComponentFixture<RegisterConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterConvenioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
