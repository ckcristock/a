import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.scss']
})
export class ProfesionalesComponent implements OnInit {

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
  professionals = [{
    identification:'1222334',
    names:'Jhoe Due',
    city: 'VIDASER EU',
    company:'Company Test',
    state:'Activo'
  }, {
    identification:'1222334',
    names:'Jhoe Due',
    city: 'MEDISERRRANO',
    company:'Company Test',
    state:'Activo'
  }, {
    identification:'1222334',
    names:'Jhoe Due',
    city: 'MEGSALUD',
    company:'Company Test',
    state:'Activo'
  }, {
    identification:'1222334',
    names:'Jhoe Due',
    city: 'SALUDVITAL',
    company:'Company Test',
    state:'Activo'

  }, {
    identification:'1222334',
    names:'Jhoe Due',
    city: 'HEMOPLIFE',
    company:'Company Test',
    state:'Activo'

  }, {
    identification:'1222334',
    names:'Jhoe Due',
    city: 'ECOMEDIS',
    company:'Company Test',
    state:'Activo'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
