import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { subscribeOn } from 'rxjs/operators';
import { OpenAgendaService } from '../open-agenda.service';
import { environment } from 'src/environments/environment';

import { diasSemana } from './dias';
import Swal from 'sweetalert2';
import { QueryProfessional } from '../query-professional.service';


@Component({
  selector: 'app-abrir-agendas',
  templateUrl: './abrir-agendas.component.html',
  styleUrls: ['./abrir-agendas.component.scss']
})
export class AbrirAgendasComponent implements OnInit {

  public appointment = {
    value: "",
    text: "",
    brand: "",
    face_to_face: ""
  }
  public subappointment = {
    value: "",
    text: "",
    company_owner: "",
    procedure: ""
  }
  public ips = {
    value: "",
    text: ""
  }

  public sede
  public speciality
  public profesional


  public timeDuration = ""
  public type_appointments = []
  public appointmentId: Number
  public type_subappointments = []
  public subappointmentId: Number
  public ipss = []
  public ipsId: Number
  public sedes = []
  public specialties = []
  public profesionals = []
  public optionesTime = [{ value: 15, text: "15 Minutos" }, { value: 25, text: "25 Minutos" }, { value: 30, text: "30 Minutos" }]
  public diasSemana = diasSemana

  constructor(private _openAgendaService: OpenAgendaService, public _queryProfessional: QueryProfessional) { }

  ngOnInit(): void {
    this.getTypeAppointment();
  }

  reset() {

    this.sede = {
      value: "",
      text: ""
    };
    this.speciality = {
      value: "",
      text: ""
    };

    this.profesional = ''

    // this.appointment = {
    //   value: "",
    //   text: "",
    //   brand: "",
    //   face_to_face: ""
    // }
    // this.subappointment = {
    //   value: "",
    //   text: "",
    //   company_owner: "",
    //   procedure: ""
    // }

    this.ips = {
      value: "",
      text: ""
    }

    this.ips = {
      value: "",
      text: ""
    }

    this.sede = 0
    this.speciality = 0
    this.profesional = 0

    this.timeDuration = ""
    // this.type_appointments = []
    this.appointmentId = 0
    // this.type_subappointments = []
    this.subappointmentId = 0
    // this.ipss = []
    this.ipsId = 0;
    // this.sedes = []
    // this.specialties = []
    // this.profesionals = []
    this.optionesTime = [{ value: 15, text: "15 Minutos" }, { value: 25, text: "25 Minutos" }, { value: 30, text: "30 Minutos" }]
    this.diasSemana = diasSemana

  }

  getTypeAppointment() {
    this._openAgendaService.getTypeAppointment(this.appointment.text).subscribe((resp: any) => {
      this.type_appointments = resp.data;
    });
  }

  getSubTypeAppointment() {
    this.appointment = this.searchAppointment(this.type_appointments, this.appointmentId);
    this._openAgendaService.getSubTypeAppointment(this.appointment.value).subscribe((resp: any) => {
      this.type_subappointments = resp.data;
      this.subappointmentId = this.type_subappointments[0].value
      if (this.appointment.face_to_face) {
        this.getIps()
      }
      this.getSpecialties()
    });

  }

  getIps() {
    this.subappointment = this.searchItem(this.type_subappointments, this.subappointmentId);
    this._openAgendaService.getIps(this.subappointment.company_owner).subscribe((resp: any) => {
      this.ipss = resp.data;
    });
  }

  getSedes() {
    this.ips = this.searchItem(this.ipss, this.ipsId);
    this._openAgendaService.getSedes(this.ips.value, this.subappointment.procedure).subscribe((resp: any) => {
      this.sedes = resp.data;
    });
  }

  getSpecialties() {
    this._openAgendaService.getSpecialties(String(this.sede), this.subappointment.procedure).subscribe((resp: any) => {
      this.specialties = resp.data;
    });
  }

  getProfesionals() {
    this._openAgendaService.getProfesionals(this.ips.value, String(this.speciality)).subscribe((resp: any) => {
      this.profesionals = resp.data;
    });
  }



  dispatchProfessional() {
    this._queryProfessional.professional.next(this.profesional)
  }

  searchItem(data, value) {
    return data.find((item) => item.value === value);
  }

  searchAppointment(data, value) {
    return data.find((item) => item.value === value);
  }

  saveAgenda(formulario: NgForm) {
    Swal.fire({
      title: 'Seguro?',
      text: 'Deseas aperturar agenda con esta información!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, Hazlo!'
    }).then(result => {
      if (result.value) {
        this._openAgendaService.saveAgendamiento(JSON.stringify(formulario.value)).subscribe((resp: any) => {
          this._queryProfessional.professional.next(this.profesional)
          this.reset();
          Swal.fire('Buen trabajo!', 'Se ha aperturado agenda correctamente.', 'success');
        });
      }
    });

  }

}
