import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../ajustes/informacion-base/services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  idtask:any;
  taskdata: any;
  constructor(private _task: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idtask= this.route.snapshot.paramMap.get("id");
    this._task.taskView(this.idtask).subscribe(
      (d: any) => {
        this.taskdata = d.data[0];
        console.log(this.taskdata)
      });
  }

}
