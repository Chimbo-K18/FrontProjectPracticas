import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarResponsableComponent } from './side-bar-responsable.component';

describe('SideBarResponsableComponent', () => {
  let component: SideBarResponsableComponent;
  let fixture: ComponentFixture<SideBarResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
