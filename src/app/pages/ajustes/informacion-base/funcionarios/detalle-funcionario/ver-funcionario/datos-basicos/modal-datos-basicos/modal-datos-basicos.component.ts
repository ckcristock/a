import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
import { consts } from 'src/app/core/utils/consts';
import { functionsUtils } from 'src/app/core/utils/functionsUtils';
import { ValidatorsService } from 'src/app/pages/ajustes/informacion-base/services/reactive-validation/validators.service';
import Swal from 'sweetalert2';
import { DatosBasicosService } from '../datos-basicos.service';

@Component({
  selector: 'app-modal-datos-basicos',
  templateUrl: './modal-datos-basicos.component.html',
  styleUrls: ['./modal-datos-basicos.component.scss']
})
export class ModalDatosBasicosComponent implements OnInit {
  @ViewChild('modal') modal: any;
  estados = consts.maritalStatus;
  degrees = consts.degree;
  form: FormGroup;
  id: any;
  file: any = '';
  image: any = '';
  data: any;
  fileString: any;
  typeImage: any;
  constructor(
    private fb: FormBuilder,
    private basicDataService: DatosBasicosService,
    private _val: ValidatorsService,
    private _modal: ModalService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.createForm();
  }

  openModal(id: number = null) {
    this.id = id;
    this.getBasicsData();
    this._modal.open(this.modal, 'xl')
  }

  createForm() {
    this.form = this.fb.group({
      id: [''],
      image: [''],
      first_name: ['', Validators.required],
      second_name: [''],
      first_surname: ['', Validators.required],
      second_surname: [''],
      identifier: ['', Validators.required],
      birth_date: ['', Validators.required],
      address: ['', Validators.required],
      degree: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sex: ['', Validators.required],
      marital_status: ['', Validators.required],
      cell_phone: ['', [Validators.required]]
    });
  }

  getBasicsData() {
    this.basicDataService.getBasicsData(this.id)
      .subscribe((res: any) => {
        this.form.patchValue({
          id: res.data.id,
          image: res.data.image,
          first_name: res.data.first_name ,
          second_name: res.data.second_name ,
          first_surname: res.data.first_surname ,
          second_surname: res.data.second_surname ,
          identifier: res.data.identifier ,
          birth_date: res.data.birth_date ,
          address: res.data.address ,
          degree: res.data.degree ,
          email: res.data.email ,
          sex: res.data.sex ,
          marital_status: res.data.marital_status ,
          cell_phone: res.data.cell_phone ,
        })
        this.fileString = res.data.image
      })

    this.image = this.modal.image;

  }
  onFileChanged(event) {
    if (event.target.files[0]) {
      let file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.fileString = (<FileReader>event.target).result;
        const type = { ext: this.fileString };
        this.typeImage = type.ext.match(/[^:/]\w+(?=;|,)/)[0];
      };
      functionsUtils.fileToBase64(file).subscribe((base64) => {
        this.file = base64;
      });
    }
  }

  guardar() {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return false; }
    this.form.patchValue({
      image: this.fileString,
    })
    this.basicDataService.updateBasicData(this.form.value, this.id)
      .subscribe(res => {
        this._modal.close()
        this.basicDataService.datos$.next();
        Swal.fire({
          icon: 'success',
          title: 'Editado con éxito',
          text: 'Se han actualizado los cambios correctamente'
        })
        this.basicDataService.datos$.emit()
        this.image = res['image_blob'];
      });
  }

  get first_name_valid() {
    return (
      this.form.get('first_name').invalid && this.form.get('first_name').touched
    );
  }

  get second_name_valid() {
    return (
      this.form.get('second_name').invalid && this.form.get('second_name').touched
    );
  }

  get image_valid() {
    return (
      this.form.get('image').invalid && this.form.get('image').touched
    );
  }
  get identifier_valid() {
    return (
      this.form.get('identifier').invalid && this.form.get('identifier').touched
    );
  }
  get names_valid() {
    return (
      this.form.get('names').invalid && this.form.get('names').touched
    );
  }
  get subnames_valid() {
    return (
      this.form.get('subnames').invalid && this.form.get('subnames').touched
    );
  }
  get email_valid() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }
  get birth_date_valid() {
    return (
      this.form.get('birth_date').invalid &&
      this.form.get('birth_date').touched
    );
  }
  get address_valid() {
    return (
      this.form.get('address').invalid && this.form.get('address').touched
    );
  }
  get sex_valid() {
    return this.form.get('sex').invalid && this.form.get('sex').touched;
  }
  get cell_phone_valid() {
    return this.form.get('cell_phone').invalid && this.form.get('cell_phone').touched
  }

  get marital_status_valid() {
    return (
      this.form.get('marital_status').invalid &&
      this.form.get('marital_status').touched
    );
  }
  get degree_valid() {
    return this.form.get('degree').invalid && this.form.get('degree').touched;
  }
}
