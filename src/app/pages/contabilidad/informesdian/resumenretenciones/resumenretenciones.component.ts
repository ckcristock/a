import { Component, OnInit } from '@angular/core';
import { Globales } from '../../globales';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from '../../../../core/services/user.service';
import { User } from 'src/app/core/models/users.model';

@Component({
  selector: 'app-resumenretenciones',
  templateUrl: './resumenretenciones.component.html',
  styleUrls: ['./resumenretenciones.component.scss']
})
export class ResumenretencionesComponent implements OnInit {
  public userF : User;
  public datosCabecera:any = {
    Titulo: 'Resumen de Retenciones',
    Fecha: new Date()
  }
  public model:any = {
    Fecha_Inicio: '',
    Fecha_Fin: '',
    Tipo_Retencion: 'Retefuente',
    Tipo_Reporte: 'Pcga'
  }
  queryParams: string;
  company_id:any = '';

  constructor(private globales: Globales, private http: HttpClient, private _user: UserService) { }

  ngOnInit() {
    this.userF = this._user.user;
    this.company_id = this._user.user.person.company_worked.id;
  }

  setQueryParams() {
    let params:any = {};

    for (const key in this.model) {
      params[key] = this.model[key];
    }
    params.company_id = this.company_id

    this.queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  }
  
  generarResumen() {
    window.open(environment.ruta+'php/contabilidad/resumenretenciones/reporte.php?'+this.queryParams,'_blank');
  }


}
