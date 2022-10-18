import { Component, EventEmitter, OnInit } from '@angular/core';
import { ModalPaymentComponent } from 'src/app/components/modal-payment/modal-payment.component';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.component.html',
  styleUrls: ['./recaudos.component.scss'],
  providers: [ModalPaymentComponent]
})
export class RecaudosComponent implements OnInit {
  today= new Date();
  openModalRecaudo = new EventEmitter<any>();
  loading = false;
  citas: Array<any> = [
    // {
    //   face_to_face: true,
    //   type: '',
    //   date: '2021-08-25 14:40:34',
    //   patient: 'JOSE EVENDAÑO 1,125,432,456',
    //   professional: 'DOCTOR DE PRUEBA',
    //   description: 'Esto es una prueba de una cita a un paciente',
    //   eps: 'MEDIMAS EPS',
    //   copago: '3500',
    //   state: 'Recaudado'
    // },
    // {
    //   face_to_face: false,
    //   type: '',
    //   date: '2021-08-26 10:40:34',
    //   patient: 'JOSE EVENDAÑO 1,125,432,456',
    //   professional: 'DOCTOR DE PRUEBA',
    //   description: 'Esto es una prueba de una cita a un paciente',
    //   eps: 'MEDIMAS EPS',
    //   copago: '3500',
    //   state: 'Confirmado'
    // },
    // {
    //   face_to_face: false,
    //   type: '',
    //   date: '2021-08-26 10:40:34',
    //   patient: 'JOSE EVENDAÑO 1,125,432,456',
    //   professional: 'DOCTOR DE PRUEBA',
    //   description: 'Esto es una prueba de una cita a un paciente',
    //   eps: 'MEDIMAS EPS',
    //   copago: '3500',
    //   state: 'Confirmado'
    // },
    // {
    //   face_to_face: false,
    //   type: '',
    //   date: '2021-08-26 10:40:34',
    //   patient: 'JOSE EVENDAÑO 1,125,432,456',
    //   professional: 'DOCTOR DE PRUEBA',
    //   description: 'Esto es una prueba de una cita a un paciente',
    //   eps: 'MEDIMAS EPS',
    //   copago: '3500',
    //   state: 'Confirmado'
    // }
  ];
  startDate = new Date().toISOString().slice(0, 10)
  filters: any = {
    patient: null,
    date: this.startDate,
  }
  pagination = {
    pageSize: 25,
    page: 1,
    collectionSize: 0,
  }

  public appointmentConfirm = 0
  public appointmentCollection = 0
  public appointmentCollectionAll = 0
  jstoday = '';
  
  constructor(private _appointment: AppointmentService, private _modalPayment: ModalPaymentComponent) {
    
   }

  ngOnInit(): void {
    this.searchPatient()
    this.statistics()
    this.activeObservable()
  }

  /**
   * activeObservable
   */
  public activeObservable() {
    this.searchPatient()
    this.statistics()
  }

  public searchPatient(page = 1) {
    this.loading = true;
    this.pagination.page = page;
    let params: any = Object.assign({}, this.pagination, this.filters);
    this._appointment.getAppointmentsPendding(params).subscribe((r: any) => {
      this.citas = r.data.data;
      this.pagination.collectionSize = r.data.total;
      this.loading = false;
    })
  }

  public statistics() {
    this._appointment.getStatistics().subscribe((res: any) => {

      const data = res.data
      this.appointmentConfirm = data.appointmentConfirm
      this.appointmentCollection = data.appointmentCollection
      this.appointmentCollectionAll = data.appointmentCollectionAll

    })
  }

  recaudoCuota(item) {
    let modalDetalle = {
      citaDetail: item,
      Show: true
    }

    this.openModalRecaudo.emit(modalDetalle)
  }

}
