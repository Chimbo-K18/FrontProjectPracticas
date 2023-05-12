import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraAnexo2Component } from './genera-anexo2.component';

describe('GeneraAnexo2Component', () => {
  let component: GeneraAnexo2Component;
  let fixture: ComponentFixture<GeneraAnexo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraAnexo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraAnexo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
