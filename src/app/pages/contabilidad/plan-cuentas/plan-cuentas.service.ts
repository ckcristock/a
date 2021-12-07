import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanCuentasService {

  constructor( private http: HttpClient ) { }

  getAccount_plan( params = {} ) {
    return this.http.get(`${environment.ruta}/php/plancuentas/lista_plan_cuentas.php`, {params});
  }
    
  createAccount_plan( data:any ) {
    return this.http.post(`${environment.ruta}/php/contabilidad/plancuentas/guardar_puc.php`, data);
  }

  editAccounPplan( data:any ) {
    return this.http.post(`${environment.ruta}/php/contabilidad/plancuentas/detalle_plan_cuenta.php`, data);
  }

  getBanks() {
    return this.http.get(`${environment.base_url}/banks`)
  }

}
