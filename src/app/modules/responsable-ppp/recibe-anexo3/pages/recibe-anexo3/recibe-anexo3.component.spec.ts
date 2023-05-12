import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAnexo3Component } from './recibe-anexo3.component';

describe('RecibeAnexo3Component', () => {
  let component: RecibeAnexo3Component;
  let fixture: ComponentFixture<RecibeAnexo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAnexo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeAnexo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
