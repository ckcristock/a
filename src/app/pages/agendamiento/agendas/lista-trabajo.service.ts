import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaTrabajoService {

  constructor(private http: HttpClient) { }

  public getAgendamientos(params): Observable<any> {
    return this.http.get(`${environment.base_url}/agendamientos/paginate`, {
      params
    })
  }
  public getAgendamiento(params): Observable<any> {
    return this.http.get(`${environment.base_url}/agendamientos/`, {
      params
    })
  }

  public getStatistics(params):Observable<any> {
    return this.http.get(`${environment.base_url}/spaces-statistics/`, {
      params
    })
  }

  
  public getStatisticsDetail(params?):Observable<any> {
    return this.http.get(`${environment.base_url}/spaces-statistics-detail/`, {
      params
    })
  }
}
