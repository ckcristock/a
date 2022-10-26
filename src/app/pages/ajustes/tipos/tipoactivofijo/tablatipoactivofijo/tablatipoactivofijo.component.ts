import { Component, OnInit, Output, EventEmitter, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { Observable, of, OperatorFunction } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap, filter, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TiposAnulacionService } from '../../tipos-anulacion/tipos-anulacion.service';
import { MatAccordion } from '@angular/material/expansion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalService } from '../../../informacion-base/services/swal.service';
import { NgbModal, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tablatipoactivofijo',
  templateUrl: './tablatipoactivofijo.component.html',
  styleUrls: ['./tablatipoactivofijo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TablatipoactivofijoComponent implements OnInit {

  @Output() MostrarSwal:EventEmitter<any> = new EventEmitter();

  @ViewChild('ModalTipoActivo') ModalTipoActivo:any;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  matPanel = false;
  buscandoCuenta = {
    planCuenta: false,
    planCuentaDepreciacion: false,
    planCuentaDepreciacionCredito: false
  };
  busquedaCuentaFallida = {
    planCuenta: false,
    planCuentaDepreciacion: false,
    planCuentaDepreciacionCredito: false
  };
  title: any = '';
  form: FormGroup;
  accountPlan: any[] = [];

  private campoEnfocado: string;

  public Cargando:boolean = false;
  public TiposActivosFijos:Array<any> = [];
  public tipoActivosFijos:any = {};
  // public Funcionario:any = JSON.parse(localStorage['User']);
 /*  public SwalDataObj:any = {
    icon: 'warning',
    title: 'Alerta',
    msg: 'Default'
  }; */
  /* public TipoActivoModel:any = {
    Nombre_Tipo_Activo: '',
    Categoria: '',
    Vida_Util: '',
    Vida_Util_PCGA: '',
    Porcentaje_Depreciacion_Anual: '',
    Porcentaje_Depreciacion_Anual_PCGA: '',
    Id_Plan_Cuenta_Depreciacion_NIIF: '',
    Id_Plan_Cuenta_Depreciacion_PCGA: '',
    Id_Plan_Cuenta_NIIF: '',
    Id_Plan_Cuenta_PCGA: '',
    Id_Plan_Cuenta_Credito_Depreciacion_PCGA: '',
    Id_Plan_Cuenta_Credito_Depreciacion_NIIF: ''
  }; */
  public Filtros:any = {
    nombre:'',
    categoria:'',
    vida_util:'',
    depreciacion:''
  };
  //public CuentaCreditoDepreciacionPcga:any='';
  public CuentaCreditoDepreciacionNiif:any='';
  public CuentaDepreciacionNiif:any = '';
  //public CuentaDepreciacionPcga:any = '';
  public CuentaNiif:any = '';
  //public CuentaPcga:any = '';

  //Paginación
  public maxSize = 5;
  public pageSize = 10;
  public TotalItems:number;
  public page = 1;
  public InformacionPaginacion:any = {
    desde: 0,
    hasta: 0,
    total: 0
  }

  constructor(
    // private tipoActivoService:TipoactivofijoService,
    // private generalService:GeneralService,
    // private planService:PlancuentaService,
    private fb: FormBuilder,
    private _swal: SwalService,
    private modalService: NgbModal,
    private http: HttpClient,
    private _test: TiposAnulacionService
  ) {
  }

  ngOnInit() {
    this.ConsultaFiltrada();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      Id_Tipo_Activo_Fijo: [this.tipoActivosFijos.Id_Tipo_Activo_Fijo],
      Nombre_Tipo_Activo: ['', Validators.required],
      Categoria: ['Seleccione', Validators.required],
      Vida_Util: ['', Validators.required],
      Vida_Util_PCGA: ['', Validators.required],
      Porcentaje_Depreciacion_Anual: ['', Validators.required],
      Porcentaje_Depreciacion_Anual_PCGA: ['', Validators.required],
      Id_Plan_Cuenta_Depreciacion_NIIF: ['', Validators.required],
      Id_Plan_Cuenta_Depreciacion_PCGA: ['', Validators.required],
      Id_Plan_Cuenta_NIIF: ['', Validators.required],
      Id_Plan_Cuenta_PCGA: ['', Validators.required],
      Id_Plan_Cuenta_Credito_Depreciacion_NIIF: ['', Validators.required],
      Id_Plan_Cuenta_Credito_Depreciacion_PCGA: ['', Validators.required],
      //Id_Plan_Cuenta_Debito_Depreciacion_NIIF: ['', Validators.required],
      //Id_Plan_Cuenta_Debito_Depreciacion_PCGA: ['', Validators.required]
    });
  }

  openClose(){
    if (this.matPanel == false){
      this.accordion.openAll()
      this.matPanel = true;
    } else {
      this.accordion.closeAll()
      this.matPanel = false;
    }
  }

  selCampoEnfocado(tipo){
    this.campoEnfocado=tipo;
  }

  gettipoActivosFijos(tipoActivosFijos) {
    this.tipoActivosFijos = { ...tipoActivosFijos };
    this.form.patchValue({
      Id_Tipo_Activo_Fijo: this.tipoActivosFijos.Id_Tipo_Activo_Fijo,
      Nombre_Tipo_Activo: this.tipoActivosFijos.Nombre_Tipo_Activo,
      Categoria: this.tipoActivosFijos.Categoria,
      Vida_Util: this.tipoActivosFijos.Vida_Util,
      Vida_Util_PCGA: this.tipoActivosFijos.Vida_Util,
      //Vida_Util_PCGA: this.tipoActivosFijos.Vida_Util_PCGA,
      Porcentaje_Depreciacion_Anual: this.tipoActivosFijos.Porcentaje_Depreciacion_Anual,
      Porcentaje_Depreciacion_Anual_PCGA: this.tipoActivosFijos.Porcentaje_Depreciacion_Anual,
      //Porcentaje_Depreciacion_Anual_PCGA: this.tipoActivosFijos.Porcentaje_Depreciacion_Anual_PCGA,
      Id_Plan_Cuenta_Depreciacion_NIIF: this.tipoActivosFijos.Id_Plan_Cuenta_Depreciacion_NIIF,
      Id_Plan_Cuenta_Depreciacion_PCGA: this.tipoActivosFijos.Id_Plan_Cuenta_Depreciacion_NIIF,
      //Id_Plan_Cuenta_Depreciacion_PCGA: this.tipoActivosFijos.Id_Plan_Cuenta_Depreciacion_PCGA,
      Id_Plan_Cuenta_NIIF: this.tipoActivosFijos.Id_Plan_Cuenta_NIIF,
      Id_Plan_Cuenta_PCGA: this.tipoActivosFijos.Id_Plan_Cuenta_NIIF,
      //Id_Plan_Cuenta_PCGA: this.tipoActivosFijos.Id_Plan_Cuenta_PCGA,
      Id_Plan_Cuenta_Credito_Depreciacion_NIIF: this.tipoActivosFijos.Id_Plan_Cuenta_Credito_Depreciacion_NIIF,
      Id_Plan_Cuenta_Credito_Depreciacion_PCGA: this.tipoActivosFijos.Id_Plan_Cuenta_Credito_Depreciacion_NIIF,
      //Id_Plan_Cuenta_Credito_Depreciacion_PCGA: this.tipoActivosFijos.Id_Plan_Cuenta_Credito_Depreciacion_PCGA
    });
    this.CuentaNiif=this.tipoActivosFijos.Cuenta_Niif;
    this.CuentaDepreciacionNiif=this.tipoActivosFijos.Cuenta_Depreciacion_NIIF;
    this.CuentaCreditoDepreciacionNiif=this.tipoActivosFijos.Cuenta_Credito_Niif;
  }

  closeResult = '';
  public openConfirm(confirm, titulo) {
    this.title = titulo;
    this.modalService.open(confirm, { ariaLabelledBy: 'modal-basic-title', size: 'md', scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log(this.CuentaNiif);
  }
  private getDismissReason(reason: any) {
    this.form.reset();
    this.CuentaNiif='';
    this.CuentaCreditoDepreciacionNiif='';
    this.CuentaDepreciacionNiif='';
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  activateOrInactivate(tipoActivo,estado) {
    let dataEstadoTipo = {
      Id_Tipo_Activo_Fijo: tipoActivo.Id_Tipo_Activo_Fijo,
      Estado: estado
    }
    let data = new FormData();
    data.append("modelo", this.normalize(JSON.stringify(dataEstadoTipo)));

    this._swal.show({
      title: '¿Estás seguro(a)?',
      text: (tipoActivo.Estado == 'Activo' ? '¡El tipo de activo será desactivado!' : '¡El tipo de activo será activado'),
      icon: 'question',
      showCancel: true
    }).then((result) => {
      if (result.isConfirmed) {
          this.http.post(environment.ruta+'php/tipoactivo/guardar_tipo_activo.php', data).subscribe((r: any) => {
          this._swal.show({
            icon: 'success',
            title: 'Tarea completada con éxito!',
            text: (tipoActivo.Estado == 'Activo' ? 'El tipo de activo ha sido desactivado con éxito.' : 'El tipo de activo ha sido activado con éxito.'),
            timer: 1000,
            showCancel: false
          })
          this.ConsultaFiltrada(true,this.page);
        })
      }
    })
  }

  normalize = (function () {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç\n\r'",
      to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuuNncc--*",
      mapping = {};

    for (var i = 0, j = from.length; i < j; i++){

      mapping[from.charAt(i)] = to.charAt(i);
    }

    return function (str) {
      var ret = [];
      for (var i = 0, j = str.length; i < j; i++) {

        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i)))
          ret.push(mapping[c]);
        else
          ret.push(c);
      }
      return ret.join('');
    }

  })();

  calcularPorcentajeDepreciacion() {
    let porcentaje = (100 / parseInt(this.form.value.Vida_Util)).toFixed(4);
      this.form.patchValue({
        Porcentaje_Depreciacion_Anual_PCGA: porcentaje,
        Porcentaje_Depreciacion_Anual: porcentaje,
        Vida_Util_PCGA: this.form.value.Vida_Util
      })
  }

  GuardarTipoActivo(){
    let data = new FormData();
    let modelo = this.normalize(JSON.stringify(this.form.value));
    data.append("modelo", modelo);

    this.http.post(environment.ruta+'php/tipoactivo/guardar_tipo_activo.php', data).subscribe((r: any) => {
      if (r.codigo == 'success') {
        this._swal.show({
          icon: 'success',
          title: 'Tarea completada con éxito!',
          text: 'El tipo de activo ha sido registrado con éxito.',
          timer: 1000,
          showCancel: false
        })
        this.ConsultaFiltrada(true,this.page);
        this.closeModal();
      }
    })
  }

  SetFiltros(paginacion:boolean) {

    let params:any = {};

    params.tam = this.pageSize;

    if(paginacion === true){
      params.pag = this.page;
    }else{
      this.page = 1; // Volver a la página 1 al filtrar
      params.pag = this.page;
    }

    if (this.Filtros.nombre.trim() != "") {
      params.nombre = this.Filtros.nombre;
    }

    if (this.Filtros.categoria.trim() != "") {
      params.categoria = this.Filtros.categoria;
    }

    if (this.Filtros.vida_util.trim() != "") {
      params.vida_util = this.Filtros.vida_util;
    }

    if (this.Filtros.depreciacion.trim() != "") {
      params.depreciacion = this.Filtros.depreciacion;
    }

    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return queryString;
  }

  ConsultaFiltrada(paginacion:boolean = false, event = 1) {
    this.page = event;
    var params = this.SetFiltros(paginacion);

    if(params === ''){
      this.ResetValues();
      return;
    }

    this.Cargando = true;
    this.http.get(environment.ruta+'php/tipoactivo/get_lista_tipo_activo.php?'+params).subscribe((data:any) => {
      if (data.codigo == 'success') {
        this.TiposActivosFijos = data.query_result;
        this.TotalItems = data.numReg;
      }else{
        this.TiposActivosFijos = [];
      }

      this.Cargando = false;
      this.SetInformacionPaginacion();
    });
  }

  ResetValues(){
    this.Filtros = {
      nombre:'',
      categoria:'',
      vida_util:'',
      depreciacion:''
    };
  }

  SetInformacionPaginacion(){
    var calculoHasta = (this.page*this.pageSize);
    var desde = calculoHasta-this.pageSize+1;
    var hasta = calculoHasta > this.TotalItems ? this.TotalItems : calculoHasta;

    this.InformacionPaginacion['desde'] = desde;
    this.InformacionPaginacion['hasta'] = hasta;
    this.InformacionPaginacion['total'] = this.TotalItems;
  }

  //formatter1 = (x: { Nombre_Cuenta: string }) => x.Nombre_Cuenta;
  formatter2 = (x: { Nombre_Niif: string }) => x.Nombre_Niif;
  search_cuenta_niif = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    tap(() => (this.buscandoCuenta[this.campoEnfocado] = true)),
    switchMap(term =>
      this.http.get<readonly string[]>(environment.ruta + "php/plancuentas/filtrar_cuentas.php", { params: { coincidencia: term, tipo: 'niif' }}).pipe(
        tap(() => this.busquedaCuentaFallida[this.campoEnfocado] = false),
        catchError(() => {
          this.busquedaCuentaFallida[this.campoEnfocado] = true;
          return of([]);
        })
      )
    ),
    tap(() => (this.buscandoCuenta[this.campoEnfocado] = false))
  );

  AsignarCuenta(e: NgbTypeaheadSelectItemEvent,tipo: string) {
    this.form.get(tipo+'_NIIF').setValue(e.item.Id_Plan_Cuentas);
    this.form.get(tipo+'_PCGA').setValue(e.item.Id_Plan_Cuentas);
  }
}
