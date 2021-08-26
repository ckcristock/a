import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnotherFormalityService {


  constructor(private http : HttpClient) { }

  save(form){
    return this.http.post(environment.base_url+'/another-formality',form)
  }
}
