import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-clinical-history',
  templateUrl: './detail-clinical-history.component.html',
  styleUrls: ['./detail-clinical-history.component.scss']
})
export class DetailClinicalHistoryComponent implements OnInit {

  constructor() { }
  @Input('histories') histories: Array<Object>;
  ngOnInit(): void {
  }

}
