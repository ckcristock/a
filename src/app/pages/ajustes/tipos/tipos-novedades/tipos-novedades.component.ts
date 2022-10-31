import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TiposNovedadesService } from './tipos-novedades.service';
import { consts } from '../../../../core/utils/consts';
import Swal from 'sweetalert2';
import { MatAccordion } from '@angular/material/expansion';
import { SwalService } from '../../informacion-base/services/swal.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-tipos-novedades',
  templateUrl: './tipos-novedades.component.html',
  styleUrls: ['./tipos-novedades.component.scss']
})
export class TiposNovedadesComponent implements OnInit {
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
  novelties: any[] = [];
  public disabled = false;
  private novelty: any = {};
  pagination: any = {
    page: 1,
    pageSize: 5,
    collectionSize: 0
  }
  filtros: any = {
    novelty: '',
  }
  modalities = consts.modalities;
  constructor(
    private _tiposNovedadesService: TiposNovedadesService,
    private fb: FormBuilder,
    private _swal: SwalService,
    private _modal: ModalService
  ) { }

  ngOnInit(): void {
    this.getNovelties();
    this.createForm();
  }

  openModal(content) {
    this.disabled = false;
    this._modal.open(content);
    this.form.reset();
    this.selected = 'Nuevo tipo de novedad';
  }

  getData(data) {
    this.disabled = false;
    this.novelty = { ...data };
    this.selected = 'Actualizar tipo de novedad';
    this.form.patchValue({
      id: this.novelty.id,
      concept: this.novelty.concept,
      novelty: this.novelty.novelty,
      modality: this.novelty.modality
    })
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.novelty.id],
      concept: [''],
      novelty: [''],
      modality: ['']
    });
  }

  getNovelties(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }
    this.loading = true;
    this._tiposNovedadesService.getNovelties(params)
      .subscribe((res: any) => {
        this.novelties = res.data.data;
        this.pagination.collectionSize = res.data.total;
        this.loading = false;
      })
  }

  createNovelty() {

    this.disabled = true;

    this._tiposNovedadesService.createNovelty(this.form.value)
      .subscribe((res: any) => {
        this._modal.close();
        this.getNovelties();
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
      text: (status === 'Inactivo' ? 'La novedad se anulará' : 'La novedad se activará'),
    }).then((result) => {
      if (result.isConfirmed) {
        this._tiposNovedadesService.createNovelty(data)
          .subscribe(res => {
            this.getNovelties();
            this._swal.show({
              icon: 'success',
              title: (status === 'Inactivo' ? 'Novedad anulada!' : 'Novedad activada'),
              showCancel: false,
              text: (status === 'Inactivo' ? 'La novedad ha sido anulada con éxito.' : 'La novedad ha sido activada con éxito.'),
              timer: 1000
            })
          });
      }
    });
  }

}
