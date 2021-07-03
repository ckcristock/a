import { Component, OnInit } from '@angular/core';
import { OperatorFunction, Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-lista-trabajo',
  templateUrl: './lista-trabajo.component.html',
  styleUrls: ['./lista-trabajo.component.scss']
})
export class ListaTrabajoComponent implements OnInit {

  constructor(private _search :SearchService) { }
  citas : Array<any> = [];

  ngOnInit(): void {
  }
  filters: any = {
    date: '',
    institution: '',
    patient: '',
    speciality: '',

  }
  searching = false;
  searchFailed = false;

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

  getCitas(){
    this.citas = [
      { Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },
      { Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },
      { Id_Cita: '1', Estado: 'Activa', Descripcion: 'Cita trauma Cita trauma Cita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita traumaCita trauma Cita trauma', Especialidad: 'Traumatólogo', Fecha: '2018-09-28 17:21:21' },
    ]
  }
}
