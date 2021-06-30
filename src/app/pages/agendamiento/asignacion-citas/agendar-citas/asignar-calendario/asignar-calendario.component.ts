import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-asignar-calendario',
  templateUrl: './asignar-calendario.component.html',
  styleUrls: ['./asignar-calendario.component.scss']
})
export class AsignarCalendarioComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  @Output('siguiente') siguiente = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Wizard', active: true }];
  }

  save() {
    console.log('save');

    this.siguiente.emit('');
  }
}
