import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAnexo7Component } from './recibe-anexo7.component';

describe('RecibeAnexo7Component', () => {
  let component: RecibeAnexo7Component;
  let fixture: ComponentFixture<RecibeAnexo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAnexo7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeAnexo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
