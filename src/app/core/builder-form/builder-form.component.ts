import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ClinicalHistoryService } from 'src/app/pages/gestion-riesgo/clinical-history/clinical-history.service';
import { Response } from '../response.model';
import * as myModules from './index';
import { IServicio } from './iservicio';


@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.css'],
  providers: [ClinicalHistoryService]
})
export class BuilderFormComponent implements OnInit {

  @Output() update = new EventEmitter<any>();
  @Input('config') config: any;

  public subtypes = [];
  public histories = [];
  public modules = [];
  public subtype: any;
  public history: any;
  public types = [];
  public type: any;
  public show: boolean = false;
  dataForm: FormGroup;
  active: number;
  constructor(private _service: IServicio, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chargeFields();
  }

  chargeFields = () => {
    this._service.chargeFields({ form: this.config.IdForm, ruta: this.config.ruta_get_fields }).subscribe((res: myModules.Response) => {
      console.log(res.data);
      this.modules = res.data
      this.createForm();
      this.show = true;
    })
  }

  createForm() {
    let modulesForm = this.formBuilder.array([]);
    this.modules.forEach((module) => {
      modulesForm.push(this.formBuilder.group({
        module: module.name,
        variables: this.initFields(module['variables_form_template'])
      }))
    })

    this.dataForm = this.formBuilder.group(
      { modulesForm }
    );
  }


  getShow = (vary) => {
    return (vary.dependence == 'false') ? true : false
  }

  initFields = (variables) => {

    let fieldForms = new FormArray([]);
    variables.forEach((vary) => {

      let mygroup = this.formBuilder.group({
        ...vary, show: this.getShow(vary), values_for_select: this.formBuilder.array(vary.values_for_select), parents: this.formBuilder.array(vary.parents)
      })

      fieldForms.push(mygroup)

      mygroup.get('valor').valueChanges.subscribe((data) => {

        let controls = mygroup.parent.controls
        let parentG = mygroup.parent as FormArray

        for (let iterator = 0; iterator < controls.length; iterator++) {

          const element = parentG.at(iterator) as FormGroup

          let parents: any = element.controls.parents as FormGroup
          parents = parents.controls

          if (parents.length) {

            for (let index = 0; index < parents.length; index++) {
              let parent = parents[index];

              if (parent.value.parent_id == mygroup.value.id) {
                let options = element.value.parents

                let result = mygroup.value.values_for_select.find(element => {
                  return element.id == data
                });

                let dependences = options.filter(iter => {
                  return iter.valueDependence == result.name
                })

                if (dependences.length == 0) {
                  element.patchValue({ show: false })
                } else {
                  element.patchValue({ show: true })
                }

              }
            }
          }

          if (element.controls.dependence.value == 'false') {
            element.patchValue({ show: true })
          }
        }
      });
    })

    return fieldForms
  }

  public get dataFormModules() {
    return this.dataForm.get('modulesForm') as FormArray
  }

  onSubmit = () => {

    let id: any = this.dataFormModules.at(0).value['variables'].find((data: any) => {
      data.name == 'id'
    })

    if (this.config.parent) {

      this.dataFormModules.at(0).value['variables'].map((data: any) => {
        if (data.name == this.config.parent + '_id') data.valor = Number(this.config.parent_id)
      })

    }

    if (id) {
      this._service.update(this.dataForm.value, id, this.config.ruta_update_form).subscribe((r: Response) => {
        this.update.emit({ status: 'Actualizado', data: r })
      })
    }

    if (!id) {
      this._service.save(this.dataForm.value, this.config.ruta_save_form).subscribe((r: Response) => {
        this.update.emit({ status: 'Creado', data: r })
      })
    }

    this.dataFormModules.at(0).value['variables'].map((data: any) => data.valor = null)

  }
}
