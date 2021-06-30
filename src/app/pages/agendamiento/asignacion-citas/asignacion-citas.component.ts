import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignacion-citas',
  templateUrl: './asignacion-citas.component.html',
  styleUrls: ['./asignacion-citas.component.scss']
})
export class AsignacionCitasComponent implements OnInit {
  operation = 'asignar';

  constructor() { }
  ngOnInit(): void {
  }

  show(type){
    this.operation = type;
  }

}
