import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperatorFunction, Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { SearchService } from '../../../core/services/search.service';
import { OpenAgendaService } from '../open-agenda.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-trabajo',
  templateUrl: './lista-trabajo.component.html',
  styleUrls: ['./lista-trabajo.component.scss']
})

export class ListaTrabajoComponent implements OnInit {

  citas: Array<any> = [];
  public type_appointments: [];
  loading = false;

  @ViewChild('formD') formD: NgForm;

  constructor(private _search: SearchService,
    private _openAgendaService: OpenAgendaService,
    private _appointment: AppointmentService) { }
  ngOnInit(): void {
    this.getTypeAppointment()
  }
  openModalDetalle = new EventEmitter<any>();

  filters: any = {
    date: '',
    company_id: '',
    location_id: '',
    institution: '',
    patient: '',
    speciality: '',
    state: '',
    type_agenda_id: '',
    type_appointment_id: null,
    person_id: '',
    identifier: ''
  }
  pagination = {
    pageSize: 15,
    page: 1,
    collectionSize: 0,
  }
  searching = false;
  searchFailed = false;

  type_subappointments: any = []
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
  public specialties = []
  public sedes = []

  public ipss = []
  public ips = {
    value: "",
    text: ""
  }
  /*   'Agendado','Cancelado','Atendido' */
  states = [
    { value: '', name: 'Seleccione' },
    { value: 'Aperturada', name: 'Aperturada' },
    { value: 'Agendado', name: 'Agendado' },
    { value: 'Cancelado', name: 'Cancelado' },
    { value: 'Atendido', name: 'Atendido' },
  ]
  public persons = []

  searchInstitution: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? [] :
        this._search.institutions(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  getTypeAppointment() {
    this._openAgendaService.getTypeAppointment('').subscribe((resp: any) => {
      this.type_appointments = resp.data;
    });
  }

  searchSpeciality: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? [] :
        this._search.speciality(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  getSubTypeAppointment() {
    this.filters.sub_type_appointment_id = ''
    this.filters.company_id = '',
      this.filters.location_id = '',
      this.filters.person = ''
    this.appointment = this.searchAppointment(this.type_appointments, this.filters.type_appointment_id);
    this._openAgendaService.getSubTypeAppointment(this.appointment.value).subscribe((resp: any) => {
      this.type_subappointments = resp.data;
      this.filters.sub_type_appointment_id = this.type_subappointments[0].value
      if (this.appointment.face_to_face) {
        this.getIps()
      }
      this.getSpecialties()
    });

  }
  Inputdiagnostic = (x: { text: string }) => x.text;

  searchAppointment(data, value) {
    return data.find((item) => item.value === value);
  }

  getIps() {
    /*     this.filters.location_id= '', */
    this.subappointment = this.searchItem(this.type_subappointments, this.filters.sub_type_appointment_id);
    this._openAgendaService.getIps(this.subappointment.company_owner).subscribe((resp: any) => {
      this.ipss = resp.data;
    });
  }

  getSpecialties() {
    this._openAgendaService.getSpecialties(String(this.filters.location_id), this.subappointment.procedure).subscribe((resp: any) => {
      this.specialties = resp.data;
    });
  }

  getSedes() {
    this.ips = this.searchItem(this.ipss, this.filters.company_id);
    this._openAgendaService.getSedes(this.ips.value, this.subappointment.procedure).subscribe((resp: any) => {
      this.sedes = resp.data;
    });
  }
  searchItem(data, value) {
    return data.find((item) => item.value === value);
  }


  getProfesionals() {
    this._openAgendaService.getProfesionals(this.ips.value, String(this.filters.speciality)).subscribe((resp: any) => {
      this.persons = resp.data;
    });
  }

  getCitas(form: NgForm) {
    this.loading = true;
    let values = form.value
    let send: any = {}
    for (const key in values) {
      if (typeof values[key] != 'undefined' && values[key] != '') {
        send[key] = values[key]
      }
    }

    Object.assign(send, { ...this.pagination })

    this._appointment.getAppointments(send).subscribe((r: any) => {
      this.loading = false;
      this.citas = r.data.data
      this.pagination.collectionSize = r.data.total
    })
  }

  detalleCita(cita) {
    let modalDetalle = {
      Id_Cita_Detalle: cita.id,
      Show: true
    }

    this.openModalDetalle.emit(modalDetalle)
  }
  llamadaPaciente(cita) {
    // TO-DO ACA DEBE IR LA FUNCION DE LLAMADA SALIENTE, 
    // DEBE ABRIR UN MODAL, PEDIR EJEMPLO DE BCHAIN
    // AUGUSTO
    const SwalMsje = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    SwalMsje.fire(
      'Función No Activa',
      'La función de la llamada saliente no esta disponible aún!',
      'warning'
    )
  }
  confirmarCita(cita) {
    const SwalMsje = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    SwalMsje.fire({
      title: '¿está seguro?',
      text: "Se dispone a Confirmar una cita",
      icon: 'warning',
      input: 'text',
      inputAttributes: {
        maxlength: "50",
        autocapitalize: 'off',
        autocorrect: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Si, ¡Cita Confirmada con el Paciente!',
      cancelButtonText: 'No, ¡déjeme comprobar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this._appointment.confirmAppointment(result.value, cita.id)
          .subscribe((r: any) => {

            if (!r.data) {
              console.log('No se pudo completa la opracion');
              return false;
            }
            SwalMsje.fire(
              'Cita confirmada correctamente',
              'La cita se ha confirmado de manera correcta!',
              'success'
            )

            this.getCitas(this.formD.value)

          })


        // TODO ACA DEBE IR LA FUNCION DE CAMBIAR EL ESTADO A LA CITA, 
        // NO SE SI PEDIR OBSERVACIONES O NO
        // AUGUSTO

      }
    })
  }
  setPage(page) {
    this.pagination.page = page
  }
}
