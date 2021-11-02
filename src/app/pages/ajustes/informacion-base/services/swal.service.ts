import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs/Subject';
// import { isArray } from 'util';


@Injectable({
  providedIn: 'root',
})
export class SwalService {

  private SwalObj: any = {
    type: 'warning',
    title: 'Alerta',
    msg: '',
    html: ''
  };

  constructor() { }

  public _subject = new Subject<object>();

  public ShowMessage(data: any) {
    this.SetSwalData(data);
    this._subject.next(this.SwalObj);
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
        this.SwalObj.type = data.codigo;
        this.SwalObj.title = data.titulo;
        this.SwalObj.msg = data.mensaje;
        this.SwalObj.html = data.html;
      }
    }
  }


  show({ title, text, icon, timer = 0, showCancel = true }) {
    return Swal.fire({
      title,
      text,
      icon,
      timer,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: showCancel,
      confirmButtonColor: '#3085d6',
      confirmButtonText: showCancel ? '¡Si, Confirmar!' : 'Ok',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
    });
  }
}
