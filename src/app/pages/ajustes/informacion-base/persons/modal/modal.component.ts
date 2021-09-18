import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import { ValidatorsService } from '../../services/reactive-validation/validators.service';
import { SwalService } from '../../services/swal.service';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private _dataDinamic: DataDinamicService, private _person:
    PersonService, private fb: FormBuilder,
    private _valReactive: ValidatorsService,
    private _swal: SwalService) {

  }

  ngOnInit(): void {
    this.person = new Person;
    this.getData();
    this.buildForm();
  }


  @ViewChild('newModal') newModal

  forma: FormGroup;
  public id = null;
  public person: Person;


  companies: any = []
  specialities: any = []
  peopleTypes: any = [];
  specialties: any = [];
  cities: any = [];
  departments: any = [];
  municipalities: any = [];
  contracts: any = [];
  locations: any = [];

  typesDocuments: Array<any> = []

  civilStates: Array<any> = [
    { name: 'Seleccione', value: '' },
    { name: 'Soltero(a)', value: 'Soltero(a)' },
    { name: 'Casado(a)', value: 'Casado(a)' },
    { name: 'Viudo(a)', value: 'Viudo(a)' },
    { name: 'Divorciado(a)', value: 'Divorciado(a)' },
    { name: 'Union Libre', value: 'Union Libre' },
  ]

  @Output()
  dataChange: EventEmitter<any> = new EventEmitter<any>();


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
      contract: [],
      id: []
    });
  }

  show = async () => {
    if (!this.id) {
      this.newModal.show();
    } else {
      await this._person.getProfessional(this.id).toPromise().then((req: any) => {
        this.newModal.show();
        this.person = Object.assign({}, req.data)
        this.getCities()
        this.person.specialities = this.transformData(req.data.specialities)
        this.person.companies = this.transformData(req.data.companies)
        this.forma.patchValue({ id: this.id })
      })
    }
  }


  getData = () => {
    this.getDepartments();
    this.getSpecialties();
    this.getCompanies();
    this.getPeopleTypes();
    this.getTypeDocuments();
    this.getContracts();
  }

  transformData = (array: Array<object>): any => array.map(({ ...obj }) => obj['id'])

  toSave = () => {
    const datas = new FormData();
    datas.append('image_blob', this.person.img);
    datas.append('signature_blob', this.person.sig);
    datas.append('form', JSON.stringify(this.forma.value));
    this._person.storePeople(datas).subscribe((res: any) => {
      this.dataChange.emit('')
      this.successfull(res.code);
    });
  }

  toEdit = () => {
    const datas = new FormData();
    datas.append('image_blob', this.person.img);
    datas.append('signature_blob', this.person.sig);
    datas.append('form', JSON.stringify(this.forma.value));
    this._person.storePeople(datas).subscribe((res: any) => {
      this.dataChange.emit('')
      this.successfull(res.code);
    });
  }


  successfull(code) {
    if (code == 200) {
      this.hide()
      this._swal.show({
        title: 'Operación exitosa',
        text: 'Guardado Correctamente',
        icon: 'success',
        showCancel: false,
      });
    }
  }

  hide = () => {
    this.person = new Person;
    this.forma.reset()
    this.newModal.hide()
  }


  guardar = () => {

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
          if (this.id) {
            this.toEdit();
          } else {
            this.toSave();
          }
        }
      });
  }

  getContracts = async () => {
    await this._dataDinamic.getContracts().toPromise().then((req: any) => {
      this.contracts = req.data
      this.contracts.unshift({ text: 'Seleccione', value: '' })
    })
  }


  getCities = () => {
    if (this.person.department_id) {
      this._dataDinamic.getCities({ department_id: this.person.department_id }).subscribe((req: any) => {
        this.cities = req.data
        this.cities.unshift({ text: 'Seleccione', value: '' })
      })
    }
  }

  getDepartments = async () => {
    await this._dataDinamic.getDepartments().toPromise().then((req: any) => {
      this.departments = req.data
      this.departments.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getPeopleTypes = () => {
    this._dataDinamic.getPeopleTypes().subscribe((req: any) => {
      this.peopleTypes = req.data
      this.peopleTypes.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getCompanies = () => {
    this._dataDinamic.getCompanies(1).subscribe((req: any) => {
      this.companies = req.data
    })
  }

  getSpecialties = () => {
    this._dataDinamic.getSpecialties('', '').subscribe((resp: any) => {
      this.specialities = resp.data;
    });
  }

  getTypeDocuments = () => {
    this._dataDinamic.getTypeDocuments().subscribe((resp: any) => {
      this.typesDocuments = resp.data;
      this.typesDocuments.unshift({ text: 'Seleccione', value: '' })
    });
  }

  onFileChange(event, field) {
    if (event.target.files.length > 0) {
      switch (field) {
        case 'signature_blob':
          this.person.sig = event.target.files[0];
          this.forma.patchValue({
            signature_blob: this.person.sig
          });
          break;
        case 'image_blob':
          this.person.img = event.target.files[0];
          this.forma.patchValue({
            image_blob: this.person.img
          });
          break;
      }
    }
  }
}
