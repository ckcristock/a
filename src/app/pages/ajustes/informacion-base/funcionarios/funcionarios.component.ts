import { Component, OnInit } from '@angular/core';

import { functionariesList } from './data';

class FunctionaryModel {
  id: number;
  name: string; // nombre
  company: string; // nombre empresa
  position: string; // nombre cargo
  state: string; // nombre estado (Activo, Liquididado, Suspendido)
  image: string; // ruta complete de imagen del funcionario ()
}

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})

export class FuncionariosComponent implements OnInit {

    
  breadCrumbItems: Array<{}>;
  functionariesList: FunctionaryModel[];

  public functionaries: FunctionaryModel[] = [];

  public dependencies : any =[
    {
      id:1,
      name:'Talento Humano'
    },
    {
      id:2,
      name:'Contabilidad'
    },
    {
      id:3,
      name:'Facturacion'
    },
    {
      id:4,
      name:'Calidad'
    },
    {
      id:5,
      name:'Centro Contacto'
    },
    {
      id:6,
      name:'Tecnología'
    }
  ]

  public companies : any = [
    { 
      id: 1,
      name: "HEMOPLIFE SALUD"
    },
    { 
      id: 2,
      name: "MEGSALUD IPS"
    },
    { 
      id: 3,
      name: "ECOMEDIS"
    },
    { 
      id: 4,
      name: "VIDASER"
    },
    { 
      id: 5,
      name: "MEDISERRANO"
    },
    { 
      id: 6,
      name: "SALUD VITAL"
    },
    { 
      id: 7,
      name: "MASCORP"
    },
    { 
      id: 2,
      name: "INGBUS"
    },
    { 
      id: 2,
      name: "INNOVATING"
    }
  ]
  isCollapsed: boolean;
  collapsed: boolean;
  collapsed3: boolean;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product', active: true }];
    this.functionaries = Object.assign([], functionariesList);

    this.isCollapsed = false;
    this.collapsed = false;
    this.collapsed3 = false;

    this.functionariesList = functionariesList;
  }

  searchFilter(e) {
    const searchStr = e.target.value;
    this.functionaries = functionariesList.filter((functionary) => {
      return functionary.name.toLowerCase().search(searchStr.toLowerCase()) !== -1;
    });
  }


}
