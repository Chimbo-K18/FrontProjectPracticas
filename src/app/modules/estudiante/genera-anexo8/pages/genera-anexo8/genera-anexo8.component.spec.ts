import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraAnexo8Component } from './genera-anexo8.component';

describe('GeneraAnexo8Component', () => {
  let component: GeneraAnexo8Component;
  let fixture: ComponentFixture<GeneraAnexo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraAnexo8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraAnexo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
