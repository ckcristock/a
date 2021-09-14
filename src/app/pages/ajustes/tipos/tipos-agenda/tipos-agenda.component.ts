import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-agenda',
  templateUrl: './tipos-agenda.component.html',
  styleUrls: ['./tipos-agenda.component.scss']
})
export class TiposAgendaComponent implements OnInit {

  pagination = {
    pageSize: 20,
    page: 1,
    collectionSize: 40,

  }
  pagination2 = {
    pageSize: 20,
    page: 1,
    collectionSize: 40,
 
  }
  type_appointments =[
    { 
      icon:"fa fa-video",
      name:"TELEMEDICINA",
      description :"SERVICIOS DE TELEMEDICINA"
    },
    { 
      icon:"fa fa-user",
      name:"PRESENCIAL",
      description :"SERVICIOS PRESENCIALES"

    }
  ];
  sub_type_appointments =[
    { 
      type_appointment:"TELEMEDICINA",
      name :"TELECONSULTA"
    },
    { 
      type_appointment:"TELEMEDICINA",
      name :"TELECONCEPTO"
    },
    { 
      type_appointment:"PRESENCIAL",
      name :"CONSULTA"
    },
    { 
      type_appointment:"PRESENCIAL",
      name :"PROCEDIMIENTOS"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
