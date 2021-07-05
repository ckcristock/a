import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OpenAgendaService } from '../../../open-agenda.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';

import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';
import { QueryPatient } from '../../../query-patient.service';
import { QueryAvailabilitySpacesService } from '../../../query-availability-spaces.service';

@Component({
  selector: 'app-asignar-calendario',
  templateUrl: './asignar-calendario.component.html',
  styleUrls: ['./asignar-calendario.component.scss']
})
export class AsignarCalendarioComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  @Output('siguiente') siguiente = new EventEmitter();
  // @Input() specialidad: Number;
  // @Input() profesional: Number;

  public speciality: Number;
  public professional: Number;

  // event form
  formData: FormGroup;
  formEditData: FormGroup;
  calendarEvents = [];
  public space;
  // Form submition value
  submitted: boolean;


  calendarWeekends: any;

  // calendar plugin
  calendarPlugins = [dayGridPlugin, bootstrapPlugin, timeGrigPlugin, interactionPlugin, listPlugin];

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private _openAgendaService: OpenAgendaService, private _queryPatien: QueryPatient, private _queryAvailabilitySpacesService: QueryAvailabilitySpacesService) { }


  ngOnInit() {

    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Wizard', active: true }];

    /**
 * Event Model validation
 */
    this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    /**
     * Edit Event Model Data
     */
    this.formEditData = this.formBuilder.group({
      editTitle: [],
      editCategory: [],
    });

    this._queryAvailabilitySpacesService.getspeciality.subscribe(r => {
      this.speciality = r
      this._fetchData();
    });
    this._queryAvailabilitySpacesService.getProfessional.subscribe(r => {
      this.professional = r
      this._fetchData();
    });
  }

  save(event: any) {
    this._queryPatien.space.next(event.event.id);
    this.siguiente.emit('');
  }

  openEditModal() {
    // console.log('save');
    // this.siguiente.emit('');
  }

  private _fetchData() {

    this._openAgendaService.getOpenedSpace(this.speciality, this.professional).subscribe((resp: any) => {
      this.calendarEvents = resp.data.map((element, index) => {
        if (element.status) {
          resp.data[index]['className'] = "bg-success text-white"
          resp.data[index]['title'] = "Disponible"
          resp.data[index]['allDay '] = false
          return element
        }
        resp.data[index]['allDay '] = false
        resp.data[index]['title'] = "No Disponible"
        return element
      });
    });

    this.submitted = false;
  }
}
