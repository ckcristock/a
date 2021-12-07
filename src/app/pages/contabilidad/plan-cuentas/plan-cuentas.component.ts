import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { consts } from '../../../core/utils/consts';
import { contabilidad } from "../contabilidad";
import { ValidatorsService } from '../../ajustes/informacion-base/services/reactive-validation/validators.service';
import { PlanCuentasService } from './plan-cuentas.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-plan-cuentas',
  templateUrl: './plan-cuentas.component.html',
  styleUrls: ['./plan-cuentas.component.scss']
})
export class PlanCuentasComponent implements OnInit {
  @ViewChild('modal') modal:any;
  loading:boolean = false;
  form:FormGroup;
  accounts:any[] = [];
  account:any = {};
  title:any;
  banks:any[] = [];
  bankSelected:boolean;
  options = consts.options;
  type_p = contabilidad.type_pn;
  accountTypes = contabilidad.accountType;
  cuenta = contabilidad.account;
  status = contabilidad.statusAccounts;
  pagination = {
    page: 1,
    pageSize: 5,
    collectionSize: 0
  }
  filtros:any = {
    filtro_codigo: '',
    filtro_codigo_niif: '',
    filtro_nombre: '',
    filtro_nombre_niif: '',
    filtro_estado_cuenta: ''
  }
  public InformacionPaginacion:any = {
    desde: 0,
    hasta: 0,
    total: 0
  }
  constructor( 
                private fb: FormBuilder,
                private _validators: ValidatorsService,
                private _planAccountService: PlanCuentasService,
                private location: Location,
                private route: ActivatedRoute,
                private http: HttpClient ) { }

  ngOnInit(): void {
    this.createForm();
    this.RecargarDatos();
    this.getAccount_plan();
  }

  openModal() {
    this.modal.show();
    this.title = 'Nueva Cuenta';
  }

  closeModal() {
    this.modal.hide();
    this.form.reset();
  }

  createForm(){
    this.form = this.fb.group({
      id: [this.account.id],
      Tipo_P: this,
      Tipo_Niif: this,
      Codigo: this,
      Nombre: ['',this._validators.required],
      Codigo_Niif: ['',this._validators.required],
      Nombre_Niif: ['',this._validators.required],
      Ajuste_Contable: [''],
      Cierra_Terceros: [''],
      Movimiento: [0],
      Documento: [''],
      Base: [''],
      Valor: [''],
      Porcentaje: [''],
      Centro_Costo: [''],
      Depreciacion: [''],
      Amortizacion: [''],
      Exogeno: [''],
      Naturaleza: ['',this._validators.required],
      Nit_Cierre: [''],
      Banco: [''],
      Cod_Banco: [''],
      Nit: [''],
      Reporte: [''],
      Clase_Cta: [''],
      Niif: [''],
      Cie_Anual: [''],
      Estado: ['', this._validators.required],
      Cta_Numero: ['', this._validators.required],
    });
  }

  SetFiltros(paginacion:boolean = false){
    let params:any = {};

    if( paginacion === true ){      
      params.pag = this.pagination.page;
    } else {      
      this.pagination.page = 1;
      params.pag = this.pagination.page;
    }
    
    if (this.filtros.filtro_codigo != "") {
      params.cod= this.filtros.filtro_codigo;
    }
    if (this.filtros.filtro_codigo_niif != "") {
      params.cod_niif = this.filtros.filtro_codigo_niif;
    }
    if (this.filtros.filtro_nombre != "") {
      params.nombre = this.filtros.filtro_nombre;
    }
    if (this.filtros.filtro_nombre_niif != "") {
      params.nombre_niif = this.filtros.filtro_nombre_niif;
    }
    if (this.filtros.filtro_estado_cuenta != "") {
      params.estado = this.filtros.filtro_estado_cuenta;
    }

    let queryString = '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return queryString;
  }

