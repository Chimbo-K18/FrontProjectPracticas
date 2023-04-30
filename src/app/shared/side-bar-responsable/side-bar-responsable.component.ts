import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-responsable',
  templateUrl: './side-bar-responsable.component.html',
  styleUrls: ['./side-bar-responsable.component.css']
})
export class SideBarResponsableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedItem = "";
  selectItem(item: string): void {
    this.selectedItem = item;
  }
}
