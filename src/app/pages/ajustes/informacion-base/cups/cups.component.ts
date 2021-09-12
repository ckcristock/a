import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CupService } from './cup.service';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.scss']
})

export class CupsComponent implements OnInit {
  @ViewChild('modal') modal: any;
  cups: any = [];
  cup: any = {};
  filtros: any = {
    description: '',
    code: ''
  }
  form = new FormGroup({
    description: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    // nit: new FormControl('', [Validators.required])
  });
  pagination = {
    pageSize: 5,
    page: 1,
    collectionSize: 0
  }
  status: any = 'Inactivo';
  loading: boolean = false;

  constructor(private cupService: CupService) { }

  ngOnInit(): void {
    this.getAllCups();
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

  openModal() {
    this.cup.id = '';
    this.cup.description = '';
    this.cup.code = '';
    // this.cup.nit = '';
    this.modal.show();
    this.form.reset();
  }

  getCups(cup) {
    /* this.cup = Object.assign({},cup) ; */
    this.cup = { ...cup };
  }

  createNewCups() {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return false; }
    this.cupService.createNewCup(this.cup)
      .subscribe((res: any) => {

        if (res.code === 200) {

          this.getAllCups();
          this.modal.hide();
          Swal.fire({
            title: 'Operación exitosa',
            text: 'Felicidades, se han actualizado las Cup.',
            icon: 'success',
            allowOutsideClick: false,
            allowEscapeKey: false
          })
        } else {

          Swal.fire({
            title: 'Ooops!',
            text: 'Algunos datos ya existen en la base de datos.',
            icon: 'error',
            allowOutsideClick: false,
            allowEscapeKey: false
          })

        }
      });
  }

  get description_cup_valid() {
    return (
      this.form.get('description').invalid && this.form.get('description').touched
    )
  }

  get code_cup_valid() {
    return (
      this.form.get('code').invalid && this.form.get('code').touched
    )
  }

  // get nit_cup_valid() {
  //   return (
  //     this.form.get('nit').invalid && this.form.get('nit').touched
  // )
  // }


}