  SetInformacionPaginacion(){
    var calculoHasta = (this.pagination.page*this.pagination.pageSize);
    var desde = calculoHasta - this.pagination.pageSize+1;
    var hasta = calculoHasta > this.pagination.collectionSize ? this.pagination.collectionSize : calculoHasta;

    this.InformacionPaginacion['desde'] = desde;
    this.InformacionPaginacion['hasta'] = hasta;
    this.InformacionPaginacion['total'] = this.pagination.collectionSize;
  }

  filtross(paginacion:boolean = false) {
    this.loading = true;
    var params = this.SetFiltros(paginacion);

    this.location.replaceState('plan-cuentas', params);    

    this.http.get(environment.ruta + '/php/plancuentas/lista_plan_cuentas.php' + params).subscribe((res:any) => {
      this.account = res.query_result;
      this.pagination.collectionSize = res.numReg;
      this.SetInformacionPaginacion();
      this.loading = false;
    })
  }

  getAccount_plan( page = 1 ) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }
    this.loading = true;
    this.http.get(environment.ruta + '/php/plancuentas/lista_plan_cuentas.php').subscribe((res:any) => {
      this.accounts = res.query_result;
      console.log(this.account);
      // this.pagination.collectionSize = res.numReg;
      this.loading = false;
    })
  }

  AsignarParametrosUrl(urlParams:any){
    this.pagination.page = urlParams.pag ? urlParams.pag : 1;
    this.filtros.filtro_codigo_niif = urlParams.cod_niif ? urlParams.cod_niif : '';
    this.filtros.filtro_codigo = urlParams.cod ? urlParams.cod : '';
    this.filtros.filtro_nombre = urlParams.nombre ? urlParams.nombre : '';
    this.filtros.filtro_nombre_niif = urlParams.nombre_niif ? urlParams.nombre_niif : '';
    this.filtros.filtro_estado_cuenta = urlParams.estado ? urlParams.estado : '';
  }

  RecargarDatos() {
    let urlParams = this.route.snapshot.queryParams;
    if (Object.keys(urlParams).length > 0) { // Si existe parametros o filtros
      // actualizando la variables con los valores de los paremetros.
      this.AsignarParametrosUrl(urlParams);
      this.filtross(this.pagination.page > 1);
    }else{
      this.filtross();
    }
  }
  
  getAccount(account) {
    this.account = {...account};
    
    this.title = 'Actualizar Cuenta'
    this.form.patchValue({
      id: this.account.id,
      Tipo_P: this.account.Tipo_P,
      Tipo_Niif: this.account.Tipo_Niif,
      Codigo: this.account.Codigo,
      Nombre: this.account.Nombre,
      Codigo_Niif: this.account.Codigo_Niif,
      Nombre_Niif: this.account.Nombre_Niif,
      Ajuste_Contable: this.account.Ajuste_Contable,
      Cierra_Terceros: this.account.Cierra_Terceros,
      Movimiento: this.account.Movimiento,
      Documento: this.account.Documento,
      Base: this.account.Base,
      Valor: this.account.Valor,
      Porcentaje: this.account.Porcentaje,
      Centro_Costo: this.account.Centro_Costo,
      Depreciacion: this.account.Depreciacion,
      Amortizacion: this.account.Amortizacion,
      Exogeno: this.account.Exogeno,
      Naturaleza: this.account.Naturaleza,
      Nit_Cierre: this.account.Nit_Cierre,
      Banco: this.account.Banco,
      Cod_Banco: this.account.Cod_Banco,
      Nit: this.account.Nit,
      Reporte: this.account.Reporte,
      Clase_Cta: this.account.Clase_Cta,
      Cie_Anual: this.account.Cie_Anual,
      Estado: this.account.Estado,
      Cta_Numero: this.account.Cta_Numero,
    });
  }

  enableFields(fild) {
    if (fild == 1) {
      this.form.get('Base').disable();
      this.form.get('Valor').disable();
      this.form.get('Porcentaje').disable();
      this.form.get('Ajuste_Contable').disable();
      this.form.get('Cie_Anual').disable();
      this.form.get('Cierra_Terceros').disable();
      this.form.get('Nit_Cierre').disable();
      this.form.get('Banco').disable();
      this.form.get('Cod_Banco').disable();
      this.form.get('Nit').disable();
      this.form.get('Clase_Cta').disable();
      this.form.get('Documento').disable();
      this.form.get('Cta_Numero').disable();
      this.form.get('Reporte').disable();
      this.form.get('Exogeno').disable();
      this.form.get('Centro_Costo').disable();
    } else {
      this.form.get('Base').enable();
      this.form.get('Valor').enable();
      this.form.get('Porcentaje').enable();
      this.form.get('Ajuste_Contable').enable();
      this.form.get('Cie_Anual').enable();
      this.form.get('Cierra_Terceros').enable();
      this.form.get('Nit_Cierre').enable();
      this.form.get('Banco').enable();
      this.form.get('Cod_Banco').enable();
      this.form.get('Nit').enable();
      this.form.get('Clase_Cta').enable();
      this.form.get('Documento').enable();
      this.form.get('Estado').enable();
      this.form.get('Cta_Numero').enable();
      this.form.get('Reporte').enable();
      this.form.get('Exogeno').enable();
      this.form.get('Centro_Costo').enable();
    }
  }

  createAccount_plan() {
    this.http.post(`${environment.ruta}/php/contabilidad/plancuentas/guardar_puc.php`, this.form.value)
    .subscribe((r:any) => {
      this.modal.hide();
      this.getAccount_plan();
      this.form.reset();
      Swal.fire({
        icon: 'success',
        title: 'Plan de cuenta creado con éxito'
      });
    });
  }

  activateOrInactivate(contract, status) {
    let data = {
      id: contract.id,
      status
    }
    Swal.fire({
      title: '¿Estas seguro?',
      text: (status === 'Inactivo'? 'La Cuenta se inactivará!' : 'La Cuenta se activará'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: ( status === 'Inactivo' ? 'Si, Inhabilitar' : 'Si, activar' )
    }).then((result) => {
      if (result.isConfirmed) {
        this._planAccountService.createAccount_plan(data)
          .subscribe( res => {
          this.getAccount_plan();
          this.modal.hide();
          Swal.fire({
            title: (status === 'Inactivo' ? 'Cuenta Inhabilitada!' : 'Cuenta activada' ),
            text: (status === 'Inactivo' ? 'La Cuenta ha sido Inhabilitada con éxito.' : 'La Cuenta ha sido activada con éxito.'),
            icon: 'success'
          })
        } )
      }
    })
  }

  getBanks(r) {
    if (r == 0) {
      this.form.get('Cod_Banco').enable();
      this.bankSelected = true;
      this._planAccountService.getBanks()
      .subscribe( (res:any) => {
        this.banks = res.data;
      })
    } else {
      this.bankSelected = false;
    }
  }

  get movement_invalid() {
    return this.form.get('Movimiento').invalid && this.form.get('Movimiento').touched;
  }

  get code_invalid() {
    return this.form.get('Codigo').invalid && this.form.get('Codigo').touched;
  }

  get type_p_invalid() {
    return this.form.get('Tipo_P').invalid && this.form.get('Tipo_P').touched;
  }

  get type_niif_invalid() {
    return this.form.get('Tipo_Niif').invalid && this.form.get('Tipo_Niif').touched;
  }

  get name_invalid() {
    return this.form.get('Nombre').invalid && this.form.get('Nombre').touched;
  }

  get niif_code_invalid() {
    return this.form.get('Codigo_Niif').invalid && this.form.get('Codigo_Niif').touched;
  }

  get niif_name_invalid() {
    return this.form.get('Nombre_Niif').invalid && this.form.get('Nombre_Niif').touched;
  }

  get niif_invalid() {
    return this.form.get('Niif').invalid && this.form.get('Niif').touched;
  }

  get account_number_invalid() {
    return this.form.get('Cta_Numero').invalid && this.form.get('Cta_Numero').touched;
  }

  get status_invalid() {
    return this.form.get('Estado').invalid && this.form.get('Estado').touched;
  }

  get nature_invalid() {
    return this.form.get('Naturaleza').invalid && this.form.get('Naturaleza').touched;
  }

}
