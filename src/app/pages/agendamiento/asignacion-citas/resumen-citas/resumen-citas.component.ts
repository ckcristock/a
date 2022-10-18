import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { AppointmentService } from '../../../../core/services/appointment.service';

@Component({
  selector: 'app-resumen-citas',
  templateUrl: './resumen-citas.component.html',
  styleUrls: ['./resumen-citas.component.scss']
})
export class ResumenCitasComponent implements OnInit {
  loading = false;
  @ViewChild('modalCita') modalCita: any;
  openModalDetalle = new EventEmitter<any>();
  //@Input('citas') citas : Array<any>;
  @Input('patient') patient: any = '';
  data: any = {
    Id_Especialidad: '',
  }
  citas : any = []
  constructor(private _appointment : AppointmentService) {
   }


   getCitas() {
    this.loading = true;
    console.log(this.patient);
    this._appointment.getAppointments({ identifier:this.patient }).subscribe((r: any) => {
      this.citas = r.data.data;
      this.loading = false;
    })
  }
  ngOnInit(): void {
    this.getCitas();
  }


  detalleCita(cita){
    let  modalDetalle  = {
      Id_Cita_Detalle:cita.id,
      Show:true
    }
    this.openModalDetalle.emit(modalDetalle)
  }




}
