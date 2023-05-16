import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAnexo8Component } from './recibe-anexo8.component';

describe('RecibeAnexo8Component', () => {
  let component: RecibeAnexo8Component;
  let fixture: ComponentFixture<RecibeAnexo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAnexo8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeAnexo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
