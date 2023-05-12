import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAnexo2Component } from './recibe-anexo2.component';

describe('RecibeAnexo2Component', () => {
  let component: RecibeAnexo2Component;
  let fixture: ComponentFixture<RecibeAnexo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAnexo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeAnexo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
