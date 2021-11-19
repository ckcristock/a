import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { functionsUtils } from 'src/app/core/utils/functionsUtils';
import Swal from 'sweetalert2';
import { ConfiguracionEmpresaService } from '../configuracion-empresa.service';

@Component({
  selector: 'app-datos-basicos-empresa',
  templateUrl: './datos-basicos-empresa.component.html',
  styleUrls: ['./datos-basicos-empresa.component.scss']
})


export class DatosBasicosEmpresaComponent implements OnInit {
  @ViewChild('modal') modal: any;
  public company: any = [];
  form: FormGroup;
  file: string;
  fileString: string | ArrayBuffer = "";
  constructor(
    private _configuracionEmpresaService: ConfiguracionEmpresaService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getBasicData();
  }

  openModal() {
    this.modal.show();
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
      image: ['']
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
      image: '',
      name: this.company.name,
      document_type: this.company.document_type,
      tin: this.company.tin,
      dv: this.company.dv,
      creation_date: this.company.creation_date,
      email_contact: this.company.email_contact,
      phone: this.company.phone
    })
  }

  saveBasicData() {

    let body = { ...this.form.value }
    body['image'] = this.file
    this._configuracionEmpresaService.saveCompanyData(body)
      .subscribe((res: any) => {
        console.log(res);
        this.modal.hide();
        this.getBasicData();
        Swal.fire({
          icon: 'success',
          title: 'Actualizado Correctamente'
        });
      });
  }

}
