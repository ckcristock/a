import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-nomina-electronica',
  templateUrl: './detalle-nomina-electronica.component.html',
  styleUrls: ['./detalle-nomina-electronica.component.scss'],
})
export class DetalleNominaElectronicaComponent implements OnInit {
  statistics = [
    {
      label: 'Aceptados',
      cuantity: 0,
      icon: 'far fa-check-circle',
      color: 'green',
    },
    {
      label: 'Rechazados',
      cuantity: 0,
      icon: 'far fa-times-circle',
      color: 'red',
    },
    {
      label: 'En proceso',
      cuantity: 0,
      icon: 'fas fa-sync',
      color: 'blue',
    },
    {
      label: 'Pendientes',
      cuantity: 0,
      icon: 'fas fa-exclamation-triangle',
      color: 'tGray"',
    },
    {
      label: 'Anuladas',
      cuantity: 0,
      icon: 'fas fa-trash',
      color: 'yelow',
    },
    {
      label: 'Modificados',
      cuantity: 0,
      icon: 'far fa-edit',
      color: 'yelowSoft',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
