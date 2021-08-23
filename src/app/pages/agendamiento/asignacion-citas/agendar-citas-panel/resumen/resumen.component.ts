import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QueryPatient } from '../../../query-patient.service';
import { Subscription } from 'rxjs';
import { OpenAgendaService } from '../../../open-agenda.service';
import { dataCitaToAssignService } from '../../../dataCitaToAssignService.service';
import { TipificacionComponent } from '../../tipificacion/tipificacion.component';
import { AsignacionCitasComponent } from '../../asignacion-citas.component';
import { HttpClient } from '@angular/common/http';
import { asignarCitaDynamic } from '../../../../../core/models/asignarCitaDynamic.model';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { dataCitaToAssign } from '../../../../../core/interfaces/dataCitaToAssign.model';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
  // providers: [dataCitaToAssign]
})
export class ResumenComponent implements OnInit {
  paciente: any
  $qp: Subscription

  @Input() dataCita: any;

  public dataCitaToAssign = new dataCitaToAssign();


  public anotheData
  public appointment
  public info
  public patient
  public space: any = {}
  public waitingList


  public cita = {
    agendamiento: {
      appointment: '',
      person: {
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

  constructor(
    private HtppClient: HttpClient,
    private _queryPatient: QueryPatient,
    private _OpenAgendaService: OpenAgendaService,
    private dataCitaToAssignService: dataCitaToAssignService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.$qp = this._queryPatient.patient.subscribe(r => {
      this.paciente = r.paciente
      this.call = r
    })
    this.dataCitaToAssignService.dataFinal.subscribe(r => {

      if (r.appointment) {

        this.anotheData = r.anotheData
        this.info = r.info
        this.appointment = r.appointment
        this.patient = r.patient
        this.space = r.space
        this.waitingList = r.waitingList

      }

      this.show = true;

    })

  }

  cleanAll() {
    this._queryPatient.existPatient.next();
    this._queryPatient.resetModels();
    this.dataCitaToAssign.resetData()
    this.location.go('/agendamiento/asignacion-citas');
  }

  ngOnDestroy(): void {
    this.$qp.unsubscribe();
  }

}
