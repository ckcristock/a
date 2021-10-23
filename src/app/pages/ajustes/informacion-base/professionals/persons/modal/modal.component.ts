import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { functionsUtils } from 'src/app/core/utils/functionsUtils';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import { OpenAgendaService } from 'src/app/pages/agendamiento/open-agenda.service';
import { EpssService } from '../../../services/epss.service';
import { ValidatorsService } from '../../../services/reactive-validation/validators.service';
import { SwalService } from '../../../services/swal.service';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  fileAvatar: string | ArrayBuffer = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=100';
  fileSgnature: string | ArrayBuffer = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=100&name=S';

  file: any = '';
  forma: FormGroup;
  public regimes: Array<object> = [];
  public tempContracts: Array<object> = [];
  public tempContracts2: Array<object> = [];
  public type_appointments = []
  public contracts: Array<object> = [];
  public appointmentId: Number
  public firma: string

  constructor(
    private _dataDinamic: DataDinamicService,
    private _epssService: EpssService,
    public _person: PersonService,
    private fb: FormBuilder,
    private _valReactive: ValidatorsService,
    private _swal: SwalService,
    private _openAgendaService: OpenAgendaService,
    private router: Router,
    private config: NgSelectConfig

  ) {

    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.loadingText = 'Loading...'
    this.config.bindValue = 'value';

  }

  ngOnInit(): void {
    this.person = new Person;
    this.getData();
    this.buildForm();
    if (this._person.id) {
      this.show();
    }
  }

  @ViewChild('newModal') newModal

  public person: Person;
  companies: any = []
  allcompanies: any = []
  specialities: any = []
  peopleTypes: any = [];
  specialties: any = [];
  cities: any = [];
  departments: any = [];
  municipalities: any = [];
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
      type_document_id: [, this._valReactive.required],
      identifier: ['', this._valReactive.required],
      first_name: ['', this._valReactive.required],
      second_name: [],
      second_surname: [],
      first_surname: ['', this._valReactive.required],
      birth_date: ['', this._valReactive.required],
      marital_status: ['', this._valReactive.required],
      // company_id: [, this._valReactive.required],
      // companies: ['', this._valReactive.required],
      department_id: ['', this._valReactive.required],
      municipality_id: ['', this._valReactive.required],
      specialities: ['', this._valReactive.required],
      email: ['', this._valReactive.required],
      cell_phone: ['', this._valReactive.required],
      phone: ['', this._valReactive.required],
      medical_record: ['', this._valReactive.required],
      image_blob: ['', this._valReactive.required],
      signature_blob: ['', this._valReactive.required],
      contract: this.fb.array([], Validators.required),
      id: []
    });
  }

  show = async () => {
    if (!this._person.id) {
      console.log('No existe id');
    } else {
      await this._person.getProfessional(this._person.id).toPromise().then((req: any) => {
        this.person = Object.assign({}, req.data)
        this.getCities()
        this.person.specialities = this.transformData(req.data.specialities)
        this.person.companies = this.transformData(req.data.companies)
        let restrictions = req.data.restriction;
        restrictions.forEach(element => {
          this.newContractUpdate(element)
        });
        this.forma.patchValue({ id: this._person.id })

      })
    }
  }

  getData = () => {
    this.getDepartments();
    this.getSpecialties();
    this.getCompanies();
    this.getAllCompanies();
    this.getPeopleTypes();
    this.getTypeDocuments();
    this.getContracts();
    this.getRegimes();
    this.getTypeAppointment();
    this.getEpsContracts();
  }

  getRegimes() {
    this._dataDinamic.getRegimens().subscribe((req: any) => {
      this.regimes = req.data
      this.regimes.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getTypeAppointment() {
    this._openAgendaService.getTypeAppointment('').subscribe((resp: any) => {
      this.type_appointments = resp.data;
    });
  }

  getEpsContracts() {
    this._epssService.getEpsContracts('').subscribe((resp: any) => {
      this.contracts = resp.data;
    });
  }

  toSave = () => {
    const datas = new FormData();
    this._person.storePeople(this.forma.value).subscribe((res: any) => {
      this.dataChange.emit('')
      this.successfull(res.code);
      this.router.navigateByUrl('/ajustes/informacion-base/professionals')

    });
  }

  toEdit = () => {
    const datas = new FormData();
    this._person.storePeople(this.forma.value).subscribe((res: any) => {
      this.dataChange.emit('')
      this.successfull(res.code);
      this.router.navigateByUrl('/ajustes/informacion-base/professionals')
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
    // this.newModal.hide()
  }

  guardar = () => {

    console.log(this.forma.value);
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
          if (this._person.id) {
            this.toEdit();
          } else {
            this.toSave();
          }
        }
      });
  }

  getContracts = async () => {

    await this._dataDinamic.getContracts().toPromise().then((req: any) => {
      this.contracts = this.tempContracts = req.data;
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

  getAllCompanies = () => {
    this._dataDinamic.getCompanies(3).subscribe((req: any) => {
      this.allcompanies = req.data
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

  onFileChanged(event, field, $model = '') {

    this.setNameFile(event, $model)

    if (event.target.files[0]) {
      let file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        switch (field) {
          case 'signature_blob':
            this.fileSgnature = (<FileReader>event.target).result;
            this.forma.patchValue({
              signature_blob: (<FileReader>event.target).result
            });
            break;

          case 'image_blob':
            this.fileAvatar = (<FileReader>event.target).result;
            this.forma.patchValue({
              image_blob: (<FileReader>event.target).result
            });
            break;
        }
      };
      functionsUtils.fileToBase64(file).subscribe((base64) => {
        this.file = base64
      });
    }
  }

  newContract() {
    let list = this.contractList;
    list.push(this.getContract());
  }

  newContractUpdate(data) {
    let list = this.contractList;
    list.push(this.getContractUpdate(data));
  }

  deleteContract() {
    this.contractList.removeAt(this.contractList.length - 1);
  }

  getContract(): FormGroup {
    let group = this.createContractGroup(this.fb);
    return group;
  }

  getContractUpdate(data): FormGroup {
    let group = this.createContractGroupUpdate(this.fb, data);
    return group;
  }

  createContractGroup(fb: FormBuilder) {
    let group = fb.group(
      {
        regimen_id: ['', Validators.required],
        company_id: ['', Validators.required],
        companies_id: ['', Validators.required],
        type_agenda_id: [, Validators.required],
        contract_id: [, Validators.required],
        contracts: [[]],
      });

    group.get('company_id').valueChanges.subscribe((value) => {
      let tem = this.tempContracts.filter((element: any) => {

        if (group.get('companies_id').value && group.get('regimen_id').value) {
          return ((value == element.company_id) || (group.get('companies_id').value.includes(element.company_id))) && (group.get('regimen_id').value.includes(element.regimen_id))
        }

      })
      group.get('contracts').setValue(tem)
    })

    group.get('regimen_id').valueChanges.subscribe((value) => {

      let tem = this.tempContracts.filter((element: any) => {
        if (group.get('companies_id').value && group.get('regimen_id').value) {
          return ((group.get('company_id').value == element.company_id) || (group.get('companies_id').value.includes(element.company_id))) && (value.includes(element.regimen_id))
        }
      })
      group.get('contracts').setValue(tem)

    })

    group.get('companies_id').valueChanges.subscribe((value) => {

      let tem = this.tempContracts.filter((element: any) => {
        if (group.get('companies_id').value && group.get('regimen_id').value) {
          return ((group.get('companies_id').value == element.company_id) || (value.includes(element.company_id))) && (group.get('regimen_id').value.includes(element.regimen_id))
        }
      })
      group.get('contracts').setValue(tem)

    })


    return group;
  }

  createContractGroupUpdate(fb: FormBuilder, data) {
    console.log('entrando ');
    let group = fb.group(
      {
        company_id: [data.company.id, Validators.required],
        regimen_id: [null, Validators.required],
        companies_id: [null, Validators.required],
        type_agenda_id: [null, Validators.required],
        contract_id: [null, Validators.required],
        contracts: [[]],
      });


    // group.get('company_id').statusChanges.subscribe(() => console.log('1023'))
    // group.get('company_id').valueChanges.subscribe(() => console.log('123'))



    group.get('company_id').valueChanges.subscribe((value) => {
      let tem = this.tempContracts.filter((element: any) => {
        console.log('1');
        if (group.get('companies_id').value && group.get('regimen_id').value) {
          return ((value == element.company_id) || (group.get('companies_id').value.includes(element.company_id))) && (group.get('regimen_id').value.includes(element.regimen_id))
        }

      })
      group.get('contracts').setValue(tem)
    })

    group.get('company_id').valueChanges.subscribe((value) => {
      let tem = this.tempContracts.filter((element: any) => {
        console.log('1');
        if (group.get('companies_id').value && group.get('regimen_id').value) {
          return ((value == element.company_id) || (group.get('companies_id').value.includes(element.company_id))) && (group.get('regimen_id').value.includes(element.regimen_id))
        }

      })
      group.get('contracts').setValue(tem)
    })

    group.get('regimen_id').valueChanges.subscribe((value) => {
      console.log('1');
      let tem = this.tempContracts.filter((element: any) => {
        if (group.get('companies_id').value && group.get('regimen_id').value) {
          return ((group.get('company_id').value == element.company_id) || (group.get('companies_id').value.includes(element.company_id))) && (value.includes(element.regimen_id))
        }
      })
      group.get('contracts').setValue(tem)

    })

    group.get('companies_id').valueChanges.subscribe((value) => {
      console.log('1');
      let tem = this.tempContracts.filter((element: any) => {
        if (group.get('companies_id').value && group.get('regimen_id').value) {
          return ((group.get('companies_id').value == element.company_id) || (value.includes(element.company_id))) && (group.get('regimen_id').value.includes(element.regimen_id))
        }
      })
      group.get('contracts').setValue(tem)

    })


    group.patchValue({
      company_id: data.company.id,
      regimen_id: this.transformData(data.regimentypes),
      companies_id: this.transformData(data.companies),
      type_agenda_id: this.transformData(data.typeappointments),
      contract_id: this.transformData(data.contracts),
      // contracts: [[]],
    })


    return group;

  }

  // filterValue = (value, group, item) => {
  //   group.get('contract_id').reset()
  //   let tem = this.tempContracts.filter((element: any) =>{
  //    return  (value == element[item]) && (value.includes(element[item]))
  //   })
  //   group.get('contracts').setValue(tem)
  // }
  // filterArray = (value, group, item) => {
  //   group.get('contract_id').reset()
  //   // let tem = this.tempContracts.filter((element: any) => (value.includes(element[item])))
  //   // group.get('contracts').setValue(tem)
  // }


  get contractList() {
    return this.forma.get('contract') as FormArray;
  }

  transformData = (array: Array<object>): any => array.map(({ ...obj }) => obj['id'])

  setNameFile(event, $model) {
    const { name: name, size } = event.target.files[0]
    this[$model] = name
  }

}
