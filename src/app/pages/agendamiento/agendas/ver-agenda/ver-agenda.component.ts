import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeLine } from '../../../../core/interfaces/time-line.interface';

import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';
import { ListaTrabajoService } from '../lista-trabajo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-agenda',
  templateUrl: './ver-agenda.component.html',
  styleUrls: ['./ver-agenda.component.scss'],
})
export class VerAgendaComponent implements OnInit {
  agenda: any = {};
  notOverride = false;

  id: any;
  constructor(
    private route: ActivatedRoute,
    private _listaTrabajo: ListaTrabajoService,
  ) { }
  time: History[];

  selected = {
    date:'',
    id:''
  }
  
  calendarWeekends: any;
  calendarPlugins = [
    dayGridPlugin,
    bootstrapPlugin,
    timeGrigPlugin,
    interactionPlugin,
    listPlugin,
  ];
  calendarEvents: EventInput[];

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getAgenda();
  }
  save(cont, ev) { }
  getAgenda() {
    this._listaTrabajo.getAgendamientoDetail(this.id).subscribe((d) => {
      this.agenda = d.data;
      this.notOverride = this.agenda.spaces.some((d) => d.state == 'agendado');
    });
  }

  cancel(event) {
    const id = event.event.id;
    let space: any = this.agenda.spaces
      .find(r => r.id == id)
      this.selected 
    if (space.state == 'Cancelado' || space.status == 0 ) {
      Swal.fire('No se puede realizar la operación',
        'El espacio se encuentra ' + 
              space.state == 'Cancelado' ? 'Cancelado' : ' Con una cita previa',
        'warning'
      )
      return false;

    }

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: '¿está seguro?',
      text: "Se dispone a cancelar un espacio de la agenda " + space.start,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, ¡Hazlo !',
      cancelButtonText: 'No, ¡dejeme comprobar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._listaTrabajo.cancelSpace({ id }).subscribe((r: any) => {
          Swal.fire('Operacion procesada',
            r.data,
            r.code == 200 ? 'success' : 'error'
          )
          if (r.code == 200) {
            space.state = 'Cancelado';
          }
        })
      }
    })



  }






}
