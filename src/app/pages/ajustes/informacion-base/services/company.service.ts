import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanies(params = {}) {
    return this.http.get(`${environment.base_url}/company`, {params})
  }
  
  setCompanies(personId, body){
    return this.http.post(`${environment.base_url}/person/set-companies/${personId}`, body)
  }

  //Empresas en las que puede trabajar el funcionario
  getPersonCompanies(personId){
    return this.http.get(`${environment.base_url}/person/get-companies/${personId}`)
  }

}
