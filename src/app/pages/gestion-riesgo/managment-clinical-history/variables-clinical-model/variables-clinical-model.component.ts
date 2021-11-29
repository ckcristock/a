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
  thicknesses: any[] = [];
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
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.route.snapshot.params['id']],
      fields: this.fb.array([]),
    });
  }

  editClinicalModel(model) {
    this.router.navigate(['/gestion-riesgo/administracion-historia-clinica/edit', model.id]);
  }

  get thicknessList() {
    return this.form.get('thicknesses') as FormArray;
  }

  fieldsControl() {
    let field = this.fb.group({
      property: [''],
      dependencia: ['', this._validators.required],
      valueDependend: [''],
      required: [''],
      parent: [''],
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

    console.log(this.form.value);
    this._clinicalHistoryModels.sendVariables(this.form.value).subscribe((res: Response) => {
      console.log(res.data);
    })

    // if (this.form.get('id').value) {
    //   this._clinicalHistoryModels.update(this.form.value, this.module.id).subscribe((r: any) => {
    //     this.form.reset();
    //     this.modal.hide();
    //     this.thicknessList.clear();
    //     this.fieldList.clear();
    //     this.get();
    //     this._swal.show({
    //       icon: 'success',
    //       title: 'Modelo  actualizado con éxito',
    //       text: '',
    //       showCancel: false
    //     })
    //   })
    // } else {
    //   this._clinicalHistoryModels.save(this.form.value).subscribe((r: any) => {
    //     this.form.reset();
    //     this.modal.hide();
    //     this.thicknessList.clear();
    //     this.fieldList.clear();
    //     this.get();
    //     this._swal.show({
    //       icon: 'success',
    //       title: 'Modelo  creado con éxito',
    //       text: '',
    //       showCancel: false
    //     })
    //   })
    // }

  }

}
