import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/core/response.model';
import { ClinicalHistoryService } from './clinical-history.service';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styleUrls: ['./clinical-history.component.scss']
})
export class ClinicalHistoryComponent implements OnInit {

  public identifier: number;
  histories: Array<Object>;
  loading: boolean = false;
  constructor(private _clinicalhistory: ClinicalHistoryService) { }

  ngOnInit() {
  }

  getClinicalHistory = () => {
    if (!this.identifier) return false;
    this.loading = true;
    this._clinicalhistory.getClinicalHistory({ identifier: this.identifier }).subscribe((data: Response) => {
      this.loading = false;
      this.histories = data.data
    }
    )
  }

}
