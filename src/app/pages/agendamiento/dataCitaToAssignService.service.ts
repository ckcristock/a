import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { QueryPatient } from './query-patient.service';

@Injectable({
  providedIn: 'root'
})
export class dataCitaToAssignService {

  public dateCall: any
  public dataCitaToAssign = new Subject<any>();

  constructor() { }

}
