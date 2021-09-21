import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import Swal from 'sweetalert2';
import { Speciality } from '../speciality.model';
import { SpecialityService } from '../speciality.service';

@Component({
  selector: 'app-speciality-modal',
  templateUrl: './speciality-modal.component.html',
  styleUrls: ['./speciality-modal.component.scss']
})
export class SpecialityModalComponent implements OnInit {


  @ViewChild('modal') modal: any;
  @Output()

  dataChange: EventEmitter<string> = new EventEmitter<string>();

  specialitys: any = [];
 

  speciality: Speciality;


  form = new FormGroup({
    description: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    specialities: new FormControl('', [Validators.required]),
  });

  // status: any = 'Inactivo';


  constructor(
    private _specialityService: SpecialityService
  ) { }

  ngOnInit(): void {
    this.speciality = new Speciality;
  }

  openModal = async () => {

    if (!this.speciality.id) {
      this.modal.show();
    } else {
      await this._specialityService.getSpeciality(this.speciality.id).toPromise().then((req: any) => {
        this.modal.show();
        this.speciality = Object.assign({}, req.data)
        // this.speciality.specialities = this.transformData(req.data.specialities)
        this.form.patchValue({ id: this.speciality.id })
      })
    }
  }

  transformData = (array: Array<object>): any => array.map(({ ...obj }) => obj['id'])

  createNewSpeciality() {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return false; }
    this._specialityService.createNewSpeciality(this.speciality)
      .subscribe((res: any) => {
        if (res.code === 200) {
          this.dataChange.emit('');
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
}
