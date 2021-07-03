import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryPatient {

  public existPatient: EventEmitter<any> = new EventEmitter();
  public patient = new Subject<any>();
  public space = new Subject<any>();

  constructor() { }

}
