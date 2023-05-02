import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-empresarial',
  templateUrl: './side-bar-empresarial.component.html',
  styleUrls: ['./side-bar-empresarial.component.css']
})
export class SideBarEmpresarialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem = "";
  selectItem(item: string): void {
    this.selectedItem = item;
  }
}
