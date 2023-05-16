import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraAnexo5Component } from './genera-anexo5.component';

describe('GeneraAnexo5Component', () => {
  let component: GeneraAnexo5Component;
  let fixture: ComponentFixture<GeneraAnexo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraAnexo5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraAnexo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
