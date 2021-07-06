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
  constructor() { }

  ngOnInit(): void {
    this.ajaxSettings = {
        url: this.hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
        uploadUrl: this.hostUrl + 'api/FileManager/Upload',
        downloadUrl: this.hostUrl + 'api/FileManager/Download'
    };
    // Initial view of File Manager is set to details view
    this.view = "Details";
  }

}
