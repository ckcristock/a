import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { AppointmentService } from '../../../core/services/appointment.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss']
})
export class ListaCitasComponent implements OnInit {
  @ViewChild('cancelarCitaModal') cancelarCitaModal: any;
  @Input('canOverride') canOverride: any;
  @Input('citas') citas: Array<any>
  @Input('test') test: any = ''
  @Output('canceled') canceled = new EventEmitter<any>();
  openModalDetalle = new EventEmitter<any>();

  data: any = {
    Id_Especialidad: '',
  }
  cancelCita: any;
  constructor(private _appointment: AppointmentService) { }

  ngOnInit(): void {
  }

  cancelarCita(form: NgForm) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: '¿está seguro?',
      text: "Se dispone a Cancelar una cita",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, ¡cancelar !',
      cancelButtonText: 'No, ¡dejeme comprobar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        //api para cancelar
        this._appointment.cancelAppointment(this.cancelCita.id, form.value).subscribe(ok => {
          swalWithBootstrapButtons.fire(
            'Operación exitosa',
            'Cita cancelada exitosamente',
            'success'
          ).then(r => this.canceled.emit());
          this.cancelarCitaModal.hide();
        },
          err => {
            swalWithBootstrapButtons.fire(
              'Operación denegada',
              'Ha ocurrido un error',
              'error'
            )
            this.cancelarCitaModal.hide();

          })

      }
    })
  }

  openCancelCita(cita) {
    this.cancelCita = cita;
    this.cancelarCitaModal.show()
  }
  detalleCita(cita) {
    let modalDetalle = {
      Id_Cita_Detalle: cita.id,
      Show: true
    }

    this.openModalDetalle.emit(modalDetalle)
  }

  finish() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: '¿está seguro?',
      text: "Se dispone a finalizar la llamada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, finalizar !',
      cancelButtonText: 'No, ¡dejeme comprobar!',
      reverseButtons: true
    }).then(r => this.canceled.emit())
  }

}
