import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/core/response.model';
import { ValidatorsService } from 'src/app/pages/ajustes/informacion-base/services/reactive-validation/validators.service';
import { SwalService } from 'src/app/pages/ajustes/informacion-base/services/swal.service';
import { ManagmentClinicalHistoryService } from '../managment-clinical-history.service';

@Component({
  selector: 'undefined-variables-clinical-model',
  templateUrl: './variables-clinical-model.component.html',
  styleUrls: ['./variables-clinical-model.component.css']
})
export class VariablesClinicalModelComponent implements OnInit {

  @ViewChild('modal') modal: any;
  loading: boolean = false;
  form: FormGroup;
  title: any = '';
  models: any[] = [];
  module: any = {};
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
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.createForm();
    this.get();
  }

  openModal() {
    this.modal.show();
    this.title = 'Nuevo Modelo ';
  }

  closeModalVer() {
    this.modal.hide();
    this.fieldList.clear();
    // this.dependencexList.clear();
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.route.snapshot.params['id']],
      fields: this.fb.array([]),
    });
  }

  get fieldList() {
    return this.form.get('fields') as FormArray;
  }


  newField() {
    let field = this.fieldList;
    field.push(this.fieldsControl());
  }

  newDependence(i: FormGroup) {
    let dependence = i.get('dependencex') as FormArray;
    dependence.push(this.dependenceControl());
  }

  dependenceControl(): FormGroup {
    let field = this.fb.group({
      dependencia: ['', this._validators.required],
      valueDependend: [''],
      parent: ['', this._validators.required],
      valueConditions: ['', this._validators.required],
    });
    return field;
  }

  fieldsControl() {
    let field = this.fb.group({
      property: [''],
      dependencex: this.fb.array([]),
      valueDependend: [''],
      required: [''],
      parent: [''],
      type: [''],
      value: ['']
    });
    return field;
  }

  deleteField(i) {
    this.fieldList.removeAt(i);
  }

  deleteDependence(i) {
    this.fieldList.removeAt(i);
    i.get('dependencex').removeAt(i);
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

    this._clinicalHistoryModels.sendVariables(this.form.value).subscribe((res: Response) => {
      this._swal.show({
        icon: 'success',
        title: 'Modelo  actualizado con éxito',
        text: '',
        showCancel: false
      })

      this.router.navigate(['/gestion-riesgo/administracion-historia-clinica/edit', this.route.snapshot.params['id']]);

    })

  }

}
