import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor( private http: HttpClient ) { }

  save( data:any ){
    return this.http.post(`${environment.base_url}/materials`, data);
  }

  update( data, id ){
    return this.http.put(`${environment.base_url}/materials/${id}`, data);
  }

}

