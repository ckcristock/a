import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  storePeople(form) {
    return this.httpClient.post(`${environment.base_url}/person`, form)
  }
  getPeople(params) {
    const paramss = new HttpParams()
      .set('page', 'params')
    return this.httpClient.get(`${environment.base_url}/people-paginate`, { params })
  }

}
