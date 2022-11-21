import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TiposEgresoService } from './tipos-egreso.service';
import { ValidatorsService } from '../../informacion-base/services/reactive-validation/validators.service';
import Swal from 'sweetalert2';
import { consts } from '../../../../core/utils/consts';
import { MatAccordion } from '@angular/material/expansion';
import { SwalService } from '../../informacion-base/services/swal.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-tipos-egreso',
  templateUrl: './tipos-egreso.component.html',
  styleUrls: ['./tipos-egreso.component.scss']
})
export class TiposEgresoComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll()
      this.matPanel = true;
    } else {
      this.accordion.closeAll()
      this.matPanel = false;
    }
  }
  loading: boolean = false;
  selected: any;
  egresss: any[] = [];
  egress: any = {};
  pagination: any = {
    page: 1,
    pageSize: 5,
    collectionSize: 0
  }
  filtro: any = {
    name: ''
  }
  form: FormGroup;
  egressTypes = consts.Egresstypes;
  constructor(
    private _egressTypeService: TiposEgresoService,
    private _validators: ValidatorsService,
    private fb: FormBuilder,
    private _swal: SwalService,
    private _modal: ModalService,
  ) { }

  ngOnInit(): void {
    this.getEgressType();
    this.createForm();
  }

  openModal(content) {
    this._modal.open(content);
    this.form.reset();
    this.selected = 'Nuevo tipo de egreso';
  }

  getEgress(egress) {
    this.egress = { ...egress }
    this.selected = 'Actualizar tipo de egreso';
    this.form.patchValue({
      id: this.egress.id,
      name: this.egress.name,
      associated_account: this.egress.associated_account,
      type: this.egress.type
    });
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.egress.id],
      name: ['', this._validators.required],
      associated_account: ['', this._validators.required],
      type: ['', this._validators.required]
    });
  }

  getEgressType(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtro
    }
    this.loading = true;
    this._egressTypeService.getEgresstype(params)
      .subscribe((res: any) => {
        this.egresss = res.data.data;
        this.pagination.collectionSize = res.data.total;
        this.loading = false;
      });
  }

  createEgressType() {
    this._egressTypeService.createEgressType(this.form.value)
      .subscribe((res: any) => {
        this._modal.close();
        this.getEgressType();
        this._swal.show({
          icon: 'success',
          title: res.data,
          showCancel: false,
          text: '',
          timer: 1000
        })
      })
  }

  activateOrInactivate(novelty, status) {
    let data = {
      id: novelty.id,
      status
    }
    this._swal.show({
      icon: 'question',
      title: '¿Estás seguro(a)?',
      showCancel: true,
      text: (status === 'Inactivo' ? 'El tipo de egreso se anulará' : 'El tipo de egreso se activará'),
    }).then((result) => {
      if (result.isConfirmed) {
        this._egressTypeService.createEgressType(data)
          .subscribe(res => {
            this.getEgressType();
            this._swal.show({
              icon: 'success',
              title: (status === 'Inactivo' ? 'Tipo de egreso anulado' : 'Tipo de egreso activado'),
              showCancel: false,
              text: (status === 'Inactivo' ? 'El tipo de egreso ha sido anulado con éxito.' : 'El tipo de egreso ha sido activado con éxito.'),
              timer: 1000
            })
          });
      }
    });
  }

}
