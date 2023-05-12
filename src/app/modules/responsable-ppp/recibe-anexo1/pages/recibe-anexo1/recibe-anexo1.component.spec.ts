import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAnexo1Component } from './recibe-anexo1.component';

describe('RecibeAnexo1Component', () => {
  let component: RecibeAnexo1Component;
  let fixture: ComponentFixture<RecibeAnexo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAnexo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeAnexo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
