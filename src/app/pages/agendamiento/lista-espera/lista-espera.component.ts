import { Component, OnInit } from '@angular/core';
import { OperatorFunction, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError } from 'rxjs/operators';
import { SearchService } from '../../../core/services/search.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OpenAgendaService } from '../open-agenda.service';
import { WaitingListService } from './waiting-list.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-espera',
  templateUrl: './lista-espera.component.html',
  styleUrls: ['./lista-espera.component.scss']
})

export class ListaEsperaComponent implements OnInit {
  loading = false;
  pagination = {
    pageSize: 15,
    page: 1,
    collectionSize: 0,

  }
  filters: any = {
    date: '',
    institution: '',
    patient: '',
    speciality: '',

  }
  searching = false;
  searchFailed = false;
  specialties: any = []
  waitingList = []
  companies = []
  reasons: Object = {};

  constructor(public _search: SearchService,
    private _openAgendaService: OpenAgendaService,
    private http: HttpClient,
    private _openS: OpenAgendaService,
    private _waiting: WaitingListService
  ) { }
  ngOnInit(): void {
    this.getWaitingList(1)
    this.getSpecialties();
    this.getCompanies();
    this.getReasons();
  }

  public getReasons() {
    this.reasons = {
      1: 'Paciente Fallecido',
      2: 'Cita Asignada por otra modalidad',
      3: 'Lista de Espera Erronea',
      4: 'Otra Causa'
    }
  }

  getCompanies() {
    this._openS.getIps("1").subscribe((r: any) => {
      this.companies = r.data
    })
  }

  getSpecialties() {
    this._openAgendaService.getSpecialties('0', '0').subscribe((resp: any) => {
      this.specialties = resp.data;
    });
  }

  /*  */
  Inputdiagnostic = (x: { text: string }) => x.text;

  getWaitingList(page) {
    this.pagination.page = page;
    this.loading = true;
    let params: any = Object.assign({}, this.pagination, this.filters);;
    this._waiting.getWaitingList(params)
      .subscribe((r: any) => {
        this.loading = false;
        this.pagination.collectionSize = r.total;
        this.waitingList = r.data
      })

  }
  AnularEspera(IdCita) {
    const SwalMsje = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    SwalMsje.fire({
      title: '¿está seguro?',
      text: "Se dispone a anular una Lista de Espera, escoja una razón para realizar esta acción",
      icon: 'warning',
      input: 'select',
      inputOptions: this.reasons,
      inputPlaceholder: 'Seleccione una',
      showCancelButton: true,
      confirmButtonText: 'Si, ¡Anular!',
      cancelButtonText: 'No, ¡déjeme comprobar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._waiting.cancellApointment(result.value, IdCita)
          .subscribe((r: any) => {

            if (!r.data) {
              console.log('No se pudo completa la opracion');
              return false;
            }
            SwalMsje.fire(
              'Lista de Espera Anulada Correctamente',
              'La lista de espera fué Anulada!',
              'warning'
            )
            this.getWaitingList(1)
          })
      }
    })
  }
  changed(e) {
    console.log(e);
  }
}
