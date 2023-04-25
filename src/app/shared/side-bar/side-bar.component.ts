import { Component, OnInit } from '@angular/core';
import $ from "jquery";
// const $ = require('jquery');

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  ngOnInit(): void {
    $(document).ready(() => {
      $("#showmenu").click((e) => {
        e.preventDefault();
        $("#menu").toggleClass("show");
      });
      $("#menu a").click((event) => {
        event.preventDefault();
        if($(event.target).next('ul').length){
          $(event.target).next().toggle('fast');
          $(event.target).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
        }
      });
    });
  }
}
