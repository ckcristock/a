import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Response } from 'src/app/core/response.model';
import { EpssService } from '../../services/epss.service';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataDinamicService } from 'src/app/data-dinamic.service';


@Component({
  selector: 'app-crear-contratos',
  templateUrl: './crear-contratos.component.html',
  styleUrls: ['./crear-contratos.component.scss']
})
export class CrearContratosComponent implements OnInit {


  dataForm: FormGroup;
  numberRegEx = /^(0|\-?[1-9][0-9]*)$/;
  regexp = /^\d+\.\d{0,2}$/;

  public start_date: any;
  public end_date: any;
  public administrators: Array<object> = [];
  public departments: Array<object> = [];
  public priceList: Array<object> = [];
  public paymentMethods: Array<object> = [];
  public benefitsPlan: Array<object> = [];
  public locations: Array<object> = [];
  public regimes: Array<object> = [];
  public companys: Array<object> = [];

  @ViewChild('confirmacionSwal') confirmacionSwal: any;

  constructor(
    private frmbuilder: FormBuilder,
    private _epsService: EpssService,
    private _dataDinamicService: DataDinamicService
  ) { }

  ngOnInit() {

    this.getAllData();
    this.createForm();

  }

  getAllData = async () => {
    await this.getDepartments();
    this.getAdministrators()
    this.getPriceList()
    this.getPaymentMethod()
    this.getBenefitsPlan()
    this.getRegimes()
    await this.getCompanies()
    this.getLocations()
  }

  getAdministrators = () => {
    this._epsService.getAllEps().subscribe((resp: Response) => {
      this.administrators = resp.data
      this.departments.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getDepartments = async () => {
    await this._dataDinamicService.getDepartments().toPromise().then((req: any) => {
      this.departments = req.data
      this.departments.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getPriceList = () => {
    this._dataDinamicService.getPriceList().subscribe((req: any) => {
      this.priceList = req.data
      this.priceList.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getPaymentMethod = () => {
    this._dataDinamicService.getPaymentMethod().subscribe((req: any) => {
      this.paymentMethods = req.data
      this.paymentMethods.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getBenefitsPlan() {
    this._dataDinamicService.getBenefitsPlan().subscribe((req: any) => {
      this.benefitsPlan = req.data
      this.benefitsPlan.unshift({ text: 'Seleccione', value: '' })
    })
  }

  getLocations() {
    // this._dataDinamicService.getLocations().subscribe((req: any) => {
    //   this.locations = req.data
    //   this.locations.unshift({ text: 'Seleccione', value: '' })
    // })
  }
  getRegimes() {
    this._dataDinamicService.getRegimens().subscribe((req: any) => {
      this.regimes = req.data
      this.regimes.unshift({ text: 'Seleccione', value: '' })
    })
  }
  getCompanies = async () => {
    await this._dataDinamicService.getCompanies().toPromise().then((req: any) => {
      this.companys = req.data
      this.companys.unshift({ text: 'Seleccione', value: '' })
    })
  }

  createForm() {
    this.dataForm = this.frmbuilder.group({
      id: ['', null],
      name: ['', Validators.required],
      code: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      administrator_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      contract_type: ['', Validators.required],
      payment_method_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      benefits_plan_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      start_date: ['', [Validators.required, this.dateRangeValidator]],
      end_date: ['', [Validators.required, this.dateRangeValidator]],
      policy: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      price_list_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      variation: ['', [Validators.required, Validators.pattern(this.regexp)]],
      company_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      department_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      regimen_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      location_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
    });
  }

  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const from = this.dataForm && this.dataForm.get("start_date").value;
    const to = this.dataForm && this.dataForm.get("end_date").value;
    if (from && to) {
      invalid = new Date(from).valueOf() > new Date(to).valueOf();
    }
    return invalid ? { invalidRange: { from, to } } : null;
  };

  GuardarContrato(dataForm: NgForm) {
    console.log(dataForm.value);
    //   this.http.post('http://core-back-main.test/api/contracts', dataForm.value).subscribe(data => {
    //     console.log(data);
    //     dataForm.reset();
    //     swal.fire('Contrato creado correctamente', 'success');
    //   }, error => console.error(error));
    // }
  }
}







