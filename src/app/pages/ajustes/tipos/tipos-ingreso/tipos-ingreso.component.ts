import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ValidatorsService } from '../../informacion-base/services/reactive-validation/validators.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { consts } from '../../../../core/utils/consts';
import { TiposIngresoService } from './tipos-ingreso.service';
import { MatAccordion } from '@angular/material/expansion';
import { SwalService } from '../../informacion-base/services/swal.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-tipos-ingreso',
  templateUrl: './tipos-ingreso.component.html',
  styleUrls: ['./tipos-ingreso.component.scss']
})
export class TiposIngresoComponent implements OnInit {
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
  ingresss: any[] = [];
  ingress: any = {};
  pagination: any = {
    page: 1,
    pageSize: 5,
    collectionSize: 0
  }
  filtro: any = {
    name: ''
  }
  form: FormGroup;
  ingressTypes = consts.Ingresstypes;
  constructor(
    private _ingressTypeService: TiposIngresoService,
    private _validators: ValidatorsService,
    private fb: FormBuilder,
    private _swal: SwalService,
    private _modal: ModalService
  ) { }

  ngOnInit(): void {
    this.getIngressType();
    this.createForm();
  }

  openModal(content) {
    this._modal.open(content);
    this.form.reset();
    this.selected = 'Nuevo tipo de ingreso';
  }

  getIngress(egress) {
    this.ingress = { ...egress }
    this.selected = 'Actualizar tipo de ingreso'
    this.form.patchValue({
      id: this.ingress.id,
      name: this.ingress.name,
      associated_account: this.ingress.associated_account,
      type: this.ingress.type
    });
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.ingress.id],
      name: ['', this._validators.required],
      associated_account: ['', this._validators.required],
      type: ['', this._validators.required]
    });
  }

  getIngressType(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtro
    }
    this.loading = true;
    this._ingressTypeService.getIngressType(params)
      .subscribe((res: any) => {
        this.ingresss = res.data.data;
        this.pagination.collectionSize = res.data.total;
        this.loading = false;
      });
  }

  createIngressType() {
    this._ingressTypeService.createIngressType(this.form.value)
      .subscribe((res: any) => {
        this._modal.close();
        this.getIngressType();
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
      text: (status === 'Inactivo' ? 'El tipo de ingreso se anulará' : 'El tipo de ingreso se activará'),
    }).then((result) => {
      if (result.isConfirmed) {
        this._ingressTypeService.createIngressType(data)
          .subscribe(res => {
            this.getIngressType();
            this._swal.show({
              icon: 'success',
              title: (status === 'Inactivo' ? 'Tipo de ingreso anulado' : 'Tipo de ingreso activado'),
              showCancel: false,
              text: (status === 'Inactivo' ? 'El tipo de ingreso ha sido anulado con éxito.' : 'El tipo de ingreso ha sido activado con éxito.'),
              timer: 1000
            })
          });
      }
    });
  }

}
