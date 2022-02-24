import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { ContabilidadService } from '../../contabilidad.service';

@Component({
  selector: 'app-subcategoria-contabilidad',
  templateUrl: './subcategoria-contabilidad.component.html',
  styleUrls: ['./subcategoria-contabilidad.component.scss']
})
export class SubcategoriaContabilidadComponent implements OnInit {
  @Input('accounts') accounts: any[]
  @ViewChild('modalGenerico') modalGenerico
  subcategories: any = []
  active = 1
  loading = false
  form: FormGroup

  constructor(private _contabilidad: ContabilidadService,
    private fb: FormBuilder, private _user: UserService) { }

  ngOnInit(): void {
    this.getSubcategories()
    this.makeForm();
  }

  getSubcategories() {
    this.loading = true
    this._contabilidad.getSubcategories({company_id:this._user.user.person.company_worked.id}).subscribe((r: any) => {
      this.subcategories = r.data
      this.loading = false
    })
  }

  makeForm() {
    this.form = this.fb.group({
      Id_Subcategoria: '',
      Cuenta_Ingreso_Id: '',
      Cuenta_Inventario_Id: '',
      Cuenta_Gasto_Id: '',
      Cuenta_Costo_Id: '',
      Cuenta_Entrada_Id: '',
      Cuenta_Iva_Venta_Id: '',
      Cuenta_Iva_Compra_Id: '',
      Cuenta_Descuento_Venta_Id: '',
      Cuenta_Descuento_Compra_Id: '',
      Cuenta_Retefuente_Venta_Id: '',
      Cuenta_Retefuente_Compra_Id: '',
      Cuenta_Reteica_Venta_Id: '',
      Cuenta_Reteica_Compra_Id: '',
      Cuenta_Reteiva_Venta_Id: '',
      Cuenta_Reteiva_Compra_Id: ''
    })
  }

  closeModal() {
    this.form.reset()
    this.modalGenerico.hide()
  }

  save() {
    this._contabilidad.saveSubcategoryCount().subscribe((r: any) => {

    })
  }

  open(subcategory) {
    this.modalGenerico.show()

    this.form.patchValue({

      Id_Subcategoria: String(subcategory.Id_Subcategoria),
      Cuenta_Ingreso_Id: String(subcategory.Cuenta_Ingreso_Id),
      Cuenta_Inventario_Id: String(subcategory.Cuenta_Inventario_Id),
      Cuenta_Gasto_Id: String(subcategory.Cuenta_Gasto_Id),
      Cuenta_Costo_Id: String(subcategory.Cuenta_Costo_Id),
      Cuenta_Entrada_Id: String(subcategory.Cuenta_Entrada_Id),
      Cuenta_Iva_Venta_Id: String(subcategory.Cuenta_Iva_Venta_Id),
      Cuenta_Iva_Compra_Id: String(subcategory.Cuenta_Iva_Compra_Id),
      Cuenta_Descuento_Venta_Id: String(subcategory.Cuenta_Descuento_Venta_Id),
      Cuenta_Descuento_Compra_Id: String(subcategory.Cuenta_Descuento_Compra_Id),
      Cuenta_Retefuente_Venta_Id: String(subcategory.Cuenta_Retefuente_Venta_Id),
      Cuenta_Retefuente_Compra_Id: String(subcategory.Cuenta_Retefuente_Compra_Id),
      Cuenta_Reteica_Venta_Id: String(subcategory.Cuenta_Reteica_Venta_Id),
      Cuenta_Reteica_Compra_Id: String(subcategory.Cuenta_Reteica_Compra_Id),
      Cuenta_Reteiva_Venta_Id: String(subcategory.Cuenta_Reteiva_Venta_Id),
      Cuenta_Reteiva_Compra_Id: String(subcategory.Cuenta_Reteiva_Compra_Id)

    })

  }



}
