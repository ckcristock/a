import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { param } from 'jquery';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionEmpresaService {

  constructor(private http: HttpClient) { }

  getBanks() {
    return this.http.get(`${environment.base_url}/banks`);
  }

  getArl() {
    return this.http.get(`${environment.base_url}/arl`);

  }

  getCompanyData(id = null) {
    let params = { id: id }
    return this.http.get(`${environment.base_url}/companyData`, { params });
  }

  getCompaniesOwner(params = {}) {
    return this.http.get(`${environment.base_url}/company`, { params });
  }

  saveCompanyData(data: any) {
    return this.http.post(`${environment.base_url}/saveCompanyData`, data);
  }

  changePaymentConfiguration(data: any) {
    return this.http.post(`${environment.base_url}/companyPayment`, data);
  }
}
