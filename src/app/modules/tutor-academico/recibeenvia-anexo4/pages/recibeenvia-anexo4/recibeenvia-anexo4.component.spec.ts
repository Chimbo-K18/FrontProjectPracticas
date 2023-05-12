import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeenviaAnexo4Component } from './recibeenvia-anexo4.component';

describe('RecibeenviaAnexo4Component', () => {
  let component: RecibeenviaAnexo4Component;
  let fixture: ComponentFixture<RecibeenviaAnexo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeenviaAnexo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibeenviaAnexo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
