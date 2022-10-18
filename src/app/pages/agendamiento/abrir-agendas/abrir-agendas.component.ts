import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  subscribeOn,
  switchMap,
  tap,
} from 'rxjs/operators';
import { OpenAgendaService } from '../open-agenda.service';
import { environment } from 'src/environments/environment';

import { diasSemana } from './dias';
import Swal from 'sweetalert2';
import { QueryPerson } from '../query-person.service';
import { concat, Observable, of, OperatorFunction, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-abrir-agendas',
  templateUrl: './abrir-agendas.component.html',
  styleUrls: ['./abrir-agendas.component.scss'],
})
export class AbrirAgendasComponent implements OnInit, AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll();
      this.matPanel = true;
    } else {
      this.accordion.closeAll();
      this.matPanel = false;
    }
  }
  searchEspecialidad: any;
  searchProfesional: any;
  searchIPS: any;
  searchSede: any;
  searchProcedimiento: any;
  selectedCar: number;
  ngAfterViewInit() {
    this.openClose();
  }
  cars = [
    { value: 1, name: 'Volvo' },
    { value: 2, name: 'Saab' },
    { value: 3, name: 'Opel' },
    { value: 4, name: 'Audi' },
  ];

  public regionalPercent: number = 80;
  public maxRegional: number = 80;

  public appointment = {
    value: '',
    text: '',
    brand: '',
    face_to_face: '',
  };
  public subappointment = {
    value: '',
    text: '',
    company_owner: '',
    procedure: '',
  };
  public ips = {
    value: '',
    text: '',
  };

  public sede;
  public speciality;
  public profesional;
  public isProcedure = false;
  public location_id: any;
  public type_location_id: any;
  public procedureId: any;
  public share: any;

  public timeDuration = { value: 20, text: '20 Minutos' };
  public type_appointments = [];
  public type_locations = [];
  public appointmentId: Number;
  public cups = [];
  public cupId: Number;
  public type_subappointments = [];
  public subappointmentId: Number;
  public ipss = [];
  public ipsId: Number;
  public sedes = [];
  public specialties = [];
  public profesionals = [];

  public optionesTime = [
    /*  { value: 5, text: "5 Minutos" },
     { value: 10, text: "10 Minutos" }, */
    { value: 15, text: '15 Minutos' },
    { value: 20, text: '20 Minutos' },
    { value: 25, text: '25 Minutos' },
    { value: 30, text: '30 Minutos' },
    { value: 40, text: '40 Minutos' },
    { value: 60, text: '60 Minutos' },
  ];

  public optionesShare = [
    /*  { value: 5, text: "5 Minutos" },
     { value: 10, text: "10 Minutos" }, */
    { value: 1, text: '1 Cupos' },
    { value: 2, text: '2 Cupos' },
    { value: 3, text: '3 Cupos' },
    { value: 4, text: '4 Cupos' },
    { value: 5, text: '5 Cupos' },
    { value: 6, text: '6 Cupos' },
    { value: 7, text: '7 Cupos' },
    { value: 8, text: '8 Cupos' },
    { value: 9, text: '9 Cupos' },
  ];
  fechaInicio: any = '';
  fechaFin: any = '';
  hour_start: any = '08:00';
  hour_end: any = '18:00';
  long: any = 15;
  days = [];

  public diasSemana = diasSemana;
  public searchingProcedure = false;
  public searchFailedProcedure = false;
  public today: any;

  constructor(
    private _openAgendaService: OpenAgendaService,
    public _queryPerson: QueryPerson,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.share = this.optionesShare[0].value;
    this.getDurations();
    this.getTypeAppointment();
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
    //this.today = Date.parse(this.today)
    // this.setupSearch();
  }

  @ViewChild('agenda') agenda: NgForm;
  reset() {
    //this.router.navigateByUrl('agendamiento/abrir-agendas', { skipLocationChange: true });

    /*   this.sede = {
        value: "",
        text: ""
      };

      this.speciality = {
        value: "",
        text: ""
      };


      this.profesional = {
        value: "",
        text: ""
      } */

    /* this.profesional = new this.profesional */
    /*
        this.ips = {
          value: "",
          text: ""
        } */

    /* this.sede = new this.sede
    this.speciality = new this.speciality */
    this.fechaInicio = '';
    this.fechaFin = '';
    this.hour_start = '08:00';
    this.hour_end = '18:00';
    this.long = 15;
    this.days = [];

    this.timeDuration = null;

    /*     this.subappointmentId = null
      this.appointmentId = null
      this.ipsId = null
      this.diasSemana = diasSemana */
    this.timeDuration = { value: 20, text: '20 Minutos' };
    /*  this.type_appointments = null */
    /* this.type_locations = null
    this.appointmentId = null
    this.cups = null
    this.cupId = null
    this.type_subappointments = null
    this.subappointmentId = null
    this.ipss = null
    this.ipsId = null
    this.sedes = null
    this.specialties = null
    this.profesionals = null
    this.location_id = '' */
    // this.agenda.reset();
  }

  getTypeAppointment() {
    this._openAgendaService
      .getTypeAppointment(this.appointment.text)
      .subscribe((resp: any) => {
        this.type_appointments = resp.data;
      });
  }

  getDurations() {
    this._openAgendaService.getDurations().subscribe((resp: any) => {
      this.optionesTime = resp.data;
    });
  }

  getSubTypeAppointment() {
    this.appointment = this.searchAppointment(
      this.type_appointments,
      this.appointmentId
    );
    this._openAgendaService
      .getSubTypeAppointment(this.appointment.value)
      .subscribe((resp: any) => {
        this.type_subappointments = resp.data;
        this.subappointmentId = this.type_subappointments[0].value;
        this.specialties = [];
        this.speciality = null;
        this.profesionals = [];
        this.profesional = null;
        this.getSpecialties();
      });
  }

  getIps() {
    this.ipss = [];
    this.sedes = [];
    this.ipsId = null;
    this.location_id = null;

    const param = this.type_location_id ? this.type_location_id : 0;
    this.subappointment = this.searchItem(
      this.type_subappointments,
      this.subappointmentId
    );
    this.isProcedure = Boolean(this.subappointment.procedure);
    let params = { professional_id: this.profesional };
    this._openAgendaService
      .getIps(String(param), params)
      .subscribe((resp: any) => {
        if (this.type_location_id == 1) {
          for (let i in resp.data) {
            if (
              resp.data[i].tipo == 'Compañias propias' &&
              resp.data[i].estado == 'Activo' &&
              resp.data[i].categoria == 'IPS'
            ) {
              this.ipss.push(resp.data[i]);
            }
          }
        } else if (this.type_location_id == 2) {
          for (let i in resp.data) {
            if (
              resp.data[i].tipo == 'Compañias de terceros' &&
              resp.data[i].estado == 'Activo' &&
              resp.data[i].categoria == 'IPS'
            ) {
              this.ipss.push(resp.data[i]);
            }
          }
        }
        //console.log(this.ipss)
      });
  }

  getcups() {
    this._openAgendaService
      .searchCustomProcedure('', String(this.speciality))
      .subscribe((resp: any) => {
        this.cups = resp;
      });
  }

  getSedes() {
    this.ips = this.searchItem(this.ipss, this.ipsId);
    this._openAgendaService
      .getSedes(this.ips.value, this.subappointment.procedure)
      .subscribe((resp: any) => {
        this.sedes = resp.data;
      });
  }

  getSpecialties() {
    this._openAgendaService
      .getSpecialties(String(this.sede), this.subappointment.procedure)
      .subscribe((resp: any) => {
        this.specialties = resp.data;
      });
  }

  getProfesionals() {
    this.subappointment['procedure'] ? this.getcups() : '';
    let restrictions = { 'type-appointment': this.appointment.value };
    this._openAgendaService
      .getProfesionals(this.ips.value, String(this.speciality), restrictions)
      .subscribe((resp: any) => {
        this.profesionals = resp.data;
      });
  }

  getTypeLocations() {
    if (this.appointment.face_to_face) {
      this._openAgendaService.getTypeLocations().subscribe((resp: any) => {
        this.type_locations = resp.data;
        //console.log(this.type_locations);
      });
    }
  }

  dispatchPerson() {
    this._queryPerson.person.next(this.profesional);
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
      confirmButtonText: 'Si, Hazlo!',
    }).then((result) => {
      if (result.value) {
        this._openAgendaService
          .saveAgendamiento(JSON.stringify(formulario.value))
          .subscribe((resp: any) => {
            if (resp.code != 200) {
              Swal.fire('Error', resp.err['message'], 'error');
            } else {
              Swal.fire(
                'Operación exitósa',
                'La agenda fue aperturada',
                'success'
              );
              this._queryPerson.person.next(this.profesional);
              this.reset();
            }
          });
      }
    });
  }

  searchProcedure: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searchingProcedure = true)),
      switchMap((term) =>
        term.length < 3
          ? []
          : this._openAgendaService
              .searchProcedure(term, String(this.speciality))
              .pipe(
                tap(() => (this.searchFailedProcedure = false)),
                catchError(() => {
                  this.searchFailedProcedure = true;
                  return of([]);
                })
              )
      ),
      tap(() => (this.searchingProcedure = false))
    );

  InputProcedure = (x: { text: string }) => x.text;

  showRange = (value: number) => {
    if (value > this.maxRegional)
      return (this.regionalPercent = this.maxRegional);
    return this.regionalPercent;
  };
}
