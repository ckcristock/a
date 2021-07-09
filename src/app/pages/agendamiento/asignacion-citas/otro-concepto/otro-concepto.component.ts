import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipificationService } from '../../../../core/services/tipification.service';

@Component({
  selector: 'app-otro-concepto',
  templateUrl: './otro-concepto.component.html',
  styleUrls: ['./otro-concepto.component.scss']
})
export class OtroConceptoComponent implements OnInit {

  constructor(private _tipification : TipificationService) { }

  ngOnInit(): void {
    
  }

  save(form:NgForm){
    console.log(form);
    
  }

}
