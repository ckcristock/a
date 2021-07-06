import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QueryPatient } from '../../../query-patient.service';
import { Subscription } from 'rxjs';
import { OpenAgendaService } from '../../../open-agenda.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  paciente: any
  $qp: Subscription

  @Input() dataCita: any;


  public cita = {
    agendamiento: {
      appointment: '',
      professional: {
        name: '',
      }
    },
    patient: '',
    day: '',
    hour: '',
  };

  public call = {
    price: ''
  };

  public show = false;

  constructor(private _queryPatient: QueryPatient, private _OpenAgendaService: OpenAgendaService) { }

  ngOnInit(): void {

    // this._queryPatient.cita.subscribe((data) => {
    //   this.cita = data.data.data[0]
    //   this.call = data.data.data[1]
    //   this.show = true;
    // }
    // )

    this.$qp = this._queryPatient.patient.subscribe(r => {
      console.log(r);
      this.paciente = r.paciente

    })
  }

  cleanAll() {
    console.log('deleting');
    this._OpenAgendaService.getClean().subscribe(() => {
    })
    this._queryPatient.existPatient.next();
  }

  OnDestroy() {
    this.$qp.unsubscribe();
  }

}
