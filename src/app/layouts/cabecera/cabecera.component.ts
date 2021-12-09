import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  @Input() datosCabecera: any;
  envirom:any;
  constructor() { }

  ngOnInit(): void {
    this.envirom = environment;
  }

  ngOnChanges(changes:SimpleChanges){
    if (changes.datosCabecera.previousValue != undefined) {
      this.datosCabecera = changes.datosCabecera.currentValue;
    }
  }

}
