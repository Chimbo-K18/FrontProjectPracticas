import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDirectorComponent } from './side-bar-director.component';

describe('SideBarDirectorComponent', () => {
  let component: SideBarDirectorComponent;
  let fixture: ComponentFixture<SideBarDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
