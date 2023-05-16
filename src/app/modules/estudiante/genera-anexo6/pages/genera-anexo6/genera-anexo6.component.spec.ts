import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraAnexo6Component } from './genera-anexo6.component';

describe('GeneraAnexo6Component', () => {
  let component: GeneraAnexo6Component;
  let fixture: ComponentFixture<GeneraAnexo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraAnexo6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraAnexo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
