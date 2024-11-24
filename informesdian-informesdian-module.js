(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["informesdian-informesdian-module"],{

/***/ "1Gc/":
/*!************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/informesdian.module.ts ***!
  \************************************************************************/
/*! exports provided: InformesdianModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformesdianModule", function() { return InformesdianModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _informesdian_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informesdian-routing.module */ "Vl9p");
/* harmony import */ var _mediosmagneticos_mediosmagneticos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediosmagneticos/mediosmagneticos.component */ "KH7w");
/* harmony import */ var _mediosmagneticos_mediomagneticocrear_mediomagneticocrear_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediosmagneticos/mediomagneticocrear/mediomagneticocrear.component */ "Prmc");
/* harmony import */ var _mediosmagneticos_mediomagagrupadosesp_mediomagagrupadosesp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mediosmagneticos/mediomagagrupadosesp/mediomagagrupadosesp.component */ "F2iL");
/* harmony import */ var _mediosmagneticos_mediomagagrupadosesp_mediomagneticoagrupacioncrear_mediomagneticoagrupacioncrear_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mediosmagneticos/mediomagagrupadosesp/mediomagneticoagrupacioncrear/mediomagneticoagrupacioncrear.component */ "c88P");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../globales */ "Dgt4");
/* harmony import */ var _certificadoretencion_certificadoretencion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./certificadoretencion/certificadoretencion.component */ "ldm4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _certificadoingresoyretencion_certificadoingresoyretencion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./certificadoingresoyretencion/certificadoingresoyretencion.component */ "hb1H");
/* harmony import */ var _resumenretenciones_resumenretenciones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resumenretenciones/resumenretenciones.component */ "tJwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "/o1g");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























class InformesdianModule {
}
InformesdianModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: InformesdianModule });
InformesdianModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function InformesdianModule_Factory(t) { return new (t || InformesdianModule)(); }, providers: [
        _globales__WEBPACK_IMPORTED_MODULE_9__["Globales"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _informesdian_routing_module__WEBPACK_IMPORTED_MODULE_1__["InformesdianRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot(),
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeaheadModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](InformesdianModule, { declarations: [_mediosmagneticos_mediosmagneticos_component__WEBPACK_IMPORTED_MODULE_2__["MediosmagneticosComponent"],
        _mediosmagneticos_mediomagneticocrear_mediomagneticocrear_component__WEBPACK_IMPORTED_MODULE_3__["MediomagneticocrearComponent"],
        _mediosmagneticos_mediomagagrupadosesp_mediomagagrupadosesp_component__WEBPACK_IMPORTED_MODULE_4__["MediomagagrupadosespComponent"],
        _mediosmagneticos_mediomagagrupadosesp_mediomagneticoagrupacioncrear_mediomagneticoagrupacioncrear_component__WEBPACK_IMPORTED_MODULE_5__["MediomagneticoagrupacioncrearComponent"], _certificadoretencion_certificadoretencion_component__WEBPACK_IMPORTED_MODULE_10__["CertificadoretencionComponent"], _certificadoingresoyretencion_certificadoingresoyretencion_component__WEBPACK_IMPORTED_MODULE_13__["CertificadoingresoyretencionComponent"], _resumenretenciones_resumenretenciones_component__WEBPACK_IMPORTED_MODULE_14__["ResumenretencionesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _informesdian_routing_module__WEBPACK_IMPORTED_MODULE_1__["InformesdianRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeaheadModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__["PipesModule"]] }); })();


/***/ }),

/***/ "F2iL":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/mediosmagneticos/mediomagagrupadosesp/mediomagagrupadosesp.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: MediomagagrupadosespComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediomagagrupadosespComponent", function() { return MediomagagrupadosespComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globales */ "Dgt4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/not-data/not-data.component */ "j80Y");












const _c0 = "/contabilidad/informesdian/agruparmediosmagneticos/editar";
const _c1 = function (a1) { return [_c0, a1]; };
function MediomagagrupadosespComponent_table_10_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Reporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MediomagagrupadosespComponent_table_10_tr_10_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.IdMedioMag = item_r5.Id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.Codigo_Formato);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.Nombre_Formato);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "", ctx_r4.enviromen.ruta, "php/contabilidad/mediosmagneticos/reporte_formatos_agrupados.php?id=", item_r5.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, item_r5.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("swal", _r1);
} }
function MediomagagrupadosespComponent_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Agrupaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MediomagagrupadosespComponent_table_10_tr_10_Template, 20, 8, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.listaMediosMag);
} }
function MediomagagrupadosespComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-not-data", 26);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx_r3.Cargando);
} }
const _c2 = "/contabilidad/informesdian/agruparmediosmagneticos/crear";
const _c3 = function () { return [_c2]; };
class MediomagagrupadosespComponent {
    constructor(globales, http, _user) {
        this.globales = globales;
        this.http = http;
        this._user = _user;
        this.Cargando = true;
        this.listaMediosMag = [];
        this.IdMedioMag = '';
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Eliminar este Formato",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            preConfirm: (value) => {
                return new Promise((resolve) => {
                    this.eliminarMedioMag();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading()
        };
    }
    ngOnInit() {
        this.listaFormatosAgrupados();
        this.enviromen = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    listaFormatosAgrupados() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/mediosmagneticos/lista_medios_magneticos_agrupados.php').subscribe((data) => {
            this.listaMediosMag = data;
            this.Cargando = false;
        });
    }
    eliminarMedioMag() {
        let p = { id: this.IdMedioMag };
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/mediosmagneticos/eliminar_mediomagnetico_agrupados.php', { params: p }).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: data.tipo,
                title: data.titulo,
                text: data.mensaje
            });
            // this.swalService.ShowMessage(swal);
            this.listaFormatosAgrupados();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'warning',
                text: 'Se perdió la conexión a internet. Por favor vuelve a intentarlo',
                title: 'Oops!'
            });
            // this.swalService.ShowMessage(swal);
        });
    }
}
MediomagagrupadosespComponent.ɵfac = function MediomagagrupadosespComponent_Factory(t) { return new (t || MediomagagrupadosespComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_3__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
MediomagagrupadosespComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MediomagagrupadosespComponent, selectors: [["app-mediomagagrupadosesp"]], decls: 15, vars: 5, consts: [[1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "text-primary"], [1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "line"], ["class", "table table-bordered table-striped table-sm", "style", "font-size: small", 4, "ngIf", "ngIfElse"], [3, "swalOptions"], ["confirmacionEliminar", ""], ["notData", ""], [1, "table", "table-bordered", "table-striped", "table-sm", 2, "font-size", "small"], [4, "ngFor", "ngForOf"], [2, "width", "60px"], [1, "text-center"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "btn-mini", "waves-effect", "waves-light"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", ""], ["target", "_blank", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "fa", "fa-table"], [1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", "bg-danger", 3, "swal", "click"], [1, "fa", "fa-trash"], [3, "loading"]], template: function MediomagagrupadosespComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Agrupar Medios Magneticos Especiales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MediomagagrupadosespComponent_table_10_Template, 11, 1, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "swal", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MediomagagrupadosespComponent_ng_template_13_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.Cargando && ctx.listaMediosMag.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SwalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SwalDirective"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_10__["NotDataComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpb21hZ2FncnVwYWRvc2VzcC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "JFub":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/certificadoretencion/CertificadoRetencionModel.ts ***!
  \***************************************************************************************************/
/*! exports provided: CertificadoRetencionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoRetencionModel", function() { return CertificadoRetencionModel; });
class CertificadoRetencionModel {
    constructor() {
        this.Fecha_Expedicion = this.fechaHoy();
        this.Cuentas = [];
    }
    fechaHoy() {
        let fecha = new Date();
        fecha = (fecha.toISOString()).split('T')[0];
        return fecha;
    }
}


/***/ }),

