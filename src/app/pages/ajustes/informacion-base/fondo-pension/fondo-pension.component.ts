import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { FondoPensionService } from './fondo-pension.service';
import { ValidatorsService } from '../services/reactive-validation/validators.service';
import { MatAccordion } from '@angular/material/expansion';
import { ModalService } from 'src/app/core/services/modal.service';
import { SwalService } from '../services/swal.service';

@Component({
  selector: 'app-fondo-pension',
  templateUrl: './fondo-pension.component.html',
  styleUrls: ['./fondo-pension.component.scss'],
})
export class FondoPensionComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  isOpen: boolean = false
  matPanel = false;
  selected: any;
  loading: boolean = false;
  boolNuevoFondo: boolean;
  pensions: any[] = [];
  pension: any = {};
  pagination: any = {
    page: 1,
    pageSize: 5,
    collectionSize: 0
  }
  filtro: any = {
    name: '',
    code: ''
  }
  form: FormGroup;

  constructor(
    private _fondoPensionService: FondoPensionService,
    private _validators: ValidatorsService,
    private fb: FormBuilder,
    private _modal: ModalService,
    private _swal: SwalService,
  ) { }

  ngOnInit(): void {
    this.getPensionFunds();
    this.createForm();
  }

  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll();
      this.matPanel = true;
    } else {
      this.accordion.closeAll();
      this.matPanel = false;
    }
  }

  closeResult = '';

  openConfirm(confirm, titulo, nuevoFondo) {
    this.boolNuevoFondo = nuevoFondo;
    this.selected = titulo;
    this._modal.open(confirm);
  }

  getData(data) {
    this.pension = { ...data };
    this.form.patchValue({
      id: this.pension.id,
      name: this.pension.name,
      code: this.pension.code,
      nit: this.pension.nit,
    });
  }

  createForm() {
    this.form = this.fb.group({
      id: [''],
      name: ['', this._validators.required],
      code: ['', this._validators.required],
      nit: ['', this._validators.required],
    });
  }

  getPensionFunds(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination,
      ...this.filtro,
    };
    this.loading = true;

    this._fondoPensionService.getPensionFunds(params).subscribe((res: any) => {
      this.pensions = res.data.data;
      this.pagination.collectionSize = res.data.total;
      this.loading = false;
    });
  }

  activateOrInactivate(contract, status) {
    let data = {
      id: contract.id,
      status,
    };
    this._swal.show({
      icon: 'question',
      title: '¿Estás seguro(a)?',
      showCancel: true,
      text: status === 'Inactivo'
        ? '¡El fondo de pensión se inactivará!'
        : '¡El fondo de pensión se activará!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._fondoPensionService.createPensionFund(data).subscribe((res) => {
          this.getPensionFunds();
          this._modal.close();
          this._swal.show({
            icon: 'success',
            title:
              status === 'Inactivo'
                ? '¡Fondo de pensión nnhabilitado!'
                : '¡Fondo de pensión activado!',
            showCancel: false,
            text:
              status === 'Inactivo'
                ? 'El fondo de pensión ha sido anulado con éxito.'
                : 'El fondo de pensión ha sido activado con éxito.',
            timer: 1000
          })
        });
      }
    });
  }

  createPensionFund() {
    let data = {};
    if (this.boolNuevoFondo) {
      data = this.form.value;
    } else {
      data = {
        id: this.form.get("id").value,
        name: this.form.get("name").value
      }
    }
    this._fondoPensionService.createPensionFund(data).subscribe(
      (res: any) => {
        this.getPensionFunds();
        this._modal.close();
        this._swal.show({
          icon: 'success',
          title: res.data,
          showCancel: false,
          text: `Se ha ${this.boolNuevoFondo ? 'creado' : 'actualizado'} el fondo con éxito.`,
          timer: 1000
        });
      },
      (err) => {
        Swal.fire({
          title: 'Ooops!',
          html: err.error.errors.code + '<br>' + err.error.errors.nit,
          icon: 'error',
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
      }
    )
  }
}
