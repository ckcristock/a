import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-waiting',
  templateUrl: './top-waiting.component.html',
  styleUrls: ['./top-waiting.component.scss']
})
export class TopWaitingComponent implements OnInit {
  reducerTopWaiting = (accumulator, currentValue) => accumulator + currentValue.total;

  totalTopWaing = 0;
  averageTime = '4 dias 1 hora 5 minutos'
  OldWaitng: any = {
    date: '2021-01-02',
    name: 'Jhoe Due'
  }

  topWaiting: Array<any> = [
    {
      name: 'Especialidad 1',
      total: 1234
    },
    {
      name: 'Especialidad 2',
      total: 1234
    },
    {
      name: 'Especialidad 3',
      total: 1234
    },
    {
      name: 'Especialidad 4',
      total: 1234
    },
    {
      name: 'Especialidad 5',
      total: 1234
    }

  ]
  
  constructor() { }

  ngOnInit(): void {
    this.totalWaiting();

  }
  totalWaiting() {
    this.totalTopWaing = this.topWaiting.reduce(this.reducerTopWaiting, 0)
  }

}
