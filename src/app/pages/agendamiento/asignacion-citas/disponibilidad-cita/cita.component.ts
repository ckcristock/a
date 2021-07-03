import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OpenAgendaService } from '../../open-agenda.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {


  public appointment = {
    value: "",
    text: "",
    brand: ""
  }
  public subappointment = {
    value: "",
    text: "",
    company_owner: "",
    procedure: ""
  }

  public ips
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
  public optionesTime = [{ value: 5, text: "5 Minutos" }]
  @Output('siguiente') sigx = new EventEmitter();
  constructor(private _openAgendaService: OpenAgendaService) { }

  ngOnInit(): void {
    this.getTypeAppointment();
  }

  getTypeAppointment() {
    this._openAgendaService.getTypeAppointment(this.appointment.text).subscribe((resp: any) => {
      this.type_appointments = resp.data;
    });
  }

  getSubTypeAppointment() {
    this.reset();
    this.appointment = this.searchItem(this.type_appointments, this.appointmentId);
    this._openAgendaService.getSubTypeAppointment(this.appointment.value).subscribe((resp: any) => {
      this.type_subappointments = resp.data;
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

  searchItem(data, value) {
    return data.find((item) => item.value === value);
  }

  saveAgenda(formulario: NgForm) {
    this._openAgendaService.saveAgendamiento(JSON.stringify(formulario.value)).subscribe((resp: any) => {
      console.log('agenda saved');
      // this.profesionals = resp.data;
    });
  }

  reset() {

    this.type_subappointments = []
    this.ipss = []
    this.sedes = []
    this.specialties = []

    this.ips = null;
    this.sede = null;
    this.speciality = null;
    this.profesional = null
    this.subappointment = {
      value: "",
      text: "",
      company_owner: "",
      procedure: ""
    };
  }

  siguiente() {
    this.sigx.emit('');
  }

}
