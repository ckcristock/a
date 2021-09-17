import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }
  storePeople(form) {
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // let headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.httpClient.post(`${environment.base_url}/professionals`, form)
    // return this.httpClient.post(`${environment.base_url}/professionals`, form, { headers: headers })
  }
  getPeople(params = {}) {
    return this.httpClient.get(`${environment.base_url}/people-paginate`, { params })
  }

}