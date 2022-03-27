import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/core/services/user.service';
import { TaskService } from 'src/app/pages/ajustes/informacion-base/services/task.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent implements OnInit {
  myGroup: any;
  model: NgbDateStruct;
  closeResult = '';
  selectedTipo: number;
  pendientes: [];
  person = [];
  tasksave: any;
  taskjson: any;
  tipo = [
    { id: 1, name: 'Tipo 1' },
    { id: 2, name: 'Tipo 2' },
    { id: 3, name: 'Tipo 3' },
    { id: 4, name: 'Tipo 4' },
    { id: 5, name: 'Tipo 5' }
  ];

  //SUBIR ARCHIVOS

  public archivos: any = [];
  public previsualizacion: string;
  errorSubida = false;
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private _task: TaskService,
    private _user: UserService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    public fb: FormBuilder) {}




  ngOnInit(): void {
    this.getPersonTaskPendiente();
    this.getPerson();
  }

  capturarFile(event): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado)
    this.archivos.push(archivoCapturado)
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  });

  subirArchivo() {
    try {
      const formularioDeDatos = new FormData();
      this.archivos.forEach(archivo => {
        formularioDeDatos.append('adjuntos', archivo)
      });
      this.http.post(`${environment.base_url}/uploadfile`, formularioDeDatos)
        .subscribe(res => {
          console.log('Respuesta del servidor', res);
        });
    } catch (e) {
      console.log('ERROR', e)      
    }

  }
  saveTask() {
    try {
      if (this.myGroup.value.link) {
        this.myGroup.value.link = (this.router.url).toString().split('/').join('_')
      }
      else {
        this.myGroup.value.link = null
      }
      this.tasksave = {
        id_realizador: this.myGroup.value.id_asignador.id,
        tipo: this.myGroup.value.tipo.name,
        titulo: this.myGroup.value.nombre,
        descripcion: this.myGroup.value.descripcion,
        fecha: this.myGroup.value.fecha,
        adjuntos: this.myGroup.value.adjuntos,
        link: this.myGroup.value.link,
        id_asignador: this._user.user.person.id,
        hora: this.myGroup.value.hora,
        estado: 'Pendiente',
      }
      console.log(this.tasksave)
      //validar que todos los campos estén llenos
      this.taskjson = JSON.stringify(this.tasksave)
      this._task.newTask(this.taskjson).subscribe()
      this.modalService.dismissAll();
    } catch (error) {
      console.log('error', error)
      this.errorSubida = true;
    }
  }

  getPerson() {
    this._task.personCompany(this._user.user.person.company_worked.id).subscribe(
      (d: any) => {
        this.person = d.data;
      });
  }

  getPersonTaskPendiente() {
    this._task
      .personTaskPendiente(this._user.user.person.id)
      .subscribe(
        (d: any) => {
          this.pendientes = d.data;
        });
  }

  public open(content) {
    this.myGroup = new FormGroup({
      nombre:  new FormControl('', Validators.required),
      tipo: new FormControl(),
      id_asignador: new FormControl(),
      fecha: new FormControl('', Validators.required),
      hora: new FormControl(),
      descripcion: new FormControl(),
      link: new FormControl(),
      adjuntos: new FormControl(),
    });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public hide() {
    document.body.classList.remove('right-bar-enabled');
  }

}
