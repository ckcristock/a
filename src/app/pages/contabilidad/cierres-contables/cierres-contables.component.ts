import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { SwalService } from '../../ajustes/informacion-base/services/swal.service';
import { HttpClient } from '@angular/common/http';
import { CierrecontableService } from './cierrecontable.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-cierres-contables',
  templateUrl: './cierres-contables.component.html',
  styleUrls: ['./cierres-contables.component.scss']
})
export class CierresContablesComponent implements OnInit {
  public abrirPlanesCuenta: EventEmitter<string> = new EventEmitter();
  public modalCierre: Subject<any> = new Subject();
  envirom: any = {}
  public Cierres:any = {
    Mes: [],
    Anio: []
  }
  public Id_Empresa:any = '';
  constructor(
    private cierresContableService: CierrecontableService,
    private swalService: SwalService,
    private http: HttpClient,
    private _user: UserService
    ) { }

  ngOnInit() {
    this.listaCierres();
    this.envirom = environment
    this.Id_Empresa = this._user.user.person.company_worked.id;
  }

  abrirModalCierre(tipo) {
    this.modalCierre.next(tipo);
  }

  nombreMes(mes) {
    let pos = parseInt(mes) - 1;
    return this.cierresContableService.getMes(pos);
  }
  loading: boolean = false
  loading2: boolean = false
  listaCierres() {
    this.loading = true
    this.loading2 = true
    this.http.get(environment.ruta + 'php/contabilidad/cierres/lista_cierre.php', { params: { company_id: this._user.user.person.company_worked.id }}).subscribe((data:any) => {
      this.Cierres.Mes = data.Mes;
      this.Cierres.Anio = data.Anio;
      this.loading = false
    this.loading2 = false
    });
  }

  anularCierreAnio(id) {
    let p:any = {id:id}
    this.http.get(environment.ruta+'php/contabilidad/cierres/anular_cierre.php',{params: p}).subscribe((data:any) => {
      // this.swalService.ShowMessage(data);
      Swal.fire({
        icon: data.codigo,
        title: data.titulo,
        text: data.mensaje
      })
      this.listaCierres();
    })
  }

  OnDestroy(){
    this.abrirPlanesCuenta.unsubscribe();
    this.modalCierre.unsubscribe();
  }

}
