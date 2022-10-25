import { Component, DoCheck, IterableDiffers, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';
import { functionsUtils } from 'src/app/core/utils/functionsUtils';
import Swal from 'sweetalert2';
import { ConfiguracionEmpresaService } from '../configuracion-empresa.service';

@Component({
  selector: 'app-datos-basicos-empresa',
  templateUrl: './datos-basicos-empresa.component.html',
  styleUrls: ['./datos-basicos-empresa.component.scss']
})

export class DatosBasicosEmpresaComponent implements OnInit, DoCheck {
  @ViewChild('modal') modal: any;
  public company: any = [];
  form: FormGroup;
  file: string;
  loading: boolean = true;
  differ: any;
  fileString: string | ArrayBuffer = "";
  constructor(
    private _configuracionEmpresaService: ConfiguracionEmpresaService,
    private fb: FormBuilder,
    private _modal: ModalService,
    differs: IterableDiffers
  ) { 
    this.differ = differs.find([]).create(null)
  }
  ngDoCheck() {
    let change = this.differ.diff([this.company]);
    console.log(this.company)
    if (this.company.id) {
      this.loading = false
    }
  }

  ngOnInit(): void {
    this.createForm();
    /* this.getBasicData(); */
  }


  openModal(modal) {
    this._modal.open(modal, 'lg');
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.company.id],
      name: [''],
      document_type: [''],
      tin: [''],
      dv: [''],
      creation_date: [''],
      email_contact: [''],
      phone: [''],
      logo: ['']
    });

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
        this.file = base64
      });
    }
  }


  getBasicData() {

    this.form.patchValue({
      id: this.company.id,
      logo: this.company.logo,
      name: this.company.name,
      document_type: this.company.document_type,
      tin: this.company.tin,
      dv: this.company.dv,
      creation_date: this.company.creation_date,
      email_contact: this.company.email_contact,
      phone: this.company.phone
    })
    this.fileString = this.company.logo
  }

  saveBasicData() {
    let body = { ...this.form.value }
    body['logo'] = this.file
    this._configuracionEmpresaService.saveCompanyData(body)
      .subscribe((res: any) => {
        console.log(res);
        this._modal.close();
        this.getBasicData();
        Swal.fire({
          icon: 'success',
          title: 'Actualizado Correctamente'
        });
      });
  }

}
