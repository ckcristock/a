import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {
  @Input('modalData') modalData: EventEmitter<any>;
  @ViewChild('ModalPayment') ModalPayment: any;
  cuota: number = 0;
  recaudo : any = {
    cuota : 0,
    causal : '',
    appointment_id : ''
  }
  causales : any = [
    {
      value : '1',
      name : 'No quiso Pagar'
    },
    {
      value : '1',
      name : 'Poblacion Vulnerable'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.modalData.subscribe(d => {
      this.recaudo.id=d.Id_Cita_Recaudo;
      this.recaudo.cuota=d.cuota;
      this.cuota=d.cuota;
      d.Show ? this.ModalPayment.show() : this.ModalPayment.hide()
    })
  }
  realizarRecaudo(){
    const SwalMsje = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    SwalMsje.fire({
      title: '¿está seguro?',
      html: "Se dispone a guardar la cuota moderadora: <br><strong>$ "+this.recaudo.cuota+"</strong>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, ¡Recaudar!',
      cancelButtonText: 'No, ¡déjeme comprobar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.ModalPayment.hide();
        SwalMsje.fire(
          'Cuota Recaudada',
          'La cuota/copago fue recaudada correctamente!',
          'success'
        )

      }
    })
  }
  

}
