import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TiposRiesgoService } from './tipos-riesgo.service';
import { ValidatorsService } from '../../informacion-base/services/reactive-validation/validators.service';
import Swal from 'sweetalert2';
import { MatAccordion } from '@angular/material/expansion';
import { SwalService } from '../../informacion-base/services/swal.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-tipos-riesgo',
  templateUrl: './tipos-riesgo.component.html',
  styleUrls: ['./tipos-riesgo.component.scss']
})
export class TiposRiesgoComponent implements OnInit {
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
  form: FormGroup;
  risks: any[] = [];
  private risk: any = {};
  pagination: any = {
    page: 1,
    pageSize: 5,
    collectionSize: 0
  }
  filtros: any = {
    risk_type: '',
    accounting_account: ''
  }
  constructor(
    private _tiposRiegoService: TiposRiesgoService,
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService,
    private _swal: SwalService,
    private _modal: ModalService
  ) { }

  ngOnInit(): void {
    this.getRiskType();
    this.createForm();
  }

  openModal(content) {
    this._modal.open(content);
    this.form.reset();
    this.selected = 'Nuevo tipo de riesgo';
  }

  getData(data) {
    this.risk = { ...data };
    this.selected = 'Actualizar tipo de riesgo';
    this.form.patchValue({
      id: this.risk.id,
      risk_type: this.risk.risk_type,
      accounting_account: this.risk.accounting_account
    })

  }

  createForm() {
    this.form = this.fb.group({
      id: [this.risk.id],
      risk_type: ['', this._validatorsService.required],
      accounting_account: ['', this._validatorsService.required]
    });
  }

  getRiskType(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }
    this.loading = true;
    this._tiposRiegoService.getRiskType(params)
      .subscribe((res: any) => {
        this.risks = res.data.data;
        this.loading = false;
        this.pagination.collectionSize = res.data.total;
      });
  }

  createRisk() {
    this._tiposRiegoService.createRisk(this.form.value)
      .subscribe((res: any) => {
        this._modal.close();
        this.getRiskType();
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
      text: (status === 'Inactivo' ? 'El riesgo se anulará' : 'El riesgo se activará'),
    }).then((result) => {
      if (result.isConfirmed) {
        this._tiposRiegoService.createRisk(data)
          .subscribe(res => {
            this.getRiskType();
            this._swal.show({
              icon: 'success',
              title: (status === 'Inactivo' ? 'Riesgo anulado' : 'Riesgo activado'),
              showCancel: false,
              text: (status === 'Inactivo' ? 'El riesgo ha sido anulado con éxito.' : 'El riesgo ha sido activado con éxito.'),
              timer: 1000
            })
          });
      }
    });
  }

}
