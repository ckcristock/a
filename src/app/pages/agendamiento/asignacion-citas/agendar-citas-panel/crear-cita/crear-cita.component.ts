import { Component, EventEmitter, OnInit, Output, Injectable } from '@angular/core';
import { OpenAgendaService } from '../../../open-agenda.service';


import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, OperatorFunction, Subscription } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
import { NgForm, Validators } from '@angular/forms';
import { QueryPatient } from '../../../query-patient.service';
import { formaterInput } from '../../../../../formaterInput'
import Swal from 'sweetalert2';
import { dataCitaToAssignService } from '../../../dataCitaToAssignService.service';


@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.scss']
})
export class CrearCitaComponent implements OnInit {
  @Output('siguiente') siguiente = new EventEmitter();

  public diagosticos: Array<any>;
  public ips_remisors
  public persons_remisors
  public especiality_remisors
  public procedurs_remisors
  public space
  public call
  public patient
  public dataCitaToAssign
  public tipification: any = {}

  diagnosticoId: any;
  procedureId: any;
  loading = false;
  searchingDiagnostic = false;
  searchingProcedure = false;
  searchFailedDiagnostic = false;
  searchFailedProcedure = false;
  $dataCita: Subscription
  constructor(private _openAgendaService: OpenAgendaService,
    private _queryPatient: QueryPatient,
    private dataCitaToAssignService: dataCitaToAssignService,

  ) {
    this.$dataCita = this.dataCitaToAssignService.dataCitaToAssign.subscribe((r) => {
      this.dataCitaToAssign = r
    });



  }
  tramiteSelected: any
  typesDocuments: Array<any> = [
    { Nombre: 'CI', Id: '1' },
    { Nombre: 'CC', Id: '2' },
    { Nombre: 'CC', Id: '2' },
  ]

  cita: any = {
    Id_Tipo_Identificacion: ''
  }

  $patient: Subscription;
  $sapce: Subscription;
  $tipif: Subscription;
  $trSelct: Subscription;

  ngOnInit(): void {

    this.$patient = this._queryPatient.patient.subscribe(r => {
      this.call = r.llamada
      this.patient = r.paciente
    })
    /*  this.call = this.dataCitaToAssignService.dateCall.llamada
     this.patient = this.dataCitaToAssignService.dateCall.paciente */
    this.$sapce = this._queryPatient.space.subscribe(r => {
      this.space = r
    });

    this.$tipif = this._queryPatient.tipificationData.subscribe(r => {
      console.log('tipification', r);

      this.tipification = r
    })

    this.$trSelct = this._queryPatient.tramiteSelected.subscribe(r => {
      console.log('selected', r);
      this.tramiteSelected = r

    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$dataCita.unsubscribe();
    this.$patient.unsubscribe();
    this.$sapce.unsubscribe();
    this.$tipif.unsubscribe();
    this.$trSelct.unsubscribe();
  }
  save(form: NgForm) {
    try {
      this._queryPatient.validateTipification({ component: this.tramiteSelected, data: this.tipification })

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success mx-2',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: '¿está seguro?',
        text: "Se dispone a asignar una cita",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, ¡Hazlo !',
        cancelButtonText: 'No, ¡dejeme comprobar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true;
          this._openAgendaService.saveCita(JSON.stringify(form.value))
            .subscribe((data: any) => {
              this.dataCitaToAssignService.dataFinal.next(data.data)
              this.validarResponse(data);
              this.loading = false;
            });
        }
      })
    } catch (error) {
      Swal.fire('Faltan datos del proceso ', error, 'error');

    }
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searchingDiagnostic = true),
      switchMap(term => term.length < 3 ? [] :
        this._openAgendaService.search(term).pipe(
          tap(() => this.searchFailedDiagnostic = false),
          catchError(() => {
            this.searchFailedDiagnostic = true;
            return of([]);
          }))
      ),
      tap(() => this.searchingDiagnostic = false)
    )


  Inputdiagnostic = (x: { text: string }) => x.text;

  searchProcedure: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searchingProcedure = true),
      switchMap(term => term.length < 3 ? [] :
        this._openAgendaService.searchProcedure(term).pipe(
          tap(() => this.searchFailedProcedure = false),
          catchError(() => {
            this.searchFailedProcedure = true;
            return of([]);
          }))
      ),
      tap(() => this.searchingProcedure = false)
    )

  InputProcedure = (x: { text: string }) => x.text;


  formaterInput(model: any) {
    return formaterInput(model);
  }

  validarResponse(data) {
    if (data) {
      try {
        if (this.patient.isNew) throw ('Es necesario guardar toda la información del paciente para continuar')

        this._queryPatient.validate(this.patient);
        this._queryPatient.validateTipification({ component: this.tipification, data: this.tipification });
        this.siguiente.emit();
        this.dataCitaToAssignService.dataFinal.next(data.data)
        // this._queryPatient.patient.next(data.data)
        this._openAgendaService.getClean(data.data.appointment['call_id']).subscribe((r) => {
        })
      } catch (error) {
        Swal.fire('Paciente incorrecto', error, 'error');
      }

    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success mx-2',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: '¿está seguro?',
        text: "Se dispone a asignar una cita",
        icon: 'warning',
        showCancelButton: true,
        reverseButtons: true
      }).then((result) => {
      })
    }
  }

}


