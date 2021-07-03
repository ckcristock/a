import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.scss']
})
export class AgendasComponent implements OnInit {
  statData = [
    {
      icon: 'fa fa-calendar-week',
      title: '# Citas abiertas',
      value: '2344'
    }, {
      icon: 'fa fa-calendar-day',
      title: '# Citas disponibles',
      value: '3434'
    }, {
      icon: 'fa fa-calendar-check' ,
      title: '# Citas asignadas',
      value: '34455'
    }
  ];
  pagination = {
    pageSize: 20,
    page: 1,
    collectionSize: 100,

  }
  filters: any = {
    date: '',
    institution: '',
    patient: '',
    speciality: '',

  }
  searching = false;
  searchFailed = false;

  agendas = [
    { 'date': '2020-05-01', functioray_open: 'Daniel Brox', id: 1, professional: 'Charls Jr', spaciality: 'Cardilogía', state: 'Abierta' },
    { 'date': '2020-05-01', functioray_open: 'Daniel Brox', id: 2, professional: 'Charls Jr', spaciality: 'Cardilogía', state: 'Abierta' },
    { 'date': '2020-05-01', functioray_open: 'Daniel Brox', id: 3, professional: 'Charls Jr', spaciality: 'Cardilogía', state: 'Abierta' },
    { 'date': '2020-05-01', functioray_open: 'Daniel Brox', id: 4, professional: 'Charls Jr', spaciality: 'Cardilogía', state: 'Abierta' },
  ]

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
