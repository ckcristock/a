import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estadisticas-radicaciones',
  templateUrl: './estadisticas-radicaciones.component.html',
  styleUrls: ['./estadisticas-radicaciones.component.scss']
})
export class EstadisticasRadicacionesComponent implements OnInit {

  @Input() UpdateEstadisticas: Observable<any>;
  private _updateSubscription:any;

  public ConteoFacturas:any = {
    radicadas: 0,
    facturadas: 0,
    total_radicaciones: 0
  };
  
  public Leyenda:Array<any> = [];

  public ShowChart:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
