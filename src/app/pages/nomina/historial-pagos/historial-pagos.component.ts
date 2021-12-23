import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { CompanyService } from '../../ajustes/informacion-base/services/company.service';
import { PayRollPaymentsService } from './pay-roll-payments.service';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.scss'],
})
export class HistorialPagosComponent implements OnInit {
  historialPagos: any[] = [];
  renderizar = false;
  companies: any[] = [];
  companyId: number;

  constructor(
    private _payrollPayments: PayRollPaymentsService,
    private _company: CompanyService
  ) {}

  ngOnInit(): void {
    this.getHistorialPagos();
    this.getCompanies();
  }
  getHistorialPagos(forma: NgForm = null) {
    let params = forma ? forma.value : {};
    this._payrollPayments.getPayrollHistory(params).subscribe((r: any) => {
      this.historialPagos = r.data;
      this.renderizar = true;
    });
  }

  getCompanies() {
    this._company
      .getCompanies({ owner: 1 })
      .toPromise()
      .then((d: any) => {
        this.companies = d.data;
        this.companies.unshift({ text: 'Todas', value: 0 });

        this.companyId = d.data[0].value;
      });
  }

  formatFechas({ inicio_periodo, fin_periodo }) {
    const inicioPeriodo = moment(inicio_periodo).format('DD/MM/YYYY');
    const finPeriodo = moment(fin_periodo).format('DD/MM/YYYY');
    return `${inicioPeriodo} - ${finPeriodo}`;
  }
}
