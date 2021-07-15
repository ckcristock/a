import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private htpp : HttpClient) { }

  getAppointments(params?) {
    return this.htpp.get(environment.base_url+'/appointments',{params})
  }

}
