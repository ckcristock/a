import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAgendaService {

  constructor(private clientHttp: HttpClient) { }

  /**
   * getTypeAppointment
   */
  public getTypeAppointment(text: string) {
    return this.clientHttp.get(`${environment.base_url}/get-type_appointments/${(text != '') ? text : 'getall'}`)
  }
  /**
   * getSubTypeAppointment
   */
  public getSubTypeAppointment(value: string) {
    return this.clientHttp.get(`${environment.base_url}/get-type_subappointments/${value}`)
  }
  /**
   * getIps
   */
  public getIps(value: string) {
    return this.clientHttp.get(`${environment.base_url}/get-ips/${value}`)
  }
  /**
   * getSedes
   */
  public getSedes(sede: string, procedure: string) {
    return this.clientHttp.get(`${environment.base_url}/get-sedes/${sede}/${procedure}`)
  }
  /**
   * getSpecialties
   */
  public getSpecialties(sede: string, procedure: string) {
    return this.clientHttp.get(`${environment.base_url}/get-specialties/${sede}/${procedure}`)
  }
  /**
   * getProfesionals
   */
  public getProfesionals(ips: string, speciality: string) {
    return this.clientHttp.get(`${environment.base_url}/get-profesionals/${ips}/${speciality}`)
  }

  public getAppointments(idProfessional: Number) {
    return this.clientHttp.get(`${environment.base_url}/agendamientos/${idProfessional}`)
  }
  public saveAgendamiento(formulario: String) {
    return this.clientHttp.post(`${environment.base_url}/agendamientos`, formulario)
  }
}
