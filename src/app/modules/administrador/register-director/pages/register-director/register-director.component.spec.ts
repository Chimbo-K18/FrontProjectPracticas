import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDirectorComponent } from './register-director.component';

describe('RegisterDirectorComponent', () => {
  let component: RegisterDirectorComponent;
  let fixture: ComponentFixture<RegisterDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
