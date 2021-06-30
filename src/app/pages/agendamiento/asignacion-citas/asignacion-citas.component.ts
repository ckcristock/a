import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-asignacion-citas',
  templateUrl: './asignacion-citas.component.html',
  styleUrls: ['./asignacion-citas.component.scss']
})
export class AsignacionCitasComponent implements OnInit {
  operation = '';

  
  constructor() { }
  ngOnInit(): void {
  }


  

  changeTramite(type){
    console.log('ischan',type);
    
    this.operation = type;
  }

}
