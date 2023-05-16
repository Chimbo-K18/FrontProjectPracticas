import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAnexo5Component } from './recibe-anexo5.component';

describe('RecibeAnexo5Component', () => {
  let component: RecibeAnexo5Component;
  let fixture: ComponentFixture<RecibeAnexo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAnexo5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeAnexo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
