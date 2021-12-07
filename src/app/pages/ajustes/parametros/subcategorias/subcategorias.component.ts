import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { SwalService } from '../../informacion-base/services/swal.service';
import { environment } from 'src/environments/environment';
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SubcategoryService } from './subcategory.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.scss']
})
export class SubcategoriasComponent implements OnInit {

  form: FormGroup;


  public servicios: any[];
  @ViewChild('FormTipoServicio') FormTipoServicio: any;

  @ViewChild('confirmacionSwal') confirmacionSwal:any;
  @ViewChild('modal') modal:any;


  public PuntosSeleccionados=[];
  public Cuenta = [];
  public Modelo_Cuenta: any;
  public Bodegas:any[]=[];
  public Cargando: boolean = true;
  public page = 1;
  public TotalItems: number;
  public Sucategories: any = [];
  public Lista_Tipo_Soporte = [];
  public Retencion:any={
    Nombre:'',
    Id_Bodega:'',
    Separable:'No'
  };
  public EditFlag:boolean = false;



  constructor(private _subcategory: SubcategoryService,private http: HttpClient, private location: Location, private route: ActivatedRoute, private _swalService:SwalService,private fb: FormBuilder,
    ) {
    this.getSubcategory();
  }
  search1 = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    map(term => term.length < 4 ? []
      : this.Cuenta.filter(v => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100))
  );
formatter1 = (x: { Codigo: string }) => x.Codigo;

  ngOnInit() {
    this.createForm();
    this.http.get(environment.ruta + 'php/lista_generales.php', { params: { modulo: 'Bodega' } }).subscribe((data: any) => {
      this.Bodegas = data;
    });
  }

  createForm() {
    this.form = this.fb.group({
      id: [''],
      Nombre: ['', Validators.required],
      Separable: ['', Validators.required],
      dynamic: this.fb.array([]),
    })
  }

  dinamicFields(){
    let field = this.fb.group({
      label: [''],
      type: [''],
      required: ['']
    });
    return field;
  }

  newField(){
    let field = this.fieldDinamic;
    field.push(this.dinamicFields());
  }

  get fieldDinamic(){
    return this.form.get('dynamic') as FormArray;
  }

  deleteField(i){
    this.fieldDinamic.removeAt(i);
  }


  getSubcategory() {
     this.http.get(environment.ruta + 'php/parametros/lista_subcategoria.php').subscribe((data: any) => {
      this.Cargando = false;
      this.Sucategories = data;
    });
  }

  SaveSubcategory(){
    if(this.form.get('id').value){
      console.log("editar");

    }else{
      console.log("created");
      this._subcategory.save(this.form.value).subscribe((r:any) =>{
        this.form.reset();
        this.fieldDinamic.clear();
        this.getSubcategory()
        Swal.fire({
          icon: 'success',
          title: 'Subcategoria creada con éxito',
          text: '',

        })
      })
    }
  }



  // save(){
  //   if (this.form.get('id').value) {
  //     this._materials.update(this.form.value, this.material.id).subscribe((r:any) => {
  //       this.form.reset();
  //       this.modal.hide();
  //       this.thicknessList.clear();
  //       this.fieldList.clear();
  //       this.getMaterials();
  //       this._swal.show({
  //         icon: 'success',
  //         title: 'Material actualizado con éxito',
  //         text: '',
  //         showCancel: false
  //       })
  //     })
  //   } else {
  //     this._materials.save(this.form.value).subscribe((r:any) =>{
  //       this.form.reset();
  //       this.modal.hide();
  //       this.thicknessList.clear();
  //       this.fieldList.clear();
  //       this.getMaterials();
  //       this._swal.show({
  //         icon: 'success',
  //         title: 'Material creado con éxito',
  //         text: '',
  //         showCancel: false
  //       })
  //     })
  //   }
  // }

  // GuardarRetencion(modal) {



  //   let info = this.normalize(JSON.stringify(this.Retencion));
  //   let datos = new FormData();
  //   datos.append("datos", info);
  //   if (this.EditFlag) {
  //     this.http.post(environment.ruta + 'php/parametros/editar_subcategoria.php', datos).subscribe((data: any) => {
  //       if (data.codigo == 'success') {
  //         this._swalService.ShowMessage(data);
  //         modal.hide();
  //         this.Retencion={
  //           Nombre:'',
  //           Id_Bodega:'',
  //           Separable:'No'
  //         };
  //         this.getSubcategory();
  //         this.EditFlag = false;
  //       }else{
  //         this._swalService.ShowMessage(data);
  //       }
  //     });
  //   }else{
  //     this.http.post(environment.ruta + 'php/parametros/guardar_subcategoria.php', datos).subscribe((data: any) => {
  //       modal.hide();
  //       this.confirmacionSwal.title="Operación Exitosa";
  //       this.confirmacionSwal.text= data.mensaje;
  //       this.confirmacionSwal.type= data.tipo;
  //       this.confirmacionSwal.show();

  //       this.Retencion={
  //         Nombre:'',
  //         Id_Bodega:'',
  //         Separable:'No'
  //       };
  //       this.getSubcategory();
  //     });
  //   }



  // }
  normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
        to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};

    for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );

    return function( str ) {
        var ret = [];
        for( var i = 0, j = str.length; i < j; i++ ) {
            var c = str.charAt( i );
            if( mapping.hasOwnProperty( str.charAt( i ) ) )
                ret.push( mapping[ c ] );
            else
                ret.push( c );
        }
        return ret.join( '' );
    }

  })();

  EliminarRetencion(id){
  let info = id;
  let datos = new FormData();
  datos.append("id", info);
  datos.append("modulo", "Subcategoria");
  this.http.post(environment.ruta + 'php/parametros/eliminar_caja.php', datos).subscribe((data: any) => {
    this.confirmacionSwal.title="Operacion Exitosa";
  this.confirmacionSwal.text= data.mensaje;
  this.confirmacionSwal.type= data.tipo;
  this.confirmacionSwal.show();
 this.getSubcategory();
  });
}

public GetDetallesCategoria(id_subcategoria:string){
  this.http.get(environment.ruta + 'php/parametros/get_detalles_subcategoria.php', {params:{id_subcategoria:id_subcategoria}}).subscribe((data: any) => {
    if (data.codigo == 'success') {
      this.Retencion = data.query_result;
      this.EditFlag = true;
      this.modal.show();
    }else{
      this.EditFlag = false;
      this.Retencion={
        Nombre:'',
        Id_Bodega:'',
        Separable:'No',
      };
      this._swalService.ShowMessage(data);
    }
  });
}

public CerrarModal(){
  this.modal.hide();
  this.Retencion={
    Nombre:'',
    Id_Bodega:'',
  };
}

}
