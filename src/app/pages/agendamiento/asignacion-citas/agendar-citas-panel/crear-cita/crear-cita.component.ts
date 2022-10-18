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
import { diasSemana } from '../../../abrir-agendas/dias';

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
  public fromWailist: boolean = false
  public diasSemana = diasSemana

  diagnosticoId: any;
  procedureId: any;
  repeat: any;
  fechaInicioRecurrente: any;
  fechaFinRecurrente: any;
  daysRecurrente: any;
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

    this._queryPatient.infowailist.subscribe(res => {
      if (res.anotherData) {
        this.cita.ips_remisor = res.anotherData.appointment.ips
        this.cita.person_remisor = res.anotherData.appointment.profesional
        this.cita.especiality = res.anotherData.appointment.speciality
        this.cita.date_remisor = res.anotherData.appointment.date
        this.procedureId = res.anotherData.appointment.cup
        this.diagnosticoId = res.anotherData.appointment.cie10
        this.cita.observacion = res.anotherData.appointment.observation
        this.fromWailist = true

      }
    })

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
      this.tipification = r
    })

    this.$trSelct = this._queryPatient.tramiteSelected.subscribe(r => {
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
      this._queryPatient.validate(this.patient);
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
          this._openAgendaService.saveCita(JSON.stringify(form.value), this.repeat)
            .subscribe((data: any) => {

              if (data.code == 400) {
                Swal.fire('Error agendando cita', data.err[0], 'error');
                this.loading = false;
                throw (({ tilte: 'Error agendando cita', message: data.err[0] }))
              }

              this.dataCitaToAssignService.dataFinal.next(data.data)
              this.validarResponse(data);

              this.loading = false;
            }, response => {
              if (response.error) {
                let html = `<ul>`;
                for (var clave in response.error.errors) {
                  html += `<li>${response.error.errors[clave]}</li> `
                }
                html += `</ul>`
                Swal.fire('Error', html, 'error');
              }
              this.loading = false;
            });
        }
        return false;
      })

    } catch ({ tilte, message }) {
      this.loading = false;
      Swal.fire(tilte, message, 'error');
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
        this._openAgendaService.searchProcedure(term, this.space).pipe(
          tap(() => this.searchFailedProcedure = false),
          catchError(() => {
            this.searchFailedProcedure = true;
            return of([]);
          }))
      ),
      tap(() => this.searchingProcedure = false)
    )

  searchCustomProcedureByAppointment: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searchingProcedure = true),
      switchMap(term => term.length < 3 ? [] :
        this._openAgendaService.searchCustomProcedureByAppointment(term, this.space).pipe(
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
        if (this.patient.isNew) {
          throw (({ title: 'Faltan campos del paciente', message: 'Es necesario guardar toda la información del paciente para continuar' }))
        }
        this._queryPatient.validate(this.patient);
        this._queryPatient.validateTipification({ component: this.tipification, data: this.tipification });
        this.siguiente.emit();
        this.dataCitaToAssignService.dataFinal.next(data.data)
        // this._openAgendaService.getClean(data.data.appointmentCreated[0].appointment['call_id']).subscribe((r) => { })
      } catch ({ title, message }) {
        Swal.fire(title, message, 'error');
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


