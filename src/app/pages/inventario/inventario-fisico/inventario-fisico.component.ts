import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { IMyDrpOptions } from 'mydaterangepicker';
import { BodeganuevoService } from '../../../core/services/bodeganuevo.service';
import { ModaldataInitComponent } from './modaldata-init/modaldata-init.component'
import { environment } from 'src/environments/environment';
import { ModalformComponent } from './modalform/modalform.component';
import { InventariofisicoService } from '../../../core/services/inventariofisico.service';
import { GrupoestibaService } from '../../../core/services/grupoestiba.service';

@Component({
  selector: 'app-inventario-fisico',
  templateUrl: './inventario-fisico.component.html',
  styleUrls: ['./inventario-fisico.component.scss']
})
export class InventarioFisicoComponent implements OnInit {



  @ViewChild('actualizaSwal') private actualizaSwal: SwalComponent;
  public FiltrosTabla: any = {
    Fechas: '',
    Bodega: '',
    Grupo: '',

  };

  public listaBodegas: any = [];
  public listaGrupoEstibas: any = [];
  public listaSubcategorias: any = [];
  public Inventarios_Terminados = [];
  public Documentos = [];

  public funcionario = JSON.parse(localStorage.getItem("User"));
  public miPerfil = JSON.parse(localStorage.getItem("miPerfil"));

  public maxSize = 5;
  public pageSize = 5;
  public TotalItems: number;
  public page = 1;
  public InformacionPaginacion: any = {
    desde: 0,
    hasta: 0,
    total: 0
  }

  myDateRangePickerOptions: IMyDrpOptions = {
    width: '130px',
    height: '21px',
    selectBeginDateTxt: 'Inicio',
    selectEndDateTxt: 'Fin',
    selectionTxtFontSize: '10px',
    dateFormat: 'yyyy-mm-dd',
  };

  iniciado: boolean;
  Cargando: boolean = false;
  Cargando2: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient,
   private router: Router, private inventariofisico: InventariofisicoService,
    private modalService: NgbModal, private _bodega: BodeganuevoService,
    private _grupoEstiba: GrupoestibaService
  ) {

  }

  ngOnInit() {

    this.getDocumentosIniciados();
    this.ConsultaFiltrada();
    //buscar las bodegas existentes
    this._bodega.getBodegas().subscribe(res => {
      if (res.Tipo == 'success') this.listaBodegas = res.Bodegas
    })
    //buscar las bodegas existentes
    this._grupoEstiba.getGrupoEstibas().subscribe(res => {
      if (res.Tipo == 'success') this.listaGrupoEstibas = res.Grupo_Estibas
    })

  }

  ConsultaFiltrada(paginacion: boolean = false) {
    this.Cargando2 = true;
    var params = this.SetFiltros(paginacion);
    this.inventariofisico.GetDocumentosTerminados(params).subscribe((data: any) => {
      if (data.codigo == 'success') {
        this.Inventarios_Terminados = data.query_result;
        this.TotalItems = data.numReg;
      } else {
        this.Inventarios_Terminados = [];
      }
      this.Cargando2 = false;
      this.SetInformacionPaginacion();
    });
  }


  SetInformacionPaginacion() {
    var calculoHasta = (this.page * this.pageSize);
    var desde = calculoHasta - this.pageSize + 1;
    var hasta = calculoHasta > this.TotalItems ? this.TotalItems : calculoHasta;

    this.InformacionPaginacion['desde'] = desde;
    this.InformacionPaginacion['hasta'] = hasta;
    this.InformacionPaginacion['total'] = this.TotalItems;
  }

  SetFiltros(paginacion: boolean) {
    let params: any = {};

    params.tam = this.pageSize;

    if (paginacion === true) {
      params.pag = this.page;
    } else {
      this.page = 1; // Volver a la página 1 al filtrar
      params.pag = this.page;
    }

    if (this.FiltrosTabla.Fechas != '' && this.FiltrosTabla.Fechas != null) {
      params.fechas = this.FiltrosTabla.Fechas;
    }

    if (this.FiltrosTabla.Bodega != '') {
      params.bodega = this.FiltrosTabla.Bodega;
    }

    if (this.FiltrosTabla.Grupo != '') {
      params.grupo = this.FiltrosTabla.Grupo;
    }


    return params;
  }

  dateRangeChanged(event) {
    if (event.formatted != "") {
      this.FiltrosTabla.Fechas = event.formatted;
    } else {
      this.FiltrosTabla.Fechas = '';
    }
    this.ConsultaFiltrada();
  }

  iniciar_inventario_fisico() {

    const modalRef = this.modalService.open(ModalformComponent);
  }

  inventario_auditor() {
    const modalAlertReference = this.modalService.open(ModaldataInitComponent, { size: 'lg', centered: true, backdrop: 'static' });
  }

  getDocumentosIniciados() {

    this.Cargando = true;
    this.inventariofisico.GetDocumentosIniciados().subscribe(res => {
      if (res.tipo == 'success') {
        this.Documentos = res.documentos;
      } else {
        this.Documentos = [];
      }
      this.Cargando = false;
    })

  }


  AccionInventario(url_api, funcionario: string, id_modelo, documento: any = []) {

    if (funcionario == '' || funcionario.length <= 4) {
      this.actualizaSwal.title = "Dato inválido";
      this.actualizaSwal.html = "Lo sentimos. Debe ingresar datos correctos";
      this.actualizaSwal.icon = "error";
      this.actualizaSwal.fire();
    } else {
      // TODO funcionarios autorizados para realizar inventario
      // let funcionarios = this.globales.funcionarios_autorizados_inventario.split(',');
      let funcionarios = "1";

      if (funcionarios.indexOf(funcionario) >= 0) {

        this.router.navigate([url_api, id_modelo], { queryParams: { func: funcionario } });

      } else {
        this.actualizaSwal.title = "Sin autorización";
        this.actualizaSwal.html = "Lo sentimos, no tienes autorización para confirmar el inventario.";
        this.actualizaSwal.icon = "error";
        this.actualizaSwal.fire();
      }

    }

  }

  continuarConteo(Documento){
     this.router.navigate(['show-inventario'], { queryParams: { bodega: Documento.id_Bodega_Nuevo, doc: Documento.Id_Doc_Inventario_Fisico } });
  }

  CambiarEstadoDocumento(estado, documento) {
    let estadoNuevo;
    if (estado == 'Haciendo Primer Conteo') {
      estadoNuevo = 'Pendiente Primer Conteo';
    } else if (estado == 'Haciendo Segundo Conteo') {
      estadoNuevo = 'Primer Conteo';
    }

    let data = new FormData();
    data.append('estado', estadoNuevo);
    data.append('idDocumento', documento.Id_Doc_Inventario_Fisico);
    data.append('Tipo', documento.Tipo);
    this.http.post(environment.ruta + 'php/inventariofisico/estiba/cambiar_estados_documentos.php', data).subscribe((res: any) => {
      if (res.tipo == 'success') {
        this.actualizaSwal.title = res.title;
        this.actualizaSwal.html = res.mensaje;
        this.actualizaSwal.icon = res.tipo;
        this.actualizaSwal.fire();
        documento.Estado = estadoNuevo;
      }
    });
  }


}
