import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-director',
  templateUrl: './side-bar-director.component.html',
  styleUrls: ['./side-bar-director.component.css']
})
export class SideBarDirectorComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  selectedItem = "";
  selectItem(item: string): void {
    this.selectedItem = item;
  }

}
