import { Component, OnInit } from '@angular/core';
import { ChartType } from '../../../../core/interfaces/chart.interface';
import {donutChart} from './data'
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  donutChart: ChartType;

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
  patients = [{
    identification:'1085555',
    name:'Jhoe Due',
    eps:'Medimas',
    regime:'Común',
    state:'Activo',
  },{
    identification:'1085555',
    name:'Jhoe Due',
    eps:'Medimas',
    regime:'Común',
    state:'Activo',
  }
  ];
  constructor() { }
  
  ngOnInit(): void {
    this._fetchData();

  }
  private _fetchData() {
  
    // Donut Chart
    console.log(donutChart);
    
    this.donutChart = donutChart;

    
  }

}
