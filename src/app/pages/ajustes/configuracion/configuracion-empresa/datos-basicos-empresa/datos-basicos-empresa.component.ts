import { Component, DoCheck, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/core/services/modal.service';
import { functionsUtils } from 'src/app/core/utils/functionsUtils';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import Swal from 'sweetalert2';
import { SwalService } from '../../../informacion-base/services/swal.service';
import { ConfiguracionEmpresaService } from '../configuracion-empresa.service';

@Component({
  selector: 'app-datos-basicos-empresa',
  templateUrl: './datos-basicos-empresa.component.html',
  styleUrls: ['./datos-basicos-empresa.component.scss']
})

export class DatosBasicosEmpresaComponent implements OnInit, DoCheck {
  @Output() update = new EventEmitter
  public company: any = [];
  form: FormGroup;
  file: string;
  loading: boolean = true;
  differ: any;
  fileString: string | ArrayBuffer = "";
  documents_types: any = []
  constructor(
    private _configuracionEmpresaService: ConfiguracionEmpresaService,
    private fb: FormBuilder,
    private _modal: ModalService,
    private _swal: SwalService,
    private _data: DataDinamicService
  ) { 
  }
  ngDoCheck() {
    if (this.company.id) {
      this.loading = false
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.getDocumentsTypes()
    /* this.getBasicData(); */
  }

  getDocumentsTypes() {
    this._data.getTypeDocuments().subscribe((res:any) => {
      this.documents_types = res.data
    })
  }

  updateData() {
    this.update.emit()
  }

  openModal(modal) {
    this._modal.open(modal, 'lg');
  }

  createForm() {
    this.form = this.fb.group({
      id: [this.company.id],
      name: ['', Validators.required],
      document_type: ['', Validators.required],
      tin: ['', Validators.required],
      dv: ['', Validators.required],
      creation_date: ['', Validators.required],
      email_contact: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
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
        this._modal.close();
        this.updateData();
        this.getBasicData();
        this._swal.show({
          icon: 'success',
          title: '¡Actualizado!',
          text: 'Datos actualizados correctamente',
          timer: 1000,
          showCancel: false
        })
      });
  }

}
