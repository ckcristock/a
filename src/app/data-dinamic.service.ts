import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './core/models/users.model';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })

export class DataDinamicService {


  constructor(private httpClient: HttpClient) { }

  public getDepartments() {
    return this.httpClient.get(`${environment.base_url}/departments`)
  }
  public getCompanies(typeLocation = 3) {
    return this.httpClient.get(`${environment.base_url}/get-companys/${typeLocation}`)
  }
  public getPeopleTypes() {
    return this.httpClient.get(`${environment.base_url}/people-type-custom`)
  }

  public getLocations(idCompany) {
    return this.httpClient.get(`${environment.base_url}/get-sedes/${idCompany}`)
  }

  public getCities(params?) {
    return this.httpClient.get(`${environment.base_url}/cities`, { params })
  }
  public getAgreements() {
    return this.httpClient.get(`${environment.base_url}/agreements`)
  }
  public getTypeDocuments() {
    return this.httpClient.get(`${environment.base_url}/type-documents`)
  }
  public getEps() {
    return this.httpClient.get(`${environment.base_url}/eps`)
  }
  public getRegimens() {
    return this.httpClient.get(`${environment.base_url}/type-regimens`)
  }
  // public getReasons() {
  //   return this.httpClient.get(`${environment.base_url}/type-reasons`)
  // }
  public getlevels() {
    return this.httpClient.get(`${environment.base_url}/levels`)
  }
  public getContracts(params = {}) {
    return this.httpClient.get(`${environment.base_url}/contract`, { params })
  }
  public savePatient(form) {
    // console.log(form);
    return this.httpClient.post(`${environment.base_url}/patients`, form)
  }

  public getPatientAgain(document) {
    return this.httpClient.get(`${environment.base_url}/get-patient-fill/${document}`)
  }

  public getSpecialties(sede: string, procedure: string) {
    if (sede == 'undefined' || !sede) {
      sede = '0';
      procedure = '0'
    }
    return this.httpClient.get(`${environment.base_url}/get-specialties/${sede}/${procedure}`)
  }
}