import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.scss']
})
export class CupsComponent implements OnInit {
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
  searching = false;
  searchFailed = false;
  cups = [{
    code: 'COD1',
    description: 'VIDASER EU',
    speciality:'Specials',
    type: '1',
    
  }, {
    code: 'COD1',
    description: 'MEDISERRRANO',
    speciality:'Specials',
    type: '900.941.895-7',
    
  }, {
    code: 'COD1',
    description: 'MEGSALUD',
    speciality:'Specials',
    type: '	901.032.674-1',
    
  }, {
    code: 'COD1',
    description: 'SALUDVITAL',
    speciality:'Specials',
    type: '901.034.231-1',
    
  
  }, {
    code: 'COD1',
    description: 'HEMOPLIFE',
    speciality:'Specials',
    type: '901.174.496-4',
    
  
  }, {
    name: 'ECONOMÍA Y MEDICINA A SU ALCANCE S.A.S.',
    initials: 'ECOMEDIS',
    nit: '901.184.011-9'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
