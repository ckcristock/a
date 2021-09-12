import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SpecialityService } from './speciality.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})

export class SpecialitysComponent implements OnInit {
  @ViewChild('modal') modal: any;
  specialitys: any = [];
  speciality: any = {};
  filtros: any = {
    name: '',
    code: ''
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
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

  constructor(private specialityService: SpecialityService) { }

  ngOnInit(): void {
    this.getAllSpecialitys();
  }

  getAllSpecialitys(page = 1) {

    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }
    this.loading = true;
    this.specialityService.getAllPaginateSpeciality(params)
      .subscribe((res: any) => {
        this.loading = false;
        this.specialitys = res.data.data;
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
      text: (status === 'Inactivo' ? 'La Speciality se Inactivará!' : 'La Speciality se activará'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: (status === 'Inactivo' ? 'Si, Inhabilitar' : 'Si, activar')
    }).then((result) => {
      if (result.isConfirmed) {
        this.specialityService.createNewSpeciality(data)
          .subscribe(res => {
            this.getAllSpecialitys();
            Swal.fire({
              title: (status === 'Inactivo' ? 'Speciality Inhabilitada!' : 'Speciality activada'),
              text: (status === 'Inactivo' ? 'La Speciality ha sido Inhabilitada con éxito.' : 'La Speciality ha sido activada con éxito.'),
              icon: 'success'
            })
          })
      }
    })
  }


  registerNull(speciality) {
    this.speciality = speciality;

  }

  openModal() {
    this.speciality.id = '';
    this.speciality.name = '';
    this.speciality.code = '';
    // this.speciality.nit = '';
    this.modal.show();
    this.form.reset();
  }

  getSpeciality(speciality) {
    /* this.speciality = Object.assign({},speciality) ; */
    this.speciality = { ...speciality };
  }

  createNewSpecialitys() {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return false; }
    this.specialityService.createNewSpeciality(this.speciality)
      .subscribe((res: any) => {

        if (res.code === 200) {

          this.getAllSpecialitys();
          this.modal.hide();
          Swal.fire({
            title: 'Operación exitosa',
            text: 'Felicidades, se han actualizado las Speciality.',
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

  get name_speciality_valid() {
    return (
      this.form.get('name').invalid && this.form.get('name').touched
    )
  }

  get code_speciality_valid() {
    return (
      this.form.get('code').invalid && this.form.get('code').touched
    )
  }

  // get nit_speciality_valid() {
  //   return (
  //     this.form.get('nit').invalid && this.form.get('nit').touched
  // )
  // }


}
