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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private modalService: NgbModal
  ) {}

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
  public openConfirm(confirm, titulo, nuevoFondo) {
    this.boolNuevoFondo = nuevoFondo;
    this.selected = titulo;
    this.modalService
      .open(confirm, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'md',
        scrollable: true,
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any) {
    this.form.reset();
  }

  getData(data) {
    this.selected = 'Actualizar Fondo de Pensión';
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
    Swal.fire({
      title: '¿Estas seguro?',
      text:
        status === 'Inactivo'
          ? 'El Fondo de pensión se inactivará!'
          : 'El Fondo de pensión se activará',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText:
        status === 'Inactivo' ? 'Si, Inhabilitar' : 'Si, activar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._fondoPensionService.createPensionFund(data).subscribe((res) => {
          this.getPensionFunds();
          this.modalService.dismissAll();
          Swal.fire({
            title:
              status === 'Inactivo'
                ? 'Fondo de Pensión Inhabilitado!'
                : 'Fondo de Pensión activado',
            text:
              status === 'Inactivo'
                ? 'El Fondo de Pensión ha sido Inhabilitada con éxito.'
                : 'El Fondo de Pensión ha sido activada con éxito.',
            icon: 'success',
          });
        });
      }
    });
  }

  createPensionFund() {
    let data = {};
    if(this.boolNuevoFondo){
      data = this.form.value;
    }else{
      data = {
        id: this.form.get("id").value,
        name: this.form.get("name").value      }
    }
    this._fondoPensionService.createPensionFund(data).subscribe(
        (res: any) => {
          this.getPensionFunds();
          this.modalService.dismissAll();
          Swal.fire({
            icon: 'success',
            title: res.data,
            timer: 1000,
            text: `Se ha ${this.boolNuevoFondo?'creado':'actualizado'} el fondo con éxito.`,
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
