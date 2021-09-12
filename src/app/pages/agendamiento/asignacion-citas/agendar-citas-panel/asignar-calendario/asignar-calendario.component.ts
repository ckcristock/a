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
import { dataCitaToAssignService } from '../../../dataCitaToAssignService.service';

@Component({
  selector: 'app-asignar-calendario',
  templateUrl: './asignar-calendario.component.html',
  styleUrls: ['./asignar-calendario.component.scss']
})
export class AsignarCalendarioComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  @Output('siguiente') siguiente = new EventEmitter();

  public speciality: Number;
  public person: Number;

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

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private _openAgendaService: OpenAgendaService,
    private _queryPatien: QueryPatient,
    private _queryAvailabilitySpacesService: QueryAvailabilitySpacesService,
    private dataCitaToAssignService: dataCitaToAssignService
  ) { }


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
      // this._fetchData();
    });
    this._queryAvailabilitySpacesService.getPerson.subscribe((r: any) => {
      this.person = r?.person
      if (r?.params) {
        this._fetchData(r?.params);
      } else {
        this.calendarEvents = [];
      }
    });
  }

  save(event: any) {
    const space = this.calendarEvents[this.calendarEvents.findIndex(x => x.id + '' === event.event.id + '')]
    let address = (space.address != 'null') ? ' En la dirección ' + space.address : ''
    let message = "Se dispone a asignar una cita para " + space.start + address
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: '¿está seguro?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, ¡Hazlo !',
      cancelButtonText: 'No, ¡dejeme comprobar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._queryPatien.space.next(event.event.id);
        this.siguiente.emit('');
      }
    })

  }

  openEditModal() {
  }

  private _fetchData(params) {
    this._openAgendaService.getOpenedSpaceCustom(params).subscribe((resp: any) => {

      this.calendarEvents = resp.data.map((element, index) => {
        if (element.status) {
          resp.data[index]['allDay '] = false
          return element
        }
        resp.data[index]['allDay '] = false
        return element
      });
    });

    this.submitted = false;
  }
}
