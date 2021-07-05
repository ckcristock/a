import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeLine } from '../../../../core/interfaces/time-line.interface';

import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';



@Component({
  selector: 'app-ver-agenda',
  templateUrl: './ver-agenda.component.html',
  styleUrls: ['./ver-agenda.component.scss']
})
export class VerAgendaComponent implements OnInit {
  agenda:any = {}
  notOverride = false;
  
  id: any;
  constructor(private route: ActivatedRoute) { }
  time: Array<TimeLine> = [
    {
      date: '28 Apr, 2020', hour: '12:07 am',
      description: 'Responded to need “Volunteer Activities”',
      image: 'assets/images/users/avatar-4.jpg',
      functionary_id:'1',
      icon:'ri-edit-2-fill'
      
    },
    {
      date: '28 Apr, 2020', hour: '12:07 am',
      description: 'Responded to need “Volunteer Activities”',
      image: 'assets/images/users/avatar-4.jpg',
      functionary_id:'1',
      icon:'ri-user-2-fill'
    },
    {
      date: '28 Apr, 2020', hour: '12:07 am',
      description: 'Responded to need “Volunteer Activities”',
      image: '',
      functionary_id:'1',
      icon:'ri-bar-chart-fill'
    },
    {
      date: '28 Apr, 2020', hour: '12:07 am',
      description: 'Responded to need “Volunteer Activities”',
      image: '',
      functionary_id:'1',
      icon:'ri-mail-fill'
    },
    {
      date: '28 Apr, 2020', hour: '12:07 am',
      description: 'Responded to need “Volunteer Activities”',
      image: '',
      functionary_id:'1',
      icon:'ri-calendar-2-fill'
    }
  ]


  calendarWeekends: any;
  calendarPlugins = [dayGridPlugin, bootstrapPlugin, timeGrigPlugin, interactionPlugin, listPlugin];
  calendarEvents: EventInput[];

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getAgenda();

  }
  save(cont,ev){
    
  }
  getAgenda (){
    //consulta http
    this.agenda = {
      date_start:'2020-01-05',
      date_end:'2020-01-05',
      hour_start:'21:40',
      end_start:'21:50',

      appointment:{
        name:'asdas',
        id:'1'
      },
      consult:{
        name:'Telemedicina',
        id:'1'
      },
      company:{
        name:'IPS Crlos',
        id:'1'
      },
      location:{
        name:'Nueva sede ',
        id:'1'
      },
      professional:{
        first_name:'Carlos ',
        first_surname:' Cardona'
      },
      spaces:[{
        state:'agendado'// revisar!!
      }]
    }
    this.notOverride = this.agenda.spaces.some(d=>d.state=='agendado')
  }

}
