import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipificacion',
  templateUrl: './tipificacion.component.html',
  styleUrls: ['./tipificacion.component.scss']
})
export class TipificacionComponent implements OnInit {
  data:any = {
    Id_Llamada:'',
    Id_Funcionario:'',
    Fecha:'',
    Id_Paciente:'',
    Id_Tramite:'',
    Id_Ambito:'',
    Id_Servicio:'',
    Id_Tipificacion:'',
    
  }
  
  typesDocuments:Array<any> = [
    {Nombre:'CI',Id:'1'},
    {Nombre:'CC',Id:'2'},
    {Nombre:'CC',Id:'2'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
