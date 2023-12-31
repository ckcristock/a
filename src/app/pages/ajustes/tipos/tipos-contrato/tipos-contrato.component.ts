import { Component, OnInit, ViewChild } from '@angular/core';
import { TiposContratoService } from './tipos-contrato.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '../../informacion-base/services/reactive-validation/validators.service';
import swal from 'sweetalert2';
import { consts } from 'src/app/core/utils/consts';
import { ThemeService } from 'ng2-charts';
import Swal from 'sweetalert2';
import { MatAccordion } from '@angular/material/expansion';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-tipos-contrato',
  templateUrl: './tipos-contrato.component.html',
  styleUrls: ['./tipos-contrato.component.scss'],
})
export class TiposContratoComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  isOpen: boolean = false;
  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll();
      this.matPanel = true;
    } else {
      this.accordion.closeAll();
      this.matPanel = false;
    }
  }
  loading: boolean = false;
  selected: any;
  pagination: any = {
    page: 1,
    pageSize: 6,
    collectionSize: 0,
  };
  types = consts.contract_type;
  contracts: any[] = [];
  contrato: any = {};
  filtro: any = {
    name: '',
    description: '',
  };
  form: FormGroup;
  constructor(
    private _tiposContratoService: TiposContratoService,
    private fb: FormBuilder,
    private _reactiveValid: ValidatorsService,
    private modalBD: ModalService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getContractsType();
  }

  openModal() {
    this.modal.show();
    this.form.reset();
    this.selected = 'Nuevo tipo de Contrato';
  }
  openModalNg(content) {
    this.form.reset();
    this.selected = 'Nuevo tipo de contrato';
    this.modalBD.open(content);
  }

  close() {
    this.modalBD.close();
    this.form.reset();
  }

  getData(data,content) {
    this.contrato = { ...data };
    this.selected = 'Actualizar tipo de contrato';
    this.modalBD.open(content);
    this.form.patchValue({
      id: this.contrato.id,
      description: this.contrato.description,
      name: this.contrato.name,
    });
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.contrato.id],
      description: ['', this._reactiveValid.required],
      name: ['', this._reactiveValid.required],
    });
  }

  getContractsType(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination,
      ...this.filtro,
    };
    this.loading = true;
    this._tiposContratoService
      .getContractsType(params)
      .subscribe((res: any) => {
        this.loading = false;
        this.contracts = res.data.data;
        this.pagination.collectionSize = res.data.total;
      });
  }

  activateOrInactivate(contract, status) {
    let data = {
      id: contract.id,
      status,
    };
    Swal.fire({
      title: '¿Estas seguro?',
      text:
        status === 'Inactivo'
          ? 'El Contrato se inactivará!'
          : 'El Contrato se activará',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText:
        status === 'Inactivo' ? 'Si, Inhabilitar' : 'Si, activar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._tiposContratoService
          .createNewContract_type(data)
          .subscribe((res) => {
            this.getContractsType();
            Swal.fire({
              title:
                status === 'Inactivo'
                  ? 'Contrato Inhabilitado!'
                  : 'Contrato activado',
              text:
                status === 'Inactivo'
                  ? 'El Contrato ha sido Inhabilitada con éxito.'
                  : 'El Contrato ha sido activada con éxito.',
              icon: 'success',
            });
          });
      }
    });
  }

  createContractType() {
    this._tiposContratoService
      .createNewContract_type(this.form.value)
      .subscribe((res: any) => {
        swal.fire({
          icon: 'success',
          title: res.data,
          text: 'Se ha agregado a los Documentos con éxito.',
        });
        this.getContractsType();
        this.close()
      });
  }

  get name_invalid() {
    return this.form.get('name').invalid && this.form.get('name').touched;
  }
}
