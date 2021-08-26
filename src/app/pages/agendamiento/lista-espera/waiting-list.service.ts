import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WaitingListService {

  constructor(private http:HttpClient) { }
  getWaitingList(params){
    return this.http.get(`${environment.base_url}/waiting-appointment`, { params })
  }

  getStatistcs(){
    return this.http.get(`${environment.base_url}/waiting-list-statistics`)
  }
}
