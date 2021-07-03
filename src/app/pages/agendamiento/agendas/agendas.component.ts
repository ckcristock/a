import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.scss']
})
export class AgendasComponent implements OnInit {
   statData = [
    {
        icon: 'ri-stack-line',
        title: 'Number of Sales',
        value: '1452'
    }, {
        icon: 'ri-store-2-line',
        title: 'Sales Revenue',
        value: '$ 38452'
    }, {
        icon: 'ri-briefcase-4-line',
        title: 'Average Price',
        value: '$ 15.4'
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
