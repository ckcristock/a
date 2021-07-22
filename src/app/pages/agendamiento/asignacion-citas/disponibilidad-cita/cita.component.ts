import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dataCitaToAssign } from 'src/app/core/interfaces/dataCitaToAssign.model';
import { dataCitaToAssignService } from '../../dataCitaToAssignService.service';
import { OpenAgendaService } from '../../open-agenda.service';
import { QueryAvailabilitySpacesService } from '../../query-availability-spaces.service';
import { QueryPatient } from '../../query-patient.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  public dataCitaToAssign = new dataCitaToAssign();
  public type_appointments: [];
  public specialties: [];
  public persons: [];
  public ipss: [];
  public sedes: [];
  public type_subappointments: [
    {
      value: any
    }
  ];

  @Output('siguiente') sigx = new EventEmitter();

  constructor(private _openAgendaService: OpenAgendaService, public _queryAvailabilitySpacesService: QueryAvailabilitySpacesService, private dataCitaToAssignService: dataCitaToAssignService) { }

  ngOnInit(): void {
    this.getTypeAppointment();
  }


  dispatchPerson() {
    this._queryAvailabilitySpacesService.getPerson.next(this.dataCitaToAssign.person);
  }

  dispatchSpeciality(speciality) {
    this.dataCitaToAssign.person = { value: '' }
    this._queryAvailabilitySpacesService.getspeciality.next(speciality);
    this._queryAvailabilitySpacesService.getPerson.next(0);
  }

  getTypeAppointment() {
    this._openAgendaService.getTypeAppointment(this.dataCitaToAssign.appointment.text).subscribe((resp: any) => {
      this.type_appointments = resp.data;
    });
  }

  getSubTypeAppointment() {
    this.dataCitaToAssign.appointment = this.searchAppointment(this.type_appointments, this.dataCitaToAssign.appointmentId);
    this._openAgendaService.getSubTypeAppointment(this.dataCitaToAssign.appointment.value).subscribe((resp: any) => {
      this.type_subappointments = resp.data;
      this.dataCitaToAssign.subappointmentId = this.type_subappointments[0].value
      if (this.dataCitaToAssign.appointment.face_to_face) {
        this.getIps()
      }
      this.getSpecialties()
    });

  }

  getIps() {
    this.dataCitaToAssign.subappointment = this.searchItem(this.type_subappointments, this.dataCitaToAssign.subappointmentId);
    this._openAgendaService.getIps(this.dataCitaToAssign.subappointment.company_owner).subscribe((resp: any) => {
      this.ipss = resp.data;
    });
  }

  getSedes() {
    this.dataCitaToAssign.ips = this.searchItem(this.ipss, this.dataCitaToAssign.ipsId);
    this._openAgendaService.getSedes(this.dataCitaToAssign.ips.value, this.dataCitaToAssign.subappointment.procedure).subscribe((resp: any) => {
      this.sedes = resp.data;
    });
  }

  getSpecialties() {
    this._openAgendaService.getSpecialties(String(this.dataCitaToAssign.sede), this.dataCitaToAssign.subappointment.procedure).subscribe((resp: any) => {
      this.specialties = resp.data;
    });
  }

  getProfesionals() {
    this._openAgendaService.getProfesionals(this.dataCitaToAssign.ips.value, String(this.dataCitaToAssign.speciality)).subscribe((resp: any) => {
      this.persons = resp.data;
    });
  }


  searchItem(data, value) {
    return data.find((item) => item.value === value);
  }

  searchAppointment(data, value) {
    return data.find((item) => item.value === value);
  }


  reset() {
    this.dataCitaToAssign = new dataCitaToAssign;
  }

  siguiente() {
    console.log('dddddd',this.dataCitaToAssign);
    
    this.dataCitaToAssignService.dataCitaToAssign.next(this.dataCitaToAssign);
    this.sigx.emit('');
  }

}
