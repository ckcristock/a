import { Component, OnInit } from '@angular/core';
import { LAYOUT_HORIZONTAL } from './layouts.model';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // layout related config
  layoutType =  LAYOUT_HORIZONTAL;

  constructor() { }

  ngOnInit() {

  }
 

 

}
