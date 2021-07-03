import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import { QueryPatient } from 'src/app/pages/agendamiento/query-patient.service';
import { genders, levels, typeRegimens, typeDocuments, epss } from './dataPacienteBurns';

@Component({
  selector: 'app-set-paciente',
  templateUrl: './set-paciente.component.html',
  styleUrls: ['./set-paciente.component.scss']
})


export class SetPacienteComponent implements OnInit {

  public genders = genders;
  public levels;
  public typeRegimens;
  public typeDocuments;
  public eps;

  paciente: any = {
    Id_Tipo_Identificacion: '',
    Identificacion: '',
    paciente: '',
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

  typesDocuments: Array<any> = [
    { Nombre: 'CI', Id: '1' },
    { Nombre: 'CC', Id: '2' },
    { Nombre: 'CC', Id: '2' },
  ]

  public currentPatient
  public departments
  public cities
  public agreements

  constructor(private _queryPatient: QueryPatient, private _dataDinamicService: DataDinamicService) {
  }

  ngOnInit(): void {

    this.getDepartments();
    this.getCities();
    this.getAgreements();
    this.getTypeDocuments();
    this.getEps();
    this.getRegimens();
    this.getlevels();

    this._queryPatient.patient.subscribe(r => this.paciente = r.paciente)
  }

  getDepartments() {
    this._dataDinamicService.getDepartments().subscribe((req: any) => {
      this.departments = req.data
    })
  }

  getCities() {
    this._dataDinamicService.getCities().subscribe((req: any) => {
      this.cities = req.data
    })
  }

  getAgreements() {
    this._dataDinamicService.getAgreements().subscribe((req: any) => {
      this.agreements = req.data
    })
  }

  getTypeDocuments() {
    this._dataDinamicService.getTypeDocuments().subscribe((req: any) => {
      this.typeDocuments = req.data
    })
  }

  getEps() {
    this._dataDinamicService.getEps().subscribe((req: any) => {
      this.eps = req.data
    })
  }

  getRegimens() {
    this._dataDinamicService.getRegimens().subscribe((req: any) => {
      this.typeRegimens = req.data
    })
  }

  getlevels() {
    this._dataDinamicService.getlevels().subscribe((req: any) => {
      this.levels = req.data
    })
  }

}
