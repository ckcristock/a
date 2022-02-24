import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { SwalService } from 'src/app/pages/ajustes/informacion-base/services/swal.service';
import { ContabilidadService } from '../../contabilidad.service';

@Component({
  selector: 'app-table-catalogo',
  templateUrl: './table-catalogo.component.html',
  styleUrls: ['./table-catalogo.component.scss']
})
export class TableCatalogoComponent implements OnInit {
  @Input('typeProduct') typeProduct
  @Input('accounts') accounts

  @ViewChild('modalGenerico') modalGenerico

  form: FormGroup

  loading = false;
  products: any[] = [];

  pagination = {
    page: 1,
    pageSize: 10,
    collectionSize: 0,
  };

  constructor(private _contabilidad: ContabilidadService,
     private fb: FormBuilder,
     private _swal : SwalService,
     private _user: UserService) { }

  ngOnInit(): void {
    this.getAccounts()
    this.makeForm()
  }

  getAccounts(page = 1) {
    this.loading = true
    this.pagination.page = page;
    const params = { Tipo_Catalogo: this.typeProduct,
      company_id:this._user.user.person.company_worked.id,
      ...this.pagination }
    this._contabilidad.getAccountPlanProducts(params)
      .subscribe((r: any) => {
        this.loading = false
        this.products = r.data.data;
        this.pagination.collectionSize = r.data.total;
      })
  }

  makeForm() {
    this.form = this.fb.group({
      product_accounting_plan_id: '',
      product_id: '',
      income_account_id: '',
      inventary_account_id: '',
      expensse_account_id: '',
      cost_account_id: '',
      entry_account_id: '',
      iva_sale_account_id: '',
      iva_buy_account_id: '',
      rete_fuente_buy_account_id: '',
      rete_ica_buy_account_id: ''
    })
  }

  open(product) {
    this.modalGenerico.show()

    this.form.patchValue({
      product_accounting_plan_id: product.product_accounting_plan_id,
      product_id: String(product.product_id),
      income_account_id: String(product.income_account_id),
      inventary_account_id: String(product.inventary_account_id),
      expensse_account_id: String(product.expensse_account_id),
      cost_account_id: String(product.cost_account_id),
      entry_account_id: String(product.entry_account_id),
      iva_sale_account_id: String(product.iva_sale_account_id),
      iva_buy_account_id: String(product.iva_buy_account_id),
      rete_fuente_buy_account_id: String(product.rete_fuente_buy_account_id),
      rete_ica_buy_account_id: String(product.rete_ica_buy_account_id)
    })
  }

  closeModal() {
    this.form.reset()
    this.modalGenerico.hide()
  }

  save() {
    this._swal.show({
      title:'¿Está seguro de guardar?',
      text:'',
      icon:'question'
    }).then(r=>{
      if(r.isConfirmed){
        this._contabilidad.saveAccountPlanProducts(this.form.value).
          subscribe((r: any) => {
              this.getAccounts(this.pagination.page)
              this._swal.show({
                title:'Guardado exitosamente',
                icon:'success',
                text:'',
                showCancel:false
              }) 
              this.closeModal()
          })
      }
    })
  }
}
