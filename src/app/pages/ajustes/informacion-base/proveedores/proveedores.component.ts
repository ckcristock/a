import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TerceroService } from 'src/app/core/services/tercero.service';
import { SwalService } from '../services/swal.service';
import { environment } from '../../../../../environments/environment';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

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
  
  public proveedores : any[] = [];
  public Documentos : any[];
  public Departamentos : any = {};
  public Municipios : any[];

  public IdProveedor : any= "";
  public Nombre : any= "";
  public RazonSocial : any= "";
  public Direccion : any= "";
  public Ciudad : any="";
  public Telefono : any= "";
  public Correo : any= "";
  public Detalle : any="";
  public Confiable : any="";
  public Tipo : any="";
  public Identificacion : any="";
  public TotalItems:number;
  public page = 1;
  public maxSize = 10;
  public pageSize = 20;

  rowsFilter = [];
  tempFilter = [];
  columns = [];
  loadingIndicator = true;
  timeout: any;

  @ViewChild('FormProveedor') FormProveedor:any;
  @ViewChild('modalProveedor') modalProveedor:any;
  @ViewChild('FormProveedorEditar') FormProveedorEditar:any;
  @ViewChild('modalProveedorEditar') modalProveedorEditar:any;
  @ViewChild('PlantillaBotones') PlantillaBotones: TemplateRef<any>;
  @ViewChild('deleteSwal') deleteSwal:any;
 /*  @ViewChild(DatatableComponent) table: DatatableComponent; */

  public encabezado:any = {};
  public Departamento:any= {};
  Regimen = [];
  public filtro_iden:string = '';
  public filtro_nombre:string = '';
  public filtro_dir:string = '';
  public filtro_ciu:string = '';
  public filtro_correo:string = '';
  public filtro_reg:string = '';
  public Cargando = false;
  public miPerfil:any = localStorage.getItem('miPerfil');
  environment2 = {ruta:''}
  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location, private terceroService: TerceroService, private swalService: SwalService) {
    
    this.ListarProveedores();
  }
  
  ngOnInit() {
    this.environment2 =  environment
    /*this.http.get(environment.ruta+'php/proveedores/lista_proveedores.php').subscribe((data:any)=>{
      this.proveedores= data;
    });*/
    this.http.get(environment.ruta+'php/lista_generales.php',{ params: { modulo: 'Tipo_Documento'}}).subscribe((data:any)=>{
      this.Documentos= data;
    });
    this.http.get(environment.ruta+'php/lista_generales.php',{ params: { modulo: 'Departamento'}}).subscribe((data:any)=>{
      this.Departamentos= data;
    });

    this.http.get(environment.ruta+'/php/proveedores/lista_proveedor_regimen.php').subscribe((data:any)=>{
      this.Regimen= data;
    });

    this.columns = [
      //#	Código	Nombre
      { prop: 'Id_Proveedor',name: "Identificacion" },
      { prop: 'Nombre' , name: "Proveedor" },
      { prop: 'Direccion'},
      { prop: 'Ciudad' },
      { prop: 'Celular'},
      { prop: 'Correo'},
      { prop: 'Regimen'},
      { cellTemplate: this.PlantillaBotones, prop: 'Id_Proveedor', name: 'Acciones', sortable: false, maxWidth: '100'}
     ]
 };

  GuardarProveedor(formulario: NgForm, modal){
     let info = JSON.stringify(formulario.value);
     let datos = new FormData();
     datos.append("modulo",'Proveedor');
     datos.append("datos",info);
     modal.hide();

      this.encabezado = [];
      this.Departamento= [];
     this.http.post(environment.ruta+'php/proveedores/guardar_proveedor.php',datos).subscribe((data:any)=>{
      formulario.reset();
      // this.proveedores= data;
      // this.fetchFilterData((db) => {
      //   this.tempFilter = [...db];
      //   this.rowsFilter = db;
      // });

      this.ListarProveedores();
    });
  }

  ListarProveedores() {

    let params = this.route.snapshot.queryParams;
    let queryString = '';

    if (Object.keys(params).length > 0) { // Si existe parametros o filtros
      // actualizando la variables con los valores de los paremetros.
      this.page = params.pag ? params.pag : 1;
      this.filtro_iden = params.iden ? params.iden : '';
      this.filtro_nombre = params.nom ? params.nom : '';
      this.filtro_dir = params.dir ? params.dir : '';
      this.filtro_ciu = params.ciu ? params.ciu : '';
      this.filtro_correo = params.correo ? params.correo : '';
      this.filtro_reg = params.reg ? params.reg : '';

      queryString = '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }

    this.Cargando = true;

    this.http.get(environment.ruta+'php/proveedores/lista_proveedores.php'+queryString).subscribe((data:any)=>{
      this.Cargando = false;
      this.proveedores= data.proveedores;
      this.TotalItems = data.numReg;
    });
  }

  paginacion() {
    let params:any = {
      pag: this.page
    };

    if (this.filtro_iden != "") {
      params.iden = this.filtro_iden;
    }
    if (this.filtro_nombre != "") {
      params.nom = this.filtro_nombre;
    }
    if (this.filtro_dir != "") {
      params.dir = this.filtro_dir;
    }
    if (this.filtro_ciu != "") {
      params.ciu = this.filtro_ciu;
    }
    if (this.filtro_correo != "") {
      params.correo = this.filtro_correo;
    }
    if (this.filtro_reg != "") {
      params.reg = this.filtro_reg;
    }

    let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');

    this.location.replaceState('/base/proveedores', queryString);

    this.Cargando = true;
    this.proveedores = [];

    this.http.get(environment.ruta + '/php/proveedores/lista_proveedores.php?'+queryString).subscribe((data: any) => {
      this.Cargando = false;
      this.proveedores = data.proveedores;
      this.TotalItems = data.numReg;
    });
  }

  filtros() {

    let params:any = {};

    if (this.filtro_iden != "" || this.filtro_nombre != "" || this.filtro_dir != "" || this.filtro_ciu != "" || this.filtro_correo != "" || this.filtro_reg != "") {
      this.page = 1;
      params.pag = this.page;

      if (this.filtro_iden != "") {
        params.iden = this.filtro_iden;
      }
      if (this.filtro_nombre != "") {
        params.nom = this.filtro_nombre;
      }
      if (this.filtro_dir != "") {
        params.dir = this.filtro_dir;
      }
      if (this.filtro_ciu != "") {
        params.ciu = this.filtro_ciu;
      }
      if (this.filtro_correo != "") {
        params.correo = this.filtro_correo;
      }

      if (this.filtro_reg != "") {
        params.reg = this.filtro_reg;
      }

      let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');

      this.location.replaceState('/base/proveedores', queryString);

      this.Cargando = true;
      this.proveedores = [];

      this.http.get(environment.ruta + '/php/proveedores/lista_proveedores.php?'+queryString).subscribe((data: any) => {
        this.Cargando = false;
        this.proveedores = data.proveedores;
        this.TotalItems = data.numReg;
      });
    } else {
      this.location.replaceState('/base/proveedores', '');

      this.page = 1;
      this.filtro_iden = '';
      this.filtro_ciu = '';
      this.filtro_correo = '';
      this.filtro_nombre = '';
      this.filtro_dir = '';
      this.filtro_reg = '';

      this.Cargando = true;
      this.proveedores = [];

      this.http.get(environment.ruta + '/php/proveedores/lista_proveedores.php').subscribe((data: any) => {
        this.Cargando = false;
        this.proveedores = data.proveedores;
        this.TotalItems = data.numReg;
      });
    }

  }

  EditarProveedor(id){
    this.http.get(environment.ruta + '/php/proveedores/detalle_proveedor.php',{   //MODIFICAR
    params: { modulo: 'Proveedor', id: id}
  }).subscribe((data: any) => {
    // console.log(data);

    this.IdProveedor = id;
    this.encabezado = data.encabezado;
    this.Departamento = data.departamento;
    this.Municipios_Departamento(data.departamento.Id_Departamento);
    this.modalProveedorEditar.show();

   });
  }

  EliminarProveedor(id){
    let datos = new FormData();
    datos.append("modulo", 'Proveedor');
    datos.append("id", id);
    this.http.post(environment.ruta + 'php/proveedores/anular_proveedor.php', datos ).subscribe((data: any) => {
      this.deleteSwal.show();
      // this.fetchFilterData((data) => {
      //   this.tempFilter = [...data];
      //   this.rowsFilter = data;
      // });
    });
  }

  Municipios_Departamento(Departamento){
    this.http.get(environment.ruta+'php/genericos/municipios_departamento.php',{ params: { id: Departamento}}).subscribe((data:any)=>{
      this.Municipios= data;
    });
  }

  // fetchFilterData(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', environment.ruta+'php/proveedores/lista_proveedores.php');

  //   req.onload = () => {
  //     cb(JSON.parse(req.response));
  //   };

  //   req.send();
  // }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      // console.log('paged!', event);
    }, 100);
  }

  actualiza_filtro(txt, col, tipo) {
    const val = txt.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      if(tipo==="="){
        return d[col].toLowerCase().indexOf(val) !== -1 || !val;
      }else if(tipo==="!="){
        return d[col].toLowerCase().indexOf(val) === -1 ;
      }

    });
    this.rowsFilter = temp;
   
  }

  actualiza_filtro_dinamico(txt, col, tipo) {
    const val = txt.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      if(tipo==="="){
        return d[col].toLowerCase().indexOf(val) !== -1 || !val;
      }else if(tipo==="!="){
        return d[col].toLowerCase().indexOf(val) === -1 ;
      }

    });
    this.rowsFilter = temp;
 
  }

  mostrarTodos(){
    // this.fetchFilterData((data) => {
    //   this.tempFilter = [...data];
    //   this.rowsFilter = data;
    // });
  }

  cambiarEstado(id) {
    this.terceroService.cambiarEstadoTercero('Proveedor',id).subscribe((data:any) => {
      this.swalService.show(
        {
          title:data.titulo,
          text:data.mensaje,
          icon:data.codigo,
        }
      );
      this.ListarProveedores();
    })
  }
}
