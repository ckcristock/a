import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.component.html',
  styleUrls: ['./recaudos.component.scss']
})
export class RecaudosComponent implements OnInit {

  loading = false;
  citas: Array<any> = [];
  filters: any = {
    patient: '',
    date: new Date(),
  }

  constructor() { }

  ngOnInit(): void {
  }

}
