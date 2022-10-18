import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { functionsUtils } from 'src/app/core/utils/functionsUtils';
import { ConsumeserviceService } from 'src/app/pages/ajustes/encuestas/create/consumeservice.service';
import Swal from 'sweetalert2'
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit, OnDestroy {

  @ViewChild('modalConfirmUser') modalConfirmUser: any;
  @ViewChild('FormEvaluacionRespuesta') FormEvaluacionRespuesta: NgForm;

  Cargando: boolean = false;
  user: any = JSON.parse(localStorage.getItem('User'));

  Id_Evaluacion: '';
  Formulario: any = [];
  Preguntas: any = [];
  EnvioRespuestas: any = [];
  res: any = [];
  r: any = [];
  re: any = [];
  m: any = [];
  preguntas: any = [];
  chargueSelects = false;
  preg = {
    Id_Pregunta_Formulario: '',
    Valor: '',
    Respuesta: []
  };

  public cpTypes = [{
    value: 0, text: 'Seleccione'
  }]

  public cpSedes = [{
    value: 0, text: 'Seleccione'
  }]

  public idCompany: Number;
  public idSede: Number;

  mySubscription: any;


  constructor(private router: Router, private route: ActivatedRoute, private _consumeService: ConsumeserviceService, private client: HttpClient) { }

  ngOnInit() {

    this.verifyUser();

  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  verifyUser() {
    if (localStorage.getItem('idCompany') != null && localStorage.getItem('idCompany') != 'undefined' && localStorage.getItem('idSede') != 'undefined' && localStorage.getItem('idSede') != null) {
      this.getQuestionBaseOnUser();
    } else {
      this.getCompanys();
    }
  };


  getCompanys() {
    this.client.get(environment.base_url + '/get-ips').subscribe((data) => {
      this.cpTypes = data['data']
      this.modalConfirmUser.show()
    })
  };

  getSedes() {
    this.client.get(environment.base_url + '/get-sedes/' + this.idCompany).subscribe((data) => {
      this.cpSedes = data['data']
    })
  }

  setSwitchRadio(value, pre, respuesta, j, i) {

    let brand = true;

    if (pre.Tipo == 2) {
      this.EnvioRespuestas.forEach((data, i) => {
        if (data.question_id == respuesta.question_id) {
          this.EnvioRespuestas[i] = respuesta;
          brand = false;
        }
      })
    }

    if (pre.Tipo == 4) {
      this.EnvioRespuestas.forEach((data, i) => {
        if (data.id == pre.id && pre.Tipo == 4) {
          this.EnvioRespuestas[i] = pre;
          brand = false;
        }
      })
    }

    if (brand) {
      if (typeof respuesta != 'undefined') {
        this.EnvioRespuestas.push(respuesta);
      } else {
        this.EnvioRespuestas.push(pre);
      }
    }

    if (this.EnvioRespuestas.length == 0) {
      if (typeof respuesta != undefined) {
        this.EnvioRespuestas.push(respuesta);
      } else {
        this.EnvioRespuestas.push(pre);
      }
    }
  }

  setSwitchCheckb(value, pre, respuesta, j, i) {

    if (value) {
      if (this.preguntas.Pregunta && this.preguntas.Pregunta == 7) {
        let resData = {
          Respuestas: respuesta.Id_Respuesta_Formulario,
          ValorR: pre.Respuestas[0].Valor
        }
        this.res.Respuesta.push(resData);
      }
      else {
        let resData = {
          Respuestas: respuesta.Id_Respuesta_Formulario,
          ValorR: pre.Respuestas[0].Valor
        }
        this.res = {
          Pregunta: pre.Id_Pregunta_Formulario,
          ValorP: pre.Valor,
          Respuesta: [],
        }
        this.res.Respuesta.push(resData);
        this.EnvioRespuestas.push(this.res);
      }
    }
    else {
      let resData = {
        Respuestas: respuesta.Id_Respuesta_Formulario,
        ValorR: pre.Respuestas[j].Valor
      }
      this.res.Respuesta.push(resData);

      this.res.Respuesta.splice(j, 1);
    }
    this.preguntas = this.EnvioRespuestas.find(pre => pre.Pregunta == 7);
  }

  validarRespuesta(respuesta, i) {
    let valido = true;
    this.EnvioRespuestas.forEach((pre) => {
      if (pre.Pregunta === respuesta.Id_Pregunta_Formulario) {
        valido = false;

      } else {
        valido = true;
      }
    });
    return valido;
  }

  cerrarModal() {
    this.modalConfirmUser.hide()
  }

  confirm() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Confirmar?',
      text: "Asegurate de haber completado correctamente la nformación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this.idCompany || !this.idSede) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ' Debes completar todos los campos  >.< !',
          })
          return false;
        } else {
          this.getQuestionBaseOnUser()
        }
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          ' :)',
          'error'
        )
      }
    })
  }

  confirmSendQuestion() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Confirmar?',
      text: "Asegurate de haber completado correctamente la nformación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, confirmar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.sendQuestionBaseOnUser()
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          ' :)',
          'error'
        )
      }
    })
  }

  getQuestionBaseOnUser() {
    this.client.get(`${environment.base_url}/get-formulario/1`).subscribe((data) => {
      // this.client.get(`${environment.base_url}/get-formulario/${this.idCompany}/${this.idSede}`).subscribe((data) => {

      localStorage.setItem('idCompany', ((this.idCompany) ? String(this.idCompany) : localStorage.getItem('idCompany')))
      localStorage.setItem('idSede', ((this.idSede) ? String(this.idSede) : localStorage.getItem('idSede')))

      this.modalConfirmUser.hide()
      this.Cargando = true;
      this.Formulario = data['data'];
    })
  }

  sendQuestionBaseOnUser() {

    if (this.Formulario.questions.length != this.EnvioRespuestas.length) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Desbes completar todas las preguntas!',
      })
      return false;
    }

    let data = functionsUtils.normalize(JSON.stringify(this.EnvioRespuestas));

    const Data = {
      data: data,
      idCompany: localStorage.getItem('idCompany'),
      idSede: localStorage.getItem('idSede')
    }

    this.client.post(`${environment.base_url}/formulario/save-responses`, Data).subscribe((data) => {
      if (data['status']) {
        Swal.fire({
          icon: 'success',
          title: 'Buen trabajo',
          text: 'La encuesta ha sido completada correctamente!',
          timer: 1500
        })
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['apply']);
        });
        this.ngOnInit();
        return false;
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puedo guardar La encuesta :( !',
      })

    })
  }
}
