import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { data, map, param } from 'jquery';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/response.model';
import Swal from 'sweetalert2';
import { ConfiguracionEmpresaService } from './configuracion-empresa.service';
import { DatosBasicosEmpresaComponent } from './datos-basicos-empresa/datos-basicos-empresa.component';
import { DatosNominaComponent } from './datos-nomina/datos-nomina.component';
import { DatosPagoComponent } from './datos-pago/datos-pago.component';
import { DatosPilaComponent } from './datos-pila/datos-pila.component';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
@Component({
  selector: 'app-configuracion-empresa',
  templateUrl: './configuracion-empresa.component.html',
  styleUrls: ['./configuracion-empresa.component.scss'],
})
export class ConfiguracionEmpresaComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @ViewChild(DatosBasicosEmpresaComponent) datBasic: DatosBasicosEmpresaComponent;
  @ViewChild(DatosNominaComponent) datNomina: DatosNominaComponent;
  @ViewChild(DatosPagoComponent) datPago: DatosPagoComponent;
  @ViewChild(DatosPilaComponent) datPila: DatosPilaComponent;
  form: FormGroup;
  dataCompany: any;
  currentCompany: any;
  companies: Array<Object>;
  showBasicData: boolean = false;
  company_name: string = '';
  active: number = 1;
  constructor(
    private _configuracionEmpresaService: ConfiguracionEmpresaService,
    private fb: FormBuilder,
    public rutaActiva: ActivatedRoute,
    private _modal: ModalService
  ) {}

  ngOnInit(): void {
    this.currentCompany = this.rutaActiva.snapshot.params.id;
    this.createForm();
    this.getCompanies();
    if(this.currentCompany){
      this.getDataCompany()
    }
  }

  getCompanies() {
    const params = { owner: 1 };
    this._configuracionEmpresaService
      .getCompanies()
      .subscribe(
        (res: Response) => (
          (this.companies = res.data.data)
        )
      );
  }

  getDataCompany() {
    this._configuracionEmpresaService
      .getCompanyData(this.currentCompany)
      .subscribe((res: Response) => {
        this.company_name = res.data.name
        this.datBasic.company = res.data;
        this.datNomina.nomina = res.data;
        this.datPago.payments = res.data;
        this.datPago.bank = res?.data?.bank?.name;
        this.datPila.pilas = res.data;
        this.datPila.arl = res?.data?.arl?.name;
        this.datBasic.getBasicData();
        this.datPila.getPilaData();
        this.datNomina.getNominaData();
        this.datPago.getPaymentData();
      });
  }

  openModal(modal) {
    this._modal.open(modal);
  }

  createForm() {
    this.form = this.fb.group({
      calculate_work_disability: [''],
      pay_deductions: [''],
      recurring_payment: [''],
      payment_transport_subsidy: [''],
      affects_transportation_subsidy: [''],
      pay_vacations: [''],
    });
  }

  changePaymentConfiguration() {
    this._configuracionEmpresaService
      .changePaymentConfiguration(this.form.value)
      .subscribe((res: any) => {
        this.modal.hide();
        this.form.reset();
        Swal.fire({
          icon: 'success',
          title: 'Configuración cambiada',
          text: 'La Configuración de pago ha sido cambiada con éxito',
        });
      });
  }
}
