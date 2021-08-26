import { Component, OnInit } from '@angular/core';
import { WaitingListService } from '../waiting-list.service';

@Component({
  selector: 'app-top-waiting',
  templateUrl: './top-waiting.component.html',
  styleUrls: ['./top-waiting.component.scss']
})
export class TopWaitingComponent implements OnInit {

  statistics: any = {
    topAwait:[],
    lastAppointment:{
      patient_name:'',
      date:''
    }
  }  
  constructor(
    private _waiting:WaitingListService
  ) { }

  ngOnInit(): void {
   /*  this.totalWaiting(); */
    this._waiting.getStatistcs().subscribe((r:any)=>{
      this.statistics = r.data
    })

  }
 

}
