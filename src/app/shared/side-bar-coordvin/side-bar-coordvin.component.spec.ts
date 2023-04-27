import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarCoordvinComponent } from './side-bar-coordvin.component';

describe('SideBarCoordvinComponent', () => {
  let component: SideBarCoordvinComponent;
  let fixture: ComponentFixture<SideBarCoordvinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarCoordvinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarCoordvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
