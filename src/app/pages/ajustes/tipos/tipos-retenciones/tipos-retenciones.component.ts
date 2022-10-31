import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiposRetencionesService } from './tipos-retenciones.service';
import { SwalService } from '../../informacion-base/services/swal.service';
import { OperatorFunction, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';
import { NgbModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tipos-retenciones',
  templateUrl: './tipos-retenciones.component.html',
  styleUrls: ['./tipos-retenciones.component.scss']
})
export class TiposRetencionesComponent implements OnInit {
  form: FormGroup;
  @ViewChild('modal') modal:any;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  closeResult: string;
  openClose(){
    if (this.matPanel == false){
      this.accordion.openAll()
      this.matPanel = true;
    } else {
      this.accordion.closeAll()
      this.matPanel = false;
    }
  }
  loading:boolean =  false;
  accountPlan:any[] = [];
  retentionTypes:any[] = [];
  retention:any = {};
  title:any = '';
  pagination = {
    page: 1,
    pageSize: 5,
    collectionSize: 0
  }
  filtros = {
    nombre: '',
    porcentaje: '',
    cuentaAsociada: '',
    estado: ''
  }
  constructor(
    private fb: FormBuilder,
    private _retentionType: TiposRetencionesService,
    private modalService: NgbModal,
    private _swal: SwalService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getRetentionTypes();
    this.getAccountPlan();
  }

  createForm(){
    this.form = this.fb.group({
      id: [this.retention.id],
      name: ['', Validators.required],
      account_plan_id: ['', Validators.required],
      account_plan: ['', Validators.required],
      percentage: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public openConfirm(confirm, titulo) {
    this.title = titulo;
    this.modalService.open(confirm, { ariaLabelledBy: 'modal-basic-title', size: 'md', scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any) {
    this.form.reset();
  }

  openModal(){
    this.modal.show();
    this.title = 'Nuevo tipo de retención';
  }

  search: OperatorFunction<string, readonly { code }[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      //filter((term) => term.length >= 3),
      map((term) =>
        this.accountPlan
          .filter((state) => new RegExp(term, 'mi').test(state.code))
          .slice(0, 10)
      )
  );

  inputFormatBandListValue(value: any) {
    if (value.code)
       return value.code
    return value;
  }

   resultFormatBandListValue(value: any) {
    return value.code;
  }

  getAccountPlan(){
    this._retentionType.getAccountPlan().subscribe((r:any) => {
      this.accountPlan = r.data;
    })
  }

  AsignarCuenta(e: NgbTypeaheadSelectItemEvent) {
    this.form.get('account_plan_id').setValue(e.item.id);
    //let data = this.form.get('account_plan_id').value;
  }

  getRetentionTypes(page = 1){
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }
    this.loading = true;
    this._retentionType.getRetentionType(params).subscribe((r:any) => {
      this.retentionTypes = r.data.data;
      this.pagination.collectionSize = r.data.total;
      this.loading = false;
    });
  }

  getRetention(retention){
    this.retention = {...retention};
    this.title = 'Editar tipo de retención';
    this.form.patchValue({
      id: this.retention.id,
      name: this.retention.name,
      account_plan_id: this.retention.account_plan_id,
      account_plan: this.retention.account_plan,
      percentage: this.retention.percentage,
      description: this.retention.description
    });
  }

  save(){
    this._retentionType.updateOrCreateRetentionType(this.form.value).subscribe((r:any) => {
      this.modalService.dismissAll();
      this.form.reset();
      this.getRetentionTypes();
      this._swal.show({
        icon: 'success',
        title: 'Proceso satisfactorio',
        text: 'El tipo de retención ha sido creado con éxito.',
        showCancel: false,
        timer: 1000
      });
    })
  }

  activateOrInactivate(retention, state){
    let data = {
      id: retention.id,
      state
    }
    this._swal.show({
      icon: 'question',
      title: '¿Estás seguro(a)?',
      text: (data.state == 'Inactivo' ? '¡El tipo de retención de anulará!' : '¡El tipo de retención de activará!')
    }).then((r) => {
      if (r.isConfirmed) {
        this._retentionType.updateOrCreateRetentionType(data).subscribe((r) => {
          this.getRetentionTypes();
          this._swal.show({
            icon: 'success',
            title: 'Correcto',
            text: (data.state == 'Inactivo' ? 'El tipo de retención ha sido anulado con éxito.' : 'El tipo de retención ha sido activado con éxito.'),
            showCancel: false,
            timer: 1000
          })
        })
      }
    });
  }

}
