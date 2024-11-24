(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remision-remision-module"],{

/***/ "+I6T":
/*!**********************************************!*\
  !*** ./src/app/core/utils/confirmMessage.ts ***!
  \**********************************************/
/*! exports provided: showConfirm, showConfirmCancel, showConfirmCancelWhitoutMessage, successMessage, errorMessage, WarningMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirm", function() { return showConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmCancel", function() { return showConfirmCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmCancelWhitoutMessage", function() { return showConfirmCancelWhitoutMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successMessage", function() { return successMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningMessage", function() { return WarningMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function showConfirm(status, model) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: '¿Estas seguro?',
            text: (status === 'Inactivo' ? `La ${model} se Inactivará!` : `La ${model} se activará`),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: (status === 'Inactivo' ? 'Si, Inhabilitar' : 'Si, activar')
        });
    });
}
function showConfirmCancel(status, model) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const SwalMsje = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-success mx-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        return SwalMsje.fire({
            title: '¿está seguro?',
            text: "Se dispone a Cancelar una ".concat(model),
            icon: 'warning',
            input: 'text',
            inputAttributes: {
                maxlength: "50",
                autocapitalize: 'off',
                autocorrect: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Si, ¡Cita Cancelar '.concat(model),
            cancelButtonText: 'No, ¡déjeme comprobar!',
            reverseButtons: true
        });
    });
}
function showConfirmCancelWhitoutMessage(status, model) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: '¿Estas seguro?',
            text: `Estas a un paso de ${status} esta  ${model} !`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, ' + status
        });
    });
}
function successMessage(status = 'Operación exitosa', message = 'Felicidades, Operacíón realizada correctamente.', model = '') {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        title: status,
        text: message,
        icon: 'success',
        allowOutsideClick: false,
        allowEscapeKey: false
    });
}
function errorMessage(status = 'Ooops', model = '') {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        title: status,
        text: 'Se han registrado errores operación no realizada',
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false
    });
}
function WarningMessage(status = 'Ooops', text = 'Verifique los datos', model = '') {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        title: status,
        text: text,
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false
    });
}


/***/ }),

/***/ "0ZLJ":
/*!*****************************************!*\
  !*** ./src/app/services/eps.service.ts ***!
  \*****************************************/
/*! exports provided: EpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpsService", function() { return EpsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EpsService {
    constructor(client) {
        this.client = client;
        this._rutaBase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/GENERALES/eps/';
    }
    GetEntidadesSalud() {
        return this.client.get(this._rutaBase + 'get_entidades_salud_select.php');
    }
    // Metodos de lista precio eps
    GetProductosEvento(p) {
        return this.client.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/listaprecioeps/get_productos_evento.php', { params: p });
    }
    ValidarCum(p) {
        return this.client.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/listaprecioeps/validar_cum.php', { params: p });
    }
    SaveProducto(data) {
        return this.client.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/listaprecioeps/save_producto.php', data);
    }
}
EpsService.ɵfac = function EpsService_Factory(t) { return new (t || EpsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EpsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EpsService, factory: EpsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5KJW":
/*!***************************************************!*\
  !*** ./src/app/services/remisionnuevo.service.ts ***!
  \***************************************************/
/*! exports provided: RemisionnuevoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionnuevoService", function() { return RemisionnuevoService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RemisionnuevoService {
    constructor(client) {
        this.client = client;
        this._rutaProductosRemision = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/remision_nuevo';
    }
}
RemisionnuevoService.ɵfac = function RemisionnuevoService_Factory(t) { return new (t || RemisionnuevoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RemisionnuevoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RemisionnuevoService, factory: RemisionnuevoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6avl":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/inventario/remision/modalcambiarproductossimilarnuevo/modalcambiarproductossimilarnuevo.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ModalcambiarproductossimilarnuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalcambiarproductossimilarnuevoComponent", function() { return ModalcambiarproductossimilarnuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_pages_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_remisionnuevo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/remisionnuevo.service */ "5KJW");
/* harmony import */ var _components_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/modal-basic/modal-basic.component */ "xoca");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");



// import { GeneralService } from '../../services/general/general.service';
// import { SwalService } from '../../services/swal/swal.service';
// import { ToastService } from '../../services/toasty/toast.service';
// import { RemisionnuevoService } from '../../services/remisionnuevo/remisionnuevo.service';








const _c0 = ["ModalCambiarProductoSimilar"];
const _c1 = ["confirmacionCambio"];
const _c2 = function (a0) { return { "bg-selected": a0 }; };
function ModalcambiarproductossimilarnuevoComponent_tbody_18_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalcambiarproductossimilarnuevoComponent_tbody_18_tr_1_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const p_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.SeleccionarProducto(p_r4.Seleccionado, p_r4.Id_Producto, p_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, p_r4.Seleccionado == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.Nombre_Comercial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r4.Cantidad_Disponible, " ");
} }
function ModalcambiarproductossimilarnuevoComponent_tbody_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalcambiarproductossimilarnuevoComponent_tbody_18_tr_1_Template, 8, 6, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ListaProductos);
} }
// import { SwalComponent } from '@toverux/ngx-sweetalert2';
class ModalcambiarproductossimilarnuevoComponent {
    constructor(
    // public generalService: GeneralService,
    _swalService, 
    // private _toastService: ToastService,
    http, _remisionService) {
        this._swalService = _swalService;
        this.http = http;
        this._remisionService = _remisionService;
        this.AbrirModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.AgregarProductos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ListaProductos = [];
        this.ListaAgregados = [];
        this.ProductoCambiar = null;
        this.ProductoAgregar = null;
        this._posicionLista = '';
        this._rotativoModel = null;
        this._Mes = null;
        this._Grupo = null;
        this.Cargando = false;
        this.alertOption = {
            title: "¿Está totalemente Seguro?",
            text: "Se dispone a cambiar este producto por uno de sus asociados, esta acción es irreversible!",
            showCancelButton: true,
            cancelButtonText: "No, Comprobar!",
            confirmButtonText: 'Si, Cambiar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            // type: 'info',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.RegistrarCambioEnBaseDeDatos();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.isLoading()
        };
    }
    ngOnInit() {
        this.openSubscription = this.AbrirModal.subscribe((data) => {
            console.log(data);
            //this.ListaAgregados = data.agregados;
            this.Cargando = true;
            this.ListaProductos = data.producto.Similares;
            this._posicionLista = data.pos;
            this._rotativoModel = data.rotativo_model;
            this.ProductoCambiar = data.producto;
            this._Mes = data.mes;
            this._Grupo = data.grupo;
            this.ModalCambiarProductoSimilar.show();
            this.Cargando = false;
        });
    }
    ngOnDestroy() {
        if (this.openSubscription != undefined) {
            this.openSubscription.unsubscribe();
        }
        this.CerrarModal();
    }
    LimpiarModelo() {
        this.ListaProductos = [];
        this.ProductoAgregar = null;
        this.ProductoCambiar = null;
        this._rotativoModel = null;
        this._posicionLista = '';
        this._Mes = '';
        this._Grupo = '';
    }
    CerrarModal() {
        this.ModalCambiarProductoSimilar.hide();
        this.LimpiarModelo();
    }
    SeleccionarProducto(seleccionado, idProducto, producto) {
        if (seleccionado == '0') {
            if (!this.VerificarSeleccionado()) {
                this._swalService.ShowMessage(['warning', 'Alerta', 'No se puede seleccionar mas de 1 producto a la vez!']);
            }
            else {
                this.ProductoAgregar = producto;
                let ind = this.ListaProductos.findIndex(x => x.Id_Producto == idProducto);
                if (ind > -1) {
                    this.ListaProductos[ind].Seleccionado = '1';
                }
            }
        }
        else {
            this.ProductoAgregar = null;
            let ind = this.ListaProductos.findIndex(x => x.Id_Producto == idProducto);
            if (ind > -1) {
                this.ListaProductos[ind].Seleccionado = '0';
            }
        }
    }
    CambiarProducto(data) {
        let datos = { pos: this._posicionLista, producto: data.producto, id_cambio: data.id_cambio };
        this.AgregarProductos.emit(datos);
        this.CerrarModal();
        this.confirmacionCambio.close;
    }
    VerificarSeleccionado() {
        if (this.ProductoAgregar != null) {
            return false;
        }
        else {
            return true;
        }
    }
    RegistrarCambioEnBaseDeDatos() {
        if (!this.ValidateBeforeSubmit()) {
            return;
        }
        else {
            let data = new FormData();
            let cantidad = 0;
            if (parseInt(this.ProductoCambiar.Cantidad_Requerida) > parseInt(this.ProductoAgregar.Cantidad_Disponible)) {
                cantidad = this.ProductoAgregar.Cantidad_Disponible;
            }
            else {
                cantidad = this.ProductoCambiar.Cantidad_Requerida;
            }
            let model = {
                id_destino: this._rotativoModel.Id_Destino,
                id_origen: this._rotativoModel.Id_Origen,
                fini: this._rotativoModel.Fecha_Inicio,
                ffin: this._rotativoModel.Fecha_Fin,
                Id_Producto_Viejo: this.ProductoCambiar.Id_Producto,
                Id_Producto_Nuevo: this.ProductoAgregar.Id_Producto,
                Cantidad: cantidad,
                funcionario: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].id_funcionario
            };
            if (this._rotativoModel.Id_Eps != '') {
                model.eps = this._rotativoModel.Id_Eps;
            }
            let grupo = [];
            if (this._Grupo.Id_Grupo) {
                grupo = JSON.stringify(this._Grupo);
            }
            let mes = this._Mes;
            data.append("modelo", JSON.stringify(model));
            data.append("mes", mes);
            data.append("grupo", grupo);
            this.http.post('php/remision_nuevo/guardar_cambio_producto.php', { params: data }).subscribe((data) => {
                console.log(data);
                this.alertOption.text = data.mensaje;
                this.CambiarProducto(data);
            });
        }
    }
    ValidateBeforeSubmit() {
        if (this.ProductoAgregar == null) {
            this._swalService.ShowMessage(['warning', 'Alerta', 'Debe escoger el producto a cambiar!']);
            return false;
        }
        else {
            return true;
        }
    }
    VerificarAgregados(idProducto) {
        let exist = this.ListaAgregados.filter(x => x == idProducto);
        if (exist.length > 0) {
            this._swalService.ShowMessage(['warning', 'Alerta', 'Ya este producto ha sido agregado a la lista!']);
            return false;
        }
        else {
            return true;
        }
    }
}
ModalcambiarproductossimilarnuevoComponent.ɵfac = function ModalcambiarproductossimilarnuevoComponent_Factory(t) { return new (t || ModalcambiarproductossimilarnuevoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_4__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_remisionnuevo_service__WEBPACK_IMPORTED_MODULE_6__["RemisionnuevoService"])); };
ModalcambiarproductossimilarnuevoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalcambiarproductossimilarnuevoComponent, selectors: [["app-modalcambiarproductossimilarnuevo"]], viewQuery: function ModalcambiarproductossimilarnuevoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ModalCambiarProductoSimilar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmacionCambio = _t.first);
    } }, inputs: { AbrirModal: "AbrirModal" }, outputs: { AgregarProductos: "AgregarProductos" }, decls: 27, vars: 4, consts: [[3, "dialogClass"], ["ModalCambiarProductoSimilar", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [1, "form-row"], [1, "col-md-12"], [1, "table", "table-product", "table-striped"], [2, "width", "70%"], [2, "width", "30%"], [4, "ngIf"], [1, "app-modal-footer"], [1, "text-right"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-round", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-round", "btn-sm", 3, "disabled", "click"], [3, "swalOptions"], ["confirmacionCambio", ""], ["style", "cursor:pointer;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "ngClass", "click"], [1, "text-muted", 2, "font-size", "9px"]], template: function ModalcambiarproductossimilarnuevoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal-basic", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cambiar Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalcambiarproductossimilarnuevoComponent_Template_button_click_5_listener() { return ctx.CerrarModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cantidad Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ModalcambiarproductossimilarnuevoComponent_tbody_18_Template, 2, 1, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalcambiarproductossimilarnuevoComponent_Template_button_click_21_listener() { return ctx.CerrarModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalcambiarproductossimilarnuevoComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return _r2.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Cambiar Producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "swal", 17, 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.ProductoAgregar == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_components_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_7__["ModalBasicComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SwalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGNhbWJpYXJwcm9kdWN0b3NzaW1pbGFybnVldm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "6t2B":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng2-truncate/__ivy_ngcc__/dist/truncate-characters.pipe.js ***!
  \*********************************************************************************/
/*! exports provided: TruncateCharactersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateCharactersPipe", function() { return TruncateCharactersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TruncateCharactersPipe = (function () {
    function TruncateCharactersPipe() {
    }
    TruncateCharactersPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        if (!value) {
            value = '';
        }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
        }
        else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    /** @nocollapse */
    TruncateCharactersPipe.ctorParameters = function () { return []; };
TruncateCharactersPipe.ɵfac = function TruncateCharactersPipe_Factory(t) { return new (t || TruncateCharactersPipe)(); };
TruncateCharactersPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncateCharactersPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateCharactersPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], function () { return []; }, null); })();
    return TruncateCharactersPipe;
}());


//# sourceMappingURL=truncate-characters.pipe.js.map

/***/ }),

/***/ "6vIF":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inventario/remision/ProductoCargarRemision.ts ***!
  \*********************************************************************/
/*! exports provided: ProductoCargarRemision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoCargarRemision", function() { return ProductoCargarRemision; });
class ProductoCargarRemision {
    constructor() {
        this.Id_Producto = 0;
        this.Cantidad_Disponible = 0;
        this.Cantidad_Presentacion = 0;
        this.Cantidad_Pendiente = 0;
        this.Cantidad_Requerida = null;
        this.Cantidad = null;
        this.Costo = 0;
        this.Rotativo = '0/0';
        this.Categoria = '';
        this.Id_Categoria = 0;
        this.Id_Subcategoria = 0;
        this.Codigo_Cum = '';
        this.Embalaje = '';
        this.Laboratorio_Comercial = '';
        this.Laboratorio_Generico = '';
        this.Nombre = '';
        this.Nombre_Comercial = '';
        this.Precio = '';
        this.Precio_Regulado = 0;
        this.Impuesto = 0;
        this.Descuento = 0;
        this.Subtotal = 0;
        this.Total_Descuento = 0;
        this.Total_Impuesto = 0;
        this.Seleccionado = "0";
        this.Regulado = "Si";
        this.Lotes = [];
        this.Lotes_Visuales = [];
        this.Lotes_Seleccionados = [];
        this.Similares = [];
    }
}


/***/ }),

/***/ "BS92":
/*!*******************************************************************!*\
  !*** ./src/app/pages/inventario/remision/remisiones.component.ts ***!
  \*******************************************************************/
/*! exports provided: RemisionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionesComponent", function() { return RemisionesComponent; });
/* harmony import */ var _assets_charts_amchart_amcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/charts/amchart/amcharts */ "afTD");
/* harmony import */ var _assets_charts_amchart_amcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_amcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_charts_amchart_gauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/charts/amchart/gauge */ "awsf");
/* harmony import */ var _assets_charts_amchart_gauge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_gauge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_charts_amchart_pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/amchart/pie */ "RzHe");
/* harmony import */ var _assets_charts_amchart_pie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_pie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_amchart_serial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/amchart/serial */ "lQzn");
/* harmony import */ var _assets_charts_amchart_serial__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_serial__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_amchart_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/amchart/light */ "xr3h");
/* harmony import */ var _assets_charts_amchart_light__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_light__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_amchart_ammap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/amchart/ammap */ "ctIn");
/* harmony import */ var _assets_charts_amchart_ammap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_ammap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_charts_amchart_worldLow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/charts/amchart/worldLow */ "s3ub");
/* harmony import */ var _assets_charts_amchart_worldLow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_worldLow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_charts_amchart_continentsLow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/charts/amchart/continentsLow */ "E7dX");
/* harmony import */ var _assets_charts_amchart_continentsLow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_continentsLow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utils/functionsUtils */ "eivR");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "vdoh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! saturn-datepicker */ "nJc8");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../components/not-data/not-data.component */ "j80Y");


























