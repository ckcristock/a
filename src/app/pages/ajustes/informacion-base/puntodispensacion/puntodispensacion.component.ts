import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
//import { DatatableComponent} from '@swimlane/ngx-datatable';
//import { Globales } from '../../shared/globales/globales';
import { Location } from '@angular/common';
import { ExitStatus } from 'typescript';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//import { ServicioService } from '../../shared/services/servicio/servicio.service';
import { ServicioService } from '../services/servicio/servicio.service';
//import { TiposervicioService } from '../../shared/services/tiposervicio/tiposervicio.service';
import { TiposervicioService } from '../services/tiposervicio/tiposervicio.service';
//import { PuntodispensacionService } from '../../shared/services/puntosdispensacion/puntodispensacion.service';
import { PuntodispensacionService } from '../services/puntosdispensacion/puntodispensacion.service';
//import { SwalService } from '../../shared/services/swal/swal.service';
//import { ToastService } from '../../shared/services/toasty/toast.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SwalService } from '../services/swal.service';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-puntodispensacion',
  templateUrl: './puntodispensacion.component.html',
  //styleUrls: ['./puntodispensacion.component.scss', '../../../styles.scss'],
  styleUrls: ['./puntodispensacion.component.scss'],
})
export class PuntodispensacionComponent implements OnInit {
  public puntodispensacion: any = [];

