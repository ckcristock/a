import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})
export class SedesComponent implements OnInit {
  pagination = {
    pageSize: 20,
    page: 1,
    collectionSize: 40,

  }
  filters: any = {

    date: '',
    institution: '',
    patient: '',
    speciality: '',

  }
  sedes = [{
    enterprise:'Genric',
    code:'001',
    name: 'VIDASER EU',
    nit: '1'
  }, {
    enterprise:'Genric',
    code:'001',
    name: 'MEDISERRRANO IPS S.A.S.',
    nit: '900.941.895-7'
  }, {
    enterprise:'Genric',
    code:'001',
    name: 'IPS MEDICINA ESPECIALIZADA DEL RIESGO EN SALUD DEL SUR S.A.S.',
    nit: '	901.032.674-1'
  }, {
    enterprise:'Genric',
    code:'001',
    name: 'SALUD VITAL IPS S.A.S.',
    nit: '901.034.231-1'
  
  }, {
    enterprise:'Genric',
    code:'001',
    name: 'IPS HEMOPLIFE SALUD S.A.S.',
    nit: '901.174.496-4'
  
  }, {
    enterprise:'Genric',
    code:'001',
    name: 'ECONOMÍA Y MEDICINA A SU ALCANCE S.A.S.',
    nit: '901.184.011-9'
  }
]
  constructor() { }

  ngOnInit(): void {
  }
  

}
