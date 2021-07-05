import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QueryPatient } from '../../../query-patient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  paciente: any
  $qp: Subscription

  @Input() dataCita: any;
  public cita;

  constructor(private _queryPatient: QueryPatient) {
    this.cita = this.dataCita;
  }

  ngOnInit(): void {
    console.log(this.cita);
    this.$qp = this._queryPatient.patient.subscribe(r => {
      this.paciente = r.paciente
      console.log(r, 'siiiiiiiii');

    })
  }

  OnDestroy() {
    this.$qp.unsubscribe();
  }

}
