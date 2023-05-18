import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAnexo6Component } from './recibe-anexo6.component';

describe('RecibeAnexo6Component', () => {
  let component: RecibeAnexo6Component;
  let fixture: ComponentFixture<RecibeAnexo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAnexo6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeAnexo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
