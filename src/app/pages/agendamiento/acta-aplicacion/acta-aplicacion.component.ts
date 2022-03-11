import { Component, OnInit, ViewChild } from '@angular/core';
import { ActaAplicacionService } from '../acta-aplicacion.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TimeGridSlicer } from '@fullcalendar/timegrid';

@Component({
  selector: 'app-acta-aplicacion',
  templateUrl: './acta-aplicacion.component.html',
  styleUrls: ['./acta-aplicacion.component.scss'],
})
export class ActaAplicacionComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @ViewChild('modalDocuments') modalDocuments: any;

  form: FormGroup;

  loading = false;
  Cargando = false;

  pagination = {
    pageSize: 15,
    page: 1,
    collectionSize: 0,
  };

  filtro: any = {
    name: '',
  };

  people: any[] = [];
  diagnostics: any[] = [];
  cups: any[] = [];
  ListaProductos: any[] = [];
  productsAdd: any[] = [];
  productS: any[] = [];
  productList: any[] = [];
  files: File[] = []; // Para Documentos legales
  fileArr: any[] = [];

  myFiles: string[] = [];

  constructor(private fb: FormBuilder, private _acta: ActaAplicacionService) {}
  get f() {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.createForm();
    this.getPeople();
    this.getDiagnostics();
    this.getCups();
  }

  getDiagnostics() {
    let params = {
      xxx: 'Dotacion_EPP',
    };
    this._acta.getDiagnostics(params).subscribe((data: any) => {
      this.diagnostics = data.data;
    });
  }

  getCups() {
    let params = {
      xxx: 'Dotacion_EPP',
    };
    this._acta.getCups(params).subscribe((data: any) => {
      this.cups = data.data;
    });
  }

  createForm() {
    this.form = this.fb.group({
      person: [''],
      diagnostic: [''],
      date: [''],
      cups: [''],
      observation:[''],
      file: [''],
      productSelected: this.fb.array([]),
    });
  }

  onFileChange(event) {}

  selectedProduct(event: any, p) {
    let selected = {
      Nombre_Comercial: event.target.Nombre_Comercial,
      Codigo_Cum: event.target.Codigo_Cum,
      Lote: event.target.Lote,
      Id_Producto: event.target.Id_Producto,
    };
    if (event.target.checked) {
      // Add the new value in the selected options
      this.productS.push(selected);
    } else {
      // removes the unselected option
      this.productS = this.productS.filter(
        (selected) => selected.id !== event.target.id
      );
    }
  }

  addProduct() {
    this.loading = false;
    let forma = this.form.value;
    forma.productSelected = this.productS;
    this.productList = forma.productSelected;
    this.productList.push(this.productControl(forma));
    this.modal.hide();
    this.productS = [];
  }

  productControl(event) {
    let groupSelect = this.form.get('productSelected') as FormArray;
    event.productSelected.forEach((element) => {
      let group = this.fb.group({
        Nombre_Comercial: [element.Nombre_Comercial],
        Codigo_Cum: [element.Codigo_Cum],
        Lote: [element.Lote],
        Cantidad: [''],
        Id_Producto: [element.Id_Producto],
      });
      groupSelect.push(group);
      this.loading = false;
      return group;
    });
  }
  verF() {
    console.log(this.form);
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  hideModalDocuments() {
    this.modalDocuments.hide();
    this.files = [];
    this.fileArr = [];
  }
  saveDocuments() {}

  get getProductList() {
    return this.form.get('productSelected') as FormArray;
  }

  deletedProduct(i) {
    this.getProductList.removeAt(i);
  }

  getPeople() {
    this._acta.getPeople().subscribe((r: any) => {
      this.people = r.data;
    });
  }

  listarProducto(page = 1) {
    this.loading = true;
    this.pagination.page = page;
    let params = {
      ...this.pagination,
      ...this.filtro,
      tipo: 'Dotacion_EPP',
      //company_id: this.user.person.company_worked.id,
    };
    this.modal.show();
    this._acta.GetProducts(params).subscribe((data: any) => {
      this.ListaProductos = data.data.data;
      this.Cargando = false;
    });
  }

  close() {
    this.productS = [];
    this.modal.hide();
    this.loading = false;
  }
}
