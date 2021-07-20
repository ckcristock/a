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
  public getCompanies( typeLocation = 0) {
    return this.httpClient.get(`${environment.base_url}/company/${typeLocation}`)
  }

  public getLocations(idCompany) {
    return this.httpClient.get(`${environment.base_url}/get-sedes/${idCompany}`)
  }

  public getCities(params?) {
    return this.httpClient.get(`${environment.base_url}/cities`,{params})
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
  public getlevels() {
    return this.httpClient.get(`${environment.base_url}/levels`)
  }
  public getContracts() {
    return this.httpClient.get(`${environment.base_url}/contract`)
  }
  public savePatient(form) {
    return this.httpClient.post(`${environment.base_url}/patients`, form)
  }

  public getPatientAgain(document) {
    return this.httpClient.get(`${environment.base_url}/get-patient-fill/${document}`)
  }
}