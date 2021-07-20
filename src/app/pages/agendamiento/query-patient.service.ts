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
  
  validate(patient){
    console.log(patient);
    
    if(!patient.type_document_id) throw ('Es necesario el tipo de documento') 
    if(!patient.identifier) throw ('Es necesario el número de identificación') 
    if(!patient.firstname) throw ('Es necesario el primer nombre') 
   // if(!patient. middlename) throw ('Es necesario el segundo nombre') 
    if(!patient.surname) throw ('Es necesario el primer apellido') 
    //if(!patient.secondsurname) throw ('Es necesario el segundo apellido') 
    if(!patient.eps_id) throw ('Es necesario la EPS') 
    if(!patient.regimen_id) throw ('Es necesario el régimen') 
    if(!patient.level_id) throw ('Es necesario el nivel') 
    if(!patient.date_of_birth) throw ('Es necesaria la fecha de nacimiento') 
    if(!patient.gener) throw ('Es necesario el género') 
    if(!patient.department_id) throw ('Es necesario el departamento') 
    if(!patient.municipality_id) throw ('Es necesario el municipio') 
    if(!patient.contract_id) throw ('Es necesario el contrato') 
    if(!patient.company_id) throw ('Es necesario la empresa') 
    if(!patient.location_id) throw ('Es necesaria la sede') 
    if(!patient.email) throw ('Es necesario el email') 
    if(!patient.address) throw ('Es necesaria la dirección') 
    if(!patient.phone) throw ('Es necesario el teléfono') 
   /*  if(!patient.id) throw ('El paciente no ha sido creado')  */

  }

  //usar en try catch :)
  validateTipification({component,data}){
    if (!component)  throw  ("No ha seleccionado tipo de servicio");
    if (component.hasAmbits && !data.ambit_id)  throw  ("Debe seleccionar un ámbito");
    if(component.hasTypeServices && !data.type_service_id) throw  ("Debe seleccionar un tipo de servicio");
  }
}
