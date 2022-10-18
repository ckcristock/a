import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivosFijosService {

  constructor( private http: HttpClient ) { }

  FiltrarTerceros(match:string):Observable<any>{
    let p = {coincidencia:match};
    return this.http.get(environment.ruta+'filtrar_terceros.php', {params:p});
  }

  normalize = (function () {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç\n\r'",
      to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuuNncc--*",
      mapping = {};


    for (var i = 0, j = from.length; i < j; i++){
      
      mapping[from.charAt(i)] = to.charAt(i);
    }
      
      
      
    
    return function (str) {
      var ret = [];
      for (var i = 0, j = str.length; i < j; i++) {
   
        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i)))
          ret.push(mapping[c]);           
        else
          ret.push(c);
      }
      return ret.join('');
    }

  })();

  getPeople() {
    return this.http.get(`${environment.base_url}/people`);
  } 

  getFixedAssetType(){
    return this.http.get(`${environment.base_url}/fixed_asset_type`);
  }

}
