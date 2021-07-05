import { Component, OnInit, OnDestroy } from '@angular/core';
import { QueryPatient } from '../../../query-patient.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  paciente : any
  $qp : Subscription
  constructor(private _queryPatient:QueryPatient) { }

  cita = {
    appointment:'Presencial',
    patient:'CARLOS Daniel CARDONA',
    professional:'Daniel tamayo',
    day:'Miercoles 37 de julio',
    hour:'A las 7 de la tarde',
    location:'IPS Carlos',
    direction:'Calle 23 #123',
    cuota:'4.500'
  }
  
  ngOnInit(): void {
    this.$qp = this._queryPatient.patient.subscribe(r => {this.paciente = r.paciente
    console.log(r,'siiiiiiiii');
    
    })
  }

  OnDestroy(){
    this.$qp.unsubscribe();
  }

}