const _c0 = ["studentChart"];
const _c1 = ["deleteSwal"];
const _c2 = ["confirmaSwal"];
const _c3 = ["anularSwal"];
const _c4 = ["PlantillaBotones"];
const _c5 = ["PlantillaEstado"];
const _c6 = ["PlantillaTipo"];
const _c7 = ["EstadoRemision"];
const _c8 = function (a0, a1, a2, a3) { return { "badge-secondary": a0, "badge-danger": a1, "badge-info": a2, "badge-success": a3 }; };
function RemisionesComponent_table_80_tr_26_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction4"](2, _c8, remision_r10.Estado == "Alistada", remision_r10.Estado == "Pendiente", remision_r10.Estado == "Enviada", remision_r10.Estado == "Recibida"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", remision_r10.Estado, " ");
} }
const _c9 = function (a1) { return ["/facturasventasver", a1]; };
function RemisionesComponent_table_80_tr_26_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Facturada");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](1, _c9, remision_r10.Id_Factura));
} }
function RemisionesComponent_table_80_tr_26_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Archivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("href", "", ctx_r14.env.ruta, "/php/archivos/descarga_pdf.php?tipo=Remision&id=", remision_r10.Id_Remision, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function RemisionesComponent_table_80_tr_26_a_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Archivo con costos");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("href", "", ctx_r15.env.ruta, "/php/archivos/descarga_pdf_price.php?tipo=Remision&id=", remision_r10.Id_Remision, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function RemisionesComponent_table_80_tr_26_a_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Imprimir etiqueta");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("href", "", ctx_r16.env.ruta, "/php/archivos/descarga_zebra.php?id=", remision_r10.Id_Remision, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function RemisionesComponent_table_80_tr_26_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Descargar plano");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("href", "", ctx_r17.env.ruta, "/php/archivos/descarga_excel.php?id=", remision_r10.Id_Remision, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function RemisionesComponent_table_80_tr_26_a_44_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RemisionesComponent_table_80_tr_26_a_44_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r29); const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r27.SuspenderRemision(remision_r10.Id_Remision, remision_r10.Id_Contrato); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c10 = function (a1) { return ["/cambiarlote", a1]; };
function RemisionesComponent_table_80_tr_26_a_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Cambiar Lote");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](1, _c10, remision_r10.Id_Remision));
} }
function RemisionesComponent_table_80_tr_26_a_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Documento Disp.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("href", "", ctx_r20.env.ruta, "/php/remision/entrega_pendientes_pdf.php?id=", remision_r10.Id_Remision, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
const _c11 = function (a1) { return ["/inventario/remisiones/remision", a1]; };
function RemisionesComponent_table_80_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, " Observaciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, RemisionesComponent_table_80_tr_26_span_26_Template, 2, 7, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, RemisionesComponent_table_80_tr_26_a_27_Template, 2, 3, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](35, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, RemisionesComponent_table_80_tr_26_a_40_Template, 3, 2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, RemisionesComponent_table_80_tr_26_a_41_Template, 3, 2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, RemisionesComponent_table_80_tr_26_a_42_Template, 3, 2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, RemisionesComponent_table_80_tr_26_a_43_Template, 3, 2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, RemisionesComponent_table_80_tr_26_a_44_Template, 3, 0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, RemisionesComponent_table_80_tr_26_a_45_Template, 3, 3, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, RemisionesComponent_table_80_tr_26_a_46_Template, 3, 2, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remision_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("", remision_r10.Estado == "Anulada" ? "text-danger" : "", " text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 28, remision_r10.Fecha_Remision, "longDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", remision_r10.Codigo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("label ", remision_r10.Tipo == "Cliente" ? "label-success" : "label-primary", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", remision_r10.Tipo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", remision_r10.Punto_Origen, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", remision_r10.Grupo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", remision_r10.Punto_Destino, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("data-target", "#collapseExample" + i_r11)("aria-controls", "collapseExample" + i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", "collapseExample" + i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", remision_r10.Observaciones == "" ? "No tiene Observaciones!" : remision_r10.Observaciones, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](remision_r10.Items);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", remision_r10.Estado != "Facturada");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", remision_r10.Estado == "Facturada");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](remision_r10.Fase);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](31, _c11, remision_r10.Id_Remision));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", remision_r10.Estado != "Anulada");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", remision_r10.Estado != "Anulada" && remision_r10.Tipo == "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", remision_r10.Estado != "Anulada");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", remision_r10.Estado != "Anulada");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.perfilAdministrador() && remision_r10.Estado != "Anulada" && remision_r10.Estado != "Recibida" && remision_r10.Estado != "Facturada" && remision_r10.Estado != "Enviada");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.perfilAdministrador() && remision_r10.Estado != "Anulada" && remision_r10.Estado != "Recibida" && remision_r10.Estado != "Enviada");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", remision_r10.Estado != "Anulada" && remision_r10.Entrega_Pendientes == "Si");
} }
function RemisionesComponent_table_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Origen");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Grupo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Destino");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Fase");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, RemisionesComponent_table_80_tr_26_Template, 47, 33, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.Lista_Remisiones);
} }
function RemisionesComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function RemisionesComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-not-data", 78);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("loading", ctx_r8.Cargando);
} }
const _c12 = function () { return ["remisioncrearnuevo"]; };
class RemisionesComponent {
    constructor(http, location, route, dateAdapter) {
        this.http = http;
        this.location = location;
        this.route = route;
        this.dateAdapter = dateAdapter;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('es-CO');
        this.Mes = [];
        this.Datos = [];
        this.Remisiones = [];
        this.Nofacturadas = [];
        this.Facturadas = [];
        this.Noconforme = [];
        this.Borrador = [];
        this.Anulada = [];
        this.Indicador = true;
        this.Anuladas = {};
        this.Cargando = true;
        this.matPanel = false;
        this.rowsFilter = [];
        this.tempFilter = [];
        this.columns = [];
        this.loadingIndicator = true;
        this.Lista_Remisiones = [];
        this.maxSize = 15;
        this.page = 1;
        this.filtro_fecha = '';
        this.filtro_cod = '';
        this.filtro_tipo = '';
        this.filtro_origen = '';
        this.filtro_grupo = '';
        this.filtro_destino = '';
        this.filtro_est = '';
        this.filtro_fase = '';
        this.punto_informe = 0;
        this.punto_informe2 = 0;
        this.fecha_informe = '';
        this.fecha_informe2 = '';
        this.Id_Remision = '';
        this.Id_Contrato = '';
        this.Puntos = [];
        this.Clientes = [];
        this.myDateRangePickerOptions = {
            width: '100px',
            height: '21px',
            selectBeginDateTxt: 'Inicio',
            selectEndDateTxt: 'Fin',
            selectionTxtFontSize: '10px',
            dateFormat: 'yyyy-mm-dd',
        };
        this.alertInputOption = {};
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"];
        this.ListarRemisiones();
        this.dateAdapter.setLocale('es');
    }
    openClose() {
        if (this.matPanel == false) {
            this.accordion.openAll();
            this.matPanel = true;
        }
        else {
            this.accordion.closeAll();
            this.matPanel = false;
        }
    }
    ngOnInit() {
        console.clear();
        this.user = JSON.parse(localStorage.getItem("User"));
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + 'php/remision/grafica_remisiones.php').subscribe((data) => {
            data.forEach(element => {
                this.Mes.push(element.date);
                this.Remisiones.push(element.Remisiones);
            });
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + 'php/remision/detalle_tipo.php').subscribe((data) => {
            this.Datos = data.Tipo;
            this.Anuladas = data.Anuladas;
            this.Facturadas = data.Tipo_Facturacion[0].Facturadas;
            this.Nofacturadas = data.Tipo_Facturacion[0].No_Facturadas;
            this.Noconforme = data.No_Conforme;
            //// console.log(data);
        });
        this.ListarBorradores();
        this.alertInputOption = {
            title: "Observacion ",
            text: "Ingrese una Observacion o motivo de anulacion",
            input: 'text',
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Anular',
            focusCancel: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (!value) {
                        resolve('Valor no puede estar vacio');
                    }
                    else if (value.length < 10) {
                        resolve('la observacion debe tener como minimo 10 caracteres!');
                    }
                    else {
                        //Metodo de Anular
                        this.AnularRemision(value);
                        resolve('');
                    }
                });
            },
        };
    }
    ListarBorradores() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + 'php/remision/borradores_remision.php?func=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].id_funcionario).subscribe((data) => {
            this.Borrador = data;
        });
    }
    ListarRemisiones() {
        let params = this.route.snapshot.queryParams;
        let queryString = '';
        if (Object.keys(params).length > 0) { // Si existe parametros o filtros
            // actualizando la variables con los valores de los paremetros.
            this.page = params.pag ? params.pag : 1;
            this.filtro_fecha = params.fecha ? params.fecha : '';
            this.filtro_cod = params.cod ? params.cod : '';
            this.filtro_tipo = params.tipo ? params.tipo : '';
            this.filtro_origen = params.origen ? params.origen : '';
            this.filtro_grupo = params.grupo ? params.grupo : '';
            this.filtro_destino = params.destino ? params.destino : '';
            this.filtro_est = params.est ? params.est : '';
            this.filtro_fase = params.fase ? params.fase : '';
            queryString = '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + '/php/remision_nuevo/remisiones.php' + queryString).subscribe((data) => {
            console.log(data);
            this.Cargando = false;
            this.Lista_Remisiones = data.remisiones;
            this.TotalItems = data.numReg;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + 'php/remision/detalle_tipo.php').subscribe((data) => {
            this.Datos = data.Tipo;
            this.Anuladas = data.Anuladas;
            this.Facturadas = data.Tipo_Facturacion[0].Facturadas;
            this.Nofacturadas = data.Tipo_Facturacion[0].No_Facturadas;
            //// console.log(data);
        });
    }
    EliminarBorrador(id) {
        let datos = new FormData();
        datos.append("Id_Borrador", id);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + 'php/remision/elimina_borrador.php', datos).subscribe((data) => {
            this.confirmaSwal.show();
            this.ListarBorradores();
        });
    }
    paginacion() {
        let params = {
            pag: this.page
        };
        if (this.filtro_fecha != "" && this.filtro_fecha != null) {
            params.fecha = this.filtro_fecha;
        }
        if (this.filtro_cod != "") {
            params.cod = this.filtro_cod;
        }
        if (this.filtro_tipo != "") {
            params.tipo = this.filtro_tipo;
        }
        if (this.filtro_origen != "") {
            params.origen = this.filtro_origen;
        }
        if (this.filtro_grupo != "") {
            params.grupo = this.filtro_grupo;
        }
        if (this.filtro_destino != "") {
            params.destino = this.filtro_destino;
        }
        if (this.filtro_fase != "") {
            params.fase = this.filtro_fase;
        }
        if (this.filtro_est != "") {
            params.est = this.filtro_est;
        }
        let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        this.location.replaceState('/remisionesnuevo', queryString);
        this.Cargando = true;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + '/php/remision_nuevo/remisiones.php?' + queryString).subscribe((data) => {
            this.Cargando = false;
            this.Lista_Remisiones = data.remisiones;
            this.TotalItems = data.numReg;
        });
    }
    dateRangeChanged(event) {
        if (event.formatted != "") {
            this.filtro_fecha = event;
        }
        else {
            this.filtro_fecha = '';
        }
        this.filtros();
    }
    selectedDate(fecha) {
        this.filtro_fecha =
            this.datePipe.transform(fecha.value.begin._d, 'yyyy-MM-dd') +
                ' - ' +
                this.datePipe.transform(fecha.value.end._d, 'yyyy-MM-dd');
    }
    dateRangeChanged2(event, tipo) {
        // console.log(event);
        if (event.formatted != "") {
            if (tipo == 'remision') {
                this.fecha_informe = event.formatted;
            }
            else {
                this.fecha_informe2 = event.formatted;
            }
        }
        else {
            if (tipo == 'remision') {
                this.fecha_informe = '';
            }
            else {
                this.fecha_informe2 = '';
            }
        }
    }
    filtros() {
        let params = {};
        if (this.filtro_fecha != "" || this.filtro_cod != "" || this.filtro_tipo != "" || this.filtro_origen != "" || this.filtro_grupo != "" || this.filtro_destino != "" || this.filtro_est || this.filtro_fase) {
            this.page = 1;
            params.pag = this.page;
            if (this.filtro_fecha != "" && this.filtro_fecha != null) {
                params.fecha = this.filtro_fecha;
            }
            if (this.filtro_cod != "") {
                params.cod = this.filtro_cod;
            }
            if (this.filtro_tipo != "") {
                params.tipo = this.filtro_tipo;
            }
            if (this.filtro_origen != "") {
                params.origen = this.filtro_origen;
            }
            if (this.filtro_grupo != "") {
                params.grupo = this.filtro_grupo;
            }
            if (this.filtro_destino != "") {
                params.destino = this.filtro_destino;
            }
            if (this.filtro_est != "") {
                params.est = this.filtro_est;
            }
            if (this.filtro_fase != "") {
                params.fase = this.filtro_fase;
            }
            let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
            this.location.replaceState('/remisionesnuevo', queryString);
            this.Cargando = true;
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + '/php/remision_nuevo/remisiones.php?' + queryString).subscribe((data) => {
                this.Cargando = false;
                this.Lista_Remisiones = data.remisiones;
                this.TotalItems = data.numReg;
            });
        }
        else {
            this.location.replaceState('/remisionesnuevo', '');
            this.page = 1;
            this.filtro_cod = '';
            this.filtro_destino = '';
            this.filtro_est = '';
            this.filtro_fecha = '';
            this.filtro_tipo = '';
            this.filtro_origen = '';
            this.filtro_grupo = '';
            this.filtro_fase = '';
            this.Cargando = true;
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + '/php/remision_nuevo/remisiones.php').subscribe((data) => {
                this.Cargando = false;
                this.Lista_Remisiones = data.remisiones;
                this.TotalItems = data.numReg;
            });
        }
    }
    SuspenderRemision(id, idc) {
        this.Id_Remision = id;
        this.Id_Contrato = idc;
        this.anularSwal.show();
    }
    AnularRemision(value) {
        let datos = new FormData();
        datos.append("modulo", 'Remision');
        datos.append("id", this.Id_Remision);
        datos.append("idc", this.Id_Contrato);
        datos.append("funcionario", this.user.Identificacion_Funcionario);
        datos.append("observacion", src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_9__["functionsUtils"].utf8_encode(value));
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ruta + 'php/remision_nuevo/anular_remision_dev.php', datos).subscribe((data) => {
            this.deleteSwal.title = data.title;
            this.deleteSwal.type = data.type;
            this.deleteSwal.text = data.message;
            this.deleteSwal.show();
            this.ListarRemisiones();
            this.Id_Remision = '';
        });
    }
    perfilAdministrador() {
        let miPerfil = localStorage.getItem('miPerfil');
        if (miPerfil == '16') {
            return true;
        }
        return false;
    }
}
RemisionesComponent.ɵfac = function RemisionesComponent_Factory(t) { return new (t || RemisionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__["DateAdapter"])); };
RemisionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: RemisionesComponent, selectors: [["app-remisiones"]], viewQuery: function RemisionesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c7, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.studentChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.deleteSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.confirmaSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.anularSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.PlantillaBotones = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.PlantillaEstado = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.PlantillaTipo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.EstadoRemision = _t.first);
    } }, decls: 92, vars: 22, consts: [[1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "text-primary"], [1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "btn", "btn-info", "btn-sm", 2, "float", "right", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "line"], ["multi", ""], [1, "mat-elevation-z0"], ["appearance", "outline", 1, "col-md-3", "pl-0"], ["matInput", "", "name", "daterange", "autocomplete", "off", "required", "", 3, "satDatepicker", "value", "dateChange", "dateInput"], [3, "rangeMode"], ["picker", ""], ["matSuffix", "", 3, "for"], ["matInput", "", "type", "text", "placeholder", "Busca por c\u00F3digo", "autocomplete", "off", 3, "ngModel", "ngModelChange", "input"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], ["value", "Cliente"], ["value", "Interna"], ["matInput", "", "type", "text", "placeholder", "Busca por origen", "autocomplete", "off", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "placeholder", "Busca por grupo", "autocomplete", "off", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "placeholder", "Busca por destino", "autocomplete", "off", 3, "ngModel", "ngModelChange", "input"], ["value", "Pendiente"], ["value", "Alistada"], ["value", "Enviada"], ["value", "Recibida"], ["value", "No conforme"], ["value", "Anulada"], ["value", "Facturada"], ["value", "0"], ["value", "1"], ["value", "2"], ["class", "table table-bordered table-striped table-sm table-responsive-sm", "style", "font-size: small", 4, "ngIf", "ngIfElse"], ["size", "sm", 1, "d-flex", "justify-content-center", "pagination-rounded", "pagination-sm", 3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "boundaryLinks", "collectionSizeChange", "pageChange"], ["test", ""], ["title", "Borrador Eliminado", "text", "Su Borrador Fue Eliminado de Manera Correcta, Los productos seleccionados, liberaron sus cantidades", "type", "success"], ["confirmaSwal", ""], ["title", "", "text", "", "type", ""], ["deleteSwal", ""], [3, "swalOptions"], ["anularSwal", ""], ["notData", ""], [1, "table", "table-bordered", "table-striped", "table-sm", "table-responsive-sm", 2, "font-size", "small"], [1, "text-center", "text-uppercase"], [3, "class", 4, "ngFor", "ngForOf"], [1, "align-middle"], [1, "col-md-2"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", 1, "align-middle", "text-info", "mt-1", "mb-0"], [1, "fa", "fa-info-circle"], [1, "collapse", "mt-1", 3, "id"], [1, "text-center"], ["class", "badge", 3, "ngClass", 4, "ngIf"], ["class", "label label-success", 3, "routerLink", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "btn-sm", "waves-effect", "waves-light"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", ""], ["href", "", 1, "text-info", "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "routerLink"], [1, "fas", "fa-eye"], ["class", "text-success dropdown-item waves-light waves-effect caja-botones", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "text-danger dropdown-item waves-light waves-effect caja-botones", 3, "click", 4, "ngIf"], ["class", "dropdown-item waves-light waves-effect caja-botones", "href", "", 3, "routerLink", 4, "ngIf"], ["class", "dropdown-item waves-light waves-effect caja-botones", "target", "_blank", 3, "href", 4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "label", "label-success", 3, "routerLink"], ["target", "_blank", 1, "text-success", "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "fas", "fa-file"], [1, "fas", "fa-file-invoice-dollar"], [1, "fas", "fa-print"], [1, "fas", "fa-file-download"], [1, "text-danger", "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "click"], [1, "fa", "fa-times"], ["href", "", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "routerLink"], ["target", "_blank", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "fa", "fa-print"], [3, "loading"]], template: function RemisionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Remisiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function RemisionesComponent_Template_button_click_9_listener() { return ctx.openClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, " Filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "mat-accordion", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dateChange", function RemisionesComponent_Template_input_dateChange_18_listener($event) { return ctx.selectedDate($event); })("dateInput", function RemisionesComponent_Template_input_dateInput_18_listener($event) { return ctx.selectedDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "sat-datepicker", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "sat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function RemisionesComponent_Template_input_ngModelChange_25_listener($event) { return ctx.filtro_cod = $event; })("input", function RemisionesComponent_Template_input_input_25_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function RemisionesComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.filtro_tipo = $event; })("selectionChange", function RemisionesComponent_Template_mat_select_selectionChange_29_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, "Origen");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function RemisionesComponent_Template_input_ngModelChange_39_listener($event) { return ctx.filtro_origen = $event; })("input", function RemisionesComponent_Template_input_input_39_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Grupo");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function RemisionesComponent_Template_input_ngModelChange_43_listener($event) { return ctx.filtro_grupo = $event; })("input", function RemisionesComponent_Template_input_input_43_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, "Destino");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function RemisionesComponent_Template_input_ngModelChange_47_listener($event) { return ctx.filtro_destino = $event; })("input", function RemisionesComponent_Template_input_input_47_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function RemisionesComponent_Template_mat_select_ngModelChange_51_listener($event) { return ctx.filtro_est = $event; })("selectionChange", function RemisionesComponent_Template_mat_select_selectionChange_51_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "Pendiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "Alistada");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "Enviada");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "Recibida");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "No conforme");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "Anulada");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "Facturada");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function RemisionesComponent_Template_mat_select_ngModelChange_71_listener($event) { return ctx.filtro_fase = $event; })("selectionChange", function RemisionesComponent_Template_mat_select_selectionChange_71_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "Fase 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "mat-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "Fase 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "Listo");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](80, RemisionesComponent_table_80_Template, 27, 1, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "ngb-pagination", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("collectionSizeChange", function RemisionesComponent_Template_ngb_pagination_collectionSizeChange_81_listener($event) { return ctx.TotalItems = $event; })("pageChange", function RemisionesComponent_Template_ngb_pagination_pageChange_81_listener($event) { return ctx.page = $event; })("pageChange", function RemisionesComponent_Template_ngb_pagination_pageChange_81_listener() { return ctx.paginacion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](82, RemisionesComponent_ng_template_82_Template, 2, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](84, "swal", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](86, "swal", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](88, "swal", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](90, RemisionesComponent_ng_template_90_Template, 1, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](21, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("satDatepicker", _r0)("value", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.filtro_cod);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.filtro_tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.filtro_origen);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.filtro_grupo);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.filtro_destino);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.filtro_est);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.filtro_fase);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.Cargando && ctx.Lista_Remisiones.length > 0)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", ctx.TotalItems)("page", ctx.page)("maxSize", 10)("pageSize", ctx.maxSize)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("swalOptions", ctx.alertInputOption);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__["SatDatepickerInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__["SatDatepicker"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_15__["SatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbPagination"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_23__["SwalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_24__["NotDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVtaXNpb25lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBQSIsImZpbGUiOiJyZW1pc2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNhcmQtaGVhZGVye1xyXG4gICAgLnRpe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4udC0xMHtcclxuICAgIGZvbnQtc2l6ZTogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tY29udHJvbC1zbXtcclxuICAgIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTFweCFpbXBvcnRhbnQ7XHJcbiAgICAuaW5wdXQtc217XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogOTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5vdGlmeS1jb250e1xyXG4gICAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBwe1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5idG4tZ3JvdXB7XHJcbiAgICAuYnRuLW1pbml7XHJcbiAgICAgICAgcGFkZGluZzoycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWFnZW57XHJcbiAgICB3aWR0aDogNDNweDtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG5cclxufVxyXG50YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRke1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmJ0bi1taW5pe1xyXG4gICAgcGFkZGluZzogNHB4IDZweCAycHggNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlIWltcG9ydGFudDtcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIG1pbi13aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5jYWphLWJvdG9uZXN7XHJcbiAgICBwYWRkaW5nOiAzcHggOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcbi5idG4tZ3JvdXB7XHJcbiAgICAuYnRuLXNtIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGV7XHJcbiAgICB0aGVhZHtcclxuICAgICAgICB0aHtcclxuICAgICAgICAgICAgcGFkZGluZzoycHg7XHJcbiAgICAgICAgICAgIC5pbnB1dC1zbSwgLmlucHV0LXNtOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxhLWZpbHRyb3tcclxuICAgICAgICAgICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG4udG9vbHRpcC1jb250ZW50NCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjc3NjZhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA1NXB4IHNvbGlkICMyNzk2NmEgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLnRvb2x0aXAtaXRlbTIge1xyXG4gICAgY29sb3I6ICM0MjQ0NDYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG5cclxuXHJcbn1cclxuLm15dG9vbHRpcDpob3ZlciAudG9vbHRpcC1pdGVtMiB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcclxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIH0gKi8iXX0= */"] });


/***/ }),

/***/ "Fqfl":
/*!***************************************************************!*\
  !*** ./src/app/pages/inventario/remision/remision.routing.ts ***!
  \***************************************************************/
/*! exports provided: RemisionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionRoutes", function() { return RemisionRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _remisiones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remisiones.component */ "BS92");
/* harmony import */ var _remisioncrearnuevo_remisioncrearnuevo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remisioncrearnuevo/remisioncrearnuevo.component */ "TuZz");
/* harmony import */ var _remisioneditar_remisioneditar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remisioneditar/remisioneditar.component */ "yiTy");
/* harmony import */ var _remision_remision_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remision/remision.component */ "wjNG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '', component: _remisiones_component__WEBPACK_IMPORTED_MODULE_1__["RemisionesComponent"]
    },
    {
        path: 'remisioncrearnuevo', component: _remisioncrearnuevo_remisioncrearnuevo_component__WEBPACK_IMPORTED_MODULE_2__["RemisioncrearnuevoComponent"]
    },
    {
        path: 'remision/:id', component: _remision_remision_component__WEBPACK_IMPORTED_MODULE_4__["RemisionComponent"]
    },
    {
        path: 'remisioneditar/:id', component: _remisioneditar_remisioneditar_component__WEBPACK_IMPORTED_MODULE_3__["RemisioneditarComponent"]
    },
];
class RemisionRoutes {
}
RemisionRoutes.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RemisionRoutes });
RemisionRoutes.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function RemisionRoutes_Factory(t) { return new (t || RemisionRoutes)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RemisionRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
;


/***/ }),

/***/ "GPUG":
/*!**********************************************!*\
  !*** ./src/app/services/producto.service.ts ***!
  \**********************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductoService {
    constructor(client) {
        this.client = client;
        this._rutaBase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/GENERALES/productos/';
        this._rutaProductos = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/productos/productosasociados/';
        this._rutaProductosControl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/productos/productoscontrolados/';
        this._rutaProductosRemision = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/remision/';
    }
    getListaProductos(p) {
        return this.client.get(this._rutaBase + 'get_lista_productos.php', { params: p });
    }
    GetProductosFiltrar() {
        return this.client.get(this._rutaProductos + 'get_productos_filtrar.php');
    }
    GetDetalleAsociado(idAsociado) {
        let p = { id_producto_asociado: idAsociado };
        return this.client.get(this._rutaProductos + 'get_detalle_productos_asociados.php', { params: p });
    }
    GetDetalleControlado(idControlado) {
        let p = { id_producto_controlado: idControlado };
        return this.client.get(this._rutaProductosControl + 'get_detalle_producto_controlado.php', { params: p });
    }
    GetListaProductosAsociados(p) {
        return this.client.get(this._rutaProductos + 'get_lista_productos_asociados.php', { params: p });
    }
    GetListaProductosControlados(p) {
        return this.client.get(this._rutaProductosControl + 'get_lista_productos_controlados.php', { params: p });
    }
    GuardarProductosAsociados(data) {
        return this.client.post(this._rutaProductos + 'guardar_productos_asociados.php', data);
    }
    GuardarProductosControlado(data) {
        return this.client.post(this._rutaProductosControl + 'guardar_producto_controlado.php', data);
    }
    ActualizarProductosAsociados(data) {
        return this.client.post(this._rutaProductos + 'editar_productos_asociados.php', data);
    }
    ActualizarProductoControlado(data) {
        return this.client.post(this._rutaProductosControl + 'actualizar_producto_controlado.php', data);
    }
    EliminarControl(data) {
        return this.client.post(this._rutaProductosControl + 'eliminar_producto_controlado.php', data);
    }
    GetListaProductosRemision(p) {
        return this.client.get(this._rutaProductosRemision + 'get_productos_inventario.php', { params: p });
    }
}
ProductoService.ɵfac = function ProductoService_Factory(t) { return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductoService, factory: ProductoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Lm6y":
/*!**************************************************!*\
  !*** ./src/app/services/dispensacion.service.ts ***!
  \**************************************************/
/*! exports provided: DispensacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispensacionService", function() { return DispensacionService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DispensacionService {
    constructor(client) {
        this.client = client;
    }
    // public GetDataPositiva(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_datos_positiva.php', { params: p });
    // }
    // public GetServicios(punto: string): Observable<any> {
    //   let p = { punto: punto };
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_servicios.php', { params: p });
    // }
    // public GetTipoServicios(serv: string, id_punto:string): Observable<any> {
    //   let p = { serv: serv, id_punto:id_punto };
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_tipo_servicios.php', { params: p });
    // }
    // public GetSoportes(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_tipos_soporte.php', { params: p });
    // }
    // public GetNumeroPrescripcion(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_numero_prescripcion.php', { params: p });
    // }
    // public GetIdDireccionamineto(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_id_direccionamiento.php', { params: p });
    // }
    // public GetProductosNumeroPrescripcion(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_productos_numero_prescripcion.php', { params: p });
    // }
    // public GetProductosIdDireccionamiento(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_productos_id_direccionamiento.php', { params: p });
    // }
    // public GetCamposDinamicosDispensacion(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_campos_dispensacion.php', { params: p });
    // }
    // public GetInformacionTipoServicio(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_info_tipo_servicio.php', { params: p });
    // }
    // public GetCamposDinamicosProductosDispensacion(p:any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_campos_productos_dispensacion.php', { params: p });
    // }
    // public GetPaciente(idPaciente: string, idPunto: string): Observable<any> {
    //   let p = { id_paciente: idPaciente, id_punto: idPunto };
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_paciente.php', { params: p });
    // }
    // public GetTipoDocumento(): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_tipo_documento.php');
    // }
    // public GetNombreCodigoCie(idCie: string): Observable<any> {
    //   let p = { id: idCie };
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_cie.php', { params: p });
    // }
    // public GetTablero(id: string): Observable<any> {
    //   let p = { id: id };
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_tablero_funcionario.php', { params: p });
    // }
    GetListaProductosInventario(p) {
        return this.client.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/tablero_dispensacion/get_producto_inventario.php', { params: p });
    }
    // public GetListaProductosDispensacion(p: any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_producto_inventario.php', { params: p });
    // }
    // public GetProductosMipresInventario(p: any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_producto_mipres_inventario.php', { params: p });
    // }
    // public GetListaProductosAtc(p: any): Observable<any> {
    //   return this.client.get(environment.ruta + 'php/tablero_dispensacion/get_producto_atc_inventario.php', { params: p });
    // }
    ValidarProductoLista(p) {
        return this.client.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/tablero_dispensacion/validar_producto.php', { params: p });
    }
}
DispensacionService.ɵfac = function DispensacionService_Factory(t) { return new (t || DispensacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DispensacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DispensacionService, factory: DispensacionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TuZz":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/inventario/remision/remisioncrearnuevo/remisioncrearnuevo.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RemisioncrearnuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisioncrearnuevoComponent", function() { return RemisioncrearnuevoComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "f02I");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _RemisonModelNuevo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RemisonModelNuevo */ "m7Qk");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _productosremisionnuevo_productosremisionnuevo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./productosremisionnuevo/productosremisionnuevo.component */ "yC5N");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../core/pipes/image.pipe */ "0gLu");
















