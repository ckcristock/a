import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { functionsUtils } from '../../../../../core/utils/functionsUtils';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.scss']
})
export class CrearProveedorComponent implements OnInit {

 
  public alertOption:SweetAlertOptions = {};
  public datosCabecera = {
    Titulo: 'Nuevo Proveedor',
    Fecha: new Date()
  }
  public Departamentos: Array<any>;
  Departamento:any = '';
  Municipio:any = '';
  Municipios: Array<any>;
  DireccionesDian: any = [];
  ActividadesEcon: Array<any>;
  public DigitoVerificacion:string = '';
  public Cuentas:any = [];
  public ReteicaModel:any = '';
  public RetefuenteModel:any = '';
  public ReteivaModel:any = '';
  public Reteica:any;
  public RetePorcentajes:any = {
    Reteica: 0,
    Retefuente: 0,
    Reteiva: 0
  };
  Retefuente: any;
  Reteiva: any;
  Rut: any;
  Tipo_Persona:string = '';

  public Datos_Basicos:any = {
    Primer_Nombre: '',
    Segundo_Nombre: '',
    Primer_Apellido:'',
    Segundo_Apellido:'',
    Razon_Social:'',
    Direccion:'',
  };
  public Identificacion_Funcionario:any = JSON.parse(localStorage.getItem('User')).Identificacion_Funcionario;

