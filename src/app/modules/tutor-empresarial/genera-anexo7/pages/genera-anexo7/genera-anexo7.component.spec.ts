import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraAnexo7Component } from './genera-anexo7.component';

describe('GeneraAnexo7Component', () => {
  let component: GeneraAnexo7Component;
  let fixture: ComponentFixture<GeneraAnexo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraAnexo7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraAnexo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
