import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QueryPatient } from '../../query-patient.service';

@Component({
  selector: 'app-tipificacion',
  templateUrl: './tipificacion.component.html',
  styleUrls: ['./tipificacion.component.scss']
})
export class TipificacionComponent implements OnInit {
  //@Output('tramite') tramite = new EventEmitter();
  @Input() tramitex: any;
  data: any = {
    Id_Llamada: '',
    Id_Funcionario: '',
    Fecha: '',
    Id_Paciente: '',
    Id_Tramite: '',
    Id_Ambito: '',
    Id_Tipo_Servicio: '',
    Id_Tipificacion: '',
  }
  tramiteSelected = {
    Nombre: '', Id: '', componente: ''
  }

  typesDocuments: Array<any> = [
    { Nombre: 'CI', Id: '1' },
    { Nombre: 'CC', Id: '2' },
    { Nombre: 'CC', Id: '2' },
  ]
  ambitos: Array<any> = [
    { Nombre: 'Centro Especialista', Id: '1' },
    { Nombre: 'Hospitalización', Id: '2' },
    { Nombre: 'Urgencias', Id: '3' },
    { Nombre: 'Domicilio', Id: '4' },
  ]
  tipoServicios: Array<any> = [
    { Nombre: 'Consulta Especializada', Id: '1' },
    { Nombre: 'Eco Cardiograma', Id: '2' },
    { Nombre: 'Terapias Físicas', Id: '3' },
    { Nombre: 'Procedimientos Diagnósticos', Id: '4' },
  ]
  tramites: Array<any> = [
    { Nombre: 'Cita Primera Vez', Id: '1', componente: 'Asignar Citas' },
    { Nombre: 'Cita Control', Id: '2', componente: 'Asignar Citas' },
    { Nombre: 'Reasignación de Citas', Id: '3', componente: 'Reasignar Citas' },
    { Nombre: 'Cancelación de Citas', Id: '4', componente: 'Reasignar Citas' },
    { Nombre: 'Consulta Información Citas', Id: '5', componente: 'Reasignar Citas' },
    { Nombre: 'Otros', Id: '6', componente: 'Tipificar' },

  ]

  public obsPatient;
  constructor(private _qp: QueryPatient) {
    this.obsPatient = _qp.patient.subscribe((r) => {
      if (r.llamada.Tipo_Tramite) {
        this.data.Id_Tramite = r.llamada.Tipo_Tramite;
        this.data.Id_Ambito = r.llamada.Ambito;
        this.data.Id_Tipo_Servicio = r.llamada.Tipo_Servicio;
        console.log(r.llamada,'llamada');
        
        this.tramiteWasChanged();
      }
    })
  }

  ngOnInit(): void {
  }

  tramiteWasChanged() {
    let tramite = this.tramites.find(e => e.Id == this.data.Id_Tramite)
    this.tramiteSelected = tramite;
    this.data.Id_Ambito = tramite.componente == 'Reasignar Citas' ? '' : this.data.Id_Ambito
    this.data.Id_Tipo_Servicio = tramite.componente == 'Reasignar Citas' ? '' : this.data.Id_Tipo_Servicio
    //this.tramite.emit(tramite)
    this._qp.tramiteSelected.next(tramite);

  }

  tramiteWasChanged2() {
    let tramite = this.tramites.find(e => e.Id == 6)
    this.tramiteSelected = tramite;
    this.data.Id_Ambito = tramite.componente == 'Asignar Citas' ? '' : this.data.Id_Ambito
    this.data.Id_Tipo_Servicio = tramite.componente == 'Asignar Citas' ? '' : this.data.Id_Tipo_Servicio
    //this.tramite.emit(tramite)
  }

}