  @ViewChild('FormPuntoDispensacion') FormPuntoDispensacion: any;
  @ViewChild('confirmacionSwal') confirmacionSwal: any;
  @ViewChild('modalPuntoDispensacion') modalPuntoDispensacion: any;
  @ViewChild('FormPuntoDispensacionEditar') FormPuntoDispensacionEditar: any;
  @ViewChild('modalPuntoDispensacionEditar') modalPuntoDispensacionEditar: any;
  @ViewChild('deleteSwal') deleteSwal: any;
  @ViewChild('PlantillaBotones') PlantillaBotones: TemplateRef<any>;
  //@ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  openClose(){
    if (this.matPanel == false){
      this.accordion.openAll()
      this.matPanel = true;
    } else {
      this.accordion.closeAll()
      this.matPanel = false;
    }    
  }

  PuntoDispensacion: any = [];
  bodegaDepartamento = [];
  Tipo = [];
  No_Pos = [];
  Turnero = [];
  Id_Bodega_Despacho = '';
  public Control: boolean = false;

  //Variables para filtros
  public filtro_punto_dispensacion: any = '';
  public filtro_departamento: any = '';
  public filtro_tipo_dispensacion: any = '';
  public filtro_direccion: any = '';
  public filtro_telefono: any = '';
  public filtro_no_pos: any = '';
  public filtro_turnero: any = '';
  public filtro_wacom: any = '';
  public filtro_entrega: any = '';
  public filtro_tipo_entrega: any = '';

  public Bodega = {
    Id_Bodega: '',
  };

  //Paginación
  public maxSize = 5;
  public pageSize = 20;
  public TotalItems: number;
  public page = 1;
  public InformacionPaginacion: any = {
    desde: 0,
    hasta: 0,
    total: 0,
  };

  //Variables nuevas para servicio y tipo de servicio
  public Servicios: Array<any> = [];
  public TipoServicios: Array<any> = [];

  public ServiciosEscogidos: Array<any> = [];
  public TipoServiciosEscogidos: Array<any> = [];
  public Bodegas: Array<any> = [];

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private _swalService: SwalService,
    private _serviciosService: ServicioService,
    private _tipoServicioService: TiposervicioService,
    private puntoDispesancionService: PuntodispensacionService /* private _swalService: SwalService,
    private _toastService: ToastService*/
  ) {
    // this.fetchFilterData((data) => {
    //   this.tempFilter = [...data];
    //   this.rowsFilter = data;
    // });
    this.GetServicioNgSelect();
  }
  public IdPuntoDispensacion: any = '';
  public Municipios: any = '';
  public Departamentos: any = '';

  rowsFilter = [];
  tempFilter = [];
  columns = [];
  loadingIndicator = true;
  timeout: any;

  ngOnInit() {
    this.getBodegasDespacho();

    this.http
      .get(
        environment.ruta +
          'php/puntodispensacion/detalle_punto_dispensacion.php'
      )
      .subscribe((data: any) => {
        this.puntodispensacion = data.query_result;
        this.loadingIndicator = false;
        this.TotalItems = data.numReg;
      });

    this.http
      .get(environment.ruta + 'php/lista_generales.php', {
        params: { modulo: 'Departamento' },
      })
      .subscribe((data: any) => {
        this.Departamentos = data;
      });

    this.columns = [
      //#	Código	Nombre
      { prop: 'Nombre' },
      { prop: 'NombreDepartamento' },
      { prop: 'Tipo' },
      { prop: 'Direccion' },
      { prop: 'Telefono' },
      { prop: 'No_Pos', name: 'No Pos' },
      { prop: 'Turnero' },
      { prop: 'Wacom' },
      {
        cellTemplate: this.PlantillaBotones,
        prop: 'Id_Punto_Dispensacion',
        name: 'Acciones',
        sortable: false,
        maxWidth: '100',
      },
    ];


    this.RecargarDatos();
  }

  Municipios_Departamento(Departamento) {
    this.http
      .get(environment.ruta + 'php/genericos/municipios_departamento.php', {
        params: { id: Departamento },
      })
      .subscribe((data: any) => {
        this.Municipios = data;
      });
  }

  GetTipoServicioNgSelect() {
    if (this.ServiciosEscogidos.length > 0) {
      let ids = JSON.stringify(this.ServiciosEscogidos);
      console.log(this.ServiciosEscogidos);

      let p = { id_servicio: ids };
      this.http
        .get(
          environment.ruta +
            'php/GENERALES/tiposervicio/get_tipos_servicio_ng_select.php',
          { params: p }
        )
        .subscribe((data: any) => {
          // if (data.codigo == 'success') {
          this.TipoServicios = data;
          //   } else {
          //  this.TipoServicios = [];
          //  }
        });
    } else {
      this.TipoServicios = [];
    }
  }

  GetServicioNgSelect() {
    this.http
      .get(environment.ruta + 'php/servicio/servicios_ng_select.php')
      .subscribe((data: any) => {
        this.Servicios = data;
      });
  }

  changeTipo(tipo) {
    if (tipo == 'Radicacion') {
      this.Control = true;
    } else {
      this.Control = false;
    }
  }

  GuardarPuntoDispensacion(formulario: NgForm, modal) {
    let info = JSON.stringify(formulario.value);
    let datos = new FormData();
    datos.append('modulo', 'Punto_Dispensacion');
    datos.append('datos', info);
    modal.hide();
    this.http
      .post(environment.ruta + 'php/genericos/guardar_generico.php', datos)
      .subscribe((data: any) => {
        formulario.reset();
        //this.puntodispensacion = data;
        this.LimpiarVariablesEditar();
      });

    setTimeout(() => {
      this.filtros(this.page > 1);
    }, 1000);
  }

  GuardarPuntoDispensacionNuevo(formulario: NgForm, modal) {
    if (!this._validateBeforeSubmit()) {
      return;
    } else {
      let info = JSON.stringify(formulario.value);
      let servicios = JSON.stringify(this.ServiciosEscogidos);
      let tipos_servicios = JSON.stringify(this.TipoServiciosEscogidos);
      let datos = new FormData();
      datos.append('modulo', 'Punto_Dispensacion');
      datos.append('servicios', servicios);
      datos.append('tipos_servicio', tipos_servicios);
      datos.append('modelo', info);
      this.http
        .post(environment.ruta + 'php/genericos/guardar_generico.php', datos)
        .subscribe((data: any) => {
          if (data.type == 'success') {
            this.confirmacionSwal.title = data.title;
            this.confirmacionSwal.html = data.mensaje;
            this.confirmacionSwal.icon = data.type;
            this.confirmacionSwal.fire();
            formulario.reset();
            modal.hide();
            this.LimpiarModelo();
            this.filtros();
          } else {
            this.confirmacionSwal.title = 'Oops!';
            this.confirmacionSwal.html = data.mensaje;
            this.confirmacionSwal.icon = data.tipe;
            this.confirmacionSwal.fire();
          }
        });
    }
  }

  EdicionPuntoDispensacion(formulario: NgForm, modal) {
    if (!this._validateBeforeSubmit()) {
      return;
    } else {
      let info = JSON.stringify(formulario.value);
      let servicios = JSON.stringify(this.ServiciosEscogidos);
      let tipos_servicios = JSON.stringify(this.TipoServiciosEscogidos);
      let datos = new FormData();
      datos.append('modulo', 'Punto_Dispensacion');
      datos.append('servicios', servicios);
      datos.append('tipos_servicio', tipos_servicios);
      datos.append('modelo', info);
      this.puntoDispesancionService
        .EdicionPuntosDispensacion(datos)
        .subscribe((data: any) => {
          if (data.codigo == 'success') {
            modal.hide();
            setTimeout(() => {
              this.filtros(this.page > 1);
            }, 1000);
          } else {
            this._swalService.ShowMessage(data);
          }
        });
    }
  }

  EditarPuntoDispensacion(id) {
  this.http.get(environment.ruta + 'php/genericos/detalle.php', {params: { modulo: 'Punto_Dispensacion', id: id },}).subscribe((data: any) => {
        this.IdPuntoDispensacion = id;
        this.Municipios_Departamento(data.Departamento);
        this.PuntoDispensacion = data;
        this.modalPuntoDispensacionEditar.show();
      });
  }

  EditarPuntoDispensacionNuevo(id) {
    this.http.get(environment.ruta + 'php/puntodispensacion/get_detalle_punto_dispensacion.php', {params: { id: id }}).subscribe((data: any) => {
    //this.puntoDispesancionService.GetDetallePuntoDispensacion(id).subscribe((data: any) => {
        if (data.codigo == 'success') {
          this.IdPuntoDispensacion = id;
          this.Municipios_Departamento(data.query_result.Departamento);
          this.PuntoDispensacion = data.query_result;
          this.ServiciosEscogidos = data.servicios;
          this.TipoServiciosEscogidos = data.tipos_servicio;

          setTimeout(() => {
            this.GetTipoServicioNgSelect();
          }, 300);

          this.modalPuntoDispensacionEditar.show();
        } else {
          this._swalService.ShowMessage(data);
        }
      });
  }

  AsignacionDeGruposAndEstibas(id: Number) {
    this.router.navigate(['grupos-estibas-by-puntos'], {
      queryParams: { idPunto: id },
    });
  }

  EliminarPuntoDispensacion(id, estado) {
    let datos = new FormData();
    datos.append('modulo', 'Punto_Dispensacion');
    datos.append('estado', estado);
    datos.append('id', id);
    this.http
      .post(environment.ruta + 'php/genericos/eliminar_generico.php', datos)
      .subscribe((data: any) => {
        //  this.puntodispensacion = data;
        //  this.rowsFilter= data;
        //  this.tempFilter= [...data];
        this.deleteSwal.type = data['type'];
        this.deleteSwal.title = data['title'];
        this.deleteSwal.text = data['message'];
        this.deleteSwal.show();
        this.limpiarFiltros();
        this.filtros();
      });
  }

  fetchFilterData(cb) {
    const req = new XMLHttpRequest();
    req.open(
      'GET',
      environment.ruta + '/php/puntodispensacion/detalle_punto_dispensacion.php'
    );

    req.onload = () => {
      cb(JSON.parse(req.response.puntos_dispensacion));
    };

    req.send();
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      // console.log('paged!', event);
    }, 100);
  }

  actualiza_filtro(txt, col, tipo) {
    const val = txt.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      if (tipo === '=') {
        return d[col].toLowerCase().indexOf(val) !== -1 || !val;
      } else if (tipo === '!=') {
        return d[col].toLowerCase().indexOf(val) === -1;
      }
    });
    this.rowsFilter = temp;
    // this.table.offset = 0;
  }

  actualiza_filtro_dinamico(txt, col, tipo) {
    const val = txt.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      if (tipo === '=') {
        return d[col].toLowerCase().indexOf(val) !== -1 || !val;
      } else if (tipo === '!=') {
        return d[col].toLowerCase().indexOf(val) === -1;
      }
    });
    this.rowsFilter = temp;
    //  this.table.offset = 0;
  }

  //Setear filtros
  SetFiltros(paginacion: boolean = false) {
    let params: any = {};

    if (paginacion === true) {
      params.pag = this.page;
    } else {
      this.page = 1;
      params.pag = this.page;
    }

    if (this.filtro_punto_dispensacion != '') {
      params.nombre_punto_dispensacion = this.filtro_punto_dispensacion;
    }
    if (this.filtro_departamento != '') {
      params.id_departamento = this.filtro_departamento;
    }
    if (this.filtro_tipo_dispensacion != '') {
      params.tipo_dispensacion = this.filtro_tipo_dispensacion;
    }
    if (this.filtro_direccion != '') {
      params.direccion = this.filtro_direccion;
    }
    if (this.filtro_telefono != '') {
      params.telefono = this.filtro_telefono;
    }
    if (this.filtro_no_pos != '') {
      params.no_pos = this.filtro_no_pos;
    }
    if (this.filtro_turnero != '') {
      params.turnero = this.filtro_turnero;
    }
    if (this.filtro_wacom != '') {
      params.wacom = this.filtro_wacom;
    }
    if (this.filtro_entrega != '') {
      params.entrega = this.filtro_entrega;
    }
    if (this.filtro_tipo_entrega != '') {
      params.tipo_entrega = this.filtro_tipo_entrega;
    }

    let queryString =
      '?' +
      Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&');
    return queryString;
  }

  //Aplicar filtros en la tabla
  filtros(paginacion: boolean = false) {
    var params = this.SetFiltros(paginacion);

    this.location.replaceState('/base/puntosdispensacion', params);

    this.http
      .get(
        environment.ruta +
          'php/puntodispensacion/detalle_punto_dispensacion.php' +
          params
      )
      .subscribe((data: any) => {
        this.puntodispensacion = data.query_result;
        this.TotalItems = data.numReg;
        this.SetInformacionPaginacion();
      });
  }

  //Limpia los inputs de filtros en la cabecera de la tabla
  limpiarFiltros() {
    this.filtro_departamento = '';
    this.filtro_direccion = '';
    this.filtro_no_pos = '';
    this.filtro_punto_dispensacion = '';
    this.filtro_telefono = '';
    this.filtro_tipo_dispensacion = '';
    this.filtro_turnero = '';
    this.filtro_wacom = '';
    this.filtro_tipo_entrega = '';
  }

  LimpiarVariablesEditar() {
    this.PuntoDispensacion = [];
    this.IdPuntoDispensacion = '';
    this.LimpiarModelo();
  }

  SetInformacionPaginacion() {
    var calculoHasta = this.page * this.pageSize;
    var desde = calculoHasta - this.pageSize + 1;
    var hasta = calculoHasta > this.TotalItems ? this.TotalItems : calculoHasta;

    this.InformacionPaginacion['desde'] = desde;
    this.InformacionPaginacion['hasta'] = hasta;
    this.InformacionPaginacion['total'] = this.TotalItems;
  }

  RecargarDatos() {
    let urlParams = this.route.snapshot.queryParams;
    if (Object.keys(urlParams).length > 0) {
      // Si existe parametros o filtros
      // actualizando la variables con los valores de los paremetros.
      this.page = urlParams.pag ? urlParams.pag : 1;
      this.filtro_punto_dispensacion = urlParams.nombre_punto_dispensacion
        ? urlParams.nombre_punto_dispensacion
        : '';
      this.filtro_departamento = urlParams.id_departamento
        ? urlParams.id_departamento
        : '';
      this.filtro_direccion = urlParams.direccion ? urlParams.direccion : '';
      this.filtro_tipo_dispensacion = urlParams.tipo_dispensacion
        ? urlParams.tipo_dispensacion
        : '';
      this.filtro_telefono = urlParams.telefono ? urlParams.telefono : '';
      this.filtro_no_pos = urlParams.no_pos ? urlParams.no_pos : '';
      this.filtro_turnero = urlParams.turnero ? urlParams.turnero : '';
      this.filtro_wacom = urlParams.wacom ? urlParams.wacom : '';
      this.filtro_tipo_entrega = urlParams.entrega ? urlParams.entrega : '';
      this.filtros(this.page > 1);
    } else {
      this.filtros();
    }
  }

  private _validateBeforeSubmit(): boolean {
    if (this.ServiciosEscogidos.length == 0) {
      this._swalService.ShowMessage([
        'warning',
        'Alerta',
        'Debe escoger uno o mas servicios para este punto!',
      ]);
      return false;
    } else if (this.ServiciosEscogidos.length == 0) {
      this._swalService.ShowMessage([
        'warning',
        'Alerta',
        'Debe escoger uno o mas tipos de servicio para este punto!',
      ]);
      return false;
    } else {
      return true;
    }
  }

  public LimpiarModelo() {
    this.ServiciosEscogidos = [];
    this.TipoServiciosEscogidos = [];
    this.TipoServicios = [];
  }

  getBodegasDespacho() {
    this.http
      .get(environment.ruta + 'php/despacho/get_bodegas.php')
      .subscribe((data: any) => {
        console.log(data);
        this.Bodegas = data.data;
        this.TotalItems = data.data.total;
        this.SetInformacionPaginacion();
      });
  }
}
