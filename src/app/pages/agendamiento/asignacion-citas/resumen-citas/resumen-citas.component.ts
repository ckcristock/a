import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resumen-citas',
  templateUrl: './resumen-citas.component.html',
  styleUrls: ['./resumen-citas.component.scss']
})
export class ResumenCitasComponent implements OnInit {
  @ViewChild('modalCita') modalCita: any;
  openModalDetalle = new EventEmitter<any>();
  @Input('citas') citas : Array<any>
  data: any = {
    Id_Especialidad: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  
  detalleCita(cita){
    let  modalDetalle  = {
      Id_Cita_Detalle:cita.id,
      Show:true
    }
    this.openModalDetalle.emit(modalDetalle)
  }

}
