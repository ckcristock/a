import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import Swal from 'sweetalert2';
import { Cup } from '../cup.model';
import { CupService } from '../cup.service';


@Component({
  selector: 'app-modal-cup',
  templateUrl: './modal-cup.component.html',
  styleUrls: ['./modal-cup.component.scss']
})
export class ModalCupComponent implements OnInit {

  @ViewChild('modal') modal: any;
  @Output()

  dataChange: EventEmitter<string> = new EventEmitter<string>();

  cups: any = [];
  specialities: Array<object> = [];

  cup: Cup;

  filtros: any = {
    description: '',
    code: ''
  }
  form = new FormGroup({
    description: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    specialities: new FormControl('', [Validators.required]),
  });

  status: any = 'Inactivo';
  loading: boolean = false;

  constructor(
    private _cupService: CupService,
    private _dataDinamic: DataDinamicService
  ) { }

  ngOnInit(): void {
    this.cup = new Cup;
    this.getSpecialties();
  }

  openModal = async () => {

    if (!this.cup.id) {
      this.modal.show();
    } else {
      await this._cupService.getCup(this.cup.id).toPromise().then((req: any) => {
        this.modal.show();
        this.cup = Object.assign({}, req.data)
        this.cup.specialities = this.transformData(req.data.specialities)
        this.form.patchValue({ id: this.cup.id })
      })
    }
  }

  transformData = (array: Array<object>): any => array.map(({ ...obj }) => obj['id'])

  createNewCups() {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return false; }
    this._cupService.createNewCup(this.cup)
      .subscribe((res: any) => {
        if (res.code === 200) {
          this.dataChange.emit('');
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

  getSpecialties = () => {
    this._dataDinamic.getSpecialties('', '').subscribe((resp: any) => {
      this.specialities = resp.data;
    });
  }
}
