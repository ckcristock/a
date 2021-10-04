import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpssService {

  constructor(private http: HttpClient) { }

  getEpss() {
    return this.http.get(`${environment.base_url}/epss`)
  }

  getAllEps(params = {}) {
    return this.http.get(`${environment.base_url}/eps`, { params });
  }

  getAllPaginateEps(params = {}) {
    return this.http.get(`${environment.base_url}/paginate-eps`, { params });
  }

  createNewEps(data: any) {
    return this.http.post(`${environment.base_url}/eps`, data);
  }

}
