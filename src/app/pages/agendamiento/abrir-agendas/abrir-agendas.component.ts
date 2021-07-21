import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, subscribeOn, switchMap, tap } from 'rxjs/operators';
import { OpenAgendaService } from '../open-agenda.service';
import { environment } from 'src/environments/environment';

import { diasSemana } from './dias';
import Swal from 'sweetalert2';
import { QueryPerson } from '../query-person.service';
import { Observable, of, OperatorFunction } from 'rxjs';
import { Router } from '@angular/router';


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
  public person
  public isProcedure = false;
  public locationId: Number;


  public timeDuration = { value: 20, text: "20 Minutos" }
  public type_appointments = []
  public type_locations = []
  public appointmentId: Number
  public cups = []
  public cupId: Number
  public type_subappointments = []
  public subappointmentId: Number
  public ipss = []
  public ipsId: Number
  public sedes = []
  public specialties = []
  public persons = []

  public optionesTime = [
    { value: 5, text: "5 Minutos" },
    { value: 10, text: "10 Minutos" },
    { value: 15, text: "15 Minutos" },
    { value: 20, text: "20 Minutos" },
    { value: 25, text: "25 Minutos" },
    { value: 30, text: "30 Minutos" },
    { value: 40, text: "40 Minutos" },
    { value: 60, text: "60 Minutos" },
  ]
  public diasSemana = diasSemana
  public searchingProcedure = false;
  public searchFailedProcedure = false;

  constructor(private _openAgendaService: OpenAgendaService, public _queryPerson: QueryPerson, private router: Router) { }

  ngOnInit(): void {
    this.getTypeAppointment();
  }

  reset() {

    this.router.navigateByUrl('/abrir-agendas', { skipLocationChange: true });

    this.sede = {
      value: "",
      text: ""
    };

    this.speciality = {
      value: "",
      text: ""
    };


    this.person = {
      value: "",
      text: ""
    }

    this.person = new this.person

    this.ips = {
      value: "",
      text: ""
    }

    this.sede = new this.sede
    this.speciality = new this.speciality


    this.timeDuration =

      this.subappointmentId = null
    this.appointmentId = null
    this.ipsId = null
    this.diasSemana = diasSemana

    this.timeDuration = { value: 20, text: "20 Minutos" }
    this.type_appointments = null
    this.type_locations = null
    this.appointmentId = null
    this.cups = null
    this.cupId = null
    this.type_subappointments = null
    this.subappointmentId = null
    this.ipss = null
    this.ipsId = null
    this.sedes = null
    this.specialties = null
    this.persons = null

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
      this.getSpecialties()
    });

  }

  getIps() {
    this.subappointment = this.searchItem(this.type_subappointments, this.subappointmentId);
    console.log(this.subappointment.company_owner);
    this.isProcedure = Boolean(this.subappointment.procedure);
    if (typeof this.locationId == 'undefined') {
      this.locationId
    }
    this._openAgendaService.getIps(String(this.locationId)).subscribe((resp: any) => {
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
      this.persons = resp.data;
    });
  }

  getTypeLocations() {
    if (this.appointment.face_to_face) {
      this._openAgendaService.getTypeLocations().subscribe((resp: any) => {
        this.type_locations = resp.data;
      });
    }
  }



  dispatchPerson() {
    this._queryPerson.person.next(this.person)
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
          this._queryPerson.person.next(this.person)
          this.reset();
          Swal.fire('Buen trabajo!', 'Se ha aperturado agenda correctamente.', 'success');
        });
      }
    });

  }


  searchProcedure: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searchingProcedure = true),
      switchMap(term => term.length < 3 ? [] :
        this._openAgendaService.searchProcedure(term, String(this.speciality)).pipe(
          tap(() => this.searchFailedProcedure = false),
          catchError(() => {
            this.searchFailedProcedure = true;
            return of([]);
          }))
      ),
      tap(() => this.searchingProcedure = false)
    )

  InputProcedure = (x: { text: string }) => x.text;


}
