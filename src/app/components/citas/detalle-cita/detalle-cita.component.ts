import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.scss']
})
export class DetalleCitaComponent implements OnInit {
  @Input('modalData') modalData: EventEmitter<any>;
  @ViewChild('detalleCitaModal') detalleCitaModal: any;
  cita: {

  }

  findCita: any = {
    Fecha_Programacion: '',
    Fecha_Cita: '',
    Doctor: '',
    Tramite: '',
    Tipo_Consulta: '',
    Tipo_Agenda: '',
    Ips: '',
    Sede: '',
    Especialidad: '',
    Observacion: '',
    Cuota: '',

    paciente: {
      Nombres: '',
      Apellidos: '',
      Eps:'',
      Ips:'',
      Tipo_Identificacion : '',
      Identificacion:'',
      Estado:''

    }
  }
  constructor() {

  }

  ngOnInit(): void {
    this.modalData.subscribe(d => {
      d.Show ? this.detalleCitaModal.show() : this.detalleCitaModal.hide()
      this.getCita()
    })
  }
  getCita() {
    //http consulta
    //buscar cita
    this.findCita = {
      Fecha_Programacion: '2020-01-01 15:30:00',
      Fecha_Cita: '2020-01-01 15:30:00',
      Doctor: 'Daniel Tamayo',
      Tramite: 'Tramite',
      Tipo_Consulta: 'Especializada',
      Tipo_Agenda: 'General',
      Ips: 'IPS especial',
      Sede: 'Florida Blanca',
      Especialidad: 'Muy Especial',
      Observacion: 'Excelente paciente Excelente pacienteExcelente pacienteExcelente pacienteExcelente pacienteExcelente',
      Cuota: '55000',

      paciente: {
        Nombres: 'Jhoe ',
        Apellidos: 'Doe',
        Eps:'Nueva Eps',
        Ips:'Nueva Ips',
        Tipo_Identificacion : 'CC',
        Identificacion:'1234455464',
        Estado:'Activo'
      }
    }
  }
}
