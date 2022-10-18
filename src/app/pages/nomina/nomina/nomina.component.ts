import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { PersonService } from '../../ajustes/informacion-base/persons/person.service';
import { SwalService } from '../../ajustes/informacion-base/services/swal.service';
import { PayRollService } from './pay-roll.service';
import { CompanyService } from '../../ajustes/informacion-base/services/company.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.scss'],
})
export class NominaComponent implements OnInit {
  nomina: any = {
    frecuencia_pago: 30,
  };
  loadingPeople = false;
  pago: any = {};
  renderizar = false;
  funcionarios = [];
  funcionariosBase = [];
  people = [];

  inicioParemeter:string;
  finParemeter: string;
  companyId : number;

  constructor(
    private _payroll: PayRollService,
    private _people: PersonService,
    public config: NgbDropdownConfig,
    private _swal: SwalService,
    private route: ActivatedRoute,
    private _company: CompanyService,
    private router:Router,
    private _user:UserService
  ) {
    config.placement = 'left';
    config.placement = 'left-bottom';
  }

   ngOnInit() {
    this.companyId = this._user.user.person.company_worked.id
    const params = this.route.snapshot.queryParams;
    if (Object.keys(params).length) {
      this.inicioParemeter = params.inicio;
      this.finParemeter = params.fin;
      this.companyId = Number( params.company_id) 
    }

    this.getPagoNomina();
    this.getPeople();
  }

  changeDate(date){

    this.inicioParemeter = moment(date).startOf('month').format('YYYY-MM-DD')
    this.finParemeter = moment(date).endOf('month').format('YYYY-MM-DD')

    this.getPagoNomina();
    this.getPeople();
  }

  

  getPagoNomina() {
    this.loadingPeople = true;
    const params: any =
      this.inicioParemeter && this.finParemeter
        ? {
            date1: this.inicioParemeter,
            date2: this.finParemeter,
          }
        : {};
    params.companyId = this.companyId;

    this._payroll.getPayrollPays(params).subscribe((r: any) => {
      this.nomina = r.data;
      this.pago.id = this.nomina.nomina_paga_id
        ? this.nomina.nomina_paga_id
        : null;
      console.log(this.pago.id);
      
      this.getFuncionarios(r.data.funcionarios);
      this.getUsuario();
      this.loadingPeople = false;
    });
  }
  getUsuario() {
    this.pago.admin_id = 1;
  }

  getFuncionarios(data) {
    this.funcionarios = data;
    this.funcionariosBase = data;
    this.renderizar = true;
  }

  filter(event) {
    if (event) {
      let fun = this.funcionariosBase.find((r) => r.id == event);
      this.funcionarios = fun ? [fun] : [];
    } else {
      this.funcionarios = this.funcionariosBase;
    }
  }

  getPeople() {
    this._people.getAll({}).subscribe((res: any) => {
      this.people = res.data;
      this.people.unshift({ text: 'Todos', value: '' });
    });
  }

  get inicioPeriodo() {
    return this.nomina.inicio_periodo
      ? moment(this.nomina.inicio_periodo).format('DD/MM/YYYY')
      : '';
  }
  get finPeriodo() {
    return this.nomina.fin_periodo
      ? moment(this.nomina.fin_periodo).format('DD/MM/YYYY')
      : '';
  }

  cargarDatosFuncionarios(fechaInicio, fechaFin) {
    this._payroll.getPeoplePayroll().subscribe((r: any) => {
      this.nomina = r.data;
    });
  }

  deletePagoNomina() {
    this._payroll.deletePayroll().subscribe(
      (r) => {},
      (err) => {}
    );
  }

  emitElectronic() {
    this._swal
      .show({
        title: 'Reporte de nómina electrónica',
        text: '¿Está seguro de emitir esta nómina?',
        icon: 'question',
      })
      .then((r) => {
        if (r.isConfirmed) {
          this._payroll
            .reporElectronic(this.nomina.nomina.id)
            .subscribe((r) => {});
        }
      });
  }
  showInterfaceForGlobo(modal) {}

  mostrarNovedades(fun) {}
  mostrarIngresosP(fun) {}
  mostrarIngresosNP(fun) {}
  mostrarDeducciones(fun) {}
  getColilla(fun) {}

  postPagoNomina() {
    this.pago.start_period = this.nomina.inicio_periodo;
    this.pago.end_period = this.nomina.fin_periodo;
    this.pago.total_salaries = this.nomina.salarios;
    this.pago.total_retentions = this.nomina.retenciones;
    this.pago.total_provisions = this.nomina.provisiones;
    this.pago.total_social_secturity = this.nomina.seguridad_social;
    this.pago.total_parafiscals = this.nomina.parafiscales;
    this.pago.total_overtimes_surcharges = this.nomina.extras;
    this.pago.total_incomes = this.nomina.ingresos;
    this.pago.total_cost = this.nomina.costo_total_empresa;

    this._swal
      .show(
        {
          title: '¿Está seguro?',
          text: 'Se dispone a generar una nómina, revise que todo coincida antes de continuar.',
          icon: 'warning',
        },
        this.savePayroll
      )
      .then((result) => {
        if (result.isConfirmed) {
          this.renderizar = false;
        }
      });
  }

  savePayroll = async () => {
    let body = {...this.pago, company_id:this.companyId}
    await this._payroll
      .savePayroll(body)
      .toPromise()
      .then((r: any) => {
        this._swal.show({
          title: 'Operación exitosa',
          text: 'Nómina Guardada correctamente',
          icon: 'success',
	  showCancel:false
        });
	this.router.navigate(['/nomina/historial-pagos'])
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
}
