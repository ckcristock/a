import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from '../../ajustes/informacion-base/services/reactive-validation/validators.service';
import { SwalService } from '../../ajustes/informacion-base/services/swal.service';
import { ManagmentClinicalHistoryService } from './managment-clinical-history.service';

@Component({
  selector: 'undefined-managment-clinical-history',
  templateUrl: './managment-clinical-history.component.html',
  styleUrls: ['./managment-clinical-history.component.css']
})
export class ManagmentClinicalHistoryComponent implements OnInit {
  @ViewChild('modal') modal: any;
  loading: boolean = false;
  form: FormGroup;
  title: any = '';
  models: any[] = [];
  thicknesses: any[] = [];
  material: any = {};
  pagination = {
    page: 1,
    pageSize: 10,
    collectionSize: 0
  }
  filtro = {
    name: ''
  }
  constructor(
    private fb: FormBuilder,
    private _validators: ValidatorsService,
    private _clinicalHistoryModels: ManagmentClinicalHistoryService,
    private _swal: SwalService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.createForm();
    this.get();
    // this.getThicknesses();
  }

  openModal() {
    this.modal.show();
    this.title = 'Nuevo Modelo ';
  }

  closeModalVer() {
    this.modal.hide();
    this.fieldList.clear();
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.material.id],
      name: ['', this._validators.required],
      unit: ['', this._validators.required],
      type: ['', this._validators.required],
      unit_price: [''],
      kg_value: ['', this._validators.required],
      fields: this.fb.array([]),
      thicknesses: this.fb.array([]),
    });
  }

  getThicknesses() {
    this._clinicalHistoryModels.getThicknesses().subscribe((r: any) => {
      this.thicknesses = r.data;
      this.thicknessPush();
    })
  }

  editClinicalModel(model) {
    this.router.navigate(['/gestion-riesgo/administracion-historia-clinica/edit', model.id]);
  }

  get thicknessList() {
    return this.form.get('thicknesses') as FormArray;
  }

  thicknessPush() {
    let thicknesses = this.form.get('thicknesses') as FormArray;
    thicknesses.clear();
    this.thicknesses.forEach(element => {
      thicknesses.push(this.thicknessGroup(element, this.fb));
    });
  }

  thicknessGroup(element, fb: FormBuilder) {
    let group = fb.group({
      thickness: [element.thickness],
      thickness_id: [element.id],
      value: [0]
    });
    return group;
  }

  fieldsControl() {
    let field = this.fb.group({
      property: [''],
      type: [''],
      value: ['']
    });
    return field;
  }

  get fieldList() {
    return this.form.get('fields') as FormArray;
  }

  newField() {
    let field = this.fieldList;
    field.push(this.fieldsControl());
  }

  deleteField(i) {
    this.fieldList.removeAt(i);
  }

  get(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtro
    }
    this.loading = true;
    this._clinicalHistoryModels.get(params).subscribe((r: any) => {
      this.models = r.data.data;
      this.loading = false;
      this.pagination.collectionSize = r.data.total;
    })
  }

  save() {
    if (this.form.get('id').value) {
      this._clinicalHistoryModels.update(this.form.value, this.material.id).subscribe((r: any) => {
        this.form.reset();
        this.modal.hide();
        this.thicknessList.clear();
        this.fieldList.clear();
        this.get();
        this._swal.show({
          icon: 'success',
          title: 'Modelo  actualizado con éxito',
          text: '',
          showCancel: false
        })
      })
    } else {
      this._clinicalHistoryModels.save(this.form.value).subscribe((r: any) => {
        this.form.reset();
        this.modal.hide();
        this.thicknessList.clear();
        this.fieldList.clear();
        this.get();
        this._swal.show({
          icon: 'success',
          title: 'Modelo  creado con éxito',
          text: '',
          showCancel: false
        })
      })
    }
  }

}
