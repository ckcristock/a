(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["encuestas-encuestas-module"],{

/***/ "7HoD":
/*!*************************************************************!*\
  !*** ./src/app/pages/ajustes/encuestas/encuestas.module.ts ***!
  \*************************************************************/
/*! exports provided: EncuestasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasModule", function() { return EncuestasModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encuestas-routing.module */ "uRhL");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ "c4sQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class EncuestasModule {
}
EncuestasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EncuestasModule });
EncuestasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function EncuestasModule_Factory(t) { return new (t || EncuestasModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_1__["EncuestasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EncuestasModule, { declarations: [_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_1__["EncuestasRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();


/***/ }),

/***/ "c4sQ":
/*!********************************************************************!*\
  !*** ./src/app/pages/ajustes/encuestas/create/create.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");
/* harmony import */ var _core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/utils/functionsUtils */ "eivR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _consumeservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consumeservice.service */ "j7T2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class CreateComponent {
    constructor(router, route, _consumeServise, http) {
        this.router = router;
        this.route = route;
        this._consumeServise = _consumeServise;
        this.http = http;
        // @ViewChild('confirmacionSwal') confirmacionSwal:any;
        // @ViewChild('Swal') Swal: any;
        this.Cargando = true;
        this.Editar = false;
        this.id = this.route.snapshot.params["id"];
        this.Tipos = [
            { id: 1, name: "Selección Simple (Si - No)" },
            { id: 2, name: "Selección Simple (Personalizada)" },
            { id: 3, name: "Selección Múltiple" },
            { id: 4, name: "Respuesta Corta" },
            { id: 5, name: "Fecha" },
            { id: 6, name: "Telefono" },
            { id: 7, name: "Email" }
        ];
        this.Formulario = {
            Nombre: '',
            Descripcion: ''
        };
        this.Preguntasc = [];
        this.Preguntas = [];
        this.Pregunta = {
            Pregunta: '',
            Valor: '',
            Tipo: '',
            Respuestas: []
        };
        this.Respuesta = {
            Res: '',
        };
    }
    ngOnInit() {
        if (this.id) {
            this.AsignarValores();
        }
    }
    AsignarValores() {
        this._consumeServise.getEncuestas().subscribe((data) => {
            this.Cargando = false;
            this.Editar = true;
            this.Formulario = data.Encabezado[0];
            this.Preguntas = data.Preguntas;
        });
    }
    AgregarPregunta() {
        let res = {
            Pregunta: '',
            Valor: '',
            Tipo: '',
            Respuestas: []
        };
        this.Preguntas.push(res);
    }
    AgregarRespuesta(Pregunta) {
        let c = {
            Res: '',
        };
        Pregunta.Respuestas.push(c);
    }
    TipoPregunta(tipo, Preguntas, item, i) {
        let P = this.Tipos.find(x => x.id == tipo);
        item.Respuestas = [];
        if (tipo == 1) {
            let s = {
                Res: '',
                Respuesta: 'Si',
                Valor: 100,
            };
            let n = {
                Res: '',
                Respuesta: 'No',
                Valor: 0,
            };
            item.Respuestas.push(s, n);
        }
        if (tipo == 2) {
            let c = {
                Res: '',
            };
            item.Respuestas.push(c);
        }
        if (tipo == 3) {
            let c = {
                Res: '',
            };
            item.Respuestas.push(c);
        }
        if (tipo == 4) {
            let c = {
                Res: '',
                Respuesta: 'Respuesta Corta',
                Valor: 100,
            };
            item.Respuestas.push(c);
        }
        if (tipo == 5) {
            let c = {
                Res: '',
                Respuesta: 'Fecha',
                Valor: 100,
            };
            item.Respuestas.push(c);
        }
        if (tipo == 6) {
            let c = {
                Res: '',
                Respuesta: 'Telefono',
                Valor: 100,
            };
            item.Respuestas.push(c);
        }
        if (tipo == 7) {
            let c = {
                Res: '',
                Respuesta: 'Email',
                Valor: 100,
            };
            item.Respuestas.push(c);
        }
        return true;
    }
    ComprobarPorcentajes() {
        let valido = true;
        let procenPre = 0;
        this.Preguntas.forEach((pre) => {
            let procenRes = 0;
            if (pre.Tipo == 3) {
                pre.Respuestas.forEach((V) => {
                    procenRes += +V.Valor;
                });
                if (procenRes > 100) {
                    let swal = {
                        codigo: 'warning',
                        mensaje: 'Porcentaje de Respuesta Fuera de Rango',
                        titulo: 'Porcentaje Erroneo'
                    };
                    // this.swalService.ShowMessage(swal);
                    valido = false;
                }
            }
            procenPre += +pre.Valor;
            if (procenPre > 100) {
                let swal = {
                    codigo: 'warning',
                    mensaje: 'Porcentaje Fuera de Rango',
                    titulo: 'Porcentaje Erroneo'
                };
                // this.swalService.ShowMessage(swal);
                valido = false;
            }
        });
        return valido;
    }
    GuardarFormulario() {
        if (this.ComprobarPorcentajes() && this.ComprobarInput()) {
            let datos = new FormData();
            datos.append("Formulario", _core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_1__["functionsUtils"].normalize(JSON.stringify(this.Formulario)));
            datos.append("Preguntas", _core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_1__["functionsUtils"].normalize(JSON.stringify(this.Preguntas)));
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base_url + 'php/recursos_humanos/formularios/guardar_formulario.php', datos).subscribe((data) => {
                this.LimpiarCampos();
                // this.confirmacionSwal.title = data.Titulo;
                // this.confirmacionSwal.text = data.Mensaje;
                // this.confirmacionSwal.type = data.Tipo;
                // this.confirmacionSwal.show();
                this.router.navigate(['formulario']);
            });
        }
    }
    ComprobarInput() {
        let valido = true;
        if (this.Formulario.Nombre == '' || this.Formulario.Descripcion == '') {
            let swal = {
                codigo: 'warning',
                mensaje: 'Faltan Algunos Datos del Formulario',
                titulo: 'Faltan Datos'
            };
            // this.swalService.ShowMessage(swal);
            valido = false;
        }
        else {
            //   this.Preguntas.forEach((pre) => {
            //       let pregun =  pre.Pregunta;
            //       if (pregun == '' ){
            //         let swal = {
            //             codigo: 'warning',
            //             mensaje: 'Formulario sin Preguntas',
            //             titulo: 'Error Preguntas'
            //         }
            //       this.swalService.ShowMessage(swal);
            //       valido = false;
            //       }
            // });
        }
        return valido;
    }
    LimpiarCampos() {
        this.Preguntas = [];
        this.Formulario = {
            Nombre: '',
            Descripcion: ''
        };
    }
    EstadoPregunta(item) {
        let id = item.Id_Pregunta_Formulario;
        let estado = item.Estado;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base_url + 'php/recursos_humanos/formularios/anular_pregunta.php', { params: { id: id, estado: estado } }).subscribe((data) => {
            this.AsignarValores();
        });
    }
    EstadoRespuesta(item) {
        let id = item.Id_Respuesta_Formulario;
        let estado = item.Estado;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base_url + 'php/recursos_humanos/formularios/anular_respuesta.php', { params: { id: id, estado: estado } }).subscribe((data) => {
            this.AsignarValores();
        });
    }
    QuitarPregunta(item, i) {
        if (item.Pregunta != '') {
            this.Preguntas.splice(i, 1);
            if (this.Preguntas.length == 0) {
                this.AgregarPregunta();
            }
        }
        else {
            this.Preguntas.splice(i, 1);
        }
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_consumeservice_service__WEBPACK_IMPORTED_MODULE_4__["ConsumeserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 0, vars: 0, template: function CreateComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "uRhL":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ajustes/encuestas/encuestas-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EncuestasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasRoutingModule", function() { return EncuestasRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ "c4sQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'create-quest', component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"]
    }
];
class EncuestasRoutingModule {
}
EncuestasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EncuestasRoutingModule });
EncuestasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EncuestasRoutingModule_Factory(t) { return new (t || EncuestasRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EncuestasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=encuestas-encuestas-module.js.map