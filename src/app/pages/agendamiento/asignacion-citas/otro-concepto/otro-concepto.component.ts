import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-otro-concepto',
  templateUrl: './otro-concepto.component.html',
  styleUrls: ['./otro-concepto.component.scss']
})
export class OtroConceptoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(form:NgForm){
    console.log(form);
    
  }

}
