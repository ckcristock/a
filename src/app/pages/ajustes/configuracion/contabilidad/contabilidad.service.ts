import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContabilidadService {

  constructor( private http: HttpClient ) { }

  getSubcategories( params = {} ){
    return this.http.get(`${environment.base_url}/subcategory`, {params});
  }
  
  saveSubcategoryCount(){
    return this.http.get(`${environment.base_url}php/activofijo/cuentas.php`);
  }

  getAccountPlanProducts(params){
    return this.http.get(`${environment.base_url}/product-accounting`,{params});
  }
  saveAccountPlanProducts(body){
    return this.http.post(`${environment.base_url}/product-accounting`,body);
  }

}
