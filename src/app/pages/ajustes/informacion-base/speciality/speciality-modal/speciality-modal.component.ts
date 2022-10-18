import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessage, successMessage } from 'src/app/core/utils/confirmMessage';
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
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
  });

  constructor(
    private _specialityService: SpecialityService
  ) { }

  ngOnInit(): void {
    this.speciality = new Speciality;
  }

  openModal = async () => {
    this.form.reset();
    if (!this.speciality.id) {
      this.speciality = new Speciality;
      this.modal.show();
    } else {
      await this._specialityService.getSpeciality(this.speciality.id).toPromise().then((req: any) => {
        this.modal.show();
        this.speciality = Object.assign({}, req.data)
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
        (res.code === 200) ? successMessage() : errorMessage()
      })
  }
}
