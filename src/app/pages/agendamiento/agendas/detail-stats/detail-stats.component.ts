import { Component, OnInit, EventEmitter, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail-stats',
  templateUrl: './detail-stats.component.html',
  styleUrls: ['./detail-stats.component.scss']
})
export class DetailStatsComponent implements OnInit {
  @Input('showDeitalStat') showDeitalStat: EventEmitter<any>;
  @ViewChild('detail') detail: any;
  data : any;
  constructor() { }

  ngOnInit(): void {
    this.showDeitalStat.subscribe(d => {
      //if(d){
         this.detail.show() ;
         this.data = d
        console.log(d);
        
     // }
    })
  }

}
