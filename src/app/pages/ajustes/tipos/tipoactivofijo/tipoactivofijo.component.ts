import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-tipoactivofijo',
  templateUrl: './tipoactivofijo.component.html',
  styleUrls: ['./tipoactivofijo.component.scss']
})
export class TipoactivofijoComponent implements OnInit {
  
  @ViewChild('alertSwal') alertSwal:SwalComponent;

  public DatosCabecera:any = {
    Titulo: 'Tipo Contrato',
    Fecha: new Date()
  };

  constructor() { }

  ngOnInit() {
  }

  MostrarMensajeHijo(msgObj:any){
    this.ShowSwal(msgObj.type, msgObj.title, msgObj.msg);
  }

  ShowSwal(tipo, titulo:string, msg:string){
    this.alertSwal.icon = tipo;
    this.alertSwal.title = titulo;
    this.alertSwal.text = msg;
    this.alertSwal.fire();
  }

}
