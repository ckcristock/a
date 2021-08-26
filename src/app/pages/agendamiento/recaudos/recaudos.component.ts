import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.component.html',
  styleUrls: ['./recaudos.component.scss']
})
export class RecaudosComponent implements OnInit {

  loading = false;
  citas: Array<any> = [
    {
      face_to_face:true,
      type:'',
      date:'2021-08-25 14:40:34',
      patient:'JOSE EVENDAÑO 1,125,432,456',
      professional:'DOCTOR DE PRUEBA',
      description:'Esto es una prueba de una cita a un paciente',
      eps: 'MEDIMAS EPS',
      copago:'3500',
      state:'Recaudado'
    },
    {
      face_to_face:false,
      type:'',
      date:'2021-08-26 10:40:34',
      patient:'JOSE EVENDAÑO 1,125,432,456',
      professional:'DOCTOR DE PRUEBA',
      description:'Esto es una prueba de una cita a un paciente',
      eps: 'MEDIMAS EPS',
      copago:'3500',
      state:'Confirmado'
    },
    {
      face_to_face:false,
      type:'',
      date:'2021-08-26 10:40:34',
      patient:'JOSE EVENDAÑO 1,125,432,456',
      professional:'DOCTOR DE PRUEBA',
      description:'Esto es una prueba de una cita a un paciente',
      eps: 'MEDIMAS EPS',
      copago:'3500',
      state:'Confirmado'
    },
    {
      face_to_face:false,
      type:'',
      date:'2021-08-26 10:40:34',
      patient:'JOSE EVENDAÑO 1,125,432,456',
      professional:'DOCTOR DE PRUEBA',
      description:'Esto es una prueba de una cita a un paciente',
      eps: 'MEDIMAS EPS',
      copago:'3500',
      state:'Confirmado'
    }

  ];
  filters: any = {
    patient: '',
    date: new Date(),
  }
  pagination = {
    pageSize: 15,
    page: 1,
    collectionSize: 50,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
