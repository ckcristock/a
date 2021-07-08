import { Component, OnInit } from '@angular/core';
import { OperatorFunction, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError } from 'rxjs/operators';
import { SearchService } from '../../../core/services/search.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OpenAgendaService } from '../open-agenda.service';

@Component({
  selector: 'app-lista-espera',
  templateUrl: './lista-espera.component.html',
  styleUrls: ['./lista-espera.component.scss']
})

export class ListaEsperaComponent implements OnInit {

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
  specialties : any = []
  waitingList = []
  constructor(public _search: SearchService,
    private _openAgendaService: OpenAgendaService,
    private http: HttpClient) { }
  ngOnInit(): void {
    this.getWaitingList(1)
    this.getSpecialties();
  }


  getSpecialties() {
    this._openAgendaService.getSpecialties('0','0').subscribe((resp: any) => {
      this.specialties = resp.data;
    });
  }


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

/*  */
  Inputdiagnostic = (x: { text: string }) => x.text;

  getWaitingList(page) {
    //get http
    this.pagination.page = page;
    
    let params:any  =  Object.assign({}, this.pagination,this.filters);;
   
    this.http.get(`${environment.base_url}/waiting-appointment`, { params })
      .subscribe((r: any) => {
        this.pagination.collectionSize = r.total;
        this.waitingList = r.data
      })

  }

  

  changed(e) {
    console.log(e);

  }


}
