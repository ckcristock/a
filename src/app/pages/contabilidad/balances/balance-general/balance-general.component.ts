import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-balance-general',
  templateUrl: './balance-general.component.html',
  styleUrls: ['./balance-general.component.scss']
})
export class BalanceGeneralComponent implements OnInit {

  public datosCabecera:any = {
    Titulo: 'Balance General',
    Fecha: new Date()
  }

  public Centro_Costos: Array<any>;
  public Centro_Costo:any = '';

  public Cuenta:any = {
    Inicial: '',
    Final: ''
  }

  public Parametros:any = {
    Fecha_Corte: '',
    Tipo_Reporte: 'Pcga',
    Nivel: '8',
    Centro_Costo: ''
  }

  public Tipo:string = '';
  public Niveles = [1,2,3,4,5,6,7,8,9,10,11];
  Cuentas: any = [];
  Cuenta_Inicial:any = '';
  Cuenta_Final:any = '';
  Discriminado:any = '';
  queryParams: string = '';
  envirom: any;
  company_id:any = '';

  constructor( private http: HttpClient, private _user: UserService ) { }

  ngOnInit() {
    this.ListarCentroCostos();
    this.envirom = environment;
    this.company_id = this._user.user.person.company_worked.id;
  }

  ListarCentroCostos() {

    this.http.get(environment.ruta+'php/contabilidad/balanceprueba/lista_centro_costos.php', {params: { company_id: this._user.user.person.company_worked.id }}).subscribe((data:any)=>{
      this.Centro_Costos = data;
    })
    
  }

  getQueryParams(){
    let params:any = {
      tipo: this.Parametros.Tipo_Reporte,
      fecha_corte: this.Parametros.Fecha_Corte,
      nivel: this.Parametros.Nivel,
      company_id: this.company_id
    };

    if (this.Parametros.Centro_Costo != '') {
      params.centro_costo = this.Parametros.Centro_Costo;
    }

    this.queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&');

    
  }

}
