import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss']
})
export class ListaCitasComponent implements OnInit {
  @ViewChild('cancelarCitaModal') cancelarCitaModal:any;
  @Input('canOverride') canOverride:any;
  @Input('citas') citas: Array<any>
  openModalDetalle = new EventEmitter<any>();

  data: any = {
    Id_Especialidad: '',
  }
  
  constructor() { 
    
  }
  
  ngOnInit(): void {
    console.log(this.canOverride,'over');
  }

  cancelarCita() {
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
        swalWithBootstrapButtons.fire(
          'Operación exitosa',
          'Cita cancelada exitosamente',
          'success'
        )
        this.cancelarCitaModal.hide();
      }
    })
  }

  detalleCita(cita){
    let  modalDetalle  = {
      Id_Cita_Detalle:cita.Id_Cita,
      Show:true
    }
    this.openModalDetalle.emit(modalDetalle)
  }

  

}
