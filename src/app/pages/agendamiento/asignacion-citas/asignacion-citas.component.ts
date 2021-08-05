import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { environment } from 'src/environments/environment';
import { QueryPatient } from '../query-patient.service';
import { Subscription } from 'rxjs';
import { asignarCitaDynamic } from '../../../core/models/asignarCitaDynamic.model';
import { NgForm } from '@angular/forms';
import { Patient } from 'src/app/core/models/patient.model';
import { TipificationService } from 'src/app/core/services/tipification.service';
import { PermissionService } from '../../../core/services/permission.service';
import { AppointmentService } from '../../../core/services/appointment.service';
import { OpenAgendaService } from '../open-agenda.service';


@Component({
  selector: 'app-asignacion-citas',
  templateUrl: './asignacion-citas.component.html',
  styleUrls: ['./asignacion-citas.component.scss'],
})
export class AsignacionCitasComponent implements OnInit {
  public getClitasE = new EventEmitter<any>();
  public configComponent: any =
    {
      'menu': 'Asignación de Citas',
      'permissions': {
        'receive_calls': false
      }
    }
  operation: any = {};
  typeCall = 'Presencial';
  public existPtient;
  public existPtientForShow: boolean = false;



  public getDate;
  public dataFormCall: any = {
    paciente: {},
    llamada: {},
  };
  public subjePatient;
  public citas: any = [];
  public $tramiteSelected: Subscription;
  public $tramiteData: Subscription;
  tramiteData: any = {}

  public patient;

  constructor(private http: HttpClient, private _queryPatient: QueryPatient,
    private _tipification: TipificationService,

    private _permisson: PermissionService,
    private _appointment: AppointmentService,
    private _openAgenda: OpenAgendaService

  ) {

    this.configComponent = this._permisson.validatePermissions(this.configComponent)
    this.existPtient = _queryPatient.existPatient.subscribe((r) => this.Init());
    
  }

  ngOnInit(): void {
    this.Init();
    this.changeTramite();
  }

  changeTramite() {
    this.$tramiteSelected = this._queryPatient.tramiteSelected.subscribe(
      (r: any) => {
        
        this.operation = r;
        if (!r.component) {
          //buscar citas by paciente
          //this.Init()
          this.existPtientForShow = false;
        }


        if (r.component == 'Reasignar Citas' && this.patient) {
          this.getCitas();
        }
      }
    );

    this.$tramiteData = this._queryPatient.tipificationData.subscribe(r => {
      this.tramiteData = r;
    })
  }

  getCitas() {
    setTimeout(() => {
      this.getClitasE.emit({ identifier: this.patient.paciente.identifier });
    }, 200);
  }

  Init() {

    if (this.configComponent.permissions.receive_calls) {
      this.getDate = setInterval(() => {
        this.existPtientForShow = false;
        this.GetData();
      }, 3000);
    } else {

    }
  }

  GetData() {
    this.http
      .get(`${environment.base_url}/get-patient`)
      .subscribe((req: any) => {
        if (req.code == 200) {
          let data = req.data;
          if (!data.paciente) {
            data = this.newPatient(data, req)
          }
          this.patient = data;
          this._queryPatient.patient.next(data);
          this.existPtientForShow = true;
          clearInterval(this.getDate);
        }
      });
  }
  ngOnDestroy(): void {
    this.$tramiteSelected.unsubscribe();
    this.$tramiteData.unsubscribe();
    clearInterval(this.getDate);
  }

  newCall(form) {
    let formd = new FormData()
    this.http.post(`${environment.base_url}/presentianCall`, JSON.stringify(form.value))
      .subscribe((req: any) => {
        if (req.code == 200) {
          let data = req.data;
          if (req.data.isNew) {
            data = this.newPatient(data, req)
          }
          this.patient = data;
          this._queryPatient.patient.next(data);
          this.existPtientForShow = true;
          clearInterval(this.getDate);
        }
      })
  }

  newPatient(data, req) {

    data.paciente = new Patient()
    data.paciente.identifier = req.data.llamada.Identificacion_Paciente;
    data.paciente.isNew = true
    return data;
  }


  canceledAppointment(event) {
    if (this.operation.name != 'Reasignación de Citas') {
      //this.getCitas();
      this._queryPatient.existPatient.next();
      this._queryPatient.resetModels();
      this._openAgenda.getClean(this.patient.llamada.id).subscribe(r => { });
    }
  }

}
