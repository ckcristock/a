import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import { dataCitaToAssignService } from 'src/app/pages/agendamiento/dataCitaToAssignService.service';
import { QueryPatient } from 'src/app/pages/agendamiento/query-patient.service';
import { genders, levels, typeRegimens, typeDocuments, epss } from './dataPacienteBurns';
import { Subscription } from 'rxjs';
import { Patient } from '../../../core/models/patient.model';
import Swal from 'sweetalert2';

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

  paciente: any = new Patient();

  public currentPatient
  public departments
  public cities
  public agreements
  public companies
  public locations

  public llamada: any;
  $qp: Subscription
  constructor(private _queryPatient: QueryPatient, private _dataDinamicService: DataDinamicService, private dataCitaToAssignService: dataCitaToAssignService) {
  }

  ngOnInit() {


    this.$qp = this._queryPatient.patient.subscribe(async r => {

      if (r.paciente.identifier) {
        console.log(r.paciente, 'set');


        await this.getDepartments();
        this.getContracts();
        this.getCompanies();
        this.getTypeDocuments();
        this.getEps();
        this.getRegimens();
        this.getlevels();
        this.paciente = r.paciente
        this.llamada = r.llamada
        //console.log(r.paciente);
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

  getPatientAgain(document) {
    this._dataDinamicService.getPatientAgain(document).subscribe((req: any) => {
      console.log(req.data, 'dssds');
      let paciente = req.data;
      if (!paciente) {
        paciente = this.newPatient(paciente, document)
      }
      this._queryPatient.patient.next({ llamada: this.llamada, paciente: paciente });
    })
  }

  newPatient(paciente, document) {

    paciente = new Patient()
    paciente.identifier = document
    paciente.isNew = true
    return paciente;
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
    try {
      this._queryPatient.validate(this.paciente);
      this._dataDinamicService.savePatient(JSON.stringify(formPatient.value)).subscribe((req: any) => {
        if (req.code == 200) {

          this.dataCitaToAssignService.dateCall['paciente'] = req.data.patient
          this.paciente.id = req.data.patient.id;
          this.paciente.isNew = false
          this._queryPatient.patient.next({ llamada: this.llamada, paciente: this.paciente })
          Swal.fire('Felicidades', 'Actualizado correctamente', 'success');
        } else {

          Swal.fire('Ha ocurrido un error', 'Contáctese con el departamento de sistemas', 'error');
        }

      })
    } catch (error) {
      console.log(error);

      Swal.fire('Faltan campos del paciente', error, 'error');

    }


  }




  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //this._queryPatient.resetPatient();
    this.$qp.unsubscribe();
  }

}
