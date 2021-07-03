import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.scss']
})
export class ProfesionalesComponent implements OnInit {

  @ViewChild('newModal') newModal

  professional :any = {
    type_identification_id:'',
    identification:'',
    first_name:'',
    second_name:'',
    first_surname:'',
    second_surname:'',
    birth_day:'',
    civil_state:'',
    email:'',
    telphone:'',
    celphone:'',
    Ips:'',
    departament_id:'',

    municipality_id:'',
    companies:[],
    medical_register:'',
    professional_type_id:'',
    specialities:[]
  }
  photo_blob : any;
  firma_blob : any;

  companies=[
    {
    text:'Empresa A', value:'1'
  },
    {
    text:'Empresa B', value:'2'
  },
    {
    text:'Empresa C', value:'3'
  },
]

specialities = [
  {
  text:'Cardiología ',value:1,
},
  {
  text:'Cardiología',value:2,
},

  {
  text:'Cardiología',value:3,
},
]

professional_types = [
  {text:'Doctor',value:1},
  {text:'Enfermeria',value:2},
  {text:'Jefe Enfermeria',value:2},
]
  typesDocuments: Array<any> = [
    { Nombre: 'CC', Id: '1' },
    { Nombre: 'CI', Id: '2' },
    { Nombre: 'CE', Id: '3' },
  ]
  civilStates: Array<any> = [
    { Nombre: 'Soltero/a', Id: '1' },
    { Nombre: 'Casado/a', Id: '2' },
  ]
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
<<<<<<< HEAD
=======

  departaments :any = [
    {value:1,text:'Santander'},
    {value:2,text:'Norte Santander'},
    {value:3,text:'Magdalena'},
  ]

  municipalities :any = [

  ]
>>>>>>> af2bd9c522dc4a7cadbdf8d6406a2d1f62915dc6
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  guardar(){
    console.log(this.professional);

  }

  searchMun(){
    console.log(this.professional);

    this.municipalities = [{value:1,text:'Santander'},
    {value:2,text:'Norte Santander'},
    {value:3,text:'Magdalena'}]
    }

>>>>>>> af2bd9c522dc4a7cadbdf8d6406a2d1f62915dc6
}
