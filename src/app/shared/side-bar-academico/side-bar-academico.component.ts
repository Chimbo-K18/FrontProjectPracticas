import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-academico',
  templateUrl: './side-bar-academico.component.html',
  styleUrls: ['./side-bar-academico.component.css']
})
export class SideBarAcademicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem = "";
  selectItem(item: string): void {
    this.selectedItem = item;
  }

}
