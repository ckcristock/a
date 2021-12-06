import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos-gestion',
  templateUrl: './documentos-gestion.component.html',
  styleUrls: ['./documentos-gestion.component.scss'
  ]
})
export class DocumentosGestionComponent implements OnInit {
  public ajaxSettings: object;
  public view: string;
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';


  public ruta = 'https://backend.ateneoerp.com/';
  public url = ''

  constructor() { }

  ngOnInit(): void {
    this.url = this.ruta + 'filemanagercalidad/dialog.php?lang=es&car='
  }
}
