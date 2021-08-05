import { Component, OnInit, EventEmitter, Input, ViewChild } from '@angular/core';
import { ListaTrabajoService } from '../lista-trabajo.service';

@Component({
  selector: 'app-detail-stats',
  templateUrl: './detail-stats.component.html',
  styleUrls: ['./detail-stats.component.scss']
})
export class DetailStatsComponent implements OnInit {
  @Input('showDeitalStat') showDeitalStat: EventEmitter<any>;
  @ViewChild('detail') detail: any;
  data: any[];
  loading = false
  constructor(private _workList: ListaTrabajoService) { }

  ngOnInit(): void {
    this.showDeitalStat.subscribe(d => {
      //if(d){
      this.loading = true;
      this.detail.show();
      console.log(d);
      this._workList.getStatisticsDetail(d).subscribe((r: any) => {
        console.log(r.data);
        this.loading = false;
        this.data = r.data
      })

      // }
    })
  }

}
