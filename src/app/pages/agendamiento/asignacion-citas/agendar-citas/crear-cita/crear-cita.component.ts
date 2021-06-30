import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.scss']
})
export class CrearCitaComponent implements OnInit {
  @Output('siguiente') siguiente = new EventEmitter();

  constructor() { }
  typesDocuments: Array<any> = [
    { Nombre: 'CI', Id: '1' },
    { Nombre: 'CC', Id: '2' },
    { Nombre: 'CC', Id: '2' },
  ]

  cita: any = {

  }

  ngOnInit(): void {
  }
  save() {
    console.log('save');

    this.siguiente.emit('');
  }


}
