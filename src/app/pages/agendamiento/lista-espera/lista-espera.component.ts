import { Component, OnInit } from '@angular/core';
import { OperatorFunction, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError } from 'rxjs/operators';
import { SearchService } from '../../../core/services/search.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OpenAgendaService } from '../open-agenda.service';
import { WaitingListService } from './waiting-list.service';

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
  changed(e) {
    console.log(e);
  }
}
