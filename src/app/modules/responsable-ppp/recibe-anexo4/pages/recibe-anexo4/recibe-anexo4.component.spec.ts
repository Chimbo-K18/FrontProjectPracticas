import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAnexo4Component } from './recibe-anexo4.component';

describe('RecibeAnexo4Component', () => {
  let component: RecibeAnexo4Component;
  let fixture: ComponentFixture<RecibeAnexo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAnexo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeAnexo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
