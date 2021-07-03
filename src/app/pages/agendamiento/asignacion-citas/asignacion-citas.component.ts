import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { environment } from 'src/environments/environment';
import { QueryPatient } from '../query-patient.service';


@Component({
  selector: 'app-asignacion-citas',
  templateUrl: './asignacion-citas.component.html',
  styleUrls: ['./asignacion-citas.component.scss']
})
export class AsignacionCitasComponent implements OnInit {
  operation = '';

  public existPtient;
  public existPtientForShow: boolean=false;
  public getDate;
  public paciente: any = {
    paciente: {},
    llamada: {}
  };
  public subjePatient;
  public citas: any = []
  constructor(private http: HttpClient, private _queryPatient: QueryPatient) {
    this.existPtient = _queryPatient.existPatient.subscribe(r => this.Init());
    this.subjePatient = _queryPatient.patient.subscribe(r => this.paciente = r);
  }

  ngOnInit(): void {
    this.Init();

  }


  changeTramite(type) {
    this.operation = type.Componente;
    if (type.Componente == 'Reasignar Citas') {
      console.log('klsdhflg');
      //buscar citas by paciente
      this.citas = [{ Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },
      { Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },
      { Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },]
    }
  }

  Init() {
    this.getDate = setInterval(() => {
      this.existPtientForShow = false
      this.GetData()
    }, 1500);
  }

  GetData() {
    this.http.get(`${environment.base_url}/get-patient`).subscribe((req: any) => {
      if (req.code == 200) {
        this._queryPatient.patient.next(req.data);
        this.existPtientForShow = true;
        clearInterval(this.getDate);
      }
    });
  }
}
