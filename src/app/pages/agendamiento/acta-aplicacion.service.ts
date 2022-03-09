import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ActaAplicacionService {
  constructor(private clientHttp: HttpClient,private http : HttpClient) {}

  getPeople(params = { type: '2' }) {
    return this.http.get(`${environment.base_url}/people`, {params});
  }

  GetProducts(params){
    return this.http.get(`${environment.base_url}/product-acta`, {params});
  }
}