/***/ "KH7w":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/mediosmagneticos/mediosmagneticos.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MediosmagneticosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediosmagneticosComponent", function() { return MediosmagneticosComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "vdoh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/not-data/not-data.component */ "j80Y");












const _c0 = "/contabilidad/informesdian/medios-magneticos/crear";
const _c1 = function () { return [_c0]; };
function MediosmagneticosComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = "/contabilidad/informesdian/medios-magneticosespeciales/crear";
const _c3 = function () { return [_c2]; };
function MediosmagneticosComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c3));
} }
function MediosmagneticosComponent_table_9_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Columna");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MediosmagneticosComponent_table_9_tr_15_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.Tipo_Columna);
} }
const _c4 = "/contabilidad/informesdian/medios-magneticos/editar";
const _c5 = function (a1) { return [_c4, a1]; };
function MediosmagneticosComponent_table_9_tr_15_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c5, item_r8.Id));
} }
const _c6 = "/contabilidad/informesdian/medios-magneticosespeciales/editar";
const _c7 = function (a1) { return [_c6, a1]; };
function MediosmagneticosComponent_table_9_tr_15_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c7, item_r8.Id));
} }
function MediosmagneticosComponent_table_9_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MediosmagneticosComponent_table_9_tr_15_td_9_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Reporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, MediosmagneticosComponent_table_9_tr_15_a_19_Template, 3, 3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, MediosmagneticosComponent_table_9_tr_15_a_20_Template, 3, 3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MediosmagneticosComponent_table_9_tr_15_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const item_r8 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.IdMedioMag = item_r8.Id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.Codigo_Formato);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.Nombre_Formato);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.Tipo_Exportacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.Periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.formatoEspecial);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("href", "", ctx_r7.enviromen.ruta, "php/contabilidad/mediosmagneticos/reporte.php?id=", item_r8.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.formatoEspecial);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.formatoEspecial);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swal", _r3);
} }
function MediosmagneticosComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Formato");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Tipo Exp");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Periodo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MediosmagneticosComponent_table_9_th_11_Template, 2, 0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, MediosmagneticosComponent_table_9_tr_15_Template, 24, 10, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.formatoEspecial);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.listaMediosMag);
} }
function MediosmagneticosComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-not-data", 31);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx_r5.Cargando);
} }
class MediosmagneticosComponent {
    constructor(http, router, _user) {
        this.http = http;
        this.router = router;
        this._user = _user;
        this.matPanel = false;
        this.Cargando = true;
        this.listaMediosMag = [];
        this.IdMedioMag = '';
        this.url = this.router.url;
        this.Id_Empresa = '';
        this.formatoEspecial = false;
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Eliminar este Formato",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            preConfirm: (value) => {
                return new Promise((resolve) => {
                    this.eliminarMedioMag();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading()
        };
        this.formatoEspecial = this.isFormatoEspecial();
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
        this.getListaMediosMag();
        this.Id_Empresa = this._user.user.person.company_worked.id;
        this.enviromen = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    getListaMediosMag() {
        let p = {};
        if (this.formatoEspecial) {
            p.Tipo = 'Especial';
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/mediosmagneticos/lista_medios_magneticos.php?company_id=' + this._user.user.person.company_worked.id, { params: p }).subscribe((data) => {
            this.listaMediosMag = data;
            this.Cargando = false;
        });
    }
    eliminarMedioMag() {
        let p = { id: this.IdMedioMag };
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/mediosmagneticos/eliminar_mediomagnetico.php', { params: p }).subscribe((data) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: data.tipo,
                title: data.titulo,
                text: data.mensaje
            });
            // this.swalService.ShowMessage(swal);
            this.getListaMediosMag();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'warning',
                title: 'Se perdió la conexión a internet. Por favor vuelve a intentarlo',
                text: 'Oops!'
            });
            // this.swalService.ShowMessage(swal);
        });
    }
    isFormatoEspecial() {
        let str = this.url.indexOf('especiales');
        if (str >= 0) {
            return true;
        }
        return false;
    }
}
MediosmagneticosComponent.ɵfac = function MediosmagneticosComponent_Factory(t) { return new (t || MediosmagneticosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
MediosmagneticosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MediosmagneticosComponent, selectors: [["app-mediosmagneticos"]], viewQuery: function MediosmagneticosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 14, vars: 6, consts: [[1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "text-primary"], [1, "btn-group", "rounded"], ["style", "float: right;", "type", "button", "class", "btn btn-primary btn-sm", 3, "routerLink", 4, "ngIf"], [1, "line"], ["class", "table table-bordered table-striped table-sm", "style", "font-size: small;", 4, "ngIf", "ngIfElse"], [3, "swalOptions"], ["confirmacionEliminar", ""], ["notData", ""], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "table", "table-bordered", "table-striped", "table-sm", 2, "font-size", "small"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["style", "width: 60px", 4, "ngIf"], [2, "width", "20px"], [1, "text-center"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "btn-mini", "waves-effect", "waves-light"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", ""], ["target", "_blank", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "fa", "fa-table"], ["class", "dropdown-item waves-light waves-effect caja-botones", 3, "routerLink", 4, "ngIf"], [1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", "bg-danger", 3, "swal", "click"], [1, "fa", "fa-trash"], [2, "width", "60px"], [1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "routerLink"], [1, "fa", "fa-pencil"], [3, "loading"]], template: function MediosmagneticosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MediosmagneticosComponent_button_6_Template, 3, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MediosmagneticosComponent_button_7_Template, 3, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MediosmagneticosComponent_table_9_Template, 16, 2, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "swal", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, MediosmagneticosComponent_ng_template_12_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Medios Magn\u00E9ticos ", ctx.formatoEspecial ? "Especiales" : "B\u00E1sicos", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.formatoEspecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formatoEspecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.Cargando && ctx.listaMediosMag.length > 0)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SwalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SwalDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_10__["NotDataComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpb3NtYWduZXRpY29zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Prmc":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/mediosmagneticos/mediomagneticocrear/mediomagneticocrear.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: MediomagneticocrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediomagneticocrearComponent", function() { return MediomagneticocrearComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MedioMagneticoModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MedioMagneticoModel */ "yNa8");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../globales */ "Dgt4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mediosmagnticos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mediosmagnticos.service */ "fv9A");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");

















const _c0 = ["FormMediosMag"];
function MediomagneticocrearComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Tipo Columna");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_div_41_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.MediosMagModel.Tipo_Columna = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Alterna");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.MediosMagModel.Tipo_Columna);
} }
function MediomagneticocrearComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Columna Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_div_42_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.MediosMagModel.Columna_Principal = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.MediosMagModel.Columna_Principal);
} }
function MediomagneticocrearComponent_tr_58_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MediomagneticocrearComponent_tr_58_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.eliminarFila("Cuentas", i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MediomagneticocrearComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_tr_58_Template_input_ngModelChange_2_listener($event) { const item_r17 = ctx.$implicit; return item_r17.Cuenta = $event; })("ngModelChange", function MediomagneticocrearComponent_tr_58_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const item_r17 = ctx.$implicit; const i_r18 = ctx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.BuscarCuenta(item_r17.Cuenta, i_r18); })("blur", function MediomagneticocrearComponent_tr_58_Template_input_blur_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const item_r17 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.validarCampo(item_r17.Cuenta, $event, "Cuenta"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_tr_58_Template_input_ngModelChange_4_listener($event) { const item_r17 = ctx.$implicit; return item_r17.Concepto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MediomagneticocrearComponent_tr_58_button_6_Template, 2, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "Cuenta", i_r18, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r17.Cuenta)("ngbTypeahead", ctx_r3.search1)("resultTemplate", _r9)("inputFormatter", ctx_r3.formatter1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "Concepto", i_r18, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r17.Concepto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r18 != ctx_r3.Cuentas_Contables.length - 1);
} }
function MediomagneticocrearComponent_tr_69_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MediomagneticocrearComponent_tr_69_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.eliminarFila("Tipos", i_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MediomagneticocrearComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_tr_69_Template_ng_select_ngModelChange_2_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Tipo = $event; })("ngModelChange", function MediomagneticocrearComponent_tr_69_Template_ng_select_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const i_r29 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r35.nuevoTipoDocumento(i_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MediomagneticocrearComponent_tr_69_button_4_Template, 2, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "tipo_documento", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "tipo_documento", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r28.Tipo)("options", ctx_r4.listaTiposDocumentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r29 != ctx_r4.Tipos_Documentos.length - 1);
} }
function MediomagneticocrearComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r37 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r37.Nombre);
} }
function MediomagneticocrearComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r39 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", r_r39.Codigo, " ");
} }
function MediomagneticocrearComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r41 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", r_r41.Nombre, " ");
} }
class MediomagneticocrearComponent {
    constructor(globales, http, router, route, _medios, _user) {
        this.globales = globales;
        this.http = http;
        this.router = router;
        this.route = route;
        this._medios = _medios;
        this._user = _user;
        this.datosCabecera = {
            Titulo: 'Medios Magneticos',
            Fecha: new Date(),
        };
        this.Cuenta = [];
        this.Cuentas_Contables = [{
                Cuenta: '',
                Id_Plan_Cuenta: '',
                Concepto: ''
            }];
        this.Tipos_Documentos = [{
                Tipo: ''
            }];
        this.url = this.router.url;
        this.formatoEspecial = false;
        this.MediosMagModel = new _MedioMagneticoModel__WEBPACK_IMPORTED_MODULE_2__["MedioMagneticoModel"]();
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 4 ? []
            : this.Cuenta.filter(v => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter1 = (x) => x.Codigo;
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Guardar este Formato",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            preConfirm: (value) => {
                return new Promise((resolve) => {
                    this.guardarMediosMag();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.isLoading()
        };
        this.formatoEspecial = this.isFormatoEspecial();
    }
    ngOnInit() {
        this.enviromen = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.MediosMagModel.Id_Empresa = this._user.user.person.company_worked.id;
        this.listaCuentas();
        this.tiposDocumentos();
        let id = this.route.snapshot.params.id;
        if (id !== null && id !== undefined) {
            this.getDetallesMedioMag(id);
        }
    }
    listaCuentas() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/comprobantes/lista_cuentas.php', { params: { company_id: this._user.user.person.company_worked.id } })
            .subscribe((data) => {
            this.Cuenta = data.Activo;
        });
    }
    validarCampo(campo, event, tipo) {
        this._medios.validarCampoTypeAHead(campo, event, tipo);
    }
    BuscarCuenta(model, pos) {
        if (typeof (model) == 'object') {
            let pos2 = pos + 1;
            this.Cuentas_Contables[pos].Id_Plan_Cuenta = model.Id_Plan_Cuentas;
            if (this.Cuentas_Contables[pos2] == undefined) {
                let obj = {
                    Cuenta: '',
                    Id_Plan_Cuenta: '',
                    Concepto: ''
                };
                this.Cuentas_Contables.push(obj);
            }
        }
    }
    tiposDocumentos(tipo) {
        let p = tipo != null && tipo != undefined ? { Tipo: 'Normal' } : {};
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/contabilidad/tipos_documentos.php', { params: p })
            .subscribe((data) => {
            this.listaTiposDocumentos = data;
        });
    }
    nuevoTipoDocumento(pos) {
        let pos2 = pos + 1;
        if (this.Tipos_Documentos[pos2] == undefined) {
            let obj = {
                Tipo: ''
            };
            this.Tipos_Documentos.push(obj);
        }
    }
    eliminarFila(tipo, pos) {
        if (tipo == 'Cuentas') {
            this.Cuentas_Contables.splice(pos, 1);
        }
        else if (tipo == 'Tipos') {
            this.Tipos_Documentos.splice(pos, 1);
        }
    }
    campoPeriodo(event) {
        let regex = /([0-9]{4})+/g;
        let string = event.target.value;
        if (string != '') {
            if (regex.test(string) && parseInt(string) >= 2019) {
                return true;
            }
            else {
                document.getElementById('periodo').value = '';
                document.getElementById('periodo').focus();
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: `El periodo no es valido.`
                });
                // this.swalService.ShowMessage(swal);
            }
        }
    }
    guardarMediosMag() {
        let info = this.globales.normalize(JSON.stringify(this.MediosMagModel));
        let detalles = this.globales.normalize(JSON.stringify(this.Cuentas_Contables));
        let tipos_documentos = this.globales.normalize(JSON.stringify(this.Tipos_Documentos));
        let datos = new FormData();
        console.log(info);
        datos.append('datos', info);
        datos.append('cuentas', detalles);
        datos.append('tipos_documentos', tipos_documentos);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/contabilidad/mediosmagneticos/guardar_mediomagnetico.php', datos).subscribe((data) => {
            if (data.tipo == 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: data.tipo,
                    title: data.titulo,
                    text: data.mensaje
                });
                // this.swalService.ShowMessage(swal);
                setTimeout(() => {
                    if (this.formatoEspecial) {
                        this.router.navigate(['/contabilidad/informesdian/mediosmagneticosespeciales']);
                    }
                    else {
                        this.router.navigate(['/contabilidad/informesdian/mediosmagneticos']);
                    }
                }, 300);
            }
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'warning',
                text: 'Se perdió la conexión a internet. Por favor vuelve a intentarlo',
                title: 'Oops!'
            });
            // this.swalService.ShowMessage(swal);
        });
    }
    getDetallesMedioMag(id) {
        let p = { id: id };
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ruta + 'php/contabilidad/mediosmagneticos/detalles.php', { params: p }).subscribe((data) => {
            this.MediosMagModel = data.encabezado;
            this.Cuentas_Contables = JSON.parse(data.cuentas);
            this.Tipos_Documentos = JSON.parse(data.tipos);
        });
    }
    isFormatoEspecial() {
        let str = this.url.indexOf('especiales');
        if (str >= 0) {
            this.MediosMagModel.Tipo_Medio_Magnetico = 'Especial';
            return true;
        }
        return false;
    }
}
MediomagneticocrearComponent.ɵfac = function MediomagneticocrearComponent_Factory(t) { return new (t || MediomagneticocrearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_5__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_mediosmagnticos_service__WEBPACK_IMPORTED_MODULE_8__["MediosmagnticosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"])); };
MediomagneticocrearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MediomagneticocrearComponent, selectors: [["app-mediomagneticocrear"]], viewQuery: function MediomagneticocrearComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.FormMediosMag = _t.first);
    } }, decls: 85, vars: 13, consts: [[1, "page-body"], [1, "row"], [1, "col-lg-1", "col-md-1"], [1, "col-lg-10", "col-md-10"], [1, "card"], [1, "card-body", 2, "padding-bottom", "0px"], [3, "datosCabecera"], ["FormMediosMag", "ngForm"], [1, "row", "mt-4"], [1, "col-md-3"], ["type", "hidden", "name", "Id_Empresa", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["for", "periodo"], ["type", "text", "id", "periodo", "name", "periodo", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "blur"], ["for", "cod_formato"], ["type", "text", "id", "cod_formato", "name", "codigo_formato", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "nombre_formato"], ["type", "text", "id", "nombre_formato", "name", "nombre_formato", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "tipo_formato"], ["name", "tipo_formato", "id", "tipo_formato", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["value", "D"], ["value", "C"], ["value", "D-C"], ["value", "C-D"], ["value", "Saldo"], ["class", "col-md-2", 4, "ngIf"], ["class", "col-md-3", 4, "ngIf"], [1, "col-md-12"], [1, "col-md-6"], [1, "m-b-10"], [1, "table", "table-bordered"], [1, "bg-inverse"], ["width", "10"], [4, "ngFor", "ngForOf"], ["width", "20"], [1, "btn", "btn-primary", "btn-sm", "m-l-20", 2, "margin-top", "70px !important", 3, "swal", "disabled"], [1, "fa", "fa-save"], ["rt", ""], ["title", "", "text", "", "type", ""], ["confirmacionSwal", ""], [3, "swalOptions"], ["confirmacionGuardar", ""], ["rt1", ""], ["rt2", ""], [1, "col-md-2"], ["for", "tipo_columna"], ["name", "tipo_columna", "id", "tipo_columna", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["value", "P"], ["value", "A"], ["name", "columna_principal", "id", "columna_principal", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["value", ""], ["type", "text", "name", "Cuenta", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "blur"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModel", "name", "ngModelChange"], ["style", "padding: 0", "class", "btn btn-link text-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-link", "text-danger", 2, "padding", "0", 3, "click"], [1, "fa", "fa-trash"], ["placeholder", "Seleccione el Tipo de documento", 1, "f-10", 3, "id", "name", "ngModel", "options", "ngModelChange"], [1, "f-9"]], template: function MediomagneticocrearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-cabecera", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_Template_input_ngModelChange_11_listener($event) { return ctx.MediosMagModel.Id_Empresa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Periodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_Template_input_ngModelChange_15_listener($event) { return ctx.MediosMagModel.Periodo = $event; })("blur", function MediomagneticocrearComponent_Template_input_blur_15_listener($event) { return ctx.campoPeriodo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Codigo Formato");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_Template_input_ngModelChange_20_listener($event) { return ctx.MediosMagModel.Codigo_Formato = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Nombre Formato");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_Template_input_ngModelChange_25_listener($event) { return ctx.MediosMagModel.Nombre_Formato = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Tipo Exportaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MediomagneticocrearComponent_Template_select_ngModelChange_30_listener($event) { return ctx.MediosMagModel.Tipo_Exportacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Debito");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Deb-Cred");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Cred-Deb");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Saldo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, MediomagneticocrearComponent_div_41_Template, 9, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, MediomagneticocrearComponent_div_42_Template, 7, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Codigo Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Concepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, MediomagneticocrearComponent_tr_58_Template, 7, 8, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Tipos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Tipo Documentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, MediomagneticocrearComponent_tr_69_Template, 5, 5, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, MediomagneticocrearComponent_ng_template_75_Template, 3, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "swal", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "swal", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, MediomagneticocrearComponent_ng_template_81_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, MediomagneticocrearComponent_ng_template_83_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.MediosMagModel.Id_Empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.MediosMagModel.Periodo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.MediosMagModel.Codigo_Formato);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.MediosMagModel.Nombre_Formato);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.MediosMagModel.Tipo_Exportacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formatoEspecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formatoEspecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Cuentas_Contables);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Tipos_Documentos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("swal", _r8)("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_10__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SwalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SwalComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTypeahead"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectComponent"]], styles: [".btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 10px !important;\n  line-height: 14px !important;\n  font-size: 10px !important;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  padding: 2px 5px !important;\n  height: 22px !important;\n  border-radius: 5px !important;\n}\n\n.f-9[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n}\n\n.tabla[_ngcontent-%COMP%] {\n  font-size: 11px;\n  word-wrap: break-word;\n}\n\n.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: normal;\n  padding: 3px !important;\n  font-size: 10px;\n  line-height: 11px;\n}\n\n.tabla[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n  text-align: left;\n}\n\n.tabla[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n\n.contenido[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\n\n.botonFlotante[_ngcontent-%COMP%] {\n  position: fixed;\n  display: scroll;\n  bottom: 10px;\n  right: 10px;\n  z-index: 99;\n}\n\n.botonFlotante1[_ngcontent-%COMP%] {\n  position: fixed;\n  display: scroll;\n  bottom: 10px;\n  right: 230px;\n  z-index: 99;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  height: 200px;\n  max-height: 300px;\n  overflow: auto;\n}\n\n.input-document[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 80% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtZWRpb21hZ25ldGljb2NyZWFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUFJOztFQUVJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFUjs7QUFBSTtFQUNJLDBCQUFBO0FBRVI7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0FBQ0oiLCJmaWxlIjoibWVkaW9tYWduZXRpY29jcmVhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmYtOSB7XHJcbiAgICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGEge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbmlkbyB7XHJcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvdG9uRmxvdGFudGUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogc2Nyb2xsO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLmJvdG9uRmxvdGFudGUxIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IHNjcm9sbDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAyMzBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmlucHV0LWRvY3VtZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "Vl9p":
/*!********************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/informesdian-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: InformesdianRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformesdianRoutingModule", function() { return InformesdianRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mediosmagneticos_mediomagagrupadosesp_mediomagneticoagrupacioncrear_mediomagneticoagrupacioncrear_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediosmagneticos/mediomagagrupadosesp/mediomagneticoagrupacioncrear/mediomagneticoagrupacioncrear.component */ "c88P");
/* harmony import */ var _mediosmagneticos_mediosmagneticos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediosmagneticos/mediosmagneticos.component */ "KH7w");
/* harmony import */ var _mediosmagneticos_mediomagneticocrear_mediomagneticocrear_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediosmagneticos/mediomagneticocrear/mediomagneticocrear.component */ "Prmc");
/* harmony import */ var _mediosmagneticos_mediomagagrupadosesp_mediomagagrupadosesp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mediosmagneticos/mediomagagrupadosesp/mediomagagrupadosesp.component */ "F2iL");
/* harmony import */ var _certificadoretencion_certificadoretencion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certificadoretencion/certificadoretencion.component */ "ldm4");
/* harmony import */ var _certificadoingresoyretencion_certificadoingresoyretencion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certificadoingresoyretencion/certificadoingresoyretencion.component */ "hb1H");
/* harmony import */ var _resumenretenciones_resumenretenciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resumenretenciones/resumenretenciones.component */ "tJwM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: 'mediosmagneticosespeciales', component: _mediosmagneticos_mediosmagneticos_component__WEBPACK_IMPORTED_MODULE_2__["MediosmagneticosComponent"] },
    { path: 'mediosmagneticos', component: _mediosmagneticos_mediosmagneticos_component__WEBPACK_IMPORTED_MODULE_2__["MediosmagneticosComponent"] },
    { path: 'medios-magneticos/crear', component: _mediosmagneticos_mediomagneticocrear_mediomagneticocrear_component__WEBPACK_IMPORTED_MODULE_3__["MediomagneticocrearComponent"] },
    { path: 'medios-magneticos/editar/:id', component: _mediosmagneticos_mediomagneticocrear_mediomagneticocrear_component__WEBPACK_IMPORTED_MODULE_3__["MediomagneticocrearComponent"] },
    { path: 'medios-magneticosespeciales/crear', component: _mediosmagneticos_mediomagneticocrear_mediomagneticocrear_component__WEBPACK_IMPORTED_MODULE_3__["MediomagneticocrearComponent"] },
    { path: 'medios-magneticosespeciales/editar/:id', component: _mediosmagneticos_mediomagneticocrear_mediomagneticocrear_component__WEBPACK_IMPORTED_MODULE_3__["MediomagneticocrearComponent"] },
    { path: 'agruparmediosmagneticos', component: _mediosmagneticos_mediomagagrupadosesp_mediomagagrupadosesp_component__WEBPACK_IMPORTED_MODULE_4__["MediomagagrupadosespComponent"] },
    { path: 'agruparmediosmagneticos/crear', component: _mediosmagneticos_mediomagagrupadosesp_mediomagneticoagrupacioncrear_mediomagneticoagrupacioncrear_component__WEBPACK_IMPORTED_MODULE_1__["MediomagneticoagrupacioncrearComponent"] },
    { path: 'agruparmediosmagneticos/editar/:id', component: _mediosmagneticos_mediomagagrupadosesp_mediomagneticoagrupacioncrear_mediomagneticoagrupacioncrear_component__WEBPACK_IMPORTED_MODULE_1__["MediomagneticoagrupacioncrearComponent"] },
    { path: 'certificadoretencion', component: _certificadoretencion_certificadoretencion_component__WEBPACK_IMPORTED_MODULE_5__["CertificadoretencionComponent"] },
    { path: 'certificadoingresoyretencion', component: _certificadoingresoyretencion_certificadoingresoyretencion_component__WEBPACK_IMPORTED_MODULE_6__["CertificadoingresoyretencionComponent"] },
    { path: 'resumenretenciones', component: _resumenretenciones_resumenretenciones_component__WEBPACK_IMPORTED_MODULE_7__["ResumenretencionesComponent"] }
];
class InformesdianRoutingModule {
}
InformesdianRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: InformesdianRoutingModule });
InformesdianRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function InformesdianRoutingModule_Factory(t) { return new (t || InformesdianRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](InformesdianRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "c88P":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/mediosmagneticos/mediomagagrupadosesp/mediomagneticoagrupacioncrear/mediomagneticoagrupacioncrear.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: MediomagneticoagrupacioncrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediomagneticoagrupacioncrearComponent", function() { return MediomagneticoagrupacioncrearComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globales */ "Dgt4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");













function MediomagneticoagrupacioncrearComponent_tr_33_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MediomagneticoagrupacioncrearComponent_tr_33_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.eliminarFila(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MediomagneticoagrupacioncrearComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ng-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MediomagneticoagrupacioncrearComponent_tr_33_Template_ng_select_ngModelChange_2_listener($event) { const item_r5 = ctx.$implicit; return item_r5.Formato = $event; })("ngModelChange", function MediomagneticoagrupacioncrearComponent_tr_33_Template_ng_select_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const i_r6 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.nuevoFormato(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MediomagneticoagrupacioncrearComponent_tr_33_button_4_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "formato", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("name", "formato", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r5.Formato)("options", ctx_r1.listaFormatosEspeciales);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r6 != ctx_r1.Formatos.length - 1);
} }
function MediomagneticoagrupacioncrearComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r14 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](r_r14.Nombre);
} }
class MediomagneticoagrupacioncrearComponent {
    constructor(globales, http, router, swalService, route) {
        this.globales = globales;
        this.http = http;
        this.router = router;
        this.swalService = swalService;
        this.route = route;
        this.datosCabecera = {
            Titulo: 'Agrupar Medios Magneticos',
            Fecha: new Date(),
        };
        this.MediosMagModel = {
            Codigo_Formato: '',
            Nombre_Formato: ''
        };
        this.Formatos = [{
                Formato: ''
            }];
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Guardar este Formato",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.guardarMediosMag();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading()
        };
    }
    ngOnInit() {
        this.getListaFormatosEspeciales();
        let id = this.route.snapshot.params.id;
        if (id !== null && id !== undefined) {
            this.getDetallesFormato(id);
        }
    }
    nuevoFormato(pos) {
        let pos2 = pos + 1;
        if (this.Formatos[pos2] == undefined) {
            let obj = {
                Formato: ''
            };
            this.Formatos.push(obj);
        }
    }
    eliminarFila(pos) {
        this.Formatos.splice(pos, 1);
    }
    guardarMediosMag() {
        let info = this.globales.normalize(JSON.stringify(this.MediosMagModel));
        let formatos = this.globales.normalize(JSON.stringify(this.Formatos));
        let datos = new FormData();
        datos.append('datos', info);
        datos.append('formatos', formatos);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/mediosmagneticos/guardar_agrupacion_especiales.php', datos).subscribe((data) => {
            if (data.tipo == 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    icon: data.tipo,
                    title: data.titulo,
                    text: data.mensaje
                });
                // this.swalService.ShowMessage(swal);
                setTimeout(() => {
                    this.router.navigate(['/contabilidad/informesdian/agruparmediosmagneticos']);
                }, 300);
            }
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'warning',
                text: 'Se perdió la conexión a internet. Por favor vuelve a intentarlo',
                title: 'Oops!'
            });
            // this.swalService.ShowMessage(swal);
        });
    }
    getListaFormatosEspeciales() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/mediosmagneticos/formatos_especiales.php').subscribe((data) => {
            this.listaFormatosEspeciales = data;
        });
    }
    getDetallesFormato(id) {
        let p = { id: id };
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/mediosmagneticos/detalles_formatos_agrup.php', { params: p }).subscribe((data) => {
            this.MediosMagModel = data.encabezado;
            this.Formatos = data.formatos;
            setTimeout(() => {
                let obj = {
                    Formato: ''
                };
                this.Formatos.push(obj);
            }, 300);
        });
    }
}
MediomagneticoagrupacioncrearComponent.ɵfac = function MediomagneticoagrupacioncrearComponent_Factory(t) { return new (t || MediomagneticoagrupacioncrearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_3__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
MediomagneticoagrupacioncrearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MediomagneticoagrupacioncrearComponent, selectors: [["app-mediomagneticoagrupacioncrear"]], decls: 43, vars: 7, consts: [[1, "page-body"], [1, "row"], [1, "col-lg-1", "col-md-1"], [1, "col-lg-10", "col-md-10"], [1, "card"], [3, "datosCabecera"], [1, "card-body", 2, "padding-bottom", "0px"], ["FormMediosMag", "ngForm"], [1, "col-md-2"], [1, "form-group"], ["for", "cod_formato"], ["type", "text", "id", "cod_formato", "name", "codigo_formato", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], ["for", "nombre_formato"], ["type", "text", "id", "nombre_formato", "name", "nombre_formato", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], [1, "col-md-3"], [1, "m-b-10"], [1, "table", "table-bordered"], [1, "bg-inverse"], ["width", "20"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", "m-l-20", 2, "margin-top", "30px !important", 3, "swal", "disabled"], [1, "fa", "fa-save"], ["rt", ""], [3, "swalOptions"], ["confirmacionGuardar", ""], ["placeholder", "Seleccione el formato", 1, "f-10", 3, "id", "name", "ngModel", "options", "ngModelChange"], ["style", "padding: 0", "class", "btn btn-link text-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-link", "text-danger", 2, "padding", "0", 3, "click"], [1, "fa", "fa-trash"], [1, "f-9"]], template: function MediomagneticoagrupacioncrearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-cabecera", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Codigo Formato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MediomagneticoagrupacioncrearComponent_Template_input_ngModelChange_14_listener($event) { return ctx.MediosMagModel.Codigo_Formato = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Nombre Formato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MediomagneticoagrupacioncrearComponent_Template_input_ngModelChange_19_listener($event) { return ctx.MediosMagModel.Nombre_Formato = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Tipos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Formatos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, MediomagneticoagrupacioncrearComponent_tr_33_Template, 5, 5, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, MediomagneticoagrupacioncrearComponent_ng_template_39_Template, 3, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "swal", 25, 26);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.MediosMagModel.Codigo_Formato);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.MediosMagModel.Nombre_Formato);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Formatos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("swal", _r4)("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_7__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__["SwalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__["SwalComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpb21hZ25ldGljb2FncnVwYWNpb25jcmVhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "fv9A":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/mediosmagneticos/mediosmagnticos.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: MediosmagnticosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediosmagnticosService", function() { return MediosmagnticosService; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ajustes/informacion-base/services/swal.service */ "jFFx");



class MediosmagnticosService {
    constructor(swalService) {
        this.swalService = swalService;
    }
    validarCampoTypeAHead(campo, event, tipo) {
        if (typeof (campo) != 'object' && campo != '') {
            let id = event.target.id;
            document.getElementById(id).focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Incorrecto!',
                text: `El valor ${tipo} no es valido.`
            });
            // this.swalService.ShowMessage(swal);
        }
    }
}
MediosmagnticosService.ɵfac = function MediosmagnticosService_Factory(t) { return new (t || MediosmagnticosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_2__["SwalService"])); };
MediosmagnticosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MediosmagnticosService, factory: MediosmagnticosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hb1H":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/certificadoingresoyretencion/certificadoingresoyretencion.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CertificadoingresoyretencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoingresoyretencionComponent", function() { return CertificadoingresoyretencionComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _certificadoretencion_CertificadoRetencionModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../certificadoretencion/CertificadoRetencionModel */ "JFub");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globales */ "Dgt4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_services_tercero_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/tercero.service */ "j/xU");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/user.service */ "f4AX");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/pipes/image.pipe */ "0gLu");














function CertificadoingresoyretencionComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r5.Codigo, " ");
} }
function CertificadoingresoyretencionComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r7 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", r_r7.Nombre_Tercero, " ");
} }
class CertificadoingresoyretencionComponent {
    constructor(globales, http, _terceroService, _user) {
        this.globales = globales;
        this.http = http;
        this._terceroService = _terceroService;
        this._user = _user;
        this.datosCabecera = {
            Titulo: 'Certificados de Ingreso y Retención',
            Fecha: new Date()
        };
        this.CertificadoRetencionModel = new _certificadoretencion_CertificadoRetencionModel__WEBPACK_IMPORTED_MODULE_1__["CertificadoRetencionModel"]();
        this._rutaBase = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/terceros/';
        this.terceros = [];
        this.company_id = '';
        this.search_tercero = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 4 ? []
            : this.terceros.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter_tercero = (x) => x.Nombre;
    }
    ngOnInit() {
        this.userF = this._user.user;
        this.FiltrarTerceros().subscribe((data) => {
            this.terceros = data;
        });
        this.company_id = this._user.user.person.company_worked.id;
    }
    AsignarTercero(model) {
        if (typeof (model) == 'object') {
            this.CertificadoRetencionModel.Nit = model.Nit;
            this.CertificadoRetencionModel.Tipo_Nit = model.Tipo;
        }
        else {
            this.CertificadoRetencionModel.Nit = '';
            this.CertificadoRetencionModel.Tipo_Nit = '';
        }
        this.setQueryParams();
    }
    FiltrarTerceros() {
        // let p = {coincidencia:match};
        return this.http.get(this._rutaBase + 'filtrar_terceros.php');
    }
    setQueryParams() {
        let params = {};
        if (this.CertificadoRetencionModel.Fecha_Inicial != '') {
            params.Fecha_Inicial = this.CertificadoRetencionModel.Fecha_Inicial;
        }
        if (this.CertificadoRetencionModel.Fecha_Final != '') {
            params.Fecha_Final = this.CertificadoRetencionModel.Fecha_Final;
        }
        if (this.CertificadoRetencionModel.Cuentas != '') {
            params.Cuentas = this.CertificadoRetencionModel.Cuentas.join(',');
        }
        if (this.CertificadoRetencionModel.Nit != '') {
            params.Nit = this.CertificadoRetencionModel.Nit;
        }
        if (this.CertificadoRetencionModel.Tipo_Nit != '') {
            params.Tipo_Nit = this.CertificadoRetencionModel.Tipo_Nit;
        }
        if (this.CertificadoRetencionModel.Fecha_Expedicion != '') {
            params.Fecha_Expedicion = this.CertificadoRetencionModel.Fecha_Expedicion;
        }
        params.company_id = this.company_id;
        this.queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }
    generarCertificado() {
        window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/certificadoingresoretencion/certificado.php?' + this.queryParams, '_blank');
    }
}
CertificadoingresoyretencionComponent.ɵfac = function CertificadoingresoyretencionComponent_Factory(t) { return new (t || CertificadoingresoyretencionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_4__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_tercero_service__WEBPACK_IMPORTED_MODULE_6__["TerceroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
CertificadoingresoyretencionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CertificadoingresoyretencionComponent, selectors: [["app-certificadoingresoyretencion"]], decls: 35, vars: 13, consts: [[1, "row"], [1, "col-md-6", "mx-auto"], [1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], ["alt", "", "height", "45", 3, "src"], [1, "text-primary"], [3, "datosCabecera"], [1, "line"], ["FormFiltros", "ngForm"], ["appearance", "outline", 1, "col-md-6", "pl-0"], ["matInput", "", "type", "date", "name", "Fecha_Inicial", "id", "Fecha_Inicial", "required", "", 3, "ngModel", "ngModelChange", "change"], ["appearance", "outline", 1, "col-md-6", "pr-0"], ["matInput", "", "type", "date", "name", "Fecha_Corte", "id", "Fecha_Corte", "required", "", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "text", "name", "Nit", "placeholder", "Ingrese NIT o C.C", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "change"], ["matInput", "", "type", "date", "name", "fecha_expedicion", "id", "fecha_expedicion", "required", "", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled", "click"], [1, "fa", "fa-eye"], ["rt1", ""], ["rt_tercero", ""], [1, "f-9"]], template: function CertificadoingresoyretencionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-cabecera", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Fecha inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoingresoyretencionComponent_Template_input_ngModelChange_15_listener($event) { return ctx.CertificadoRetencionModel.Fecha_Inicial = $event; })("change", function CertificadoingresoyretencionComponent_Template_input_change_15_listener() { return ctx.setQueryParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Fecha de corte");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoingresoyretencionComponent_Template_input_ngModelChange_19_listener($event) { return ctx.CertificadoRetencionModel.Fecha_Final = $event; })("change", function CertificadoingresoyretencionComponent_Template_input_change_19_listener() { return ctx.setQueryParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "NIT o C.C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoingresoyretencionComponent_Template_input_ngModelChange_23_listener($event) { return ctx.TerceroSeleccionado = $event; })("change", function CertificadoingresoyretencionComponent_Template_input_change_23_listener() { return ctx.AsignarTercero(ctx.TerceroSeleccionado); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Fecha de expedici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoingresoyretencionComponent_Template_input_ngModelChange_27_listener($event) { return ctx.CertificadoRetencionModel.Fecha_Expedicion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CertificadoingresoyretencionComponent_Template_button_click_28_listener() { return ctx.generarCertificado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Generar certificado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CertificadoingresoyretencionComponent_ng_template_31_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CertificadoingresoyretencionComponent_ng_template_33_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 10, ctx.userF.person.company_worked.logo, "companies"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.CertificadoRetencionModel.Fecha_Inicial);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.CertificadoRetencionModel.Fecha_Final);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.TerceroSeleccionado)("ngbTypeahead", ctx.search_tercero)("resultTemplate", _r3)("inputFormatter", ctx.formatter_tercero);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.CertificadoRetencionModel.Fecha_Expedicion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_8__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTypeahead"]], pipes: [_core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_13__["ImagePipe"]], styles: ["input[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  right: 0;\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNlcnRpZmljYWRvaW5ncmVzb3lyZXRlbmNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJjZXJ0aWZpY2Fkb2luZ3Jlc295cmV0ZW5jaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ldm4":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/certificadoretencion/certificadoretencion.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CertificadoretencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadoretencionComponent", function() { return CertificadoretencionComponent; });
/* harmony import */ var _CertificadoRetencionModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CertificadoRetencionModel */ "JFub");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globales */ "Dgt4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_services_tercero_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/tercero.service */ "j/xU");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/user.service */ "f4AX");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../core/pipes/image.pipe */ "0gLu");

















function CertificadoretencionComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.label);
} }
function CertificadoretencionComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r7 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r7.Codigo, " ");
} }
function CertificadoretencionComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r9 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", r_r9.Nombre_Tercero, " ");
} }
class CertificadoretencionComponent {
    constructor(globales, http, _terceroService, _user) {
        this.globales = globales;
        this.http = http;
        this._terceroService = _terceroService;
        this._user = _user;
        this.datosCabecera = {
            Titulo: 'Certificados de Retención',
            Fecha: new Date()
        };
        this.CertificadoRetencionModel = new _CertificadoRetencionModel__WEBPACK_IMPORTED_MODULE_0__["CertificadoRetencionModel"]();
        this.Cuentas = [];
        this.company_id = '';
        this._rutaBase = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/terceros/';
        this.terceros = [];
        this.search_tercero = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(term => term.length < 4 ? []
            : this.terceros.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter_tercero = (x) => x.Nombre;
        /*   search_tercero = (text$: Observable<string>) =>
          text$
          .pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap( term => term.length < 4 ? [] :
              this._terceroService.FiltrarTerceros(term)
              .map(response => response)
            )
          );
        
        formatter_tercero = (x: { Nombre_Tercero: string }) => x.Nombre_Tercero; */
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(term => term.length < 4 ? []
            : this.Cuentas.filter(v => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter1 = (x) => x.Codigo;
    }
    ngOnInit() {
        this.userF = this._user.user;
        this.ListarCuentas();
        this.enviromen = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.company_id = this._user.user.person.company_worked.id;
        this.FiltrarTerceros().subscribe((data) => {
            this.terceros = data;
        });
    }
    ListarCuentas() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/certificadoretencion/lista_cuentas.php', { params: { company_id: this._user.user.person.company_worked.id } }).subscribe((data) => {
            this.Cuentas = data;
            console.log(this.Cuentas);
        });
        /* this.http.get(this.globales.ruta+'php/contabilidad/balanceprueba/lista_cuentas.php').subscribe((data:any)=>{
          this.Cuentas = data.Activo;
        }); */
    }
    FiltrarTerceros() {
        // let p = {coincidencia:match};
        return this.http.get(this._rutaBase + 'filtrar_terceros.php');
    }
    AsignarTercero(model) {
        if (typeof (model) == 'object') {
            this.CertificadoRetencionModel.Nit = model.Nit;
            this.CertificadoRetencionModel.Tipo_Nit = model.Tipo;
        }
        else {
            this.CertificadoRetencionModel.Nit = '';
            this.CertificadoRetencionModel.Tipo_Nit = '';
        }
        this.setQueryParams();
    }
    BuscarCuenta(model, tipo) {
        if (typeof (model) == 'object') {
            if (tipo == 'Inicial') {
                this.CertificadoRetencionModel.Cuenta_Inicial = model.Codigo_Centro;
            }
            else {
                this.CertificadoRetencionModel.Cuenta_Final = model.Codigo_Centro;
            }
        }
        this.setQueryParams();
    }
    setQueryParams() {
        let params = {};
        console.log(this.CertificadoRetencionModel.Cuentas);
        if (this.CertificadoRetencionModel.Fecha_Inicial != '') {
            params.Fecha_Inicial = this.CertificadoRetencionModel.Fecha_Inicial;
        }
        if (this.CertificadoRetencionModel.Fecha_Final != '') {
            params.Fecha_Final = this.CertificadoRetencionModel.Fecha_Final;
        }
        if (this.CertificadoRetencionModel.Nit != '') {
            params.Nit = this.CertificadoRetencionModel.Nit;
        }
        if (this.CertificadoRetencionModel.Fecha_Expedicion != '') {
            params.Fecha_Expedicion = this.CertificadoRetencionModel.Fecha_Expedicion;
        }
        if (this.CertificadoRetencionModel.Cuentas.length > 0) {
            params.Cuentas = this.CertificadoRetencionModel.Cuentas.join();
        }
        params.company_id = this.company_id;
        this.queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }
    generarCertificado() {
        window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/certificadoretencion/certificado.php?' + this.queryParams, '_blank');
    }
}
CertificadoretencionComponent.ɵfac = function CertificadoretencionComponent_Factory(t) { return new (t || CertificadoretencionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_4__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_tercero_service__WEBPACK_IMPORTED_MODULE_6__["TerceroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
CertificadoretencionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CertificadoretencionComponent, selectors: [["app-certificadoretencion"]], decls: 40, vars: 16, consts: [[1, "row"], [1, "col-md-6", "mx-auto"], [1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], ["alt", "", "height", "45", 3, "src"], [1, "text-primary"], [3, "datosCabecera"], [1, "line"], ["FormFiltros", "ngForm"], ["appearance", "outline", 1, "col-md-4", "pl-0"], ["matInput", "", "type", "date", "name", "Fecha_Inicial", "id", "Fecha_Inicial", "required", "", 3, "ngModel", "ngModelChange", "change"], ["appearance", "outline", 1, "col-md-4"], ["matInput", "", "type", "date", "name", "Fecha_Corte", "id", "Fecha_Corte", "required", "", 3, "ngModel", "ngModelChange", "change"], ["appearance", "outline", 1, "col-md-4", "pr-0"], ["matInput", "", "type", "date", "name", "fecha_expedicion", "id", "fecha_expedicion", "required", "", 3, "ngModel", "ngModelChange", "change"], ["appearance", "outline", 1, "col-md-6", "pl-0"], ["name", "cuentas", 3, "ngModel", "multiple", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "col-md-6", "pr-0"], ["matInput", "", "type", "text", "name", "Nit", "placeholder", "Ingrese NIT o C.C", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "change"], [1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled", "click"], [1, "fa", "fa-eye"], ["rt1", ""], ["rt_tercero", ""], [3, "value"], [1, "f-9"]], template: function CertificadoretencionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-cabecera", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Fecha inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoretencionComponent_Template_input_ngModelChange_15_listener($event) { return ctx.CertificadoRetencionModel.Fecha_Inicial = $event; })("change", function CertificadoretencionComponent_Template_input_change_15_listener() { return ctx.setQueryParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Fecha de corte");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoretencionComponent_Template_input_ngModelChange_19_listener($event) { return ctx.CertificadoRetencionModel.Fecha_Final = $event; })("change", function CertificadoretencionComponent_Template_input_change_19_listener() { return ctx.setQueryParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Fecha de expedici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoretencionComponent_Template_input_ngModelChange_23_listener($event) { return ctx.CertificadoRetencionModel.Fecha_Expedicion = $event; })("change", function CertificadoretencionComponent_Template_input_change_23_listener() { return ctx.setQueryParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cuentas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoretencionComponent_Template_mat_select_ngModelChange_27_listener($event) { return ctx.CertificadoRetencionModel.Cuentas = $event; })("selectionChange", function CertificadoretencionComponent_Template_mat_select_selectionChange_27_listener() { return ctx.setQueryParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CertificadoretencionComponent_mat_option_28_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "NIT o C.C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CertificadoretencionComponent_Template_input_ngModelChange_32_listener($event) { return ctx.TerceroSeleccionado = $event; })("change", function CertificadoretencionComponent_Template_input_change_32_listener() { return ctx.AsignarTercero(ctx.TerceroSeleccionado); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CertificadoretencionComponent_Template_button_click_33_listener() { return ctx.generarCertificado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Generar certificado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CertificadoretencionComponent_ng_template_36_Template, 2, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CertificadoretencionComponent_ng_template_38_Template, 2, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 13, ctx.userF.person.company_worked.logo, "companies"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.CertificadoRetencionModel.Fecha_Inicial);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.CertificadoRetencionModel.Fecha_Final);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.CertificadoRetencionModel.Fecha_Expedicion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.CertificadoRetencionModel.Cuentas)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.Cuentas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.TerceroSeleccionado)("ngbTypeahead", ctx.search_tercero)("resultTemplate", _r4)("inputFormatter", ctx.formatter_tercero);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_8__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTypeahead"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], pipes: [_core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_16__["ImagePipe"]], styles: ["input[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  right: 0;\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNlcnRpZmljYWRvcmV0ZW5jaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiY2VydGlmaWNhZG9yZXRlbmNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "tJwM":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/resumenretenciones/resumenretenciones.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ResumenretencionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenretencionesComponent", function() { return ResumenretencionesComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globales */ "Dgt4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/user.service */ "f4AX");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/pipes/image.pipe */ "0gLu");












class ResumenretencionesComponent {
    constructor(globales, http, _user) {
        this.globales = globales;
        this.http = http;
        this._user = _user;
        this.datosCabecera = {
            Titulo: 'Resumen de Retenciones',
            Fecha: new Date()
        };
        this.model = {
            Fecha_Inicio: '',
            Fecha_Fin: '',
            Tipo_Retencion: 'Retefuente',
            Tipo_Reporte: 'Pcga'
        };
        this.company_id = '';
    }
    ngOnInit() {
        this.userF = this._user.user;
        this.company_id = this._user.user.person.company_worked.id;
    }
    setQueryParams() {
        let params = {};
        for (const key in this.model) {
            params[key] = this.model[key];
        }
        params.company_id = this.company_id;
        this.queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }
    generarResumen() {
        window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/contabilidad/resumenretenciones/reporte.php?' + this.queryParams, '_blank');
    }
}
ResumenretencionesComponent.ɵfac = function ResumenretencionesComponent_Factory(t) { return new (t || ResumenretencionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_2__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
ResumenretencionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumenretencionesComponent, selectors: [["app-resumenretenciones"]], decls: 39, vars: 10, consts: [[1, "row"], [1, "col-md-6", "mx-auto"], [1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], ["alt", "", "height", "45", 3, "src"], [1, "text-primary"], [3, "datosCabecera"], [1, "line"], ["FormFiltros", "ngForm"], ["appearance", "outline", 1, "col-md-6", "pl-0"], ["matInput", "", "type", "date", "name", "Fecha_Inicial", "id", "Fecha_Inicial", "required", "", 3, "ngModel", "ngModelChange", "change"], ["appearance", "outline", 1, "col-md-6", "pr-0"], ["matInput", "", "type", "date", "name", "Fecha_Corte", "id", "Fecha_Corte", "required", "", 3, "ngModel", "ngModelChange", "change"], ["name", "Tipo_Retencion", "id", "Tipo_Retencion", 3, "ngModel", "selectionChange", "ngModelChange"], ["value", "Retefuente"], ["value", "Reteica"], ["name", "Tipo_Reporte", "id", "Tipo_Reporte", 3, "ngModel", "selectionChange", "ngModelChange"], ["value", "Pcga"], ["value", "Niif"], [1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled", "click"], [1, "fa", "fa-eye"]], template: function ResumenretencionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-cabecera", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Fecha inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ResumenretencionesComponent_Template_input_ngModelChange_15_listener($event) { return ctx.model.Fecha_Inicio = $event; })("change", function ResumenretencionesComponent_Template_input_change_15_listener() { return ctx.setQueryParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Fecha de fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ResumenretencionesComponent_Template_input_ngModelChange_19_listener($event) { return ctx.model.Fecha_Fin = $event; })("change", function ResumenretencionesComponent_Template_input_change_19_listener() { return ctx.setQueryParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Retenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function ResumenretencionesComponent_Template_mat_select_selectionChange_23_listener() { return ctx.setQueryParams(); })("ngModelChange", function ResumenretencionesComponent_Template_mat_select_ngModelChange_23_listener($event) { return ctx.model.Tipo_Retencion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Retefuente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Reteica");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Tipo de reporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function ResumenretencionesComponent_Template_mat_select_selectionChange_31_listener() { return ctx.setQueryParams(); })("ngModelChange", function ResumenretencionesComponent_Template_mat_select_ngModelChange_31_listener($event) { return ctx.model.Tipo_Reporte = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "PCGA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "NIIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResumenretencionesComponent_Template_button_click_36_listener() { return ctx.generarResumen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Generar Resumen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 7, ctx.userF.person.company_worked.logo, "companies"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.Fecha_Inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.Fecha_Fin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.Tipo_Retencion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.Tipo_Reporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_5__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_11__["ImagePipe"]], styles: ["input[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  right: 0;\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJlc3VtZW5yZXRlbmNpb25lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InJlc3VtZW5yZXRlbmNpb25lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "yNa8":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/informesdian/mediosmagneticos/mediomagneticocrear/MedioMagneticoModel.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MedioMagneticoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedioMagneticoModel", function() { return MedioMagneticoModel; });
class MedioMagneticoModel {
    constructor() {
        this.Periodo = '';
        this.Codigo_Formato = '';
        this.Nombre_Formato = '';
        this.Tipo_Exportacion = '';
    }
}


/***/ })

}]);
//# sourceMappingURL=informesdian-informesdian-module.js.map