import { Component, OnInit, Output, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TiposAnulacionService } from '../../tipos-anulacion/tipos-anulacion.service';

@Component({
  selector: 'app-tablatipoactivofijo',
  templateUrl: './tablatipoactivofijo.component.html',
  styleUrls: ['./tablatipoactivofijo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TablatipoactivofijoComponent implements OnInit {

  @Output() MostrarSwal:EventEmitter<any> = new EventEmitter();

  @ViewChild('ModalTipoActivo') ModalTipoActivo:any;

  public Cargando:boolean = false;
  public TiposActivosFijos:Array<any> = [];
  // public Funcionario:any = JSON.parse(localStorage['User']);
  public SwalDataObj:any = {
    icon: 'warning',
    title: 'Alerta',
    msg: 'Default'
  }; 

  public TipoActivoModel:any = {
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
  };

  public Filtros:any = {
    nombre:'',
    categoria:'',
    vida_util:'',
    depreciacion:''
  };
  public CuentaCreditoDepreciacionPcga:any='';
  public CuentaCreditoDepreciacionNiif:any='';

  public CuentaDepreciacionNiif:any = '';
  public CuentaDepreciacionPcga:any = '';
  public CuentaNiif:any = '';
  public CuentaPcga:any = '';

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
              private http: HttpClient,
              private _test: TiposAnulacionService
              ) {
    
    this.ConsultaFiltrada();
   }

  ngOnInit() {
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

  GuardarTipoActivo(){
    if (!this.ValidateBeforeSubmit()) {
      return;
    }

    let data = new FormData();
    let modelo = this.normalize(JSON.stringify(this.TipoActivoModel));
    data.append("modelo", modelo);
    this.http.post(environment.ruta+'php/tipoactivo/guardar_tipo_activo.php', data).subscribe((data:any) => {
      if (data.codigo == 'success') {
        this.LimpiarModeloTipoActivo();
        this.ModalTipoActivo.hide();
        this.ConsultaFiltrada();
      }

      this.SetDatosMensaje(data);
      this.MostrarSwal.emit(this.SwalDataObj);
      
    });
  }

  EditarTipoActivo(idTipoActivo:string){
    let p = {id_tipo_activo:idTipoActivo};
    this.http.get(environment.ruta+'php/tipoactivo/get_tipo_activo.php', {params:p}).subscribe((data:any) => {
      if (data.codigo == 'success') {
        this.TipoActivoModel = data.query_result;
        this.CuentaDepreciacionNiif = data.query_result.cuenta_depreciacion_niif;
        this.CuentaDepreciacionPcga = data.query_result.cuenta_depreciacion_pcga;
        this.CuentaNiif = data.query_result.cuenta_niif;
        this.CuentaPcga = data.query_result.cuenta_pcga;
        this.CuentaCreditoDepreciacionNiif = data.query_result.cuenta_depreciacion_credito_niif;
        this.CuentaCreditoDepreciacionPcga = data.query_result.cuenta_depreciacion_credito_pcga;
        this.ModalTipoActivo.show();  
      }else{

        this.CuentaDepreciacionNiif = '';
        this.CuentaDepreciacionPcga = '';
        this.CuentaCreditoDepreciacionNiif = '';
        this.CuentaCreditoDepreciacionPcga = '';
        this.CuentaNiif = '';
        this.CuentaPcga = '';
        this.SetDatosMensaje(data);
        this.MostrarSwal.emit(this.SwalDataObj);
        this.LimpiarModeloTipoActivo();
      }
      
    });
  }

  ValidateBeforeSubmit():boolean{
    if (parseInt(this.TipoActivoModel.Vida_Util) == 0)  {
      this.SwalDataObj.icon = 'warning';
      this.SwalDataObj.title = 'Alerta';
      this.SwalDataObj.msg = 'La vida util no puede ser 0';
      this.MostrarSwal.emit(this.SwalDataObj);
      return false;

    }else if (parseFloat(this.TipoActivoModel.Porcentaje_Depreciacion_Anual) == 0)  {
      this.SwalDataObj.icon = 'warning';
      this.SwalDataObj.title = 'Alerta';
      this.SwalDataObj.msg = 'La depreciacion anual no puede ser 0';
      this.MostrarSwal.emit(this.SwalDataObj);
      return false;

    }else if (this.TipoActivoModel.Id_Plan_Cuenta_Depreciacion_PCGA == '')  {
      this.SwalDataObj.icon = 'warning';
      this.SwalDataObj.title = 'Alerta';
      this.SwalDataObj.msg = 'Escoja un plan cuenta válido para la depreciacion PCGA';
      this.MostrarSwal.emit(this.SwalDataObj);
      return false;

    }else if (this.TipoActivoModel.Id_Plan_Cuenta_Depreciacion_NIIF == '')  {
      this.SwalDataObj.icon = 'warning';
      this.SwalDataObj.title = 'Alerta';
      this.SwalDataObj.msg = 'Escoja un plan cuenta válido para la depreciacion NIIF';
      this.MostrarSwal.emit(this.SwalDataObj);
      return false;

    }else if (this.TipoActivoModel.Id_Plan_Cuenta_NIIF == '')  {
      this.SwalDataObj.icon = 'warning';
      this.SwalDataObj.title = 'Alerta';
      this.SwalDataObj.msg = 'Escoja un plan cuenta válido para el NIIF';
      this.MostrarSwal.emit(this.SwalDataObj);
      return false;

    }else if (this.TipoActivoModel.Id_Plan_Cuenta_PCGA == '')  {
      this.SwalDataObj.icon = 'warning';
      this.SwalDataObj.title = 'Alerta';
      this.SwalDataObj.msg = 'Escoja un plan cuenta válido para el PCGA';
      this.MostrarSwal.emit(this.SwalDataObj);
      return false;

    }else if(this.TipoActivoModel.Id_Plan_Cuenta_Credito_Depreciacion_PCGA==''){
      this.SwalDataObj.icon = 'warning';
      this.SwalDataObj.title = 'Alerta';
      this.SwalDataObj.msg = 'Escoja un plan cuenta válido para credito depreciacion  PCGA';
      this.MostrarSwal.emit(this.SwalDataObj);
      return false;
    }else if(this.TipoActivoModel.Id_Plan_Cuenta_Credito_Depreciacion_NIIF==''){
      this.SwalDataObj.icon = 'warning';
      this.SwalDataObj.title = 'Alerta';
      this.SwalDataObj.msg = 'Escoja un plan cuenta válido para credito depreciacion el NIIF';
      this.MostrarSwal.emit(this.SwalDataObj);
      return false;
    } else{

      return true;
    }
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

  ConsultaFiltrada(paginacion:boolean = false) {

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

  LimpiarModeloTipoActivo(){
    this.TipoActivoModel = {
      Nombre_Tipo_Activo: '',
      Categoria: '',
      Vida_Util: '',
      Porcentaje_Depreciacion_Anual: '',
      Id_Plan_Cuenta_Depreciacion_PCGA: '',
      Id_Plan_Cuenta_Depreciacion_NIIF: '',
      Id_Plan_Cuenta_Credito_Depreciacion_PCGA: '',
      Id_Plan_Cuenta_Credito_Depreciacion_NIIF: '',
      Id_Plan_Cuenta_NIIF: '',
      Id_Plan_Cuenta_PCGA: ''
    };

    this.CuentaDepreciacionNiif = '';
    this.CuentaDepreciacionPcga = '';
    this.CuentaNiif = '';
    this.CuentaPcga = '';
    this.CuentaCreditoDepreciacionNiif='';
    this.CuentaCreditoDepreciacionPcga='';
  }

  CerrarModalTipoActivo(){
    this.ModalTipoActivo.hide();
    this.LimpiarModeloTipoActivo();
  }

  SetDatosMensaje(data:any){
    this.SwalDataObj.type = data.codigo;
    this.SwalDataObj.title = data.titulo;
    this.SwalDataObj.msg = data.mensaje;
  }

  setParams(coincidencia, tipo) {
    let p = {coincidencia: coincidencia, tipo: tipo}
    return p;
  }
  
  search_cuenta = (text$: Observable<string>) =>
  text$
  .pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap( term => term.length < 4 ? [] :
      this.getCodigoCuentasFiltradas(term, 'pcga')
      .map(response => response)
    )
  );
  formatter1 = (x: { Nombre_Cuenta: string }) => x.Nombre_Cuenta;

  
  search_cuenta_niif = (text$: Observable<string>) =>
  text$
  .pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap( term => term.length < 4 ? [] :
      this.getCodigoCuentasFiltradas(term, 'niif')
      .map(response => {
        console.log(response)
      })
    )
    );
    formatter2 = (x: { Nombre_Cuenta_Niif: string }) => x.Nombre_Cuenta_Niif;

      
  getCodigoCuentasFiltradas(coincidencia:string,tipo:string):Observable<any>{
    let p = {coincidencia:coincidencia,tipo:tipo};
    return this.http.get(environment.ruta+'php/plancuentas/filtrar_cuentas.php', {params:p});
  }

  AsignarCuentaDepreciacion(model,tipo){
    
    if (tipo == 'niif') {
      if (typeof(model) == 'object') {

        this.TipoActivoModel.Id_Plan_Cuenta_Depreciacion_NIIF = model.Id_Plan_Cuentas;      
      }else{
        this.TipoActivoModel.Id_Plan_Cuenta_Depreciacion_NIIF = '';
      }
    } else {
      if (typeof(model) == 'object') {

        this.TipoActivoModel.Id_Plan_Cuenta_Depreciacion_PCGA = model.Id_Plan_Cuentas;      
      }else{
        this.TipoActivoModel.Id_Plan_Cuenta_Depreciacion_PCGA = '';
      }
    }
    
    
  }

  AsignarCuentaCreditoDepreciacion(model,tipo){
    
    if (tipo == 'niif') {
      if (typeof(model) == 'object') {

        this.TipoActivoModel.Id_Plan_Cuenta_Credito_Depreciacion_NIIF = model.Id_Plan_Cuentas;      
      }else{
        this.TipoActivoModel.Id_Plan_Cuenta_Credito_Depreciacion_NIIF = '';
      }
    } else {
      if (typeof(model) == 'object') {

        this.TipoActivoModel.Id_Plan_Cuenta_Credito_Depreciacion_PCGA = model.Id_Plan_Cuentas;      
      }else{
        this.TipoActivoModel.Id_Plan_Cuenta_Credito_Depreciacion_PCGA = '';
      }
    }
    
    
  }

  AsignarCuentaNiif(model){  
    
    if (typeof(model) == 'object') {

      this.TipoActivoModel.Id_Plan_Cuenta_NIIF = model.Id_Plan_Cuentas;      
    }else{
      this.TipoActivoModel.Id_Plan_Cuenta_NIIF = '';
    }
    
    setTimeout(() => {
      console.log(this.TipoActivoModel);
      
    }, 200);
  }

  AsignarCuentaPcga(model){
    
    if (typeof(model) == 'object') {

      this.TipoActivoModel.Id_Plan_Cuenta_PCGA = model.Id_Plan_Cuentas;      
    }else{
      this.TipoActivoModel.Id_Plan_Cuenta_PCGA = '';
    }    
  }
  EliminarTipoActivoFijo(modelo){
    let data = new FormData();
    let model = JSON.stringify(modelo);   
    data.append("modelo", model);
    this.http.post(environment.ruta+'php/tipoactivo/eliminar_tipo_activo.php', data)
    .subscribe((data:any) => {
      if (data.codigo == 'success') {
        this.LimpiarModeloTipoActivo();
        this.ModalTipoActivo.hide();
        this.ConsultaFiltrada();
      }

      this.SetDatosMensaje(data);
      this.MostrarSwal.emit(this.SwalDataObj);
      
    });
 
  }

  calcularPorcentajeDepreciacion(tipo) {
    if (tipo == 'pcga') {
      let porcentaje = (100 / parseInt(this.TipoActivoModel.Vida_Util_PCGA)).toFixed(4);
      this.TipoActivoModel.Porcentaje_Depreciacion_Anual_PCGA = porcentaje;
    } else {
      let porcentaje = (100 / parseInt(this.TipoActivoModel.Vida_Util)).toFixed(4);
      this.TipoActivoModel.Porcentaje_Depreciacion_Anual = porcentaje;
    }
  }


}
