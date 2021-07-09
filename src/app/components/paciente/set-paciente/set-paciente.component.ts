import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import { dataCitaToAssignService } from 'src/app/pages/agendamiento/dataCitaToAssignService.service';
import { QueryPatient } from 'src/app/pages/agendamiento/query-patient.service';
import { genders, levels, typeRegimens, typeDocuments, epss } from './dataPacienteBurns';
import { Subscription } from 'rxjs';
import { Patient } from '../../../core/models/patient.model';

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

  contracts: Array<any> = []

  paciente: any = new Patient(); /* {
    Id_Tipo_Identificacion: '',
    Tipo_Identificacion: '',
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
  }; */

  typesDocuments: Array<any> = [
    { Nombre: 'CI', Id: '1' },
    { Nombre: 'CC', Id: '2' },
    { Nombre: 'CC', Id: '2' },
  ]

  public currentPatient
  public departments
  public cities
  public agreements
  public companies
  public locations


  $qp: Subscription
  constructor(private _queryPatient: QueryPatient, private _dataDinamicService: DataDinamicService, private dataCitaToAssignService: dataCitaToAssignService) {
  }

  ngOnInit() {


    this.$qp = this._queryPatient.patient.subscribe(async r => {

      if (r.paciente.identifier) {


        await this.getDepartments();
        this.getContracts();
        this.getCompanies();
        this.getTypeDocuments();
        this.getEps();
        this.getRegimens();
        this.getlevels();
        this.paciente = r.paciente
        console.log(r.paciente);
        this.getLocations(r.paciente.company_id)
        /*  this.paciente.level_id.value=this.paciente.level_id */
        this.dataCitaToAssignService.dateCall = r
        this.getCities();
      }
    })
  }

  async getDepartments() {
    await this._dataDinamicService.getDepartments().toPromise().then((req: any) => {
      this.departments = req.data
    })
  }

  getCities() {
    if (this.paciente.department_id) {
      let parm = { department_id: this.paciente.department_id }
      this._dataDinamicService.getCities(parm).subscribe((req: any) => {
        this.cities = req.data
      })
    }

  }

  getCompanies() {
    this._dataDinamicService.getCompanies().subscribe((req: any) => {
      this.companies = req.data

    })
  }

  getLocations(company_id) {
    console.log(company_id);

    this._dataDinamicService.getLocations(company_id).subscribe((req: any) => {
      this.locations = req.data
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
  getContracts() {
    this._dataDinamicService.getContracts().subscribe((req: any) => {
      this.contracts = req.data
    })
  }

  save(formPatient: NgForm) {
    this._dataDinamicService.savePatient(JSON.stringify(formPatient.value)).subscribe((req: any) => {
      this.dataCitaToAssignService.dateCall['paciente'] = req.data.patient
    })
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //this._queryPatient.resetPatient();
    this.$qp.unsubscribe();
  }

}
