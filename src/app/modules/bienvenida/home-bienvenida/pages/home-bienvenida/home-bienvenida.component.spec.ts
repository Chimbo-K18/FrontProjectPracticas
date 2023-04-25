import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBienvenidaComponent } from './home-bienvenida.component';

describe('HomeBienvenidaComponent', () => {
  let component: HomeBienvenidaComponent;
  let fixture: ComponentFixture<HomeBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBienvenidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
