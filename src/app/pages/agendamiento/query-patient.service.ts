import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Patient } from '../../core/models/patient.model';
import { Call } from '../../core/models/call.model';
import { asignarCitaDynamic } from '../../core/models/asignarCitaDynamic.model';
import { TipificationData } from 'src/app/core/models/typificationData.model';

@Injectable({
  providedIn: 'root'
})
export class QueryPatient {

  public existPatient: EventEmitter<any> = new EventEmitter();
  public patient = new BehaviorSubject<any>({ llamada: new Call(), paciente: new Patient() });
  public cita = new Subject<any>();
  public space = new Subject<any>();

  public tramiteSelected = new BehaviorSubject<asignarCitaDynamic>(new asignarCitaDynamic())
  public tipificationData = new BehaviorSubject<TipificationData>(new TipificationData())

  constructor() { }

  resetModels() {
    this.patient.next({ llamada: new Call(), paciente: new Patient() });
    this.tramiteSelected.next(new asignarCitaDynamic());
  }

  resetPatient() {
    this.patient.next({ llamada: new Call(), paciente: new Patient() });
  }

}
