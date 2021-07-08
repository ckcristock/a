import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { QueryPatient } from '../../../query-patient.service';
import { Subscription } from 'rxjs';
import { OpenAgendaService } from '../../../open-agenda.service';
import { dataCitaToAssignService } from '../../../dataCitaToAssignService.service';
import { TipificacionComponent } from '../../tipificacion/tipificacion.component';
import { AsignacionCitasComponent } from '../../asignacion-citas.component';
import { HttpClient } from '@angular/common/http';
import { asignarCitaDynamic } from '../../../../../core/models/asignarCitaDynamic.model';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  paciente: any
  $qp: Subscription

  @Input() dataCita: any;

  public anotheData
  public appointment
  public patient
  public space
  public waitingList

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

  constructor(private HtppClient: HttpClient, private _queryPatient: QueryPatient, private _OpenAgendaService: OpenAgendaService, private dataCitaToAssignService: dataCitaToAssignService) { }

  ngOnInit(): void {

   /*  this.patient = this.dataCitaToAssignService.dateCall['paciente']
    this.call = this.dataCitaToAssignService.dateCall['llamada'] */

    this.$qp = this._queryPatient.patient.subscribe(r => {
      this.paciente = r.paciente
      this.call = r
    })
    this.dataCitaToAssignService.dataFinal.subscribe(r => {

      this.anotheData = r.anotheData
      this.appointment = r.appointment
      this.patient = r.patient
      this.space = r.space
      this.waitingList = r.waitingList
      this.show = true;

    })

  }

  cleanAll() {
    console.log(this.appointment,'call');
   /*  
    if (this.appointment['Id_Llamada']) {
      this._OpenAgendaService.getClean(this.appointment['Id_Llamada']).subscribe((r) => {
      })

    } */
    /*
        const typin = new AsignacionCitasComponent(this.HtppClient, this._queryPatient)
        const va = {
          Componente: ''
        }
        typin.changeTramite(va) */
    this._queryPatient.existPatient.next();
    this._queryPatient.resetModels();

  }

  ngOnDestroy(): void {
    this.$qp.unsubscribe();
  }

}
