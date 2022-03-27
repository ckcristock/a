import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { UserService } from 'src/app/core/services/user.service';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import esLocale from '@fullcalendar/core/locales/es';
import { EventInput } from '@fullcalendar/core';
import { TaskService } from '../ajustes/informacion-base/services/task.service';
import { RightsidebarComponent } from 'src/app/layouts/shared/rightsidebar/rightsidebar.component';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  closeResult = '';
  active = 1;
  pendientes: [];
  ejecucion: [];
  espera: [];
  finalizado: [];
  public events: Array<EventInput> = [];
  calendarPlugins = [
    dayGridPlugin,
    bootstrapPlugin,
    timeGrigPlugin,
    interactionPlugin,
    listPlugin,
  ];
  calendarEvents: EventInput[];
  array1 = [
    "list-pendientes",
    "list-espera",
    "list-finalizado"
  ];
  task: any;
  task2: any;
  task3: any;
  taskview: any;
  constructor(
    private _task: TaskService, 
    private _user: UserService, 
    private router: Router, 
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.getPersonTaskPendiente();
    this.getTask();
    this.getTaskFor();
  }

  onEventClick(event){
    this.taskview = event.event._def.extendedProps.publicId
    this.router.navigate(['/task', this.taskview]);
    console.log(event.event._def.extendedProps.publicId)
  }
  

  getTask(){
    this._task.personTask(this._user.user.person.id).subscribe(
      (d: any) => {
        this.task2 = d.data;
      });
  }

  getTaskFor(){
    this._task.personTaskFor(this._user.user.person.id).subscribe(
      (d: any) => {
        this.task3 = d.data;
      });
  }

  open(content, item) {
    this.task = item;
    //console.log(this.task)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log(event.container.id)
    if (event.container.id == 'list-pendientes') {
      for (let i = 0; i < event.container.data.length; i++) {
        var r = event.container.data[i]
        if (r["estado"] != 'Pendiente') {
          //console.log(r["estado"])
          this._task.updatePendiente(r["id"]).subscribe()
        }
      }
    }
    else if (event.container.id == 'list-finalizado') {
      for (let j = 0; j < event.container.data.length; j++) {
        var r1 = event.container.data[j]
        if (r1["estado"] != 'Finalizado') {
          //console.log(r1["estado"])
          this._task.updateFinalizado(r1["id"]).subscribe()
        }
      }
    } else if (event.container.id == 'list-ejecucion') {
      for (let k = 0; k < event.container.data.length; k++) {
        var r2 = event.container.data[k]
        if (r2["estado"] != 'En ejecucion') {
          //console.log(r2["estado"])
          this._task.updateEjecucion(r2["id"]).subscribe()
        }
      }
    } else if (event.container.id == 'list-espera') {
      for (let l = 0; l < event.container.data.length; l++) {
        var r3 = event.container.data[l]
        if (r3["estado"] != 'En espera') {
          //console.log(r3["estado"])
          this._task.updateEspera(r3["id"]).subscribe()
        }
      }
    }

  }

  getPersonTaskPendiente() {
    this._task
      .personTaskPendiente(this._user.user.person.id)
      .subscribe(
        (d: any) => {
          this.pendientes = d.data;
          for (let i= 0 ; i < d.data.length; i++){            
            var object = {
              title: d.data[i]["titulo"],
              start: d.data[i]["fecha"],
              description: d.data[i]["estado"],
              backgroundColor: '#ef476f',
              publicId: d.data[i]["id"],
            }
            this.events.push(object);
          } 
        });

    this._task
      .personTaskEjecucion(this._user.user.person.id)
      .subscribe(
        (d: any) => {
          this.ejecucion = d.data;
          for (let i= 0 ; i < d.data.length; i++){
            var object = {
              title: d.data[i]["titulo"],
              start: d.data[i]["fecha"],
              description: d.data[i]["estado"],
              backgroundColor: '#ffd166',
              publicId: d.data[i]["id"],
            }
            this.events.push(object);
          } 
        });

    this._task
      .personTaskEspera(this._user.user.person.id)
      .subscribe(
        (d: any) => {
          this.espera = d.data;
          for (let i= 0 ; i < d.data.length; i++){
            
            var object = {
              title: d.data[i]["titulo"],
              start: d.data[i]["fecha"],
              description: d.data[i]["estado"],
              backgroundColor: '#118ab2',
              publicId: d.data[i]["id"],
            }
            this.events.push(object);
          } 
        });

    this._task
      .personTaskFinalizado(this._user.user.person.id)
      .subscribe(
        (d: any) => {
          this.finalizado = d.data;
          for (let i= 0 ; i < d.data.length; i++){
            
            var object = {
              title: d.data[i]["titulo"],
              start: d.data[i]["fecha"],
              description: d.data[i]["estado"],
              backgroundColor: '#06d6a0',
              publicId: d.data[i]["id"],
            }
            this.events.push(object);
          } 
        });
  }
}
