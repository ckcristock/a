import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { UserService } from 'src/app/core/services/user.service';
import { PayRollPaymentsService } from './pay-roll-payments.service';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.scss'],
})
export class HistorialPagosComponent implements OnInit {
  historialPagos: any[] = [];
  renderizar = false;

  companyId: number;

  constructor(
    private _payrollPayments: PayRollPaymentsService,
    private _user: UserService
  ) { }

  ngOnInit(): void {
    this.companyId = this._user.user.person.company_worked.id;
    this.getHistorialPagos();

  }
  getHistorialPagos(forma: NgForm = null) {
    let params = forma ? forma.value : {}
    params.company_id = this.companyId

    this._payrollPayments.getPayrollHistory(params).subscribe((r: any) => {
      this.historialPagos = r.data;
      this.renderizar = true;
    });
  }


  formatFechas({ inicio_periodo, fin_periodo }) {
    const inicioPeriodo = moment(inicio_periodo).format('DD/MM/YYYY');
    const finPeriodo = moment(fin_periodo).format('DD/MM/YYYY');
    return `${inicioPeriodo} - ${finPeriodo}`;
  }
}