  constructor( private http: HttpClient, private router: Router) { 
    this.alertOption = {
      title: "¿Está Seguro?",
      text: "Se dispone a crear este Proveedor",
      showCancelButton: true,
      cancelButtonText: "No, Dejame Comprobar!",
      confirmButtonText: 'Si, Guardar',
      showLoaderOnConfirm: true,
      focusCancel: true,
      icon: 'info',
      preConfirm: () => {
        return new Promise((resolve) => {
          this.guardarProveedor(this.FormProveedor);
        })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }
  }

  @ViewChild('FormProveedor') FormProveedor:NgForm;
  @ViewChild('message') message:any;

  search1 = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term.length < 4 ? []
        : this.Cuentas.filter(v => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100))
    );
  formatter1 = (x: { Codigo: string }) => x.Codigo;

  ngOnInit() {
    this.ListarDepartamentos();
    this.ListarDireccionesDian();
    this.ListarActividadesEconomicas();
    this.ListarCuentas();


  }

  BuscarCuenta(model, tipo) {

    /* if (model.Id_Plan_Cuentas != undefined && model.Id_Plan_Cuentas != '' && model.Id_Plan_Cuentas != null) {
      
    } */

    switch (tipo) {
      case 'Reteica':
        this.Reteica = model.Id_Plan_Cuentas;
        this.RetePorcentajes.Reteica = (parseFloat(model.Porcentaje.replace(',','.')) * 100).toFixed(2);
        break;
    
      case 'Retefuente':
      
        this.Retefuente = model.Id_Plan_Cuentas;
        this.RetePorcentajes.Retefuente = (parseFloat(model.Porcentaje.replace(',','.')) * 100).toFixed(2);

        setTimeout(() => {
          
          
        }, 100);
        break;
      case 'Reteiva':
        this.Reteiva = model.Id_Plan_Cuentas;
        this.RetePorcentajes.Reteiva = (parseFloat(model.Porcentaje.replace(',','.')) * 100).toFixed(2);
        break;
    }

  }

  ListarDepartamentos() {
    this.http.get(environment.ruta+'php/proveedores/lista_departamentos.php').subscribe((data:any)=>{
      this.Departamentos = data;
    });
  }
  
  ListarCuentas() {
    this.http.get(environment.ruta+'php/proveedores/lista_cuentas.php').subscribe((data:any)=>{
      this.Cuentas = data.Activo;
    });
  }
  
  ListarMunicipios() {
    
    this.http.get(environment.ruta+'php/proveedores/lista_municipios.php', { params: { id_dep: this.Departamento } }).subscribe((data:any)=>{
      this.Municipios = data;
    });
  }

  ListarDireccionesDian() {
    this.http.get(environment.ruta+'php/proveedores/lista_direcciones_dian.php').subscribe((data:any)=>{
      this.DireccionesDian = data;
    });
  }
  
  ListarActividadesEconomicas() {
    this.http.get(environment.ruta+'php/proveedores/lista_codigos_ciiu.php').subscribe((data:any)=>{
      this.ActividadesEcon = data;
    });
  }

  validarTipoPersona(tipo) {
    $('.Dinamico').prop('readonly', false).val('');
    switch (tipo) {
      case 'Natural':
        
        //$('.Natural').prop('disabled', false).val('');
        //$('.Juridica').prop('disabled', true).val('');
       // $('.Nombre').prop('required', true).val('');
      
        break;
    
      case 'Juridico':

       // $('.Natural').prop('disabled', true).val('');
        //$('.Juridica').prop('disabled', false).val('');

        break;
      default:
       // $('.Natural').prop('disabled', true).val('');
        //$('.Juridica').prop('disabled', true).val('');

  
        break;
    }

  }

  construirDireccion() {

    let dir1 = (document.getElementById('Dir1') as HTMLInputElement).value.toUpperCase(),
        dir2 = (document.getElementById('Dir2') as HTMLInputElement).value.toUpperCase(),
        dir3 = (document.getElementById('Dir3') as HTMLInputElement).value.toUpperCase(),
        dir4 = (document.getElementById('Dir4') as HTMLInputElement).value.toUpperCase(),
        dir5 = (document.getElementById('Dir5') as HTMLInputElement).value.toUpperCase();

    let direccion = [];

    if (dir1 != '') {
      direccion.push(dir1);
    }
    if (dir2 != '') {
      direccion.push(dir2);
    }
    if (dir3 != '') {
      dir3 = dir3.replace('-',' ');
      direccion.push(dir3)
    }
    if (dir4 != '') {
      direccion.push(dir4);
    }
    if (dir5 != '') {
      direccion.push(dir5);
    }

    setTimeout(() => {
      this.Datos_Basicos.Direccion = direccion.join(' ');
    }, 100);
  }

  getDigitoVerificacion(nit) {
    this.http.get(environment.ruta+'php/GENERALES/digitoverificacion/digitoverificacion.php',{ params: { Nit: nit } }).subscribe((data:any)=> {
      this.DigitoVerificacion = data.Digito_Verificacion;
    });
  }

  ValidarNit(nit) {
    this.http.get(environment.ruta+'php/proveedores/validar_proveedor.php',{ params: { Nit: nit } }).subscribe((data:any)=> {
      if(data && data.Id_Proveedor){
        this.message.title="Error con el Nit";
        this.message.text="El Nit ingresado ya se encuentra registrado a otro proveedor, por favor revise";
        this.message.type="warning";
        this.message.show();
        (document.getElementById("Nit") as HTMLInputElement).value='';
      }else{
        this.getDigitoVerificacion(nit);
      }
    });
  }

  validarCampoLucro(value) {

    switch (value) {
      case 'Si':
        $('#Cta_Retefuente').prop('disabled', false);
        break;
    
      default:
        $('#Cta_Retefuente').prop('disabled', true).val('');
        break;
    }
    
  }

  validarCampoContribuyente(value) {
    /* TODO JQERY REMOVE */
    switch (value) {
      case 'Si':
        $('#Cta_Reteiva').prop('disabled', true).val('');
        break;
    
      default:
        $('#Cta_Reteiva').prop('disabled', false);
        break;
    }
  }

  cargarRut(event) {
    if (event.target.files.length === 1) {

      this.Rut = event.target.files[0];

    }
  }

  guardarProveedor(Formulario) {

    let info = functionsUtils.normalize(JSON.stringify(Formulario.value));
    let info2 = functionsUtils.normalize(JSON.stringify(this.Datos_Basicos));

    let datos = new FormData();

    datos.append('datos', info);
    datos.append('datos2', info2);
    datos.append('modulo', 'Proveedor');
    
    datos.append('Rut', this.Rut);

    this.http.post(environment.ruta+'php/proveedores/guardar_proveedor.php', datos).subscribe((data:any)=>{
      this.message.type = data.tipo;
      this.message.text = data.mensaje;
      this.message.title = 'Registro!';
      this.message.show();

      if ((data.mensaje).indexOf('correctamente') >= 0) { // Si se guardó correctamente.
        setTimeout(() => {
        
          this.router.navigate(['/base/proveedores']);
        }, 200);
      }

    })
    
  }
}