function RemisioncrearnuevoComponent_ng_container_37_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Modelo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_ng_container_37_mat_form_field_11_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.ModeloRemision.Modelo = $event; })("selectionChange", function RemisioncrearnuevoComponent_ng_container_37_mat_form_field_11_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.CambiarPunto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Punto-Bodega");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Punto-Punto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Bodega-Punto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Bodega-Bodega");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.ModeloRemision.Modelo);
} }
function RemisioncrearnuevoComponent_ng_container_37_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r16.dia);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r16.dia, "");
} }
function RemisioncrearnuevoComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Prioridad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_ng_container_37_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.ModeloRemision.Prioridad = $event; })("selectionChange", function RemisioncrearnuevoComponent_ng_container_37_Template_mat_select_selectionChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.EnviarModelo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Prioridad I");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Prioridad II");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Prioridad III");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RemisioncrearnuevoComponent_ng_container_37_mat_form_field_11_Template, 12, 1, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Meses de vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_ng_container_37_Template_mat_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.ModeloRemision.Meses = $event; })("selectionChange", function RemisioncrearnuevoComponent_ng_container_37_Template_mat_select_selectionChange_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.EnviarModelo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RemisioncrearnuevoComponent_ng_container_37_mat_option_16_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.ModeloRemision.Prioridad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ModeloRemision.Tipo == "Interna");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.ModeloRemision.Meses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.Meses);
} }
function RemisioncrearnuevoComponent_mat_form_field_38_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tipo de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_mat_form_field_38_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.ModeloRemision.Tipo_Pago = $event; })("selectionChange", function RemisioncrearnuevoComponent_mat_form_field_38_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.EnviarModelo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cr\u00E9dito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Contado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.ModeloRemision.Tipo_Pago);
} }
function RemisioncrearnuevoComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r26.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r26.label);
} }
function RemisioncrearnuevoComponent_mat_form_field_45_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r28.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r28.label);
} }
function RemisioncrearnuevoComponent_mat_form_field_45_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Grupo estiba");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_mat_form_field_45_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.Datos.Origen_Grupo = $event; })("selectionChange", function RemisioncrearnuevoComponent_mat_form_field_45_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.AsignarNombre("Grupo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RemisioncrearnuevoComponent_mat_form_field_45_mat_option_4_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.Datos.Origen_Grupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.Grupos);
} }
function RemisioncrearnuevoComponent_mat_form_field_46_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r33.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r33.label);
} }
function RemisioncrearnuevoComponent_mat_form_field_46_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Destino");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_mat_form_field_46_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.Datos.Destino = $event; })("selectionChange", function RemisioncrearnuevoComponent_mat_form_field_46_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.AsignarNombre("Destino"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RemisioncrearnuevoComponent_mat_form_field_46_mat_option_4_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.Datos.Destino);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.Destino);
} }
function RemisioncrearnuevoComponent_mat_form_field_47_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r38.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r38.label);
} }
function RemisioncrearnuevoComponent_mat_form_field_47_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Contratos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_mat_form_field_47_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r39.Datos.DestinoContrato = $event; })("selectionChange", function RemisioncrearnuevoComponent_mat_form_field_47_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.AsignarNombre("Contrato"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RemisioncrearnuevoComponent_mat_form_field_47_mat_option_4_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.Datos.DestinoContrato);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.Contratos);
} }
function RemisioncrearnuevoComponent_mat_form_field_48_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "L. Ganancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_mat_form_field_48_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r42.ModeloRemision.Id_Lista = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.ModeloRemision.Id_Lista);
} }
function RemisioncrearnuevoComponent_mat_form_field_49_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "O. Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_mat_form_field_49_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r44.ModeloRemision.Orden_Compra = $event; })("change", function RemisioncrearnuevoComponent_mat_form_field_49_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r46.EnviarModelo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.ModeloRemision.Orden_Compra);
} }
function RemisioncrearnuevoComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r47 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", r_r47.Nombre, " ");
} }
class RemisioncrearnuevoComponent {
    constructor(http, _user) {
        this.http = http;
        this._user = _user;
        this.RutaPrincipal = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ruta;
        this.Datos = {
            Titulo: "Nueva Remisión",
            Fecha: new Date(),
            Origen: "",
            Origen_Grupo: "",
            Destino: "",
            DestinoContrato: "",
        };
        this.Cliente = [];
        this.ModeloRemision = new _RemisonModelNuevo__WEBPACK_IMPORTED_MODULE_3__["RemisionModelNuevo"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].id_funcionario);
        this.Datos_Iniciales = {};
        this.Origen = [];
        this.Categorias_Nuevas = [];
        this.Grupos = [];
        this.Destino = [];
        this.Meses = [];
        //Contratos
        this.Contratos = [];
        this.ActualizarModelProductos = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.EnviarPendientes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.Bodegas_Nuevo = [];
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((term) => term.length < 4 ? [] : this.Cliente.filter((v) => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter = (x) => x.Nombre;
    }
    ngOnInit() {
        this.userF = this._user.user;
        this.GetDatosIniciales();
        for (let i = -1; i <= 18; i++) {
            this.Meses.push({
                dia: i,
            });
        }
    }
    Cambiar_Remision() {
        this.ModeloRemision.Id_Destino = 0;
        if (this.ModeloRemision.Tipo == "Interna") {
            this.Destino = this.Datos_Iniciales.Punto;
            this.ModeloRemision.Modelo = "Bodega-Bodega";
            this.ModeloRemision.Estado = "Pendiente";
            this.ModeloRemision.Estado_Alistamiento = "0";
            this.ModeloRemision.Tipo_Origen = "Bodega";
            this.ModeloRemision.Tipo_Destino = "Punto_Dispensacion";
        }
        else if (this.ModeloRemision.Tipo == "Contrato") {
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ruta + '/php/rotativoscompras/get_contratos_remision.php').subscribe((data) => {
                this.Contratos = data.Contratos;
                this.Destino = this.Datos_Iniciales.Clientes;
                this.ModeloRemision.Estado_Alistamiento = "0";
                this.ModeloRemision.Estado = "Pendiente";
                this.ModeloRemision.Tipo_Origen = "Bodega";
                this.ModeloRemision.Tipo_Destino = "Contrato";
            });
        }
        else {
            this.Destino = this.Datos_Iniciales.Clientes;
            this.ModeloRemision.Estado_Alistamiento = "0";
            this.ModeloRemision.Estado = "Pendiente";
            this.ModeloRemision.Tipo_Origen = "Bodega";
            this.ModeloRemision.Tipo_Destino = "Cliente";
        }
        this.EnviarModelo();
    }
    EnviarModelo(flag = true) {
        let p = { modelo: this.ModeloRemision, actualizar_productos: flag };
        this.ActualizarModelProductos.next(p);
    }
    ActualizarModelo(modelo) {
        if (modelo.Tipo_Origen == 'Bodega') {
            this.ModeloRemision = modelo;
            this.getGrupos();
            this.Datos.Origen_Grupo = modelo.Grupo.Id_Grupo.toString();
        }
        if (this.ModeloRemision.Tipo == "Interna") {
            switch (this.ModeloRemision.Modelo) {
                case "Punto-Bodega":
                    this.Datos.Destino = "B-" + this.ModeloRemision.Id_Destino;
                    this.Datos.Origen = "P-" + this.ModeloRemision.Id_Origen;
                    break;
                case "Punto-Punto":
                    this.Datos.Destino = "P-" + this.ModeloRemision.Id_Destino;
                    this.Datos.Origen = "P-" + this.ModeloRemision.Id_Origen;
                    break;
                case "Bodega-Bodega":
                    this.Datos.Destino = "B-" + this.ModeloRemision.Id_Destino;
                    this.Datos.Origen = "B-" + this.ModeloRemision.Id_Origen;
                    break;
                case "Bodega-Punto":
                    this.Datos.Destino = "P-" + this.ModeloRemision.Id_Destino;
                    this.Datos.Origen = "B-" + this.ModeloRemision.Id_Origen;
                    break;
            }
            setTimeout(() => {
                this.CambiarPunto(false);
            }, 300);
        }
        else {
            this.Datos.Destino = "B-" + this.ModeloRemision.Id_Destino;
            this.Datos.Origen = "C-" + this.ModeloRemision.Id_Origen;
            this.Destino = this.Datos_Iniciales.Clientes;
            this.Origen = this.Datos_Iniciales.Bodega;
        }
    }
    setGrupo() {
        this.ModeloRemision.Grupo.Id_Grupo = 0;
        this.ModeloRemision.Grupo.Nombre_Grupo = "";
        this.ModeloRemision.Grupo.Fecha_Vencimiento = "";
        this.ModeloRemision.Grupo.Presentacion = "";
        this.Datos.Origen_Grupo = "";
    }
    CambiarPunto(cambiarlista = true) {
        switch (this.ModeloRemision.Modelo) {
            case "Punto-Bodega":
                this.Origen = this.Datos_Iniciales.Punto;
                this.Destino = this.Datos_Iniciales.Bodega;
                this.ModeloRemision.Estado_Alistamiento = "2";
                this.ModeloRemision.Estado = "Alistada";
                this.ModeloRemision.Tipo_Origen = "Punto_Dispensacion";
                this.ModeloRemision.Tipo_Destino = "Bodega";
                this.setGrupo();
                break;
            case "Punto-Punto":
                this.Origen = this.Datos_Iniciales.Punto;
                this.Destino = this.Datos_Iniciales.Punto;
                this.ModeloRemision.Estado_Alistamiento = "2";
                this.ModeloRemision.Estado = "Alistada";
                this.ModeloRemision.Tipo_Origen = "Punto_Dispensacion";
                this.ModeloRemision.Tipo_Destino = "Punto_Dispensacion";
                this.setGrupo();
                break;
            case "Bodega-Punto":
                this.Origen = this.Datos_Iniciales.Bodega;
                this.Destino = this.Datos_Iniciales.Punto;
                this.ModeloRemision.Estado_Alistamiento = "0";
                this.ModeloRemision.Estado = "Pendiente";
                this.ModeloRemision.Tipo_Origen = "Bodega";
                this.ModeloRemision.Tipo_Destino = "Punto_Dispensacion";
                break;
            case "Bodega-Bodega":
                this.Origen = this.Datos_Iniciales.Bodega;
                this.Destino = this.Datos_Iniciales.Bodega;
                this.ModeloRemision.Estado_Alistamiento = "0";
                this.ModeloRemision.Estado = "Pendiente";
                this.ModeloRemision.Tipo_Origen = "Bodega";
                this.ModeloRemision.Tipo_Destino = "Bodega";
                break;
        }
        console.log(this.Origen);
        if (cambiarlista) {
            setTimeout(() => {
                this.EnviarModelo();
            }, 100);
        }
    }
    GetDatosIniciales() {
        let params = {};
        params.id = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].id_funcionario;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ruta + 'php/remision_nuevo/get_datos_iniciales.php', { params: params }).subscribe((data) => {
            this.Datos_Iniciales = data;
            this.Cliente = data.Clientes;
            this.Origen = data.Bodega;
            this.Destino = data.Punto;
            this.Cambiar_Remision();
            this.CambiarPunto();
        });
    }
    getCategoriasNuevas() {
        let params = {};
        params.id_bodega_nuevo = this.ModeloRemision.Id_Origen;
        params.label = true;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ruta + 'php/categoria_nueva/get_categorias_por_bodega.php', { params: params }).subscribe((res) => {
            if (res.Tipo == "success") {
                this.Categorias_Nuevas = res.Categorias;
            }
        });
    }
    getGrupos() {
        let params = {};
        params.id_bodega_nuevo = this.ModeloRemision.Id_Origen;
        params.label = true;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ruta + 'php/grupo_estiba/get_grupos_bodega.php', { params: params }).subscribe((res) => {
            if (res.Tipo == "success") {
                this.Grupos = res.Grupos;
            }
        });
    }
    AsignarNombre(tipo) {
        if (tipo == "Origen") {
            let pos = this.Origen.findIndex((x) => x.value === this.Datos.Origen);
            console.log(pos);
            if (pos >= 0) {
                if (this.ModeloRemision.Tipo_Origen == "Bodega") {
                    this.ModeloRemision.Id_Origen = this.Origen[pos].value.substr(2);
                    this.ModeloRemision.Nombre_Origen = this.Origen[pos].label;
                    this.getGrupos();
                }
                else {
                    this.ModeloRemision.Id_Origen = this.Origen[pos].value.substr(2);
                    this.ModeloRemision.Nombre_Origen = this.Origen[pos].label;
                }
            }
        }
        else if (tipo == "Destino") {
            let pos = this.Destino.findIndex((x) => x.value === this.Datos.Destino);
            if (pos >= 0) {
                this.ModeloRemision.Id_Destino = this.Destino[pos].value.substr(2);
                this.ModeloRemision.Nombre_Destino = this.Destino[pos].label;
                if (this.ModeloRemision.Tipo == "Cliente") {
                    this.ModeloRemision.Id_Lista = this.Destino[pos].Id_Lista_Ganancia;
                }
            }
        }
        else if (tipo == "Contrato") {
            let pos = this.Contratos.findIndex((x) => x.value === this.Datos.DestinoContrato);
            if (pos >= 0) {
                this.ModeloRemision.Id_Contrato = this.Contratos[pos].value;
                this.ModeloRemision.Id_Destino = this.Contratos[pos].value;
                this.ModeloRemision.Nombre_Destino = this.Contratos[pos].label;
            }
        }
        if (tipo == "Grupo") {
            let pos = this.Grupos.findIndex((x) => x.value === this.Datos.Origen_Grupo);
            if (pos >= 0) {
                this.ModeloRemision.Grupo.Id_Grupo = this.Grupos[pos].value;
                this.ModeloRemision.Grupo.Nombre_Grupo = this.Grupos[pos].label;
                this.ModeloRemision.Grupo.Fecha_Vencimiento = this.Grupos[pos].Fecha_Vencimiento;
                this.ModeloRemision.Grupo.Presentacion = this.Grupos[pos].Presentacion;
            }
        }
        this.EnviarModelo();
    }
    tab(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    }
}
RemisioncrearnuevoComponent.ɵfac = function RemisioncrearnuevoComponent_Factory(t) { return new (t || RemisioncrearnuevoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
RemisioncrearnuevoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RemisioncrearnuevoComponent, selectors: [["app-remisioncrearnuevo"]], decls: 57, vars: 26, consts: [[1, "col", "md-12", "p-3"], [1, "card"], ["FormTraslado", "ngForm"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "card", "m-0", "p-0", "border-0", "shadow-none"], [1, "card-horizontal"], [1, "img-square-wrapper"], ["alt", "", "height", "45", 3, "src"], [1, "card-body", "p-0", "m-0"], [1, "card-text", 2, "font-size", "x-small"], [1, "col-md-4", "text-right"], [1, "text-primary"], [1, "row"], ["appearance", "outline", 1, "col-md-3"], ["name", "Tipo", "id", "Tipo", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "Cliente"], ["value", "Interna"], ["value", "Contrato"], [4, "ngIf"], ["class", "col-md-3", "appearance", "outline", 4, "ngIf"], ["name", "Bodegas_Nuevo", "id", "Bodegas_Nuevo", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["id", "Observaciones", "name", "Observaciones", "type", "text", "rows", "3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "change", "keypress"], [3, "_remisionModel", "ActualizarModelo", "CargarBorrador"], ["rt", ""], ["name", "Prioridad", "id", "Prioridad", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["name", "Meses", "id", "Meses", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["name", "Modelo", "id", "Modelo", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "Punto-Bodega"], ["value", "Punto-Punto"], ["value", "Bodega-Punto"], ["value", "Bodega-Bodega"], [3, "value"], ["name", "Tipo_Pago", "id", "Tipo_Pago", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "Credito"], ["value", "Contado"], ["name", "Origen_Grupo", "id", "Grupos", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["name", "Destino", "id", "Puntos", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["name", "Contrato", "id", "Id_Contrato", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["matInput", "", "type", "text", "name", "ListaGanancia", "id", "ListaGanancia", "autocomplete", "off", "readonly", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "Orden_Compra", "id", "Orden_Compra", "autocomplete", "off", "required", "", 3, "ngModel", "ngModelChange", "change"], [1, "f-9"]], template: function RemisioncrearnuevoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_Template_mat_select_ngModelChange_30_listener($event) { return ctx.ModeloRemision.Tipo = $event; })("selectionChange", function RemisioncrearnuevoComponent_Template_mat_select_selectionChange_30_listener() { return ctx.Cambiar_Remision(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Tipo cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Tipo interna");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Tipo contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, RemisioncrearnuevoComponent_ng_container_37_Template, 17, 4, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, RemisioncrearnuevoComponent_mat_form_field_38_Template, 8, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Origen");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_Template_mat_select_ngModelChange_43_listener($event) { return ctx.Datos.Origen = $event; })("selectionChange", function RemisioncrearnuevoComponent_Template_mat_select_selectionChange_43_listener() { return ctx.AsignarNombre("Origen"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, RemisioncrearnuevoComponent_mat_option_44_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, RemisioncrearnuevoComponent_mat_form_field_45_Template, 5, 2, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, RemisioncrearnuevoComponent_mat_form_field_46_Template, 5, 2, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, RemisioncrearnuevoComponent_mat_form_field_47_Template, 5, 2, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, RemisioncrearnuevoComponent_mat_form_field_48_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, RemisioncrearnuevoComponent_mat_form_field_49_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RemisioncrearnuevoComponent_Template_textarea_ngModelChange_53_listener($event) { return ctx.ModeloRemision.Observaciones = $event; })("change", function RemisioncrearnuevoComponent_Template_textarea_change_53_listener() { return ctx.EnviarModelo(false); })("keypress", function RemisioncrearnuevoComponent_Template_textarea_keypress_53_listener($event) { return ctx.tab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "app-productosremisionnuevo", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("CargarBorrador", function RemisioncrearnuevoComponent_Template_app_productosremisionnuevo_CargarBorrador_54_listener($event) { return ctx.ActualizarModelo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, RemisioncrearnuevoComponent_ng_template_55_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 20, ctx.userF.person.company_worked.logo, "companies"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" NIT ", ctx.userF.person.company_worked.tin, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.Datos.Titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](25, 23, ctx.Datos.Fecha, "longDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.ModeloRemision.Tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ModeloRemision.Tipo != "Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ModeloRemision.Tipo == "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.Datos.Origen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Origen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Grupos.length > 0 && ctx.ModeloRemision.Tipo_Origen == "Bodega");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ModeloRemision.Tipo != "Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ModeloRemision.Tipo == "Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ModeloRemision.Tipo == "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ModeloRemision.Tipo == "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.ModeloRemision.Observaciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("_remisionModel", ctx.ModeloRemision)("ActualizarModelo", ctx.ActualizarModelProductos.asObservable());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _productosremisionnuevo_productosremisionnuevo_component__WEBPACK_IMPORTED_MODULE_13__["ProductosremisionnuevoComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"]], pipes: [_core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_15__["ImagePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1pc2lvbmNyZWFybnVldm8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "XYi2":
/*!**********************************************!*\
  !*** ./src/app/services/remision.service.ts ***!
  \**********************************************/
/*! exports provided: RemisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionService", function() { return RemisionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RemisionService {
    constructor(client) {
        this.client = client;
    }
}
RemisionService.ɵfac = function RemisionService_Factory(t) { return new (t || RemisionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RemisionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RemisionService, factory: RemisionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dn/9":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-truncate/__ivy_ngcc__/dist/truncate.module.js ***!
  \************************************************************************/
/*! exports provided: TRUNCATE_PIPES, TruncateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUNCATE_PIPES", function() { return TRUNCATE_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateModule", function() { return TruncateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _truncate_characters_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./truncate-characters.pipe */ "6t2B");
/* harmony import */ var _truncate_words_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate-words.pipe */ "wEAr");




var TRUNCATE_PIPES = [_truncate_characters_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncateCharactersPipe"], _truncate_words_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncateWordsPipe"]];
var TruncateModule = (function () {
    function TruncateModule() {
    }
    /** @nocollapse */
    TruncateModule.ctorParameters = function () { return []; };
TruncateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TruncateModule });
TruncateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TruncateModule_Factory(t) { return new (t || TruncateModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TruncateModule, { declarations: [_truncate_characters_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncateCharactersPipe"], _truncate_words_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncateWordsPipe"]], exports: [_truncate_characters_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncateCharactersPipe"], _truncate_words_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncateWordsPipe"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [TRUNCATE_PIPES],
                exports: [TRUNCATE_PIPES]
            }]
    }], function () { return []; }, null); })();
    return TruncateModule;
}());


//# sourceMappingURL=truncate.module.js.map

/***/ }),

/***/ "igTV":
/*!**************************************************************!*\
  !*** ./src/app/pages/inventario/remision/remision.module.ts ***!
  \**************************************************************/
/*! exports provided: MY_FORMATS, RemisionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionModule", function() { return RemisionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _remisiones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remisiones.component */ "BS92");
/* harmony import */ var _remision_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remision.routing */ "Fqfl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var mydaterangepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mydaterangepicker */ "1B6z");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _remisioncrearnuevo_remisioncrearnuevo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./remisioncrearnuevo/remisioncrearnuevo.component */ "TuZz");
/* harmony import */ var _remisioncrearnuevo_productosremisionnuevo_productosremisionnuevo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./remisioncrearnuevo/productosremisionnuevo/productosremisionnuevo.component */ "yC5N");
/* harmony import */ var _modalproductoremisionnuevo_modalproductoremisionnuevo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modalproductoremisionnuevo/modalproductoremisionnuevo.component */ "sj42");
/* harmony import */ var _modalcambiarproductossimilarnuevo_modalcambiarproductossimilarnuevo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modalcambiarproductossimilarnuevo/modalcambiarproductossimilarnuevo.component */ "6avl");
/* harmony import */ var ng2_truncate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-truncate */ "o2tx");
/* harmony import */ var _remisioneditar_remisioneditar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./remisioneditar/remisioneditar.component */ "yiTy");
/* harmony import */ var _remision_remision_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./remision/remision.component */ "wjNG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "/o1g");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! saturn-datepicker */ "nJc8");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material-moment-adapter */ "ftoJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");





























const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};
class RemisionModule {
}
RemisionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: RemisionModule });
RemisionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ factory: function RemisionModule_Factory(t) { return new (t || RemisionModule)(); }, providers: [
        {
            provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__["DateAdapter"],
            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_25__["MomentDateAdapter"],
            deps: [saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__["MAT_DATE_LOCALE"]],
        },
        { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _remision_routing__WEBPACK_IMPORTED_MODULE_2__["RemisionRoutes"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            mydaterangepicker__WEBPACK_IMPORTED_MODULE_5__["MyDateRangePickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTypeaheadModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SweetAlert2Module"].forRoot(),
            ng2_truncate__WEBPACK_IMPORTED_MODULE_15__["TruncateModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
            saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__["SatDatepickerModule"],
            saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__["SatNativeDateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](RemisionModule, { declarations: [_remisiones_component__WEBPACK_IMPORTED_MODULE_1__["RemisionesComponent"],
        _remision_remision_component__WEBPACK_IMPORTED_MODULE_17__["RemisionComponent"],
        _remisioneditar_remisioneditar_component__WEBPACK_IMPORTED_MODULE_16__["RemisioneditarComponent"],
        _remisioncrearnuevo_remisioncrearnuevo_component__WEBPACK_IMPORTED_MODULE_11__["RemisioncrearnuevoComponent"],
        _remisioncrearnuevo_productosremisionnuevo_productosremisionnuevo_component__WEBPACK_IMPORTED_MODULE_12__["ProductosremisionnuevoComponent"],
        _modalproductoremisionnuevo_modalproductoremisionnuevo_component__WEBPACK_IMPORTED_MODULE_13__["ModalproductoremisionnuevoComponent"],
        _modalcambiarproductossimilarnuevo_modalcambiarproductossimilarnuevo_component__WEBPACK_IMPORTED_MODULE_14__["ModalcambiarproductossimilarnuevoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _remision_routing__WEBPACK_IMPORTED_MODULE_2__["RemisionRoutes"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
        mydaterangepicker__WEBPACK_IMPORTED_MODULE_5__["MyDateRangePickerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTypeaheadModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
        src_app_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_4__["SweetAlert2Module"], ng2_truncate__WEBPACK_IMPORTED_MODULE_15__["TruncateModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__["SatDatepickerModule"],
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_24__["SatNativeDateModule"]] }); })();


/***/ }),

/***/ "m7Qk":
/*!****************************************************************!*\
  !*** ./src/app/pages/inventario/remision/RemisonModelNuevo.ts ***!
  \****************************************************************/
/*! exports provided: RemisionModelNuevo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionModelNuevo", function() { return RemisionModelNuevo; });
class RemisionModelNuevo {
    constructor(funcionarioCrea) {
        this.Tipo = 'Interna';
        this.Prioridad = '1';
        this.Meses = '4';
        this.Modelo = 'Bodega-Bodega';
        this.Nombre_Destino = '';
        this.Nombre_Origen = '';
        this.Identificacion_Funcionario = 0;
        this.Observaciones = '';
        this.Tipo_Origen = 'Bodega';
        this.Tipo_Destino = 'Punto_Dispensacion';
        this.Id_Origen = 0;
        this.Id_Destino = 0;
        this.Id_Contrato = 0;
        this.Estado = 'Pendiente';
        this.Estado_Alistamiento = '0';
        this.Tipo_Pago = 'Credito';
        this.Fecha = '';
        this.Codigo = '';
        this.Tipo_Lista = '';
        this.Id_Lista = '';
        this.Id_Factura = '';
        this.Peso_Remision = '';
        this.Codigo_Qr = '';
        this.Costo_Remision = 0;
        this.Tipo_Bodega = '';
        this.Fecha_Anulacion = '';
        this.Funcionario_Anula = '';
        this.Fase_1 = '';
        this.Fase_2 = '';
        this.Guia = '';
        this.Empresa_Envio = '';
        this.Subtotal_Remision = 0;
        this.Descuento_Remision = 0;
        this.Impuesto_Remision = 0;
        this.Orden_Compra = '';
        this.Inicio_Fase1 = '';
        this.Fin_Fase1 = '';
        this.Inicio_Fase2 = '';
        this.Fin_Fase2 = '';
        this.Entrega_Pendientes = 'No';
        this.identificacionFuncionarioCrea = funcionarioCrea;
        let Grupo = {};
        Grupo.Id_Grupo = 0;
        Grupo.Nombre_Grupo = '';
        Grupo.Fecha_Vencimiento = '';
        Grupo.Presentacion = '';
        this.Grupo = Grupo;
    }
    set identificacionFuncionarioCrea(value) {
        this.Identificacion_Funcionario = value;
    }
    setGrupo(grupo) {
        this.Grupo.Id_Grupo = grupo.Id_Grupo;
        this.Grupo.Fecha_Vencimiento = grupo.Fecha_Vencimiento;
        this.Grupo.Nombre_Grupo = grupo.Nombre_Grupo;
        this.Grupo.Presentacion = grupo.Presentacion;
    }
}


/***/ }),

/***/ "o2tx":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-truncate/__ivy_ngcc__/dist/index.js ***!
  \**************************************************************/
/*! exports provided: TruncateModule, TRUNCATE_PIPES, TruncateCharactersPipe, TruncateWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _truncate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncate.module */ "dn/9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncateModule", function() { return _truncate_module__WEBPACK_IMPORTED_MODULE_0__["TruncateModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRUNCATE_PIPES", function() { return _truncate_module__WEBPACK_IMPORTED_MODULE_0__["TRUNCATE_PIPES"]; });

/* harmony import */ var _truncate_characters_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./truncate-characters.pipe */ "6t2B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncateCharactersPipe", function() { return _truncate_characters_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncateCharactersPipe"]; });

/* harmony import */ var _truncate_words_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate-words.pipe */ "wEAr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncateWordsPipe", function() { return _truncate_words_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncateWordsPipe"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "sj42":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/inventario/remision/modalproductoremisionnuevo/modalproductoremisionnuevo.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ModalproductoremisionnuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalproductoremisionnuevoComponent", function() { return ModalproductoremisionnuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ProductoCargarRemision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProductoCargarRemision */ "6vIF");
/* harmony import */ var src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils/functionsUtils */ "eivR");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/general.service */ "FQVY");
/* harmony import */ var src_app_pages_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/producto.service */ "GPUG");
/* harmony import */ var src_app_services_dispensacion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/dispensacion.service */ "Lm6y");
/* harmony import */ var src_app_services_remisionnuevo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/remisionnuevo.service */ "5KJW");
/* harmony import */ var _components_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/modal-basic/modal-basic.component */ "xoca");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");















