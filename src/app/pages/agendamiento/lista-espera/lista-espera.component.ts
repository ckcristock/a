import { Component, OnInit } from '@angular/core';
import { OperatorFunction, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError } from 'rxjs/operators';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-lista-espera',
  templateUrl: './lista-espera.component.html',
  styleUrls: ['./lista-espera.component.scss']
})

export class ListaEsperaComponent implements OnInit {

  pagination = {
    pageSize: 4,
    page: 1,
    collectionSize: 100,
    
  }
  filters: any = {
    date: '',
    institution: '',
    patient: '',
    speciality: '',

  }
  searching = false;
  searchFailed = false;

  waitingList = [{
    date:'2020-01-05 10:50',
    identification:'123456',
    name:'Joe Doe',
    contact:['315502222', '5657887'],
    speciality:'Cardiologia'
  },{
    date:'2020-01-05 10:50',
    identification:'123456',
    name:'Joe Doe',
    contact:['315502222', '5657887'],
    speciality:'Cardiologia'
  },{
    date:'2020-01-05 10:50',
    identification:'123456',
    name:'Joe Doe',
    contact:['315502222', '5657887'],
    speciality:'Cardiologia'
  },{
    date:'2020-01-05 10:50',
    identification:'123456',
    name:'Joe Doe',
    contact:['315502222', '5657887'],
    speciality:'Cardiologia'
  }]
  constructor(public _search: SearchService) { }
  ngOnInit(): void {
    this.getWaitingList()
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

  Inputdiagnostic = (x: { text: string }) => x.text;

  getWaitingList(){
    //get http
  
    this.pagination.collectionSize = 8 ; //NUMERO DE TODOS LOS ITEMS (SIN PAGINAR)
    //this.pagination.collectionSize = 1 ; //NUMERO DE TODOS LOS ITEMS (SIN PAGINAR)
    
  }
  changes() {
    console.log(this.filters);

  }


}
