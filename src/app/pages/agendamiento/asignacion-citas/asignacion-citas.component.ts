import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { environment } from 'src/environments/environment';
import { QueryPatient } from '../query-patient.service';
import { Subscription } from 'rxjs';
import { asignarCitaDynamic } from '../../../core/models/asignarCitaDynamic.model';
import { NgForm } from '@angular/forms';
import { Patient } from 'src/app/core/models/patient.model';
import { TipificationService } from 'src/app/core/services/tipification.service';
import { PermissionService } from '../../../core/services/permission.service';


@Component({
  selector: 'app-asignacion-citas',
  templateUrl: './asignacion-citas.component.html',
  styleUrls: ['./asignacion-citas.component.scss'],
})
export class AsignacionCitasComponent implements OnInit {
 
  public configComponent: any =
    {
      'menu': 'agendamiento',
      'permissons': {
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



  constructor(private http: HttpClient, private _queryPatient: QueryPatient,
    private _tipification: TipificationService,

    private _permisson: PermissionService

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

        if (r.component && r.component == 'Reasignar Citas') {
          this.citas = [
            {
              Id_Cita: '1',
              Estado: 'Activa',
              Descripcion:
                'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma',
              Especialidad: 'Traumatólogo',
              Fecha: '2018-09-28 17:21:21',
            },
            {
              Id_Cita: '1',
              Estado: 'Activa',
              Descripcion:
                'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma',
              Especialidad: 'Traumatólogo',
              Fecha: '2018-09-28 17:21:21',
            },
            {
              Id_Cita: '1',
              Estado: 'Activa',
              Descripcion:
                'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma',
              Especialidad: 'Traumatólogo',
              Fecha: '2018-09-28 17:21:21',
            },
          ];
        }
      }
    );

    this.$tramiteData = this._queryPatient.tipificationData.subscribe(r => {
      this.tramiteData = r;
    })
  }

  Init() {
    
    if (this.configComponent.permissons.receive_calls) {
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
          this._queryPatient.patient.next(data);
          this.existPtientForShow = true;
          clearInterval(this.getDate);
        }
      });
  }
  ngOnDestroy(): void {
    this.$tramiteSelected.unsubscribe();
    this.$tramiteData.unsubscribe();
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
}
