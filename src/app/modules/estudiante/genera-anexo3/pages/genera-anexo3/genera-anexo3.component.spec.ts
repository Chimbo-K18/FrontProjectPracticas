import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraAnexo3Component } from './genera-anexo3.component';

describe('GeneraAnexo3Component', () => {
  let component: GeneraAnexo3Component;
  let fixture: ComponentFixture<GeneraAnexo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraAnexo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraAnexo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
