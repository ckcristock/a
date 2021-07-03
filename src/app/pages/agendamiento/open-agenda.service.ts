import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

const WIKI_URL = `${environment.base_url}/cie10s`;
const PROCEDURE_URL = `${environment.base_url}/cups`;

const PARAMS = new HttpParams({
  fromObject: {
    origin: '*'
  }
});

@Injectable({
  providedIn: 'root'
})
export class OpenAgendaService {

  constructor(private clientHttp: HttpClient) { }

  /**
   * getTypeAppointment
   */
  public getTypeAppointment(text: string) {
    return this.clientHttp.get(`${environment.base_url}/get-type_appointments/${(text != '') ? text : 'getall'}`)
  }
  /**
   * getSubTypeAppointment
   */
  public getSubTypeAppointment(value: string) {
    return this.clientHttp.get(`${environment.base_url}/get-type_subappointments/${value}`)
  }
  /**
   * getIps
   */
  public getIps(value: string) {
    return this.clientHttp.get(`${environment.base_url}/get-ips/${value}`)
  }
  /**
   * getSedes
   */
  public getSedes(sede: string, procedure: string) {
    return this.clientHttp.get(`${environment.base_url}/get-sedes/${sede}/${procedure}`)
  }
  /**
   * getSpecialties
   */
  public getSpecialties(sede: string, procedure: string) {
    return this.clientHttp.get(`${environment.base_url}/get-specialties/${sede}/${procedure}`)
  }
  /**
   * getProfesionals
   */
  public getProfesionals(ips: string, speciality: string) {
    return this.clientHttp.get(`${environment.base_url}/get-profesionals/${ips}/${speciality}`)
  }

  public getAppointments(idProfessional: Number) {
    return this.clientHttp.get(`${environment.base_url}/agendamientos/${idProfessional}`)
  }

  public getOpenedSpace(especialidad: Number) {
    return this.clientHttp.get(`${environment.base_url}/opened-spaces/${especialidad}`)
  }

  public getDiagnostics() {
    return this.clientHttp.get(`${environment.base_url}/cie10s`)
  }

  public saveAgendamiento(formulario: String) {
    return this.clientHttp.post(`${environment.base_url}/agendamientos`, formulario)
  }

  public saveCita(formulario: String) {
    return this.clientHttp.post(`${environment.base_url}/appointments`, formulario)
  }

  search(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.clientHttp
      .get<[any, string[]]>(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(
        map((response: any) => response.data)
      );
  }

  searchProcedure(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.clientHttp
      .get<[any, string[]]>(PROCEDURE_URL, { params: PARAMS.set('search', term) }).pipe(
        map((response: any) => response.data)
      );
  }
}