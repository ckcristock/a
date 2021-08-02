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



@Component({
  selector: 'app-ver-agenda',
  templateUrl: './ver-agenda.component.html',
  styleUrls: ['./ver-agenda.component.scss']
})
export class VerAgendaComponent implements OnInit {
  agenda: any = {}
  notOverride = false;

  id: any;
  constructor(private route: ActivatedRoute, private _listaTrabajo: ListaTrabajoService) { }
  time: History[]


  calendarWeekends: any;
  calendarPlugins = [dayGridPlugin, bootstrapPlugin, timeGrigPlugin, interactionPlugin, listPlugin];
  calendarEvents: EventInput[];

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getAgenda();

  }
  save(cont, ev) {

  }
  getAgenda() {
    this._listaTrabajo.getAgendamientoDetail(this.id)
      .subscribe(d => {
        this.agenda = d.data
        this.notOverride = this.agenda.spaces.some(d => d.state == 'agendado')
      }
      )

  }

}
