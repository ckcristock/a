import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContabilidadService } from './contabilidad.service'
@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.scss']
})
export class ContabilidadComponent implements OnInit {
  active = 1
  accounts:any = []
  constructor(private _contabilidad: ContabilidadService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAccountPlans()
  }

  getAccountPlans(){
    this.http.get(`${environment.ruta}php/activofijo/cuentas.php`).subscribe((r:any)=>{
      this.accounts = r
    })
  }

  



}
