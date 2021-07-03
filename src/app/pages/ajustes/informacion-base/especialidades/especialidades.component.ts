import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss']
})
export class EspecialidadesComponent implements OnInit {
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
  specialities = [{
    code: 'CO',
    name: 'Contributivo',

  }, {
    code: 'COD1',
    name: 'Subsidiado',

  }, {
    code: 'CO',
    name: '	901.032.674-1',
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
