import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalBasicComponent } from 'src/app/components/modal-basic/modal-basic.component';
import { BuilderFormComponent } from 'src/app/core/builder-form/builder-form.component';
import { ValidatorsService } from 'src/app/pages/ajustes/informacion-base/services/reactive-validation/validators.service';
import { SwalService } from 'src/app/pages/ajustes/informacion-base/services/swal.service';
import { ManagmentClinicalHistoryService } from '../managment-clinical-history.service';

@Component({
  selector: 'undefined-edit-clinical-model',
  templateUrl: './edit-clinical-model.component.html',
  styleUrls: ['./edit-clinical-model.component.css']
})
export class EditClinicalModelComponent implements OnInit {

  @ViewChild('modal') modal: any;

  @ViewChild(ModalBasicComponent) modalForm: ModalBasicComponent;
  @ViewChild(BuilderFormComponent) builderForm: BuilderFormComponent;

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
    name: '',
    Idmodule: ''
  }

  config: object = {
    ruta_save_form: '/modules-clinical-history',
    ruta_update_form: '/modules-clinical-history',
    ruta_get_fields: '/get-fields-for-form',
    service: 'ClinicalHistoryService',
    parent: 'clinical_history_model',
    parent_id: this.currentRoute.snapshot.params.id,
    IdForm: 2,
    size: 6
  }
  constructor(
    private fb: FormBuilder,
    private _validators: ValidatorsService,
    private _clinicalHistoryModels: ManagmentClinicalHistoryService,
    private _swal: SwalService,
    private router: Router,
    private currentRoute: ActivatedRoute

  ) { }


  ngOnInit(): void {
    this.filtro.Idmodule = this.currentRoute.snapshot.params.id
    this.get();
  }

  openModal() {
    this.modalForm.show();
  }
  closeModal() {
    this.modalForm.hide();
  }

  editClinicalModel(model) {
    this.router.navigate(['/gestion-riesgo/administracion-historia-clinica/params', model.id]);
  }

  get(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtro
    }
    this.loading = true;
    this._clinicalHistoryModels.getModules(params).subscribe((r: any) => {
      this.models = r.data.data;
      this.loading = false;
      this.pagination.collectionSize = r.data.total;
    })
  }

  update = (data) => {
    this.get()
    this.modalForm.hide()
    this._swal.show({
      icon: 'success',
      title: `Modelo  ${data.status} con éxito`,
      text: '',
      showCancel: false
    })
  }

}
