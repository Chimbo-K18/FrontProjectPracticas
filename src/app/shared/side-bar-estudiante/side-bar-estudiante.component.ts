import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-estudiante',
  templateUrl: './side-bar-estudiante.component.html',
  styleUrls: ['./side-bar-estudiante.component.css']
})
export class SideBarEstudianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem = "";
  selectItem(item: string): void {
    this.selectedItem = item;
  }
}
