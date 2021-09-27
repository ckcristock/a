import { Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperatorFunction, Observable, of, Subscription } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { SearchService } from '../../../core/services/search.service';
import { OpenAgendaService } from '../open-agenda.service';
import Swal from 'sweetalert2'
import { errorMessage, showConfirm, showConfirmCancel, showConfirmCancelWhitoutMessage, successMessage } from 'src/app/core/utils/confirmMessage';
import { Response } from 'src/app/core/response.model';

@Component({
  selector: 'app-replay-migrate',
  templateUrl: './replay-migrate.component.html',
  styleUrls: ['./replay-migrate.component.scss']
})
export class ReplayMigrateComponent implements OnInit {


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

  private subscription = new Subscription();

  openModalDetalle = new EventEmitter<any>();

  filters: any = {
    date: '',
    company_id: '',
    location_id: '',
    institution: '',
    patient: '',
    speciality: '',
    // state: '',
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

    this._appointment.getAppointmentsTomigrate(send).subscribe((r: any) => {
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

  setPage(page) {
    this.pagination.page = page
  }


  Cancel = async (status, cita) => {
    showConfirmCancel(status, 'Cita').then((result: any) => {
      if (result.isConfirmed) {
        this.subscription.add(
          this._appointment.cancelAppointment(cita, result.value)
            .subscribe((res: Response) => {
              if (!res.data) {
                console.log('No se pudo completa la opracion');
                return false;
              }
              successMessage();
              this.getCitas(this.formD.value)
            })
        )
      }
    })
  }

  Migrate = async (cita) => {
    showConfirmCancelWhitoutMessage('Migrar', 'Cita').then((result: any) => {
      if (result.isConfirmed) {
        this.subscription.add(
          this._appointment.migrateAppointment(cita)
            .subscribe((res: Response) => {
              (res.code === 200) ? successMessage(res.data) : errorMessage(res.err)
              this.getCitas(this.formD)
            })
        )
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
