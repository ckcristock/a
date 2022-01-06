import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { CatalogoService } from '../catalogo/catalogo.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-dotacion-crear',
  templateUrl: './dotacion-crear.component.html',
  styleUrls: ['./dotacion-crear.component.scss']
})
export class DotacionCrearComponent implements OnInit {

  form: FormGroup;

  constructor(private _category: CategoryService,private _catalogo: CatalogoService,private fb: FormBuilder) { }

  @ViewChild('modal') modal: any;

  @Input('type') type

  pagination = {
    pageSize: 15,
    page: 1,
    collectionSize: 0,
  }

  filtro:any = {
    name: ''
  }

  Productos:any = [];
  Categorias: any[] = [];
  DotationType: any[] = [];
  SubCategorias:any[]=[];
  Producto:any = {};

  ngOnInit(): void {
    this.getDotationType();
    this.getCategory();
    this.createForm()
    this.getData();
  }

  createForm() {
    this.form = this.fb.group({
       Id_Producto: [''],
       Id_Categoria:[''],
       Id_Subcategoria:[''],
       Producto_Dotation_Type_Id:[''],
       Orden_Compra:[1],
       Nombre_Comercial: [''],
       Embalaje: [''],
       Descripcion_ATC: [''],
       Codigo_Barras: [''],
       Invima:[''],
       Tipo_Catalogo:['Dotacion_EPP'],
       Producto_Dotacion_Tipo:[''],
       dynamic: this.fb.array([]),
     });
   }

   getSubCategories(Id_Categoria_Nueva){
    this._category.getSubCategories(Id_Categoria_Nueva).subscribe((r: any) => {
      this.SubCategorias = r.data
    })
  }

  getDinamicField(Id_Subcategoria)
  {
    this.getDinamicVariables(Id_Subcategoria)
  }

  getDinamicVariables(Id_Subcategoria){
    this._category.getDinamicVariables(Id_Subcategoria).subscribe((r: any) => {
      this.fieldDinamic.clear();
      r.data.forEach(e => {
         let group = this.fb.group({
        subcategory_variables_id: e.subcategory_variables_id,
        id:e.id,
        label: e.label,
        type: e.type,
        valor: e.valor
      })
        this.fieldDinamic.push(group)
      });
    })
  }

   get fieldDinamic(){
    return this.form.get('dynamic') as FormArray;
  }

  saveProduct(){
    if(this.form.get('Id_Producto').value){
      this._category.updateProduct(this.form.value, this.Producto.Id_Producto).subscribe((r:any) =>{
        // this.dataClear();
         Swal.fire({
           icon: 'success',
           title: 'Producto editado con éxito',
           text: '',
         })
       })

    }else{
      this._category.save(this.form.value).subscribe((r:any) =>{
        Swal.fire({
          icon: 'success',
          title: 'Producto creado con éxito',
          text: '',
        })
      })
    }
  }

  getData(page=1){
    this.pagination.page = page;
    let params = {
      ...this.pagination,
      ...this.filtro,
      tipo : 'Dotacion_EPP'

    }
    this._catalogo.getData(params).subscribe((data:any)=>{
      console.log(data);
      // this.Productos = data.data.data[0]


    })
  }

  getCategory(){
    this._category.getCategories().subscribe((r: any) => {
      this.Categorias = r.data
      this.Categorias.unshift({ text: 'Seleccione ', value: '' });
    })
  }

  getDotationType(){
    this._category.getDotationType().subscribe((r: any) => {
      this.DotationType = r.data
      this.DotationType.unshift({ text: 'Seleccione ', value: '' });
    })
  }

  closeModal(){
    this.modal.hide();

  }
}
