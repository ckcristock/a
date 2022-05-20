import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-documentos-gestion',
  templateUrl: './documentos-gestion.component.html',
  styleUrls: ['./documentos-gestion.component.scss'],
})
export class DocumentosGestionComponent implements OnInit {
  public url = 'https://backend.ateneoerp.com/filemanagercalidad/dialog.php?lang=es&car=';
  public ruta3 = environment.url_assets + 'filemanager3/tinyfilemanager.php'
  constructor() {}

  ngOnInit(): void {
  }
}
