import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root',
})
export class SwalService {

  public SwalObj: any = {
    type: 'warning',
    title: 'Alerta',
    msg: '',
    html: ''
  };

  public buttonColor = {
    confirm: '#3849CA',
    cancel: '#d33'
  }

  constructor() { }

  public ShowMessage(data: any) {
    this.SetSwalData(data);
  }

  private SetSwalData(data: any) {
    if (typeof (data) == 'object') {
      if (Array.isArray(data)) {
        let i = 0;
        for (const key in this.SwalObj) {
          this.SwalObj[key] = data[i];
          i++;
        }
      } else {
        this.SwalObj.icon = data.codigo;
        this.SwalObj.title = data.titulo;
        this.SwalObj.msg = data.mensaje;
        this.SwalObj.html = data.html;
      }
    }
  }


  show(
    {
      title,
      text = '',
      icon,
      timer = 0,
      showCancel = true,
      confirmButtonColor = null,
      html = ''
    }, preConfirm?) {
    let swal: any = {
      title,
      text,
      icon,
      timer,
      allowOutsideClick: true,
      allowEscapeKey: true,
      showCancelButton: showCancel,
      confirmButtonColor: icon == 'error' ? this.buttonColor.cancel : (confirmButtonColor || this.buttonColor.confirm),
      confirmButtonText: showCancel ? '¡Sí, confirmar!' : 'OK',
      cancelButtonColor: this.buttonColor.cancel,
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      html: html

    };
    if (preConfirm) {
      swal = {
        ...swal,
        preConfirm,
        allowOutsideClick: () => !Swal.isLoading(),
        showLoaderOnConfirm: true
      }
    }
    return Swal.fire(swal)
  }

}
