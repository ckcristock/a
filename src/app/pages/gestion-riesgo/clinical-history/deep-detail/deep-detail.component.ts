import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/core/response.model';
import { ClinicalHistoryService } from '../clinical-history.service';

@Component({
  selector: 'app-deep-detail',
  templateUrl: './deep-detail.component.html',
  styleUrls: ['./deep-detail.component.scss']
})
export class DeepDetailComponent implements OnInit {
  public data: object;
  constructor(private router: ActivatedRoute, private _clinicalHistory: ClinicalHistoryService) { }

  ngOnInit() {
    this.getData();
  }

  getData = () => {
    this._clinicalHistory.getClinicalHistoryDetail({ id: this.router.snapshot.params['id'] }).subscribe((data: Response) => {
      this.data = data;
    })
  }

}
