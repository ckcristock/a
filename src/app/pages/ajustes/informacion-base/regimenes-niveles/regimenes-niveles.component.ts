import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-regimenes-niveles',
  templateUrl: './regimenes-niveles.component.html',
  styleUrls: ['./regimenes-niveles.component.scss']
})
export class RegimenesNivelesComponent implements OnInit {
  @ViewChild('firstAccordion') firstAccordion: MatAccordion;
  @ViewChild('secondAccordion') secondAccordion: MatAccordion;
  matPanel = false;
  openClose(){
    if (this.matPanel == false){
      this.firstAccordion.openAll();
      this.matPanel = true;
    } else {
      this.firstAccordion.closeAll();
      this.matPanel = false;
    }    
  }
  matPanel2 = false;
  openClose2(){
    if (this.matPanel2 == false){
      this.secondAccordion.openAll();
      this.matPanel2 = true;
    } else {
      this.secondAccordion.closeAll();
      this.matPanel2 = false;
    }    
  }
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
  regimes = [{
    code: 'CO',
    name: 'Contributivo',

  }, {
    code: 'COD1',
    name: 'Subsidiado',

  }
  ];
  levels = [{
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
