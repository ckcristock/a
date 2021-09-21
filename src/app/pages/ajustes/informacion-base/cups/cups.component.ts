import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CupService } from './cup.service';
import { ModalCupComponent } from './modal-cup/modal-cup.component';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.scss']
})

export class CupsComponent implements OnInit {

  @ViewChild(ModalCupComponent) modal: ModalCupComponent;

  cups: any = [];
  cup: any = {};
  filtros: any = {
    description: '',
    code: ''
  }

  pagination = {
    pageSize: 25,
    page: 1,
    collectionSize: 0
  }

  loading: boolean = false;

  constructor(private cupService: CupService) { }

  ngOnInit(): void {
    this.getAllCups();
  }

  openModal = () => {
    this.modal.openModal();
  }

  edit = (id) => {
    this.modal.cup.id = id;
    this.modal.openModal();
  }

  getAllCups(page = 1) {

    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }
    this.loading = true;
    this.cupService.getAllPaginateCup(params)
      .subscribe((res: any) => {
        this.loading = false;
        this.cups = res.data.data;
        this.pagination.collectionSize = res.data.total;
      });
  }

  anularOActivar(zone, status) {

    let data: any = {
      id: zone.id,
      status
    }


    Swal.fire({
      title: '¿Estas seguro?',
      text: (status === 'Inactivo' ? 'La Cup se Inactivará!' : 'La Cup se activará'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: (status === 'Inactivo' ? 'Si, Inhabilitar' : 'Si, activar')
    }).then((result) => {
      if (result.isConfirmed) {
        this.cupService.createNewCup(data)
          .subscribe(res => {
            this.getAllCups();
            Swal.fire({
              title: (status === 'Inactivo' ? 'Cup Inhabilitada!' : 'Cup activada'),
              text: (status === 'Inactivo' ? 'La Cup ha sido Inhabilitada con éxito.' : 'La Cup ha sido activada con éxito.'),
              icon: 'success'
            })
          })
      }
    })
  }


  registerNull(cup) {
    this.cup = cup;

  }

  getCups(cup) {
    this.cup = { ...cup };
  }

}
