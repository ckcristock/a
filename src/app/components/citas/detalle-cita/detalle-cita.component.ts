import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { AppointmentService } from '../../../core/services/appointment.service';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.scss']
})
export class DetalleCitaComponent implements OnInit {
  @Input('modalData') modalData: EventEmitter<any>;
  @ViewChild('detalleCitaModal') detalleCitaModal: any; 
  @ViewChild('add') add: any; 
  appointment_id:string;
  findCita: any = {
    created_at: '',
    price: '',
    opservation: '',
    space: {
      hour_start: '',
      agendamiento: {
        person: { name: '' },
        sub_type_appointment: { name: '' },
        type_appointment: { name: '' },
        company: { name: '' },
        location: { name: '' },
        speciality: { name: '' }
      }
    },
    call_in: {
      formality: { name: '' },
      patient: {
        state:'',
        type_document_id: '',
        identifier: '',
        firstname: '',
        company: { name: '' },
        eps: { name: '' },
      },
    }
  }
  constructor(private _appointment: AppointmentService, private modalBD: ModalService) {

  }

  ngOnInit(): void {
    this.modalData.subscribe(d => {
      this.appointment_id = d.Id_Cita_Detalle
      d.Show ? this.modalBD.openLg(this.add) : this.modalBD.close()
      this.getCita()
    })
  }
  getCita() {
    this._appointment.getAppointment(this.appointment_id).subscribe
    (d => {
      this.findCita = d
    })

  }
}
