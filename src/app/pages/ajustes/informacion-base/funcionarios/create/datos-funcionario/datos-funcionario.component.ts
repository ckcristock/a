import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonDataService } from '../personData.service';
import { Subscription } from 'rxjs';
import { consts } from '../../../../../../core/utils/consts';
import { functionsUtils } from 'src/app/core/utils/functionsUtils';
import { Person } from '../../../../../../core/models/person.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PersonService } from '../../../persons/person.service';
import Swal from 'sweetalert2';
import { DocumentTypeService } from '../../../services/document-type.service';
@Component({
  selector: 'app-datos-funcionario',
  templateUrl: './datos-funcionario.component.html',
  styleUrls: ['./datos-funcionario.component.scss'],
})
export class DatosFuncionarioComponent implements OnInit {
  @Output('siguiente') siguiente = new EventEmitter();

  tipoSangre = consts.bloodType;
  estados = consts.maritalStatus;
  instruccion = consts.degree;
  $person: Subscription;
  documenttypes: any[] = [];
  form: FormGroup;
  file: any = '';
  fileString: any =
    'https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=100';

  constructor(
    private _person: PersonDataService,
    private fb: FormBuilder,
    private http: HttpClient,
    private _people: PersonService,
    private _documenttypes: DocumentTypeService,
  ) { }
  person: Person;
  ngOnInit(): void {
    this.getDocumentType()
    this.crearForm();
    this.$person = this._person.person.subscribe((r) => {
      this.person = r;
    });
  }

  getDocumentType() {
    this._documenttypes.getDocumentTypes().subscribe((r: any) => {
      this.documenttypes = r.data
    })
  }

  validarCedula(cedula) {
    let envio_cedula = cedula.target.value;
    this._people.validarCedula(envio_cedula).subscribe((r: any) => {
      if (r.data == true) {
        Swal.fire({
          icon: 'error',
          title: 'Funcionario existente',
          html: r.code.first_name + ' ' + r.code.second_name + ' ' + r.code.first_surname + ' ' + r.code.second_surname +
            '<br/>' + envio_cedula,
        })
        this.form.get('identifier').reset();
      }
    });
  }

  crearForm() {
    this.form = this.fb.group({
      image: ['', Validators.required],
      type_document_id: ['', Validators.required],
      identifier: ['', Validators.required],
      first_name: ['', Validators.required],
      second_name: [''],
      first_surname: ['', Validators.required],
      second_surname: [''],
      email: ['', [Validators.required, Validators.email]],
      birth_date: ['', Validators.required],
      birth_place: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      sex: ['', Validators.required],
      blood_type: ['', Validators.required],
      cell_phone: [
        '',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),]
      ],
      marital_status: ['', Validators.required],
      number_of_children: ['', Validators.required],
      degree: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  get image_valid() {
    return this.form.get('image').invalid && this.form.get('image').touched;
  }
  get document_type_valid() {
    return (
      this.form.get('type_document_id').invalid && this.form.get('type_document_id').touched
    );
  }
  get identifier_valid() {
    return (
      this.form.get('identifier').invalid && this.form.get('identifier').touched
    );
  }
  get first_name_valid() {
    return (
      this.form.get('first_name').invalid && this.form.get('first_name').touched
    );
  }
  get first_surname_valid() {
    return (
      this.form.get('first_surname').invalid &&
      this.form.get('first_surname').touched
    );
  }
  get email_valid() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }
  get date_of_birth_valid() {
    return (
      this.form.get('birth_date').invalid && this.form.get('birth_date').touched
    );
  }
  get place_of_birth_valid() {
    return (
      this.form.get('birth_place').invalid &&
      this.form.get('birth_place').touched
    );
  }
  get direction_valid() {
    return this.form.get('address').invalid && this.form.get('address').touched;
  }
  get phone_valid() {
    return this.form.get('phone').invalid && this.form.get('phone').touched;
  }
  get gener_valid() {
    return this.form.get('sex').invalid && this.form.get('sex').touched;
  }
  get blood_type_valid() {
    return (
      this.form.get('blood_type').invalid && this.form.get('blood_type').touched
    );
  }
  get cell_phone_valid() {
    return (
      this.form.get('cell_phone').invalid && this.form.get('cell_phone').touched
    );
  }
  get marital_status_valid() {
    return (
      this.form.get('marital_status').invalid &&
      this.form.get('marital_status').touched
    );
  }
  get number_of_children_valid() {
    return (
      this.form.get('number_of_children').invalid &&
      this.form.get('number_of_children').touched
    );
  }
  get degree_valid() {
    return this.form.get('degree').invalid && this.form.get('degree').touched;
  }
  get title_valid() {
    return this.form.get('title').invalid && this.form.get('title').touched;
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return false;
    }

    this.person = { ...this.person, ...this.form.value };
    this.person.image = this.file;
    this._person.person.next(this.person);
    this.siguiente.emit({});
  }

  onFileChanged(event) {
    if (event.target.files[0]) {
      let file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.fileString = (<FileReader>event.target).result;
      };
      functionsUtils.fileToBase64(file).subscribe((base64) => {
        this.file = base64;
      });
    }
  }
  ngOnDestroy(): void {
    this.$person.unsubscribe();
  }
}
