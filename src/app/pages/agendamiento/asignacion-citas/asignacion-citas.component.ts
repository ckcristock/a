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


  citas :any = [
   
  ]

  changeTramite(type){
    console.log('ischan',type);
    
    this.operation = type;
    if(type=='Reasignar Citas'){
      //buscar citas by paciente
      this.citas =  [{ Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },
      { Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },
      { Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },]
    }  
  }

  getCitas

}
