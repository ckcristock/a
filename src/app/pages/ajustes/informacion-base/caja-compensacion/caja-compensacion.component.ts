import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ModalService } from 'src/app/core/services/modal.service';
import { ValidatorsService } from '../services/reactive-validation/validators.service';
import { SwalService } from '../services/swal.service';
import { CajaCompensacionService } from './caja-compensacion.service';

@Component({
  selector: 'app-caja-compensacion',
  templateUrl: './caja-compensacion.component.html',
  styleUrls: ['./caja-compensacion.component.scss']
})
export class CajaCompensacionComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  loading: boolean = false;
  form: FormGroup;
  selected: any;
  compensation_found: any[] = []
  caja: any = {}
  pagination: any = {
    page: 1,
    pageSize: 10,
    collectionSize: 0,
  };
  filtro: any = {
    name: '',
    code: '',
  };
  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll()
      this.matPanel = true;
    } else {
      this.accordion.closeAll()
      this.matPanel = false;
    }
  }

  constructor(
    private _cajaSevice: CajaCompensacionService,
    private fb: FormBuilder,
    private _reactiveValid: ValidatorsService,
    private _modal: ModalService,
    private _swal: SwalService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getCompensationFound();
  }

  activateOrInactivate(item, status) {
    let data = {
      id: item.id,
      status,
    };
    this._swal.show({
      icon: 'question',
      title: '¿Estás seguro(a)?',
      showCancel: true,
      text: ''
    }).then((result) => {
      if (result.isConfirmed) {
        this._cajaSevice
          .newCompensationFound(data)
          .subscribe((res) => {
            this.getCompensationFound();
            this._swal.show({
              icon: 'success',
              title:
                status === 'Inactivo'
                  ? '¡Caja anulada!'
                  : '¡Caja activada!',
              text: '',
              showCancel: false,
              timer: 1000
            });
          });
      }
    });
  }

  createContractType() {
    this._cajaSevice
      .newCompensationFound(this.form.value)
      .subscribe((res: any) => {
        this._swal.show({
          icon: 'success',
          title: 'Operación exitosa',
          showCancel: false,
          text: 'Caja guardada',
          timer: 1000
        })
        this.getCompensationFound();
        this.close()
      });
  }

  getCompensationFound(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination,
      ...this.filtro,
    };
    this.loading = true;
    this._cajaSevice
      .getCompensationFound(params)
      .subscribe((res: any) => {
        this.loading = false;
        this.compensation_found = res.data.data;
        this.pagination.collectionSize = res.data.total;
      });
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.caja.id],
      name: ['', this._reactiveValid.required],
      code: ['', this._reactiveValid.required],
      nit: ['', this._reactiveValid.required],
    });
  }

  openModal(content) {
    this.form.reset();
    this.selected = 'Nueva caja de compensación';
    this._modal.open(content);
  }

  close() {
    this._modal.close();
    this.form.reset();
  }

  getData(data, content) {
    this.caja = { ...data };
    this.selected = 'Actualizar caja de compensación';
    this._modal.open(content);
    this.form.patchValue({
      id: this.caja.id,
      name: this.caja.name,
      code: this.caja.code,
      nit: this.caja.nit,
    });
  }

}
