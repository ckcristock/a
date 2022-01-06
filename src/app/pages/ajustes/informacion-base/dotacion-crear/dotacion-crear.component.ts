import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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

  @ViewChild('modal') moda: any;

  @Input('type') type



  pagination = {
    pageSize: 15,
    page: 1,
    collectionSize: 0,
  }

  Productos:any = [];
  Categorias: any[] = [];
  public SubCategorias:any[]=[];

  ngOnInit(): void {
    this.getCategory();
    this.createForm()
    this.getData();
  }

  createForm() {
    this.form = this.fb.group({
       Id_Producto: [''],
       Id_Categoria:[''],
       Id_Subcategoria:[''],
       Nombre_Comercial: [''],
       Embalaje: [''],
       Descripcion_ATC: [''],
       Codigo_Barras: [''],
       Invima:[''],
       Tipo:['Generico'],
       dynamic: this.fb.array([]),
     });
   }

   getSubCategories(value){}

   getDinamicField(value){}

   get fieldDinamic(){
    return this.form.get('dynamic') as FormArray;
  }

  saveProduct(){}


  getData(page=1){
    this.pagination.page = page;
    let params = {
      // ...this.pagination, ...this.filtros,
      tipo : 'Dotacion'

    }
    this._catalogo.getData(params).subscribe((r:any)=>{
      console.log(r);

    })
  }

  getCategory(){
    this._category.getCategories().subscribe((r: any) => {
      this.Categorias = r.data
      this.Categorias.unshift({ text: 'Seleccione ', value: '' });
  })
  }

  closeModal(){}
  // this.modal.hide();
}
