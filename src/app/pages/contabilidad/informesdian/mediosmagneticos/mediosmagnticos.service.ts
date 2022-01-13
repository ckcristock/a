import { Injectable } from '@angular/core';
import { SwalService } from '../../../ajustes/informacion-base/services/swal.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MediosmagnticosService {

  constructor( private swalService: SwalService) { }

  validarCampoTypeAHead(campo, event, tipo) { // Funcion que validará los campos de typeahead
    if (typeof(campo) != 'object' && campo != '') {
      let id = event.target.id;
      (document.getElementById(id) as HTMLInputElement).focus();
      Swal.fire({
        icon: 'error',
        title: 'Incorrecto!',
        text: `El valor ${tipo} no es valido.`
      });
      // this.swalService.ShowMessage(swal);
    }
  }

}
