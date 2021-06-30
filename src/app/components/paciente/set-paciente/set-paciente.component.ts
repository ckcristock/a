import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-set-paciente',
  templateUrl: './set-paciente.component.html',
  styleUrls: ['./set-paciente.component.scss']
})
export class SetPacienteComponent implements OnInit {
  paciente:any = {
    Id_Tipo_Identificacion: '',
    Identificacion: '',
    paciente: 'asdasdas',
    Apellidos: '',
    Id_Sexo: '',
    Fecha_Nacimiento: '',
    Id_Lengua: '',
    Id_Eps: '',
    Id_Contrato: '',
    Id_Regimen: '',
    Id_Nivel: '',
    Id_Pais: '',
    Id_Departamento: '',
    Id_Ciudad: '',
    Direccion: '',
    Email: '',
    Telefono: '',
    Celular: '',
  };

  typesDocuments:Array<any> = [
    {Nombre:'CI',Id:'1'},
    {Nombre:'CC',Id:'2'},
    {Nombre:'CC',Id:'2'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
