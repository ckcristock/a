import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BancosService } from './bancos.service';
import { ValidatorsService } from '../../informacion-base/services/reactive-validation/validators.service';
import Swal from 'sweetalert2';
import { MatAccordion } from '@angular/material/expansion';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.scss']
})
export class BancosComponent implements OnInit {
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
  close() {
    this._modal.close();
    this.form.reset();
  }
  loading: boolean = false;
  banks: any[] = [];
  bank: any = {};
  selected: any;
  pagination: any = {
    page: 1,
    pageSize: 5,
    collectionSize: 0
  }
  filtro: any = {
    name: ''
  }
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _bancosService: BancosService,
    private _validators: ValidatorsService,
    private _modal: ModalService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getBanks();
  }

  openModal(content) {
    this._modal.open(content);
    this.form.reset();
    this.selected = 'Nuevo banco';
  }

  getBank(bank, content) {
    this.bank = { ...bank };
    this.selected = 'Actualizar banco';
    this._modal.open(content);
    this.form.patchValue({
      id: this.bank.id,
      name: this.bank.name,
      code: this.bank.code,
    })
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.bank.id],
      name: ['', this._validators.required],
      code: ['', this._validators.required]
    })
  }

  getBanks(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtro
    }
    this.loading = true;
    this.selected = 'Actualizar Banco'
    this._bancosService.getBanks(params)
      .subscribe((res: any) => {
        this.banks = res.data.data;
        this.pagination.collectionSize = res.data.total;
        this.loading = false;
      });
  }

  createBank() {
    this._bancosService.createBank(this.form.value)
      .subscribe((res: any) => {
        this.modal.hide();
        this.getBanks();
        Swal.fire({
          icon: 'success',
          title: res.data
        })
      })
  }

  activateOrInactivate(novelty, status) {
    let data = {
      id: novelty.id,
      status
    }
    Swal.fire({
      title: '¿Estas seguro?',
      text: (status === 'Inactivo' ? 'El Banco se inactivará!' : 'El Banco se activará'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: (status === 'Inactivo' ? 'Si, Inhabilitar' : 'Si, activar')
    }).then((result) => {
      if (result.isConfirmed) {
        this._bancosService.createBank(data)
          .subscribe(res => {
            this.getBanks();
            Swal.fire({
              title: (status === 'Inactivo' ? 'banco Inhabilitado!' : 'Banco activado'),
              text: (status === 'Inactivo' ? 'Banco ha sido Inhabilitada con éxito.' : 'Banco ha sido activada con éxito.'),
              icon: 'success'
            });
          });
      }
    });
  }

}