const _c0 = ["ModalProductosRemision"];
const _c1 = ["filtroNombre"];
function ModalproductoremisionnuevoComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModalproductoremisionnuevoComponent_div_10_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.ConsultaFiltrada(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sin Inventario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalproductoremisionnuevoComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cant. Pend.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalproductoremisionnuevoComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalproductoremisionnuevoComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "F. Venc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalproductoremisionnuevoComponent_input_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalproductoremisionnuevoComponent_input_35_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.Filtros.lab_com = $event; })("change", function ModalproductoremisionnuevoComponent_input_35_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.ConsultaFiltrada(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.Filtros.lab_com);
} }
function ModalproductoremisionnuevoComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function ModalproductoremisionnuevoComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function ModalproductoremisionnuevoComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function ModalproductoremisionnuevoComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cargando productos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r10.TCols);
} }
function ModalproductoremisionnuevoComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No hay datos para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r11.TCols);
} }
function ModalproductoremisionnuevoComponent_tbody_46_tr_1_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r19.Cantidad_Pendiente, " ");
} }
function ModalproductoremisionnuevoComponent_tbody_46_tr_1_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r19.Lote, " ");
} }
function ModalproductoremisionnuevoComponent_tbody_46_tr_1_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r19.Fecha_Vencimiento, " ");
} }
const _c2 = function (a0) { return { "bg-selected": a0 }; };
function ModalproductoremisionnuevoComponent_tbody_46_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalproductoremisionnuevoComponent_tbody_46_tr_1_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const p_r19 = ctx.$implicit; const i_r20 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.SeleccionarProducto(p_r19.Seleccionado, p_r19.Id_Producto, p_r19, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModalproductoremisionnuevoComponent_tbody_46_tr_1_td_17_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ModalproductoremisionnuevoComponent_tbody_46_tr_1_td_18_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ModalproductoremisionnuevoComponent_tbody_46_tr_1_td_19_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, p_r19.Seleccionado == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r19.Nombre_Comercial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r19.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r19.Laboratorio_Comercial, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", p_r19.Embalaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r19.Categoria, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r19.Codigo_Cum, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r19.Cantidad_Disponible, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.Pendiente);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.Tipo != "Remision");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.Tipo != "Remision");
} }
function ModalproductoremisionnuevoComponent_tbody_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalproductoremisionnuevoComponent_tbody_46_tr_1_Template, 20, 13, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.ListaProductos);
} }
class ModalproductoremisionnuevoComponent {
    constructor(generalService, _swalService, http, 
    // private _toastService: ToastService,
    _productoService, _dispensacion, _remisionNuevoService) {
        this.generalService = generalService;
        this._swalService = _swalService;
        this.http = http;
        this._productoService = _productoService;
        this._dispensacion = _dispensacion;
        this._remisionNuevoService = _remisionNuevoService;
        this.AbrirModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.Pendiente = false;
        this.AgregarProductos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.LimpiarCodBarras = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ListaProductos = [];
        this.ListaAgregados = [];
        this.Id_Inventarios = [];
        this.ProductosAgregar = [];
        this.ProductosExcluir = [];
        this.ProductosEntregasDobles = []; //Esta lista solo se usa para validar entregas dobles en dispensacion
        this.SelectedProducts = 0;
        this.TCols = 7;
        this.Tipo = '';
        this.InformacionPunto = null;
        this.Nit_Eps = '';
        this.Codigo_Barras = '';
        this.Id_Tipo_Servicio = '';
        this.Id_Punto = localStorage.getItem("Punto");
        this.Filtros = {
            nombre: '',
            cum: '',
            lab_com: '',
            Inv: '',
        };
        this.Cargando = false;
    }
    ngOnInit() {
        this.openSubscription = this.AbrirModal.subscribe((data) => {
            // console.log("modal");
            // console.log(data);
            this.Tipo = data.tipo;
            if (data.tipo == 'Remision') {
                this.RemisionModel = data.remision_model;
                if (data.pendientes.length > 0) {
                    this.ListaProductos = data.pendientes;
                    this.Pendiente = true;
                    this.TCols = 8;
                }
                else {
                    this.ListaProductos = [];
                    this.Pendiente = false;
                    this.TCols = 7;
                }
            }
            else {
                this.ProductosEntregasDobles = data.productos_entregados;
                this.InformacionPunto = data.punto_dispensacion;
                this.Nit_Eps = data.nit_eps;
                this.Id_Tipo_Servicio = data.tipo_servicio;
                this.Codigo_Barras = data.cod_barras;
                this.ListaProductos = [];
                this.Pendiente = false;
                this.TCols = 8;
                if (data.cod_barras != '') {
                    $("#sin-inventario").prop('checked', false);
                    setTimeout(() => {
                        this.ConsultaFiltrada();
                    }, 300);
                }
            }
            this.ListaAgregados = data.agregados;
            this.Id_Inventarios = data.inventarios;
            this.ModalProductosRemision.show();
            setTimeout(() => {
                this.nameFilter.nativeElement.focus();
            }, 100);
        });
    }
    ngOnDestroy() {
        if (this.openSubscription != undefined) {
            this.openSubscription.unsubscribe();
        }
        this.CerrarModal();
    }
    ngOnChanges(changes) {
        // if (changes.RemisionModel.previousValue != undefined) {
        //   this.RemisionModel = changes.RemisionModel.currentValue;
        // }
    }
    ConsultaFiltrada() {
        this.AsignarValorSinInventario();
        var params = this.SetFiltros();
        this.Cargando = true;
        if (this.Tipo == 'Remision') {
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ruta + 'php/remision_nuevo/get_productos_inventario.php', { params: params }).subscribe((data) => {
                this.ListaProductos = data;
                this.Cargando = false;
            });
        }
        else if (this.Tipo == 'Dispensacion') {
            this._dispensacion.GetListaProductosInventario(params).subscribe((data) => {
                this.ListaProductos = data.Productos;
                this.Cargando = false;
            });
        }
    }
    SetFiltros() {
        let params = {};
        if (this.Tipo == 'Remision') {
            params.modelo = this.RemisionModel.Modelo;
            params.tiporemision = this.RemisionModel.Tipo;
            params.id_origen = this.RemisionModel.Id_Origen;
            params.mes = this.RemisionModel.Meses;
            if (this.RemisionModel.Grupo.Id_Grupo) {
                params.grupo = JSON.stringify(this.RemisionModel.Grupo);
            }
            if (this.RemisionModel.Tipo == 'Cliente') {
                params.id_destino = this.RemisionModel.Id_Destino;
                if (this.RemisionModel.Id_Destino == 0 || this.RemisionModel.Id_Destino == undefined) {
                    this._swalService.ShowMessage(['error', 'Sin Destino Seleccionado', 'Debe seleccionar un destino para realizaar la busqueda!']);
                    return;
                }
            }
            else if (this.RemisionModel.Tipo == 'Contrato') {
                params.id_destino = this.RemisionModel.Id_Destino;
                if (this.RemisionModel.Id_Destino == 0 || this.RemisionModel.Id_Destino == undefined) {
                    this._swalService.ShowMessage(['error', 'Sin Destino Seleccionado', 'Debe seleccionar un destino para realizaar la busqueda!']);
                    return;
                }
            }
        }
        else if (this.Tipo == 'Dispensacion') {
            params.id_punto = this.Id_Punto;
            params.id_tipo_servicio = this.Id_Tipo_Servicio;
            params.eps = this.Nit_Eps;
            params.cod_barras = this.Codigo_Barras;
        }
        if (this.Filtros.nombre.trim() != "") {
            params.nombre = this.Filtros.nombre;
        }
        if (this.Filtros.cum.trim() != "") {
            params.cum = this.Filtros.cum;
        }
        if (this.Filtros.lab_com.trim() != "") {
            params.lab_com = this.Filtros.lab_com;
        }
        if (this.Filtros.Inv != "") {
            params.inv = this.Filtros.Inv;
        }
        return params;
    }
    SeleccionarProducto(seleccionado, idProducto, producto, posProducto) {
        let inventario = producto.Id_Inventario_Nuevo;
        if (seleccionado == '0') {
            if (!this.VerificarAgregados(idProducto, inventario)) {
                return;
            }
            else {
                let prd = {};
                producto.Lotes_Visuales = new Array();
                if (this.Tipo == 'Dispensacion') {
                    let p = {
                        id_tipo_servicio: this.Id_Tipo_Servicio,
                        eps: this.Nit_Eps,
                        id_producto: idProducto,
                        id_punto: this.Id_Punto
                    };
                    this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ruta + 'php/tablero_dispensacion/validar_producto.php', { params: p }).subscribe((data) => {
                        if (data.codigo == 'success') {
                            producto.Costo = data.Costo;
                            let validacion = this.generalService.ValidarEntregasDobles(this.InformacionPunto, this.ProductosEntregasDobles, idProducto);
                            if (!validacion.validar) {
                                this._swalService.ShowMessage(['warning', 'Alerta', 'Esta producto ya fue entregado este mes en la dis ' + validacion.codigo + ' en la fecha ' + validacion.fecha + '!']);
                                return;
                            }
                            else {
                                prd = this.SetearProductoDispensacion(producto);
                            }
                            if (!src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_3__["functionsUtils"].IsObjEmpty(prd)) {
                                this.ProductosAgregar.push(prd);
                            }
                            this.ListaAgregados.push(idProducto);
                            this.Id_Inventarios.push(inventario);
                            this.ListaProductos[posProducto].Seleccionado = '1';
                        }
                        else {
                            this._swalService.ShowMessage(data);
                        }
                    });
                }
                else {
                    prd = this.SetearProducto(producto);
                    if (!src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_3__["functionsUtils"].IsObjEmpty(prd)) {
                        this.ProductosAgregar.push(prd);
                    }
                    this.ListaProductos[posProducto].Seleccionado = '1';
                }
            }
        }
        else {
            let index = this.ProductosAgregar.findIndex(x => x.Id_Producto == idProducto);
            this.ProductosAgregar.splice(index, 1);
            let inv = this.Id_Inventarios.findIndex(x => x == inventario);
            this.Id_Inventarios.splice(inv, 1);
            this.ListaProductos[posProducto].Seleccionado = '0';
        }
    }
    VerificarAgregados(idProducto, idInventario) {
        let exist = this.ListaAgregados.filter(x => x == idProducto);
        if (this.Tipo == 'Remision') {
            if (exist.length > 0) {
                this._swalService.ShowMessage(['warning', 'Alerta', 'Ya este producto ha sido agregado a la lista!']);
                return false;
            }
            else {
                return true;
            }
        }
        else {
            let exit_id = this.Id_Inventarios.filter(x => x == idInventario);
            if (exist.length > 0 && exit_id.length > 0) {
                this._swalService.ShowMessage(['warning', 'Alerta', 'Ya este producto ha sido agregado a la lista!']);
                return false;
            }
            else {
                return true;
            }
        }
    }
    SetearProductoDispensacion(p) {
        let producto = {
            Id_Producto: p.Id_Producto,
            Nombre: p.Nombre,
            Nombre_Comercial: p.Nombre_Comercial,
            Lote: p.Lote,
            Fecha_Vencimiento: p.Fecha_Vencimiento,
            Codigo_Cum: p.Codigo_Cum,
            Cantidad_Disponible: p.Cantidad_Disponible,
            Cantidad_Formulada: null,
            Cantidad_Entregada: null,
            Cantidad_Minima: p.Cantidad_Minima,
            Costo: p.Costo,
            Id_Inventario_Nuevo: p.Id_Inventario_Nuevo
        };
        return producto;
    }
    AgregarProductosTabla() {
        if (this.ProductosAgregar.length == 0) {
            this._swalService.ShowMessage(['warning', 'Alerta', 'Debe escoger un producto de la lista primero!']);
            return;
        }
        else {
            this.AgregarProductos.emit(this.ProductosAgregar);
            this.CerrarModal();
        }
    }
    SetearProducto(producto) {
        let product = new _ProductoCargarRemision__WEBPACK_IMPORTED_MODULE_2__["ProductoCargarRemision"]();
        for (var key in producto) {
            if (key != 'Codigo_Cum' && key != 'Seleccionado' && key != 'Cantidad_Requerida') {
                if (key == 'Lotes') {
                    product[key] = this.SetearLotes(producto[key]);
                }
                else if (key == 'Cantidad') {
                    if (producto[key] == '') {
                        product[key] = null;
                    }
                    else {
                        product[key] = parseInt(producto[key]);
                    }
                }
                else {
                    if (!isNaN(parseInt(producto[key]))) {
                        product[key] = producto[key];
                    }
                    else {
                        product[key] = producto[key];
                    }
                }
            }
            else {
                product[key] = producto[key];
            }
        }
        return product;
    }
    SetearLotes(lotes) {
        let lotes_nuevos = new Array();
        lotes.forEach(lote => {
            let lote_nuevo = {};
            for (var key in lote) {
                if (key != 'Fecha_Vencimiento' && key != 'Lote') {
                    lote_nuevo[key] = parseInt(lote[key]);
                }
                else {
                    lote_nuevo[key] = lote[key];
                }
            }
            lotes_nuevos.push(lote_nuevo);
        });
        return lotes_nuevos;
    }
    AsignarValorSinInventario() {
        var check = $("#sin-inventario").is(':checked');
        this.Filtros.Inv = check;
    }
    VerificarSeleccionado() {
        if (this._productoAgregar == null) {
            return true;
        }
        else {
            return false;
        }
    }
    LimpiarModelo() {
        this.ListaProductos = [];
        this.ListaAgregados = [];
        this.Id_Inventarios = [];
        this.ProductosAgregar = [];
        this.Filtros = {
            nombre: '',
            cum: '',
            lab_com: '',
            Inv: '',
        };
        this.Codigo_Barras = '';
        //this._productoAgregar = null;
    }
    CerrarModal() {
        this.ModalProductosRemision.hide();
        this.LimpiarModelo();
        this.LimpiarCodBarras.emit();
    }
}
ModalproductoremisionnuevoComponent.ɵfac = function ModalproductoremisionnuevoComponent_Factory(t) { return new (t || ModalproductoremisionnuevoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dispensacion_service__WEBPACK_IMPORTED_MODULE_9__["DispensacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_remisionnuevo_service__WEBPACK_IMPORTED_MODULE_10__["RemisionnuevoService"])); };
ModalproductoremisionnuevoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalproductoremisionnuevoComponent, selectors: [["app-modalproductoremisionnuevo"]], viewQuery: function ModalproductoremisionnuevoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ModalProductosRemision = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nameFilter = _t.first);
    } }, inputs: { AbrirModal: "AbrirModal", Pendiente: "Pendiente", RemisionModel: "RemisionModel" }, outputs: { AgregarProductos: "AgregarProductos", LimpiarCodBarras: "LimpiarCodBarras" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 53, vars: 15, consts: [[3, "dialogClass"], ["ModalProductosRemision", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [1, "form-row"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-12"], [1, "table", "table-striped", 2, "min-height", "300px"], [2, "width", "5%"], [2, "width", "10%"], [2, "width", "15%"], [4, "ngIf"], ["style", "width:10%; ", 4, "ngIf"], ["style", "width:10%;", 4, "ngIf"], [1, "tabla-filtro"], ["type", "text", "placeholder", "Filtro Nombre", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange", "change"], ["filtroNombre", ""], ["type", "text", "class", "form-control input-sm", "placeholder", "Filtro Lab Comercial", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], [1, "tabla-filtro", 2, "width", "150px"], ["type", "text", "placeholder", "Filtro Cum Comercial", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange", "change"], ["class", "tabla-filtro", 4, "ngIf"], [1, "app-modal-footer"], [1, "text-right"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-rounded", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-rounded", "btn-sm", 3, "disabled", "click"], [1, "col-md-2"], ["type", "checkbox", "checked", "", "name", "sin-inventario", "id", "sin-inventario", 3, "change"], ["type", "text", "placeholder", "Filtro Lab Comercial", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange", "change"], [1, "text-center"], [1, "fa", "fa-spinner", "fa-pulse", "fa-5x", "fa-fw"], [1, "sr-only"], [1, "fa", "fa-exclamation-circle", "fa-5x"], ["style", "cursor:pointer;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "ngClass", "click"], [1, "text-muted", 2, "font-size", "9px"], ["placement", "left", 1, "fa", "fa-archive", 3, "ngbTooltip"]], template: function ModalproductoremisionnuevoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal-basic", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Agregar Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalproductoremisionnuevoComponent_Template_button_click_5_listener() { return ctx.CerrarModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalproductoremisionnuevoComponent_div_10_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lab. Com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Emb.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cant. Disp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ModalproductoremisionnuevoComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ModalproductoremisionnuevoComponent_th_28_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ModalproductoremisionnuevoComponent_th_29_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalproductoremisionnuevoComponent_Template_input_ngModelChange_32_listener($event) { return ctx.Filtros.nombre = $event; })("change", function ModalproductoremisionnuevoComponent_Template_input_change_32_listener() { return ctx.ConsultaFiltrada(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ModalproductoremisionnuevoComponent_input_35_Template, 1, 1, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalproductoremisionnuevoComponent_Template_input_ngModelChange_39_listener($event) { return ctx.Filtros.cum = $event; })("change", function ModalproductoremisionnuevoComponent_Template_input_change_39_listener() { return ctx.ConsultaFiltrada(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ModalproductoremisionnuevoComponent_th_41_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ModalproductoremisionnuevoComponent_th_42_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ModalproductoremisionnuevoComponent_th_43_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ModalproductoremisionnuevoComponent_tr_44_Template, 7, 1, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ModalproductoremisionnuevoComponent_tr_45_Template, 5, 1, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ModalproductoremisionnuevoComponent_tbody_46_Template, 2, 1, "tbody", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalproductoremisionnuevoComponent_Template_button_click_49_listener() { return ctx.CerrarModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cerrar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalproductoremisionnuevoComponent_Template_button_click_51_listener() { return ctx.AgregarProductosTabla(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Agregar y cerrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogClass", "modal-lg modal-full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Tipo != "Remision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Pendiente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Tipo != "Remision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Tipo != "Remision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Filtros.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Tipo == "Dispensacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Filtros.cum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Pendiente);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Tipo != "Remision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Tipo != "Remision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ListaProductos.length == 0 && !ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.ProductosAgregar.length == 0);
    } }, directives: [_components_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_11__["ModalBasicComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"]], styles: [".ver[_ngcontent-%COMP%] {\n  background: #efefef !important;\n  border-radius: 5px 5px !important;\n  word-wrap: break-word;\n  font-size: 11px !important;\n}\n.ver[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n.blur[_ngcontent-%COMP%] {\n  text-shadow: 1px 1px 10px black;\n  color: transparent !important;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.bg-selected[_ngcontent-%COMP%] {\n  background-color: rgba(48, 238, 15, 0.4) !important;\n}\n.bg-alert[_ngcontent-%COMP%] {\n  background-color: rgba(255, 166, 32, 0.692) !important;\n}\n.bg-fondo[_ngcontent-%COMP%] {\n  background-color: #d7d7d7 !important;\n  font-weight: bold;\n}\n.noblur[_ngcontent-%COMP%] {\n  text-shadow: none;\n  color: #222 !important;\n}\n.habilitado[_ngcontent-%COMP%] {\n  text-shadow: none;\n  color: #222;\n  background: #4ddec1;\n}\n.habilitado2[_ngcontent-%COMP%] {\n  text-shadow: none;\n  color: #222;\n  background: #faed77;\n}\n.tabla[_ngcontent-%COMP%] {\n  font-size: 11px;\n  word-wrap: break-word;\n}\n.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: normal;\n  padding: 3px !important;\n  font-size: 9px;\n  line-height: 10px;\n}\n.container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3 !important;\n  cursor: not-allowed;\n}\n.codigos[_ngcontent-%COMP%] {\n  background: none !important;\n  border: 0 !important;\n  padding: 3px !important;\n  text-align: center !important;\n  font-size: 12px !important;\n}\n.swal2-confirm[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.peso[_ngcontent-%COMP%] {\n  background: none;\n  border: 0;\n  text-align: center;\n  padding: 5px;\n  font-size: 30px !important;\n  box-shadow: none;\n}\n.input-flotante[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  position: fixed;\n  display: scroll;\n  left: 0;\n  \n  top: 50%;\n  z-index: 999;\n  margin-left: -70px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  word-break: normal !important;\n}\n.separar[_ngcontent-%COMP%] {\n  outline: 3px solid #025e7a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1vZGFscHJvZHVjdG9yZW1pc2lvbm51ZXZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUFJO0VBQ0ksMEJBQUE7QUFFUjtBQUVBO0VBQ0ksK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksbURBQUE7QUFDSjtBQUNBO0VBQ0ksc0RBQUE7QUFFSjtBQUFBO0VBQ0ksb0NBQUE7RUFDQSxpQkFBQTtBQUdKO0FBQUE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FBR0o7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0o7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0o7QUFBQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUdKO0FBRkk7O0VBRUksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlSO0FBQ0k7Ozs7OztFQU1JLDBCQUFBO0FBRVI7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVBO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVBOztFQUVJLDZCQUFBO0FBQ0o7QUFFQTtFQUNJLDBCQUFBO0FBQ0oiLCJmaWxlIjoibW9kYWxwcm9kdWN0b3JlbWlzaW9ubnVldm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggIWltcG9ydGFudDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmx1ciB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYigwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmJnLXNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDgsIDIzOCwgMTUsIDAuNCkgIWltcG9ydGFudDtcclxufVxyXG4uYmctYWxlcnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMzIsIDAuNjkyKSAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1mb25kbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubm9ibHVyIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhhYmlsaXRhZG8ge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGJhY2tncm91bmQ6ICM0ZGRlYzE7XHJcbn1cclxuXHJcbi5oYWJpbGl0YWRvMiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZWQ3NztcclxufVxyXG5cclxuLnRhYmxhIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaDYsXHJcbiAgICBoNSxcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoMixcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uY29kaWdvcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN3YWwyLWNvbmZpcm0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucGVzbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZmxvdGFudGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogc2Nyb2xsO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC8qIG1hcmdpbjogMDsgKi9cclxuICAgIHRvcDogNTAlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xyXG59XHJcblxyXG4udGFibGUgdGgsXHJcbi50YWJsZSB0ZCB7XHJcbiAgICB3b3JkLWJyZWFrOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlcGFyYXIge1xyXG4gICAgb3V0bGluZTogM3B4IHNvbGlkIHJnYigyLCA5NCwgMTIyKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "wEAr":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-truncate/__ivy_ngcc__/dist/truncate-words.pipe.js ***!
  \****************************************************************************/
/*! exports provided: TruncateWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateWordsPipe", function() { return TruncateWordsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TruncateWordsPipe = (function () {
    function TruncateWordsPipe() {
    }
    TruncateWordsPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        var result = value || '';
        if (value) {
            var words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    };
    /** @nocollapse */
    TruncateWordsPipe.ctorParameters = function () { return []; };
TruncateWordsPipe.ɵfac = function TruncateWordsPipe_Factory(t) { return new (t || TruncateWordsPipe)(); };
TruncateWordsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "words", type: TruncateWordsPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateWordsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'words'
            }]
    }], function () { return []; }, null); })();
    return TruncateWordsPipe;
}());


//# sourceMappingURL=truncate-words.pipe.js.map

/***/ }),

/***/ "wjNG":
/*!**************************************************************************!*\
  !*** ./src/app/pages/inventario/remision/remision/remision.component.ts ***!
  \**************************************************************************/
/*! exports provided: RemisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisionComponent", function() { return RemisionComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/pipes/image.pipe */ "0gLu");







function RemisionComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Actividad_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate7"]("badge ", Actividad_r18.Estado == "Creacion" ? "badge-info" : "", " ", Actividad_r18.Estado == "Edicion" ? "badge-warning" : "", "", Actividad_r18.Estado == "Anulada" ? "badge-danger" : "", "", Actividad_r18.Estado == "Alistamiento" || Actividad_r18.Estado == "Fase 1" || Actividad_r18.Estado == "Fase 2" ? "badge-dark" : "", "", Actividad_r18.Estado == "Enviada" ? "badge-success " : "", " ", Actividad_r18.Estado == "Recibida" ? "badge-light " : "", "", Actividad_r18.Estado == "Facturada" ? "badge-secondary " : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Actividad_r18.Estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 13, Actividad_r18.Imagen, "users"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Actividad_r18.Detalles, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Actividad_r18.Fecha, "");
} }
const _c0 = function (a1) { return ["/facturasventasver", a1]; };
function RemisionComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ver Factura ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r1.remision.Id_Factura));
} }
function RemisionComponent_img_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 41);
} }
function RemisionComponent_strong_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.origen.Nombre);
} }
function RemisionComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Direcci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.origen.Direccion, " ");
} }
function RemisionComponent_strong_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.destino.Nombre, "");
} }
function RemisionComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Direcci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r6.destino.Direccion, " ");
} }
function RemisionComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tel\u00E9fono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.origen.Telefono, " ");
} }
function RemisionComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Correo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.origen.Correo, " ");
} }
function RemisionComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Tel\u00E9fono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r9.destino.Celular, " ");
} }
function RemisionComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Correo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r10.destino.Correo, " ");
} }
function RemisionComponent_th_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RemisionComponent_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Descuento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RemisionComponent_th_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RemisionComponent_th_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RemisionComponent_tr_89_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.Precio, " ");
} }
function RemisionComponent_tr_89_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.Descuento, " ");
} }
function RemisionComponent_tr_89_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.Impuesto, " ");
} }
function RemisionComponent_tr_89_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.Subtotal, " ");
} }
function RemisionComponent_tr_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RemisionComponent_tr_89_td_9_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RemisionComponent_tr_89_td_10_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RemisionComponent_tr_89_td_11_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RemisionComponent_tr_89_td_12_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "fila", i_r20, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.Nombre_Producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.Lote);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.Fecha_Vencimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.Cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.remision.Tipo == "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.remision.Tipo == "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.remision.Tipo == "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.remision.Tipo == "Cliente");
} }
function RemisionComponent_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " No existen datos ");
} }
class RemisionComponent {
    constructor(route, http, _user) {
        this.route = route;
        this.http = http;
        this._user = _user;
        this.remision = {};
        this.productos = [];
        this.origen = [];
        this.destino = [];
        this.Actividades = [];
        this.fecha = new Date();
        this.reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue.Cantidad_Formulada);
        this.reducer2 = (accumulator, currentValue) => accumulator + parseInt(currentValue.Cantidad_Entregada);
        this.cant_formulada = 0;
        this.cant_entregada = 0;
        this.cant_diferencia = 0;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"];
    }
    ngOnInit() {
        this.userF = this._user.user;
        this.id = this.route.snapshot.params['id'];
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/remision/remision.php', {
            params: { id: this.id },
        })
            .subscribe((data) => {
            this.remision = data.Remision;
            this.origen = data.Origen;
            this.destino = data.Destino;
            console.log(this.destino);
            console.log(this.origen);
        });
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/remision/productos_remision.php', {
            params: { id: this.id },
        })
            .subscribe((data) => {
            this.productos = data;
        });
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/remision/actividades_remision.php', {
            params: { id: this.id },
        })
            .subscribe((data) => {
            this.Actividades = data;
        });
    }
    action(act) {
        if (act == 'imprimir') {
            window.open(this.env.ruta +
                '/php/archivos/descarga_pdf.php?tipo=Remision&id=' +
                this.id, '_blank');
        }
        else if (act == 'imprimirconprecio') {
            window.open(this.env.ruta +
                '/php/archivos/descarga_pdf_price.php?tipo=Remision&id=' +
                this.id);
        }
    }
}
RemisionComponent.ɵfac = function RemisionComponent_Factory(t) { return new (t || RemisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
RemisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RemisionComponent, selectors: [["app-remision"]], decls: 100, vars: 39, consts: [[1, "row"], [1, "col-md-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "text-primary"], [1, "line"], [1, "list-group", "list-group-flush"], ["class", "list-group-item px-0", 4, "ngFor", "ngForOf"], ["class", "btn btn-block btn-info", 3, "routerLink", 4, "ngIf"], [1, "col-md-8"], [1, "card-title", "d-flex", "justify-content-between"], [1, "card", "m-0", "p-0", "border-0", "shadow-none"], [1, "card-horizontal"], [1, "img-square-wrapper"], ["alt", "", "height", "45", 3, "src"], [1, "card-body", "p-0", "m-0"], [1, "card-text", 2, "font-size", "x-small"], [1, "text-right"], [1, "badge", "badge-primary"], [1, "col-sm-5", 2, "padding-left", "0"], ["src", "assets/images/sinqr.png", "class", "img-fluid", "style", "margin-top: -20px", 4, "ngIf"], [1, "table", "table-bordered", "table-responsive-sm", "table-sm", 2, "font-size", "small"], [1, "bg-light"], [1, "text-center", "text-uppercase"], ["colspan", "2"], [1, "align-middle"], [4, "ngIf", "ngIfElse"], [1, "card", "bg-light"], ["class", "align-middle", 4, "ngIf"], ["class", "text-center", 3, "id", 4, "ngFor", "ngForOf"], ["role", "group", "aria-label", "Button group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-print"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["noData", ""], [1, "list-group-item", "px-0"], ["onerror", "this.src='../../../../assets/images/noprofile.png'", "alt", "", 1, "img-thumbnail", "rounded-circle", "header-profile-user", "img-fluid", 3, "src"], [1, "text-muted"], [1, "btn", "btn-block", "btn-info", 3, "routerLink"], [1, "fa", "fa-file"], ["src", "assets/images/sinqr.png", 1, "img-fluid", 2, "margin-top", "-20px"], [1, "text-center", 3, "id"]], template: function RemisionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Seguimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RemisionComponent_li_9_Template, 12, 16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RemisionComponent_button_10_Template, 3, 3, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, RemisionComponent_img_39_Template, 1, 0, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "thead", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Origen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Destino");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, RemisionComponent_strong_50_Template, 2, 1, "strong", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, RemisionComponent_span_52_Template, 4, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, RemisionComponent_strong_54_Template, 2, 1, "strong", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, RemisionComponent_span_56_Template, 4, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, RemisionComponent_span_59_Template, 4, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, RemisionComponent_span_61_Template, 4, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, RemisionComponent_span_63_Template, 4, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, RemisionComponent_span_65_Template, 4, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "thead", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Fecha Vencimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, RemisionComponent_th_84_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, RemisionComponent_th_85_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, RemisionComponent_th_86_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, RemisionComponent_th_87_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, RemisionComponent_tr_89_Template, 13, 9, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RemisionComponent_Template_button_click_92_listener() { return ctx.action("imprimir"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Imprimir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RemisionComponent_Template_button_click_95_listener() { return ctx.action("imprimirconprecio"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " Imprimir con Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, RemisionComponent_ng_template_98_Template, 1, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Actividades);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.remision.Id_Factura != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 33, ctx.userF.person.company_worked.logo, "companies"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" NIT ", ctx.userF.person.company_worked.tin, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.remision.Codigo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.remision.Tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](37, 36, ctx.remision.Fecha, "longDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.remision.Codigo_Qr == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.origen)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.origen)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.destino)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.destino)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.origen)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.origen)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.destino)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.destino)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.remision.Observaciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.remision.Tipo == "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.remision.Tipo == "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.remision.Tipo == "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.remision.Tipo == "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_6__["ImagePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".ver[_ngcontent-%COMP%] {\n  background: #e9eef0 !important;\n  border-radius: 5px 5px !important;\n  font-size: 11px !important;\n}\n.ver[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n.space[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #c1c1c1;\n}\n.space[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n}\n.space[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .space[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .space[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .space[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  white-space: normal;\n  font-size: 10px;\n}\n.tabla[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #cecece;\n}\n.tabla[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  text-align: left !important;\n  padding: 3px;\n}\n.tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n}\n.tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  text-align: left !important;\n  padding: 3px;\n}\n.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  white-space: normal;\n  font-size: 10px;\n  margin: 0;\n}\n.contenido2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .contenido2[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .contenido2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n.label-1[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, #313131, #9fb9b4);\n}\n.label-2[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, #962cb1, #9817ce);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJlbWlzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxpQ0FBQTtFQUVBLDBCQUFBO0FBQUo7QUFDSTtFQUNJLDBCQUFBO0FBQ1I7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7QUFFUTtFQUNKLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBSUk7RUFDSSxtQkFBQTtBQURSO0FBRVE7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUFaO0FBR0k7RUFDSSxtQkFBQTtBQURSO0FBR0k7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQURSO0FBR0k7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRFI7QUFLRztFQUNDLDBCQUFBO0FBRko7QUFLQTtFQUNJLG9EQUFBO0FBRko7QUFJQTtFQUNJLG9EQUFBO0FBREoiLCJmaWxlIjoicmVtaXNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVye1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWVmMCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IWltcG9ydGFudDtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgaDZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxufSBcclxuLnNwYWNlIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6ICNjMWMxYzE7XHJcbn1cclxuXHJcbi5zcGFjZSB0Ym9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG59XHJcblxyXG4uc3BhY2V7IHRoLCB0ZCwgcCwgc3Ryb25nIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEwcHg7ICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4udGFibGF7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NlY2VjZTtcclxuICAgICAgICB0aHtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzozcHg7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgfVxyXG4gICAgdGR7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6M3B4O1xyXG4gICAgfVxyXG4gICAgdGgsIHRkLCBwLCBzdHJvbmcge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4OyBcclxuICAgICAgICBtYXJnaW46IDA7ICAgICBcclxuICAgICAgICB9XHJcbn1cclxuLmNvbnRlbmlkbzJ7XHJcbiAgIHNwYW4saDYscHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICB9IFxyXG59XHJcbi5sYWJlbC0xe1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzEzMTMxLCAjOWZiOWI0KTtcclxufVxyXG4ubGFiZWwtMntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzk2MmNiMSwgIzk4MTdjZSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "yC5N":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/inventario/remision/remisioncrearnuevo/productosremisionnuevo/productosremisionnuevo.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ProductosremisionnuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosremisionnuevoComponent", function() { return ProductosremisionnuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductoCargarRemision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ProductoCargarRemision */ "6vIF");
/* harmony import */ var src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utils/functionsUtils */ "eivR");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utils/confirmMessage */ "+I6T");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/general.service */ "FQVY");
/* harmony import */ var src_app_pages_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/producto.service */ "GPUG");
/* harmony import */ var src_app_services_remision_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/remision.service */ "XYi2");
/* harmony import */ var src_app_services_remisionnuevo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/remisionnuevo.service */ "5KJW");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_eps_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/eps.service */ "0ZLJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modalproductoremisionnuevo_modalproductoremisionnuevo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../modalproductoremisionnuevo/modalproductoremisionnuevo.component */ "sj42");
/* harmony import */ var _modalcambiarproductossimilarnuevo_modalcambiarproductossimilarnuevo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../modalcambiarproductossimilarnuevo/modalcambiarproductossimilarnuevo.component */ "6avl");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var ng2_truncate__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng2-truncate */ "o2tx");
/* harmony import */ var _core_pipes_customcurrency_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/pipes/customcurrency.pipe */ "BJJf");




























