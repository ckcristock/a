import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DataDinamicService } from '../../../../data-dinamic.service';
import { OpenAgendaService } from '../../../agendamiento/open-agenda.service';
import { PersonService } from './person.service';
import { Observable, ReplaySubject } from 'rxjs';
import { functionsUtils } from '../../../../core/utils/functionsUtils';
import { ValidatorsService } from '../services/reactive-validation/validators.service';
import { SwalService } from '../services/swal.service';
import { toFormData } from 'src/app/core/utils/toFormaData';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  @ViewChild('newModal') newModal
  forma: FormGroup;

  person: any = {
    type_identification_id: '',
    identification: '',
    first_name: '',
    second_name: '',
    first_surname: '',
    second_surname: '',
    birth_day: '',
    civil_state: '',
    email: '',
    telphone: '',
    celphone: '',
    Ips: '',
    departament_id: '',

    municipality_id: '',
    companies: [],
    medical_register: '',
    person_type_id: '',
    specialities: []
  }
  image_blob: any;
  signature_blob: any;

  companies: any = []

  specialities: any = []

  peopleTypes: any = [];
  typesDocuments: Array<any> = []
  civilStates: Array<any> = [
    { name: 'Seleccione', value: '' },
    { name: 'Soltero/a', value: 'Soltero/a' },
    { name: 'Casado/a', value: 'Casado/a' },
  ]
  pagination = {
    pageSize: 20,
    page: 1,
    collectionSize: 40,

  }
  filters: any = {

    date: '',
    institution: '',
    patient: '',
    speciality: '',

  }
  searching = false;
  searchFailed = false;
  persons = [{
    identification: '1222334',
    names: 'Jhoe Due',
    city: 'VIDASER EU',
    company: 'Company Test',
    state: 'Activo'
  }, {
    identification: '1222334',
    names: 'Jhoe Due',
    city: 'MEDISERRRANO',
    company: 'Company Test',
    state: 'Activo'
  }, {
    identification: '1222334',
    names: 'Jhoe Due',
    city: 'MEGSALUD',
    company: 'Company Test',
    state: 'Activo'
  }, {
    identification: '1222334',
    names: 'Jhoe Due',
    city: 'SALUDVITAL',
    company: 'Company Test',
    state: 'Activo'

  }, {
    identification: '1222334',
    names: 'Jhoe Due',
    city: 'HEMOPLIFE',
    company: 'Company Test',
    state: 'Activo'

  }, {
    identification: '1222334',
    names: 'Jhoe Due',
    city: 'ECOMEDIS',
    company: 'Company Test',
    state: 'Activo'
  }
  ]

  specialties: any = [];
  cities: any = [];
  departments: any = [];
  municipalities: any = [];
  locations: any = [];
  saving = false;

  sig: File = null;
  img: File = null;

  constructor(private _dataDinamic: DataDinamicService, private _person:
    PersonService, private fb: FormBuilder,
    private _valReactive: ValidatorsService,
    private _swal: SwalService,

  ) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.forma = this.fb.group({
      type_document_id: ['', [this._valReactive.required]],
      identifier: ['', this._valReactive.required],
      first_name: ['', this._valReactive.required],
      second_name: [],
      second_surname: [],
      first_surname: ['', this._valReactive.required],
      birth_date: ['', this._valReactive.required],
      marital_status: ['', this._valReactive.required],
      company_id: ['', this._valReactive.required],
      companies: ['', this._valReactive.required],
      department_id: ['', this._valReactive.required],
      municipality_id: ['', this._valReactive.required],
      specialities: ['', this._valReactive.required],
      email: ['', this._valReactive.required],
      cell_phone: ['', this._valReactive.required],
      phone: ['', this._valReactive.required],
      medical_record: ['', this._valReactive.required],
      image_blob: ['', this._valReactive.required],
      signature_blob: ['', this._valReactive.required],
    });
  }

  toSave() {

    const datas = new FormData();
    datas.append('image_blob', this.img);
    datas.append('signature_blob', this.sig);
    datas.append('form', JSON.stringify(this.forma.value));

    this._person.storePeople(datas).subscribe((res: any) => {
      console.log(res);
      this.successfull(res.code);
    });
  }


  successfull(code) {
    if (code == 200) {
      this._swal.show({
        title: 'Operación exitosa',
        text: 'Guardado Correctamente',
        icon: 'success',
        showCancel: false,
      });
    }
  }


  guardar() {

    this.saving = true;
    console.log(this.forma.value);
    console.log(JSON.stringify(this.forma.value));

    this.forma.markAllAsTouched();
    if (this.forma.invalid) return false;
    this._swal
      .show({
        title: '¿Desea Guardar?',
        text: 'Se Dispone a guardar el nuevo ',
        icon: 'warning',
      })
      .then((r) => {
        if (r.isConfirmed) {
          // if (this.id) {
          // this.toEdit();
          // } else {
          this.toSave();
          // }
        }
      });
  }

  getData() {
    this.getDepartments();
    this.getSpecialties();
    this.getCompanies();
    this.getPeopleTypes();
    this.getTypeDocuments();
  }


  getCities(department) {
    if (department) {
      this._dataDinamic.getCities({ department_id: department.value }).subscribe((req: any) => {
        this.cities = req.data
        this.cities.unshift({ text: 'Seleccione', value: '' })
      })
    }
  }

  async getDepartments() {
    await this._dataDinamic.getDepartments().toPromise().then((req: any) => {
      this.departments = req.data
      this.departments.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getPeopleTypes() {
    this._dataDinamic.getPeopleTypes().subscribe((req: any) => {
      this.peopleTypes = req.data
      this.peopleTypes.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getCompanies() {
    this._dataDinamic.getCompanies(1).subscribe((req: any) => {
      this.companies = req.data
    })
  }

  getSpecialties() {
    this._dataDinamic.getSpecialties('', '').subscribe((resp: any) => {
      this.specialities = resp.data;
    });
  }

  getTypeDocuments() {
    this._dataDinamic.getTypeDocuments().subscribe((resp: any) => {
      this.typesDocuments = resp.data;
      this.typesDocuments.unshift({ text: 'Seleccione', value: '' })
    });
  }

  onFileChange(event, field) {


    const reader = new FileReader();


    if (event.target.files.length > 0) {

      switch (field) {
        case 'signature_blob':
          this.sig = event.target.files[0];
          this.forma.patchValue({
            signature_blob: this.sig
          });
          // this.forma.controls['signature_blob'].setValue(event.target.files[0])
          break;
        case 'image_blob':
          this.img = event.target.files[0];
          // this.forma.controls['image_blob'].setValue(event.target.files[0])
          this.forma.patchValue({
            image_blob: this.img
          });

          break;
      }
    }

  }

  patchValueSignature(img) {
    this.forma.patchValue({
      signature_blob: img
    });
  }

  patchValuesImg(img) {
    this.forma.patchValue({
      image_blob: img
    });
    this.forma.get('signature_blob').setValue(img);
  }

}