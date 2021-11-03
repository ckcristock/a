import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { functionsUtils } from '../../../../../core/utils/functionsUtils';
import { environment } from 'src/environments/environment';
import swal, { SweetAlertOptions } from 'sweetalert2';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.scss'],
})
export class EditarProveedorComponent implements OnInit {
  public alertOption:SweetAlertOptions = {};
  public datosCabecera = {
    Titulo: 'Editar Proveedor',
    Fecha: new Date()
  }
  public Departamentos:any;
  Departamento:any = '';
  Municipio:any = '';
  Municipios:any;
  DireccionesDian: any = [];
  ActividadesEcon:any;
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

  public Datos_Basicos:any = {
    Primer_Nombre: '',
    Segundo_Nombre: '',
    Primer_Apellido:'',
    Segundo_Apellido:'',
    Razon_Social:'',
    Direccion:'',
  };

  public Id_Proveedor:any;
  public Datos:any = {};

  constructor( private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.alertOption = {
      title: "¿Está Seguro?",
      text: "Se dispone a editar este Proveedor",
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
      allowOutsideClick: () => !swal.isLoading()
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

    this.Id_Proveedor = this.route.snapshot.params['id'];

    this.getDetallesProveedor(this.route.snapshot.params['id']);
  }

  getDetallesProveedor(id) {
    this.http.get(environment.ruta+'php/proveedores/detalle_proveedor.php', { params: { id: id } }).subscribe((data:any)=>{
      console.log(data);
      this.Datos = data.encabezado;

      this.getDigitoVerificacion(this.Datos.Id_Proveedor)
      this.ReteicaModel = data.Retenciones.Reteica;
      this.RetePorcentajes = {
        Reteica: data.Retenciones.Reteica.Porcentaje,
        Retefuente: data.Retenciones.Retefuente.Porcentaje,
        Reteiva: data.Retenciones.Reteiva.Porcentaje,
      }
      this.RetefuenteModel = data.Retenciones.Retefuente;
      this.ReteivaModel = data.Retenciones.Reteiva;
      this.validarTipoPersona(this.Datos.Tipo)

      setTimeout(() => {

        this.ListarMunicipios();
      }, 100);
    })
  }

  BuscarCuenta(model, tipo) {

    /* if (model.Id_Plan_Cuentas != undefined && model.Id_Plan_Cuentas != '' && model.Id_Plan_Cuentas != null) {

    } */

    switch (tipo) {
      case 'Reteica':
        this.Datos.Id_Plan_Cuenta_Reteica = model.Id_Plan_Cuentas;
        this.RetePorcentajes.Reteica = (parseFloat(model.Porcentaje.replace(',','.')) * 100).toFixed(2);
        break;

      case 'Retefuente':

        this.Datos.Id_Plan_Cuenta_Retefuente = model.Id_Plan_Cuentas;
        this.RetePorcentajes.Retefuente = (parseFloat(model.Porcentaje.replace(',','.')) * 100).toFixed(2);
        break;
      case 'Reteiva':
        this.Datos.Id_Plan_Cuenta_Reteiva = model.Id_Plan_Cuentas;
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
    if(this.Datos.Id_Departamento!=undefined && this.Datos.Id_Departamento!=null && this.Datos.Id_Departamento!='' ){
      this.http.get(environment.ruta+'php/proveedores/lista_municipios.php', { params: { id_dep: this.Datos.Id_Departamento } }).subscribe((data:any)=>{
        this.Municipios = data;
      });
    }

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

    switch (tipo) {
      case 'Natural':

        $('.Natural').prop('disabled', false).val('');
        $('.Juridica').prop('disabled', true).val('');

        break;

      case 'Juridico':

        $('.Natural').prop('disabled', true).val('');
        $('.Juridica').prop('disabled', false).val('');

        break;
      default:
        $('.Natural').prop('disabled', true).val('');
        $('.Juridica').prop('disabled', true).val('');
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
      this.Datos.Direccion = direccion.join(' ');
    }, 100);
  }

  getDigitoVerificacion(nit) {
    this.http.get(environment.ruta+'php/GENERALES/digitoverificacion/digitoverificacion.php',{ params: { Nit: nit } }).subscribe((data:any)=> {
      this.Datos.Digito_Verificacion=data.Digito_Verificacion;
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
    let info2 = functionsUtils.normalize(JSON.stringify(this.Datos));

    let datos = new FormData();

    datos.append('datos', info);
    datos.append('datos2', info2);
    datos.append('modulo', 'Proveedor');

    datos.append('Rut', this.Rut);

   return  this.http.post(environment.ruta+'php/proveedores/guardar_proveedor.php', datos).subscribe((data:any)=>{
      this.message.type = data.tipo;
      this.message.icon = data.mensaje;
      this.message.title = 'Registro!';
      this.message.fire();

      if ((data.mensaje).indexOf('correctamente') >= 0) { // Si se guardó correctamente.
        setTimeout(() => {

          this.router.navigate(['/ajustes/informacion-base/proveedores']);
        }, 200);
      }

    })

  }

}