const _c0 = ["confirmacionGuardar"];
const _c1 = ["confirmacionRetornar"];
const _c2 = ["confirmacionSalir"];
const _c3 = ["errorBorrador"];
function ProductosremisionnuevoComponent_div_1_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.label);
} }
function ProductosremisionnuevoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NOTA:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " desea obtener el listado de productos rotativos del punto de dispesacion, seleccione un rango de fechas y haga click en el bot\u00F3n rotativo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fecha de inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosremisionnuevoComponent_div_1_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.RotativoModel.Fecha_Inicio = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fecha de fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosremisionnuevoComponent_div_1_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.RotativoModel.Fecha_Fin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "EPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosremisionnuevoComponent_div_1_Template_mat_select_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.RotativoModel.Id_Eps = $event; })("selectionChange", function ProductosremisionnuevoComponent_div_1_Template_mat_select_selectionChange_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.AsignarEps(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductosremisionnuevoComponent_div_1_mat_option_23_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Rotativo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosremisionnuevoComponent_div_1_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.GetRotativo("Pos"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Rotativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosremisionnuevoComponent_div_1_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.GetRotativo("NoPos"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Solo pendientes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Cada ", ctx_r0.ItemsRemision, " items agregados a la remisi\u00F3n, se crear\u00E1 una nueva remision. Ej: ", ctx_r0.ItemsRemision * 2, " items generar\u00E1n 2 remisiones diferentes al momento de guardar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.RotativoModel.Fecha_Inicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.RotativoModel.Fecha_Fin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.RotativoModel.Id_Eps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.Entidades_Salud);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.DeshabilitarBoton);
} }
function ProductosremisionnuevoComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cargando productos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r1.DinamycCols);
} }
function ProductosremisionnuevoComponent_tbody_33_tr_1_ul_33_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lote_visual_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", lote_visual_r23, " ");
} }
function ProductosremisionnuevoComponent_tbody_33_tr_1_ul_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductosremisionnuevoComponent_tbody_33_tr_1_ul_33_li_1_Template, 3, 1, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r18.Lotes_Visuales);
} }
function ProductosremisionnuevoComponent_tbody_33_tr_1_a_34_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosremisionnuevoComponent_tbody_33_tr_1_a_34_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.VerSimilares(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ver Similares ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a0, a1) { return { "display-table-cell": a0, "no-display": a1 }; };
function ProductosremisionnuevoComponent_tbody_33_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_input_ngModelChange_29_listener($event) { const item_r18 = ctx.$implicit; return item_r18.Cantidad_Requerida = $event; })("change", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_input_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r19 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.ComprobarCantidades(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_input_ngModelChange_31_listener($event) { const item_r18 = ctx.$implicit; return item_r18.Cantidad = $event; })("change", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_input_change_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r19 = ctx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r32.ComprobarCantidades(i_r19); return ctx_r32.CalcularSubtotalProducto(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProductosremisionnuevoComponent_tbody_33_tr_1_ul_33_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProductosremisionnuevoComponent_tbody_33_tr_1_a_34_Template, 3, 0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_input_ngModelChange_36_listener($event) { const item_r18 = ctx.$implicit; return item_r18.Precio = $event; })("change", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_input_change_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r19 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.VerificarPrecioRegulacion(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_input_ngModelChange_39_listener($event) { const item_r18 = ctx.$implicit; return item_r18.Descuento = $event; })("change", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_input_change_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r19 = ctx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.CalcularSubtotalProducto(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A0\u00A0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "customcurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosremisionnuevoComponent_tbody_33_tr_1_Template_i_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r19 = ctx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.EliminarProducto(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "fila", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r19 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.Nombre_Comercial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r18.Categoria, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 33, item_r18.Embalaje, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.Embalaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.Cantidad_Presentacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c4, ctx_r17.Display_Rotacion, !ctx_r17.Display_Rotacion));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18.Rotativo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.Cantidad_Disponible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](41, _c4, ctx_r17.Display_Interna, !ctx_r17.Display_Interna));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "CantidadRequerida", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "Cantidad_Requerida", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r18.Cantidad_Requerida);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "CantidadIngresada", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "Cantidad_Total", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r18.Cantidad)("readonly", ctx_r17.Tipo_Remision == "Interna");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.Lotes_Visuales.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.Similares.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c4, ctx_r17.Display_Cliente, !ctx_r17.Display_Cliente));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "precioVenta", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "precioVenta", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r18.Precio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c4, ctx_r17.Display_Cliente, !ctx_r17.Display_Cliente));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "descuento", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "Descuento", i_r19, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r18.Descuento);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](50, _c4, ctx_r17.Display_Cliente, !ctx_r17.Display_Cliente));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.Impuesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](53, _c4, ctx_r17.Display_Cliente, !ctx_r17.Display_Cliente));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 36, item_r18.Subtotal));
} }
function ProductosremisionnuevoComponent_tbody_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductosremisionnuevoComponent_tbody_33_tr_1_Template, 52, 56, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.Lista_Productos);
} }
function ProductosremisionnuevoComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subtotal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "customcurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Descuento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "customcurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Impuestos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "customcurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Precio Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "customcurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx_r3._remisionModel.Subtotal_Remision));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx_r3._remisionModel.Descuento_Remision));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 8, ctx_r3._remisionModel.Impuesto_Remision));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, ctx_r3._remisionModel.Costo_Remision));
} }
class ProductosremisionnuevoComponent {
    constructor(_servicesInventario, _swalService, 
    // private _toastService:ToastService,
    _productoService, _remisionService, _remisionNuevoService, 
    // private _generadorService:FuncionesgeneralesService,
    http, _epsService, _router, _activeRoute) {
        this._servicesInventario = _servicesInventario;
        this._swalService = _swalService;
        this._productoService = _productoService;
        this._remisionService = _remisionService;
        this._remisionNuevoService = _remisionNuevoService;
        this.http = http;
        this._epsService = _epsService;
        this._router = _router;
        this._activeRoute = _activeRoute;
        //OBSERVABLES
        this.AbrirModalProductos = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.AbrirModalProductoCambiar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ActualizarModelo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.RecibirPendientes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this._listaAgregados = [];
        this.Codigo_Borrador = '';
        this.CargarBorrador = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._idsCambios = [];
        //PUBLIC VARIABLES
        //COMUNICACION DE COMPONENTES
        this.ActualizarValoresEncabezado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //LISTAS
        this.Lista_Productos = [];
        this.Impuestos = [];
        this.Entidades_Salud = [];
        //VARIABLES DE CONTROL
        this.Display_Interna = true;
        this.Display_Cliente = false;
        this.Display_Rotacion = false;
        this.DeshabilitarBoton = false;
        this.Cargando = false;
        this.Codigo_Barras = '';
        //ACUMULADORES
        this.reducer_subtotal = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Subtotal);
        this.reducer_desc = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Total_Descuento);
        this.reducer_imp = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Total_Impuesto);
        //VARIABLES DE DATOS
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Guardar esta Remisión",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            // type: 'info',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.GuardarRemision();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.isLoading()
        };
        this.alertOptionRetorno = {
            title: "Registro Exitoso",
            text: "Remisión guardada exitosamente",
            confirmButtonText: 'Aceptar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            // type: 'info',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this._router.navigate(['/remisionesnuevo']);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.isLoading()
        };
        this.alertOptionBorrador = {
            title: "Error Borrador",
            text: "El Borrador Seleccionado contiene errores Comuníquese con el Dpto. de sistemas",
            confirmButtonText: 'Aceptar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            // type: 'error',
            allowOutsideClick: false,
            preConfirm: () => {
                return new Promise((resolve) => {
                    this._router.navigate(['/remisionesnuevo']);
                });
            },
        };
        this.RotativoModel = {
            Fecha_Inicio: '',
            Fecha_Fin: '',
            Id_Eps: '',
            Id_Origen: 0,
            Grupo: {
                Id_Grupo: 0,
                Nombre_Grupo: '',
                Fecha_Vencimiento: '',
                Presentacion: ''
            },
            Id_Destino: 0,
            Meses: ''
        };
        this.Tipo_Remision = 'Interna';
        this.Subtotal_Remision = 0;
        this.Impuesto_Remision = 0;
        this.Descuento_Remision = 0;
        this.Costo_Remision = 0;
        this.DinamycCols = 9;
        this.Mensaje = 0;
        this.ItemsRemision = 0;
        this.Id_Borrador = '';
        this.Fecha = new Date();
        this.fecha_mes_anterior = new Date(new Date().setDate(this.Fecha.getDate() - 30));
        this.ProductosAgregar = [];
        this.RotativoModel.Fecha_Inicio = this.fecha_mes_anterior.toISOString().split("T")[0];
        this.RotativoModel.Fecha_Fin = this.Fecha.toISOString().split("T")[0];
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/genericos/detalle.php', {
            params: { modulo: 'Configuracion', id: '1' }
        }).subscribe((data) => {
            this.ItemsRemision = parseInt(data.Max_Item_Remision);
        });
        this.GetImpuestos();
        this._getEntidadesSalud();
        if (this._activeRoute.snapshot.queryParams.borrador) {
            this.Codigo_Borrador = this._activeRoute.snapshot.queryParams.borrador;
            setTimeout(() => {
                this.RecuperarBorrador();
            }, 200);
        }
        else {
            this.Codigo_Borrador = src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["functionsUtils"].HexadecimalAleatorio();
        }
    }
    ngOnInit() {
        this.suscripcionCambioModelo = this.ActualizarModelo.subscribe((data) => {
            this._remisionModel = data.modelo;
            this.Tipo_Remision = data.modelo.Tipo;
            if (this._remisionModel.Tipo == 'Interna' && data.actualizar_productos) {
                this.DinamycCols = 9;
                this.Display_Rotacion = false;
                if (this._remisionModel.Modelo == 'Bodega-Punto') {
                    this.Display_Interna = true;
                    this.Display_Cliente = false;
                }
                if (!isNaN(parseInt(data.modelo.Id_Origen))) {
                    this.RotativoModel.Id_Origen = parseInt(data.modelo.Id_Origen);
                }
                else {
                    this.RotativoModel.Id_Origen = 0;
                }
                console.log('modelo', data.modelo);
                if (data.modelo.Grupo.Id_Grupo != 0) {
                    this.RotativoModel.Grupo = data.modelo.Grupo;
                }
                else {
                    this.RotativoModel.Grupo.Id_Grupo = 0;
                    this.RotativoModel.Grupo.Nombre_Grupo = '';
                    this.RotativoModel.Grupo.Fecha_Vencimiento = '';
                    this.RotativoModel.Grupo.Presentacion = '';
                }
                if (!isNaN(parseInt(data.modelo.Id_Destino))) {
                    this.RotativoModel.Id_Destino = parseInt(data.modelo.Id_Destino);
                }
                else {
                    this.RotativoModel.Id_Destino = 0;
                }
                if (!isNaN(parseInt(data.modelo.Meses))) {
                    this.RotativoModel.Meses = data.modelo.Meses;
                }
                this.EliminarLotesMasivos();
                this.GuardarBorrador(false);
                //this._limpiarModelos();
            }
            else if (this._remisionModel.Tipo == 'Cliente') {
                this.DinamycCols = 12;
                this.Display_Rotacion = false;
                this.Display_Interna = false;
                this.Display_Cliente = true;
                this.ClearRotativoModel();
                if (data.actualizar_productos) {
                    this.EliminarLotesMasivos();
                }
                //this._limpiarModelos();
            }
            else if (this._remisionModel.Tipo == 'Contrato') {
                this.DinamycCols = 12;
                this.Display_Rotacion = false;
                this.Display_Interna = false;
                this.Display_Cliente = true;
                this.ClearRotativoModel();
                if (data.actualizar_productos) {
                    this.EliminarLotesMasivos();
                }
                //this._limpiarModelos();
            }
            if (this._remisionModel.Id_Destino != 0 && this._remisionModel.Id_Origen != 0) {
                if (data.actualizar_productos) {
                }
            }
            setTimeout(() => {
                this.Cargando = false;
                this.CalcularSubtotalProductosLista();
            }, 200);
        });
    }
    ngOnDestroy() {
    }
    ngOnChanges(changes) {
    }
    //PRIVATE METHODS
    _limpiarModelos(tipo = true) {
        this.Lista_Productos = [];
        this._listaAgregados = [];
        //this._remisionModel = null;
        if (tipo) {
            setTimeout(() => {
                this.GuardarBorrador();
            }, 100);
        }
    }
    GetImpuestos() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/lista_generales.php', { params: { modulo: 'Impuesto' } }).subscribe((data) => {
            this.Impuestos = data;
        });
    }
    AgregarProductosExistentes(idProducto) {
        this._listaAgregados.push(idProducto);
    }
    _getEntidadesSalud() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/GENERALES/eps/get_entidades_salud_select.php').subscribe((data) => {
            //this.Entidades_Salud.push({value:'', label:'Todas'});
            if (data.codigo == 'success') {
                // if (data.query_result.length > 0) {
                //   data.query_result.forEach(eps => {
                //     this.Entidades_Salud.push(eps);
                //   });
                // }
                this.Entidades_Salud = data.query_result;
                this.Entidades_Salud.unshift({ value: '', label: 'Todas' });
            }
            else {
                this.Entidades_Salud = [];
            }
        });
    }
    ValidarModelo() {
        if (this._remisionModel.Id_Origen == 0) {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('error', 'Falta Origen', 'Debe seleccionar el origen de la remision!');
            return false;
        }
        else if (this._remisionModel.Id_Destino == 0) {
            if (this._remisionModel.Tipo == 'Cliente') {
                Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('error', 'Falta Destino', 'Debe seleccionar el destino de la remision!');
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }
    Listar_Pendientes() {
        if (this._remisionModel.Modelo == 'Bodega-Punto') {
            if (this._remisionModel.Id_Destino != 0 && this._remisionModel.Id_Origen != 0 && this._remisionModel.Grupo.Id_Grupo != 0) {
                let params = this.AsignarParametros();
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/get_pendientes.php', { params: params }).subscribe((data) => {
                    if (data.length > 0) {
                        this.AbrirModalAgregarProductos(data);
                    }
                });
            }
        }
    }
    AsignarParametros() {
        let params = {};
        params.id_destino = this._remisionModel.Id_Destino;
        params.id_grupo = this._remisionModel.Grupo.Id_Grupo;
        params.id_origen = this._remisionModel.Id_Origen;
        params.mes = this._remisionModel.Meses;
        return params;
    }
    GuardarLotesSeleccionados(lote) {
        let data = new FormData();
        data.append("datos", JSON.stringify(lote));
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/seleccionar_lotes_inventario.php', data).subscribe((data) => {
        });
    }
    GuardarBorrador(guardar = true) {
        let data = new FormData();
        this.setDescripcion();
        let model = this._remisionModel;
        let lista_productos = this.Lista_Productos;
        if (guardar) {
            let modelo_productos = { Modelo: model, Productos: lista_productos };
            data.append("datos", src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["functionsUtils"].normalize(JSON.stringify(modelo_productos)));
            data.append("codigo", this.Codigo_Borrador);
            data.append("funcionario", String(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].id_funcionario));
            data.append("destino", this._remisionModel.Nombre_Destino);
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/guardar_borrador.php', data).subscribe((data) => {
                if (data.codigo == 'success') {
                    this.Mensaje++;
                    if (this.Mensaje % 10 == 0) {
                        this._swalService.show({ icon: data.codigo, title: data.titulo, text: data.mensaje });
                    }
                }
                else {
                    this._swalService.show({ icon: 'error', title: 'Error', text: 'El borrador no se ha podido guardar, por favor comuniquese con el encargado del sistema!' });
                }
            });
        }
    }
    setDescripcion() {
        //elimina todos las comillas  para no dañar json
        this._remisionModel.Observaciones = this._remisionModel.Observaciones.replace(/['"]+/g, '');
        // preserve newlines, etc - use valid JSON
        this._remisionModel.Observaciones = this._remisionModel.Observaciones.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f");
        // remove non-printable and other non-valid JSON chars
        this._remisionModel.Observaciones = this._remisionModel.Observaciones.replace(/[\u0000-\u0019]+/g, "");
    }
    SetFiltrosRotativo() {
        let params = {};
        if (this.RotativoModel.Id_Destino != 0) {
            params.id_destino = this.RotativoModel.Id_Destino;
        }
        if (this.RotativoModel.Grupo.Id_Grupo != 0) {
            params.grupo = JSON.stringify(this.RotativoModel.Grupo);
        }
        if (this.RotativoModel.Id_Origen != 0) {
            params.id_origen = this.RotativoModel.Id_Origen;
        }
        if (this.RotativoModel.Fecha_Inicio != 0) {
            params.fini = this.RotativoModel.Fecha_Inicio;
        }
        if (this.RotativoModel.Fecha_Fin != 0) {
            params.ffin = this.RotativoModel.Fecha_Fin;
        }
        if (this.RotativoModel.Id_Eps != '') {
            params.eps = this.RotativoModel.Id_Eps;
        }
        if (this.RotativoModel.Meses != '') {
            params.mes = this.RotativoModel.Meses;
        }
        return params;
    }
    ValidateConsultaRotativo() {
        if (this.RotativoModel.Fecha_Inicio == '') {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Escoja la fecha de inicio!');
            return false;
        }
        else if (this.RotativoModel.Fecha_Fin == '') {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Escoja la fecha de fin!');
            return false;
        }
        else if (this.RotativoModel.Id_Origen == 0) {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Escoja el origen!');
            return false;
        }
        else if (this.RotativoModel.Id_Destino == '') {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Escoja el destino!');
            return false;
        }
        else if (this.RotativoModel.Grupo.Id_Grupo == 0) {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Escoja el grupo de origen!');
            return false;
        }
        else {
            return true;
        }
    }
    ClearRotativoModel() {
        this.RotativoModel = {
            Fecha_Inicio: this.Fecha,
            Fecha_Fin: this.fecha_mes_anterior,
            Id_Eps: '',
            Id_Origen: 0,
            Id_Destino: 0
        };
    }
    SetearProducto(productos) {
        let productos_formateados = [];
        productos.forEach(p => {
            let product = new _ProductoCargarRemision__WEBPACK_IMPORTED_MODULE_3__["ProductoCargarRemision"]();
            this._listaAgregados.push(p.Id_Producto);
            for (var key in p) {
                if (key != 'Codigo_Cum' && key != 'Seleccionado' && key != 'Cantidad_Requerida') {
                    // if (key == 'Lotes') {
                    //   product[key] = this.SetearLotes(producto[key]);
                    // }else{
                    if (key == 'Rotativo') {
                        product[key] = p[key];
                    }
                    else if (!isNaN(parseInt(p[key]))) {
                        product[key] = parseInt(p[key]);
                    }
                    else {
                        product[key] = p[key];
                    }
                    //}
                }
                else {
                    // TODO product key error
                    // product[key] = p[key];
                }
            }
            productos_formateados.push(product);
        });
        return productos_formateados;
    }
    SetearProductoIndividual(producto) {
        let product = new _ProductoCargarRemision__WEBPACK_IMPORTED_MODULE_3__["ProductoCargarRemision"]();
        for (var key in producto) {
            if (key != 'Codigo_Cum' && key != 'Seleccionado' && key != 'Cantidad_Requerida') {
                // if (key == 'Lotes') {
                //   product[key] = this.SetearLotes(producto[key]);
                // }else{
                if (!isNaN(parseInt(producto[key]))) {
                    product[key] = parseInt(producto[key]);
                }
                else {
                    product[key] = producto[key];
                }
                //}
            }
            else {
                // TODO product key error
                // product[key] = producto[key];
            }
        }
        return product;
    }
    EliminarLotesMasivos() {
        if (this.Lista_Productos.length > 0) {
            let data = new FormData();
            data.append("datos", src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["functionsUtils"].normalize(JSON.stringify(this.Lista_Productos)));
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision/get_productos_inventario.php', data).subscribe((data) => {
                if (data.codigo == 'success') {
                    this._limpiarModelos();
                }
            });
        }
    }
    //PUBLIC METHODS
    AgregarProducto(producto) {
        if (producto != null) {
            this.Lista_Productos.push(producto);
            this.AgregarProductosExistentes(producto.Id_Producto);
        }
        else {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Ocurrió un error con el producto, contacte con el administrador!');
        }
    }
    GenerarRotativo(tipo) {
    }
    AbrirModalAgregarProductos(pendientes = []) {
        if (!this.ValidarModelo()) {
            return;
        }
        else {
            let data = { agregados: this._listaAgregados, inventarios: [], pendientes: pendientes, remision_model: this._remisionModel, tipo: 'Remision' };
            this.AbrirModalProductos.next(data);
        }
    }
    VerificarPrecioRegulacion(posProducto) {
        let regulado = this.Lista_Productos[posProducto].Regulado;
        let precio = this.Lista_Productos[posProducto].Precio;
        let costo = this.Lista_Productos[posProducto].Costo;
        let precio_regulado = this.Lista_Productos[posProducto].Precio_Regulado;
        if (regulado == 'Si' && precio > precio_regulado) {
            this.Lista_Productos[posProducto].Precio = this.Lista_Productos[posProducto].Precio_Regulado;
        }
        if (precio < costo) {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'El precio no puede ser inferior al costo del producto!');
            this.Lista_Productos[posProducto].Precio = this.Lista_Productos[posProducto].Costo;
        }
        this.CalcularSubtotalProducto(posProducto);
    }
    CalcularSubtotalProducto(posProducto) {
        let cantidad = this.Lista_Productos[posProducto].Cantidad == null ? 0 : this.Lista_Productos[posProducto].Cantidad;
        let precio = this.Lista_Productos[posProducto].Precio;
        let descuento = this.Lista_Productos[posProducto].Descuento;
        let iva = this.Lista_Productos[posProducto].Impuesto;
        let total_descuento = (cantidad * precio) * (descuento / 100);
        let total_impuesto = (cantidad * precio) * (iva / 100);
        let subtotal = (cantidad * precio);
        this.Lista_Productos[posProducto].Subtotal = subtotal;
        this.Lista_Productos[posProducto].Total_Descuento = total_descuento;
        this.Lista_Productos[posProducto].Total_Impuesto = total_impuesto;
        this.ActualizaValores();
    }
    ActualizaValores() {
        this._remisionModel.Subtotal_Remision = parseFloat(this.Lista_Productos.reduce(this.reducer_subtotal, 0));
        this._remisionModel.Impuesto_Remision = parseFloat(this.Lista_Productos.reduce(this.reducer_imp, 0));
        this._remisionModel.Descuento_Remision = parseFloat(this.Lista_Productos.reduce(this.reducer_desc, 0));
        this._remisionModel.Costo_Remision = this._remisionModel.Subtotal_Remision - this._remisionModel.Descuento_Remision + this._remisionModel.Impuesto_Remision;
        setTimeout(() => {
            this.GuardarBorrador();
        }, 100);
    }
    EliminarProducto(posProducto) {
        //ELIMINAR LOTES SELECCIONADOS
        this.EliminarLotesSeleccionados(this.Lista_Productos[posProducto].Lotes_Seleccionados);
        this.EliminarSeleccionados(this.Lista_Productos[posProducto].Id_Producto);
        this.Lista_Productos.splice(posProducto, 1);
        setTimeout(() => {
            this.CalcularSubtotalProductosLista();
            this.ActualizarValoresEncabezado.emit(this.Lista_Productos);
        }, 200);
        this.GuardarBorrador();
    }
    EliminarSeleccionados(idProducto) {
        let ind = this._listaAgregados.findIndex(x => x == idProducto);
        if (ind > -1) {
            this._listaAgregados.splice(ind, 1);
        }
    }
    GetRotativo(tipo) {
        this.EliminarLotesMasivos();
        //id_destino, id_origen, ffini, ffin, eps
        if (!this.ValidateConsultaRotativo()) {
            return;
        }
        else {
            this.Cargando = true;
            let params = this.SetFiltrosRotativo();
            if (tipo == 'Pos') {
                this.Display_Rotacion = true;
                this.DinamycCols = 10;
                this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/get_rotativo.php', { params: params }).subscribe((data) => {
                    if (data.length > 0) {
                        this.Lista_Productos = [];
                        this.Lista_Productos = this.SetearProducto(data);
                        this.DeshabilitarBoton = true;
                        this.Cargando = false;
                        setTimeout(() => {
                            this.ActualizarValoresEncabezado.emit(this.Lista_Productos);
                        }, 200);
                        this.GuardarBorrador();
                    }
                    else {
                        this.Lista_Productos = [];
                        this.Cargando = false;
                    }
                });
            }
            else {
                this.Display_Rotacion = false;
                this.DinamycCols = 9;
                this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/get_rotativo_no_pos.php', { params: params }).subscribe((data) => {
                    if (data.length > 0) {
                        this.Lista_Productos = [];
                        this.Lista_Productos = this.SetearProducto(data);
                        this.DeshabilitarBoton = true;
                        this.Cargando = false;
                        setTimeout(() => {
                            this.ActualizarValoresEncabezado.emit(this.Lista_Productos);
                        }, 200);
                        this.GuardarBorrador();
                    }
                    else {
                        this.Lista_Productos = [];
                        this.Cargando = false;
                    }
                });
            }
        }
    }
    VerSimilares(posProducto) {
        this.Lista_Productos[posProducto].Similares.forEach((similar, i) => {
            if (similar.Seleccionado == '1') {
                this.Lista_Productos[posProducto].Similares[i].Seleccionado = '0';
            }
        });
        let producto = this.Lista_Productos[posProducto];
        let params = {
            producto: producto, pos: posProducto,
            rotativo_model: this.RotativoModel,
            grupo: this._remisionModel.Grupo,
            mes: this._remisionModel.Meses
        };
        this.AbrirModalProductoCambiar.next(params);
    }
    RealizarCambioProducto(datos) {
        //posicion del producto si existe en la lista principal
        let existe = this.VerificarExistenciaProducto(datos.producto.Id_Producto);
        if (existe > -1) {
            let size = this.Lista_Productos[existe]['Lotes_Seleccionados'].length;
            /*   for (let existente = 0; existente < size ; existente++) {
                console.log(this.Lista_Productos[existe]['Lotes_Seleccionados'],'existente');
      
                let encontrado = false;
                for (let nuevo = 0; nuevo < datos.producto['Lotes_Seleccionados'].length ; nuevo++) {
                console.log( datos.producto['Lotes_Seleccionados'][nuevo],'nuevo');
      
                  if ( this.Lista_Productos[existe]['Lotes_Seleccionados']['Id_Inventario'] ==
                        datos.producto['Lotes_Seleccionados'][nuevo]['Id_Inventario']) {
      
                          this.Lista_Productos[existe]['Lotes_Seleccionados'][existente]['Cantidad_Seleccionada']  +=
                          parseInt(datos.producto['Lotes_Seleccionados'][nuevo]['Cantidad_Seleccionada']);
                          encontrado = true;
      
                      }
      
                  }
      
                  if (!encontrado) {
                    this.Lista_Productos[existe]['Lotes_Seleccionados'].push(datos.producto['Lotes_Seleccionados']);
                  }
                }
         */
            for (let nuevo = 0; nuevo < datos.producto['Lotes_Seleccionados'].length; nuevo++) {
                let encontrado = false;
                for (let existente = 0; existente < size; existente++) {
                    if (this.Lista_Productos[existe]['Lotes_Seleccionados'][existente]['Id_Inventario_Nuevo'] ==
                        datos.producto['Lotes_Seleccionados'][nuevo]['Id_Inventario_Nuevo']) {
                        this.Lista_Productos[existe]['Lotes_Seleccionados'][existente]['Cantidad_Seleccionada'] +=
                            parseInt(datos.producto['Lotes_Seleccionados'][nuevo]['Cantidad_Seleccionada']);
                        this.Lista_Productos[existe]['Cantidad'] +=
                            parseInt(datos.producto['Cantidad']);
                        encontrado = true;
                    }
                }
                if (!encontrado) {
                    this.Lista_Productos[existe]['Lotes_Seleccionados'].push(datos.producto['Lotes_Seleccionados'][nuevo]);
                }
            }
            console.log(datos.producto['Lotes_Visuales'], 'lv n');
            console.log(this.Lista_Productos[existe]['Lotes_Seleccionados'], 'lv viejo');
            this.Lista_Productos[existe]['Lotes_Visuales'] = [];
            for (let lote = 0; lote < this.Lista_Productos[existe]['Lotes_Seleccionados'].length; lote++) {
                let loteVisual = 'Lote :' + this.Lista_Productos[existe]['Lotes_Seleccionados'][lote]['Lote'] +
                    ' - Vencimiento:  ' + this.Lista_Productos[existe]['Lotes_Seleccionados'][lote]['Fecha_Vencimiento'] +
                    ' - Cantidad: ' + this.Lista_Productos[existe]['Lotes_Seleccionados'][lote]['Cantidad'];
                this.Lista_Productos[existe]['Lotes_Visuales'][lote] = loteVisual;
            }
            this.Lista_Productos[existe].Cantidad_Requerida = this.Lista_Productos[existe].Cantidad_Requerida + parseInt(datos.producto.Cantidad_Requerida);
            console.log(this.Lista_Productos[existe]);
            /*       this.Lista_Productos[existe].Cantidad = this.Lista_Productos[existe].Cantidad_Requerida + parseInt(datos.producto.Cantidad_Requerida);
            this.SeleccionarLotes(existe.toString());   */
            this.Lista_Productos.splice(datos.pos, 1);
        }
        else {
            this.Lista_Productos[datos.pos] = this.SetearProductoIndividual(datos.producto);
            /*    this.SeleccionarLotes(datos.pos);    */
            this._idsCambios.push(datos.id_cambio);
        }
    }
    VerificarExistenciaProducto(idProducto) {
        let exist = this.Lista_Productos.findIndex(x => x.Id_Producto == idProducto);
        return exist;
    }
    RecuperarBorrador() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/get_borrador.php', { params: { codigo: this.Codigo_Borrador } }).subscribe((data) => {
            let txtBorrador = data.Texto;
            // preserve newlines, etc - use valid JSON
            txtBorrador = txtBorrador.replace(/\\n/g, "\\n")
                .replace(/\\'/g, "\\'")
                .replace(/\\"/g, '\\"')
                .replace(/\\&/g, "\\&")
                .replace(/\\r/g, "\\r")
                .replace(/\\t/g, "\\t")
                .replace(/\\b/g, "\\b")
                .replace(/\\f/g, "\\f");
            // remove non-printable and other non-valid JSON chars
            txtBorrador = txtBorrador.replace(/[\u0000-\u0019]+/g, "");
            let modelo = this.validarJson(txtBorrador);
            if (modelo) {
                console.log(modelo);
                this.Tipo_Remision = modelo.Modelo.Tipo;
                this._remisionModel = modelo.Modelo;
                /*  this._remisionModel.setGrupo(x); */
                this.RotativoModel.Id_Origen = modelo.Modelo.Id_Origen;
                this.RotativoModel.Id_Destino = modelo.Modelo.Id_Destino;
                if (this._remisionModel.Tipo == 'Interna') {
                    this.Display_Interna = true;
                    this.Display_Cliente = false;
                    if (this._remisionModel.Modelo == 'Bodega-Punto') {
                        this.Display_Rotacion = true;
                    }
                    else {
                        this.Display_Rotacion = false;
                    }
                }
                else {
                    this.Display_Interna = false;
                    this.Display_Cliente = true;
                }
                this.Lista_Productos = [];
                this.Lista_Productos = this.SetearProducto(modelo.Productos);
                setTimeout(() => {
                    this.CalcularSubtotalProductosLista();
                }, 500);
                //this.Lista_Productos=modelo.Productos;
                this.CargarBorrador.emit(this._remisionModel);
            }
            else {
                this.errorBorrador.show();
            }
        });
    }
    AsignarEps() {
    }
    validarJson(str) {
        let conversion = {};
        try {
            conversion = JSON.parse(str);
        }
        catch (error) {
            console.error('Ah ocurrido un error con el JSON', error);
            return false;
        }
        return conversion;
    }
    GuardarRemision() {
        if (!this.ValidateRemision()) {
            return;
        }
        else {
            let data = new FormData();
            data.append("datos", src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["functionsUtils"].normalize(JSON.stringify(this._remisionModel)));
            data.append("grupo", src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["functionsUtils"].normalize(JSON.stringify(this._remisionModel.Grupo)));
            data.append("productos", src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["functionsUtils"].normalize(JSON.stringify(this.Lista_Productos)));
            data.append("codigo", this.Codigo_Borrador);
            data.append("rotativo", src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["functionsUtils"].normalize(JSON.stringify(this.RotativoModel)));
            if (this._remisionModel.Modelo == 'Bodega-Bodega' && this._remisionModel.Id_Origen == 8) {
                this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/save_remision_devolucion.php', data).subscribe((data) => {
                    if (data.codigo == 'success') {
                        this._limpiarModelos(false);
                        this.confirmacionSalir.title = 'Remisión Guardada';
                        this.confirmacionSalir.html = data.mensaje;
                        this.confirmacionSalir.type = 'success';
                        this.confirmacionSalir.fire();
                        console.log('b-b');
                    }
                    else {
                        console.log('else');
                        Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])(data);
                        this.confirmacionGuardar.close;
                    }
                });
            }
            else {
                console.log('else-2');
                this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/save_remision.php', data).subscribe((data) => {
                    if (data.codigo == 'success') {
                        this._limpiarModelos(false);
                        this.confirmacionSalir.title = 'Remisión Guardada';
                        this.confirmacionSalir.html = data.mensaje;
                        this.confirmacionSalir.type = 'success';
                        this.confirmacionSalir.fire();
                        this._router.navigate(['/inventario/remisiones']);
                    }
                    else {
                        console.log('else-else-2');
                        Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])(data);
                        this.confirmacionGuardar.close;
                    }
                });
            }
        }
    }
    ValidateRemision() {
        if (this._remisionModel.Id_Origen == 0) {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Escoja el origen!');
            return false;
        }
        else if (this._remisionModel.Id_Destino == 0) {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Escoja el destino!');
            return false;
        }
        else if (this._remisionModel.Observaciones.trim() == '') {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Escriba unas observaciones sobre la remision!');
            return false;
        }
        else if (!this.ValidateProductosRemision()) {
            return false;
        }
        else {
            return true;
        }
    }
    ValidateProductosRemision() {
        for (let index = 0; index < this.Lista_Productos.length; index++) {
            if (this._remisionModel.Tipo == 'Interna') {
                if (this.Display_Rotacion) {
                    if ((this.Lista_Productos[index].Cantidad == 0 || this.Lista_Productos[index].Cantidad == undefined) && this.Lista_Productos[index].Similares.length > 0) {
                        Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Cambie el producto ' + this.Lista_Productos[index].Nombre_Comercial + ' por uno de sus asociados o elimine el producto de la lista!');
                        return false;
                    }
                    else if (this.Lista_Productos[index].Cantidad_Requerida == 0 || this.Lista_Productos[index].Cantidad_Requerida == undefined) {
                        Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'La cantidad del producto ' + this.Lista_Productos[index].Nombre_Comercial + ' no puede ser cero(0)!');
                        return false;
                    }
                }
                else if (this.Lista_Productos[index].Cantidad_Requerida == 0 || this.Lista_Productos[index].Cantidad_Requerida == undefined) {
                    Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'La cantidad del producto ' + this.Lista_Productos[index].Nombre_Comercial + ' no puede ser cero(0)!');
                    return false;
                }
            }
            else {
                if (this.Lista_Productos[index].Cantidad == 0 || this.Lista_Productos[index].Cantidad == undefined) {
                    Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'La cantidad del producto ' + this.Lista_Productos[index].Nombre_Comercial + ' no puede ser cero(0)!');
                    return false;
                }
            }
            if (index == (this.Lista_Productos.length - 1)) {
                return true;
            }
        }
    }
    CalcularSubtotalProductosLista() {
        if (this.Lista_Productos.length > 0) {
            this.Lista_Productos.forEach((p, i) => {
                this.CalcularSubtotalProducto(i.toString());
            });
        }
        else {
            this._remisionModel.Subtotal_Remision = 0;
            this._remisionModel.Impuesto_Remision = 0;
            this._remisionModel.Descuento_Remision = 0;
            this._remisionModel.Costo_Remision = 0;
        }
    }
    VerPantallaLista() {
        this._router.navigate(['/remisionesnuevo']);
    }
    RecibirProductos(listaProductos) {
        listaProductos.forEach((p, i) => {
            p.Precio = (+p.Precio).toFixed(2);
            if (p.Cantidad_Pendiente != 0) {
                p.Cantidad_Requerida = p.Cantidad_Pendiente;
            }
            this.Lista_Productos.push(p);
            this._listaAgregados.push(p.Id_Producto);
            this.SeleccionarLotes((this.Lista_Productos.length - 1).toString());
        });
        setTimeout(() => {
            this.Cargando = false;
            this.ActualizarValoresEncabezado.emit(this.Lista_Productos);
        }, 300);
    }
    //METODOS LOTES
    SeleccionarLotes(posProducto) {
        if ((this.Lista_Productos[posProducto].Cantidad_Requerida > 0
            && this._remisionModel.Tipo == 'Interna')
            || (this.Lista_Productos[posProducto].Cantidad > 0
                && this._remisionModel.Tipo == 'Cliente')
            || (this.Lista_Productos[posProducto].Cantidad > 0
                && this._remisionModel.Tipo == 'Contrato')) {
            let cantidad = 0;
            let multiplo = 0;
            this.Lista_Productos[posProducto].Lotes_Visuales = [];
            if (this._remisionModel.Tipo == 'Interna') {
                cantidad = this.Lista_Productos[posProducto].Cantidad_Requerida;
                this.Lista_Productos[posProducto].Cantidad = 0;
            }
            else {
                cantidad = this.Lista_Productos[posProducto].Cantidad;
            }
            if (this._remisionModel.Grupo.Presentacion == 'Si' &&
                this._remisionModel.Modelo !== 'Punto-Punto' &&
                this._remisionModel.Modelo !== 'Punto-Bodega') {
                multiplo = cantidad % this.Lista_Productos[posProducto].Cantidad_Presentacion;
                var cantidad_presentacion = true;
            }
            else {
                var cantidad_presentacion = false;
            }
            this.Lista_Productos[posProducto].Cantidad = 0;
            this.Lista_Productos[posProducto].Lotes_Seleccionados = [];
            if (multiplo == 0 && cantidad > 0) {
                let flag = true;
                for (let i = 0; i < this.Lista_Productos[posProducto].Lotes.length; i++) {
                    let cant_disp = this.Lista_Productos[posProducto].Lotes[i].Cantidad_Disponible;
                    if (flag && cantidad <= parseInt(this.Lista_Productos[posProducto].Lotes[i].Cantidad)) {
                        //SE CREA UNA VARIABLE PARA LLENAR y ALMACENAR LOS DATOS DE LOS LOTES QUE SE VAYAN SELECCIONANDO DE ACUERDO A LA CANTIDAD DIGITADA
                        let lote_temp = JSON.parse(JSON.stringify(this.Lista_Productos[posProducto].Lotes[i]));
                        lote_temp.Cantidad = cantidad;
                        this.GuardarLotesSeleccionados(lote_temp);
                        this.Lista_Productos[posProducto].Lotes[i].Cantidad_Seleccionada = cantidad;
                        lote_temp.Cantidad_Seleccionada = cantidad;
                        var labelLote = "Lote: " + this.Lista_Productos[posProducto].Lotes[i].Lote + " - Vencimiento: " + this.Lista_Productos[posProducto].Lotes[i].Fecha_Vencimiento + " - Cantidad: " + cantidad;
                        // console.log(labelLote, 'labelLote');
                        this.Lista_Productos[posProducto].Lotes_Visuales.push(labelLote);
                        this.Lista_Productos[posProducto].Cantidad = this.Lista_Productos[posProducto].Cantidad + cantidad;
                        flag = false;
                        //SE INCLUYE EL LOTE SELECCIONADO EN LA LISTA DE LOTES SELECCIONADOS DEL PRODUCTO
                        this.Lista_Productos[posProducto].Lotes_Seleccionados.push(lote_temp);
                        //SELECCIONAR LOTE EN BD
                    }
                    else if (flag && cantidad > this.Lista_Productos[posProducto].Lotes[i].Cantidad) {
                        //SE CREA UNA VARIABLE PARA LLENAR y ALMACENAR LOS DATOS DE LOS LOTES QUE SE VAYAN SELECCIONANDO DE ACUERDO A LA CANTIDAD DIGITADA
                        let lote_temp = JSON.parse(JSON.stringify(this.Lista_Productos[posProducto].Lotes[i]));
                        this.GuardarLotesSeleccionados(lote_temp);
                        lote_temp.Cantidad_Seleccionada = this.Lista_Productos[posProducto].Lotes[i].Cantidad;
                        //SE INCLUYE EL LOTE SELECCIONADO EN LA LISTA DE LOTES SELECCIOANDOS DEL PRODUCTO
                        this.Lista_Productos[posProducto].Lotes_Seleccionados.push(lote_temp);
                        this.Lista_Productos[posProducto].Lotes[i].Cantidad_Seleccionada = this.Lista_Productos[posProducto].Lotes[i].Cantidad;
                        // cantidad = cantidad - this.Lista_Productos[posProducto].Lotes[i].Cantidad;
                        var labelLote = "Lote: " + this.Lista_Productos[posProducto].Lotes[i].Lote + " - Vencimiento: " + this.Lista_Productos[posProducto].Lotes[i].Fecha_Vencimiento + " - Cantidad: " + this.Lista_Productos[posProducto].Lotes[i].Cantidad;
                        this.Lista_Productos[posProducto].Cantidad = parseInt(this.Lista_Productos[posProducto].Lotes[i].Cantidad) + this.Lista_Productos[posProducto].Cantidad;
                        cantidad = cantidad - parseInt(this.Lista_Productos[posProducto].Lotes[i].Cantidad);
                        if (cantidad_presentacion) {
                            var modulo = cantidad % this.Lista_Productos[posProducto].Cantidad_Presentacion;
                            if (modulo != 0) {
                                this.Lista_Productos[posProducto].Cantidad_Requerida = this.Lista_Productos[posProducto].Cantidad_Requerida + (this.Lista_Productos[posProducto].Cantidad_Presentacion - modulo);
                                cantidad = cantidad + (this.Lista_Productos[posProducto].Cantidad_Presentacion - modulo);
                            }
                        }
                        this.Lista_Productos[posProducto].Lotes_Visuales.push(labelLote);
                        //flag = false;
                        //SELECCIONAR LOTE EN BD
                    }
                }
            }
            else {
                Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('error', 'Error en cantidad', 'No se pueden entregar cantidades que no correspondan con la presentacion del producto!');
                this.Lista_Productos[posProducto].Cantidad = 0;
                this.Lista_Productos[posProducto].Cantidad_Requerida = 0;
            }
            setTimeout(() => {
                this.Lista_Productos[posProducto].Cantidad_Pendiente = this.Lista_Productos[posProducto].Cantidad_Requerida - this.Lista_Productos[posProducto].Cantidad;
                this.GuardarBorrador();
            }, 100);
        }
        else {
            if (this.Lista_Productos[posProducto].Lotes_Seleccionados.length > 0) {
                this.EliminarLotesSeleccionados(this.Lista_Productos[posProducto].Lotes_Seleccionados, true, posProducto);
            }
        }
    }
    ComprobarCantidades(posProducto) {
        let idProducto = this.Lista_Productos[posProducto].Id_Producto;
        let p = {
            id_origen: this._remisionModel.Id_Origen,
            id_producto: idProducto,
            tipo_origen: this._remisionModel.Tipo_Origen,
            id_destino: this._remisionModel.Id_Destino,
            meses: this._remisionModel.Meses,
            tipo_destino: this._remisionModel.Tipo_Destino
        };
        if (this._remisionModel.Tipo_Origen == 'Bodega') {
            p.grupo = JSON.stringify(this._remisionModel.Grupo);
        }
        // console.log("eliminar lotes");
        // console.log(this._remisionModel);
        this.EliminarLotesSeleccionados(this.Lista_Productos[posProducto].Lotes_Seleccionados, true, posProducto);
        setTimeout(() => {
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/comprobar_cantidades.php', { params: p }).subscribe((data) => {
                if (data.length > 0) {
                    this.Lista_Productos[posProducto].Cantidad_Disponible = parseInt(data[0].Cantidad_Disponible);
                    this.Lista_Productos[posProducto].Lotes = data[0].Lotes;
                    // console.log(this.Lista_Productos[posProducto].Cantidad_Disponible, 'comprobar lotes');
                    this.SeleccionarLotes(posProducto);
                }
                else {
                    this.Lista_Productos[posProducto].Cantidad_Disponible = 0;
                    this.Lista_Productos[posProducto].Lotes = [];
                    Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'El producto ya no tiene cantidad disponible!');
                }
            });
        }, 300);
    }
    EliminarLotesSeleccionados(lote, vaciarLotes = false, posProducto = '') {
        let data = new FormData();
        data.append("datos", JSON.stringify(lote));
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/eliminar_lote_seleccionado.php', data).subscribe((data) => {
            if (data.codigo == 'success') {
                // let toastObj = { textos: [data.titulo, data.mensaje], tipo: data.codigo, duracion: 4000 };
                this._swalService.ShowMessage({ icon: data.codigo, title: data.titulo, text: data.mensaje });
                // this._toastService.ShowToast(toastObj);
                if (vaciarLotes && posProducto.toString() != '') {
                    this.Lista_Productos[posProducto].Lotes_Visuales = [];
                    this.Lista_Productos[posProducto].Lotes_Seleccionados = [];
                    // this.Lista_Productos[posProducto].Cantidad = null;
                }
            }
            else {
                Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])(data);
            }
        });
    }
    ConsultaProductoCodigoBarras() {
        console.log('consulta productos');
        if (this.Codigo_Barras != '') {
            let params = this.setFiltrosCodBarra();
            if (!params) {
                return false;
            }
            this.ProductosAgregar = [];
            this.Cargando = true;
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ruta + 'php/remision_nuevo/get_productos_inventario.php', { params }).subscribe((data) => {
                this.ListaProductos = data;
                if (this.ListaProductos.length > 0) {
                    if (!this.validarAgregados(this.ListaProductos[0].Id_Producto)) {
                        return;
                    }
                    else {
                        let prd = {};
                        this.ListaProductos[0].Lotes_Visuales = new Array();
                        prd = this.SetearProductoCodBarra(this.ListaProductos[0]);
                        if (!src_app_core_utils_functionsUtils__WEBPACK_IMPORTED_MODULE_4__["functionsUtils"].IsObjEmpty(prd)) {
                            this.ProductosAgregar.push(prd);
                        }
                        setTimeout(() => {
                            this.RecibirProductos(this.ProductosAgregar);
                        }, 2000);
                    }
                }
                else {
                    Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'No existe un producto con ese código de barras.');
                }
                this.Codigo_Barras = '';
                this.Cargando = false;
            });
        }
    }
    setFiltrosCodBarra() {
        let params = {};
        if (this._remisionModel.Id_Origen == 0 || this._remisionModel.Id_Origen == undefined) {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('error', 'Sin Origen Seleccionadoe', 'Debe seleccionar un origen para realizaar la busqueda!');
            console.log(1);
            return false;
        }
        else if (this._remisionModel.Tipo_Origen == 'Bodega' && (!this._remisionModel.Grupo.Id_Grupo || this._remisionModel.Grupo.Id_Grupo == undefined)) {
            console.log(this._remisionModel.Grupo);
            console.log(this._remisionModel.Tipo_Origen);
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('error', 'Sin Categoria Seleccionada', 'Debe seleccionar un origen de categoria para realizaar la busqueda!');
            console.log(3);
            return false;
        }
        else {
            console.log(4);
            params.modelo = this._remisionModel.Modelo;
            params.tiporemision = this._remisionModel.Tipo;
            params.id_origen = this._remisionModel.Id_Origen;
            params.mes = this._remisionModel.Meses;
            params.id_grupo = this._remisionModel.Grupo.Id_Grupo;
            console.log(5);
            if (this._remisionModel.Tipo == 'Cliente') {
                params.id_destino = this._remisionModel.Id_Destino;
                if (this._remisionModel.Id_Destino == 0 || this._remisionModel.Id_Destino == undefined) {
                    console.log(6);
                    Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('error', 'Sin Destino Seleccionado', 'Debe seleccionar un destino para realizaar la busqueda!');
                    return;
                }
            }
            console.log(7);
            params.cod_barra = this.Codigo_Barras;
            console.log(params);
            return params;
        }
    }
    validarAgregados(id_producto) {
        let exist = this.Lista_Productos.filter(x => x == id_producto);
        if (exist.length > 0) {
            Object(src_app_core_utils_confirmMessage__WEBPACK_IMPORTED_MODULE_6__["WarningMessage"])('warning', 'Alerta', 'Ya este producto ha sido agregado a la lista!');
            return false;
        }
        else {
            return true;
        }
    }
    SetearProductoCodBarra(producto) {
        let product = new _ProductoCargarRemision__WEBPACK_IMPORTED_MODULE_3__["ProductoCargarRemision"]();
        console.log("producto cod barra --> ", producto);
        for (var key in producto) {
            if (key != 'Codigo_Cum' && key != 'Seleccionado' && key != 'Cantidad_Requerida') {
                if (key == 'Lotes') {
                    console.log("Lotesss --> ", producto[key]);
                    product[key] = this.SetearLotes(producto[key]);
                }
                else if (key == 'Cantidad') {
                    if (producto[key] == '') {
                        product[key] = null;
                    }
                    else {
                        product[key] = parseInt(producto[key]);
                    }
                }
                else {
                    if (!isNaN(parseInt(producto[key]))) {
                        product[key] = parseInt(producto[key]);
                    }
                    else {
                        product[key] = producto[key];
                    }
                }
            }
            else {
                product[key] = producto[key];
            }
        }
        console.log("Luego de setear los productos", product);
        return product;
    }
    SetearLotes(lotes) {
        let lotes_nuevos = new Array();
        lotes.forEach(lote => {
            let lote_nuevo = {};
            for (var key in lote) {
                if (key != 'Fecha_Vencimiento' && key != 'Lote') {
                    lote_nuevo[key] = parseInt(lote[key]);
                }
                else {
                    lote_nuevo[key] = lote[key];
                }
            }
            lotes_nuevos.push(lote_nuevo);
        });
        return lotes_nuevos;
    }
}
ProductosremisionnuevoComponent.ɵfac = function ProductosremisionnuevoComponent_Factory(t) { return new (t || ProductosremisionnuevoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_general_service__WEBPACK_IMPORTED_MODULE_7__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_8__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_producto_service__WEBPACK_IMPORTED_MODULE_9__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_remision_service__WEBPACK_IMPORTED_MODULE_10__["RemisionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_remisionnuevo_service__WEBPACK_IMPORTED_MODULE_11__["RemisionnuevoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_eps_service__WEBPACK_IMPORTED_MODULE_13__["EpsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"])); };
ProductosremisionnuevoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductosremisionnuevoComponent, selectors: [["app-productosremisionnuevo"]], viewQuery: function ProductosremisionnuevoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmacionGuardar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmacionRetornar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmacionSalir = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errorBorrador = _t.first);
    } }, inputs: { ActualizarModelo: "ActualizarModelo", RecibirPendientes: "RecibirPendientes", _remisionModel: "_remisionModel" }, outputs: { CargarBorrador: "CargarBorrador", ActualizarValoresEncabezado: "ActualizarValoresEncabezado" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 53, vars: 34, consts: [[1, "card-body", "pt-0"], ["class", "card bg-light", 4, "ngIf"], [1, "table", "table-striped"], [1, "thead-default"], [3, "ngClass"], [1, "text-center"], [4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "d-flex", "justify-content-end"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-search"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fas", "fa-save"], [3, "AbrirModal", "AgregarProductos"], [3, "swalOptions"], ["confirmacionGuardar", ""], ["confirmacionRetornar", ""], ["title", "", "html", "", "type", "", 3, "confirm"], ["confirmacionSalir", ""], ["errorBorrador", ""], [1, "card", "bg-light"], [1, "card-body"], [1, "row"], [1, "col-md-6"], ["appearance", "outline", 1, "col-md-4"], ["matInput", "", "type", "date", "name", "Fecha_Inicio", "id", "fechainicio", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "name", "Fecaha_Fin", "id", "fechafin", 3, "ngModel", "ngModelChange"], ["name", "Eps", "id", "eps", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "text-left"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light", 3, "disabled"], [1, "fas", "fa-angle-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu-2"], [1, "dropdown-item", "waves-light", "waves-effect", 3, "click"], [3, "value"], [1, "fa", "fa-spinner", "fa-pulse", "fa-5x", "fa-fw"], [1, "sr-only"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [2, "vertical-align", "middle"], [2, "text-align", "left"], [1, "text-muted", 2, "font-size", "9px"], [2, "vertical-align", "middle", "text-align", "left"], [1, "tooltip-item2"], [2, "font-size", "10px"], [1, "tooltip-content4", "clearfix"], [1, "tooltip-text2"], ["type", "number", "min", "0", "pattern", "[0-9]", "onkeypress", "return event.charCode >= 48  && event.charCode <= 57 ", 1, "form-control", "form-control-sm", "text-right", "f-9", "tabla", 3, "id", "name", "ngModel", "ngModelChange", "change"], ["type", "number", "min", "0", "onkeypress", "return event.charCode >= 48  && event.charCode <= 57 ", 1, "form-control", "form-control-sm", "text-right", "f-9", "tabla", 3, "id", "name", "ngModel", "readonly", "ngModelChange", "change"], ["style", "cursor: pointer", 3, "click", 4, "ngIf"], ["type", "number", 1, "form-control", "form-control-sm", "text-right", "f-9", 3, "id", "name", "ngModel", "ngModelChange", "change"], [1, "form-group", "input-group", "input-group-button"], ["type", "number", "min", "0", "onkeypress", "return event.charCode >= 48  && event.charCode <= 57 ", 1, "form-control", "form-control-sm", "text-right", "f-9", 2, "text-align", "center", 3, "id", "name", "ngModel", "ngModelChange", "change"], [1, "input-group-append"], [1, "fa", "fa-trash-o", "text-danger", "f-14", 2, "cursor", "pointer", 3, "click"], ["class", "lista-lotes", 4, "ngFor", "ngForOf"], [1, "lista-lotes"], [1, "fa", "fa-check-circle", "text-success"], [2, "cursor", "pointer", 3, "click"], [1, "ti-plus", "text-success", "f-14"], [1, "table", "table-responsive", "invoice-table", "invoice-total"]], template: function ProductosremisionnuevoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductosremisionnuevoComponent_div_1_Template, 35, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Emb. / Cat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Presentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Rotacion/Stock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cantidad Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Cantidad Requerida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Precio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Descuento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " IVA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Subtotal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductosremisionnuevoComponent_tr_32_Template, 7, 1, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProductosremisionnuevoComponent_tbody_33_Template, 2, 1, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProductosremisionnuevoComponent_div_34_Template, 27, 12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosremisionnuevoComponent_Template_button_click_37_listener() { return ctx.AbrirModalAgregarProductos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Agregar Productos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductosremisionnuevoComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); return _r4.fire(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Guardar Remision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "app-modalproductoremisionnuevo", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AgregarProductos", function ProductosremisionnuevoComponent_Template_app_modalproductoremisionnuevo_AgregarProductos_43_listener($event) { return ctx.RecibirProductos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-modalcambiarproductossimilarnuevo", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("AgregarProductos", function ProductosremisionnuevoComponent_Template_app_modalcambiarproductossimilarnuevo_AgregarProductos_44_listener($event) { return ctx.RealizarCambioProducto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "swal", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "swal", 15, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "swal", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("confirm", function ProductosremisionnuevoComponent_Template_swal_confirm_49_listener() { return ctx.VerPantallaLista(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "swal", 15, 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._remisionModel.Tipo == "Interna" && ctx._remisionModel.Modelo == "Bodega-Punto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c4, ctx.Display_Rotacion, !ctx.Display_Rotacion));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c4, ctx.Display_Interna, !ctx.Display_Interna));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c4, ctx.Display_Cliente, !ctx.Display_Cliente));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c4, ctx.Display_Cliente, !ctx.Display_Cliente));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](28, _c4, ctx.Display_Cliente, !ctx.Display_Cliente));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](31, _c4, ctx.Display_Cliente, !ctx.Display_Cliente));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._remisionModel.Tipo == "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.Lista_Productos.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("AbrirModal", ctx.AbrirModalProductos.asObservable());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("AbrirModal", ctx.AbrirModalProductoCambiar.asObservable());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swalOptions", ctx.alertOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swalOptions", ctx.alertOptionRetorno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swalOptions", ctx.alertOptionBorrador);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _modalproductoremisionnuevo_modalproductoremisionnuevo_component__WEBPACK_IMPORTED_MODULE_16__["ModalproductoremisionnuevoComponent"], _modalcambiarproductossimilarnuevo_modalcambiarproductossimilarnuevo_component__WEBPACK_IMPORTED_MODULE_17__["ModalcambiarproductossimilarnuevoComponent"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_18__["SwalComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbDropdownMenu"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["PatternValidator"]], pipes: [ng2_truncate__WEBPACK_IMPORTED_MODULE_25__["TruncateCharactersPipe"], _core_pipes_customcurrency_pipe__WEBPACK_IMPORTED_MODULE_26__["CustomcurrencyPipe"]], styles: [".mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: white;\n  border-radius: 5px;\n}\ninput[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  right: 0;\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0b3NyZW1pc2lvbm51ZXZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTtBQTZCQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBOztFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUYiLCJmaWxlIjoicHJvZHVjdG9zcmVtaXNpb25udWV2by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5kaXNwbGF5LXRhYmxlLWNlbGx7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG4ubm8tZGlzcGxheXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kaXNwbGF5LXRvdGFsc3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubm90YXtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b29sdGlwLXRleHQye1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0LWJhcnJhc3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "yiTy":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/inventario/remision/remisioneditar/remisioneditar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RemisioneditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemisioneditarComponent", function() { return RemisioneditarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "f02I");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng2_truncate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-truncate */ "o2tx");












const _c0 = ["IdPuntoDispensacion"];
const _c1 = ["confirmacionSwal"];
const _c2 = ["confirmacionSalir"];
const _c3 = ["FormTraslado"];
const _c4 = ["confirmacionGuardar"];
function RemisioneditarComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r9.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.Nombre);
} }
function RemisioneditarComponent_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contrato_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", contrato_r10.Id_Contrato);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contrato_r10.NombreContrato);
} }
function RemisioneditarComponent_tr_109_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 2, item_r12.Embalaje, 12), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r12.Embalaje);
} }
function RemisioneditarComponent_tr_109_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lote_visual_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](lote_visual_r21);
} }
function RemisioneditarComponent_tr_109_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const impuesto_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", impuesto_r22.Valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](impuesto_r22.Valor);
} }
function RemisioneditarComponent_tr_109_i_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 91);
} }
const _c5 = "Se dispone a Eliminar este Producto de la Remisi\u00F3n, esta acci\u00F3n no tiene vuelta atr\u00E1s";
const _c6 = function () { return { title: "\u00BFEst\u00E1 Seguro?", text: _c5, type: "warning", showCancelButton: true, confirmButtonText: "Si, Guardar", cancelButtonText: "No, Dejame Comprobar!" }; };
function RemisioneditarComponent_tr_109_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirm", function RemisioneditarComponent_tr_109_button_36_Template_button_confirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const i_r13 = ctx_r25.index; const item_r12 = ctx_r25.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.EliminaProductoFinal(i_r13, item_r12.Id_Producto_Remision); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("swal", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c6));
} }
function RemisioneditarComponent_tr_109_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemisioneditarComponent_tr_109_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.EliminarProductoRemsion(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c7 = function (a0) { return { "display": a0 }; };
function RemisioneditarComponent_tr_109_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RemisioneditarComponent_tr_109_Template_input_ngModelChange_5_listener($event) { const item_r12 = ctx.$implicit; return item_r12.producto = $event; })("ngModelChange", function RemisioneditarComponent_tr_109_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const item_r12 = ctx.$implicit; const i_r13 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.ProductoSeleccionado(item_r12.producto, i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, RemisioneditarComponent_tr_109_span_9_Template, 8, 5, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RemisioneditarComponent_tr_109_Template_input_ngModelChange_15_listener($event) { const item_r12 = ctx.$implicit; return item_r12.Cantidad = $event; })("change", function RemisioneditarComponent_tr_109_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r13 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r34.BuscarLote(i_r13, $event.target.value); ctx_r34.CalcularTotal(i_r13); return ctx_r34.ActualizaValores(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, RemisioneditarComponent_tr_109_li_18_Template, 3, 1, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RemisioneditarComponent_tr_109_Template_input_ngModelChange_20_listener($event) { const item_r12 = ctx.$implicit; return item_r12.Precio_Venta = $event; })("change", function RemisioneditarComponent_tr_109_Template_input_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r13 = ctx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r36.CalcularTotal(i_r13); return ctx_r36.ActualizaValores(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RemisioneditarComponent_tr_109_Template_input_ngModelChange_22_listener($event) { const item_r12 = ctx.$implicit; return item_r12.Descuento = $event; })("ngModelChange", function RemisioneditarComponent_tr_109_Template_input_ngModelChange_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r13 = ctx.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r38.CalcularTotal(i_r13); return ctx_r38.ActualizaValores(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemisioneditarComponent_tr_109_Template_select_change_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r13 = ctx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r39.CalcularTotal(i_r13); return ctx_r39.ActualizaValores(); })("ngModelChange", function RemisioneditarComponent_tr_109_Template_select_ngModelChange_26_listener($event) { const item_r12 = ctx.$implicit; return item_r12.Impuesto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Sin IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, RemisioneditarComponent_tr_109_option_29_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RemisioneditarComponent_tr_109_Template_input_ngModelChange_31_listener($event) { const item_r12 = ctx.$implicit; return item_r12.Subtotal = $event; })("change", function RemisioneditarComponent_tr_109_Template_input_change_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r42.ActualizaValores(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RemisioneditarComponent_tr_109_Template_input_ngModelChange_33_listener($event) { const item_r12 = ctx.$implicit; return item_r12.Suma = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, RemisioneditarComponent_tr_109_i_34_Template, 1, 0, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, RemisioneditarComponent_tr_109_button_36_Template, 3, 2, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, RemisioneditarComponent_tr_109_button_37_Template, 3, 0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "fila", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "Nombre_Producto", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "Producto", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r12.producto)("ngbTypeahead", ctx_r3.search1)("resultTemplate", _r4)("inputFormatter", ctx_r3.formatter1)("readonly", item_r12.Id_Producto_Remision != "" ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r12.Categoria, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r12.Id_Producto != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "presentacion", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "presentacion", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", item_r12.Cantidad_Presentacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "Cantidad_Disponible", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "Cantidad_Disponible", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", item_r12.Cantidad_Disponible);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "CantidadIngresada", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "Cantidad_Total", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r12.Cantidad)("readonly", item_r12.Id_Producto_Remision != "" ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r12.Lotes_Visuales);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](45, _c7, ctx_r3.display_Cliente_tabla));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "precioVenta", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "precioVenta", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r12.Precio_Venta);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](47, _c7, ctx_r3.display_Cliente_tabla));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "descuento", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "Descuento", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r12.Descuento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](49, _c7, ctx_r3.display_Cliente_tabla));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](51, _c7, ctx_r3.display_Cliente_tabla));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "impuesto", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "impuesto", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r12.Impuesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.Impuesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](53, _c7, ctx_r3.display_Cliente_tabla));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "Subtotal", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r12.Subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "Suma", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "suma", i_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r12.Suma);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r12.Suma < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r12.Id_Producto_Remision != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r12.Id_Producto_Remision == "");
} }
function RemisioneditarComponent_ng_template_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r44 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", r_r44.Nombre, " ");
} }
class RemisioneditarComponent {
    constructor(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.Lista_Productos = [{
                producto: '',
                Id_Producto: '',
                Lotes: [],
                Lotes_Auxiliar: [],
                Lotes_Seleccionados: [],
                Lotes_Visuales: [],
                Precio_Venta: 0,
                Cantidad: 0,
                Categoria: '',
                Descuento: 0,
                Subtotal: 0,
                Rotativo: 0,
                Impuesto: 0,
                Total_Impuesto: 0,
                Total_Descuento: 0,
                Nombre_Producto: '',
                Suma: 0,
                Cantidad_Presentacion: 0,
                Id_Producto_Remision: '',
                Embalaje: '',
                Cantidad_Disponible: 0
            }];
        this.Lista_Ganancia1 = '';
        this.Costo_Remision = 0;
        this.Impuesto_Remision = 0;
        this.Subtotal_Remision = 0;
        this.Descuento_Remision = 0;
        this.ListaProductoBusqueda = [];
        this.Nombre_Destino = '';
        this.reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Subtotal);
        this.reducer_desc = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Total_Descuento);
        this.reducer_imp = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Total_Impuesto);
        this.display_Cliente = 'block';
        this.display_Interna = 'none';
        this.display_Cliente_tabla = 'none';
        this.Identificacion = [];
        this.IdPuntoDispensacion = '';
        this.alertOption = {};
        this.remision = [];
        this.origen = [];
        this.productos = [];
        this.destino = [];
        this.contrato = [];
        this.desabilitar = false;
        this.Meses = [];
        this.Identificacion_Funcionario = (JSON.parse(localStorage.getItem("User"))).Identificacion_Funcionario;
        this.Destino = [];
        this.Destino_Remision = '';
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 4 ? []
            : this.ListaProductoBusqueda.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        this.formatter1 = (x) => x.Nombre;
        this.normalize = (function () {
            var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc", mapping = {};
            for (var i = 0, j = from.length; i < j; i++)
                mapping[from.charAt(i)] = to.charAt(i);
            return function (str) {
                var ret = [];
                for (var i = 0, j = str.length; i < j; i++) {
                    var c = str.charAt(i);
                    if (mapping.hasOwnProperty(str.charAt(i)))
                        ret.push(mapping[c]);
                    else
                        ret.push(c);
                }
                return ret.join('');
            };
        })();
        for (let i = 0; i <= 18; i++) {
            this.Meses.push({
                dia: i
            });
        }
        this.Identificacion = JSON.parse(localStorage.getItem("User"));
        let id = this.route.snapshot.params["id"];
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/remision.php', {
            params: { id: id }
        }).subscribe((data) => {
            if (data.Remision.Tipo_Destino == "Bodega") {
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/detalle_bodegas_punto.php?id=' + this.Identificacion.Identificacion_Funcionario).subscribe((dato) => {
                    this.Destino = dato.Bodega;
                    this.Destino_Remision = 'B-' + data.Remision.Id_Destino;
                    console.log(this.Destino_Remision);
                });
            }
            else if (data.Remision.Tipo_Destino == "Punto_Dispensacion") {
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/detalle_bodegas_punto.php?id=' + this.Identificacion.Identificacion_Funcionario).subscribe((dato) => {
                    this.Destino = dato.Punto;
                    this.Destino_Remision = 'P-' + data.Remision.Id_Destino;
                    console.log(this.Destino_Remision);
                });
            }
            this.remision = data.Remision;
            this.punto = this.remision.Tipo_Destino.split("_");
            this.origen = data.Origen;
            this.destino = data.Destino;
            this.contrato = data.Contrato;
            this.Cambiar_Remision(this.remision.Tipo);
            // console.log(this.remision);
        });
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Guardar esta Remisión",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            // type: 'info',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.GuardarRemision(this.FormTraslado);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.isLoading()
        };
    }
    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/lista_generales.php', { params: { modulo: 'Impuesto' } }).subscribe((data) => {
            this.Impuesto = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/detalle_remison.php', {
            params: { id: id }
        }).subscribe((data) => {
            this.Lista_Productos = data;
            // console.log(this.Lista_Productos);
            this.Lista_Productos.push({
                producto: '',
                Id_Producto: '',
                Lotes: [],
                Lotes_Auxiliar: [],
                Lotes_Seleccionados: [],
                Lotes_Visuales: [],
                Precio_Venta: 0,
                Cantidad: 0,
                Categoria: '',
                Descuento: 0,
                Subtotal: 0,
                Rotativo: 0,
                Impuesto: 0,
                Total_Impuesto: 0,
                Total_Descuento: 0,
                Nombre_Producto: '',
                Suma: 0,
                Cantidad_Presentacion: 0,
                Id_Producto_Remision: '',
                Embalaje: '',
                Cantidad_Disponible: 0
            });
            this.ActualizaValores();
        });
    }
    ProductoSeleccionado(modelo, pos) {
        var posicion = this.Lista_Productos.findIndex(x => x.Id_Producto === modelo.Id_Producto);
        if (posicion >= 0) {
            this.confirmacionSwal.title = "Producto Repetido ";
            this.confirmacionSwal.html = "Este Producto ya se encuentra dentro del listado por Favor revise";
            this.confirmacionSwal.type = "error";
            this.confirmacionSwal.show();
            this.Lista_Productos[pos] = {
                producto: '',
                Id_Producto: '',
                Lotes: [],
                Lotes_Auxiliar: [],
                Lotes_Seleccionados: [],
                Lotes_Visuales: [],
                Precio_Venta: 0,
                Cantidad: 0,
                Categoria: '',
                Descuento: 0,
                Subtotal: 0,
                Rotativo: 0,
                Impuesto: 0,
                Total_Impuesto: 0,
                Total_Descuento: 0,
                Nombre_Producto: '',
                Suma: 0,
                Cantidad_Presentacion: 0,
                Id_Producto_Remision: '',
                Embalaje: '',
                Cantidad_Disponible: 0
            };
        }
        else {
            var Bodega = this.remision.Id_Origen;
            var tipo = this.remision.Tipo_Origen;
            var tiporemision = this.remision.Tipo;
            var meses = '1';
            var lista = this.remision.Id_Lista;
            if (modelo.Lotes != undefined) {
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/detalle_producto.php', {
                    params: { idproducto: modelo.Id_Producto, id: Bodega, tipo: tipo, mes: meses, tiporemision: tiporemision, lista: lista }
                }).subscribe((data) => {
                    let pos2 = pos + 1;
                    if (data[0]) {
                        //this.Lista_Productos.splice(pos,0,data[0]);
                        let prod = this.Lista_Productos[pos];
                        this.Lista_Productos[pos] = {};
                        this.Lista_Productos[pos].producto = modelo;
                        this.Lista_Productos[pos].Precio_Venta = data[0].precio;
                        this.Lista_Productos[pos].Lotes = data[0].Lotes;
                        this.Lista_Productos[pos].Lotes_Auxiliar = data[0].Lotes;
                        this.Lista_Productos[pos].Id_Producto = data[0].Id_Producto;
                        this.Lista_Productos[pos].Nombre_Producto = data[0].Nombre;
                        this.Lista_Productos[pos].Suma = data[0].Suma;
                        this.Lista_Productos[pos].Categoria = data[0].Categoria;
                        this.Lista_Productos[pos].Impuesto = data[0].Impuesto;
                        this.Lista_Productos[pos].Cantidad_Presentacion = data[0].Cantidad_Presentacion;
                        this.Lista_Productos[pos].Embalaje = data[0].Embalaje;
                        this.Lista_Productos[pos].Cantidad_Disponible = data[0].Cantidad_Disponible;
                        this.Lista_Productos[pos].Total_Impuesto = 0;
                        this.Lista_Productos[pos].Total_Descuento = 0;
                        this.Lista_Productos[pos].Id_Producto = modelo.Id_Producto;
                        this.Lista_Productos[pos].Lotes_Seleccionados = [];
                        this.Lista_Productos[pos].Lotes_Visuales = [];
                        this.Lista_Productos[pos].Cantidad = 0;
                        this.Lista_Productos[pos].Descuento = 0;
                        this.Lista_Productos[pos].Subtotal = 0;
                        this.Lista_Productos[pos].Id_Producto_Remision = '';
                        this.Lista_Productos[pos].Bloqueo = true;
                        if (this.Lista_Productos[pos2] == undefined) {
                            this.Lista_Productos.push({
                                producto: '',
                                Id_Producto: '',
                                Lotes: [],
                                Lotes_Auxiliar: [],
                                Lotes_Seleccionados: [],
                                Lotes_Visuales: [],
                                Precio_Venta: 0,
                                Cantidad: 0,
                                Categoria: '',
                                Descuento: 0,
                                Subtotal: 0,
                                Rotativo: 0,
                                Impuesto: 0,
                                Total_Impuesto: 0,
                                Total_Descuento: 0,
                                Nombre_Producto: '',
                                Suma: 0,
                                Cantidad_Presentacion: 0,
                                Id_Producto_Remision: '',
                                Embalaje: '',
                                Cantidad_Disponible: 0
                            });
                            setTimeout(() => {
                                document.getElementById("Producto" + pos).setAttribute('readonly', 'true');
                                if (pos2 == 70) {
                                    document.getElementById("Producto" + pos2).setAttribute('readonly', 'readonly');
                                }
                            }, 100);
                        }
                    }
                    else {
                        this.Lista_Productos[pos] = {
                            producto: '',
                            Id_Producto: '',
                            Lotes: [],
                            Lotes_Auxiliar: [],
                            Lotes_Seleccionados: [],
                            Lotes_Visuales: [],
                            Precio_Venta: 0,
                            Cantidad: 0,
                            Categoria: '',
                            Descuento: 0,
                            Subtotal: 0,
                            Rotativo: 0,
                            Impuesto: 0,
                            Total_Impuesto: 0,
                            Total_Descuento: 0,
                            Nombre_Producto: '',
                            Suma: 0,
                            Cantidad_Presentacion: 0,
                            Id_Producto_Remision: '',
                            Embalaje: '',
                            Cantidad_Disponible: 0
                        };
                        this.confirmacionSwal.title = "No Disponible";
                        this.confirmacionSwal.html = "El producto ya no tiene lotes disponibles, por favor escoja otro.";
                        this.confirmacionSwal.type = "error";
                        this.confirmacionSwal.show();
                    }
                });
            }
        }
    }
    BuscarLote(i, cantidad) {
        //this.Lista_Productos[i].Lotes_Auxiliar;
        var Lista_Bandera = [];
        var contador = this.Lista_Productos[i].Lotes_Auxiliar.length;
        var siguiente = true;
        this.Lista_Productos[i].Lotes_Seleccionados = [];
        this.Lista_Productos[i].Lotes_Visuales = [];
        var sumaLote = 0;
        var cantidadsuma = cantidad;
        var multipo = parseInt(cantidad) % parseInt(this.Lista_Productos[i].Cantidad_Presentacion);
        var bodega = 'B-' + this.remision.Id_Origen;
        if (bodega != 'B-5') {
            if (parseInt(cantidad) > 0 && multipo == 0) {
                for (let d = 0; d < contador; d++) {
                    if (siguiente && cantidad <= parseInt(this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad)) {
                        let item = JSON.parse(JSON.stringify(this.Lista_Productos[i].Lotes_Auxiliar[d]));
                        item.label = "Lote: " + this.Lista_Productos[i].Lotes_Auxiliar[d].Lote + " - Vencimiento: " + this.Lista_Productos[i].Lotes_Auxiliar[d].Fecha_Vencimiento + " - Cantidad: " + cantidad;
                        item.Cantidad = cantidad;
                        siguiente = false;
                        sumaLote += parseInt(cantidad);
                        /**SELECCIONA CANTIDAD DE LOTE EN TIEMPO REAL DEL LOTE */
                        let info = JSON.stringify(item);
                        let datos = new FormData();
                        datos.append("datos", info);
                        item.Cantidad_Seleccionada = cantidad;
                        this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad_Seleccionada = cantidad;
                        Lista_Bandera.push(item);
                        this.Lista_Productos[i].Lotes_Seleccionados.push(item);
                        this.Lista_Productos[i].Lotes_Visuales.push(item.label);
                        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/selecciona_lote.php', datos).subscribe((data) => {
                        });
                        /**FIN SELECCIONA CANTIDAD DE LOTE EN TIEMPO REAL DEL LOTE */
                    }
                    else if (siguiente && cantidad > parseInt(this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad)) {
                        cantidad = cantidad - this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad;
                        sumaLote += parseInt(this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad);
                        /**SELECCIONA CANTIDAD DE LOTE EN TIEMPO REAL DEL LOTE */
                        let info = JSON.stringify(this.Lista_Productos[i].Lotes_Auxiliar[d]);
                        let datos = new FormData();
                        datos.append("datos", info);
                        this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad_Seleccionada = this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad;
                        Lista_Bandera.push(this.Lista_Productos[i].Lotes_Auxiliar[d]);
                        this.Lista_Productos[i].Lotes_Seleccionados.push(this.Lista_Productos[i].Lotes_Auxiliar[d]);
                        this.Lista_Productos[i].Lotes_Visuales.push(this.Lista_Productos[i].Lotes_Auxiliar[d].label);
                        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/selecciona_lote.php', datos).subscribe((data) => {
                        });
                        /**FIN SELECCIONA CANTIDAD DE LOTE EN TIEMPO REAL DEL LOTE */
                    }
                }
                if (sumaLote < parseInt(cantidadsuma)) {
                    this.Lista_Productos[i].Cantidad = sumaLote;
                    this.confirmacionSwal.title = "Error en la cantidad Ingresada";
                    this.confirmacionSwal.html = "La cantidad ingresada  supera la cantidad disponible";
                    this.confirmacionSwal.type = "error";
                    this.confirmacionSwal.show();
                }
            }
            else {
                this.confirmacionSwal.title = "Error en la cantidad Ingresada";
                this.confirmacionSwal.html = "No se pueden entregar cantidades incompletas o nulas de acuerdo a la Presentacion del Producto";
                this.confirmacionSwal.type = "error";
                this.Lista_Productos[i].Cantidad = 0;
                this.confirmacionSwal.show();
            }
            this.Lista_Productos[i].Lotes = Lista_Bandera;
        }
        else {
            for (let d = 0; d < contador; d++) {
                if (siguiente && cantidad <= parseInt(this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad)) {
                    let item = JSON.parse(JSON.stringify(this.Lista_Productos[i].Lotes_Auxiliar[d]));
                    item.label = "Lote: " + this.Lista_Productos[i].Lotes_Auxiliar[d].Lote + " - Vencimiento: " + this.Lista_Productos[i].Lotes_Auxiliar[d].Fecha_Vencimiento + " - Cantidad: " + cantidad;
                    item.Cantidad = cantidad;
                    Lista_Bandera.push(item);
                    this.Lista_Productos[i].Lotes_Seleccionados.push(item);
                    this.Lista_Productos[i].Lotes_Visuales.push(item.label);
                    siguiente = false;
                    sumaLote += parseInt(cantidad);
                    /**SELECCIONA CANTIDAD DE LOTE EN TIEMPO REAL DEL LOTE */
                    let info = JSON.stringify(item);
                    let datos = new FormData();
                    datos.append("datos", info);
                    item.Cantidad_Seleccionada = cantidad;
                    this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad_Seleccionada = cantidad;
                    Lista_Bandera.push(item);
                    this.Lista_Productos[i].Lotes_Seleccionados.push(item);
                    this.Lista_Productos[i].Lotes_Visuales.push(item.label);
                    this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/selecciona_lote.php', datos).subscribe((data) => {
                    });
                    /**FIN SELECCIONA CANTIDAD DE LOTE EN TIEMPO REAL DEL LOTE */
                }
                else if (siguiente && cantidad > parseInt(this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad)) {
                    cantidad = cantidad - this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad;
                    sumaLote += parseInt(this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad);
                    /**SELECCIONA CANTIDAD DE LOTE EN TIEMPO REAL DEL LOTE */
                    let info = JSON.stringify(this.Lista_Productos[i].Lotes_Auxiliar[d]);
                    let datos = new FormData();
                    datos.append("datos", info);
                    this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad_Seleccionada = this.Lista_Productos[i].Lotes_Auxiliar[d].Cantidad;
                    Lista_Bandera.push(this.Lista_Productos[i].Lotes_Auxiliar[d]);
                    this.Lista_Productos[i].Lotes_Seleccionados.push(this.Lista_Productos[i].Lotes_Auxiliar[d]);
                    this.Lista_Productos[i].Lotes_Visuales.push(this.Lista_Productos[i].Lotes_Auxiliar[d].label);
                    this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/selecciona_lote.php', datos).subscribe((data) => {
                    });
                    /**FIN SELECCIONA CANTIDAD DE LOTE EN TIEMPO REAL DEL LOTE */
                }
            }
            if (sumaLote < parseInt(cantidadsuma)) {
                this.Lista_Productos[i].Cantidad = sumaLote;
                this.confirmacionSwal.title = "Error en la cantidad Ingresada";
                this.confirmacionSwal.html = "La cantidad ingresada  supera la cantidad disponible";
                this.confirmacionSwal.type = "error";
                this.confirmacionSwal.show();
            }
            this.Lista_Productos[i].Lotes = Lista_Bandera;
        }
    }
    CalcularTotal(pos) {
        var Cantidad = this.Lista_Productos[pos].Cantidad;
        var Descuento = this.Lista_Productos[pos].Descuento;
        var des = this.Lista_Productos[pos].Descuento;
        var Precio = this.Lista_Productos[pos].Precio_Venta;
        var Impuesto = this.Lista_Productos[pos].Impuesto;
        var imp = parseFloat(this.Lista_Productos[pos].Impuesto);
        this.Lista_Productos[pos].Subtotal = (parseFloat(Cantidad) * parseFloat(Precio));
        if (Descuento != "") {
            des = (parseFloat(this.Lista_Productos[pos].Subtotal) * (des / 100));
            this.Lista_Productos[pos].Total_Descuento = des;
        }
        if (Impuesto !== "") {
            imp = ((parseFloat(this.Lista_Productos[pos].Subtotal) - parseFloat(this.Lista_Productos[pos].Total_Descuento)) * (imp / 100));
            this.Lista_Productos[pos].Total_Impuesto = imp;
        }
    }
    ActualizaValores() {
        this.Subtotal_Remision = parseFloat(this.Lista_Productos.reduce(this.reducer, 0));
        this.Impuesto_Remision = parseFloat(this.Lista_Productos.reduce(this.reducer_imp, 0));
        this.Descuento_Remision = parseFloat(this.Lista_Productos.reduce(this.reducer_desc, 0));
        this.Costo_Remision = this.Subtotal_Remision - this.Descuento_Remision + this.Impuesto_Remision;
    }
    Cambiar_Remision(tipo) {
        let serv = tipo;
        var fecha = new Date();
        this.FechaFin = fecha.toISOString().split("T")[0];
        var dia = new Date(fecha.setDate(fecha.getDate() - 30));
        this.FechaInicio = dia.toISOString().split("T")[0];
        if (serv == 'Interna') {
            this.display_Interna = 'block';
            this.display_Cliente = 'none';
            this.display_Cliente_tabla = 'none';
            this.ListaProductosBodega();
        }
        else {
            this.display_Interna = 'none';
            this.display_Cliente = 'block';
            this.display_Cliente_tabla = 'table-cell';
            if (this.remision.Tipo_Lista == "Contrato") {
                this.ListarContratos();
            }
            else {
                this.Lista_Ganancia();
                this.Id_Lista = this.remision.Id_Lista;
            }
        }
    }
    ListaProductosBodega() {
        var Bodega = this.remision.Id_Origen;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/detalle_productos_bodega.php', { params: { id: Bodega, tipo: this.remision.Tipo_Origen } }).subscribe((data) => {
            this.ListaProductoBusqueda = data;
        });
    }
    ListarContratos() {
        var Idcliente = this.remision.Id_Destino;
        if (Idcliente) {
            var id = Idcliente;
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/contratos.php', { params: { id: id } }).subscribe((data) => {
                this.Contratos = data;
                if (Idcliente != "") {
                    if (this.Contratos.length != 0) {
                        this.disabled = false;
                    }
                    this.desabilitar = true;
                }
                else {
                    this.disabled = true;
                    this.desabilitar = true;
                }
            });
        }
    }
    Lista_Ganancia() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/productos_lista_ganancia.php', { params: { id: this.remision.Id_Origen, lista: this.remision.Id_Lista, } }).subscribe((data) => {
            this.ListaProductoBusqueda = data;
        });
    }
    showAlert(evt) {
        var tipo = this.remision.Tipo;
        if (tipo == 'Interna') {
            var punto = this.remision.Id_Destino;
            if (punto == '') {
                this.confirmacionSwal.title = "Error";
                this.confirmacionSwal.html = "Por favor seleccione el Punto de destino";
                this.confirmacionSwal.type = "error";
                this.confirmacionSwal.show();
            }
            else if (this.Lista_Productos.length == 1) {
                this.confirmacionSwal.title = "Error";
                this.confirmacionSwal.html = "No puede guardar una remison sin productos";
                this.confirmacionSwal.type = "error";
                this.confirmacionSwal.show();
            }
            else {
                this.confirmacionGuardar.fire();
            }
        }
        else {
            if (this.Lista_Productos.length == 1) {
                this.confirmacionSwal.title = "Error";
                this.confirmacionSwal.html = "No puede guardar una remison sin productos";
                this.confirmacionSwal.type = "error";
                this.confirmacionSwal.show();
            }
            else {
                this.confirmacionGuardar.fire();
            }
        }
    }
    save() {
        // console.log("Remision Guardada");
    }
    GuardarRemision(formulario) {
        let id = this.route.snapshot.params["id"];
        let info = this.normalize(JSON.stringify(this.remision));
        let prod = this.normalize(JSON.stringify(this.Lista_Productos));
        let datos = new FormData();
        datos.append("id", id);
        datos.append("datos", info);
        datos.append("funcionario", this.Identificacion_Funcionario);
        datos.append("productos", prod);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/actualizar_remision.php', datos).subscribe((data) => {
            this.confirmacionSalir.title = 'Remisión Actualizada';
            this.confirmacionSalir.html = data.mensaje;
            this.confirmacionSalir.type = data.tipo;
            this.confirmacionSalir.show();
            formulario.reset();
            this.Lista_Productos = [{
                    producto: '',
                    Id_Producto: '',
                    Lotes: [],
                    Lotes_Auxiliar: [],
                    Lotes_Seleccionados: [],
                    Lotes_Visuales: [],
                    Precio_Venta: 0,
                    Cantidad: 0,
                    Categoria: '',
                    Descuento: 0,
                    Subtotal: 0,
                    Rotativo: 0,
                    Impuesto: 0,
                    Total_Impuesto: 0,
                    Total_Descuento: 0,
                    Nombre_Producto: '',
                    Suma: 0,
                    Cantidad_Presentacion: 0,
                    Id_Producto_Remision: '',
                    Embalaje: '',
                    Cantidad_Disponible: 0
                }];
            // this.VerPantallaLista();
        });
    }
    VerPantallaLista() {
        this.router.navigate(['/remisiones']);
    }
    EliminarProductoRemsion(i) {
        if (this.Lista_Productos[i].producto != '') {
            let info = JSON.stringify(this.Lista_Productos[i].Lotes_Seleccionados);
            let datos = new FormData();
            datos.append("datos", info);
            //this.Lista_Productos[i]={};
            this.Lista_Productos.splice(i, 1);
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/elimina_selecciona_lote.php', datos).subscribe((data) => {
            });
        }
    }
    EliminaProductoFinal(i, Id_Producto_Remision) {
        let info = JSON.stringify(this.Lista_Productos[i].Lotes_Seleccionados);
        let datos = new FormData();
        datos.append("datos", info);
        datos.append("Nombre", this.normalize(this.Lista_Productos[i].Nombre));
        datos.append("rem", this.remision.Id_Remision);
        datos.append("funcionario", this.Identificacion_Funcionario);
        //this.Lista_Productos[i]={};
        this.Lista_Productos.splice(i, 1);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/elimina_producto_remision.php', datos).subscribe((data) => {
        });
    }
    Contrato(idcontrato) {
        var id = idcontrato.substr(2);
        var bodega = this.remision.Id_Origen;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/remision/productos_contrato.php', { params: { id: id, bodega: bodega } }).subscribe((data) => {
            this.ListaProductoBusqueda = data;
        });
    }
    AgregarNombreDestino() {
        let select = document.getElementById("Id_Destino");
        this.Nombre_Destino = select.options[select.selectedIndex].text;
    }
}
RemisioneditarComponent.ɵfac = function RemisioneditarComponent_Factory(t) { return new (t || RemisioneditarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RemisioneditarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RemisioneditarComponent, selectors: [["app-remisioneditar"]], viewQuery: function RemisioneditarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.IdPuntoDispensacion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.confirmacionSalir = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.FormTraslado = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.confirmacionGuardar = _t.first);
    } }, decls: 150, vars: 66, consts: [[1, "page-body"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-md-offset-4"], ["ng-submit", ""], ["FormTraslado", "ngForm"], [1, "card"], [1, "row", "invoice-contact", 2, "align-items", "flex-start !important"], [1, "col-md-8"], [1, "invoice-box", "row"], [1, "col-sm-12"], [1, "table", "table-responsive", "invoice-table", "table-borderless"], [2, "width", "100px"], [1, "col-md-4"], [1, "row", "text-right", 2, "margin-right", "5px"], [1, "f-right"], [1, "clearfix"], ["type", "hidden", "name", "Identificacion_Funcionario", 3, "ngModel"], ["type", "hidden", "name", "Codigo", 3, "ngModel"], [1, "f-right", "m-t-5"], [1, "card-body"], [1, "row", "invoive-info", 2, "margin-bottom", "0"], [1, "col-md-5"], [1, "form-group"], ["id", "Origen", "name", "Origen", "type", "text", "readonly", "", 1, "form-control", "form-control-sm", "text-letf", "f-9", 3, "ngModel"], ["hidden", "", "id", "Id_Origen", "name", "Id_Origen", "type", "text", 1, "form-control", "form-control-sm", "text-letf", "f-9", 3, "ngModel"], [1, "col-md-6", 3, "ngStyle"], ["id", "Id_Destino", "name", "Id_Destino", 1, "form-control", "form-control-sm", 3, "ngModel", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["hidden", "", "type", "text", "name", "Nombre_Destino", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "ngModelChange"], [1, "col-md-4", 3, "ngStyle"], ["id", "Cliente", "name", "Cliente", "type", "text", "readonly", "", 1, "form-control", "form-control-sm", "text-letf", "f-9", 3, "ngModel"], ["hidden", "", "id", "Id_Cliente", "name", "Id_Cliente", "type", "text", 1, "form-control", "form-control-sm", "text-letf", "f-9", 3, "ngModel"], [1, "col-md-1", 3, "ngStyle"], ["id", "Id_Contrato", "name", "Contrato", "name", "Id_Contrato", 1, "form-control", "form-control-sm", "tipo-dis-select", 3, "ngModel", "disabled", "change"], ["value", "", "disabled", ""], [1, "col-md-2", 3, "ngStyle"], ["name", "ListaGanancia", "id", "ListaGanancia", "readonly", "", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel"], ["hidden", "", "type", "text", "name", "Lista_Ganancia", "readonly", "", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel"], [1, "col-md-12"], ["name", "Observaciones", "type", "text", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", 2, "margin-top", "30px"], [1, "table", "invoice-detail-table", "tabla"], [1, "thead-default"], [2, "width", "15px"], [2, "width", "200px"], [2, "width", "30px"], [2, "width", "50px"], [2, "width", "65px"], [2, "width", "65px", 3, "ngStyle"], [2, "width", "10px", 3, "ngStyle"], [2, "width", "100px", 3, "ngStyle"], [2, "width", "10px"], [2, "width", "20px"], [3, "id", 4, "ngFor", "ngForOf"], [1, "row", 3, "ngStyle"], [1, "table", "table-responsive", "invoice-table", "invoice-total"], [1, "text-right", "mrg-top-5"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "btn-block", 3, "click"], ["rt", ""], ["title", "", "html", "", "type", ""], ["confirmacionSwal", ""], ["title", "", "html", "", "type", "", 3, "confirm"], ["confirmacionSalir", ""], [3, "swalOptions", "confirm"], ["confirmacionGuardar", ""], [3, "value"], [3, "id"], [2, "vertical-align", "middle"], ["type", "text", 1, "form-control", "form-control-sm", "f-9", "input-product", 3, "name", "id", "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "readonly", "ngModelChange"], ["class", "mytooltip tooltip-effect-2", 4, "ngIf"], ["type", "number", "readonly", "", 1, "form-control", "form-control-sm", "text-right", "f-9", "tabla", 3, "id", "name", "ngModel"], ["type", "text", "readonly", "", 1, "form-control", "form-control-sm", "text-right", "f-9", "tabla", 3, "id", "name", "ngModel"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", "text-right", "f-9", "tabla", 3, "id", "name", "ngModel", "readonly", "ngModelChange", "change"], ["class", "lista-lotes", 4, "ngFor", "ngForOf"], [3, "ngStyle"], ["type", "text", 1, "form-control", "form-control-sm", "text-right", "f-9", 3, "id", "name", "ngModel", "ngModelChange", "change"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", "text-right", "f-9", 3, "id", "name", "ngModel", "ngModelChange"], [2, "vertical-align", "middle", 3, "ngStyle"], [1, "form-control", "form-control-sm", 3, "name", "id", "ngModel", "change", "ngModelChange"], ["value", ""], ["type", "number", "min", "1", "readonly", "", 1, "form-control", "form-control-sm", "text-right", "f-9", 3, "name", "ngModel", "ngModelChange", "change"], ["hidden", "", 3, "name", "id", "ngModel", "ngModelChange"], ["class", "fa fa-exclamation-circle", 4, "ngIf"], ["type", "button", "class", " btn btn-mini btn-danger", 3, "swal", "confirm", 4, "ngIf"], ["class", " btn btn-mini btn-danger", 3, "click", 4, "ngIf"], [1, "mytooltip", "tooltip-effect-2"], [1, "tooltip-item2"], [1, "tooltip-content4", "clearfix"], [1, "tooltip-text2"], [1, "lista-lotes"], [1, "fa", "fa-check-circle", "text-success"], [1, "fa", "fa-exclamation-circle"], ["type", "button", 1, "btn", "btn-mini", "btn-danger", 3, "swal", "confirm"], [1, "fa", "fa-trash-o"], [1, "btn", "btn-mini", "btn-danger", 3, "click"], [1, "f-9"]], template: function RemisioneditarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Editar Remisi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Tipo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " Origen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Destino");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemisioneditarComponent_Template_select_change_48_listener() { return ctx.AgregarNombreDestino(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, RemisioneditarComponent_option_49_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RemisioneditarComponent_Template_input_ngModelChange_50_listener($event) { return ctx.Nombre_Destino = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function RemisioneditarComponent_Template_select_change_61_listener($event) { return ctx.Contrato($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Contrato");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, RemisioneditarComponent_option_64_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "L. Ganancia");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RemisioneditarComponent_Template_textarea_ngModelChange_76_listener($event) { return ctx.remision.Observaciones = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Embalaje / Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "th", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Presentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Cantidad Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Descuento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "th", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "IVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, RemisioneditarComponent_tr_109_Template, 38, 55, "tr", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "table", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "Subtotal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](119, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Descuento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](125, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "Impuestos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](131, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Precio Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](137, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](138, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RemisioneditarComponent_Template_button_click_140_listener($event) { return ctx.showAlert($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Actualizar Remisi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](142, RemisioneditarComponent_ng_template_142_Template, 2, 1, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](144, "swal", 59, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "swal", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirm", function RemisioneditarComponent_Template_swal_confirm_146_listener() { return ctx.VerPantallaLista(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "swal", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirm", function RemisioneditarComponent_Template_swal_confirm_148_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 35, ctx.remision.Fecha, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.remision.Cliente, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.remision.Codigo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.Identificacion_Funcionario);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.remision.Codigo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.remision.Tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.origen.Nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.remision.Id_Origen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](46, _c7, ctx.display_Interna));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.Destino_Remision);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Destino);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.Nombre_Destino);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](48, _c7, ctx.display_Cliente));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.destino.Nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.remision.Id_Destino);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](50, _c7, ctx.display_Cliente));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.Contrato);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Contratos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](52, _c7, ctx.display_Cliente));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.Id_Lista);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("ngModel", ctx.Lista_Ganancia1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.remision.Observaciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](54, _c7, ctx.display_Cliente_tabla));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](56, _c7, ctx.display_Cliente_tabla));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](58, _c7, ctx.display_Cliente_tabla));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](60, _c7, ctx.display_Cliente_tabla));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](62, _c7, ctx.display_Cliente_tabla));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Lista_Productos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](64, _c7, ctx.display_Cliente));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](119, 38, ctx.Subtotal_Remision));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](125, 40, ctx.Descuento_Remision));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](131, 42, ctx.Impuesto_Remision));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](137, 44, ctx.Costo_Remision));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SwalComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeahead"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SwalDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], ng2_truncate__WEBPACK_IMPORTED_MODULE_11__["TruncateCharactersPipe"]], styles: [".btn-mini[_ngcontent-%COMP%] {\n  padding: 0px 1px 0px 4px !important;\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.2 !important;\n  cursor: not-allowed;\n}\n\n.tipo-dis-select[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px;\n  line-height: 12px;\n  height: auto !important;\n  max-width: 100px;\n}\n\n.entregas-input[_ngcontent-%COMP%] {\n  float: left;\n  width: 50px;\n  height: auto !important;\n  font-size: 10px;\n  line-height: 12px;\n  padding: 2px 2px 2px 10px;\n}\n\n.f-9[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  word-break: break-word !important;\n  white-space: normal !important;\n  border-bottom: 0.5px dotted #ccc !important;\n  line-height: 12px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  max-height: 120px !important;\n  overflow: auto !important;\n}\n\n.show[_ngcontent-%COMP%] {\n  height: 120px !important;\n  overflow: auto !important;\n}\n\n.btn-enviar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.2;\n  cursor: not-allowed !important;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  padding: 2px 5px !important;\n  height: 22px !important;\n  border-radius: 5px !important;\n}\n\n.prod[_ngcontent-%COMP%] {\n  padding: 2px 5px !important;\n  height: 20px !important;\n  border-radius: 5px !important;\n}\n\n.swal2-confirm[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.btn-xs[_ngcontent-%COMP%] {\n  height: 22px !important;\n  padding: 2px !important;\n  border-radius: 5px;\n}\n\n.p-xs[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  margin: 0 !important;\n}\n\n.m-t-7[_ngcontent-%COMP%] {\n  margin-top: 7px !important;\n}\n\n.nota[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  border-radius: 5px;\n  margin: 0px !important;\n}\n\n.tabla[_ngcontent-%COMP%] {\n  font-size: 11px;\n  word-wrap: break-word;\n}\n\n.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: normal;\n  padding: 3px !important;\n  font-size: 10px;\n  line-height: 11px;\n}\n\n.tabla[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n  text-align: left;\n  margin-top: 2px !important;\n}\n\n.option[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%] {\n  padding: 0px 0px !important;\n  max-width: 259px !important;\n  font-size: 9px !important;\n  max-width: 400px !important;\n  word-break: break-word !important;\n  white-space: normal !important;\n  border-bottom: 0.5px dotted #ccc !important;\n}\n\n.ng-select[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .multiple[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 0px 0px !important;\n  max-width: 259px !important;\n  font-size: 9px !important;\n  position: absolute;\n  line-height: 12px;\n  height: 120px !important;\n  overflow: auto !important;\n}\n\n.lista-lotes[_ngcontent-%COMP%] {\n  float: left;\n  clear: both;\n  font-size: 10px;\n  text-align: left;\n  border-bottom: 1px dotted #ccc;\n  line-height: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJlbWlzaW9uZWRpdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREE7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7QUFNSjs7QUFKQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBT0o7O0FBTEE7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0FBU0o7O0FBUEE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7QUFXSjs7QUFUQTtFQUNJLDBCQUFBO0FBWUo7O0FBVkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFhSjs7QUFYQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQWNKOztBQWJJO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWVSOztBQWJJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBZVI7O0FBVEk7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBQVlSOztBQUpZO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUFPaEI7O0FBREM7RUFDRyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFJSiIsImZpbGUiOiJyZW1pc2lvbmVkaXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbWluaXtcclxuICAgIHBhZGRpbmc6IDBweCAxcHggMHB4IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWR7XHJcbiAgICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi50aXBvLWRpcy1zZWxlY3R7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG4uZW50cmVnYXMtaW5wdXR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDEwcHg7XHJcbn1cclxuLmYtOXtcclxuICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW17XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBkb3R0ZWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICBcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIG1heC1oZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5zaG93e1xyXG4gICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50IDtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1lbnZpYXI6ZGlzYWJsZWR7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tY29udHJvbC1zbXtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ucHJvZHtcclxuICAgIHBhZGRpbmc6IDJweCA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN3YWwyLWNvbmZpcm17XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufVxyXG4uYnRuLXhze1xyXG4gICAgaGVpZ2h0OiAyMnB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5wLXhze1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG4ubS10LTd7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHggIWltcG9ydGFudDtcclxufVxyXG4ubm90YXtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnRhYmxhe1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgdGgsIHRke1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgcGFkZGluZzozcHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLm9wdGlvbiB7XHJcbiAgICAubmctc3Rhci1pbnNlcnRlZHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNTlweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBkb3R0ZWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcblxyXG4gICAgfVxyXG59XHJcbi5uZy1zZWxlY3R7XHJcbiAgICAubmctc2VsZWN0e1xyXG4gICAgICAgIC5tdWx0aXBsZXtcclxuICAgICAgICAgICAgLm9wdGlvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjU5cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50IDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gfVxyXG5cclxuIC5saXN0YS1sb3Rlc3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjY2NjO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiB9XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=remision-remision-module.js.map