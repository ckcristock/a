(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comprobantes-comprobantes-module"],{

/***/ "21R5":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notascredito/notascredito.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NotascreditoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotascreditoComponent", function() { return NotascreditoComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "vdoh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globales */ "Dgt4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! saturn-datepicker */ "nJc8");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/not-data/not-data.component */ "j80Y");















function NotascreditoComponent_table_38_tr_16_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Contab. PCGA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nota_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate3"]("href", "", ctx_r7.enviromen.ruta, "php/contabilidad/movimientoscontables/movimientos_nota_credito_global_pdf.php?id_registro=", nota_r6.Id_Nota_Credito_Global, "&id_funcionario_elabora=", ctx_r7.funcionario, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function NotascreditoComponent_table_38_tr_16_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Contab. NIIF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nota_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate3"]("href", "", ctx_r8.enviromen.ruta, "php/contabilidad/movimientoscontables/movimientos_nota_credito_global_pdf.php?id_registro=", nota_r6.Id_Nota_Credito_Global, "&id_funcionario_elabora=", ctx_r8.funcionario, "&tipo_valor=Niif", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/contabilidad/notas-credito/ver", a1]; };
function NotascreditoComponent_table_38_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Ver Nota");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Imprimir");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, NotascreditoComponent_table_38_tr_16_a_25_Template, 3, 3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, NotascreditoComponent_table_38_tr_16_a_26_Template, 3, 3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nota_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](nota_r6.Codigo_Nota);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 10, nota_r6.Fecha_Nota, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", nota_r6.Funcionario, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](nota_r6.Cliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", nota_r6.Codigo_Factura, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, nota_r6.Id_Nota_Credito_Global));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("href", "", ctx_r5.enviromen.ruta, "php/notas_credito_nuevo/descarga_pdf.php?tipo=Nota_Credito&id=", nota_r6.Id_Nota_Credito_Global, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.perfilUsuario == "27" || ctx_r5.perfilUsuario == "16");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.perfilUsuario == "27" || ctx_r5.perfilUsuario == "16");
} }
function NotascreditoComponent_table_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "C\u00F3digo Nota");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Funcionario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "C\u00F3digo Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, NotascreditoComponent_table_38_tr_16_Template, 27, 15, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.Notas);
} }
function NotascreditoComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx_r2.page1 * ctx_r2.maxSize - ctx_r2.maxSize + 1, " al ", ctx_r2.page1 * ctx_r2.maxSize > ctx_r2.TotalItems1 ? ctx_r2.TotalItems1 : ctx_r2.page1 * ctx_r2.maxSize, " de ", ctx_r2.TotalItems1, " ");
} }
function NotascreditoComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-not-data", 40);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx_r4.Cargando);
} }
const _c1 = function () { return ["/contabilidad/comprobantes/notas-credito/crear"]; };
class NotascreditoComponent {
    constructor(http, globales, route, location, dateAdapter) {
        this.http = http;
        this.globales = globales;
        this.route = route;
        this.location = location;
        this.dateAdapter = dateAdapter;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('es-CO');
        this.matPanel = false;
        this.perfilUsuario = '';
        this.funcionario = {};
        this.filtro_cod_nota = '';
        this.filtro_cod_factura = '';
        this.filtro_fecha_nota = '';
        this.filtro_funcionario = '';
        this.filtro_cliente = '';
        this.filtro_tipo_fact = '';
        this.page1 = 1;
        this.maxSize = 15;
        this.Cargando = false;
        this.Notas = [];
        this.Servicios = [];
        this.myDateRangePickerOptions1 = {
            width: '120px',
            height: '21px',
            selectBeginDateTxt: 'Inicio',
            selectEndDateTxt: 'Fin',
            selectionTxtFontSize: '10px',
            dateFormat: 'yyyy-mm-dd',
        };
        // this.perfilUsuario = localStorage.getItem('miPerfil');
        // this.funcionario = JSON.parse(localStorage.getItem('User')).Identificacion_Funcionario;
        console.log(this.funcionario);
        this.dateAdapter.setLocale('es');
        // this.getServicios();
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
        this.ListarDetallesFacturacion();
    }
    ListarDetallesFacturacion() {
        this.Cargando = true;
        let params = this.route.snapshot.queryParams;
        let queryString = '';
        if (Object.keys(params).length > 0) {
            // Si existe parametros o filtros
            // actualizando la variables con los valores de los paremetros.
            this.page1 = params.pag ? params.pag : 1;
            this.filtro_cod_nota = params.cod_nota ? params.cod_nota : '';
            this.filtro_cod_factura = params.cod_factura ? params.cod_factura : '';
            this.filtro_fecha_nota = params.fecha_nota ? params.fecha_nota : '';
            this.filtro_funcionario = params.funcionario ? params.funcionario : '';
            this.filtro_cliente = params.cliente ? params.cliente : '';
            queryString =
                '?' +
                    Object.keys(params)
                        .map((key) => key + '=' + params[key])
                        .join('&');
        }
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta +
            '/php/notas_credito_nuevo/get_notas_creditos.php?' +
            queryString)
            .subscribe((data) => {
            this.Cargando = false;
            this.Notas = data.Notas_Credito;
            this.TotalItems1 = data.numReg;
        });
    }
    paginacion() {
        let params = {
            pag: this.page1,
        };
        console.log('page', this.page1);
        if (this.filtro_cod_nota != '') {
            params.cod_nota = this.filtro_cod_nota;
        }
        if (this.filtro_cod_factura != '') {
            params.cod_factura = this.filtro_cod_factura;
        }
        if (this.filtro_fecha_nota != '' && this.filtro_fecha_nota != null) {
            if (typeof this.filtro_fecha_nota == 'object') {
                this.filtro_fecha_nota = this.filtro_fecha_nota.formatted;
            }
            params.fecha_nota = this.filtro_fecha_nota.formatted;
        }
        if (this.filtro_funcionario != '') {
            params.funcionario = this.filtro_funcionario;
        }
        if (this.filtro_cliente != '') {
            params.cliente = this.filtro_cliente;
        }
        if (this.filtro_tipo_fact != '') {
            params.tipo = this.filtro_tipo_fact;
        }
        let queryString = Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&');
        this.Cargando = true;
        this.location.replaceState('/notascreditonuevo', queryString);
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta +
            '/php/notas_credito_nuevo/get_notas_creditos.php?' +
            queryString)
            .subscribe((data) => {
            this.Notas = data.Notas_Credito;
            this.TotalItems1 = data.numReg;
            this.Cargando = false;
        });
    }
    filtros1() {
        let params = {};
        if (this.filtro_cod_nota != '' ||
            this.filtro_cod_factura != '' ||
            this.filtro_fecha_nota != '' ||
            this.filtro_funcionario != '' ||
            this.filtro_cliente != '' ||
            this.filtro_tipo_fact != '') {
            this.page1 = 1;
            params.pag = this.page1;
            if (this.filtro_cod_nota != '') {
                params.cod_nota = this.filtro_cod_nota;
            }
            if (this.filtro_cod_factura != '') {
                params.cod_factura = this.filtro_cod_factura;
            }
            if (this.filtro_fecha_nota != '' && this.filtro_fecha_nota != null) {
                if (typeof this.filtro_fecha_nota == 'object') {
                    this.filtro_fecha_nota = this.filtro_fecha_nota.formatted;
                }
                params.fecha_nota = this.filtro_fecha_nota;
            }
            if (this.filtro_funcionario != '') {
                params.funcionario = this.filtro_funcionario;
            }
            if (this.filtro_cliente != '') {
                params.cliente = this.filtro_cliente;
            }
            if (this.filtro_tipo_fact != '') {
                params.tipo = this.filtro_tipo_fact;
            }
            let queryString = Object.keys(params)
                .map((key) => key + '=' + params[key])
                .join('&');
            this.location.replaceState('/notascreditonuevo', queryString);
            this.Cargando = true;
            this.http
                .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta +
                '/php/notas_credito_nuevo/get_notas_creditos.php?' +
                queryString)
                .subscribe((data) => {
                this.Notas = data.Notas_Credito;
                this.TotalItems1 = data.numReg;
                this.Cargando = false;
            });
        }
        else {
            this.location.replaceState('/notascreditonuevo', '');
            this.page1 = 1;
            this.filtro_fecha_nota = '';
            this.filtro_cod_nota = '';
            this.filtro_cod_factura = '';
            this.filtro_funcionario = '';
            this.filtro_cliente = '';
            this.filtro_tipo_fact = '';
            this.Cargando = true;
            this.http
                .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/notas_credito_nuevo/get_notas_creditos.php?')
                .subscribe((data) => {
                this.Notas = data.Notas_Credito;
                this.TotalItems1 = data.numReg;
                this.Cargando = false;
            });
        }
    }
    dateRangeChanged1(event) {
        if (event.formatted != '') {
            this.filtro_fecha_nota = event.formatted;
        }
        else {
            this.filtro_fecha_nota = '';
        }
        console.log('fecha date_R', this.filtro_fecha_nota);
        this.filtros1();
    }
    /* getServicios(){
      this._tiposervicio.GetServiciosTipoServicio().subscribe((data:any)=>{
        this.Servicios=data;
      })
    } */
    selectedDate(fecha) {
        this.filtro_fecha_nota =
            this.datePipe.transform(fecha.value.begin._d, 'yyyy-MM-dd') +
                ' - ' +
                this.datePipe.transform(fecha.value.end._d, 'yyyy-MM-dd');
        this.filtros1();
    }
}
NotascreditoComponent.ɵfac = function NotascreditoComponent_Factory(t) { return new (t || NotascreditoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_5__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"])); };
NotascreditoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotascreditoComponent, selectors: [["app-notascredito"]], viewQuery: function NotascreditoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 43, vars: 18, consts: [[1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "text-primary"], [1, "btn-group", "rounded"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "btn", "btn-info", "btn-sm", 2, "float", "right", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "line"], ["multi", ""], [1, "mat-elevation-z0"], ["appearance", "outline", 1, "col-md-3", "pl-0"], ["matInput", "", "name", "daterange", "autocomplete", "off", "required", "", 3, "satDatepicker", "value", "dateChange", "dateInput"], [3, "rangeMode"], ["picker", ""], ["matSuffix", "", 3, "for"], ["appearance", "outline", 1, "col-md-2", "pl-0"], ["matInput", "", "type", "text", "placeholder", "Busca por c\u00F3digo", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "placeholder", "Busca por funcionario", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "placeholder", "Busca por cliente", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "placeholder", "Busca por c\u00F3digo factura", 3, "ngModel", "ngModelChange", "input"], ["class", "table table-bordered table-responsive-sm table-striped table-sm", "style", "font-size: small", 4, "ngIf", "ngIfElse"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["size", "sm", 1, "d-flex", "justify-content-center", "pagination-rounded", "pagination-sm", 3, "collectionSize", "page", "maxSize", "pageSize", "boundaryLinks", "pageChange"], ["notData", ""], [1, "table", "table-bordered", "table-responsive-sm", "table-striped", "table-sm", 2, "font-size", "small"], [4, "ngFor", "ngForOf"], [1, "text-center"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "btn-mini", "waves-effect", "waves-light"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", ""], ["href", "", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "routerLink"], [1, "ti-eye"], ["target", "_blank", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "ti-printer"], ["class", "dropdown-item waves-light waves-effect caja-botones", "target", "_blank", 3, "href", 4, "ngIf"], [1, "fa", "fa-book"], [1, "d-flex", "justify-content-center"], [3, "loading"]], template: function NotascreditoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Notas Cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotascreditoComponent_Template_button_click_9_listener() { return ctx.openClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-accordion", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Rango de fechas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function NotascreditoComponent_Template_input_dateChange_18_listener($event) { return ctx.selectedDate($event); })("dateInput", function NotascreditoComponent_Template_input_dateInput_18_listener($event) { return ctx.selectedDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "sat-datepicker", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "sat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditoComponent_Template_input_ngModelChange_25_listener($event) { return ctx.filtro_cod_nota = $event; })("input", function NotascreditoComponent_Template_input_input_25_listener() { return ctx.filtros1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Funcionario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditoComponent_Template_input_ngModelChange_29_listener($event) { return ctx.filtro_funcionario = $event; })("input", function NotascreditoComponent_Template_input_input_29_listener() { return ctx.filtros1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditoComponent_Template_input_ngModelChange_33_listener($event) { return ctx.filtro_cliente = $event; })("input", function NotascreditoComponent_Template_input_input_33_listener() { return ctx.filtros1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "C\u00F3digo Factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditoComponent_Template_input_ngModelChange_37_listener($event) { return ctx.filtro_cod_factura = $event; })("input", function NotascreditoComponent_Template_input_input_37_listener() { return ctx.filtros1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, NotascreditoComponent_table_38_Template, 17, 1, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, NotascreditoComponent_small_39_Template, 2, 3, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ngb-pagination", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function NotascreditoComponent_Template_ngb_pagination_pageChange_40_listener($event) { return ctx.page1 = $event; })("pageChange", function NotascreditoComponent_Template_ngb_pagination_pageChange_40_listener() { return ctx.paginacion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, NotascreditoComponent_ng_template_41_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("satDatepicker", _r0)("value", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filtro_cod_nota);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filtro_funcionario);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filtro_cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filtro_cod_factura);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.Cargando && ctx.Notas.length > 0)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.TotalItems1 != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("collectionSize", ctx.TotalItems1)("page", ctx.page1)("maxSize", 10)("pageSize", ctx.maxSize)("boundaryLinks", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["SatDatepickerInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["SatDatepicker"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_7__["SatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbPagination"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_13__["NotDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rhc2NyZWRpdG8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "4CpT":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notascredito/notascreditocrear/notascreditocrear.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NotascreditocrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotascreditocrearComponent", function() { return NotascreditocrearComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globales */ "Dgt4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");












const _c0 = ["confirmacionSwal"];
const _c1 = ["finalizacionSwal"];
const _c2 = ["FormNotaCredito"];
const _c3 = ["check"];
function NotascreditocrearComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipo_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", tipo_r10.Modulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tipo_r10.Nombre);
} }
function NotascreditocrearComponent_div_30_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipoCliente_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", tipoCliente_r13.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tipoCliente_r13.Nombre);
} }
function NotascreditocrearComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Tipo de Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditocrearComponent_div_30_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.TipoClienteSelected = $event; })("change", function NotascreditocrearComponent_div_30_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.BuscarClientesTerceros(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NotascreditocrearComponent_div_30_option_5_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.TipoClienteSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.TipoClientes);
} }
function NotascreditocrearComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotascreditocrearComponent_div_31_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.validarCliente(); })("ngModelChange", function NotascreditocrearComponent_div_31_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.DatosCliente = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.DatosCliente)("ngbTypeahead", ctx_r3.search)("resultTemplate", _r6)("inputFormatter", ctx_r3.formatter);
} }
function NotascreditocrearComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "C\u00F3digo de la factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditocrearComponent_div_32_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.Codigo_Factura = $event; })("change", function NotascreditocrearComponent_div_32_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.BuscarFactura($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.Codigo_Factura);
} }
function NotascreditocrearComponent_div_40_tr_36_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r29.Id_Causal_No_Conforme);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r29.Nombre);
} }
function NotascreditocrearComponent_div_40_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotascreditocrearComponent_div_40_tr_36_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const item_r25 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r31.NotaCredito(item_r25, $event.target.checked); })("ngModelChange", function NotascreditocrearComponent_div_40_tr_36_Template_input_ngModelChange_2_listener($event) { const item_r25 = ctx.$implicit; return item_r25.Nota = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditocrearComponent_div_40_tr_36_Template_select_ngModelChange_23_listener($event) { const item_r25 = ctx.$implicit; return item_r25.Id_Motivo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, NotascreditocrearComponent_div_40_tr_36_option_24_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditocrearComponent_div_40_tr_36_Template_input_ngModelChange_26_listener($event) { const item_r25 = ctx.$implicit; return item_r25.Observacion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotascreditocrearComponent_div_40_tr_36_Template_input_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const item_r25 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r36.ValidarValorNota(item_r25); })("ngModelChange", function NotascreditocrearComponent_div_40_tr_36_Template_input_ngModelChange_28_listener($event) { const item_r25 = ctx.$implicit; return item_r25.Precio_Nota = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", i_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "RealizarNota", i_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", item_r25.Valor_Nota_Credito_Acumulado == item_r25.Subtotal_Factura)("ngModel", item_r25.Nota);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r25.Producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r25.Cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 24, item_r25.Precio));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 26, item_r25.Descuento));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r25.Impuesto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$ ", item_r25.Total_Producto_Factura, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$ ", item_r25.Precio_Nota_Credito_Acumulado, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$ ", item_r25.Valor_Nota_Credito_Acumulado, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Id_Motivo", i_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", item_r25.Disabled)("ngModel", item_r25.Id_Motivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r24.Motivos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Observacion", i_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", item_r25.Disabled)("ngModel", item_r25.Observacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Valor_Vota", i_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", item_r25.Disabled)("ngModel", item_r25.Precio_Nota);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$ ", item_r25.Valor_Nota, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$ ", item_r25.Valor_Nota_Total, "");
} }
function NotascreditocrearComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotascreditocrearComponent_div_40_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r38.CheckeoMultiple($event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Precio U.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Desc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Iva");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Precio NC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Total NC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Motivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Observaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Precio U.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Subt. NC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Total NC.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, NotascreditocrearComponent_div_40_tr_36_Template, 33, 28, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.Lista_Productos);
} }
function NotascreditocrearComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r40 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r40.Nombre, " ");
} }
class NotascreditocrearComponent {
    constructor(route, http, globales, router) {
        this.route = route;
        this.http = http;
        this.globales = globales;
        this.router = router;
        this.Tipo_Factura = [
            // {Nombre:'Factura Dispensación',Modulo:'Factura'},
            { Nombre: 'Factura Capita', Modulo: 'Factura_Capita' },
            { Nombre: 'Factura Venta', Modulo: 'Factura_Venta' },
            { Nombre: 'Factura Administrativa', Modulo: 'Factura_Administrativa' }
        ];
        this.TipoClientes = [
            { Nombre: 'Cliente' }, { Nombre: 'Proveedor' }, { Nombre: 'Funcionario' }
        ];
        this.TipoClienteSelected = '';
        this.Codigo_Factura = '';
        this.Cliente = [];
        this.Motivos = [];
        this.Lista_Productos = [];
        this.ListaProductos = [];
        this.Boton = false;
        this.Fecha = new Date();
        this.Mostrar = false;
        this.Productos_Nota = [];
        this.Cantidad_Inicial = 0;
        this.Subtotal = 0;
        this.Iva = 0;
        this.Total = 0;
        // el subtotal general es la sumatoria de los subtales de los productos que vienen de la base de datos, sin modificar valor de nota;
        this.SubTotalGeneral = 0;
        this.SubTotalDisponible = 0;
        this.Observaciones_General = '';
        this.reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Subtotal_Nota);
        this.reducer1 = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Iva);
        this.normalize = (function () {
            var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇçº", to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc#", mapping = {};
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
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 4 ? []
            : this.Cliente.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        this.formatter = (x) => x.Nombre;
        this.alerOptions = {
            title: "¿Está Seguro?",
            icon: 'warning',
            text: "Se dispone a Guardar esta Nota Credito",
            showCancelButton: true,
            confirmButtonText: 'Si, Guardar',
            cancelButtonText: 'No, Dejame Comprobar!',
            showLoaderOnConfirm: true,
            focusCancel: true,
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.GuardarNotaCredito(this.FormNotaCredito);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.isLoading()
        };
    }
    ngOnInit() {
        // this.user = JSON.parse(localStorage.User);
        this.enviromen = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/lista_generales.php', { params: { modulo: 'Causal_No_Conforme' } }).subscribe((data) => {
            this.Motivos = data;
        });
    }
    NotaCredito(item, check, calculartotal = true) {
        let precioDisponible = item.Precio - item.Precio_Nota_Credito_Acumulado;
        console.log('precio n', precioDisponible);
        if (check) {
            item.Disabled = false;
            item.Required = true;
            item.Precio_Nota = 0;
        }
        else {
            item.Valor_Nota = 0;
            item.Valor_Nota_Total = 0;
            item.Precio_Nota = 0;
            item.Disabled = true;
            item.Subtotal_Nota = 0;
            item.Iva = 0;
        }
        if (calculartotal) {
            this.calcularTotal();
        }
    }
    BuscarClientes() {
        this.setearValores();
        this.TipoClienteSelected = '';
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/lista_generales.php', { params: { modulo: 'Cliente' } }).subscribe((data) => {
            this.Cliente = data;
            console.log(data);
        });
    }
    BuscarClientesTerceros(tipo = false) {
        this.setearValores();
        let params = {};
        params.Tipo = tipo != false ? tipo : this.TipoClienteSelected;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/clientes/get_terceros_por_tipo.php', { params }).subscribe((data) => {
            this.Cliente = data;
        });
    }
    BuscarFactura(codigo) {
        this.Lista_Productos = [];
        this.SubTotalGeneral = 0;
        this.Total = 0;
        //reviso si lo que me llega es diferente de vacio
        if (this.Tipo_Factura_Selected != "") {
            if (Object.keys(this.DatosCliente).length > 0 && this.DatosCliente.Id_Cliente != undefined) {
                this.FacturaCliente = [];
                let params = { id: this.DatosCliente.Id_Cliente, modelo: this.Tipo_Factura_Selected, codigo };
                if (this.Tipo_Factura_Selected == 'Factura_Administrativa') {
                    params.tipoCliente = this.TipoClienteSelected;
                }
                //Con el tipo de factura que se seleccionó, y el dato del cliente hago una peticion a buscar las facturas del cliente 
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + '/php/notas_credito_nuevo/lista_facturas_cliente_notas_credito.php', { params })
                    .subscribe((data) => {
                    // guardo en un array el id y el codigo de la factura
                    if (data.Factura) {
                        this.FacturaCliente = data.Factura;
                        //buscar productos de la factura  
                        this.BuscarProductosFactura(data.Factura.Id_Factura);
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                            icon: data.tipo,
                            text: data.mensaje,
                            title: data.title
                        });
                        /* this.confirmacionSwal.title=data.title;
                        this.confirmacionSwal.text= data.mensaje;
                        this.confirmacionSwal.type= data.tipo;
                        this.confirmacionSwal.fire(); */
                        this.Codigo_Factura = '';
                    }
                });
            }
        }
    }
    BuscarProductosFactura(id) {
        //se recibe el id de la factura
        this.SubTotalGeneral = 0;
        this.SubTotalDisponible = 0;
        this.Total = 0;
        this.Id_Factura = id;
        //buscamos en la api los datos que coincidan con el id y tipo de factura 
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/notas_credito_nuevo/lista_producto_notas_credito.php', { params: { id: id, modelo: this.Tipo_Factura_Selected } }).subscribe((data) => {
            this.Lista_Productos = data.Productos;
            this.SubTotalGeneral = data.Total_General_Producto_Facturas;
            this.SubTotalDisponible = data.Subtotal_Disponible;
            this.Mostrar = true;
        });
    }
    CheckeoMultiple(check_general) {
        //buscamos todos los checks de los productos
        let cheks = document.getElementsByClassName("checks");
        //activo/desactivo todos los checks dependiento de el general
        for (let index = 0; index < cheks.length; index++) {
            cheks[index]['checked'] = check_general;
        }
        //busco cada item y le doy los valores de la nota
        this.Lista_Productos.forEach(producto => {
            this.NotaCredito(producto, check_general, false);
        });
        this.calcularTotal();
    }
    GuardarNotaCredito(formulario) {
        let productos_seleccionados = this.Lista_Productos.filter(producto => producto.Disabled == false);
        if (productos_seleccionados.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Operación denegada',
                text: 'Debe agregar al menos un producto para realizar la nota crédito'
            });
            /* this.confirmacionSwal.title="Operación denegada";
            this.confirmacionSwal.text= "Debe agregar al menos un producto para realizar la nota crédito";
            this.confirmacionSwal.icon= "error";
            this.confirmacionSwal.fire(); */
            return false;
        }
        let productos = this.normalize(JSON.stringify(this.Lista_Productos));
        let funcionario = this.user.Identificacion_Funcionario;
        console.log(this.SubTotalGeneral);
        let subTotalGeneral = this.SubTotalGeneral.toString();
        let total = this.Total;
        let moduloFactura = this.Tipo_Factura_Selected;
        let codigoFactua = this.Codigo_Factura;
        let observaciones = this.Observaciones_General;
        let prod = this.normalize(JSON.stringify(productos_seleccionados));
        let factura = this.normalize(JSON.stringify(this.FacturaCliente));
        let cliente = this.DatosCliente.Id_Cliente;
        let datos = new FormData();
        datos.append("modulo", moduloFactura);
        datos.append("subTotalGeneral", subTotalGeneral);
        datos.append("total", total);
        datos.append("factura", factura);
        datos.append("codigoFactura", codigoFactua);
        datos.append("observaciones", observaciones);
        datos.append("productosNotas", prod);
        datos.append("productos", productos);
        datos.append("funcionario", funcionario);
        datos.append("cliente", cliente);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/notas_credito_nuevo/guardar_nota_credito.php', datos).subscribe((data) => {
            if (data.tipo == 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: data.tipo,
                    text: data.mensaje,
                    title: data.title
                });
                /* this.finalizacionSwal.title = data.title;
                this.finalizacionSwal.text = data.mensaje;
                this.finalizacionSwal.icon = data.tipo;
                this.finalizacionSwal.show(); */
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: data.tipo,
                    text: data.mensaje,
                    title: data.title
                });
                /* this.confirmacionSwal.title = data.title;
                this.confirmacionSwal.text = data.mensaje;
                this.confirmacionSwal.type = data.tipo;
                this.confirmacionSwal.show(); */
            }
        });
    }
    AbonoFactura(valor) {
        if ((parseInt(this.ValorFactura) >= parseInt(valor) && (this.ValorFactura != undefined))) {
            this.Boton = true;
            // console.log(valor);
        }
        else {
            this.Boton = false;
        }
    }
    VerPantallaLista() {
        this.FormNotaCredito.reset();
        this.router.navigate(['/contabilidad/comprobantes/notas-credito']);
    }
    calcularSubtotal(Item) {
        let resultado = 0;
        if (Item.Precio_Nota) {
            let subtotal = parseFloat(Item.Cantidad) * parseFloat(Item.Precio_Nota);
            resultado = subtotal; //+ valor_iva;
        }
        return resultado;
    }
    calcularTotalProducto(Item) {
        let resultado = 0;
        if (Item.Precio_Nota) {
            let valor_iva = (parseFloat(Item.Impuesto) / 100) * ((parseFloat(Item.Cantidad) * parseFloat(Item.Precio_Nota)));
            let subtotal = parseFloat(Item.Cantidad) * parseFloat(Item.Precio_Nota);
            resultado = subtotal + valor_iva;
        }
        return resultado;
    }
    ValidarValorNota(item) {
        item.Valor_Nota = this.calcularSubtotal(item);
        item.Valor_Nota_Total = this.calcularTotalProducto(item);
        let total_notas = item.Valor_Nota_Total + item.Valor_Nota_Credito_Acumulado;
        if (total_notas > item.Total_Producto_Factura) {
            item.Precio_Nota = 0;
            item.Valor_Nota = 0;
            item.Valor_Nota_Total = 0;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Error en precio ingresado',
                icon: 'error',
                text: 'El precio del producto no puede ser mayor que el subtotal sin Iva.',
            });
            /* this.confirmacionSwal.title="Error en precio ingresado";
            this.confirmacionSwal.text= "El precio del producto no puede ser mayor que el subtotal sin Iva.";
            this.confirmacionSwal.type= "error";
            this.confirmacionSwal.show(); */
        }
        this.calcularTotal();
    }
    validarCliente() {
        if (typeof (this.DatosCliente) != 'object') {
            this.DatosCliente = '';
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'warning',
                title: 'Cliente incorrecto',
                text: 'El cliente que has ingresado es incorrecto.'
            });
        }
        this.FacturaCliente = [];
        this.Lista_Productos = [];
        this.SubTotalGeneral = 0;
        this.Total = 0;
        this.Codigo_Factura = '';
    }
    calcularTotal() {
        console.log('calcular total');
        let acumulador = 0;
        if (this.Lista_Productos) {
            this.Lista_Productos.forEach(producto => {
                if (!producto.Disabled) {
                    acumulador += producto.Valor_Nota;
                }
            });
        }
        this.Total = acumulador;
    }
    setearValores() {
        this.Cliente = [];
        this.DatosCliente = '';
        this.FacturaCliente = [];
        this.Lista_Productos = [];
        this.SubTotalGeneral = 0;
        this.Total = 0;
        this.Codigo_Factura = '';
    }
}
NotascreditocrearComponent.ɵfac = function NotascreditocrearComponent_Factory(t) { return new (t || NotascreditocrearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_6__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NotascreditocrearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotascreditocrearComponent, selectors: [["app-notascreditocrear"]], viewQuery: function NotascreditocrearComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.finalizacionSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.FormNotaCredito = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.checks = _t.first);
    } }, decls: 61, vars: 16, consts: [[1, "page-body"], [1, "row"], [1, "col-lg-12", "col-md-12"], ["FormNotaCredito", "ngForm"], [1, "card"], [1, "row", "invoice-contact", 2, "align-items", "flex-start !important"], [1, "col-md-8"], [1, "invoice-box", "row"], [1, "col-sm-12"], [1, "table", "table-responsive", "invoice-table", "table-borderless"], [1, "col-md-4"], [1, "row", "text-right", 2, "margin", "0"], [1, "card-body"], [1, "row", "invoive-info", 2, "margin-bottom", "0"], [1, "form-group"], ["name", "Tipo_Selected", "required", "", 1, "form-control", "form-control-sm", "tipo-dis-select", 3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-2 col-sm-6", 4, "ngIf"], ["class", "col-md-2", 4, "ngIf"], [1, "col-md-12", "col-xs-12"], ["name", "Observacion", 2, "width", "100%", 3, "ngModel", "ngModelChange"], ["class", "row", "style", "margin-top:30px;", 4, "ngIf"], [1, "table", "table-responsive", "invoice-table", "invoice-total"], [1, "col-md-12"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-sm", "btn-enviar", 3, "swal", "disabled"], ["rt", ""], ["title", "", "text", "", "type", ""], ["confirmacionSwal", ""], ["title", "", "text", "", "type", "", 3, "confirm"], ["finalizacionSwal", ""], [3, "value"], [1, "col-md-2", "col-sm-6"], ["name", "tipoCliente", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "name", "Cliente", "id", "Cliente", "required", "", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "change", "ngModelChange"], [1, "col-md-2"], ["type", "text", "placeholder", "Ingrese el c\u00F3digo", "name", "Codigo_Factura", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "change"], [1, "row", 2, "margin-top", "30px"], [1, "table-responsive", "tabla"], [1, "table", "invoice-detail-table", "space", 2, "table-layout", "auto !important"], [1, "thead-default"], [2, "width", "30px"], ["type", "checkbox", "title", "Realizar Nota Credito", "name", "Nota1", 3, "change"], ["check1", ""], [2, "width", "60px"], [2, "width", "100px"], [2, "width", "80px"], [2, "width", "50px"], [2, "width", "120px"], [2, "width", "150px"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], ["type", "checkbox", "title", "Realizar Nota Credito", "name", "Nota", 1, "checks", 3, "disabled", "id", "ngModel", "change", "ngModelChange"], ["check", ""], [2, "text-align", "left"], [2, "text-align", "center"], [2, "text-align", "right"], ["required", "", 1, "form-control", "form-control-sm", 3, "disabled", "ngModel", "name", "ngModelChange"], ["type", "text", "required", "item.Required", 1, "form-control", "form-control-sm", 3, "name", "disabled", "ngModel", "ngModelChange"], ["type", "number", "min", "0", "step", "0.01", "required", "item.Required", 1, "form-control", "form-control-sm", 3, "name", "disabled", "ngModel", "change", "ngModelChange"], [1, "f-9"]], template: function NotascreditocrearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Nueva Nota Cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Tipo de facturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotascreditocrearComponent_Template_select_change_26_listener() { return ctx.BuscarClientesTerceros("Cliente"); })("ngModelChange", function NotascreditocrearComponent_Template_select_ngModelChange_26_listener($event) { return ctx.Tipo_Factura_Selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Seleccione");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, NotascreditocrearComponent_option_29_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, NotascreditocrearComponent_div_30_Template, 6, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, NotascreditocrearComponent_div_31_Template, 5, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, NotascreditocrearComponent_div_32_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascreditocrearComponent_Template_textarea_ngModelChange_39_listener($event) { return ctx.Observaciones_General = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, NotascreditocrearComponent_div_40_Template, 37, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Realizar Nota Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, NotascreditocrearComponent_ng_template_55_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "swal", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "swal", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("confirm", function NotascreditocrearComponent_Template_swal_confirm_59_listener() { return ctx.VerPantallaLista(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 11, ctx.Fecha, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Tipo_Factura_Selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.Tipo_Factura);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Tipo_Factura_Selected == "Factura_Administrativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Tipo_Factura_Selected && ctx.Tipo_Factura_Selected != "Factura_Administrativa" || ctx.TipoClienteSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.DatosCliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Observaciones_General);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 14, ctx.Total));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swal", ctx.alerOptions)("disabled", !_r0.valid || ctx.Lista_Productos.length == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SwalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SwalComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rhc2NyZWRpdG9jcmVhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "61c1":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/ingresos/comprobanteingresocrear/tablafacturafaltante/tablafacturafaltante.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: TablafacturafaltanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablafacturafaltanteComponent", function() { return TablafacturafaltanteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TablafacturafaltanteComponent_tr_20_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const F_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](F_r4);
} }
function TablafacturafaltanteComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TablafacturafaltanteComponent_tr_20_td_1_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Fact_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "fila", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", Fact_r1[0]);
} }
class TablafacturafaltanteComponent {
    constructor() { }
    ngOnInit() {
    }
}
TablafacturafaltanteComponent.ɵfac = function TablafacturafaltanteComponent_Factory(t) { return new (t || TablafacturafaltanteComponent)(); };
TablafacturafaltanteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablafacturafaltanteComponent, selectors: [["app-tablafacturafaltante"]], inputs: { Facturas_Faltantes: "Facturas_Faltantes" }, decls: 21, vars: 1, consts: [[1, "table", 2, "max-height", "400px"], [1, "thead-default"], [2, "width", "13%"], [2, "width", "10%"], [2, "width", "70px", "max-width", "100px"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [4, "ngFor", "ngForOf"]], template: function TablafacturafaltanteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Debe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Haber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Debe NIIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Haber NIIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TablafacturafaltanteComponent_tr_20_Template, 2, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Facturas_Faltantes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsYWZhY3R1cmFmYWx0YW50ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "8v11":
/*!****************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/egresos/egresos.service.ts ***!
  \****************************************************************************/
/*! exports provided: EgresosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosService", function() { return EgresosService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EgresosService {
    constructor() {
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.event = this._subject.asObservable();
        this.ToastObj = {
            textos: ['Default title', 'Default message'],
            tipo: 'warning',
            duracion: 0
        };
        this.normalize = (function () {
            var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇçÂ®Ã\n", to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuuNnccARA ", mapping = {};
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
        this.Utf8 = {
            // public method for url encoding
            encode: function (string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";
                for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    }
                    else if ((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                    else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                }
                return utftext;
            },
            // public method for url decoding
            decode: function (utftext) {
                var string = "";
                var i = 0;
                var c = 0;
                var c2 = 0;
                var c3 = 0;
                while (i < utftext.length) {
                    c = utftext.charCodeAt(i);
                    if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                    }
                    else if ((c > 191) && (c < 224)) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                        i += 2;
                    }
                    else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                        i += 3;
                    }
                }
                return string;
            }
        };
    }
    ShowToast(data) {
        this._setToastData(data);
        this._subject.next(this.ToastObj);
    }
    _setToastData(data) {
        this.ToastObj.textos = data.textos;
        this.ToastObj.tipo = data.tipo ? data.tipo : 'default';
        this.ToastObj.duracion = data.duracion ? data.duracion : 3000;
    }
    ClearToasty() {
        this._subject.next('limpiar');
    }
}
EgresosService.ɵfac = function EgresosService_Factory(t) { return new (t || EgresosService)(); };
EgresosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EgresosService, factory: EgresosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BScy":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/ingresos/comprobanteingresocrear/comprobanteingresocrear.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ComprobanteingresocrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprobanteingresocrearComponent", function() { return ComprobanteingresocrearComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var _plan_cuentas_plan_cuentas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../plan-cuentas/plan-cuentas.service */ "bIft");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _tablafacturascargadas_tablafacturascargadas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tablafacturascargadas/tablafacturascargadas.component */ "xb9E");
/* harmony import */ var _tablafacturafaltante_tablafacturafaltante_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tablafacturafaltante/tablafacturafaltante.component */ "61c1");


















const _c0 = ["FormComprobante"];
const _c1 = ["confirmacionSwal"];
function ComprobanteingresocrearComponent_input_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_input_20_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.Nom_Cliente = $event; })("ngModelChange", function ComprobanteingresocrearComponent_input_20_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.BuscarDatosCliente(ctx_r19.Nom_Cliente); })("blur", function ComprobanteingresocrearComponent_input_20_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.validarCampo(ctx_r20.Nom_Cliente, $event, "Cliente"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.Nom_Cliente)("ngbTypeahead", ctx_r1.search)("resultTemplate", _r11)("inputFormatter", ctx_r1.formatter);
} }
function ComprobanteingresocrearComponent_input_21_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_input_21_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.Nom_Cliente = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.Nom_Cliente);
} }
function ComprobanteingresocrearComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", fp_r23.Id_Forma_Pago);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](fp_r23.Nombre);
} }
function ComprobanteingresocrearComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u00BFAsociar este ingreso a algunas Facturas existentes ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Recuerda que puedes registrar un ingreso sin necesidad de que est\u00E9 asociado a una cuenta de cobro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteingresocrearComponent_div_53_Template_input_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.MostarContenido($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " SI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteingresocrearComponent_div_53_Template_input_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.MostarContenido($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteingresocrearComponent_div_53_Template_input_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.MostarContenido($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Cargar Archivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComprobanteingresocrearComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cargando Facturas...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComprobanteingresocrearComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Este proceso se encuentra en mantenimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComprobanteingresocrearComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Haga click sobre el icono para cargar el archivo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ComprobanteingresocrearComponent_div_57_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.CargarArchivo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComprobanteingresocrearComponent_div_58_tr_33_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_tr_25_Template_input_ngModelChange_2_listener($event) { const descuento_r35 = ctx.$implicit; return descuento_r35.Descuento = $event; })("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_tr_25_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const descuento_r35 = ctx.$implicit; const z_r36 = ctx.index; const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r38.AgregarCampos(i_r32, descuento_r35.Descuento, "Descuento", z_r36); })("blur", function ComprobanteingresocrearComponent_div_58_tr_33_tr_25_Template_input_blur_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const descuento_r35 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r41.validarCampo(descuento_r35.Descuento, $event, "Descuento"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_tr_25_Template_input_ngModelChange_4_listener($event) { const descuento_r35 = ctx.$implicit; return descuento_r35.ValorDescuento = $event; })("change", function ComprobanteingresocrearComponent_div_58_tr_33_tr_25_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const z_r36 = ctx.index; const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r43.calculosAdicionales(i_r32, z_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteingresocrearComponent_div_58_tr_33_tr_25_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const z_r36 = ctx.index; const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r45.EliminarDescuentoFactura(i_r32, z_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const descuento_r35 = ctx.$implicit;
    const z_r36 = ctx.index;
    const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("name", "Descuento", i_r32, "", z_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("id", "Descuento", i_r32, "", z_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", descuento_r35.Descuento)("ngbTypeahead", ctx_r33.search1)("resultTemplate", _r15)("inputFormatter", ctx_r33.formatter1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("name", "ValorDescuento", i_r32, "", z_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("id", "ValorDescuento", i_r32, "", z_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", descuento_r35.ValorDescuento);
} }
function ComprobanteingresocrearComponent_div_58_tr_33_tr_39_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r51.Id_Retencion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r51.Nombre);
} }
function ComprobanteingresocrearComponent_div_58_tr_33_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_tr_39_Template_select_ngModelChange_2_listener($event) { const valor_r48 = ctx.$implicit; return valor_r48.Id_Retencion = $event; })("change", function ComprobanteingresocrearComponent_div_58_tr_33_tr_39_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56); const j_r49 = ctx.index; const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r54.CalcularRetencionesFacturas(i_r32, j_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Tipo de Retenci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ComprobanteingresocrearComponent_div_58_tr_33_tr_39_option_5_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_tr_39_Template_input_ngModelChange_7_listener($event) { const valor_r48 = ctx.$implicit; return valor_r48.Valor = $event; })("change", function ComprobanteingresocrearComponent_div_58_tr_33_tr_39_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r58.ActualizaValores("Facturas"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteingresocrearComponent_div_58_tr_33_tr_39_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56); const j_r49 = ctx.index; const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r59.EliminarRetencionFactura(i_r32, j_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const valor_r48 = ctx.$implicit;
    const j_r49 = ctx.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", j_r49, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Retencion", j_r49, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Retencion", j_r49, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", valor_r48.Id_Retencion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r34.ListaRetenciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "ValorRetencion", j_r49, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", valor_r48.Valor);
} }
function ComprobanteingresocrearComponent_div_58_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ComprobanteingresocrearComponent_div_58_tr_33_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const item_r31 = ctx.$implicit; const i_r32 = ctx.index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r61.listaFacturas(item_r31, i_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "table", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ComprobanteingresocrearComponent_div_58_tr_33_tr_25_Template, 9, 13, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteingresocrearComponent_div_58_tr_33_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const i_r32 = ctx.index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r63.AgregarDescuentoFactura(i_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "table", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_Template_input_ngModelChange_33_listener($event) { const item_r31 = ctx.$implicit; return item_r31.MayorPagar = $event; })("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_Template_input_ngModelChange_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const i_r32 = ctx.index; const item_r31 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r65.AgregarCampos(i_r32, item_r31.MayorPagar, "MayorPagar"); })("blur", function ComprobanteingresocrearComponent_div_58_tr_33_Template_input_blur_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const item_r31 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r66.validarCampo(item_r31.MayorPagar, $event, "Ajuste Credito"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_Template_input_ngModelChange_36_listener($event) { const item_r31 = ctx.$implicit; return item_r31.ValorMayorPagar = $event; })("change", function ComprobanteingresocrearComponent_div_58_tr_33_Template_input_change_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const i_r32 = ctx.index; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r68.calculosAdicionales(i_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ComprobanteingresocrearComponent_div_58_tr_33_tr_39_Template, 12, 7, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteingresocrearComponent_div_58_tr_33_Template_a_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const i_r32 = ctx.index; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r69.AgregarRetencionFactura(i_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Agregar retenci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_div_58_tr_33_Template_input_ngModelChange_44_listener($event) { const item_r31 = ctx.$implicit; return item_r31.ValorIngresado = $event; })("change", function ComprobanteingresocrearComponent_div_58_tr_33_Template_input_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62); const i_r32 = ctx.index; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r71.ActualizaValores("Facturas"); return ctx_r71.validarValorFactura($event.target.value, i_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Factura", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Factura", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r31.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 26, item_r31.Total_Compra), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 28, item_r31.Pagado), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 30, item_r31.Gravada), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 32, item_r31.Iva), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 34, item_r31.Exenta), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 36, item_r31.Por_Pagar), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r31.DescuentosFactura);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "botondescuentos", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "MayorPagar", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "MayorPagar", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r31.MayorPagar)("ngbTypeahead", ctx_r30.search1)("resultTemplate", _r15)("inputFormatter", ctx_r30.formatter1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "ValorMayorPagar", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "ValorMayorPagar", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r31.ValorMayorPagar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r31.RetencionesFacturas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "botonretencion", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "ValorIngresado", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "ValorIngresado", i_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r31.ValorIngresado);
} }
function ComprobanteingresocrearComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Facturas Pendientes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Pagado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Gravado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Iva");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Excenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Por Pagar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Descuentos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Ajustes Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Retenciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Valor Recibido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ComprobanteingresocrearComponent_div_58_tr_33_Template, 45, 38, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.Lista_Facturas);
} }
function ComprobanteingresocrearComponent_div_59_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-tablafacturascargadas", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Facturas", ctx_r72.ListaFact);
} }
function ComprobanteingresocrearComponent_div_59_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Facturas no anexadas o que ya se encuentran pagas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-tablafacturafaltante", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Facturas_Faltantes", ctx_r73.Faltantes);
} }
function ComprobanteingresocrearComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ComprobanteingresocrearComponent_div_59_div_1_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ComprobanteingresocrearComponent_div_59_div_2_Template, 5, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.ListaFact.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.Faltantes.length > 0);
} }
function ComprobanteingresocrearComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Retenciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r10.Retenciones_Totales), "");
} }
function ComprobanteingresocrearComponent_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r74 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r74.Nombre);
} }
function ComprobanteingresocrearComponent_ng_template_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r76 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r76.Codigo, " ");
} }
const _c2 = function () { return ["/contabilidad/comprobantes/ingresos"]; };
class ComprobanteingresocrearComponent {
    constructor(route, http, router, _swalService, _companies, _user) {
        this.route = route;
        this.http = http;
        this.router = router;
        this._swalService = _swalService;
        this._companies = _companies;
        this._user = _user;
        this.alertOption = {};
        this.Cargando = false;
        this.datosCabecera = {
            Titulo: 'Nuevo Recibo de Caja',
            Fecha: new Date(),
            Codigo: ''
        };
        this.fecha = new Date();
        this.Fecha = '';
        this.display_Banco = 'none';
        this.Proveedores = [];
        this.Lista_Facturas = [{
                RetencionesFactura: [],
                DescuentosFactura: []
            }];
        this.Fecha_Comprobante = this.fechaHoy();
        this.Id_Proveedor = '';
        this.NombreProveedor = '';
        this.Id_Cliente = '';
        this.Cliente = [];
        this.Id_Empresa = '';
        // public Funcionario=JSON.parse(localStorage.getItem("User"));
        this.Cuenta = [];
        this.FormaPago = [];
        this.Rentenciones = [];
        this.RentencionesFactura = [];
        this.Categorias = [{
                Cuenta: '',
                Valor: '',
                Cantidad: '',
                Impuesto: 0,
                Observaciones: '',
                Subtotal: 0,
                Total_Impuesto: 0
            }];
        this.Cuenta_Banco = '';
        this.Costo_Ingreso = 0;
        this.Impuesto_Ingreso = 0;
        this.Subtotal_Ingreso = 0;
        this.Total_Ingreso = 0;
        this.Subtotal_Retenciones = 0;
        this.Subtotal_Facturas = 0;
        this.Total_ValorP = 0;
        this.Retenciones_Totales = 0;
        this.Mostrar = false;
        this.Mostrar_Cliente = false;
        this.Impuesto = 0;
        this.reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Subtotal);
        this.reducer_imp = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Total_Impuesto);
        this.reducer_ret = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Valor);
        this.reducer_desc = (accumulator, currentValue) => accumulator + parseFloat(currentValue.ValorDescuento);
        this.reducer_valorp = (accumulator, currentValue) => accumulator + parseFloat(currentValue.ValorIngresado);
        this.reducer3 = (accumulator, currentValue) => {
            var acu_iva = 0;
            currentValue.RetencionesFacturas.forEach((v, i) => {
                acu_iva += isNaN(v.Valor) ? 0 : parseFloat(v.Valor);
            });
            return accumulator + acu_iva;
        };
        this.ListaRetenciones = [];
        this.ListaFact = [];
        this.Total_Facturas = 0;
        this.Mostrar_Opciones = true;
        this.Mostrar_Input_Cli = true;
        this.Facturas_Multiple = true;
        this.Faltantes = [];
        this.Valor_Banco = 0;
        this.Total_Debito = 0;
        this.Total_Credito = 0;
        this.Valor_Devoluciones = 0;
        this.companies = [];
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(term => term.length < 4 ? []
            : this.Cliente.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter = (x) => x.Nombre;
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(term => term.length < 4 ? []
            : this.Cuenta.filter(v => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter1 = (x) => x.Codigo;
        let queryParams = this.route.snapshot.queryParams;
        if (queryParams.facturas != undefined && queryParams.cliente != undefined) {
            this.Id_Cliente = queryParams.cliente;
            this.Cargando = true;
            this.Mostrar_Opciones = false;
            this.Mostrar_Cliente = true;
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/facturas_seleccionadas_cliente.php', { params: queryParams }).subscribe((data) => {
                this.Mostrar = false;
                this.Cargando = false;
                this.Mostrar_Input_Cli = false;
                this.Lista_Facturas = data.Facturas;
                this.Nom_Cliente = data.Cliente.Nombre;
            });
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/proveedor_buscar.php').subscribe((data) => {
            this.Proveedores = data;
        });
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Guardar este Comprobante",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            input: 'select',
            inputOptions: {
                Pcga: 'Imprimir en PCGA',
                Niif: 'Imprimir en NIIF'
            },
            preConfirm: (value) => {
                return new Promise((resolve) => {
                    this.guardarComprobante(this.FormComprobante, value);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading()
        };
    }
    ngOnInit() {
        this.Id_Empresa = this._user.user.person.company_worked.id;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cliente.php').subscribe((data) => {
            this.Cliente = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/cuentas.php', { params: { company_id: this._user.user.person.company_worked.id } }).subscribe((data) => {
            this.Cuentas = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/formas_pago.php').subscribe((data) => {
            this.FormaPago = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php', { params: { company_id: this._user.user.person.company_worked.id } }).subscribe((data) => {
            this.Cuenta = data.Activo;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/lista_generales.php', { params: { modulo: 'Impuesto' } }).subscribe((data) => {
            this.Impuesto = data;
        });
        this.ListarRetenciones();
        this.getCodigoIngreso();
    }
    BuscarProveedor(modelo) {
        this.NombreProveedor = modelo.Proveedores;
        this.Id_Proveedor = modelo.Id_Proveedor;
    }
    BuscarDatosCliente(cliente) {
        this.Id_Cliente = cliente.Id_Cliente;
        console.log(cliente);
        this.ListaFact = [];
        if (this.Mostrar_Cliente) {
            if (this.Id_Cliente != undefined) {
                this.MostarContenido('Si');
            }
        }
    }
    MostarContenido(tipo) {
        if (tipo == 'Si') {
            this.Mostrar = false;
            if (this.Id_Cliente != '') {
                this.Cargando = true;
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_facturas_clientes.php?id=' + this.Id_Cliente).subscribe((data) => {
                    if (data.Facturas.length > 0) {
                        this.Lista_Facturas = data.Facturas;
                        this.Mostrar_Cliente = true;
                    }
                    else {
                        this.confirmacionSwal.title = "Sin Facturas!";
                        this.confirmacionSwal.text = `${this.Nom_Cliente.Nombre} no tiene facturas asociadas.`;
                        this.confirmacionSwal.icon = "info";
                        this.confirmacionSwal.fire();
                        $('input[type=radio]').prop('checked', false);
                    }
                    this.Cargando = false;
                });
            }
            else {
                this.confirmacionSwal.title = "Faltan datos!";
                this.confirmacionSwal.text = `No se ha seleccionado el Cliente, por favor revisar.`;
                this.confirmacionSwal.icon = "error";
                this.confirmacionSwal.fire();
                $('input[type=radio]').prop('checked', false);
            }
            this.Categorias = [{
                    Cuenta: '',
                    Valor: '',
                    Cantidad: '',
                    Impuesto: 0,
                    Observaciones: '',
                    Subtotal: 0,
                    Total_Impuesto: 0
                }];
            this.Rentenciones = []; // Limpiar listado de retenciones.
            this.Total_ValorP = 0;
            this.Subtotal_Facturas = 0;
            this.Retenciones_Totales = 0;
        }
        else if (tipo == 'No') {
            this.Mostrar = true;
            this.Mostrar_Cliente = false;
            this.Lista_Facturas = [];
            this.ListaFact = [];
            this.Subtotal_Ingreso = 0;
            this.Impuesto_Ingreso = 0;
            this.Total_Ingreso = 0;
            this.Subtotal_Retenciones = 0;
        }
        else if ('Archivo') {
            if (this.Id_Cliente != '' && (this.Cuenta_Banco) != '') {
                this.Mostrar_Cliente = false;
                this.Lista_Facturas = [];
                this.Mostrar = true;
                this.Facturas_Multiple = false;
            }
            else {
                this.confirmacionSwal.title = "Faltan datos!";
                this.confirmacionSwal.text = `No se ha seleccionado el Cliente o un banco, por favor revise.`;
                this.confirmacionSwal.icon = "error";
                this.confirmacionSwal.fire();
                $('input[type=radio]').prop('checked', false);
            }
        }
    }
    BuscarCuenta(cuenta, pos) {
        let pos2 = pos + 1;
        this.Categorias[pos].Id_Plan_Cuentas = cuenta.Id_Plan_Cuentas;
        if (cuenta.Id_Plan_Cuentas) {
            if (this.Categorias[pos2] == undefined) {
                this.Categorias.push({
                    Cuenta: '',
                    Valor: '',
                    Cantidad: '',
                    Impuesto: 0,
                    Observaciones: '',
                    Subtotal: 0,
                    Total_Impuesto: 0
                });
            }
        }
    }
    Calcular(pos, tipo) {
        this.Categorias[pos].Subtotal = this.Categorias[pos].Cantidad * this.Categorias[pos].Valor;
        this.Categorias[pos].Total_Impuesto = (this.Categorias[pos].Cantidad * this.Categorias[pos].Valor) * (this.Categorias[pos].Impuesto / 100);
        this.ActualizaValores();
    }
    ActualizaValores(tipo) {
        if (tipo != undefined && tipo != null) {
            this.Retenciones_Totales = this.Lista_Facturas.reduce(this.reducer3, 0);
            setTimeout(() => {
                this.Total_ValorP = parseFloat(this.Lista_Facturas.reduce(this.reducer_valorp, 0));
                this.Subtotal_Facturas = this.Total_ValorP + this.Retenciones_Totales;
                this.Total_Facturas = this.Subtotal_Facturas - this.Retenciones_Totales;
                this.calcularTotalesDebitoCredito();
            }, 300);
        }
        else {
            this.Subtotal_Ingreso = parseFloat(this.Categorias.reduce(this.reducer, 0));
            this.Impuesto_Ingreso = parseFloat(this.Categorias.reduce(this.reducer_imp, 0));
            this.Total_Ingreso = this.Subtotal_Ingreso + this.Impuesto_Ingreso - this.Subtotal_Retenciones;
            if (this.Rentenciones.length > 0) {
                this.RecalcularRetenciones();
            }
        }
    }
    RecalcularRetenciones() {
        for (let index = 0; index < this.Rentenciones.length; index++) {
            if (this.Rentenciones[index].Id_Retencion == 12) {
                this.Rentenciones[index].Valor = ((parseFloat(this.Rentenciones[index].Porcentaje) / 100) * this.Impuesto_Ingreso).toFixed(2);
            }
            else {
                this.Rentenciones[index].Valor = ((parseFloat(this.Rentenciones[index].Porcentaje) / 100) * this.Subtotal_Ingreso).toFixed(2);
            }
        }
        setTimeout(() => {
            this.Subtotal_Retenciones = parseFloat(this.Rentenciones.reduce(this.reducer_ret, 0));
            this.ActualizaValores();
        }, 200);
    }
    AgregarRetencion() {
        this.Rentenciones.push({
            Retencion: '',
            Valor: ''
        });
    }
    EliminarRetencion(pos) {
        this.Rentenciones.splice(pos, 1);
        if (this.Rentenciones.length == 0) {
            this.Subtotal_Retenciones = 0;
        }
        else {
            this.RecalcularRetenciones();
        }
    }
    CalcularRetenciones(pos) {
        let posicion = this.ListaRetenciones.findIndex(x => x.Id_Retencion == this.Rentenciones[pos].Id_Retencion);
        let Id_Retencion = this.Rentenciones[pos].Id_Retencion;
        if (Id_Retencion == 12) {
            this.Rentenciones[pos].Porcentaje = parseFloat(this.ListaRetenciones[posicion].Porcentaje);
            this.Rentenciones[pos].Valor = (parseFloat(this.ListaRetenciones[posicion].Porcentaje) / 100) * this.Impuesto_Ingreso;
        }
        else {
            this.Rentenciones[pos].Porcentaje = parseFloat(this.ListaRetenciones[posicion].Porcentaje);
            this.Rentenciones[pos].Valor = (parseFloat(this.ListaRetenciones[posicion].Porcentaje) / 100) * this.Subtotal_Ingreso;
        }
        setTimeout(() => {
            this.RecalcularRetenciones();
        }, 200);
    }
    CalcularRetencionesFacturas(pos, pos2) {
        let posicion = this.ListaRetenciones.findIndex(x => x.Id_Retencion == this.Lista_Facturas[pos].RetencionesFacturas[pos2].Id_Retencion);
        let Tipo_Retencion = this.ListaRetenciones[posicion].Tipo_Retencion;
        this.Lista_Facturas[pos].RetencionesFacturas[pos2].Porcentaje = parseFloat(this.ListaRetenciones[posicion].Porcentaje);
        this.Lista_Facturas[pos].RetencionesFacturas[pos2].Tipo = this.ListaRetenciones[posicion].Tipo_Retencion;
        this.Lista_Facturas[pos].RetencionesFacturas[pos2].Id_Plan_Cuenta = this.ListaRetenciones[posicion].Id_Plan_Cuenta;
        let valorRetencion = 0;
        if (Tipo_Retencion == "Iva") {
            valorRetencion = (parseFloat(this.Lista_Facturas[pos].RetencionesFacturas[pos2].Porcentaje) / 100) * this.Lista_Facturas[pos].Iva;
            this.Lista_Facturas[pos].RetencionesFacturas[pos2].Valor = (Math.round(valorRetencion)).toFixed(2);
        }
        else {
            valorRetencion = (parseFloat(this.Lista_Facturas[pos].RetencionesFacturas[pos2].Porcentaje) / 100) * this.Lista_Facturas[pos].Total_Compra;
            this.Lista_Facturas[pos].RetencionesFacturas[pos2].Valor = (Math.round(valorRetencion)).toFixed(2);
        }
        let retencionesFact = 0;
        this.Lista_Facturas[pos].RetencionesFacturas.forEach(e => {
            retencionesFact += Math.round(parseFloat(e.Valor));
        });
        setTimeout(() => {
            // this.Lista_Facturas[pos].ValorIngresado = this.Lista_Facturas[pos].Por_Pagar - retencionesFact;
            this.Retenciones_Totales = this.Lista_Facturas.reduce(this.reducer3, 0);
            this.ActualizaValores('Facturas');
        }, 300);
    }
    AgregarRetencionFactura(pos) {
        this.Lista_Facturas[pos].RetencionesFacturas.push({
            Id_Retencion: '',
            Valor: 0
        });
    }
    AgregarDescuentoFactura(pos) {
        if (this.Lista_Facturas[pos].DescuentosFactura.length < 3) {
            this.Lista_Facturas[pos].DescuentosFactura.push({
                Descuento: '',
                ValorDescuento: 0
            });
        }
        else {
            this.confirmacionSwal.title = 'Advertencia!';
            this.confirmacionSwal.icon = 'warning';
            this.confirmacionSwal.text = 'No puedes agregar más descuentos en esta factura.';
            this.confirmacionSwal.fire();
        }
    }
    EliminarRetencionFactura(pos, pos2) {
        this.restablecerValorFactura(pos, pos2, 'Retencion');
        setTimeout(() => {
            this.Lista_Facturas[pos].RetencionesFacturas.splice(pos2, 1);
            this.Retenciones_Totales = this.Lista_Facturas.reduce(this.reducer3, 0);
            this.ActualizaValores('Facturas');
        }, 100);
    }
    EliminarDescuentoFactura(pos, pos2) {
        this.restablecerValorFactura(pos, pos2, 'Descuento');
        setTimeout(() => {
            this.Lista_Facturas[pos].DescuentosFactura.splice(pos2, 1);
            this.ActualizaValores('Facturas');
            document.getElementById('botondescuentos' + pos).style.display = 'block';
        }, 100);
    }
    restablecerValorFactura(pos, pos2, tipo) {
        if (tipo == 'Retencion') {
            let posicion = this.ListaRetenciones.findIndex(x => x.Id_Retencion == this.Lista_Facturas[pos].RetencionesFacturas[pos2].Id_Retencion);
            let Tipo_Retencion = this.ListaRetenciones[posicion].Tipo_Retencion;
            this.Lista_Facturas[pos].RetencionesFacturas[pos2].Porcentaje = parseFloat(this.ListaRetenciones[posicion].Porcentaje);
            let valorRetencion = 0;
            if (Tipo_Retencion == "Iva") {
                valorRetencion = (parseFloat(this.Lista_Facturas[pos].RetencionesFacturas[pos2].Porcentaje) / 100) * this.Lista_Facturas[pos].Iva;
                this.Lista_Facturas[pos].RetencionesFacturas[pos2].Valor = (Math.round(valorRetencion)).toFixed(2);
            }
            else {
                valorRetencion = (parseFloat(this.Lista_Facturas[pos].RetencionesFacturas[pos2].Porcentaje) / 100) * this.Lista_Facturas[pos].Total_Compra;
                this.Lista_Facturas[pos].RetencionesFacturas[pos2].Valor = (Math.round(valorRetencion)).toFixed(2);
            }
            // this.Lista_Facturas[pos].ValorIngresado += Math.round(valorRetencion);
        }
        else if (tipo == 'Descuento') {
            let valorDescuento = parseFloat(this.Lista_Facturas[pos].DescuentosFactura[pos2].ValorDescuento);
            this.Lista_Facturas[pos].ValorIngresado = parseFloat(this.Lista_Facturas[pos].ValorIngresado) + Math.round(valorDescuento);
        }
    }
    ListarRetenciones() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/lista_retenciones.php').subscribe((data) => {
            this.ListaRetenciones = data;
        });
    }
    listaFacturas(fact, pos) {
        let exist_fact = this.ListaFact.indexOf(fact);
        let CodigoFactura = this.Lista_Facturas[pos].Codigo;
        if (exist_fact < 0) {
            this.ListaFact.push(fact);
            this.Lista_Facturas[pos].ValorIngresado = this.Lista_Facturas[pos].Por_Pagar;
            let esNotaC = this.esNotaCredito(CodigoFactura);
            if (!esNotaC) { // Si no es una nota credito, habilito estos campos.
                document.getElementById('ValorIngresado' + pos).readOnly = false;
                document.getElementById('MayorPagar' + pos).readOnly = false;
                document.getElementById('ValorMayorPagar' + pos).readOnly = false;
                document.getElementById('botonretencion' + pos).style.display = 'block';
                document.getElementById('botondescuentos' + pos).style.display = 'block';
            }
            else {
                this.Valor_Devoluciones += parseFloat(this.Lista_Facturas[pos].ValorIngresado);
            }
        }
        else {
            this.ListaFact.splice(exist_fact, 1);
            document.getElementById('ValorIngresado' + pos).readOnly = true;
            document.getElementById('MayorPagar' + pos).readOnly = true;
            document.getElementById('ValorMayorPagar' + pos).readOnly = true;
            document.getElementById('botonretencion' + pos).style.display = 'none';
            document.getElementById('botondescuentos' + pos).style.display = 'none';
            let esNotaC = this.esNotaCredito(CodigoFactura);
            if (esNotaC) {
                this.Valor_Devoluciones -= parseFloat(this.Lista_Facturas[pos].ValorIngresado);
            }
            this.Lista_Facturas[pos].RetencionesFacturas = [];
            this.Lista_Facturas[pos].Id_Cuenta_Descuento = 0;
            this.Lista_Facturas[pos].Id_Cuenta_MayorPagar = 0;
            this.Lista_Facturas[pos].Descuento = '';
            this.Lista_Facturas[pos].ValorDescuento = 0;
            this.Lista_Facturas[pos].MayorPagar = '';
            this.Lista_Facturas[pos].ValorMayorPagar = 0;
            this.Lista_Facturas[pos].ValorIngresado = 0;
        }
        setTimeout(() => {
            this.ActualizaValores('Facturas');
        }, 100);
    }
    esNotaCredito(codigo_factura) {
        let res = codigo_factura.indexOf('NC');
        if (res < 0) {
            return false;
        }
        return true;
    }
    guardarComprobante(Formulario, tipo) {
        let info = JSON.stringify(Formulario.value);
        let datos = new FormData();
        datos.append('Datos', info);
        datos.append('Facturas', JSON.stringify(this.ListaFact));
        datos.append('Categorias', JSON.stringify(this.Categorias));
        datos.append('Retenciones', JSON.stringify(this.Rentenciones));
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/guardar_comprobante.php', datos).subscribe((data) => {
            this.confirmacionSwal.title = data.titulo;
            this.confirmacionSwal.text = data.mensaje;
            this.confirmacionSwal.icon = data.tipo;
            this.confirmacionSwal.fire();
            if (data.tipo == 'success' && data.id != undefined) {
                window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/comprobantes_pdf.php?id=' + data.id + '&tipo=' + Formulario.value.Tipo, '_blank');
                if (tipo == 'Pcga') {
                    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/movimientoscontables/movimientos_comprobante_pdf.php?id_registro=' + data.id + '&id_funcionario_elabora=' + Formulario.value.Id_Funcionario + '&tipo=' + Formulario.value.Tipo, '_blank');
                }
                else {
                    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/movimientoscontables/movimientos_comprobante_pdf.php?id_registro=' + data.id + '&id_funcionario_elabora=' + Formulario.value.Id_Funcionario + '&tipo_valor=Niif&tipo=' + Formulario.value.Tipo, '_blank');
                }
                setTimeout(() => {
                    this.router.navigate(['/contabilidad/comprobantes/ingresos']);
                }, 1000);
            }
        });
    }
    validarValorFactura(valor, pos) {
        if (parseFloat(valor) > parseFloat(this.Lista_Facturas[pos].Por_Pagar)) {
            this.confirmacionSwal.title = "Error!";
            this.confirmacionSwal.text = "El valor no puede ser superior al valor que se corresponde pagar.";
            this.confirmacionSwal.icon = "error";
            this.confirmacionSwal.fire();
            this.Lista_Facturas[pos].ValorIngresado = this.Lista_Facturas[pos].Por_Pagar;
        }
    }
    calculosAdicionales(pos, pos2) {
        let descuento = parseFloat(this.Lista_Facturas[pos].DescuentosFactura.reduce(this.reducer_desc, 0));
        let mayor_pagar = parseFloat(this.Lista_Facturas[pos].ValorMayorPagar);
        let retenciones = parseFloat(this.Lista_Facturas[pos].RetencionesFacturas.reduce(this.reducer_ret, 0));
        this.Lista_Facturas[pos].ValorDescuento = descuento;
        // this.Lista_Facturas[pos].ValorIngresado = Math.round(parseFloat(this.Lista_Facturas[pos].Por_Pagar));
        setTimeout(() => {
            this.ActualizaValores('Facturas');
        }, 100);
    }
    AgregarCampos(pos, modelo, tipo, pos2) {
        if (tipo == 'Descuento') {
            this.Lista_Facturas[pos].DescuentosFactura[pos2].Id_Cuenta_Descuento = modelo.Id_Plan_Cuentas;
        }
        else if (tipo == 'MayorPagar') {
            this.Lista_Facturas[pos].Id_Cuenta_MayorPagar = modelo.Id_Plan_Cuentas;
        }
    }
    fechaHoy() {
        let fecha = new Date();
        fecha = (fecha.toISOString()).split('T')[0];
        return fecha;
    }
    CargarArchivo(event) {
        if (event.target.files.length === 1) {
            this.Archivo = event.target.files[0];
            this.EnviarArchivo();
        }
    }
    EnviarArchivo() {
        this.Cargando = true;
        this.Facturas_Multiple = false;
        let datos = new FormData();
        datos.append('archivo', this.Archivo);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/subir_facturas.php', datos).subscribe((data) => {
            this.ListaFact = data.Facturas;
            this.Lista_Facturas = data.Facturas;
            this.Faltantes = data.Faltantes;
            this.Cargando = false;
            this.ListaFact.length;
            setTimeout(() => {
                this.Retenciones_Totales = this.Lista_Facturas.reduce(this.reducer3, 0);
                this.ActualizaValores('Facturas');
            }, 300);
        }, error => {
            this.Cargando = false;
            this.confirmacionSwal.title = "Oops!";
            this.confirmacionSwal.text = "Se perdió la conexión a internet. Por favor vuelve a intentarlo.";
            this.confirmacionSwal.icon = "warning";
            this.confirmacionSwal.fire();
        });
    }
    calcularTotalesDebitoCredito() {
        let total_descuento = 0;
        let total_ajustes = 0;
        this.Lista_Facturas.forEach((val, pos) => {
            total_descuento += parseFloat(this.Lista_Facturas[pos].DescuentosFactura.reduce(this.reducer_desc, 0));
            total_ajustes += isNaN(this.Lista_Facturas[pos].ValorMayorPagar) ? 0 : parseFloat(this.Lista_Facturas[pos].ValorMayorPagar);
        });
        this.Total_Debito = this.Valor_Banco + this.Retenciones_Totales + total_descuento + this.Valor_Devoluciones;
        this.Total_Credito = total_ajustes + (this.Total_ValorP - this.Valor_Devoluciones);
    }
    validarCampo(campo, event, tipo) {
        if (typeof (campo) != 'object' && campo != '') {
            let id = event.target.id;
            document.getElementById(id).focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Incorrecto!',
                text: `El valor ${tipo} no es valido.`
            });
            // this._swalService.ShowMessage(swal);
        }
    }
    getCodigoIngreso(fecha) {
        let datos = { Tipo: 'Ingreso' };
        if (fecha != undefined && fecha != null) {
            datos.Fecha = fecha;
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/get_codigo.php', { params: datos }).subscribe((data) => {
            this.datosCabecera.Codigo = data.consecutivo;
        });
    }
}
ComprobanteingresocrearComponent.ɵfac = function ComprobanteingresocrearComponent_Factory(t) { return new (t || ComprobanteingresocrearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_plan_cuentas_plan_cuentas_service__WEBPACK_IMPORTED_MODULE_7__["PlanCuentasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
ComprobanteingresocrearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComprobanteingresocrearComponent, selectors: [["app-comprobanteingresocrear"]], viewQuery: function ComprobanteingresocrearComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.FormComprobante = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
    } }, decls: 112, vars: 37, consts: [[1, "page-body"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-md-offset-4"], [1, "card"], [3, "datosCabecera"], [1, "card-body", 2, "padding-bottom", "0px"], ["FormComprobante", "ngForm"], [1, "row", "invoive-info", 2, "margin-bottom", "0", "padding-bottom", "0px"], ["type", "hidden", "name", "Id_Empresa", 3, "ngModel", "ngModelChange"], [1, "col-md-2"], [1, "form-group"], ["type", "date", "name", "Fecha_Comprobante", "id", "Fecha_Comprobante", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "change"], ["type", "hidden", "name", "Tipo", 3, "ngModel"], ["type", "text", "name", "Cliente", "id", "Cliente", "class", "form-control form-control-sm f-9", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "blur", 4, "ngIf"], ["type", "text", "class", "form-control form-control-sm", "name", "Nombre_Cliente", "readonly", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["hidden", "", "name", "Id_Cliente", "id", "Id_Cliente", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "col-md-3"], ["id", "Cuentas", "name", "Id_Banco", "placeholder", "Seleccione el Banco", "bindLabel", "label", "bindValue", "value", "required", "", 2, "margin-bottom", "5px", "font-size", "10px", "height", "23px", "max-height", "23px", "line-height", "21px", 3, "items", "ngModel", "ngModelChange"], ["type", "number", "name", "Valor_Banco", "id", "Valor_Banco", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "change"], [1, "col-md-6"], ["ngModel", "", "name", "Id_Forma_Pago", "required", "", 1, "form-control", "form-control-sm"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "Observaciones", "id", "Observaciones", "ngModel", "", "rows", "3", 1, "form-control"], ["name", "Notas", "id", "Notas", "ngModel", "", "rows", "3", 1, "form-control"], ["class", "col-md-12 text-center", 4, "ngIf"], ["class", "col-md-12 text-center m-t-10", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-sm-12"], [1, "table", "table-responsive", "invoice-table", "invoice-total"], [4, "ngIf"], [2, "border-top", "1px solid #000", "border-right", "1px solid #000", "border-left", "1px solid #000"], [2, "border-right", "1px solid #000", "border-left", "1px solid #000"], [2, "border-bottom", "1px solid #000", "border-right", "1px solid #000", "border-left", "1px solid #000"], [1, "col-md-12"], [1, "col-md-8"], [1, "col-md-2", "botonFlotante1"], ["href", "", "type", "button", 1, "btn", "btn-success", "btn-block", "btn-enviar", 3, "routerLink"], [1, "col-md-2", "botonFlotante"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-enviar", 3, "swal"], ["rt", ""], ["title", "", "text", "", "type", ""], ["confirmacionSwal", ""], [3, "swalOptions"], ["confirmacionGuardar", ""], ["rt1", ""], ["type", "text", "name", "Cliente", "id", "Cliente", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "blur"], ["type", "text", "name", "Nombre_Cliente", "readonly", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [3, "value"], [1, "col-md-12", "text-center"], ["type", "radio", "name", "Asociar", "value", "Si", 3, "click"], ["type", "radio", "name", "Asociar", "Value", "No", 3, "click"], ["type", "radio", "name", "Asociar", "Value", "Archivo", 3, "click"], [1, "col-md-12", "text-center", "m-t-10"], [1, "fa", "fa-spinner", "fa-pulse", "fa-5x", "fa-fw"], [1, "sr-only"], [1, "text-center"], [1, "fa", "fa-exclamation-triangle"], ["for", "Acta_Entrega", 2, "display", "block", "cursor", "pointer"], [1, "fa", "fa-upload"], ["type", "file", "id", "Acta_Entrega", "ngModel", "", "accept", "application/vnd.ms-excel", "data-max-size", "2048", "name", "Acta_Entrega", 1, "form-control", "form-control-sm", 2, "display", "none", 3, "change"], [2, "max-height", "450px", "overflow", "auto"], [1, "table", "invoice-detail-table", "tabla"], [1, "thead-default"], [2, "width", "20px"], [2, "width", "100px"], [2, "width", "100px", "text-align", "right"], [2, "width", "105px"], [2, "width", "180px"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], ["type", "checkbox", 3, "name", "id", "change"], [2, "text-align", "right"], [2, "margin-left", "5px"], [4, "ngFor", "ngForOf"], ["href", "javascript:;", 2, "display", "none", 3, "id", "click"], [1, "fa", "fa-plus-square"], ["type", "text", "readonly", "", "placeholder", "Cuenta", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "name", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "blur"], ["readonly", "", 1, "form-control", "form-control-sm", "text-right", 3, "name", "id", "ngModel", "ngModelChange", "change"], [2, "margin-left", "50px"], ["type", "text", "placeholder", "Cuenta", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "name", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "blur"], [1, "form-control", "form-control-sm", "text-right", 3, "name", "id", "ngModel", "ngModelChange", "change"], [2, "vertical-align", "middle"], ["href", "javascript:;", 3, "click"], [1, "fa", "fa-trash-o"], [2, "width", "150px"], [1, "form-control", "form-control-sm", 3, "name", "id", "ngModel", "ngModelChange", "change"], ["value", ""], [1, "form-control", "form-control-sm", "text-right", 3, "name", "ngModel", "ngModelChange", "change"], ["class", "col-md-12", 4, "ngIf"], [3, "Facturas"], [3, "Facturas_Faltantes"], [1, "f-9"]], template: function ComprobanteingresocrearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-cabecera", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_Template_input_ngModelChange_9_listener($event) { return ctx.Id_Empresa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_Template_input_ngModelChange_14_listener($event) { return ctx.Fecha_Comprobante = $event; })("change", function ComprobanteingresocrearComponent_Template_input_change_14_listener($event) { return ctx.getCodigoIngreso($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ComprobanteingresocrearComponent_input_20_Template, 1, 4, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ComprobanteingresocrearComponent_input_21_Template, 1, 1, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_Template_input_ngModelChange_22_listener($event) { return ctx.Id_Cliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Banco");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ng-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_Template_ng_select_ngModelChange_27_listener($event) { return ctx.Cuenta_Banco = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Valor Banco");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteingresocrearComponent_Template_input_ngModelChange_32_listener($event) { return ctx.Valor_Banco = $event; })("change", function ComprobanteingresocrearComponent_Template_input_change_32_listener() { return ctx.calcularTotalesDebitoCredito(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Forma de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Seleccione forma de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ComprobanteingresocrearComponent_option_40_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Notas del Recibo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, ComprobanteingresocrearComponent_div_53_Template, 12, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, ComprobanteingresocrearComponent_div_54_Template, 6, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ComprobanteingresocrearComponent_div_56_Template, 5, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, ComprobanteingresocrearComponent_div_57_Template, 7, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, ComprobanteingresocrearComponent_div_58_Template, 34, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ComprobanteingresocrearComponent_div_59_Template, 3, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Subtotal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, ComprobanteingresocrearComponent_tr_70_Template, 6, 3, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Precio Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Total Debito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](82, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Total Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](88, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Diferencia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](94, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Volver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, ComprobanteingresocrearComponent_ng_template_104_Template, 3, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "swal", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "swal", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](110, ComprobanteingresocrearComponent_ng_template_110_Template, 2, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Id_Empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Fecha_Comprobante);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", "Ingreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar_Input_Cli);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.Mostrar_Input_Cli);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Id_Cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.Cuentas)("ngModel", ctx.Cuenta_Banco);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Valor_Banco);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.FormaPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar_Opciones && ctx.Facturas_Multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar && ctx.Facturas_Multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar && !ctx.Facturas_Multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar_Cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.Facturas_Multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 26, ctx.Subtotal_Facturas), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Retenciones_Totales > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 28, ctx.Total_Facturas));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](82, 30, ctx.Total_Debito), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](88, 32, ctx.Total_Credito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](94, 34, ctx.Total_Debito - ctx.Total_Credito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](36, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swal", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_9__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SwalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_13__["SwalComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTypeahead"], _tablafacturascargadas_tablafacturascargadas_component__WEBPACK_IMPORTED_MODULE_15__["TablafacturascargadasComponent"], _tablafacturafaltante_tablafacturafaltante_component__WEBPACK_IMPORTED_MODULE_16__["TablafacturafaltanteComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]], styles: [".btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 10px !important;\n  line-height: 14px !important;\n  font-size: 10px !important;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  padding: 2px 5px !important;\n  height: 22px !important;\n  border-radius: 5px !important;\n}\n\n.f-9[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n}\n\n.tabla[_ngcontent-%COMP%] {\n  font-size: 11px;\n  word-wrap: break-word;\n}\n\n.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: normal;\n  padding: 3px !important;\n  font-size: 10px;\n  line-height: 11px;\n}\n\n.tabla[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n  text-align: left;\n}\n\n.tabla[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n\n.contenido[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\n\n.botonFlotante[_ngcontent-%COMP%] {\n  position: fixed;\n  display: scroll;\n  bottom: 10px;\n  right: 10px;\n  z-index: 99;\n}\n\n.botonFlotante1[_ngcontent-%COMP%] {\n  position: fixed;\n  display: scroll;\n  bottom: 10px;\n  right: 230px;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjb21wcm9iYW50ZWluZ3Jlc29jcmVhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFBSTs7RUFFSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRVI7O0FBQUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSwwQkFBQTtBQUVSOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImNvbXByb2JhbnRlaW5ncmVzb2NyZWFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweCFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZi05IHtcclxuICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsYSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVuaWRvIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm90b25GbG90YW50ZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBzY3JvbGw7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4uYm90b25GbG90YW50ZTEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogc2Nyb2xsO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDIzMHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "EShg":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/egresos/comprobanteegresovarioscrear/comprobanteegresovarioscrear.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ComprobanteegresovarioscrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprobanteegresovarioscrearComponent", function() { return ComprobanteegresovarioscrearComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _egresos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../egresos.service */ "8v11");
/* harmony import */ var _notas_contables_notas_contables_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../notas-contables/notas-contables.service */ "Nl1k");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _borradorcomprobantes_borradorcomprobantes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../borradorcomprobantes/borradorcomprobantes.component */ "xAB+");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _components_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../components/modal-basic/modal-basic.component */ "xoca");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");


















const _c0 = ["FormEgreso"];
const _c1 = ["confirmacionSwal"];
const _c2 = ["confirmacionGuardarCheque"];
const _c3 = ["modalAgregarCheque"];
function ComprobanteegresovarioscrearComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ng-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_div_46_Template_ng_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.ChequesSeleccionados = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "ng-select")("items", ctx_r1.Cheques)("allowClear", true)("ngModel", ctx_r1.ChequesSeleccionados)("multiple", true);
} }
function ComprobanteegresovarioscrearComponent_div_57_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No Existen Facturas para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ComprobanteegresovarioscrearComponent_div_57_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ComprobanteegresovarioscrearComponent_div_57_tr_31_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const item_r20 = ctx.$implicit; const i_r21 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r22.addListInvoice(item_r20, i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_div_57_tr_31_Template_input_ngModelChange_19_listener($event) { const item_r20 = ctx.$implicit; return item_r20.Abono = $event; })("blur", function ComprobanteegresovarioscrearComponent_div_57_tr_31_Template_input_blur_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const i_r21 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.validarSaldoFactura(i_r21, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", i_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Factura", i_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Factura", i_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r20.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r20.Fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r20.Factura);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 15, item_r20.Valor_Factura), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 17, item_r20.Valor_Abono), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 19, item_r20.Valor_Saldo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "abono", i_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "abono", i_r21, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r20.Abono);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r20.Nat);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 21, item_r20.Movimiento_Debito), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 23, item_r20.Movimiento_Credito), " ");
} }
function ComprobanteegresovarioscrearComponent_div_57_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r19.Total_Abono), "");
} }
function ComprobanteegresovarioscrearComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Facturas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Vlr. Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Vlr. Abono");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Vlr. Saldo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Abono");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Nat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Movimiento Debito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Movimiento_Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ComprobanteegresovarioscrearComponent_div_57_tr_30_Template, 5, 0, "tr", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ComprobanteegresovarioscrearComponent_div_57_tr_31_Template, 28, 25, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ComprobanteegresovarioscrearComponent_div_57_tr_32_Template, 7, 3, "tr", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteegresovarioscrearComponent_div_57_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.addInvoicesToAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.Lista_Facturas.length == 0 && !ctx_r2.Cargando);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.Lista_Facturas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.Lista_Facturas.length > 0);
} }
function ComprobanteegresovarioscrearComponent_tr_91_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cheque_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cheque_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cheque_r32, " ");
} }
function ComprobanteegresovarioscrearComponent_tr_91_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteegresovarioscrearComponent_tr_91_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r33.EliminarCuenta(i_r29); return ctx_r33.armarDatosBorrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { display: a0 }; };
function ComprobanteegresovarioscrearComponent_tr_91_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_2_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Cuenta = $event; })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r37.tab($event, "Nit" + i_r29); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const item_r28 = ctx.$implicit; const i_r29 = ctx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r39.BuscarCuenta(item_r28.Cuenta, i_r29); })("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const item_r28 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r40.armarDatosBorrador(); return ctx_r40.validarCampo(item_r28.Cuenta, $event, "Cuenta"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_select_ngModelChange_4_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Cheque = $event; })("change", function ComprobanteegresovarioscrearComponent_tr_91_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.armarDatosBorrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Seleccione Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ComprobanteegresovarioscrearComponent_tr_91_option_7_Template, 2, 2, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_9_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Nit = $event; })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r44.tab($event, "Centro_Costo" + i_r29); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const item_r28 = ctx.$implicit; const i_r29 = ctx.index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r45.BuscarDatosCliente(item_r28.Nit, i_r29); })("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const item_r28 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r46.armarDatosBorrador(); return ctx_r46.validarCampo(item_r28.Nit, $event, "Nit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_11_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Centro_Costo = $event; })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const item_r28 = ctx.$implicit; const i_r29 = ctx.index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r48.BuscarDatosCentro(item_r28.Centro_Costo, i_r29); })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r49.tab($event, "Documento" + i_r29); })("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const item_r28 = ctx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r50.armarDatosBorrador(); return ctx_r50.validarCampo(item_r28.Centro_Costo, $event, "Centro de Costo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r51.tab($event, "Concepto" + i_r29); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_13_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Documento = $event; })("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r53.armarDatosBorrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteegresovarioscrearComponent_tr_91_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const item_r28 = ctx.$implicit; const i_r29 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r54.showFacturas(item_r28.Nit_Cuenta, i_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r55.armarDatosBorrador(); })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r56.tab($event, "Base" + i_r29); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_17_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Concepto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r58.armarDatosBorrador(); })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r59.tab($event, "Debito" + i_r29); })("change", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_change_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r60.calcularBase(i_r29, $event.target.value); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_19_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Base = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r62.armarDatosBorrador(); })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r63.tab($event, "Credito" + i_r29); })("change", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_change_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r64.ActualizaValores(i_r29); return ctx_r64.validarDebCred(i_r29, "Debito"); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_21_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Debito = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r66.armarDatosBorrador(); })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r67.tab($event, "Deb_Niif" + i_r29); })("change", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r68.ActualizaValores(i_r29); return ctx_r68.validarDebCred(i_r29, "Credito"); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_23_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Credito = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r70.armarDatosBorrador(); })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r71.tab($event, "Cred_Niif" + i_r29); })("change", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_change_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r72.validarDebCred(i_r29, "Debito"); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_25_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Deb_Niif = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_blur_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r74.armarDatosBorrador(); })("keyup", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_keyup_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r75.tab($event, "Cuenta" + (i_r29 + 1)); })("change", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_change_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const i_r29 = ctx.index; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r76.validarDebCred(i_r29, "Credito"); })("ngModelChange", function ComprobanteegresovarioscrearComponent_tr_91_Template_input_ngModelChange_27_listener($event) { const item_r28 = ctx.$implicit; return item_r28.Cred_Niif = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ComprobanteegresovarioscrearComponent_tr_91_a_29_Template, 3, 0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](162);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](156);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Cuenta", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Cuenta)("ngbTypeahead", ctx_r3.search1)("resultTemplate", _r10)("inputFormatter", ctx_r3.formatter1)("required", ctx_r3.Cuentas_Contables.length - 1 != i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "cheque", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "cheque", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](47, _c4, item_r28.Cheque != "" ? "block" : "none"))("ngModel", item_r28.Cheque)("required", ctx_r3.Cuentas_Contables.length - 1 != i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.ChequesSeleccionados);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Nit", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Nit", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Nit)("ngbTypeahead", ctx_r3.search)("resultTemplate", _r6)("inputFormatter", ctx_r3.formatter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Centro_Costo", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Centro_Costo", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Centro_Costo)("ngbTypeahead", ctx_r3.search2)("resultTemplate", _r12)("inputFormatter", ctx_r3.formatter2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Documento", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Documento", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Concepto", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Concepto", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Concepto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Base", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Base", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Base);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Debito", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Debito", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Debito);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Credito", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Credito", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Deb_Niif", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Deb_Niif", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Deb_Niif);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Cred_Niif", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Cred_Niif", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r28.Cred_Niif);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.Cuentas_Contables.length - 1 != i_r29);
} }
function ComprobanteegresovarioscrearComponent_ng_template_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r78 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r78.Nombre);
} }
function ComprobanteegresovarioscrearComponent_ng_template_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r80 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r80.Codigo, " ");
} }
function ComprobanteegresovarioscrearComponent_ng_template_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r82 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r82.Nombre, " ");
} }
class ComprobanteegresovarioscrearComponent {
    constructor(route, http, router, 
    // private swalService: SwalService,
    _egresos, _general, _user) {
        this.route = route;
        this.http = http;
        this.router = router;
        this._egresos = _egresos;
        this._general = _general;
        this._user = _user;
        this.datosCabecera = {
            Titulo: 'Nuevo Egreso',
            Fecha: new Date(),
            Codigo: ''
        };
        this.Tipo_Comprobante = 'Egreso';
        this.alertOption = {};
        this.Cargando = false;
        this.Mostrar_Facturas = false;
        this.Facturas = [];
        this.ChequesSeleccionados = [];
        this.fecha = new Date();
        this.Fecha = '';
        this.display_Banco = 'none';
        this.Proveedores = [];
        this.Lista_Facturas = [{
                RetencionesFactura: []
            }];
        this.alertOption2 = {};
        this.Centro_Costo = '';
        this.Nom_Centro_Costo = '';
        this.Fecha_Nota_Contable = this.fechaHoy();
        this.Id_Proveedor = '';
        this.Id_Empresa = '';
        this.NombreProveedor = '';
        this.Id_Cliente = '';
        this.Cliente = [];
        // public Funcionario=JSON.parse(localStorage.getItem("User"));
        this.Cuenta = [];
        this.FormaPago = [];
        this.Rentenciones = [];
        this.RentencionesFactura = [];
        this.Cuentas_Contables = [{
                Cuenta: '',
                Cheque: '',
                Nit: '',
                Centro_Costo: '',
                Documento: '',
                Concepto: '',
                Base: 0,
                Debito: 0,
                Credito: 0,
                Deb_Niif: 0,
                Cred_Niif: 0
            }];
        this.Cuenta_Banco = '';
        this.Costo_Ingreso = 0;
        this.Total_Debito = 0;
        this.Total_Credito = 0;
        this.Retenciones_Totales = 0;
        this.Mostrar = false;
        this.Mostrar_Cliente = false;
        this.Forma_Pago = 'Cheque';
        this.Impuesto = 0;
        this.reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Subtotal);
        this.reducer_deb = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Debito);
        this.reducer_cred = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Credito);
        this.reducer_valorp = (accumulator, currentValue) => accumulator + parseFloat(currentValue.ValorIngresado);
        this.reducer_abono = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Abono);
        this.reducer3 = (accumulator, currentValue) => {
            var acu_iva = 0;
            currentValue.RetencionesFacturas.forEach((v, i) => {
                acu_iva += parseFloat(v.Valor);
            });
            return accumulator + acu_iva;
        };
        this.ListaRetenciones = [];
        this.ListaFact = [];
        this.Total_Facturas = 0;
        this.Mostrar_Opciones = true;
        this.Mostrar_Input_Cli = true;
        this.Centros = [];
        this.Documento = '';
        this.Concepto = '';
        this.Cheques = [];
        this.ModelCheque = {
            Id_Plan_Cuentas: '',
            Prefijo: '',
            Inicial: null,
            Final: null
        };
        this.mostrarCheque = true;
        this.idBorrador = '';
        this.Codigo = '';
        this.Total_Abono = 0;
        this.companies = [];
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(term => term.length < 4 ? []
            : this.Cliente.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter = (x) => x.Nombre;
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(term => term.length < 4 ? []
            : this.Cuenta.filter(v => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter1 = (x) => x.Codigo;
        this.search2 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(term => term.length < 2 ? []
            : this.Centros.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter2 = (x) => x.Nombre;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/proveedor_buscar.php').subscribe((data) => {
            this.Proveedores = data;
        });
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Guardar este Comprobante",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            input: 'select',
            inputOptions: {
                Pcga: 'Imprimir en PCGA',
                Niif: 'Imprimir en NIIF'
            },
            preConfirm: (value) => {
                return new Promise((resolve) => {
                    this.guardarEgreso(this.FormEgreso, value);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading()
        };
        this.alertOption2 = {
            title: "¿Está Seguro?",
            text: "Se dispone a registrar un nuevo cheque",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Registrar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.nuevoCheque(this.modalAgregarCheque);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading()
        };
    }
    ngOnInit() {
        this.Id_Empresa = this._user.user.person.company_worked.id;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/nit_buscar.php').subscribe((data) => {
            this.Cliente = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/cuentas.php').subscribe((data) => {
            this.Bancos = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php', { params: { company_id: this._user.user.person.company_worked.id } }).subscribe((data) => {
            this.Cuenta = data.Activo;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/centrocosto_buscar.php', { params: { company_id: this._user.user.person.company_worked.id } }).subscribe((data) => {
            this.Centros = data;
        });
        this.getCodigoEgreso();
        this.ListarRetenciones();
        this.listarCheques();
    }
    BuscarProveedor(modelo) {
        this.NombreProveedor = modelo.Proveedores;
        this.Id_Proveedor = modelo.Id_Proveedor;
    }
    BuscarDatosCliente(cliente, pos) {
        if (pos != null && pos != undefined) {
            this.Cuentas_Contables[pos].Nit_Cuenta = cliente.ID;
            this.Cuentas_Contables[pos].Tipo_Nit = cliente.Tipo;
        }
        else {
            this.Id_Cliente = cliente.ID;
            this.Tipo_Beneficiario = cliente.Tipo;
        }
    }
    getDatosTercero(nit) {
        return this.Cliente.find(x => x.ID == nit);
    }
    BuscarDatosCentro(centro, pos) {
        if (pos != undefined && pos != null) {
            if (centro == '') {
                this.Cuentas_Contables[pos].Id_Centro_Costo = centro;
            }
            else {
                this.Cuentas_Contables[pos].Id_Centro_Costo = centro.Id_Centro_Costo;
            }
        }
        else {
            this.Centro_Costo = centro.Id_Centro_Costo;
        }
    }
    BuscarCuenta(cuenta, pos) {
        let pos2 = pos + 1;
        if (cuenta.Centro_Costo == 'S') { // Validar si la cuenta es para Centro de costos o no.
            this.Cuentas_Contables[pos].Centro_Costo = this.Nom_Centro_Costo;
            this.Cuentas_Contables[pos].Id_Centro_Costo = this.Nom_Centro_Costo.Id_Centro_Costo;
            document.getElementById('Centro_Costo' + pos).style.display = 'block';
        }
        else {
            this.Cuentas_Contables[pos].Centro_Costo = '';
            this.Cuentas_Contables[pos].Id_Centro_Costo = 0;
            document.getElementById('Centro_Costo' + pos).style.display = 'none';
        }
        this.Cuentas_Contables[pos].Id_Plan_Cuentas = cuenta.Id_Plan_Cuentas;
        this.Cuentas_Contables[pos].Documento = this.Documento;
        this.Cuentas_Contables[pos].Concepto = this.Concepto;
        // Nit Beneficiario
        this.Cuentas_Contables[pos].Nit = this.Nom_Cliente;
        this.Cuentas_Contables[pos].Nit_Cuenta = this.Nom_Cliente.ID;
        this.Cuentas_Contables[pos].Tipo_Nit = this.Nom_Cliente.Tipo;
        let posicion = this.ListaRetenciones.findIndex(x => x.Id_Plan_Cuenta === cuenta.Id_Plan_Cuentas);
        this.isBank(cuenta, pos); // Validar si la cuenta es un banco.
        if (posicion >= 0) {
            document.getElementById('Base' + pos).readOnly = false;
            this.Cuentas_Contables[pos].Porcentaje = this.ListaRetenciones[posicion].Porcentaje;
        }
        if (cuenta.Id_Plan_Cuentas) {
            if (this.Cuentas_Contables[pos2] == undefined) {
                this.Cuentas_Contables.push({
                    Cuenta: '',
                    Cheque: '',
                    Nit: '',
                    Centro_Costo: '',
                    Documento: '',
                    Concepto: '',
                    Base: 0,
                    Debito: 0,
                    Credito: 0,
                    Deb_Niif: 0,
                    Cred_Niif: 0
                });
            }
        }
    }
    ActualizaValores(pos) {
        if (pos != null && pos != undefined) {
            this.Cuentas_Contables[pos].Deb_Niif = this.Cuentas_Contables[pos].Debito;
            this.Cuentas_Contables[pos].Cred_Niif = this.Cuentas_Contables[pos].Credito;
        }
        this.Total_Credito = this.Cuentas_Contables.reduce(this.reducer_cred, 0);
        this.Total_Debito = this.Cuentas_Contables.reduce(this.reducer_deb, 0);
    }
    EliminarCuenta(pos) {
        this.Cuentas_Contables.splice(pos, 1);
        setTimeout(() => {
            this.ActualizaValores();
        }, 100);
    }
    guardarEgreso(Formulario, tipo) {
        let info = JSON.stringify(Formulario.value);
        let datos = new FormData();
        datos.append('Datos', info);
        datos.append('Cuentas_Contables', JSON.stringify(this.Cuentas_Contables));
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/guardar_egreso.php', datos).subscribe((data) => {
            this.confirmacionSwal.title = data.titulo;
            this.confirmacionSwal.text = data.mensaje;
            this.confirmacionSwal.icon = data.tipo;
            this.confirmacionSwal.fire();
            if (data.tipo == 'success' && data.id != undefined) {
                if (tipo == 'Pcga') {
                    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/egreso_descarga_pdf.php?id=' + data.id, '_blank'); // SE IMPRIME EN FORMATO PCGA
                }
                else {
                    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/egreso_descarga_pdf.php?id=' + data.id + '&tipo=Niif', '_blank'); // SE IMPRIME EN FORMATO NIIF
                }
                setTimeout(() => {
                    this.router.navigate(['/contabilidad/comprobantes/egresos']);
                }, 1000);
            }
        }, error => {
            this.confirmacionSwal.text = "Ha ocurrido un error inesperado, la conexión a fallado.";
            this.confirmacionSwal.title = "Oops!";
            this.confirmacionSwal.icon = "error";
            this.confirmacionSwal.fire();
        });
    }
    HomologoDebCred(tipo, pos) {
        switch (tipo) {
            case 'Debito':
                this.Cuentas_Contables[pos].Deb_Niif = this.Cuentas_Contables[pos].Debito;
                break;
            case 'Credito':
                this.Cuentas_Contables[pos].Cred_Niif = this.Cuentas_Contables[pos].Credito;
                break;
        }
    }
    ListarRetenciones() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/lista_retenciones.php').subscribe((data) => {
            this.ListaRetenciones = data;
        });
    }
    calcularBase(pos, valor) {
        if (valor != '') {
            this.Cuentas_Contables[pos].Credito = Math.round(parseFloat(valor) * (parseFloat(this.Cuentas_Contables[pos].Porcentaje) / 100));
            this.Cuentas_Contables[pos].Cred_Niif = Math.round(parseFloat(valor) * (parseFloat(this.Cuentas_Contables[pos].Porcentaje) / 100));
        }
        else {
            this.Cuentas_Contables[pos].Deb_Niif = 0;
        }
        this.ActualizaValores();
    }
    fechaHoy() {
        let fecha = new Date();
        fecha = (fecha.toISOString()).split('T')[0];
        return fecha;
    }
    getCodigoEgreso(fecha) {
        let datos = { Tipo: 'Egreso' };
        if (fecha != undefined && fecha != null) {
            datos.Fecha = fecha;
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/get_codigo.php', { params: datos }).subscribe((data) => {
            this.datosCabecera.Codigo = data.consecutivo;
            this.Codigo = data.consecutivo;
        });
    }
    validarDebCred(pos, campo) {
        if (campo === 'Credito') {
            if (this.Cuentas_Contables[pos].Credito == '' || this.Cuentas_Contables[pos].Credito == null || this.Cuentas_Contables[pos].Cred_Niif == '' || this.Cuentas_Contables[pos].Cred_Niif == null) {
                this.Cuentas_Contables[pos].Credito = 0;
                this.Cuentas_Contables[pos].Cred_Niif = 0;
                this.ActualizaValores();
            }
        }
        else {
            if (this.Cuentas_Contables[pos].Debito == '' || this.Cuentas_Contables[pos].Debito == null || this.Cuentas_Contables[pos].Deb_Niif == '' || this.Cuentas_Contables[pos].Deb_Niif == null) {
                this.Cuentas_Contables[pos].Debito = 0;
                this.Cuentas_Contables[pos].Deb_Niif = 0;
                this.ActualizaValores();
            }
        }
    }
    showFacturas(nit, pos) {
        if (nit != undefined && nit != '' && nit != null) {
            this.position_document = pos;
            let p = { nit: nit };
            let id_plan_cuenta = this.Cuentas_Contables[pos].Id_Plan_Cuentas;
            if (id_plan_cuenta != '') {
                p.id_plan_cuenta = id_plan_cuenta;
            }
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/lista_facturas.php', { params: p }).subscribe((data) => {
                this.Lista_Facturas = data.Facturas;
                this.Mostrar_Facturas = true;
                setTimeout(() => {
                    this.calcularTotalAbonoCartera();
                }, 200);
            });
        }
    }
    addListInvoice(factura, pos) {
        let existe = this.Facturas.findIndex(fact => fact.Factura === factura.Factura);
        if (existe < 0) {
            this.Lista_Facturas[pos].Abono = this.Lista_Facturas[pos].Valor_Saldo;
            let factura = this.Lista_Facturas[pos];
            this.Facturas.push(factura);
        }
        else {
            this.Lista_Facturas[pos].Abono = 0;
            this.Facturas.splice(existe, 1);
        }
        setTimeout(() => {
            this.calcularTotalAbonoCartera();
        }, 200);
    }
    addInvoicesToAccount() {
        let nit = this.Cuentas_Contables[this.position_document].Nit_Cuenta;
        this.Cuentas_Contables.splice(this.position_document, 1); // Eliminando una fila para introducir las nuevas cuentas.
        let count = this.Cuentas_Contables.length; // Total de filas de las cuentas.
        if (this.Cuentas_Contables[(count - 1)] != undefined) {
            if (this.Cuentas_Contables[(count - 1)].Nit_Cuenta == undefined || this.Cuentas_Contables[(count - 1)].Nit_Cuenta == '') {
                this.Cuentas_Contables.splice((count - 1), 1); // Eliminando ultima fila.
            }
        }
        this.Facturas.forEach(f => {
            let object = {
                Centro_Costo: this.Nom_Centro_Costo,
                Id_Centro_Costo: this.Nom_Centro_Costo.Id_Centro_Costo,
                Cuenta: this.obtenerPlanCuenta(f.Codigo),
                Id_Plan_Cuentas: f.Id_Plan_Cuenta,
                Nit: this.getDatosTercero(nit),
                Nit_Cuenta: nit,
                Tipo_Nit: this.getDatosTercero(nit).Tipo,
                Documento: f.Factura,
                Concepto: 'Pago o Abono Factura Nro. ' + f.Factura,
                Base: 0,
                Debito: this.validarDebeOHaber('D', f.Movimiento, f.Abono),
                Credito: this.validarDebeOHaber('C', f.Movimiento, f.Abono),
                Deb_Niif: this.validarDebeOHaber('D', f.Movimiento, f.Abono),
                Cred_Niif: this.validarDebeOHaber('C', f.Movimiento, f.Abono),
                Valor_Factura: Math.round(f.Valor_Factura),
                Valor_Abono: Math.round(f.Valor_Abono),
                Id_Factura: f.Id_Factura,
                Cheque: ''
            };
            this.Cuentas_Contables.push(object); // Agregando nueva(s) fila(s)
        });
        this.Cuentas_Contables.push({
            Cuenta: '',
            Cheque: '',
            Nit: '',
            Centro_Costo: '',
            Documento: '',
            Concepto: '',
            Base: 0,
            Debito: 0,
            Credito: 0,
            Deb_Niif: 0,
            Cred_Niif: 0
        });
        this.Mostrar_Facturas = false;
        this.Facturas = [];
        this.Lista_Facturas = [];
        this.Total_Abono = 0;
        setTimeout(() => {
            this.ActualizaValores();
            this.armarDatosBorrador();
        }, 200);
    }
    obtenerPlanCuenta(codigo) {
        return this.Cuenta.find(x => x.Codigo_Cuenta === codigo);
    }
    validarDebeOHaber(campo, tipo, valor) {
        if (campo === tipo) {
            return Math.abs(valor);
        }
        return '0';
    }
    listarCheques() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cheques.php').subscribe((data) => {
            this.Cheques = data;
        });
    }
    nuevoCheque(modal) {
        let info = this._egresos.normalize(JSON.stringify(this.ModelCheque));
        let datos = new FormData();
        datos.append('datos', info);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/nuevo_cheque.php', datos).subscribe((data) => {
            let toastObj = { textos: [data.titulo, data.mensaje], tipo: data.tipo, duracion: 4000 };
            this._egresos.ShowToast(toastObj);
            modal.hide();
            // this.confirmacionGuardarCheque.nativeSwal.close();
            this.listarCheques();
            this.ModelCheque = {
                Id_Plan_Cuentas: '',
                Prefijo: '',
                Inicial: null,
                Final: null
            };
        });
        // return true;
    }
    isBank(banco, pos) {
        let existe = this.Bancos.findIndex(x => x.value == banco.Id_Plan_Cuentas);
        if (existe >= 0) {
            if (this.Forma_Pago == 'Cheque') {
                document.getElementById('cheque' + pos).style.display = 'block';
            }
        }
        else {
            document.getElementById('cheque' + pos).style.display = 'none';
            this.Cuentas_Contables[pos].Cheque = '';
        }
    }
    validarCampo(campo, event, tipo) {
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
    validarSaldoFactura(pos, event) {
        let saldo = parseFloat(this.Lista_Facturas[pos].Valor_Saldo);
        let abono = parseFloat(this.Lista_Facturas[pos].Abono);
        if (abono > saldo) { // Validando que el abono no pueda ser mayor al saldo de una factura de cartera.
            let id = event.target.id;
            document.getElementById(id).focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'error',
                title: 'Incorrecto!',
                text: `El valor del abono no puede ser mayor al saldo de la factura.`
            });
            // this.swalService.ShowMessage(swal);
        }
        setTimeout(() => {
            this.calcularTotalAbonoCartera();
        }, 200);
    }
    formaPago(tipo) {
        if (tipo == 'Cheque') {
            this.mostrarCheque = true;
        }
        else {
            this.mostrarCheque = false;
        }
    }
    tab(event, ele) {
        this._general.tabular(event, ele);
    }
    reloadData() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/nit_buscar.php').subscribe((data) => {
            this.Cliente = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php').subscribe((data) => {
            this.Cuenta = data.Activo;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/centrocosto_buscar.php').subscribe((data) => {
            this.Centros = data;
        });
    }
    armarDatosBorrador() {
        let datosCabecera = {
            Fecha: this.Fecha_Nota_Contable,
            Beneficiario: this.Nom_Cliente,
            Id_Cliente: this.Id_Cliente,
            Tipo_Beneficiario: this.Tipo_Beneficiario,
            Nom_Centro_Costo: this.Nom_Centro_Costo,
            Centro_Costo: this.Centro_Costo,
            Documento: this.Documento,
            Concepto: this.Concepto,
            ChequesSeleccionados: this.ChequesSeleccionados
        };
        let Datos = {
            Cabecera: datosCabecera,
            Cuentas_Contables: this.Cuentas_Contables
        };
        setTimeout(() => {
            let datosBorrador = {
                Id_Borrador_Contabilidad: this.idBorrador,
                Codigo: this.Codigo,
                Tipo_Comprobante: 'Egreso',
                // Identificacion_Funcionario: this.Funcionario.Identificacion_Funcionario,
                Datos: Datos
            };
            let info = this._egresos.Utf8.encode(JSON.stringify(datosBorrador));
            let datos = new FormData();
            datos.append('datos', info);
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/guardar_borrador_contable.php', datos)
                .subscribe((data) => {
                if (data.status == 202) {
                    if (this.idBorrador == '')
                        this.idBorrador = data.Id_Borrador;
                }
            });
        }, 300);
    }
    setDatosBorrador(data = null) {
        if (data == 'clean') {
            this.resetModel(); // Reinicilizar Campos.
        }
        else {
            let Datos = JSON.parse(data.Datos);
            this.Fecha_Nota_Contable = Datos.Cabecera.Fecha;
            this.Nom_Cliente = Datos.Cabecera.Beneficiario;
            this.Id_Cliente = Datos.Cabecera.Id_Cliente;
            this.Tipo_Beneficiario = Datos.Cabecera.Tipo_Beneficiario;
            this.Nom_Centro_Costo = Datos.Cabecera.Nom_Centro_Costo;
            this.Centro_Costo = Datos.Cabecera.Centro_Costo;
            this.Documento = Datos.Cabecera.Documento;
            this.ChequesSeleccionados = Datos.Cabecera.ChequesSeleccionados;
            this.Concepto = Datos.Cabecera.Concepto;
            this.Cuentas_Contables = Datos.Cuentas_Contables;
            this.datosCabecera.Codigo = data.Codigo;
            this.idBorrador = data.ID;
        }
        setTimeout(() => {
            this.ActualizaValores();
        }, 200);
    }
    resetModel() {
        this.Fecha_Nota_Contable = this.fechaHoy();
        this.Nom_Cliente = '';
        this.Id_Cliente = '';
        this.Nom_Centro_Costo = '';
        this.Centro_Costo = '';
        this.Documento = '';
        this.Concepto = '';
        this.Cuentas_Contables = [{
                Cuenta: '',
                Cheque: '',
                Nit: '',
                Centro_Costo: '',
                Documento: '',
                Concepto: '',
                Base: 0,
                Debito: 0,
                Credito: 0,
                Deb_Niif: 0,
                Cred_Niif: 0
            }];
        this.ChequesSeleccionados = [];
        this.datosCabecera.Codigo = this.getCodigoEgreso();
    }
    calcularTotalAbonoCartera() {
        this.Total_Abono = this.Lista_Facturas.reduce(this.reducer_abono, 0);
    }
}
ComprobanteegresovarioscrearComponent.ɵfac = function ComprobanteegresovarioscrearComponent_Factory(t) { return new (t || ComprobanteegresovarioscrearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_egresos_service__WEBPACK_IMPORTED_MODULE_6__["EgresosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_notas_contables_notas_contables_service__WEBPACK_IMPORTED_MODULE_7__["NotasContablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
ComprobanteegresovarioscrearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComprobanteegresovarioscrearComponent, selectors: [["app-comprobanteegresovarioscrear"]], viewQuery: function ComprobanteegresovarioscrearComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.FormEgreso = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.confirmacionGuardarCheque = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modalAgregarCheque = _t.first);
    } }, decls: 167, vars: 41, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], [3, "datosCabecera"], [1, "line"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fa", "fa-plus"], ["FormEgreso", "ngForm"], ["type", "hidden", "name", "Id_Borrador", 3, "ngModel", "ngModelChange"], ["type", "hidden", "name", "Id_Empresa", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-md-2"], [1, "form-group"], ["type", "date", "name", "Fecha_Documento", "id", "Fecha_Nota_Contable", "required", "", 1, "form-control", "form-control-sm", "tab", 3, "ngModel", "ngModelChange", "keyup", "change"], ["type", "text", "name", "Cliente", "id", "Cliente", 1, "form-control", "form-control-sm", "f-9", "tab", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["hidden", "", "name", "Beneficiario", "id", "Beneficiario", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["hidden", "", "name", "Tipo_Beneficiario", "id", "Tipo_Beneficiario", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "Centro_Costo"], ["type", "text", "name", "Nom_Centro_Costo", "id", "Centro_Costo", 1, "form-control", "form-control-sm", "f-9", "tab", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["type", "hidden", "name", "Id_Centro_Costo", 3, "ngModel", "ngModelChange"], ["for", ""], ["type", "text", "name", "Documento", "id", "Documento", 1, "form-control", "form-control-sm", 3, "ngModel", "keyup", "ngModelChange"], ["name", "Forma_Pago", "id", "forma_pago", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "change"], ["value", "Cheque"], ["value", "Transferencia"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], ["name", "Concepto", "id", "Concepto", "rows", "3", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], [1, "col-md-3"], ["for", "borrador"], [3, "Tipo_Comprobante", "Borrador"], ["class", "row", 4, "ngIf"], [1, "col-md-12"], ["title", "Recargar datos iniciales (Terceros, PUC, Centros Costos)", 1, "btn", "btn-link", "btn-sm", "pull-right", 3, "click"], [1, "fa", "fa-refresh"], [1, "table", "invoice-detail-table", "tabla"], [1, "thead-default"], [2, "width", "200px"], [3, "id", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], [1, "table", "table-responsive", "invoice-table", "invoice-total"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "swal"], ["modalAgregarCheque", ""], [1, "app-modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], ["FormNuevoCheque", "ngForm"], ["for", "banco"], ["id", "banco", "placeholder", "Seleccione el Banco", "name", "Id_Banco", "required", "", 1, "f-9", 3, "items", "ngModel", "ngModelChange"], [1, "col-md-4"], ["for", "prefijo"], ["type", "text", "id", "prefijo", "name", "prefijo", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "inicial"], ["type", "number", "id", "inicial", "name", "inicial", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "final"], ["type", "number", "id", "final", "name", "final", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "app-modal-footer"], [1, "text-right"], ["type", "button", 1, "btn", "btn-default", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "swal", "disabled"], ["rt", ""], ["title", "", "text", "", "type", ""], ["confirmacionSwal", ""], [3, "swalOptions"], ["confirmacionGuardar", ""], ["rt1", ""], ["rt2", ""], ["confirmacionGuardarCheque", ""], ["placeholder", "Cheques", "appearance", "outline", "name", "Cheques", 1, "cheques", "form-control-sm", "input-sm", 3, "ngClass", "items", "allowClear", "ngModel", "multiple", "ngModelChange"], [1, "col-md-12", "text-center"], [2, "width", "25px"], [2, "width", "50px"], [2, "width", "60px"], [2, "width", "80px", "text-align", "right"], [2, "width", "20px"], [2, "width", "60px", "text-align", "right"], [4, "ngIf"], [1, "btn", "btn-info", "btn-sm", "pull-left", 3, "click"], ["colspan", "11"], [1, "fa", "fa-exclamation-circle", "fa-5x"], [3, "id"], [1, "text-center", 2, "width", "25px"], ["type", "checkbox", 3, "name", "id", "change"], ["type", "number", 3, "name", "id", "ngModel", "ngModelChange", "blur"], ["colspan", "7"], ["colspan", "3"], ["type", "text", "name", "Cuenta", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "required", "ngModelChange", "keyup", "blur"], [1, "form-control", "form-control-sm", 3, "ngStyle", "name", "id", "ngModel", "required", "ngModelChange", "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "name", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["type", "text", 1, "form-control", "form-control-sm", "text-right", "input-document", 3, "name", "id", "ngModel", "keyup", "ngModelChange", "blur"], ["href", "javascript:;", 3, "click"], [1, "fa", "fa-search", 2, "font-weight", "bold"], [1, "form-control", "form-control-sm", 3, "name", "id", "ngModel", "blur", "keyup", "ngModelChange"], ["readonly", "", 1, "form-control", "form-control-sm", "text-right", 3, "name", "id", "ngModel", "blur", "keyup", "change", "ngModelChange"], ["type", "number", 1, "form-control", "form-control-sm", "text-right", 3, "name", "id", "ngModel", "blur", "keyup", "change", "ngModelChange"], [1, "text-center"], ["href", "javascript:;", 3, "click", 4, "ngIf"], [3, "value"], [1, "fa", "fa-trash-o", "text-danger"], [1, "f-9"]], template: function ComprobanteegresovarioscrearComponent_Template(rf, ctx) { if (rf & 1) {
        const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-cabecera", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteegresovarioscrearComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](118); return _r4.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Registrar cheque ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_11_listener($event) { return ctx.idBorrador = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_12_listener($event) { return ctx.Id_Empresa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_18_listener($event) { return ctx.Fecha_Nota_Contable = $event; })("keyup", function ComprobanteegresovarioscrearComponent_Template_input_keyup_18_listener($event) { return ctx.tab($event, "Cliente"); })("change", function ComprobanteegresovarioscrearComponent_Template_input_change_18_listener($event) { return ctx.getCodigoEgreso($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Beneficiario Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_23_listener($event) { return ctx.Nom_Cliente = $event; })("keyup", function ComprobanteegresovarioscrearComponent_Template_input_keyup_23_listener($event) { return ctx.tab($event, "Centro_Costo"); })("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_23_listener() { return ctx.BuscarDatosCliente(ctx.Nom_Cliente); })("blur", function ComprobanteegresovarioscrearComponent_Template_input_blur_23_listener($event) { return ctx.validarCampo(ctx.Nom_Cliente, $event, "Beneficiario"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_24_listener($event) { return ctx.Id_Cliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_25_listener($event) { return ctx.Tipo_Beneficiario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Centro Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_30_listener($event) { return ctx.Nom_Centro_Costo = $event; })("keyup", function ComprobanteegresovarioscrearComponent_Template_input_keyup_30_listener($event) { return ctx.tab($event, "Documento"); })("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_30_listener() { return ctx.BuscarDatosCentro(ctx.Nom_Centro_Costo); })("blur", function ComprobanteegresovarioscrearComponent_Template_input_blur_30_listener($event) { return ctx.validarCampo(ctx.Nom_Centro_Costo, $event, "Centro de Costo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_31_listener($event) { return ctx.Centro_Costo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ComprobanteegresovarioscrearComponent_Template_input_keyup_36_listener($event) { return ctx.tab($event, "Concepto"); })("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_36_listener($event) { return ctx.Documento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Forma de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_select_ngModelChange_41_listener($event) { return ctx.Forma_Pago = $event; })("change", function ComprobanteegresovarioscrearComponent_Template_select_change_41_listener($event) { return ctx.formaPago($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Transferencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ComprobanteegresovarioscrearComponent_div_46_Template, 3, 5, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Concepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ComprobanteegresovarioscrearComponent_Template_textarea_keyup_51_listener($event) { return ctx.tab($event, "Cuenta0"); })("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_textarea_ngModelChange_51_listener($event) { return ctx.Concepto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Borradores");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "app-borradorcomprobantes", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("Borrador", function ComprobanteegresovarioscrearComponent_Template_app_borradorcomprobantes_Borrador_56_listener($event) { return ctx.setDatosBorrador($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, ComprobanteegresovarioscrearComponent_div_57_Template, 35, 3, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteegresovarioscrearComponent_Template_button_click_61_listener() { return ctx.reloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Recargar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Nit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Centro Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Concepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Debito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Deb Niif");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Cred Niif");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, ComprobanteegresovarioscrearComponent_tr_91_Template, 30, 49, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Total Debito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](101, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Total Credito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](107, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Diferencia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](113, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "app-modal-basic", null, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h4", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Registrar Cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteegresovarioscrearComponent_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](118); return _r4.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "form", null, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Banco");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "ng-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_ng_select_ngModelChange_133_listener($event) { return ctx.ModelCheque.Id_Plan_Cuentas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Prefijo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_138_listener($event) { return ctx.ModelCheque.Prefijo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Desde");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_143_listener($event) { return ctx.ModelCheque.Inicial = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Hasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComprobanteegresovarioscrearComponent_Template_input_ngModelChange_148_listener($event) { return ctx.ModelCheque.Final = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprobanteegresovarioscrearComponent_Template_button_click_151_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](118); return _r4.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " Registrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](155, ComprobanteegresovarioscrearComponent_ng_template_155_Template, 3, 1, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "swal", 64, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "swal", 66, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](161, ComprobanteegresovarioscrearComponent_ng_template_161_Template, 2, 1, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](163, ComprobanteegresovarioscrearComponent_ng_template_163_Template, 2, 1, "ng-template", null, 69, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "swal", 66, 70);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](127);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](156);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](160);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](164);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.idBorrador);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Id_Empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Fecha_Nota_Contable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Nom_Cliente)("ngbTypeahead", ctx.search)("resultTemplate", _r6)("inputFormatter", ctx.formatter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Id_Cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Tipo_Beneficiario);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Nom_Centro_Costo)("ngbTypeahead", ctx.search2)("resultTemplate", _r12)("inputFormatter", ctx.formatter2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Centro_Costo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Documento);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Forma_Pago);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mostrarCheque);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Concepto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Tipo_Comprobante", ctx.Tipo_Comprobante);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar_Facturas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.Cuentas_Contables);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](101, 35, ctx.Total_Debito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](107, 37, ctx.Total_Credito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](113, 39, ctx.Total_Debito - ctx.Total_Credito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swal", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.Bancos)("ngModel", ctx.ModelCheque.Id_Plan_Cuentas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.ModelCheque.Prefijo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.ModelCheque.Inicial);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.ModelCheque.Final);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swal", _r14)("disabled", !_r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swalOptions", ctx.alertOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swalOptions", ctx.alertOption2);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_9__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _borradorcomprobantes_borradorcomprobantes_component__WEBPACK_IMPORTED_MODULE_13__["BorradorcomprobantesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__["SwalDirective"], _components_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_15__["ModalBasicComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__["SwalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wcm9iYW50ZWVncmVzb3Zhcmlvc2NyZWFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "HT2o":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notas-carteras/notas-carteras.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NotasCarterasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasCarterasComponent", function() { return NotasCarterasComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var mydaterangepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mydaterangepicker */ "1B6z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");











function NotasCarterasComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Cargando Notas Carteras...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NotasCarterasComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No Existen Notas Contables para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NotasCarterasComponent_tr_70_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.Estado);
} }
function NotasCarterasComponent_tr_70_a_37_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotasCarterasComponent_tr_70_a_37_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.IdDocumento = item_r3.Id_Documento_Contable; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("swal", ctx_r5.confirmacionAnular);
} }
const _c0 = function (a0) { return { "bg-danger": a0 }; };
function NotasCarterasComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, NotasCarterasComponent_tr_70_span_24_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Ver PCGA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Ver NIIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, NotasCarterasComponent_tr_70_a_37_Template, 3, 1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, item_r3.Estado == "Anulada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.Fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r3.Beneficiario, " - ", item_r3.Tercero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.Concepto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 17, item_r3.Total_Debe_PCGA));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 19, item_r3.Total_Haber_PCGA));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 21, item_r3.Total_Debe_NIIF));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 23, item_r3.Total_Haber_NIIF));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.Funcionario);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.Estado != "Anulada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "", ctx_r2.envirom.ruta, "php/contabilidad/notascontables/descarga_pdf.php?id=", item_r3.Id_Documento_Contable, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "", ctx_r2.envirom.ruta, "php/contabilidad/notascontables/descarga_pdf.php?id=", item_r3.Id_Documento_Contable, "&tipo=Niif", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.Estado != "Anulada" && ctx_r2.perfilUsuario == "27");
} }
const _c1 = function () { return ["/contabilidad/comprobantes/notas-cartera-crear"]; };
class NotasCarterasComponent {
    constructor(http, route, location, swalService) {
        this.http = http;
        this.route = route;
        this.location = location;
        this.swalService = swalService;
        this.NotasCarteras = [];
        this.Cargando = true;
        this.maxSize = 20;
        this.page = 1;
        this.filtros = {
            codigo: '',
            fechas: '',
            tercero: '',
            estado: '',
        };
        this.filtro_fecha = '';
        this.myDateRangePickerOptions = {
            width: '200px',
            height: '21px',
            selectBeginDateTxt: 'Inicio',
            selectEndDateTxt: 'Fin',
            selectionTxtFontSize: '10px',
            dateFormat: 'yyyy-mm-dd',
        };
        this.IdDocumento = '';
        this.perfilUsuario = localStorage.getItem('miPerfil');
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Anular este Documento",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Anular',
            showLoaderOnConfirm: true,
            focusCancel: true,
            // type: 'warning',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.anularDocumento();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading()
        };
    }
    ngOnInit() {
        this.ListarNotasCarteras();
        this.envirom = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    ListarNotasCarteras() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/notascarteras/lista_notas_carteras.php').subscribe((data) => {
            this.Cargando = false;
            this.NotasCarteras = data.Notas;
            this.TotalItems = data.numReg;
            console.log(this.NotasCarteras);
        });
    }
    dateRangeChanged(event) {
        if (event.formatted != "") {
            this.filtros.fechas = event.formatted;
        }
        else {
            this.filtros.fechas = '';
        }
        this.filtrar();
    }
    getStrConditions(pagination = false) {
        let params = {};
        if (this.filtros.codigo != '') {
            params.cod = this.filtros.codigo;
        }
        if (this.filtros.tercero != '') {
            params.tercero = this.filtros.tercero;
        }
        if (this.filtros.fechas != '') {
            params.fecha = this.filtros.fechas;
        }
        if (this.filtros.estado != '') {
            params.est = this.filtros.estado;
        }
        if (pagination) {
            params.pag = this.page;
        }
        else {
            this.page = 1;
        }
        let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        this.location.replaceState('/comprobante/notascartera', queryString);
        return queryString;
    }
    filtrar(pagination = false) {
        let queryString = this.getStrConditions(pagination);
        this.Cargando = true;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/notascarteras/lista_notas_carteras.php?' + queryString).subscribe((data) => {
            this.Cargando = false;
            this.NotasCarteras = data.Notas;
            this.TotalItems = data.numReg;
        });
    }
    anularDocumento() {
        let datos = {
            Id_Registro: this.IdDocumento,
            Tipo: 'Notas_Cartera',
        };
        this.AnularDocumentoContable(datos).subscribe((data) => {
            let swal = {
                codigo: data.tipo,
                titulo: data.titulo,
                mensaje: data.mensaje
            };
            this.swalService.ShowMessage(swal);
            this.ListarNotasCarteras();
        }, error => {
            let swal = {
                codigo: 'warning',
                titulo: 'Oops!',
                mensaje: 'Lamentablemente se ha perdido la conexión a internet. Por favor vuelve a intentarlo.'
            };
            this.swalService.ShowMessage(swal);
        });
    }
    AnularDocumentoContable(datos) {
        let info = JSON.stringify(datos);
        let data = new FormData();
        data.append('datos', info);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/anular_documento.php', data);
    }
}
NotasCarterasComponent.ɵfac = function NotasCarterasComponent_Factory(t) { return new (t || NotasCarterasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"])); };
NotasCarterasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotasCarterasComponent, selectors: [["app-notas-carteras"]], decls: 73, vars: 20, consts: [[1, "page-body"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "col-md-6"], [1, "pull-right"], [1, "card-header-left"], ["type", "button", 1, "pull-left", "btn", "btn-primary", "btn-sm", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "card-block"], [1, "table", "table-striped", 2, "font-size", "10px"], [2, "max-width", "70px", "width", "70px !important"], [1, "tabla-filtro"], ["name", "mydaterange", "placeholder", "Filtro Fechas", 3, "options", "ngModel", "ngModelChange", "dateRangeChanged"], ["type", "text", "placeholder", "Filtro C\u00F3digo", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "placeholder", "Filtro Cliente", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange", "change"], [1, "form-control", "input-sm", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["value", "Activo"], ["value", "Anulada"], [4, "ngIf"], ["class", "text-center", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["size", "sm", 1, "d-flex", "justify-content-center", "pagination-rounded", "pagination-sm", 3, "rotate", "collectionSize", "page", "maxSize", "pageSize", "boundaryLinks", "collectionSizeChange", "pageChange"], ["colspan", "11", 1, "text-center"], [1, "fa", "fa-spinner", "fa-pulse", "fa-5x", "fa-fw"], [1, "sr-only"], [1, "text-center"], ["colspan", "10", 1, "text-center"], [1, "fa", "fa-exclamation-circle", "fa-5x"], [3, "ngClass"], ["width", "60"], ["class", "label label-success", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-secondary", "btn-mini", "waves-effect", "waves-light"], ["ngbDropdownMenu", ""], ["target", "_blank", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "fa", "fa-print"], ["class", "dropdown-item waves-light waves-effect caja-botones bg-danger", "href", "javascript:;", 3, "swal", "click", 4, "ngIf"], [1, "label", "label-success"], ["href", "javascript:;", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", "bg-danger", 3, "swal", "click"], [1, "fa", "fa-close"]], template: function NotasCarterasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Notas Cartera");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Notas de Cartera Realizadas en el Sistema");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Agregar Nueva Nota Cartera ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Beneficiario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Concepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Total Debito");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Total Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Total Debito NIIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Total Credito NIIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Funcionario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "my-date-range-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotasCarterasComponent_Template_my_date_range_picker_ngModelChange_47_listener($event) { return ctx.filtro_fecha = $event; })("dateRangeChanged", function NotasCarterasComponent_Template_my_date_range_picker_dateRangeChanged_47_listener($event) { return ctx.dateRangeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotasCarterasComponent_Template_input_ngModelChange_49_listener($event) { return ctx.filtros.codigo = $event; })("change", function NotasCarterasComponent_Template_input_change_49_listener() { return ctx.filtrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotasCarterasComponent_Template_input_ngModelChange_51_listener($event) { return ctx.filtros.tercero = $event; })("change", function NotasCarterasComponent_Template_input_change_51_listener() { return ctx.filtrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotasCarterasComponent_Template_select_ngModelChange_59_listener($event) { return ctx.filtros.estado = $event; })("change", function NotasCarterasComponent_Template_select_change_59_listener() { return ctx.filtrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Activas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Anuladas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, NotasCarterasComponent_tr_68_Template, 7, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, NotasCarterasComponent_tr_69_Template, 5, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, NotasCarterasComponent_tr_70_Template, 38, 27, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "ngb-pagination", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("collectionSizeChange", function NotasCarterasComponent_Template_ngb_pagination_collectionSizeChange_72_listener($event) { return ctx.TotalItems = $event; })("pageChange", function NotasCarterasComponent_Template_ngb_pagination_pageChange_72_listener($event) { return ctx.page = $event; })("pageChange", function NotasCarterasComponent_Template_ngb_pagination_pageChange_72_listener() { return ctx.filtrar(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.myDateRangePickerOptions)("ngModel", ctx.filtro_fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtros.codigo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtros.tercero);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtros.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.NotasCarteras.length == 0 && !ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.NotasCarteras);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx.page * ctx.maxSize - ctx.maxSize + 1, " al ", ctx.page * ctx.maxSize > ctx.TotalItems ? ctx.TotalItems : ctx.page * ctx.maxSize, " de ", ctx.TotalItems, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rotate", true)("collectionSize", ctx.TotalItems)("page", ctx.page)("maxSize", 10)("pageSize", 20)("rotate", true)("boundaryLinks", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], mydaterangepicker__WEBPACK_IMPORTED_MODULE_7__["MyDateRangePicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPagination"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__["SwalDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".btn-mini[_ngcontent-%COMP%] {\n  padding: 4px 6px 2px 6px !important;\n  vertical-align: middle !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 4rem !important;\n}\n\n.caja-botones[_ngcontent-%COMP%] {\n  padding: 3px 9px !important;\n  font-size: 10px !important;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px !important;\n  line-height: 14px !important;\n  font-size: 10px !important;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 10px !important;\n  line-height: 14px !important;\n  font-size: 10px !important;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  padding: 2px 5px !important;\n  height: 22px !important;\n  border-radius: 5px !important;\n}\n\n.ngx-datatable[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n\n.t-10[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n}\n\n.table[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .input-sm[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .input-sm[_ngcontent-%COMP%]:focus {\n  font-size: 10px;\n  height: auto !important;\n  padding: 2px 5px;\n  line-height: 1 !important;\n  border: 0 !important;\n  outline: none !important;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .tabla-filtro[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  vertical-align: middle;\n  word-wrap: break-word;\n  white-space: normal;\n}\n\n.f-9[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vdGFzLWNhcnRlcmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFHSTtFQUNJLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUFSOztBQUlBO0VBQ0kscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQURKOztBQUlBO0VBQ0ksNEJBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBSUE7RUFtQkksZUFBQTtBQW5CSjs7QUFFUTtFQUNJLFlBQUE7QUFBWjs7QUFDWTs7RUFFSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQUNoQjs7QUFFUTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFBWjs7QUFJSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFNQTtFQUNJLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSwwQkFBQTtBQUhKIiwiZmlsZSI6Im5vdGFzLWNhcnRlcmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1taW5pIHtcclxuICAgIHBhZGRpbmc6IDRweCA2cHggMnB4IDZweCAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIG1pbi13aWR0aDogNHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWphLWJvdG9uZXMge1xyXG4gICAgcGFkZGluZzogM3B4IDlweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgICAuYnRuLXNtIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1kYXRhdGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnQtMTAge1xyXG4gICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRoZWFkIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgLmlucHV0LXNtLFxyXG4gICAgICAgICAgICAuaW5wdXQtc206Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJsYS1maWx0cm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mLTkge1xyXG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "IktM":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notas-carteras/notas-carteras.service.ts ***!
  \******************************************************************************************/
/*! exports provided: NotasCarterasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasCarterasService", function() { return NotasCarterasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotasCarterasService {
    constructor() {
        this.Utf8 = {
            // public method for url encoding
            encode: function (string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";
                for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    }
                    else if ((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                    else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                }
                return utftext;
            },
            // public method for url decoding
            decode: function (utftext) {
                var string = "";
                var i = 0;
                var c = 0;
                var c2 = 0;
                var c3 = 0;
                while (i < utftext.length) {
                    c = utftext.charCodeAt(i);
                    if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                    }
                    else if ((c > 191) && (c < 224)) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                        i += 2;
                    }
                    else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                        i += 3;
                    }
                }
                return string;
            }
        };
    }
    tabular(event, ele) {
        if (event.keyCode == 13) {
            setTimeout(() => {
                document.getElementById(ele).focus();
            }, 200);
        }
    }
}
NotasCarterasService.ɵfac = function NotasCarterasService_Factory(t) { return new (t || NotasCarterasService)(); };
NotasCarterasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotasCarterasService, factory: NotasCarterasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KlAU":
/*!******************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/egresos/egresos.component.ts ***!
  \******************************************************************************/
/*! exports provided: EgresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosComponent", function() { return EgresosComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "vdoh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var _centro_costos_centro_costos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../centro-costos/centro-costos.service */ "Ra2t");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! saturn-datepicker */ "nJc8");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/not-data/not-data.component */ "j80Y");






















const _c0 = ["modalNuevoComprobante"];
const _c1 = ["modalVerComprobante"];
const _c2 = ["alertSwal"];
function EgresosComponent_table_44_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No existen comprobantes de egresos para mostrar.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EgresosComponent_table_44_tr_29_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comprobante_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Estado);
} }
function EgresosComponent_table_44_tr_29_a_39_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EgresosComponent_table_44_tr_29_a_39_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const comprobante_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r19.IdDocumento = comprobante_r15.Id_Documento_Contable; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("swal", _r7);
} }
const _c3 = function (a0) { return { "bg-danger": a0 }; };
function EgresosComponent_table_44_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, EgresosComponent_table_44_tr_29_span_26_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Ver PCGA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Ver NIIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, EgresosComponent_table_44_tr_29_a_39_Template, 3, 1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comprobante_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](26, _c3, comprobante_r15.Estado == "Anulada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", comprobante_r15.Beneficiario, " - ", comprobante_r15.Tercero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Concepto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Cheques);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 18, comprobante_r15.Total_Debe_PCGA));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 20, comprobante_r15.Total_Haber_PCGA));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 22, comprobante_r15.Total_Debe_NIIF));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 24, comprobante_r15.Total_Haber_NIIF));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Funcionario);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comprobante_r15.Estado != "Anulada");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r14.enviromen.ruta, "/php/comprobantes/egreso_descarga_pdf.php?id=", comprobante_r15.Id_Documento_Contable, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r14.enviromen.ruta, "/php/comprobantes/egreso_descarga_pdf.php?id=", comprobante_r15.Id_Documento_Contable, "&tipo=Niif", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comprobante_r15.Estado != "Anulada" && ctx_r14.perfilUsuario == "27");
} }
function EgresosComponent_table_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Beneficiario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Concepto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cheques");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Total Debito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Total Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Total Debito NIIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Total Credito NIIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Funcionario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, EgresosComponent_table_44_tr_28_Template, 5, 0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, EgresosComponent_table_44_tr_29_Template, 40, 28, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.Comprobantes.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.Comprobantes);
} }
function EgresosComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ngb-pagination", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function EgresosComponent_div_45_Template_ngb_pagination_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.page = $event; })("pageChange", function EgresosComponent_div_45_Template_ngb_pagination_pageChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.filtros(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", ctx_r2.TotalItems)("page", ctx_r2.page)("maxSize", ctx_r2.maxSize)("pageSize", ctx_r2.pageSize)("rotate", true)("boundaryLinks", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("Mostrando del ", ctx_r2.InformacionPaginacion.desde, " al ", ctx_r2.InformacionPaginacion.hasta, " de ", ctx_r2.InformacionPaginacion.total, "");
} }
function EgresosComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-not-data", 57);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx_r4.Cargando);
} }
function EgresosComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r25 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r25.NombreProveedor);
} }
function EgresosComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r27 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", r_r27.Nombre, " ");
} }
function EgresosComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r29 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", r_r29.Codigo, " ");
} }
const _c4 = "/contabilidad/comprobantes/comprobanteegresovarioscrear";
const _c5 = function () { return [_c4]; };
class EgresosComponent {
    constructor(route, http, router, location, swalService, _company, _user, dateAdapter) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.location = location;
        this.swalService = swalService;
        this._company = _company;
        this._user = _user;
        this.dateAdapter = dateAdapter;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('es-CO');
        this.matPanel = false;
        this.fecha = new Date();
        this.Proveedores = [];
        this.Id_Proveedor = '';
        this.NombreProveedor = '';
        this.IdDocumento = '';
        this.Cargando = true;
        this.myDateRangePickerOptions = {
            width: '180px',
            height: '21px',
            selectBeginDateTxt: 'Inicio',
            selectEndDateTxt: 'Fin',
            selectionTxtFontSize: '10px',
            dateFormat: 'yyyy-mm-dd',
        };
        // private id_funcionario = JSON.parse(localStorage.getItem("User")).Identificacion_Funcionario;
        this.Clientes = [
            { Id_Cliente: 1, Nombre_Cliente: 'Kendry Ortiz' },
            { Id_Cliente: 2, Nombre_Cliente: 'Pedro Castillo' },
            { Id_Cliente: 3, Nombre_Cliente: 'Franklin Guerra' },
            { Id_Cliente: 4, Nombre_Cliente: 'Augusto Carrillo' },
        ];
        this.Bancos = [];
        this.FormaPago = [];
        this.Comprobantes = [];
        this.ComprobanteModel = {
            Nro_Referencia: '',
            Concepto: '',
            Fecha_Comprobante: '',
            Id_Cliente: 0,
            Id_Proveedor: '',
            Id_Forma_Pago: '',
            Monto: '',
            Id_Banco: '',
            Id_Cuenta_Acredita: 0,
            Id_Cuenta_Debita: 0,
            Observaciones: '',
            // Id_Funcionario: this.id_funcionario,
            Tipo: 'Egreso',
        };
        this.requiredParams = { tipo_comprobante: 'egreso' };
        this.Soporte = [];
        this.ClientesFiltrar = [];
        this.NombreCliente = '';
        this.CuentasActivos = [];
        this.CuentasPasivos = [];
        this.NombreCodigoCuenta = '';
        this.NombreCodigoCuenta2 = '';
        this.BancosFiltrar = [];
        this.FormasPagoFiltrar = [];
        this.Archivos = [];
        //Paginación
        this.maxSize = 5;
        this.pageSize = 20;
        this.page = 1;
        this.InformacionPaginacion = {
            desde: 0,
            hasta: 0,
            total: 0,
        };
        //Variables para filtros
        this.filtro_empresa = '';
        this.filtro_codigo = '';
        this.filtro_fecha = '';
        this.filtro_tipo = '';
        this.filtro_cliente = '';
        this.filtro_cheque = '';
        this.alertOption = {};
        this.perfilUsuario = localStorage.getItem('miPerfil');
        //ComprobanteVer
        this.Comprobante = {};
        this.filtro_estado = '';
        this.Id_Empresa = '';
        //BUSQUEDA CLIENTE
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.length < 4
            ? []
            : this.ClientesFiltrar.filter((v) => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter = (x) => x.Nombre;
        //BUSQUEDA CUENTAS ACTIVO
        this.searchCuenta = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.length < 4
            ? []
            : this.CuentasActivos.filter((v) => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatterCuenta = (x) => x.Codigo;
        //BUSQUEDA CUENTAS PASIVO
        this.searchCuentaP = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.length < 4
            ? []
            : this.CuentasPasivos.filter((v) => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatterCuentaP = (x) => x.Codigo;
        this.search2 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.length < 4
            ? []
            : this.Proveedores.filter((v) => v.NombreProveedor.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        this.formatter2 = (x) => x.NombreProveedor;
        this.normalize = (function () {
            var from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç', to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc', mapping = {};
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
        this.dateAdapter.setLocale('es');
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/proveedor_buscar.php')
            .subscribe((data) => {
            this.Proveedores = data;
        });
        this.alertOption = {
            title: '¿Está Seguro?',
            text: 'Se dispone a Anular este Documento',
            showCancelButton: true,
            cancelButtonText: 'No, Dejame Comprobar!',
            confirmButtonText: 'Si, Anular',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'warning',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.anularDocumento();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading(),
        };
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
        this.enviromen = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.ListarComprobantes();
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_proveedores.php')
            .subscribe((data) => {
            this.ClientesFiltrar = data;
        });
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php', {
            params: { company_id: this._user.user.person.company_worked.id },
        })
            .subscribe((data) => {
            this.CuentasActivos = data.Activo;
            this.CuentasPasivos = data.Pasivo;
        });
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_bancos.php')
            .subscribe((data) => {
            this.Bancos = data;
        });
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/formas_pago.php')
            .subscribe((data) => {
            this.FormaPago = data;
        });
        this.RecargarDatos();
        this.Id_Empresa = this._user.user.person.company_worked.id;
    }
    BuscarProveedor(modelo) {
        this.NombreProveedor = modelo.Proveedores;
        this.Id_Proveedor = modelo.Id_Proveedor;
    }
    AbrirModalNuevoComprobante() {
        this.modalNuevoComprobante.show();
    }
    ListarComprobantes() {
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_egresos.php', {
            params: { company_id: this._user.user.person.company_worked.id },
        })
            .subscribe((data) => {
            this.Cargando = false;
            this.Comprobantes = data.Lista;
            this.TotalItems = data.numReg;
        });
    }
    GuardarComprobante(formulario, modal) {
        let datos = new FormData();
        let data = this.normalize(JSON.stringify(this.ComprobanteModel));
        datos.append('Datos', data);
        datos.append('Archivo', this.Soporte);
        // console.log(data);
        //return;
        //this.Comprobantes.push(data);
        this.PeticionGuardarComprobante(datos);
        modal.hide();
        this.LimpiarModelo();
        setTimeout(() => {
            this.ListarComprobantes();
        }, 1000);
    }
    ShowSwal(tipo, titulo, msg) {
        this.alertSwal.icon = tipo;
        this.alertSwal.title = titulo;
        this.alertSwal.text = msg;
        this.alertSwal.fire();
    }
    ArmarComprobante(comprobanteObject) {
        let comprobante = {
            Codigo: comprobanteObject.Codigo,
            Concepto: comprobanteObject.Concepto,
            Fecha: comprobanteObject.Fecha,
            Cliente: comprobanteObject.Cliente,
            Forma_Pago: comprobanteObject.Forma_Pago,
            Valor: comprobanteObject.Valor,
            Banco: comprobanteObject.Banco,
        };
        return comprobante;
    }
    LimpiarModelo() {
        this.ComprobanteModel = {
            Nro_Referencia: '',
            Concepto: '',
            Fecha_Comprobante: '',
            Id_Cliente: '',
            Id_Forma_Pago: '',
            Monto: '',
            Id_Banco: '',
            Id_Cuenta_Acredita: 0,
            Id_Cuenta_Debita: 0,
            Observaciones: '',
            // Id_Funcionario: this.id_funcionario,
            Tipo: 'Egreso',
        };
        this.Soporte = [];
        this.NombreCliente = '';
        this.NombreCodigoCuenta = '';
        this.NombreCodigoCuenta2 = '';
    }
    CargaArchivo(event, i) {
        if (event.target.files.length === 1) {
            if (this.ComprobanteModel.Soporte[i] !== 'undefined') {
                this.ComprobanteModel.Soporte[i] = event.target.files[0];
            }
            else {
                this.ComprobanteModel.Soporte.push(event.target.files[0]);
            }
            // this.Soportes[i].NomArchivo = event.target.files[0].name;
        }
    }
    BuscarDatosCliente(proveedor) {
        this.ComprobanteModel.Id_Proveedor = proveedor.Id_Proveedor;
    }
    BuscarDatosBanco(banco) {
        this.ComprobanteModel.Id_Banco = banco.Id_Banco;
    }
    BuscarDatosFormasPago(formaPago) {
        this.ComprobanteModel.Id_Cliente = formaPago.Id_Forma_Pago;
    }
    BuscarDatosCuenta(cuenta, tipoCuenta) {
        if (tipoCuenta === 1) {
            this.ComprobanteModel.Id_Cuenta_Debita = cuenta.Id_Plan_Cuentas;
        }
        else {
            this.ComprobanteModel.Id_Cuenta_Acredita = cuenta.Id_Plan_Cuentas;
        }
    }
    PeticionGuardarComprobante(data) {
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/guardar_comprobante.php', data)
            .subscribe((data) => {
            this.ShowSwal(data.tipo, 'Registro Exitoso', data.msg);
        });
    }
    Archivo(event) {
        if (event.target.files.length === 1) {
            this.Soporte = event.target.files[0];
        }
    }
    SetInformacionPaginacion() {
        var calculoHasta = this.page * this.pageSize;
        var desde = calculoHasta - this.pageSize + 1;
        var hasta = calculoHasta > this.TotalItems ? this.TotalItems : calculoHasta;
        this.InformacionPaginacion['desde'] = desde;
        this.InformacionPaginacion['hasta'] = hasta;
        this.InformacionPaginacion['total'] = this.TotalItems;
    }
    //Setear filtros
    SetFiltros(paginacion = false) {
        let params = {};
        if (paginacion === true) {
            params.pag = this.page;
        }
        else {
            this.page = 1;
            params.pag = this.page;
        }
        if (this.filtro_cliente != '') {
            params.cli = this.filtro_cliente;
        }
        if (this.filtro_codigo != '') {
            params.cod = this.filtro_codigo;
        }
        if (this.filtro_empresa != '') {
            params.empresa = this.filtro_empresa;
        }
        if (this.filtro_fecha != null && this.filtro_fecha != '') {
            params.fecha = this.filtro_fecha;
        }
        if (this.filtro_cheque != '') {
            params.cheque = this.filtro_cheque;
        }
        if (this.filtro_estado != '') {
            params.est = this.filtro_estado;
        }
        let queryString = '?' +
            Object.keys(params)
                .map((key) => key + '=' + params[key])
                .join('&');
        return queryString;
    }
    //Aplicar filtros en la tabla
    filtros(paginacion = false) {
        this.Cargando = true;
        var params = this.SetFiltros(paginacion);
        this.location.replaceState('/contabilidad/comprobantes/egresos', params);
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_egresos.php', {
            params: {
                company_id: this._user.user.person.company_worked.id,
                params: params,
            },
        })
            .subscribe((data) => {
            this.Cargando = false;
            this.Comprobantes = data.Lista;
            this.TotalItems = data.numReg;
            this.SetInformacionPaginacion();
        });
    }
    RecargarDatos() {
        let urlParams = this.route.snapshot.queryParams;
        if (Object.keys(urlParams).length > 0) {
            // Si existe parametros o filtros
            // actualizando la variables con los valores de los paremetros.
            this.page = urlParams.pag ? urlParams.pag : 1;
            this.filtro_cliente = urlParams.cli ? urlParams.cli : '';
            this.filtro_codigo = urlParams.cod ? urlParams.cod : '';
            this.filtro_fecha = urlParams.fecha ? urlParams.fecha : '';
            this.filtro_tipo = urlParams.tipo ? urlParams.tipo : '';
            this.filtros(this.page > 1);
        }
        else {
            this.filtros();
        }
    }
    dateRangeChanged(event) {
        if (event.formatted != '') {
            this.filtro_fecha = event;
        }
        else {
            this.filtro_fecha = '';
        }
        this.filtros(true);
    }
    selectedDate(fecha) {
        this.filtro_fecha =
            this.datePipe.transform(fecha.value.begin._d, 'yyyy-MM-dd') +
                ' - ' +
                this.datePipe.transform(fecha.value.end._d, 'yyyy-MM-dd');
        this.filtros(true);
    }
    VerComprobante(id) {
        //this.modalVerComprobante.show();
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/detalle_comprobante.php', {
            params: { id: id },
        })
            .subscribe((data) => {
            this.Comprobante = data;
            this.modalVerComprobante.show();
        });
    }
    anularDocumento() {
        let datos = {
            Id_Registro: this.IdDocumento,
            Tipo: 'Egreso',
        };
        this.AnularDocumentoContable(datos).subscribe((data) => {
            let swal = {
                codigo: data.tipo,
                titulo: data.titulo,
                mensaje: data.mensaje,
            };
            this.swalService.ShowMessage(swal);
            this.ListarComprobantes();
        }, (error) => {
            let swal = {
                codigo: 'warning',
                titulo: 'Oops!',
                mensaje: 'Lamentablemente se ha perdido la conexión a internet. Por favor vuelve a intentarlo.',
            };
            this.swalService.ShowMessage(swal);
        });
    }
    AnularDocumentoContable(datos) {
        let info = JSON.stringify(datos);
        let data = new FormData();
        data.append('datos', info);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/anular_documento.php', data);
    }
}
EgresosComponent.ɵfac = function EgresosComponent_Factory(t) { return new (t || EgresosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_8__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_centro_costos_centro_costos_service__WEBPACK_IMPORTED_MODULE_9__["CentroCostosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](saturn_datepicker__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"])); };
EgresosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EgresosComponent, selectors: [["app-egresos"]], viewQuery: function EgresosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalNuevoComprobante = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalVerComprobante = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.alertSwal = _t.first);
    } }, decls: 58, vars: 14, consts: [[1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "text-primary"], [1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "btn", "btn-info", "btn-sm", 2, "float", "right", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "line"], ["multi", ""], [1, "mat-elevation-z0"], ["appearance", "outline", 1, "col-md-3", "pl-0"], ["matInput", "", "name", "daterange", "autocomplete", "off", "required", "", 3, "satDatepicker", "value", "dateChange", "dateInput"], [3, "rangeMode"], ["picker", ""], ["matSuffix", "", 3, "for"], ["appearance", "outline", 1, "col-md-2", "pl-0"], ["matInput", "", "type", "text", "placeholder", "Busca por documento", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "placeholder", "Busca por beneficiario", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "placeholder", "Busca por cheques", 3, "ngModel", "ngModelChange", "input"], ["appearance", "outline", 1, "col-md-2", "px-md-0"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], ["value", "Activo"], ["value", "Anulada"], ["class", "table table-bordered table-striped table-responsible-sm table-sm", "style", "font-size: small", 4, "ngIf", "ngIfElse"], ["id", "paginacion-container", 4, "ngIf"], ["notData", ""], ["rt2", ""], [3, "swalOptions"], ["confirmacionAnular", ""], ["title", "", "html", "", "type", ""], ["alertSwal", ""], ["rt", ""], ["rtCuenta", ""], [1, "table", "table-bordered", "table-striped", "table-responsible-sm", "table-sm", 2, "font-size", "small"], ["class", "text-center", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-center"], ["colspan", "12", 1, "text-center"], [1, "fa", "fa-exclamation-circle", "fa-5x"], [3, "ngClass"], ["width", "60"], ["class", "label label-success", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "btn-mini", "waves-effect", "waves-light"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", ""], ["target", "_blank", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "fa", "fa-print"], ["class", "dropdown-item waves-light waves-effect caja-botones bg-danger", "href", "javascript:;", 3, "swal", "click", 4, "ngIf"], [1, "label", "label-success"], ["href", "javascript:;", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", "bg-danger", 3, "swal", "click"], [1, "fa", "fa-close"], ["id", "paginacion-container"], ["size", "sm", 1, "d-flex", "justify-content-center", "pagination-rounded", "pagination-sm", 3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "boundaryLinks", "pageChange"], [3, "loading"], [1, "f-9"]], template: function EgresosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Comprobantes de Egresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EgresosComponent_Template_button_click_9_listener() { return ctx.openClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-accordion", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Rango de fechas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function EgresosComponent_Template_input_dateChange_18_listener($event) { return ctx.selectedDate($event); })("dateInput", function EgresosComponent_Template_input_dateInput_18_listener($event) { return ctx.selectedDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "sat-datepicker", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "sat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EgresosComponent_Template_input_ngModelChange_25_listener($event) { return ctx.filtro_codigo = $event; })("input", function EgresosComponent_Template_input_input_25_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Beneficiario");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EgresosComponent_Template_input_ngModelChange_29_listener($event) { return ctx.filtro_cliente = $event; })("input", function EgresosComponent_Template_input_input_29_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Cheques");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EgresosComponent_Template_input_ngModelChange_33_listener($event) { return ctx.filtro_cheque = $event; })("input", function EgresosComponent_Template_input_input_33_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EgresosComponent_Template_mat_select_ngModelChange_37_listener($event) { return ctx.filtro_estado = $event; })("selectionChange", function EgresosComponent_Template_mat_select_selectionChange_37_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Activas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Anuladas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, EgresosComponent_table_44_Template, 30, 2, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, EgresosComponent_div_45_Template, 5, 9, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, EgresosComponent_ng_template_46_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, EgresosComponent_ng_template_48_Template, 3, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "swal", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "swal", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, EgresosComponent_ng_template_54_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, EgresosComponent_ng_template_56_Template, 2, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("satDatepicker", _r0)("value", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filtro_codigo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filtro_cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filtro_cheque);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filtro_estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.Cargando && ctx.Comprobantes.length > 0)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Comprobantes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_11__["SatDatepickerInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_11__["SatDatepicker"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_11__["SatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_18__["SwalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbDropdownMenu"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_18__["SwalDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbPagination"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_20__["NotDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVncmVzb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBIiwiZmlsZSI6ImVncmVzb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYnRuLW1pbmkge1xyXG4gICAgcGFkZGluZzogNHB4IDZweCAycHggNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWluLXdpZHRoOiA0cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhamEtYm90b25lcyB7XHJcbiAgICBwYWRkaW5nOiAzcHggOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIHtcclxuICAgIC5idG4tc20ge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweCFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmd4LWRhdGF0YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udC0xMCB7XHJcbiAgICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAuaW5wdXQtc20sXHJcbiAgICAgICAgICAgIC5pbnB1dC1zbTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxhLWZpbHRybyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnZvaWNlLWNvbnRhY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTM5cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmYtOSB7XHJcbiAgICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xyXG59ICovIl19 */"] });


/***/ }),

/***/ "Kz+M":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notascredito/notascreditover/notascreditover.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NotascreditoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotascreditoverComponent", function() { return NotascreditoverComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globales */ "Dgt4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["confirmacionSwal"];
function NotascreditoverComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Ver contabilizaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("href", "", ctx_r1.enviromen.ruta, "php/contabilidad/movimientoscontables/movimientos_nota_credito_global_pdf.php?id_registro=", ctx_r1.Datos.Id_Nota_Credito_Global, "&id_funcionario_elabora=", ctx_r1.user.Identificacion_Funcionario, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function NotascreditoverComponent_tbody_82_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "fila", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.Nombre_Producto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.Motivo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.Observacion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, item_r4.Impuesto), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, item_r4.Total_Impuesto), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, item_r4.Valor_Nota_Credito), " ");
} }
function NotascreditoverComponent_tbody_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NotascreditoverComponent_tbody_82_tr_1_Template, 16, 13, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.Lista_Productos);
} }
const _c1 = function () { return ["/contabilidad/comprobantes/notas-credito"]; };
class NotascreditoverComponent {
    constructor(route, http, globales, router) {
        this.route = route;
        this.http = http;
        this.globales = globales;
        this.router = router;
        this.idNotaCredito = this.route.snapshot.params["id"];
        this.Datos = {
            Factura: '',
            Cliente: '',
        };
        this.Lista_Productos = [];
        this.perfilUsuario = localStorage.getItem('miPerfil');
        this.reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Valor_Nota_Credito);
        this.reducerImpuesto = (accumulador, currentValue) => accumulador + parseFloat(currentValue.Total_Impuesto);
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/notas_credito_nuevo/get_nota_credito.php', { params: { id_nota_credito: this.idNotaCredito } }).subscribe((data) => {
            this.Datos = data.Nota_Credito;
            this.Lista_Productos = data.Productos_Nota;
            this.Total = this.Lista_Productos.reduce(this.reducer, 0);
            this.TotalImpuesto = this.Lista_Productos.reduce(this.reducerImpuesto, 0);
        });
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.User);
        this.enviromen = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"];
    }
}
NotascreditoverComponent.ɵfac = function NotascreditoverComponent_Factory(t) { return new (t || NotascreditoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_globales__WEBPACK_IMPORTED_MODULE_4__["Globales"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotascreditoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotascreditoverComponent, selectors: [["app-notascreditover"]], viewQuery: function NotascreditoverComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
    } }, decls: 103, vars: 27, consts: [[1, "page-body"], [1, "row", "d-flex", "justify-content-center"], [1, "col-10"], ["FormNotaCredito", "ngForm"], [1, "card"], [1, "row", "invoice-contact", 2, "align-items", "flex-start !important"], [1, "col-md-8"], [1, "invoice-box", "row"], [1, "col-sm-12"], [1, "table", "table-responsive", "invoice-table", "table-borderless"], [2, "width", "100px"], ["alt", "Pro-H Software", 1, "m-b-10", "img-60", 3, "src"], [1, "col-md-4"], [1, "row", "text-right", 2, "margin", "0"], [1, "card-body"], [1, "row"], ["style", "margin-bottom: 40px;", 4, "ngIf"], [1, "table", "invoice-detail-table", "tabla"], [1, "thead-default"], [1, "row", "m-0"], [1, "col-md-12", "ver"], [1, "row", 2, "margin-top", "30px"], [1, "table-responsive"], [1, "table", "invoice-detail-table", "space"], [2, "width", "40px"], [2, "width", "20px"], [4, "ngIf"], [1, "table", "table-responsive", "invoice-table", "invoice-total", "space"], [2, "font-weight", "bold", "margin-bottom", "15px"], [2, "font-weight", "bold"], [1, "col-md-2"], ["href", "", "type", "button", 1, "btn", "btn-success", "btn-block", "btn-enviar", 3, "routerLink"], [2, "margin-bottom", "40px"], ["target", "_blank", 1, "btn", "btn-outline-primary", "btn-sm", "pull-right", 3, "href"], [1, "fa", "fa-book"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "text-left"], [1, "text-center"], [1, "text-right"]], template: function NotascreditoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Nota Cr\u00E9dito");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, NotascreditoverComponent_div_36_Template, 4, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Fecha Factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Motivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Impuesto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "T.Impuesto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Valor Nota Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, NotascreditoverComponent_tbody_82_Template, 2, 1, "tbody", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "(=) Total Impuesto :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](92, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "(=) Total :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " Volver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.enviromen.urlLogoColor, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.enviromen.Nombre, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.enviromen.Nit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.enviromen.Direccion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.enviromen.Telefono, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.Datos.Codigo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 16, ctx.Datos.Fecha, "dd/MM/yy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.perfilUsuario == "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.Datos.Cliente.Nombre_Cliente, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.Datos.Factura.Codigo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](57, 19, ctx.Datos.Factura.Fecha_Documento, "dd/MM/yy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Datos.Observaciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Lista_Productos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](92, 22, ctx.TotalImpuesto));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 24, ctx.Total));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rhc2NyZWRpdG92ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Nl1k":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notas-contables/notas-contables.service.ts ***!
  \********************************************************************************************/
/*! exports provided: NotasContablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasContablesService", function() { return NotasContablesService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NotasContablesService {
    constructor(http) {
        this.http = http;
    }
    getCenterCost() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base_url}/center_cost`);
    }
    getThirdParties() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base_url}/third-parties-list`);
    }
    tabular(event, ele) {
        if (event.keyCode == 13) {
            setTimeout(() => {
                document.getElementById(ele).focus();
            }, 200);
        }
    }
}
NotasContablesService.ɵfac = function NotasContablesService_Factory(t) { return new (t || NotasContablesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NotasContablesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotasContablesService, factory: NotasContablesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eAy/":
/*!********************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/ingresos/ingresos.component.ts ***!
  \********************************************************************************/
/*! exports provided: IngresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresosComponent", function() { return IngresosComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "vdoh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! saturn-datepicker */ "nJc8");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/not-data/not-data.component */ "j80Y");





















const _c0 = ["modalNuevoComprobante"];
const _c1 = ["modalVerComprobante"];
const _c2 = ["alertSwal"];
const _c3 = ["confirmacionSwal"];
function IngresosComponent_table_40_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No Existen Comprobantes de Igresos para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function IngresosComponent_table_40_tr_19_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comprobante_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Estado);
} }
function IngresosComponent_table_40_tr_19_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IngresosComponent_table_40_tr_19_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const comprobante_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r19.IdDocumento = comprobante_r15.Id_Comprobante; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("swal", _r12);
} }
const _c4 = function (a0) { return { "bg-danger": a0 }; };
function IngresosComponent_table_40_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, IngresosComponent_table_40_tr_19_span_13_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Acciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Contab. PCGA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Contab. NIIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, IngresosComponent_table_40_tr_19_a_29_Template, 3, 1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comprobante_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c4, comprobante_r15.Estado == "Anulada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Concepto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 16, comprobante_r15.Fecha_Comprobante, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Cliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comprobante_r15.Forma_Pago);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comprobante_r15.Estado != "Anulada");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r14.envirom.ruta, "php/comprobantes/comprobantes_pdf.php?id=", comprobante_r15.Id_Comprobante, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate3"]("href", "", ctx_r14.envirom.ruta, "php/contabilidad/movimientoscontables/movimientos_comprobante_pdf.php?id_registro=", comprobante_r15.Id_Comprobante, "&id_funcionario_elabora=", 1, "&tipo=Ingreso", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate3"]("href", "", ctx_r14.envirom.ruta, "php/contabilidad/movimientoscontables/movimientos_comprobante_pdf.php?id_registro=", comprobante_r15.Id_Comprobante, "&id_funcionario_elabora=", 1, "&tipo=Ingreso&tipo_valor=Niif", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comprobante_r15.Estado != "Anulada" && ctx_r14.perfilUsuario == "27");
} }
function IngresosComponent_table_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Concepto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Tipo Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, IngresosComponent_table_40_tr_18_Template, 5, 0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, IngresosComponent_table_40_tr_19_Template, 30, 21, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.Comprobantes.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.Comprobantes);
} }
function IngresosComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", ctx_r2.page * 30 - 30 + 1, " al ", ctx_r2.page * 30 > ctx_r2.TotalItems ? ctx_r2.TotalItems : ctx_r2.page * 30, " de ", ctx_r2.TotalItems, " ");
} }
function IngresosComponent_ngb_pagination_42_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngb-pagination", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function IngresosComponent_ngb_pagination_42_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.page = $event; })("pageChange", function IngresosComponent_ngb_pagination_42_Template_ngb_pagination_pageChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.filtros(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rotate", true)("collectionSize", ctx_r3.TotalItems)("page", ctx_r3.page)("maxSize", ctx_r3.maxSize)("pageSize", 30)("rotate", true)("boundaryLinks", true);
} }
function IngresosComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-not-data", 55);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx_r5.Cargando);
} }
function IngresosComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r25 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", r_r25.Nombre, " ");
} }
function IngresosComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r27 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", r_r27.Codigo, " ");
} }
const _c5 = "/contabilidad/comprobantes/comprobanteingresocrear";
const _c6 = function () { return [_c5]; };
class IngresosComponent {
    constructor(http, route, location, swalService, _user, dateAdapter) {
        this.http = http;
        this.route = route;
        this.location = location;
        this.swalService = swalService;
        this._user = _user;
        this.dateAdapter = dateAdapter;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('es-CO');
        this.matPanel = false;
        this.Cargando = true;
        this.myDateRangePickerOptions = {
            width: '180px',
            height: '21px',
            selectBeginDateTxt: 'Inicio',
            selectEndDateTxt: 'Fin',
            selectionTxtFontSize: '10px',
            dateFormat: 'yyyy-mm-dd',
        };
        this.Archivos = [];
        this.Clientes = [
            { Id_Cliente: 1, Nombre_Cliente: 'Kendry Ortiz' },
            { Id_Cliente: 2, Nombre_Cliente: 'Pedro Castillo' },
            { Id_Cliente: 3, Nombre_Cliente: 'Franklin Guerra' },
            { Id_Cliente: 4, Nombre_Cliente: 'Augusto Carrillo' },
        ];
        this.Bancos = [];
        this.FormaPago = [];
        this.Comprobantes = [];
        this.CuentasContables = [
            { id_Cuenta: 1, Nro_Cuenta: '12546328' },
            { id_Cuenta: 2, Nro_Cuenta: '6591316' },
            { id_Cuenta: 3, Nro_Cuenta: '516135468' },
        ];
        this.ComprobanteModel = {
            Codigo: '',
            Concepto: '',
            Fecha: '',
            Cliente: '',
            Forma_Pago: '',
            Valor: '',
            Banco: '',
            Soporte: 'CuentasContables',
        };
        this.Cliente = [];
        this.Cuenta = [];
        this.Cuenta_Pasivos = [];
        this.Id_Cliente = '';
        this.Nom_Cliente = '';
        this.Cuenta_Deb = '';
        this.Cuenta_Acred = '';
        this.Id_Cuenta_Acredita = '';
        this.Id_Cuenta_Debita = '';
        this.Tipo = 'Ingreso';
        this.boolVal = false;
        this.Funcionario = JSON.parse(localStorage.getItem('User'));
        this.perfilUsuario = localStorage.getItem('miPerfil');
        this.Comprobante = {};
        this.filtro_cod = '';
        this.filtro_cli = '';
        this.filtro_tipo = '';
        this.filtro_fecha = '';
        this.page = 1;
        this.maxSize = 10;
        this.IdDocumento = '';
        this.Id_Empresa = '';
        this.filtro = {
            codigo: '',
            fechas: '',
            cliente: '',
            estado: '',
        };
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.length < 4
            ? []
            : this.Cliente.filter((v) => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter = (x) => x.Nombre;
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.length < 4
            ? []
            : this.Cuenta.filter((v) => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter1 = (x) => x.Codigo;
        this.search2 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((term) => term.length < 4
            ? []
            : this.Cuenta_Pasivos.filter((v) => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter2 = (x) => x.Codigo;
        this.normalize = (function () {
            var from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç', to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc', mapping = {};
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
        this.dateAdapter.setLocale('es');
        this.ListarComprobantes();
        this.alertOption = {
            title: '¿Está Seguro?',
            text: 'Se dispone a Anular este Documento',
            showCancelButton: true,
            cancelButtonText: 'No, Dejame Comprobar!',
            confirmButtonText: 'Si, Anular',
            showLoaderOnConfirm: true,
            focusCancel: true,
            // type: 'warning',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.anularDocumento();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading(),
        };
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
        this.envirom = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cliente.php')
            .subscribe((data) => {
            this.Cliente = data;
        });
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php', {
            params: { company_id: this._user.user.person.company_worked.id },
        })
            .subscribe((data) => {
            this.Cuenta = data.Activo;
            this.Cuenta_Pasivos = data.Pasivo;
        });
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_bancos.php')
            .subscribe((data) => {
            this.Bancos = data;
        });
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/formas_pago.php')
            .subscribe((data) => {
            this.FormaPago = data;
        });
    }
    ListarComprobantes() {
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_comprobantes.php', {
            params: {
                tipo_comprobante: 'ingreso',
                company_id: this._user.user.person.company_worked.id,
            },
        })
            .subscribe((data) => {
            this.Comprobantes = data.Lista;
            this.Cargando = false;
            console.log(this.Comprobantes);
            this.TotalItems = data.numReg;
        });
    }
    dateRangeChanged(event) {
        if (event.formatted != '') {
            this.filtro.fechas = event.formatted;
        }
        else {
            this.filtro.fechas = '';
        }
        setTimeout(() => {
            this.filtros();
        }, 100);
    }
    selectedDate(fecha) {
        this.filtro.fechas =
            this.datePipe.transform(fecha.value.begin._d, 'yyyy-MM-dd') +
                ' - ' +
                this.datePipe.transform(fecha.value.end._d, 'yyyy-MM-dd');
        this.filtros();
    }
    pagination() {
        let queryString = this.getQueryString(true);
        this.location.replaceState('/comprobante/ingresos', queryString);
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta +
            'php/comprobantes/lista_comprobantes.php' +
            queryString)
            .subscribe((data) => {
            this.Comprobantes = data.Lista;
            this.TotalItems = data.numReg;
        });
    }
    AbrirModalNuevoComprobante() {
        this.modalNuevoComprobante.show();
    }
    filtros(pagination = false) {
        this.Cargando = true;
        let queryString = this.getQueryString(pagination);
        this.location.replaceState('/comprobantes/ingresos', queryString);
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta +
            'php/comprobantes/lista_comprobantes.php' +
            queryString)
            .subscribe((data) => {
            this.Comprobantes = data.Lista;
            this.Cargando = false;
            this.TotalItems = data.numReg;
        });
    }
    getQueryString(pagination = false) {
        let params = {
            tipo_comprobante: 'ingreso',
        };
        let queryString = '';
        if (!pagination) {
            this.page = 1;
        }
        params.pag = this.page;
        if (this.filtro.cliente != '') {
            params.cli = this.filtro.cliente;
        }
        if (this.filtro.fechas != '') {
            params.fecha = this.filtro.fechas;
        }
        if (this.filtro.codigo != '') {
            params.cod = this.filtro.codigo;
        }
        if (this.filtro.estado != '') {
            params.est = this.filtro.estado;
        }
        queryString =
            '?' +
                Object.keys(params)
                    .map((key) => key + '=' + params[key])
                    .join('&');
        return queryString;
    }
    Archivo(event) {
        if (event.target.files.length === 1) {
            this.Soporte = event.target.files[0];
        }
    }
    GuardarComprobante(formulario, modal) {
        let datos = new FormData();
        let info = this.normalize(JSON.stringify(formulario.value));
        datos.append('Datos', info);
        datos.append('Archivo', this.Soporte);
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/guardar_comprobante.php', datos)
            .subscribe((data) => {
            this.confirmacionSwal.title = 'Operación Exitosa';
            this.confirmacionSwal.html = data.mensaje;
            this.confirmacionSwal.type = data.tipo;
            this.confirmacionSwal.show();
            formulario.reset();
            this.ListarComprobantes();
        });
    }
    ShowSwal(tipo, titulo, msg) {
        this.alertSwal.type = tipo;
        this.alertSwal.title = titulo;
        this.alertSwal.text = msg;
        this.alertSwal.show();
    }
    ArmarComprobante(comprobanteObject) {
        let comprobante = {
            Codigo: comprobanteObject.Codigo,
            Concepto: comprobanteObject.Concepto,
            Fecha: comprobanteObject.Fecha,
            Cliente: comprobanteObject.Cliente,
            Forma_Pago: comprobanteObject.Forma_Pago,
            Valor: comprobanteObject.Valor,
            Banco: comprobanteObject.Banco,
        };
        return comprobante;
    }
    LimpiarModelo() {
        this.ComprobanteModel = {
            Codigo: '',
            Concepto: '',
            Fecha: '',
            Cliente: '',
            Forma_Pago: '',
            Valor: '',
            Banco: '',
            Cuenta_Debita: '',
            Cuenta_Acredita: '',
        };
    }
    MostrarBanco() {
        // console.log(this.ComprobanteModel.Forma_Pago);
        if (this.ComprobanteModel.Forma_Pago == '4' ||
            this.ComprobanteModel.Forma_Pago == '') {
            this.boolVal = false;
        }
        else {
            this.boolVal = true;
        }
    }
    CargaArchivo(event, i) {
        if (event.target.files.length === 1) {
            if (this.Archivos[i] !== 'undefined') {
                this.Archivos[i] = event.target.files[0];
            }
            else {
                this.Archivos.push(event.target.files[0]);
            }
            // this.Soportes[i].NomArchivo = event.target.files[0].name;
        }
    }
    BuscarDatosCliente(cliente) {
        this.Id_Cliente = cliente.Id_Cliente;
    }
    BuscarCuenta(cuenta, tipo) {
        switch (tipo) {
            case 'Credita':
                this.Id_Cuenta_Acredita = cuenta.Id_Plan_Cuentas;
                break;
            case 'Debita':
                this.Id_Cuenta_Debita = cuenta.Id_Plan_Cuentas;
                break;
        }
    }
    VerComprobante(id) {
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/detalle_comprobante.php', {
            params: { id: id },
        })
            .subscribe((data) => {
            this.Comprobante = data;
            this.modalVerComprobante.show();
        });
    }
    anularDocumento() {
        let datos = {
            Id_Registro: this.IdDocumento,
            Tipo: 'Recibos_Caja',
        };
        this.AnularDocumentoContable(datos).subscribe((data) => {
            let swal = {
                codigo: data.tipo,
                titulo: data.titulo,
                mensaje: data.mensaje,
            };
            this.swalService.ShowMessage(swal);
            this.ListarComprobantes();
        }, (error) => {
            let swal = {
                codigo: 'warning',
                titulo: 'Oops!',
                mensaje: 'Lamentablemente se ha perdido la conexión a internet. Por favor vuelve a intentarlo.',
            };
            this.swalService.ShowMessage(swal);
        });
    }
    AnularDocumentoContable(datos) {
        let info = JSON.stringify(datos);
        let data = new FormData();
        data.append('datos', info);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/anular_documento.php', data);
    }
}
IngresosComponent.ɵfac = function IngresosComponent_Factory(t) { return new (t || IngresosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_8__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"])); };
IngresosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: IngresosComponent, selectors: [["app-ingresos"]], viewQuery: function IngresosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalNuevoComprobante = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalVerComprobante = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.alertSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
    } }, decls: 55, vars: 14, consts: [[1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "text-primary"], [1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "btn", "btn-info", "btn-sm", 2, "float", "right", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "line"], ["multi", ""], [1, "mat-elevation-z0"], ["appearance", "outline", 1, "col-md-3", "pl-0"], ["matInput", "", "name", "daterange", "autocomplete", "off", "required", "", 3, "satDatepicker", "value", "dateChange", "dateInput"], [3, "rangeMode"], ["picker", ""], ["matSuffix", "", 3, "for"], ["appearance", "outline", 1, "col-md-2"], ["matInput", "", "type", "text", "placeholder", "Buscar por c\u00F3digo", 3, "ngModel", "ngModelChange", "input"], ["appearance", "outline", 1, "col-md-3"], ["matInput", "", "type", "text", "placeholder", "Buscar por cliente", 3, "ngModel", "ngModelChange", "input"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], ["value", "Activa"], ["value", "Anulada"], ["class", "table table-bordered table-striped table-responsive-sm table-sm", "style", "font-size: small", 4, "ngIf", "ngIfElse"], ["class", "text-center", 4, "ngIf"], ["class", "d-flex justify-content-center pagination-rounded pagination-sm", "size", "sm", 3, "rotate", "collectionSize", "page", "maxSize", "pageSize", "boundaryLinks", "pageChange", 4, "ngIf"], ["notData", ""], ["title", "", "html", "", "type", ""], ["alertSwal", ""], ["rt", ""], ["rt1", ""], ["confirmacionSwal", ""], [3, "swalOptions"], ["confirmacionAnular", ""], [1, "table", "table-bordered", "table-striped", "table-responsive-sm", "table-sm", 2, "font-size", "small"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-center"], ["colspan", "7", 1, "text-center"], [1, "fa", "fa-exclamation-circle", "fa-5x"], [3, "ngClass"], ["width", "60"], ["class", "label label-success", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "btn-mini", "waves-effect", "waves-light"], ["ngbDropdownMenu", ""], ["target", "_blank", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "fa", "fa-eye"], [1, "fa", "fa-book"], ["class", "dropdown-item waves-light waves-effect caja-botones bg-danger", "href", "javascript:;", 3, "swal", "click", 4, "ngIf"], [1, "label", "label-success"], ["href", "javascript:;", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", "bg-danger", 3, "swal", "click"], [1, "fa", "fa-close"], ["size", "sm", 1, "d-flex", "justify-content-center", "pagination-rounded", "pagination-sm", 3, "rotate", "collectionSize", "page", "maxSize", "pageSize", "boundaryLinks", "pageChange"], [3, "loading"], [1, "f-9"]], template: function IngresosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Comprobantes de Ingresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function IngresosComponent_Template_button_click_9_listener() { return ctx.openClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-accordion", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Rango de fechas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function IngresosComponent_Template_input_dateChange_18_listener($event) { return ctx.selectedDate($event); })("dateInput", function IngresosComponent_Template_input_dateInput_18_listener($event) { return ctx.selectedDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "sat-datepicker", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "sat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function IngresosComponent_Template_input_ngModelChange_25_listener($event) { return ctx.filtro.codigo = $event; })("input", function IngresosComponent_Template_input_input_25_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function IngresosComponent_Template_input_ngModelChange_29_listener($event) { return ctx.filtro.cliente = $event; })("input", function IngresosComponent_Template_input_input_29_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function IngresosComponent_Template_mat_select_ngModelChange_33_listener($event) { return ctx.filtro.estado = $event; })("selectionChange", function IngresosComponent_Template_mat_select_selectionChange_33_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Activas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Anuladas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, IngresosComponent_table_40_Template, 20, 2, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, IngresosComponent_div_41_Template, 2, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, IngresosComponent_ngb_pagination_42_Template, 1, 7, "ngb-pagination", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, IngresosComponent_ng_template_43_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "swal", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, IngresosComponent_ng_template_47_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, IngresosComponent_ng_template_49_Template, 2, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "swal", 29, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "swal", 34, 35);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("satDatepicker", _r0)("value", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filtro.codigo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filtro.cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filtro.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.Cargando && ctx.Comprobantes.length > 0)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Comprobantes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Comprobantes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__["SatDatepickerInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__["SatDatepicker"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__["SatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_17__["SwalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDropdownMenu"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_17__["SwalDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbPagination"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_19__["NotDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGluZ3Jlc29zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBIiwiZmlsZSI6ImluZ3Jlc29zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmJ0bi1taW5pIHtcclxuICAgIHBhZGRpbmc6IDRweCA2cHggMnB4IDZweCAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIG1pbi13aWR0aDogNHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWphLWJvdG9uZXMge1xyXG4gICAgcGFkZGluZzogM3B4IDlweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgICAuYnRuLXNtIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1kYXRhdGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnQtMTAge1xyXG4gICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRoZWFkIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgLmlucHV0LXNtLFxyXG4gICAgICAgICAgICAuaW5wdXQtc206Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJsYS1maWx0cm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mLTkge1xyXG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSAqLyJdfQ== */"] });


/***/ }),

/***/ "llSQ":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notas-contables/crear-nota-contable/crear-nota-contable.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CrearNotaContableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearNotaContableComponent", function() { return CrearNotaContableComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _notas_contables_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notas-contables.service */ "Nl1k");
/* harmony import */ var _cierres_contables_cierrecontable_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../cierres-contables/cierrecontable.service */ "Yc0I");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _borradorcomprobantes_borradorcomprobantes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../borradorcomprobantes/borradorcomprobantes.component */ "xAB+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
















const _c0 = ["FormNotaContable"];
const _c1 = ["cuentasF"];
const _c2 = ["confirmacionSwal"];
function CrearNotaContableComponent_div_44_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No Existen Facturas para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrearNotaContableComponent_div_44_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CrearNotaContableComponent_div_44_tr_31_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const item_r15 = ctx.$implicit; const i_r16 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.addListInvoice(item_r15, i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_div_44_tr_31_Template_input_ngModelChange_19_listener($event) { const item_r15 = ctx.$implicit; return item_r15.Abono = $event; })("blur", function CrearNotaContableComponent_div_44_tr_31_Template_input_blur_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const i_r16 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r20.armarDatosBorrador(); return ctx_r20.validarSaldoFactura(i_r16, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Factura", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Factura", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r15.Fecha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r15.Factura, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 15, item_r15.Valor_Factura), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 17, item_r15.Valor_Abono), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 19, item_r15.Valor_Saldo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "abono", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "abono", i_r16, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r15.Abono);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r15.Nat, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 21, item_r15.Movimiento_Debito), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 23, item_r15.Movimiento_Credito), " ");
} }
function CrearNotaContableComponent_div_44_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r14.Total_Abono), "");
} }
function CrearNotaContableComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Facturas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Vlr. Factura ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Vlr. Abono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Vlr. Saldo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Abono");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Nat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Movimiento Debito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Movimiento_Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CrearNotaContableComponent_div_44_tr_30_Template, 5, 0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CrearNotaContableComponent_div_44_tr_31_Template, 28, 25, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CrearNotaContableComponent_div_44_tr_32_Template, 7, 3, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearNotaContableComponent_div_44_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.addInvoicesToAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.Lista_Facturas.length == 0 && !ctx_r1.Cargando);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.Lista_Facturas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.Lista_Facturas.length > 0);
} }
function CrearNotaContableComponent_div_46_tr_36_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Cuenta = $event; })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_2_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const item_r24 = ctx_r52.$implicit; const i_r25 = ctx_r52.index; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r51.BuscarCuenta(item_r24.Cuenta, i_r25); })("keyup", function CrearNotaContableComponent_div_46_tr_36_input_2_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r53.tab($event, "Nit" + i_r25); })("blur", function CrearNotaContableComponent_div_46_tr_36_input_2_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r55.armarDatosBorrador(); return ctx_r55.validarCampo(item_r24.Cuenta, $event, "Cuenta"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r57.index;
    const item_r24 = ctx_r57.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Cuenta", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Cuenta)("ngbTypeahead", ctx_r26.search1)("resultTemplate", _r8)("inputFormatter", ctx_r26.formatter1)("required", ctx_r26.Cuentas_Contables.length - 1 != i_r25);
} }
function CrearNotaContableComponent_div_46_tr_36_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r24.Cuenta.Nombre, " ");
} }
function CrearNotaContableComponent_div_46_tr_36_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_5_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Nit = $event; })("keyup", function CrearNotaContableComponent_div_46_tr_36_input_5_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r62.tab($event, "Centro_Costo" + i_r25); })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_5_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const item_r24 = ctx_r65.$implicit; const i_r25 = ctx_r65.index; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r64.BuscarDatosCliente(item_r24.Nit, i_r25); })("blur", function CrearNotaContableComponent_div_46_tr_36_input_5_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r66.armarDatosBorrador(); return ctx_r66.validarCampo(item_r24.Nit, $event, "Nit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r68.index;
    const item_r24 = ctx_r68.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Nit", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Nit", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Nit)("ngbTypeahead", ctx_r28.search)("resultTemplate", _r4)("inputFormatter", ctx_r28.formatter);
} }
function CrearNotaContableComponent_div_46_tr_36_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r24.Nit.Nombre, " ");
} }
function CrearNotaContableComponent_div_46_tr_36_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_8_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r72); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Centro_Costo = $event; })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_8_Template_input_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r72); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const item_r24 = ctx_r74.$implicit; const i_r25 = ctx_r74.index; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r73.BuscarDatosCentro(item_r24.Centro_Costo, i_r25); })("keyup", function CrearNotaContableComponent_div_46_tr_36_input_8_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r72); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r75.tab($event, "Documento" + i_r25); })("blur", function CrearNotaContableComponent_div_46_tr_36_input_8_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r72); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r77.armarDatosBorrador(); return ctx_r77.validarCampo(item_r24.Centro_Costo, $event, "Centro de Costo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r79.index;
    const item_r24 = ctx_r79.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Centro_Costo", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Centro_Costo", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Centro_Costo)("ngbTypeahead", ctx_r30.search2)("resultTemplate", _r10)("inputFormatter", ctx_r30.formatter2);
} }
function CrearNotaContableComponent_div_46_tr_36_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r24.Centro_Costo.Nombre);
} }
function CrearNotaContableComponent_div_46_tr_36_input_11_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_div_46_tr_36_input_11_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r83); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r81.tab($event, "Concepto" + i_r25); })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_11_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r83); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Documento = $event; })("blur", function CrearNotaContableComponent_div_46_tr_36_input_11_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r83); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r86.armarDatosBorrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r87.index;
    const item_r24 = ctx_r87.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Documento", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Documento", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Documento);
} }
function CrearNotaContableComponent_div_46_tr_36_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearNotaContableComponent_div_46_tr_36_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const item_r24 = ctx_r89.$implicit; const i_r25 = ctx_r89.index; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r88.showFacturas(item_r24.Nit_Cuenta, i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrearNotaContableComponent_div_46_tr_36_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r24.Documento, " ");
} }
function CrearNotaContableComponent_div_46_tr_36_input_15_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_div_46_tr_36_input_15_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r94); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r92.tab($event, "Base" + i_r25); })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_15_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r94); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Concepto = $event; })("blur", function CrearNotaContableComponent_div_46_tr_36_input_15_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r94); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r97.armarDatosBorrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r98.index;
    const item_r24 = ctx_r98.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Concepto", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Concepto", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Concepto);
} }
function CrearNotaContableComponent_div_46_tr_36_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r24.Concepto);
} }
function CrearNotaContableComponent_div_46_tr_36_input_18_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_div_46_tr_36_input_18_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r102); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r100.tab($event, "Debito" + i_r25); })("change", function CrearNotaContableComponent_div_46_tr_36_input_18_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r102); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r103.calcularBase(i_r25, $event.target.value); })("blur", function CrearNotaContableComponent_div_46_tr_36_input_18_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r102); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r105.armarDatosBorrador(); })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_18_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r102); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Base = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r108.index;
    const item_r24 = ctx_r108.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Base", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Base", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Base);
} }
function CrearNotaContableComponent_div_46_tr_36_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r24.Base), " ");
} }
function CrearNotaContableComponent_div_46_tr_36_input_21_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_div_46_tr_36_input_21_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r112); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r110.tab($event, "Credito" + i_r25); })("change", function CrearNotaContableComponent_div_46_tr_36_input_21_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r112); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r113.ActualizaValores(i_r25); return ctx_r113.validarDebCred(i_r25); })("blur", function CrearNotaContableComponent_div_46_tr_36_input_21_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r112); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r115.armarDatosBorrador(); })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_21_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r112); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Debito = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r118.index;
    const item_r24 = ctx_r118.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Debito", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Debito", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Debito);
} }
function CrearNotaContableComponent_div_46_tr_36_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r24.Debito), " ");
} }
function CrearNotaContableComponent_div_46_tr_36_input_24_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_div_46_tr_36_input_24_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r122); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r120.tab($event, "Deb_Niif" + i_r25); })("change", function CrearNotaContableComponent_div_46_tr_36_input_24_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r122); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r123.ActualizaValores(i_r25); return ctx_r123.validarDebCred(i_r25); })("blur", function CrearNotaContableComponent_div_46_tr_36_input_24_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r122); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r125.armarDatosBorrador(); })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_24_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r122); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Credito = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r128.index;
    const item_r24 = ctx_r128.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Credito", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Credito", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Credito);
} }
function CrearNotaContableComponent_div_46_tr_36_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r24.Credito), " ");
} }
function CrearNotaContableComponent_div_46_tr_36_input_27_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_div_46_tr_36_input_27_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r130.tab($event, "Cred_Niif" + i_r25); })("change", function CrearNotaContableComponent_div_46_tr_36_input_27_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r133.ActualizaValores(i_r25, false); return ctx_r133.validarDebCred(i_r25); })("blur", function CrearNotaContableComponent_div_46_tr_36_input_27_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r135.armarDatosBorrador(); })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_27_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Deb_Niif = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r138.index;
    const item_r24 = ctx_r138.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Deb_Niif", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Deb_Niif", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Deb_Niif);
} }
function CrearNotaContableComponent_div_46_tr_36_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r24.Deb_Niif), " ");
} }
function CrearNotaContableComponent_div_46_tr_36_input_30_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_div_46_tr_36_input_30_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r142); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r140.tab($event, "Cuenta" + (i_r25 + 1)); })("change", function CrearNotaContableComponent_div_46_tr_36_input_30_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r142); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r143.ActualizaValores(i_r25, false); return ctx_r143.validarDebCred(i_r25); })("blur", function CrearNotaContableComponent_div_46_tr_36_input_30_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r142); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r145.armarDatosBorrador(); })("ngModelChange", function CrearNotaContableComponent_div_46_tr_36_input_30_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r142); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r24.Cred_Niif = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r25 = ctx_r148.index;
    const item_r24 = ctx_r148.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Cred_Niif", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Cred_Niif", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r24.Cred_Niif);
} }
function CrearNotaContableComponent_div_46_tr_36_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r24.Cred_Niif), " ");
} }
const _c3 = function (a0, a1) { return { "text-white": a0, "text-danger": a1 }; };
function CrearNotaContableComponent_div_46_tr_36_a_33_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearNotaContableComponent_div_46_tr_36_a_33_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r152); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r150.EliminarCuenta(i_r25); return ctx_r150.armarDatosBorrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c3, item_r24.Valido === false, item_r24.Valido != false));
} }
const _c4 = function (a0) { return { "bg-danger": a0 }; };
function CrearNotaContableComponent_div_46_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CrearNotaContableComponent_div_46_tr_36_input_2_Template, 1, 6, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CrearNotaContableComponent_div_46_tr_36_span_3_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CrearNotaContableComponent_div_46_tr_36_input_5_Template, 1, 6, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CrearNotaContableComponent_div_46_tr_36_span_6_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CrearNotaContableComponent_div_46_tr_36_input_8_Template, 1, 6, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CrearNotaContableComponent_div_46_tr_36_span_9_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CrearNotaContableComponent_div_46_tr_36_input_11_Template, 1, 3, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CrearNotaContableComponent_div_46_tr_36_a_12_Template, 2, 0, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CrearNotaContableComponent_div_46_tr_36_span_13_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CrearNotaContableComponent_div_46_tr_36_input_15_Template, 1, 3, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CrearNotaContableComponent_div_46_tr_36_span_16_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CrearNotaContableComponent_div_46_tr_36_input_18_Template, 1, 3, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CrearNotaContableComponent_div_46_tr_36_span_19_Template, 3, 3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CrearNotaContableComponent_div_46_tr_36_input_21_Template, 1, 3, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CrearNotaContableComponent_div_46_tr_36_span_22_Template, 3, 3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, CrearNotaContableComponent_div_46_tr_36_input_24_Template, 1, 3, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, CrearNotaContableComponent_div_46_tr_36_span_25_Template, 3, 3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, CrearNotaContableComponent_div_46_tr_36_input_27_Template, 1, 3, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CrearNotaContableComponent_div_46_tr_36_span_28_Template, 3, 3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CrearNotaContableComponent_div_46_tr_36_input_30_Template, 1, 3, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CrearNotaContableComponent_div_46_tr_36_span_31_Template, 3, 3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CrearNotaContableComponent_div_46_tr_36_a_33_Template, 3, 4, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", i_r25, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c4, item_r24.Valido === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.Facturas_Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.Cuentas_Contables.length - 1 != i_r25);
} }
function CrearNotaContableComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrearNotaContableComponent_div_46_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r155); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r154.reloadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Recargar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Cargar facturas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CrearNotaContableComponent_div_46_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r155); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r156.CargarArchivo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Nit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Centro Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Concepto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Base");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Debito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Deb Niif");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Cred Niif");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CrearNotaContableComponent_div_46_tr_36_Template, 34, 26, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.Cuentas_Contables);
} }
function CrearNotaContableComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Cargando Facturas...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CrearNotaContableComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r157 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r157.Nombre);
} }
function CrearNotaContableComponent_ng_template_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r159 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r159.Codigo, " ");
} }
function CrearNotaContableComponent_ng_template_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r161 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r161.Nombre, " ");
} }
const _c5 = function () { return ["/contabilidad/comprobantes/notas-contables"]; };
class CrearNotaContableComponent {
    constructor(route, http, router, _notasContables, _general, _user) {
        this.route = route;
        this.http = http;
        this.router = router;
        this._notasContables = _notasContables;
        this._general = _general;
        this._user = _user;
        this.datosCabecera = {
            Titulo: 'Nueva Nota Contable',
            Fecha: new Date(),
            Codigo: ''
        };
        this.Tipo_Comprobante = 'Nota Contable';
        this.alertOption = {};
        this.Cargando = false;
        this.Mostrar_Facturas = false;
        this.Facturas = [];
        this.fecha = new Date();
        this.Fecha = '';
        this.display_Banco = 'none';
        this.Proveedores = [];
        this.Lista_Facturas = [{
                RetencionesFactura: []
            }];
        this.Centro_Costo = '';
        this.Nom_Centro_Costo = '';
        this.Fecha_Nota_Contable = this.fechaHoy();
        this.Id_Proveedor = '';
        this.NombreProveedor = '';
        this.Id_Cliente = '';
        this.Cliente = [];
        this.Funcionario = JSON.parse(localStorage.getItem("User"));
        this.Cuenta = [];
        this.FormaPago = [];
        this.Rentenciones = [];
        this.RentencionesFactura = [];
        this.Cuentas_Contables = [{
                Cuenta: '',
                Nit: '',
                Centro_Costo: '',
                Documento: '',
                Concepto: '',
                Base: 0,
                Debito: 0,
                Credito: 0,
                Deb_Niif: 0,
                Cred_Niif: 0
            }];
        this.Cuenta_Banco = '';
        this.Costo_Ingreso = 0;
        this.Total_Debito = 0;
        this.Total_Credito = 0;
        this.Total_Debito_Niif = 0;
        this.Total_Credito_Niif = 0;
        this.Retenciones_Totales = 0;
        this.Mostrar = false;
        this.Mostrar_Cliente = false;
        this.Impuesto = 0;
        this.reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Subtotal);
        this.reducer_deb = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Debito);
        this.reducer_cred = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Credito);
        this.reducer_deb_niif = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Deb_Niif);
        this.reducer_cred_niif = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Cred_Niif);
        this.reducer_valorp = (accumulator, currentValue) => accumulator + parseFloat(currentValue.ValorIngresado);
        this.reducer_abono = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Abono);
        this.reducer3 = (accumulator, currentValue) => {
            var acu_iva = 0;
            currentValue.RetencionesFacturas.forEach((v, i) => {
                acu_iva += parseFloat(v.Valor);
            });
            return accumulator + acu_iva;
        };
        this.ListaRetenciones = [];
        this.ListaFact = [];
        this.Total_Facturas = 0;
        this.Mostrar_Opciones = true;
        this.Mostrar_Input_Cli = true;
        this.Centros = [];
        this.Documento = '';
        this.Concepto = '';
        this.Facturas_Multiple = true;
        this.datosBorradores = {};
        this.idBorrador = '';
        this.Codigo = '';
        this.Total_Abono = 0;
        this.Datos_Invalidos = false;
        this.Id_Empresa = '';
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 4 ? []
            : this.Cliente.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter = (x) => x.Nombre;
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 4 ? []
            : this.Cuenta.filter(v => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter1 = (x) => x.Codigo;
        this.search2 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 2 ? []
            : this.Centros.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter2 = (x) => x.Nombre;
        let queryParams = this.route.snapshot.queryParams;
        if (queryParams.facturas != undefined && queryParams.cliente != undefined) {
            this.Id_Cliente = queryParams.cliente;
            this.Cargando = true;
            this.Mostrar_Opciones = false;
            this.Mostrar_Cliente = true;
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/facturas_seleccionadas_cliente.php', { params: queryParams }).subscribe((data) => {
                this.Mostrar = false;
                this.Cargando = false;
                this.Mostrar_Input_Cli = false;
                this.Lista_Facturas = data.Facturas;
                this.Nom_Cliente = data.Cliente.Nombre;
            });
        }
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Guardar este Comprobante",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            input: 'select',
            inputOptions: {
                Pcga: 'Imprimir en PCGA',
                Niif: 'Imprimir en NIIF'
            },
            preConfirm: (value) => {
                return new Promise((resolve) => {
                    this.guardarNotaContable(this.FormNotaContable, value);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.isLoading()
        };
    }
    ngOnInit() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/nit_buscar.php').subscribe((data) => {
            this.Cliente = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/cuentas.php', { params: { company_id: this._user.user.person.company_worked.id } }).subscribe((data) => {
            this.Cuentas = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php', { params: { company_id: this._user.user.person.company_worked.id } }).subscribe((data) => {
            this.Cuenta = data.Activo;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/centrocosto_buscar.php', { params: { company_id: this._user.user.person.company_worked.id } }).subscribe((data) => {
            this.Centros = data;
        });
        this.getCodigoNuevaNota();
        this.ListarRetenciones();
        this.Id_Empresa = this._user.user.person.company_worked.id;
    }
    BuscarProveedor(modelo) {
        this.NombreProveedor = modelo.Proveedores;
        this.Id_Proveedor = modelo.Id_Proveedor;
    }
    BuscarDatosCliente(cliente, pos) {
        if (pos != null && pos != undefined) {
            this.Cuentas_Contables[pos].Nit_Cuenta = cliente.ID;
            this.Cuentas_Contables[pos].Tipo_Nit = cliente.Tipo;
        }
        else {
            this.Id_Cliente = cliente.ID;
            this.Tipo_Beneficiario = cliente.Tipo;
        }
    }
    getDatosTercero(nit) {
        return this.Cliente.find(x => x.ID == nit);
    }
    BuscarDatosCentro(centro, pos) {
        if (pos != undefined && pos != null) {
            if (centro == '') {
                this.Cuentas_Contables[pos].Id_Centro_Costo = centro;
            }
            else {
                this.Cuentas_Contables[pos].Id_Centro_Costo = centro.Id_Centro_Costo;
            }
        }
        else {
            this.Centro_Costo = centro.Id_Centro_Costo;
        }
    }
    BuscarCuenta(cuenta, pos) {
        let pos2 = pos + 1;
        // console.log("Model Cuenta --> ",cuenta);
        if (cuenta.Centro_Costo == 'S') { // Validar si la cuenta es para Centro de costos o no.
            this.Cuentas_Contables[pos].Centro_Costo = this.Nom_Centro_Costo;
            this.Cuentas_Contables[pos].Id_Centro_Costo = this.Nom_Centro_Costo.Id_Centro_Costo;
            document.getElementById('Centro_Costo' + pos).style.display = 'block';
        }
        else {
            this.Cuentas_Contables[pos].Centro_Costo = '';
            this.Cuentas_Contables[pos].Id_Centro_Costo = 0;
            document.getElementById('Centro_Costo' + pos).style.display = 'none';
        }
        this.Cuentas_Contables[pos].Id_Plan_Cuentas = cuenta.Id_Plan_Cuentas;
        this.Cuentas_Contables[pos].Documento = this.Documento;
        this.Cuentas_Contables[pos].Concepto = this.Concepto;
        // Nit Beneficiario
        this.Cuentas_Contables[pos].Nit = this.Nom_Cliente;
        this.Cuentas_Contables[pos].Nit_Cuenta = this.Nom_Cliente.ID;
        this.Cuentas_Contables[pos].Tipo_Nit = this.Nom_Cliente.Tipo;
        let posicion = this.ListaRetenciones.findIndex(x => x.Id_Plan_Cuenta === cuenta.Id_Plan_Cuentas);
        if (posicion >= 0) {
            document.getElementById('Base' + pos).readOnly = false;
            this.Cuentas_Contables[pos].Porcentaje = this.ListaRetenciones[posicion].Porcentaje;
        }
        if (cuenta.Id_Plan_Cuentas) {
            if (this.Cuentas_Contables[pos2] == undefined) {
                this.Cuentas_Contables.push({
                    Cuenta: '',
                    Nit: '',
                    Centro_Costo: '',
                    Documento: '',
                    Concepto: '',
                    Base: 0,
                    Debito: 0,
                    Credito: 0,
                    Deb_Niif: 0,
                    Cred_Niif: 0
                });
            }
        }
    }
    ActualizaValores(pos, pcga = true) {
        if (pos != null && pos != undefined && pcga) {
            if (this.Cuentas_Contables[pos].Debito < 0) {
                this.Cuentas_Contables[pos].Debito = 0;
            }
            if (this.Cuentas_Contables[pos].Credito < 0) {
                this.Cuentas_Contables[pos].Credito = 0;
            }
            this.Cuentas_Contables[pos].Deb_Niif = this.Cuentas_Contables[pos].Debito;
            this.Cuentas_Contables[pos].Cred_Niif = this.Cuentas_Contables[pos].Credito;
        }
        else if (pos != null && pos != undefined) {
            if (this.Cuentas_Contables[pos].Deb_Niif < 0) {
                this.Cuentas_Contables[pos].Deb_Niif = 0;
            }
            if (this.Cuentas_Contables[pos].Cred_Niif < 0) {
                this.Cuentas_Contables[pos].Cred_Niif = 0;
            }
        }
        this.Total_Credito = (this.Cuentas_Contables.reduce(this.reducer_cred, 0)).toString();
        this.Total_Debito = (this.Cuentas_Contables.reduce(this.reducer_deb, 0)).toString();
        this.Total_Credito_Niif = (this.Cuentas_Contables.reduce(this.reducer_cred_niif, 0)).toString();
        this.Total_Debito_Niif = (this.Cuentas_Contables.reduce(this.reducer_deb_niif, 0)).toString();
    }
    EliminarCuenta(pos) {
        this.Cuentas_Contables.splice(pos, 1);
        this.Datos_Invalidos = this.Cuentas_Contables.find(data => data.Valido == false);
        console.log(this.Datos_Invalidos, 'INVALIDOS');
        setTimeout(() => {
            this.ActualizaValores();
        }, 100);
    }
    guardarNotaContable(Formulario, tipo) {
        let info = JSON.stringify(Formulario.value);
        console.log(info);
        let datos = new FormData();
        datos.append('Datos', info);
        datos.append('Cuentas_Contables', JSON.stringify(this.Cuentas_Contables));
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/guardar_nota.php', datos).subscribe((data) => {
            this.confirmacionSwal.title = data.titulo;
            this.confirmacionSwal.text = data.mensaje;
            this.confirmacionSwal.icon = data.tipo;
            this.confirmacionSwal.fire();
            if (data.tipo == 'success' && data.id != undefined) {
                if (tipo == 'Pcga') {
                    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/descarga_pdf.php?id=' + data.id, '_blank'); // SE IMPRIME EN FORMATO PCGA
                }
                else {
                    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/descarga_pdf.php?id=' + data.id + '&tipo=Niif', '_blank'); // SE IMPRIME EN FORMATO NIIF
                }
                setTimeout(() => {
                    this.router.navigate(['/contabilidad/comprobantes/notas-contables']);
                }, 1000);
            }
        }, error => {
            this.confirmacionSwal.text = "Ha ocurrido un error inesperado, la conexión a fallado.";
            this.confirmacionSwal.title = "Oops!";
            this.confirmacionSwal.icon = "error";
            this.confirmacionSwal.fire();
        });
    }
    HomologoDebCred(tipo, pos) {
        switch (tipo) {
            case 'Debito':
                this.Cuentas_Contables[pos].Deb_Niif = this.Cuentas_Contables[pos].Debito;
                break;
            case 'Credito':
                this.Cuentas_Contables[pos].Cred_Niif = this.Cuentas_Contables[pos].Credito;
                break;
        }
    }
    ListarRetenciones() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/lista_retenciones.php').subscribe((data) => {
            this.ListaRetenciones = data;
        });
    }
    calcularBase(pos, valor) {
        if (valor != '') {
            this.Cuentas_Contables[pos].Credito = Math.round(parseFloat(valor) * (parseFloat(this.Cuentas_Contables[pos].Porcentaje) / 100));
            this.Cuentas_Contables[pos].Cred_Niif = Math.round(parseFloat(valor) * (parseFloat(this.Cuentas_Contables[pos].Porcentaje) / 100));
        }
        else {
            this.Cuentas_Contables[pos].Deb_Niif = 0;
        }
        this.ActualizaValores();
    }
    fechaHoy() {
        let fecha = new Date();
        fecha = (fecha.toISOString()).split('T')[0];
        return fecha;
    }
    getCodigoNuevaNota(fecha) {
        let datos = {};
        if (fecha != undefined && fecha != null) {
            datos.Fecha = fecha;
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/get_codigo.php', { params: datos }).subscribe((data) => {
            this.datosCabecera.Codigo = data.consecutivo;
            this.Codigo = data.consecutivo;
        });
    }
    validarDebCred(pos, campo) {
        if (campo === 'Credito') {
            if (this.Cuentas_Contables[pos].Cred_Niif.toString() == '' || this.Cuentas_Contables[pos].Credito == null ||
                this.Cuentas_Contables[pos].Cred_Niif.toString() == '' || this.Cuentas_Contables[pos].Cred_Niif == null) {
                this.Cuentas_Contables[pos].Credito = 0;
                this.Cuentas_Contables[pos].Cred_Niif = 0;
                this.ActualizaValores();
            }
        }
        else {
            if (this.Cuentas_Contables[pos].Debito.toString() == '' || this.Cuentas_Contables[pos].Debito == null ||
                this.Cuentas_Contables[pos].Deb_Niif.toString() == '' || this.Cuentas_Contables[pos].Deb_Niif == null) {
                this.Cuentas_Contables[pos].Debito = 0;
                this.Cuentas_Contables[pos].Deb_Niif = 0;
                this.ActualizaValores();
            }
        }
    }
    showFacturas(nit, pos) {
        if (nit != undefined && nit != '' && nit != null) {
            this.position_document = pos;
            let p = { nit: nit, fecha: this.Fecha_Nota_Contable };
            let id_plan_cuenta = this.Cuentas_Contables[pos].Id_Plan_Cuentas;
            if (id_plan_cuenta != '') {
                p.id_plan_cuenta = id_plan_cuenta;
            }
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/lista_facturas.php', { params: p }).subscribe((data) => {
                this.Lista_Facturas = data.Facturas;
                this.Mostrar_Facturas = true;
                setTimeout(() => {
                    this.calcularTotalAbonoCartera();
                }, 200);
            });
        }
    }
    addListInvoice(factura, pos) {
        let existe = this.Facturas.findIndex(fact => fact.Factura === factura.Factura);
        if (existe < 0) {
            this.Lista_Facturas[pos].Abono = this.Lista_Facturas[pos].Valor_Saldo;
            let factura = this.Lista_Facturas[pos];
            this.Facturas.push(factura);
        }
        else {
            this.Lista_Facturas[pos].Abono = 0;
            this.Facturas.splice(existe, 1);
        }
        setTimeout(() => {
            this.calcularTotalAbonoCartera();
        }, 200);
    }
    addInvoicesToAccount() {
        let nit = this.Cuentas_Contables[this.position_document].Nit_Cuenta;
        this.Cuentas_Contables.splice(this.position_document, 1); // Eliminando una fila para introducir las nuevas cuentas.
        let count = this.Cuentas_Contables.length; // Total de filas de las cuentas.
        if (this.Cuentas_Contables[(count - 1)] != undefined) {
            if (this.Cuentas_Contables[(count - 1)].Nit_Cuenta == undefined || this.Cuentas_Contables[(count - 1)].Nit_Cuenta == '') {
                this.Cuentas_Contables.splice((count - 1), 1); // Eliminando ultima fila.
            }
        }
        this.Facturas.forEach(f => {
            // let plan_cuenta = this.obtenerPlanPorTipo(f.Tipo_Factura);
            let object = {
                Centro_Costo: this.Nom_Centro_Costo,
                Id_Centro_Costo: this.Nom_Centro_Costo.Id_Centro_Costo,
                Cuenta: this.obtenerPlanCuenta(f.Codigo),
                Id_Plan_Cuentas: f.Id_Plan_Cuenta,
                Nit: this.getDatosTercero(nit),
                Nit_Cuenta: nit,
                Tipo_Nit: this.getDatosTercero(nit).Tipo,
                Documento: f.Factura,
                Concepto: 'Pago o Abono Factura Nro. ' + f.Factura,
                Base: 0,
                Debito: this.validarDebeOHaber('D', f.Movimiento, f.Abono),
                Credito: this.validarDebeOHaber('C', f.Movimiento, f.Abono),
                Deb_Niif: this.validarDebeOHaber('D', f.Movimiento, f.Abono),
                Cred_Niif: this.validarDebeOHaber('C', f.Movimiento, f.Abono)
            };
            this.Cuentas_Contables.push(object); // Agregando nueva(s) fila(s)
        });
        this.Cuentas_Contables.push({
            Cuenta: '',
            Nit: '',
            Centro_Costo: '',
            Documento: '',
            Concepto: '',
            Base: 0,
            Debito: 0,
            Credito: 0,
            Deb_Niif: 0,
            Cred_Niif: 0
        });
        this.Mostrar_Facturas = false;
        this.Facturas = [];
        this.Lista_Facturas = [];
        this.Total_Abono = 0;
        setTimeout(() => {
            this.ActualizaValores();
            this.armarDatosBorrador();
        }, 200);
    }
    obtenerPlanPorTipo(tipo) {
        let tipo_facturas = {
            Factura_Venta: {
                Cuenta: '130505',
                Naturaleza: 'Credito'
            },
            Factura_Nopos: {
                Cuenta: '130505',
                Naturaleza: 'Credito'
            },
            Nota_Credito: {
                Cuenta: '130505',
                Naturaleza: 'Debito'
            },
            Factura_Capita: {
                Cuenta: '130505',
                Naturaleza: 'Credito'
            },
            Factura_Acta: {
                Cuenta: '133005',
                Naturaleza: 'Credito'
            },
            Devolucion_Compra: {
                Cuenta: '220501',
                Naturaleza: 'Debito'
            },
            Factura_Proveedor_Mantis: {
                Cuenta: '133005',
                Naturaleza: 'Credito'
            }
        };
        return tipo_facturas[tipo];
    }
    obtenerPlanCuenta(codigo) {
        return this.Cuenta.find(x => x.Codigo_Cuenta === codigo);
    }
    validarDebeOHaber(campo, tipo, valor) {
        if (campo === tipo) {
            return Math.abs(valor);
        }
        return '0';
    }
    validarCampo(campo, event, tipo) {
        if (typeof (campo) != 'object' && campo != '') {
            let id = event.target.id;
            document.getElementById(id).focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Incorrecto!',
                text: `El valor ${tipo} no es valido.`
            });
            // this.swalService.ShowMessage(swal);
        }
    }
    validarSaldoFactura(pos, event) {
        let saldo = parseFloat(this.Lista_Facturas[pos].Valor_Saldo);
        let abono = parseFloat(this.Lista_Facturas[pos].Abono);
        if (abono > saldo) { // Validando que el abono no pueda ser mayor al saldo de una factura de cartera.
            let id = event.target.id;
            document.getElementById(id).focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Incorrecto!',
                text: `El valor del abono no puede ser mayor al saldo de la factura.`
            });
            // this.swalService.ShowMessage(swal);
        }
        setTimeout(() => {
            this.calcularTotalAbonoCartera();
        }, 200);
    }
    tab(event, ele) {
        this._notasContables.tabular(event, ele);
    }
    CargarArchivo(event) {
        if (event.target.files.length === 1) {
            this.Archivo = event.target.files[0];
            this.EnviarArchivo();
        }
    }
    EnviarArchivo() {
        this.Cargando = true;
        let datos = new FormData();
        datos.append('archivo', this.Archivo);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/subir_facturas.php', datos).subscribe((data) => {
            this.Cuentas_Contables = data.Facturas;
            this.Datos_Invalidos = this.Cuentas_Contables.some(data => data.Valido == false);
            console.log(this.Datos_Invalidos, 'INVALIDOS');
            this.Cargando = false;
            this.Facturas_Multiple = false;
            setTimeout(() => {
                this.Cuentas_Contables.push({
                    Cuenta: '',
                    Nit: '',
                    Centro_Costo: '',
                    Documento: '',
                    Concepto: '',
                    Base: 0,
                    Debito: 0,
                    Credito: 0,
                    Deb_Niif: 0,
                    Cred_Niif: 0
                });
                this.ActualizaValores();
            }, 300);
        }, error => {
            this.Cargando = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'warning',
                title: 'Oops!',
                text: "Se perdió la conexión a internet. Por favor vuelve a intentarlo."
            });
            // this.swalService.ShowMessage(swal);
        });
    }
    reloadData() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/nit_buscar.php').subscribe((data) => {
            this.Cliente = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php').subscribe((data) => {
            this.Cuenta = data.Activo;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/centrocosto_buscar.php').subscribe((data) => {
            this.Centros = data;
        });
    }
    armarDatosBorrador() {
        let datosCabecera = {
            Fecha: this.Fecha_Nota_Contable,
            Beneficiario: this.Nom_Cliente,
            Id_Cliente: this.Id_Cliente,
            Tipo_Beneficiario: this.Tipo_Beneficiario,
            Nom_Centro_Costo: this.Nom_Centro_Costo,
            Centro_Costo: this.Centro_Costo,
            Documento: this.Documento,
            Concepto: this.Concepto,
        };
        let Datos = {
            Cabecera: datosCabecera,
            Cuentas_Contables: this.Cuentas_Contables
        };
        setTimeout(() => {
            let datosBorrador = {
                Id_Borrador_Contabilidad: this.idBorrador,
                Codigo: this.Codigo,
                Tipo_Comprobante: 'Nota Contable',
                // Identificacion_Funcionario: this.Funcionario.Identificacion_Funcionario,
                Datos: Datos
            };
            let info = this._general.Utf8.encode(JSON.stringify(datosBorrador));
            let datos = new FormData();
            datos.append('datos', info);
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/guardar_borrador_contable.php', datos)
                .subscribe((data) => {
                if (data.status == 202) {
                    if (this.idBorrador == '')
                        this.idBorrador = data.Id_Borrador;
                }
            });
        }, 300);
    }
    setDatosBorrador(data = null) {
        if (data == 'clean') {
            this.resetModel(); // Reinicilizar Campos.
        }
        else {
            let Datos = JSON.parse(data.Datos);
            this.Fecha_Nota_Contable = Datos.Cabecera.Fecha;
            this.Nom_Cliente = Datos.Cabecera.Beneficiario;
            this.Id_Cliente = Datos.Cabecera.Id_Cliente;
            this.Tipo_Beneficiario = Datos.Cabecera.Tipo_Beneficiario;
            this.Nom_Centro_Costo = Datos.Cabecera.Nom_Centro_Costo;
            this.Centro_Costo = Datos.Cabecera.Centro_Costo;
            this.Documento = Datos.Cabecera.Documento;
            this.Concepto = Datos.Cabecera.Concepto;
            this.Cuentas_Contables = Datos.Cuentas_Contables;
            this.datosCabecera.Codigo = data.Codigo;
            this.idBorrador = data.ID;
        }
        setTimeout(() => {
            this.ActualizaValores();
        }, 200);
    }
    resetModel() {
        this.Fecha_Nota_Contable = this.fechaHoy();
        this.Nom_Cliente = '';
        this.Id_Cliente = '';
        this.Nom_Centro_Costo = '';
        this.Centro_Costo = '';
        this.Documento = '';
        this.Concepto = '';
        this.Cuentas_Contables = [{
                Cuenta: '',
                Nit: '',
                Centro_Costo: '',
                Documento: '',
                Concepto: '',
                Base: 0,
                Debito: 0,
                Credito: 0,
                Deb_Niif: 0,
                Cred_Niif: 0
            }];
        this.datosCabecera.Codigo = this.getCodigoNuevaNota();
    }
    calcularTotalAbonoCartera() {
        this.Total_Abono = this.Lista_Facturas.reduce(this.reducer_abono, 0);
    }
}
CrearNotaContableComponent.ɵfac = function CrearNotaContableComponent_Factory(t) { return new (t || CrearNotaContableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_notas_contables_service__WEBPACK_IMPORTED_MODULE_6__["NotasContablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cierres_contables_cierrecontable_service__WEBPACK_IMPORTED_MODULE_7__["CierrecontableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
CrearNotaContableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrearNotaContableComponent, selectors: [["app-crear-nota-contable"]], viewQuery: function CrearNotaContableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.FormNotaContable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cuentasF = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
    } }, decls: 107, vars: 43, consts: [[1, "page-body"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-md-offset-4"], [1, "card"], [3, "datosCabecera"], [1, "card-body", 2, "padding-bottom", "0px"], ["FormNotaContable", "ngForm"], ["type", "hidden", "name", "Id_Borrador", 3, "ngModel", "ngModelChange"], [1, "row", "invoive-info", 2, "margin-bottom", "0", "padding-bottom", "0px"], ["type", "hidden", "name", "Id_Empresa", 3, "ngModel", "ngModelChange"], [1, "col-md-2"], [1, "form-group"], ["type", "date", "name", "Fecha_Documento", "id", "Fecha_Nota_Contable", "required", "", 1, "form-control", "form-control-sm", "tab", 3, "ngModel", "ngModelChange", "keyup", "change"], [1, "col-md-3"], ["type", "text", "name", "Cliente", "id", "Cliente", 1, "form-control", "form-control-sm", "f-9", "tab", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["hidden", "", "name", "Beneficiario", "id", "Beneficiario", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["hidden", "", "name", "Tipo_Beneficiario", "id", "Tipo_Beneficiario", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], ["for", "Centro_Costo"], ["type", "text", "name", "Nom_Centro_Costo", "id", "Centro_Costo", 1, "form-control", "form-control-sm", "f-9", "tab", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["type", "hidden", "name", "Id_Centro_Costo", 3, "ngModel", "ngModelChange"], ["for", ""], ["type", "text", "name", "Documento", "id", "Documento", 1, "form-control", "form-control-sm", 3, "ngModel", "keyup", "ngModelChange"], [1, "col-md-6"], ["name", "Concepto", "id", "Concepto", "rows", "3", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["for", "borrador"], [3, "Tipo_Comprobante", "Borrador"], ["class", "row", 4, "ngIf"], ["class", "row m-t-10", 4, "ngIf"], [1, "col-sm-12"], [1, "table", "table-responsive", "invoice-table", "invoice-total"], [1, "col-md-12"], [1, "col-md-8"], [1, "col-md-2", "botonFlotante1"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-enviar", 3, "routerLink"], [1, "col-md-2", "botonFlotante"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-enviar", 3, "swal"], ["rt", ""], ["title", "", "text", "", "type", ""], ["confirmacionSwal", ""], [3, "swalOptions"], ["confirmacionGuardar", ""], ["rt1", ""], ["rt2", ""], [1, "col-md-12", "text-center"], [1, "table", "invoice-detail-table", "tabla"], [1, "thead-default"], [2, "width", "25px"], [2, "width", "50px"], [2, "width", "60px"], [2, "width", "80px", "text-align", "right"], [2, "width", "20px"], [2, "width", "60px", "text-align", "right"], [4, "ngIf"], [3, "id", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "btn-sm", "pull-left", 3, "click"], ["colspan", "11"], [1, "fa", "fa-exclamation-circle", "fa-5x"], [3, "id"], [1, "text-center", 2, "width", "25px"], ["type", "checkbox", 3, "name", "id", "change"], ["type", "number", 3, "name", "id", "ngModel", "ngModelChange", "blur"], ["colspan", "7"], ["colspan", "3"], [1, "row", "m-t-10"], ["title", "Recargar datos iniciales (Terceros, PUC, Centros Costos)", 1, "btn", "btn-link", "btn-sm", "pull-right", 3, "click"], [1, "fa", "fa-refresh"], [1, "pull-right", 2, "display", "inline-block", "margin-top", "14px"], ["for", "Facturas_Masivas", 1, "f-10", 2, "cursor", "pointer"], [2, "text-decoration", "underline"], [1, "fa", "fa-upload"], ["type", "file", "id", "Facturas_Masivas", "ngModel", "", "accept", "application/vnd.ms-excel", "data-max-size", "2048", "name", "Facturas_Masivas", 1, "form-control", "form-control-sm", 2, "display", "none", 3, "change"], [2, "width", "200px"], [3, "id", "ngClass", 4, "ngFor", "ngForOf"], [3, "id", "ngClass"], ["type", "text", "name", "Cuenta", "class", "form-control form-control-sm f-9", 3, "ngModel", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "required", "ngModelChange", "keyup", "blur", 4, "ngIf"], ["type", "text", "class", "form-control form-control-sm f-9", 3, "ngModel", "name", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur", 4, "ngIf"], ["class", "form-control form-control-sm text-right input-document", "type", "text", 3, "name", "id", "ngModel", "keyup", "ngModelChange", "blur", 4, "ngIf"], ["href", "javascript:;", 3, "click", 4, "ngIf"], ["class", "form-control form-control-sm", 3, "name", "id", "ngModel", "keyup", "ngModelChange", "blur", 4, "ngIf"], ["class", "form-control form-control-sm text-right", "readonly", "", 3, "name", "id", "ngModel", "keyup", "change", "blur", "ngModelChange", 4, "ngIf"], ["min", "0", "class", "form-control form-control-sm text-right", "type", "number", 3, "name", "id", "ngModel", "keyup", "change", "blur", "ngModelChange", 4, "ngIf"], [1, "text-center"], ["type", "text", "name", "Cuenta", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "required", "ngModelChange", "keyup", "blur"], ["type", "text", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "name", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["type", "text", 1, "form-control", "form-control-sm", "text-right", "input-document", 3, "name", "id", "ngModel", "keyup", "ngModelChange", "blur"], ["href", "javascript:;", 3, "click"], [1, "fa", "fa-search", 2, "font-weight", "bold"], [1, "form-control", "form-control-sm", 3, "name", "id", "ngModel", "keyup", "ngModelChange", "blur"], ["readonly", "", 1, "form-control", "form-control-sm", "text-right", 3, "name", "id", "ngModel", "keyup", "change", "blur", "ngModelChange"], ["min", "0", "type", "number", 1, "form-control", "form-control-sm", "text-right", 3, "name", "id", "ngModel", "keyup", "change", "blur", "ngModelChange"], [1, "fa", "fa-trash-o", 3, "ngClass"], [1, "fa", "fa-spinner", "fa-pulse", "fa-5x", "fa-fw"], [1, "sr-only"], [1, "f-9"]], template: function CrearNotaContableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-cabecera", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_8_listener($event) { return ctx.idBorrador = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_10_listener($event) { return ctx.Id_Empresa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_15_listener($event) { return ctx.Fecha_Nota_Contable = $event; })("keyup", function CrearNotaContableComponent_Template_input_keyup_15_listener($event) { return ctx.tab($event, "Cliente"); })("change", function CrearNotaContableComponent_Template_input_change_15_listener($event) { return ctx.getCodigoNuevaNota($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Beneficiario Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_20_listener($event) { return ctx.Nom_Cliente = $event; })("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_20_listener() { return ctx.BuscarDatosCliente(ctx.Nom_Cliente); })("keyup", function CrearNotaContableComponent_Template_input_keyup_20_listener($event) { return ctx.tab($event, "Centro_Costo"); })("blur", function CrearNotaContableComponent_Template_input_blur_20_listener($event) { return ctx.validarCampo(ctx.Nom_Cliente, $event, "Beneficiario"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_21_listener($event) { return ctx.Id_Cliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_22_listener($event) { return ctx.Tipo_Beneficiario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Centro Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_27_listener($event) { return ctx.Nom_Centro_Costo = $event; })("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_27_listener() { return ctx.BuscarDatosCentro(ctx.Nom_Centro_Costo); })("keyup", function CrearNotaContableComponent_Template_input_keyup_27_listener($event) { return ctx.tab($event, "Documento"); })("blur", function CrearNotaContableComponent_Template_input_blur_27_listener($event) { return ctx.validarCampo(ctx.Nom_Centro_Costo, $event, "Centro de Costo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_28_listener($event) { return ctx.Centro_Costo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_Template_input_keyup_33_listener($event) { return ctx.tab($event, "Concepto"); })("ngModelChange", function CrearNotaContableComponent_Template_input_ngModelChange_33_listener($event) { return ctx.Documento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Concepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CrearNotaContableComponent_Template_textarea_keyup_38_listener($event) { return ctx.tab($event, "Cuenta0"); })("ngModelChange", function CrearNotaContableComponent_Template_textarea_ngModelChange_38_listener($event) { return ctx.Concepto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Borradores");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "app-borradorcomprobantes", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("Borrador", function CrearNotaContableComponent_Template_app_borradorcomprobantes_Borrador_43_listener($event) { return ctx.setDatosBorrador($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CrearNotaContableComponent_div_44_Template, 35, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, CrearNotaContableComponent_div_46_Template, 37, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, CrearNotaContableComponent_div_47_Template, 7, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Total Debito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Total Credito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Total Debito NIFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Total Credito NIFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Diferencia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](81, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Diferencia NIFF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](87, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " Volver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, CrearNotaContableComponent_ng_template_97_Template, 3, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "swal", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "swal", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, CrearNotaContableComponent_ng_template_103_Template, 2, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, CrearNotaContableComponent_ng_template_105_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](98);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](102);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.idBorrador);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Id_Empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Fecha_Nota_Contable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Nom_Cliente)("ngbTypeahead", ctx.search)("resultTemplate", _r4)("inputFormatter", ctx.formatter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Id_Cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Tipo_Beneficiario);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Nom_Centro_Costo)("ngbTypeahead", ctx.search2)("resultTemplate", _r10)("inputFormatter", ctx.formatter2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Centro_Costo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Documento);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Concepto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Tipo_Comprobante", ctx.Tipo_Comprobante);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar_Facturas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 30, ctx.Total_Debito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 32, ctx.Total_Credito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 34, ctx.Total_Debito_Niif));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 36, ctx.Total_Credito_Niif));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](81, 38, ctx.Total_Debito - ctx.Total_Credito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](87, 40, ctx.Total_Debito_Niif - ctx.Total_Credito_Niif));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](42, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swal", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_9__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeahead"], _borradorcomprobantes_borradorcomprobantes_component__WEBPACK_IMPORTED_MODULE_12__["BorradorcomprobantesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__["SwalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__["SwalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 150px;\n}\n\n.b[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.col-form-label-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.back[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 10px !important;\n  line-height: 14px !important;\n  font-size: 10px !important;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  padding: 2px 5px !important;\n  height: 22px !important;\n  border-radius: 5px !important;\n}\n\n.f-9[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n}\n\n.tabla[_ngcontent-%COMP%] {\n  font-size: 11px;\n  word-wrap: break-word;\n}\n\n.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: normal;\n  padding: 3px !important;\n  font-size: 10px;\n  line-height: 11px;\n}\n\n.tabla[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n  text-align: left;\n}\n\n.tabla[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n\n.contenido[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\n\n.botonFlotante[_ngcontent-%COMP%] {\n  position: fixed;\n  display: scroll;\n  bottom: 10px;\n  right: 10px;\n  z-index: 99;\n}\n\n.botonFlotante1[_ngcontent-%COMP%] {\n  position: fixed;\n  display: scroll;\n  bottom: 10px;\n  right: 230px;\n  z-index: 99;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  height: 200px;\n  max-height: 300px;\n  overflow: auto;\n}\n\n.input-document[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 80% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjcmVhci1ub3RhLWNvbnRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFBSTs7RUFFSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRVI7O0FBQUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSwwQkFBQTtBQUVSOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6ImNyZWFyLW5vdGEtY29udGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG59XHJcblxyXG4uYiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uY29sLWZvcm0tbGFiZWwtc20ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmYtOSB7XHJcbiAgICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGEge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbmlkbyB7XHJcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvdG9uRmxvdGFudGUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogc2Nyb2xsO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLmJvdG9uRmxvdGFudGUxIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IHNjcm9sbDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAyMzBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmlucHV0LWRvY3VtZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "psBj":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notas-contables/notas-contables.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NotasContablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasContablesComponent", function() { return NotasContablesComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "vdoh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var _centro_costos_centro_costos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../centro-costos/centro-costos.service */ "Ra2t");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! saturn-datepicker */ "nJc8");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/not-data/not-data.component */ "j80Y");





















function NotasContablesComponent_table_40_tr_26_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.Estado);
} }
function NotasContablesComponent_table_40_tr_26_a_37_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotasContablesComponent_table_40_tr_26_a_37_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.IdDocumento = item_r7.Id_Documento_Contable; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("swal", _r5);
} }
const _c0 = function (a0) { return { "bg-danger": a0 }; };
function NotasContablesComponent_table_40_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, NotasContablesComponent_table_40_tr_26_span_24_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Ver PCGA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Ver NIIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, NotasContablesComponent_table_40_tr_26_a_37_Template, 3, 1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, item_r7.Estado == "Anulada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.Fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", item_r7.Beneficiario, " - ", item_r7.Tercero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.Concepto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 17, item_r7.Total_Debe_PCGA));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 19, item_r7.Total_Haber_PCGA));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 21, item_r7.Total_Debe_NIIF));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 23, item_r7.Total_Haber_NIIF));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.Funcionario);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.Estado != "Anulada");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("href", "", ctx_r6.envirom.ruta, "php/contabilidad/notascontables/descarga_pdf.php?id=", item_r7.Id_Documento_Contable, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("href", "", ctx_r6.envirom.ruta, "php/contabilidad/notascontables/descarga_pdf.php?id=", item_r7.Id_Documento_Contable, "&tipo=Niif", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.Estado != "Anulada" && ctx_r6.perfilUsuario == "27");
} }
function NotasContablesComponent_table_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Beneficiario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Concepto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Total Debito");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Total Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Total Debito NIIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Total Credito NIIF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Funcionario");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, NotasContablesComponent_table_40_tr_26_Template, 38, 27, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.NotasContables);
} }
function NotasContablesComponent_small_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", ctx_r2.page * ctx_r2.maxSize - ctx_r2.maxSize + 1, " al ", ctx_r2.page * ctx_r2.maxSize > ctx_r2.TotalItems ? ctx_r2.TotalItems : ctx_r2.page * ctx_r2.maxSize, " de ", ctx_r2.TotalItems, " ");
} }
function NotasContablesComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-not-data", 48);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loading", ctx_r4.Cargando);
} }
const _c1 = function () { return ["/contabilidad/comprobantes/crear-nota-contable"]; };
class NotasContablesComponent {
    constructor(http, route, location, swalService, _company, _user, dateAdapter) {
        this.http = http;
        this.route = route;
        this.location = location;
        this.swalService = swalService;
        this._company = _company;
        this._user = _user;
        this.dateAdapter = dateAdapter;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('es-CO');
        this.matPanel = false;
        this.NotasContables = [];
        this.Cargando = true;
        this.maxSize = 20;
        this.page = 1;
        this.filtros = {
            codigo: '',
            fechas: '',
            tercero: '',
            estado: '',
        };
        this.filtro_fecha = '';
        this.company_id = '';
        this.myDateRangePickerOptions = {
            width: '200px',
            height: '21px',
            selectBeginDateTxt: 'Inicio',
            selectEndDateTxt: 'Fin',
            selectionTxtFontSize: '10px',
            dateFormat: 'yyyy-mm-dd',
        };
        this.IdDocumento = '';
        // perfilUsuario:any = localStorage.getItem('miPerfil');
        this.companies = [];
        this.dateAdapter.setLocale('es');
        this.alertOption = {
            title: '¿Está Seguro?',
            text: 'Se dispone a Anular este Documento',
            showCancelButton: true,
            cancelButtonText: 'No, Dejame Comprobar!',
            confirmButtonText: 'Si, Anular',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'warning',
            preConfirm: () => {
                return new Promise((resolve) => {
                    this.anularDocumento();
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isLoading(),
        };
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
        this.ListarNotasContables();
        this.envirom = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.company_id = this._user.user.person.company_worked.id;
    }
    ListarNotasContables() {
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta +
            'php/contabilidad/notascontables/lista_notas_contables.php', { params: { company_id: this._user.user.person.company_worked.id } })
            .subscribe((data) => {
            this.Cargando = false;
            this.NotasContables = data.Notas;
            this.TotalItems = data.numReg;
        });
    }
    dateRangeChanged(event) {
        if (event.formatted != '') {
            this.filtros.fechas = event.formatted;
        }
        else {
            this.filtros.fechas = '';
        }
        this.filtrar();
    }
    selectedDate(fecha) {
        this.filtros.fechas =
            this.datePipe.transform(fecha.value.begin._d, 'yyyy-MM-dd') +
                ' - ' +
                this.datePipe.transform(fecha.value.end._d, 'yyyy-MM-dd');
        this.filtrar();
    }
    getStrConditions(pagination = false) {
        let params = {};
        if (this.filtros.codigo != '') {
            params.cod = this.filtros.codigo;
        }
        if (this.filtros.tercero != '') {
            params.tercero = this.filtros.tercero;
        }
        if (this.filtros.fechas != '') {
            params.fecha = this.filtros.fechas;
        }
        if (this.filtros.estado != '') {
            params.est = this.filtros.estado;
        }
        if (pagination) {
            params.pag = this.page;
        }
        else {
            this.page = 1;
        }
        let queryString = Object.keys(params)
            .map((key) => key + '=' + params[key])
            .join('&');
        this.location.replaceState('/contabilidad/comprobantes/notas-contables', queryString);
        return queryString;
    }
    filtrar(pagination = false) {
        let queryString = this.getStrConditions(pagination);
        this.Cargando = true;
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta +
            'php/contabilidad/notascontables/lista_notas_contables.php?' +
            queryString)
            .subscribe((data) => {
            this.Cargando = false;
            this.NotasContables = data.Notas;
            this.TotalItems = data.numReg;
        });
    }
    anularDocumento() {
        let datos = {
            Id_Registro: this.IdDocumento,
            Tipo: 'Notas_Contables',
        };
        this.AnularDocumentoContable(datos).subscribe((data) => {
            let swal = {
                codigo: data.tipo,
                titulo: data.titulo,
                mensaje: data.mensaje,
            };
            this.swalService.ShowMessage(swal);
            this.ListarNotasContables();
        }, (error) => {
            let swal = {
                codigo: 'warning',
                titulo: 'Oops!',
                mensaje: 'Lamentablemente se ha perdido la conexión a internet. Por favor vuelve a intentarlo.',
            };
            this.swalService.ShowMessage(swal);
        });
    }
    AnularDocumentoContable(datos) {
        let info = JSON.stringify(datos);
        let data = new FormData();
        data.append('datos', info);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/anular_documento.php', data);
    }
}
NotasContablesComponent.ɵfac = function NotasContablesComponent_Factory(t) { return new (t || NotasContablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_7__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_centro_costos_centro_costos_service__WEBPACK_IMPORTED_MODULE_8__["CentroCostosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"])); };
NotasContablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NotasContablesComponent, selectors: [["app-notas-contables"]], viewQuery: function NotasContablesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 47, vars: 19, consts: [[1, "card"], [1, "card-block", "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "text-primary"], [1, "btn-group", "rounded"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "btn", "btn-info", "btn-sm", 2, "float", "right", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "line"], ["multi", ""], [1, "mat-elevation-z0"], ["appearance", "outline", 1, "col-md-3", "pl-0"], ["matInput", "", "name", "daterange", "autocomplete", "off", "required", "", 3, "satDatepicker", "value", "dateChange", "dateInput"], [3, "rangeMode"], ["picker", ""], ["matSuffix", "", 3, "for"], ["matInput", "", "type", "text", "placeholder", "Busca por documento", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "placeholder", "Busca por beneficiario", 3, "ngModel", "ngModelChange", "input"], ["appearance", "outline", 1, "col-md-2"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], ["value", "Activo"], ["value", "Anulada"], ["class", "table table-bordered table-striped table-responsive-sm table-sm", "style", "font-size: small", 4, "ngIf", "ngIfElse"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["size", "sm", 1, "d-flex", "justify-content-center", "pagination-rounded", "pagination-sm", 3, "collectionSize", "page", "maxSize", "pageSize", "rotate", "boundaryLinks", "collectionSizeChange", "pageChange"], ["notData", ""], [3, "swalOptions"], ["confirmacionAnular", ""], [1, "table", "table-bordered", "table-striped", "table-responsive-sm", "table-sm", 2, "font-size", "small"], [1, "text-center", "col-1"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["width", "60"], ["class", "label label-success", 4, "ngIf"], [1, "text-center"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "btn-sm", "waves-effect", "waves-light"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", ""], ["target", "_blank", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "href"], [1, "fa", "fa-print"], ["class", "dropdown-item waves-light waves-effect caja-botones bg-danger", "href", "javascript:;", 3, "swal", "click", 4, "ngIf"], [1, "label", "label-success"], ["href", "javascript:;", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", "bg-danger", 3, "swal", "click"], [1, "fa", "fa-close"], [1, "d-flex", "justify-content-center"], [3, "loading"]], template: function NotasContablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Notas Contables");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotasContablesComponent_Template_button_click_9_listener() { return ctx.openClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-accordion", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-expansion-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Rango de fechas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dateChange", function NotasContablesComponent_Template_input_dateChange_18_listener($event) { return ctx.selectedDate($event); })("dateInput", function NotasContablesComponent_Template_input_dateInput_18_listener($event) { return ctx.selectedDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "sat-datepicker", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "sat-datepicker-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotasContablesComponent_Template_input_ngModelChange_25_listener($event) { return ctx.filtros.codigo = $event; })("input", function NotasContablesComponent_Template_input_input_25_listener() { return ctx.filtrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Beneficiario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotasContablesComponent_Template_input_ngModelChange_29_listener($event) { return ctx.filtros.tercero = $event; })("input", function NotasContablesComponent_Template_input_input_29_listener() { return ctx.filtrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotasContablesComponent_Template_mat_select_ngModelChange_33_listener($event) { return ctx.filtros.estado = $event; })("selectionChange", function NotasContablesComponent_Template_mat_select_selectionChange_33_listener() { return ctx.filtrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Anulada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, NotasContablesComponent_table_40_Template, 27, 1, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, NotasContablesComponent_small_41_Template, 2, 3, "small", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "ngb-pagination", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("collectionSizeChange", function NotasContablesComponent_Template_ngb_pagination_collectionSizeChange_42_listener($event) { return ctx.TotalItems = $event; })("pageChange", function NotasContablesComponent_Template_ngb_pagination_pageChange_42_listener($event) { return ctx.page = $event; })("pageChange", function NotasContablesComponent_Template_ngb_pagination_pageChange_42_listener() { return ctx.filtrar(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, NotasContablesComponent_ng_template_43_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "swal", 28, 29);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("satDatepicker", _r0)("value", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filtros.codigo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filtros.tercero);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filtros.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.Cargando && ctx.NotasContables.length > 0)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.TotalItems != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", ctx.TotalItems)("page", ctx.page)("maxSize", 10)("pageSize", 20)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__["SatDatepickerInput"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__["SatDatepicker"], saturn_datepicker__WEBPACK_IMPORTED_MODULE_10__["SatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbPagination"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_18__["SwalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbDropdownMenu"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_18__["SwalDirective"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_19__["NotDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vdGFzLWNvbnRhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBIiwiZmlsZSI6Im5vdGFzLWNvbnRhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XHJcbn1cclxuLyogXHJcbi5iIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5jb2wtZm9ybS1sYWJlbC1zbSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1taW5pIHtcclxuICAgIHBhZGRpbmc6IDRweCA2cHggMnB4IDZweCAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIG1pbi13aWR0aDogNHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYWphLWJvdG9uZXMge1xyXG4gICAgcGFkZGluZzogM3B4IDlweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgICAuYnRuLXNtIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHghaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1kYXRhdGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnQtMTAge1xyXG4gICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRoZWFkIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgLmlucHV0LXNtLFxyXG4gICAgICAgICAgICAuaW5wdXQtc206Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJsYS1maWx0cm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbn0gKi8iXX0= */"] });


/***/ }),

/***/ "xAB+":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/borradorcomprobantes/borradorcomprobantes.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BorradorcomprobantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorradorcomprobantesComponent", function() { return BorradorcomprobantesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BorradorcomprobantesComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Title);
} }
class BorradorcomprobantesComponent {
    constructor(http) {
        this.http = http;
        this.Tipo_Comprobante = '';
        this.Borrador = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Identificacion_Funcionario: any = JSON.parse(localStorage.getItem('User')).Identificacion_Funcionario;
        this.borradores = [];
    }
    ngOnInit() {
        this.listaBorradores();
    }
    listaBorradores() {
        let p = {
            Tipo_Comprobante: this.Tipo_Comprobante,
        };
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/lista_borrador_contable.php', { params: p }).subscribe((data) => {
            this.borradores = data;
        });
    }
    sendDatosBorrador(id_borrador) {
        if (id_borrador != '') {
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ruta + 'php/contabilidad/detalles_borrador_contable.php', { params: { id: id_borrador } }).subscribe((data) => {
                this.Borrador.emit(data);
            });
        }
        else {
            this.Borrador.emit('clean');
        }
    }
}
BorradorcomprobantesComponent.ɵfac = function BorradorcomprobantesComponent_Factory(t) { return new (t || BorradorcomprobantesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BorradorcomprobantesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BorradorcomprobantesComponent, selectors: [["app-borradorcomprobantes"]], inputs: { Tipo_Comprobante: "Tipo_Comprobante" }, outputs: { Borrador: "Borrador" }, decls: 4, vars: 1, consts: [["name", "borrador", "id", "borrador", 1, "form-control", "form-control-sm", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function BorradorcomprobantesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BorradorcomprobantesComponent_Template_select_change_0_listener($event) { return ctx.sendDatosBorrador($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ninguno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BorradorcomprobantesComponent_option_3_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.borradores);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3JyYWRvcmNvbXByb2JhbnRlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "xb9E":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/ingresos/comprobanteingresocrear/tablafacturascargadas/tablafacturascargadas.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: TablafacturascargadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablafacturascargadasComponent", function() { return TablafacturascargadasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TablafacturascargadasComponent_tr_26_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TablafacturascargadasComponent_tr_26_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.Cuenta, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, item_r9.ValorDescuento), " ");
} }
function TablafacturascargadasComponent_tr_26_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const F_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", F_r1.Cuenta_Mayor_Pagar, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, F_r1.ValorMayorPagar), " ");
} }
function TablafacturascargadasComponent_tr_26_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const F_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, F_r1.ValorMayorPagar), " ");
} }
function TablafacturascargadasComponent_tr_26_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Valor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TablafacturascargadasComponent_tr_26_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.Cuenta, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, item_r12.Valor), " ");
} }
function TablafacturascargadasComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TablafacturascargadasComponent_tr_26_div_22_Template, 7, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TablafacturascargadasComponent_tr_26_div_23_Template, 6, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TablafacturascargadasComponent_tr_26_div_25_Template, 14, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TablafacturascargadasComponent_tr_26_div_26_Template, 8, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TablafacturascargadasComponent_tr_26_div_28_Template, 7, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TablafacturascargadasComponent_tr_26_div_29_Template, 6, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const F_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "fila", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", F_r1.Codigo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, F_r1.Total_Compra), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 17, F_r1.Pagado), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 19, F_r1.Gravada), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 21, F_r1.Iva), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 23, F_r1.Exenta), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 25, F_r1.Por_Pagar), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", F_r1.DescuentosFactura.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", F_r1.DescuentosFactura);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", F_r1.Cuenta_Mayor_Pagar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", F_r1.Cuenta_Mayor_Pagar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", F_r1.RetencionesFacturas.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", F_r1.RetencionesFacturas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 27, F_r1.ValorIngresado), " ");
} }
class TablafacturascargadasComponent {
    constructor() { }
    ngOnInit() {
    }
}
TablafacturascargadasComponent.ɵfac = function TablafacturascargadasComponent_Factory(t) { return new (t || TablafacturascargadasComponent)(); };
TablafacturascargadasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablafacturascargadasComponent, selectors: [["app-tablafacturascargadas"]], inputs: { Facturas: "Facturas" }, decls: 27, vars: 1, consts: [[1, "table", 2, "max-height", "400px"], [1, "thead-default"], [3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [1, "text-rigth"], ["class", "row", 4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "text-right"], [1, "row"], [1, "col-md-6"], [1, "col-md-6", "text-right"], [1, "form", "group"], [1, "form-group"]], template: function TablafacturascargadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pagado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gravado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Iva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Excenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Por Pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Descuentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mayor a Pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Retenciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Valor Recibido ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TablafacturascargadasComponent_tr_26_Template, 33, 29, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Facturas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: ["label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdGFibGFmYWN0dXJhc2NhcmdhZGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJ0YWJsYWZhY3R1cmFzY2FyZ2FkYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "xsgL":
/*!************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/comprobantes.module.ts ***!
  \************************************************************************/
/*! exports provided: MY_FORMATS, ComprobantesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprobantesModule", function() { return ComprobantesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notas_contables_notas_contables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notas-contables/notas-contables.component */ "psBj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");
/* harmony import */ var _notas_contables_crear_nota_contable_crear_nota_contable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notas-contables/crear-nota-contable/crear-nota-contable.component */ "llSQ");
/* harmony import */ var _comprobantes_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comprobantes-routing.module */ "z2lZ");
/* harmony import */ var mydaterangepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mydaterangepicker */ "1B6z");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _borradorcomprobantes_borradorcomprobantes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./borradorcomprobantes/borradorcomprobantes.component */ "xAB+");
/* harmony import */ var _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./egresos/egresos.component */ "KlAU");
/* harmony import */ var _egresos_comprobanteegresovarioscrear_comprobanteegresovarioscrear_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./egresos/comprobanteegresovarioscrear/comprobanteegresovarioscrear.component */ "EShg");
/* harmony import */ var _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ingresos/ingresos.component */ "eAy/");
/* harmony import */ var _ingresos_comprobanteingresocrear_comprobanteingresocrear_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ingresos/comprobanteingresocrear/comprobanteingresocrear.component */ "BScy");
/* harmony import */ var _ingresos_comprobanteingresocrear_tablafacturafaltante_tablafacturafaltante_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ingresos/comprobanteingresocrear/tablafacturafaltante/tablafacturafaltante.component */ "61c1");
/* harmony import */ var _ingresos_comprobanteingresocrear_tablafacturascargadas_tablafacturascargadas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ingresos/comprobanteingresocrear/tablafacturascargadas/tablafacturascargadas.component */ "xb9E");
/* harmony import */ var _notas_carteras_notas_carteras_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notas-carteras/notas-carteras.component */ "HT2o");
/* harmony import */ var _notas_carteras_notascarteracrear_notascarteracrear_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notas-carteras/notascarteracrear/notascarteracrear.component */ "yjle");
/* harmony import */ var _notascredito_notascredito_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./notascredito/notascredito.component */ "21R5");
/* harmony import */ var _notascredito_notascreditocrear_notascreditocrear_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notascredito/notascreditocrear/notascreditocrear.component */ "4CpT");
/* harmony import */ var _notascredito_notascreditover_notascreditover_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notascredito/notascreditover/notascreditover.component */ "Kz+M");
/* harmony import */ var _globales__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../globales */ "Dgt4");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ "/o1g");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! saturn-datepicker */ "nJc8");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material-moment-adapter */ "ftoJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "fXoL");



































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
class ComprobantesModule {
}
ComprobantesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: ComprobantesModule });
ComprobantesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ factory: function ComprobantesModule_Factory(t) { return new (t || ComprobantesModule)(); }, providers: [
        _globales__WEBPACK_IMPORTED_MODULE_23__["Globales"],
        {
            provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__["DateAdapter"],
            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_31__["MomentDateAdapter"],
            deps: [saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__["MAT_DATE_LOCALE"]],
        },
        { provide: saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _comprobantes_routing_module__WEBPACK_IMPORTED_MODULE_8__["ComprobantesRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeaheadModule"],
            mydaterangepicker__WEBPACK_IMPORTED_MODULE_9__["MyDateRangePickerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
            saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__["SatDatepickerModule"],
            saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__["SatNativeDateModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__["SweetAlert2Module"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](ComprobantesModule, { declarations: [_notas_contables_notas_contables_component__WEBPACK_IMPORTED_MODULE_1__["NotasContablesComponent"],
        _notas_contables_crear_nota_contable_crear_nota_contable_component__WEBPACK_IMPORTED_MODULE_7__["CrearNotaContableComponent"],
        _borradorcomprobantes_borradorcomprobantes_component__WEBPACK_IMPORTED_MODULE_11__["BorradorcomprobantesComponent"],
        _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_12__["EgresosComponent"],
        _egresos_comprobanteegresovarioscrear_comprobanteegresovarioscrear_component__WEBPACK_IMPORTED_MODULE_13__["ComprobanteegresovarioscrearComponent"],
        _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_14__["IngresosComponent"],
        _ingresos_comprobanteingresocrear_comprobanteingresocrear_component__WEBPACK_IMPORTED_MODULE_15__["ComprobanteingresocrearComponent"],
        _ingresos_comprobanteingresocrear_tablafacturafaltante_tablafacturafaltante_component__WEBPACK_IMPORTED_MODULE_16__["TablafacturafaltanteComponent"],
        _ingresos_comprobanteingresocrear_tablafacturascargadas_tablafacturascargadas_component__WEBPACK_IMPORTED_MODULE_17__["TablafacturascargadasComponent"],
        _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_14__["IngresosComponent"],
        _notas_carteras_notas_carteras_component__WEBPACK_IMPORTED_MODULE_18__["NotasCarterasComponent"],
        _notas_carteras_notascarteracrear_notascarteracrear_component__WEBPACK_IMPORTED_MODULE_19__["NotascarteracrearComponent"],
        _notascredito_notascredito_component__WEBPACK_IMPORTED_MODULE_20__["NotascreditoComponent"],
        _notascredito_notascreditocrear_notascreditocrear_component__WEBPACK_IMPORTED_MODULE_21__["NotascreditocrearComponent"],
        _notascredito_notascreditover_notascreditover_component__WEBPACK_IMPORTED_MODULE_22__["NotascreditoverComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPaginationModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _comprobantes_routing_module__WEBPACK_IMPORTED_MODULE_8__["ComprobantesRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeaheadModule"],
        mydaterangepicker__WEBPACK_IMPORTED_MODULE_9__["MyDateRangePickerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__["SatDatepickerModule"],
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_30__["SatNativeDateModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__["SweetAlert2Module"]] }); })();


/***/ }),

/***/ "yjle":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/notas-carteras/notascarteracrear/notascarteracrear.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NotascarteracrearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotascarteracrearComponent", function() { return NotascarteracrearComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ajustes/informacion-base/services/swal.service */ "jFFx");
/* harmony import */ var _notas_carteras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notas-carteras.service */ "IktM");
/* harmony import */ var _plan_cuentas_plan_cuentas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../plan-cuentas/plan-cuentas.service */ "bIft");
/* harmony import */ var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/cabecera/cabecera.component */ "SfOs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _borradorcomprobantes_borradorcomprobantes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../borradorcomprobantes/borradorcomprobantes.component */ "xAB+");














const _c0 = ["FormNotaContable"];
const _c1 = ["confirmacionSwal"];
function NotascarteracrearComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r10.text, " ");
} }
function NotascarteracrearComponent_div_65_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No Existen Facturas para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NotascarteracrearComponent_div_65_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotascarteracrearComponent_div_65_tr_31_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const item_r14 = ctx.$implicit; const i_r15 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.addListInvoice(item_r14, i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_div_65_tr_31_Template_input_ngModelChange_19_listener($event) { const item_r14 = ctx.$implicit; return item_r14.Abono = $event; })("blur", function NotascarteracrearComponent_div_65_tr_31_Template_input_blur_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const i_r15 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.validarSaldoFactura(i_r15, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Factura", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Factura", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r14.Fecha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r14.Factura, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 15, item_r14.Valor_Factura), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 17, item_r14.Valor_Abono), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 19, item_r14.Valor_Saldo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "abono", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "abono", i_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r14.Abono);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r14.Nat, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 21, item_r14.Movimiento_Debito), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 23, item_r14.Movimiento_Credito), " ");
} }
function NotascarteracrearComponent_div_65_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r13.Total_Abono), "");
} }
function NotascarteracrearComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Facturas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Vlr. Factura ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Vlr. Abono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Vlr. Saldo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Abono");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Nat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Movimiento Debito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Movimiento_Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, NotascarteracrearComponent_div_65_tr_30_Template, 5, 0, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, NotascarteracrearComponent_div_65_tr_31_Template, 28, 25, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, NotascarteracrearComponent_div_65_tr_32_Template, 7, 3, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotascarteracrearComponent_div_65_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.addInvoicesToAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.Lista_Facturas.length == 0 && !ctx_r2.Cargando);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.Lista_Facturas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.Lista_Facturas.length > 0);
} }
function NotascarteracrearComponent_tr_97_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotascarteracrearComponent_tr_97_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const i_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r25.EliminarCuenta(i_r23); return ctx_r25.armarDatosBorrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NotascarteracrearComponent_tr_97_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_2_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Cuenta = $event; })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r22 = ctx.$implicit; const i_r23 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.BuscarCuenta(item_r22.Cuenta, i_r23); })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.tab($event, "Nit" + i_r23); })("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r22 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r32.armarDatosBorrador(); return ctx_r32.validarCampo(item_r22.Cuenta, $event, "Cuenta"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_4_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Nit = $event; })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.tab($event, "Centro_Costo" + i_r23); })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r22 = ctx.$implicit; const i_r23 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.BuscarDatosCliente(item_r22.Nit, i_r23); })("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r22 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r36.armarDatosBorrador(); return ctx_r36.validarCampo(item_r22.Nit, $event, "Nit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_6_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Centro_Costo = $event; })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r22 = ctx.$implicit; const i_r23 = ctx.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r38.BuscarDatosCentro(item_r22.Centro_Costo, i_r23); })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r39.tab($event, "Documento" + i_r23); })("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r22 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r40.armarDatosBorrador(); return ctx_r40.validarCampo(item_r22.Centro_Costo, $event, "Centro de Costo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r41.tab($event, "Concepto" + i_r23); })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_8_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Documento = $event; })("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r43.armarDatosBorrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotascarteracrearComponent_tr_97_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r22 = ctx.$implicit; const i_r23 = ctx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r44.showFacturas(item_r22.Nit_Cuenta, i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r45.armarDatosBorrador(); })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r46.tab($event, "Base" + i_r23); })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_12_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Concepto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r48.armarDatosBorrador(); })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r49.tab($event, "Debito" + i_r23); })("change", function NotascarteracrearComponent_tr_97_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r50.calcularBase(i_r23, $event.target.value); })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_14_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Base = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r52.armarDatosBorrador(); })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r53.tab($event, "Credito" + i_r23); })("change", function NotascarteracrearComponent_tr_97_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r54.ActualizaValores(i_r23); return ctx_r54.validarDebCred(i_r23, "Debito"); })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_16_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Debito = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r56.armarDatosBorrador(); })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r57.tab($event, "Deb_Niif" + i_r23); })("change", function NotascarteracrearComponent_tr_97_Template_input_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r58.ActualizaValores(i_r23); return ctx_r58.validarDebCred(i_r23, "Credito"); })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_18_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Credito = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r60.armarDatosBorrador(); })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r61.tab($event, "Cred_Niif" + i_r23); })("change", function NotascarteracrearComponent_tr_97_Template_input_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r62.validarDebCred(i_r23, "Debito"); })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_20_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Deb_Niif = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function NotascarteracrearComponent_tr_97_Template_input_blur_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r64.armarDatosBorrador(); })("keyup", function NotascarteracrearComponent_tr_97_Template_input_keyup_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r65.tab($event, "Cuenta" + (i_r23 + 1)); })("change", function NotascarteracrearComponent_tr_97_Template_input_change_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const i_r23 = ctx.index; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r66.validarDebCred(i_r23, "Credito"); })("ngModelChange", function NotascarteracrearComponent_tr_97_Template_input_ngModelChange_22_listener($event) { const item_r22 = ctx.$implicit; return item_r22.Cred_Niif = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, NotascarteracrearComponent_tr_97_a_24_Template, 3, 0, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](132);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](130);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "fila", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Cuenta", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Cuenta)("ngbTypeahead", ctx_r3.search1)("resultTemplate", _r6)("inputFormatter", ctx_r3.formatter1)("required", ctx_r3.Cuentas_Contables.length - 1 != i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Nit", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Nit", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Nit)("ngbTypeahead", ctx_r3.search)("resultTemplate", _r4)("inputFormatter", ctx_r3.formatter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Centro_Costo", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Centro_Costo", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Centro_Costo)("ngbTypeahead", ctx_r3.search2)("resultTemplate", _r8)("inputFormatter", ctx_r3.formatter2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Documento", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Documento", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Documento);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Concepto", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Concepto", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Concepto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Base", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Base", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Base);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Debito", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Debito", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Debito);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Credito", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Credito", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Deb_Niif", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Deb_Niif", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Deb_Niif);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "Cred_Niif", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "Cred_Niif", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r22.Cred_Niif);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.Cuentas_Contables.length - 1 != i_r23);
} }
function NotascarteracrearComponent_ng_template_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r68 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r68.Nombre);
} }
function NotascarteracrearComponent_ng_template_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r70 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r70.Codigo, " ");
} }
function NotascarteracrearComponent_ng_template_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r72 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", r_r72.Nombre, " ");
} }
const _c2 = function () { return ["/contabilidad/comprobantes/notas-cartera"]; };
class NotascarteracrearComponent {
    constructor(route, http, router, swalService, _notas, _companies) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.swalService = swalService;
        this._notas = _notas;
        this._companies = _companies;
        this.datosCabecera = {
            Titulo: 'Nueva Nota Cartera',
            Fecha: new Date(),
            Codigo: ''
        };
        this.Tipo_Comprobante = 'Nota Cartera';
        this.alertOption = {};
        this.Cargando = false;
        this.Mostrar_Facturas = false;
        this.Facturas = [];
        this.Tipo_Documento = '';
        this.fecha = new Date();
        this.Fecha = '';
        this.display_Banco = 'none';
        this.Proveedores = [];
        this.Lista_Facturas = [{
                RetencionesFactura: []
            }];
        this.Centro_Costo = '';
        this.Nom_Centro_Costo = '';
        this.Fecha_Nota_Contable = this.fechaHoy();
        this.Id_Proveedor = '';
        this.NombreProveedor = '';
        this.Id_Cliente = '';
        this.Cliente = [];
        // public Funcionario=JSON.parse(localStorage.getItem("User"));
        this.Cuenta = [];
        this.FormaPago = [];
        this.Rentenciones = [];
        this.RentencionesFactura = [];
        this.Cuentas_Contables = [{
                Cuenta: '',
                Nit: '',
                Centro_Costo: '',
                Documento: '',
                Concepto: '',
                Base: 0,
                Debito: 0,
                Credito: 0,
                Deb_Niif: 0,
                Cred_Niif: 0
            }];
        this.Cuenta_Banco = '';
        this.Costo_Ingreso = 0;
        this.Total_Debito = 0;
        this.Total_Credito = 0;
        this.Retenciones_Totales = 0;
        this.Mostrar = false;
        this.Mostrar_Cliente = false;
        this.Impuesto = 0;
        this.reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Subtotal);
        this.reducer_deb = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Debito);
        this.reducer_cred = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Credito);
        this.reducer_valorp = (accumulator, currentValue) => accumulator + parseFloat(currentValue.ValorIngresado);
        this.reducer_abono = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Abono);
        this.reducer3 = (accumulator, currentValue) => {
            var acu_iva = 0;
            currentValue.RetencionesFacturas.forEach((v, i) => {
                acu_iva += parseFloat(v.Valor);
            });
            return accumulator + acu_iva;
        };
        this.ListaRetenciones = [];
        this.ListaFact = [];
        this.Total_Facturas = 0;
        this.Mostrar_Opciones = true;
        this.Mostrar_Input_Cli = true;
        this.Centros = [];
        this.Documento = '';
        this.Concepto = '';
        this.idBorrador = '';
        this.Codigo = '';
        this.Total_Abono = 0;
        this.Id_Empresa = '';
        this.companies = [];
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 4 ? []
            : this.Cliente.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter = (x) => x.Nombre;
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 4 ? []
            : this.Cuenta.filter(v => v.Codigo.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter1 = (x) => x.Codigo;
        this.search2 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(term => term.length < 2 ? []
            : this.Centros.filter(v => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 100)));
        this.formatter2 = (x) => x.Nombre;
        let queryParams = this.route.snapshot.queryParams;
        if (queryParams.facturas != undefined && queryParams.cliente != undefined) {
            this.Id_Cliente = queryParams.cliente;
            this.Cargando = true;
            this.Mostrar_Opciones = false;
            this.Mostrar_Cliente = true;
            this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/facturas_seleccionadas_cliente.php', { params: queryParams }).subscribe((data) => {
                this.Mostrar = false;
                this.Cargando = false;
                this.Mostrar_Input_Cli = false;
                this.Lista_Facturas = data.Facturas;
                this.Nom_Cliente = data.Cliente.Nombre;
            });
        }
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/proveedor_buscar.php').subscribe((data) => {
            this.Proveedores = data;
        });
        this.alertOption = {
            title: "¿Está Seguro?",
            text: "Se dispone a Guardar este Comprobante",
            showCancelButton: true,
            cancelButtonText: "No, Dejame Comprobar!",
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            input: 'select',
            inputOptions: {
                Pcga: 'Imprimir en PCGA',
                Niif: 'Imprimir en NIIF'
            },
            preConfirm: (value) => {
                return new Promise((resolve) => {
                    this.guardarNotaCartera(this.FormNotaContable, value);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.isLoading()
        };
    }
    ngOnInit() {
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascarteras/nit_buscar.php').subscribe((data) => {
            this.Cliente = data;
        });
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/cuentas.php').subscribe((data) => {
            this.Cuentas = data;
        });
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php').subscribe((data) => {
            this.Cuenta = data.Activo;
        });
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascarteras/centrocosto_buscar.php').subscribe((data) => {
            this.Centros = data;
        });
        // this.getCodigoNuevaNota();
        this.ListarRetenciones();
    }
    BuscarProveedor(modelo) {
        this.NombreProveedor = modelo.Proveedores;
        this.Id_Proveedor = modelo.Id_Proveedor;
    }
    BuscarDatosCliente(cliente, pos) {
        if (pos != null && pos != undefined) {
            this.Cuentas_Contables[pos].Nit_Cuenta = cliente.ID;
            this.Cuentas_Contables[pos].Tipo_Nit = cliente.Tipo;
        }
        else {
            this.Id_Cliente = cliente.ID;
            this.Tipo_Beneficiario = cliente.Tipo;
        }
    }
    getDatosTercero(nit) {
        return this.Cliente.find(x => x.ID == nit);
    }
    ListasEmpresas() {
        this._companies.getCompanies().subscribe((data) => {
            this.companies = data.data;
        });
    }
    BuscarDatosCentro(centro, pos) {
        if (pos != undefined && pos != null) {
            if (centro == '') {
                this.Cuentas_Contables[pos].Id_Centro_Costo = centro;
            }
            else {
                this.Cuentas_Contables[pos].Id_Centro_Costo = centro.Id_Centro_Costo;
            }
        }
        else {
            this.Centro_Costo = centro.Id_Centro_Costo;
        }
    }
    BuscarCuenta(cuenta, pos) {
        let pos2 = pos + 1;
        if (cuenta.Centro_Costo == 'S') { // Validar si la cuenta es para Centro de costos o no.
            this.Cuentas_Contables[pos].Centro_Costo = this.Nom_Centro_Costo;
            this.Cuentas_Contables[pos].Id_Centro_Costo = this.Nom_Centro_Costo.Id_Centro_Costo;
            document.getElementById('Centro_Costo' + pos).style.display = 'block';
        }
        else {
            this.Cuentas_Contables[pos].Centro_Costo = '';
            this.Cuentas_Contables[pos].Id_Centro_Costo = 0;
            document.getElementById('Centro_Costo' + pos).style.display = 'none';
        }
        this.Cuentas_Contables[pos].Id_Plan_Cuentas = cuenta.Id_Plan_Cuentas;
        this.Cuentas_Contables[pos].Documento = this.Documento;
        this.Cuentas_Contables[pos].Concepto = this.Concepto;
        // Nit Beneficiario
        this.Cuentas_Contables[pos].Nit = this.Nom_Cliente;
        this.Cuentas_Contables[pos].Nit_Cuenta = this.Nom_Cliente.ID;
        this.Cuentas_Contables[pos].Tipo_Nit = this.Nom_Cliente.Tipo;
        let posicion = this.ListaRetenciones.findIndex(x => x.Id_Plan_Cuenta === cuenta.Id_Plan_Cuentas);
        if (posicion >= 0) {
            document.getElementById('Base' + pos).readOnly = false;
            this.Cuentas_Contables[pos].Porcentaje = this.ListaRetenciones[posicion].Porcentaje;
        }
        if (cuenta.Id_Plan_Cuentas) {
            if (this.Cuentas_Contables[pos2] == undefined) {
                this.Cuentas_Contables.push({
                    Cuenta: '',
                    Nit: '',
                    Centro_Costo: '',
                    Documento: '',
                    Concepto: '',
                    Base: 0,
                    Debito: 0,
                    Credito: 0,
                    Deb_Niif: 0,
                    Cred_Niif: 0
                });
            }
        }
    }
    ActualizaValores(pos) {
        if (pos != null && pos != undefined) {
            this.Cuentas_Contables[pos].Deb_Niif = this.Cuentas_Contables[pos].Debito;
            this.Cuentas_Contables[pos].Cred_Niif = this.Cuentas_Contables[pos].Credito;
        }
        this.Total_Credito = this.Cuentas_Contables.reduce(this.reducer_cred, 0);
        this.Total_Debito = this.Cuentas_Contables.reduce(this.reducer_deb, 0);
    }
    EliminarCuenta(pos) {
        this.Cuentas_Contables.splice(pos, 1);
        setTimeout(() => {
            this.ActualizaValores();
        }, 100);
    }
    guardarNotaCartera(Formulario, tipo) {
        let info = JSON.stringify(Formulario.value);
        let datos = new FormData();
        datos.append('Datos', info);
        datos.append('Cuentas_Contables', JSON.stringify(this.Cuentas_Contables));
        this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascarteras/guardar_nota.php', datos).subscribe((data) => {
            this.confirmacionSwal.title = data.titulo;
            this.confirmacionSwal.text = data.mensaje;
            this.confirmacionSwal.type = data.tipo;
            this.confirmacionSwal.show();
            if (data.tipo == 'success' && data.id != undefined) {
                localStorage.removeItem('borradorContable');
                if (tipo == 'Pcga') {
                    window.open(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascarteras/descarga_pdf.php?id=' + data.id, '_blank'); // SE IMPRIME EN FORMATO PCGA
                }
                else {
                    window.open(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascarteras/descarga_pdf.php?id=' + data.id + '&tipo=Niif', '_blank'); // SE IMPRIME EN FORMATO NIIF
                }
                setTimeout(() => {
                    this.router.navigate(['/comprobante/notascartera']);
                }, 1000);
            }
        }, error => {
            this.confirmacionSwal.text = "Ha ocurrido un error inesperado, la conexión a fallado.";
            this.confirmacionSwal.title = "Oops!";
            this.confirmacionSwal.type = "error";
            this.confirmacionSwal.show();
        });
    }
    HomologoDebCred(tipo, pos) {
        switch (tipo) {
            case 'Debito':
                this.Cuentas_Contables[pos].Deb_Niif = this.Cuentas_Contables[pos].Debito;
                break;
            case 'Credito':
                this.Cuentas_Contables[pos].Cred_Niif = this.Cuentas_Contables[pos].Credito;
                break;
        }
    }
    ListarRetenciones() {
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/lista_retenciones.php').subscribe((data) => {
            this.ListaRetenciones = data;
        });
    }
    calcularBase(pos, valor) {
        if (valor != '') {
            this.Cuentas_Contables[pos].Credito = Math.round(parseFloat(valor) * (parseFloat(this.Cuentas_Contables[pos].Porcentaje) / 100));
            this.Cuentas_Contables[pos].Cred_Niif = Math.round(parseFloat(valor) * (parseFloat(this.Cuentas_Contables[pos].Porcentaje) / 100));
        }
        else {
            this.Cuentas_Contables[pos].Deb_Niif = 0;
        }
        this.ActualizaValores();
    }
    fechaHoy() {
        let fecha = new Date();
        fecha = (fecha.toISOString()).split('T')[0];
        return fecha;
    }
    getCodigoNuevaNota(fecha) {
        let datos = {};
        if (fecha != undefined && fecha != null) {
            datos.Fecha = fecha;
        }
        else {
            datos.Fecha = this.fechaHoy();
        }
        if (this.Tipo_Documento != '') {
            datos.Tipo = this.Tipo_Documento;
            this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascarteras/get_codigo.php', { params: datos }).subscribe((data) => {
                this.datosCabecera.Codigo = data.consecutivo;
                this.Codigo = data.consecutivo;
            });
        }
    }
    validarDebCred(pos, campo) {
        if (campo === 'Credito') {
            if (this.Cuentas_Contables[pos].Credito == '' || this.Cuentas_Contables[pos].Credito == null || this.Cuentas_Contables[pos].Cred_Niif == '' || this.Cuentas_Contables[pos].Cred_Niif == null) {
                this.Cuentas_Contables[pos].Credito = 0;
                this.Cuentas_Contables[pos].Cred_Niif = 0;
                this.ActualizaValores();
            }
        }
        else {
            if (this.Cuentas_Contables[pos].Debito == '' || this.Cuentas_Contables[pos].Debito == null || this.Cuentas_Contables[pos].Deb_Niif == '' || this.Cuentas_Contables[pos].Deb_Niif == null) {
                this.Cuentas_Contables[pos].Debito = 0;
                this.Cuentas_Contables[pos].Deb_Niif = 0;
                this.ActualizaValores();
            }
        }
    }
    showFacturas(nit, pos) {
        if (nit != undefined && nit != '' && nit != null) {
            this.position_document = pos;
            let p = { nit: nit };
            let id_plan_cuenta = this.Cuentas_Contables[pos].Id_Plan_Cuentas;
            if (id_plan_cuenta != '') {
                p.id_plan_cuenta = id_plan_cuenta;
            }
            this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascarteras/lista_facturas.php', { params: p }).subscribe((data) => {
                this.Lista_Facturas = data.Facturas;
                this.Mostrar_Facturas = true;
                setTimeout(() => {
                    this.calcularTotalAbonoCartera();
                }, 200);
            });
        }
    }
    addListInvoice(factura, pos) {
        let existe = this.Facturas.findIndex(fact => fact.Factura === factura.Factura);
        if (existe < 0) {
            this.Lista_Facturas[pos].Abono = this.Lista_Facturas[pos].Valor_Saldo;
            let factura = this.Lista_Facturas[pos];
            this.Facturas.push(factura);
        }
        else {
            this.Lista_Facturas[pos].Abono = 0;
            this.Facturas.splice(existe, 1);
        }
        setTimeout(() => {
            this.calcularTotalAbonoCartera();
        }, 200);
    }
    addInvoicesToAccount() {
        let nit = this.Cuentas_Contables[this.position_document].Nit_Cuenta;
        this.Cuentas_Contables.splice(this.position_document, 1); // Eliminando una fila para introducir las nuevas cuentas.
        let count = this.Cuentas_Contables.length; // Total de filas de las cuentas.
        if (this.Cuentas_Contables[(count - 1)] != undefined) {
            if (this.Cuentas_Contables[(count - 1)].Nit_Cuenta == undefined || this.Cuentas_Contables[(count - 1)].Nit_Cuenta == '') {
                this.Cuentas_Contables.splice((count - 1), 1); // Eliminando ultima fila.
            }
        }
        this.Facturas.forEach(f => {
            // let plan_cuenta = this.obtenerPlanPorTipo(f.Tipo_Factura);
            let object = {
                Centro_Costo: this.Nom_Centro_Costo,
                Id_Centro_Costo: this.Nom_Centro_Costo.Id_Centro_Costo,
                Cuenta: this.obtenerPlanCuenta(f.Codigo),
                Id_Plan_Cuentas: f.Id_Plan_Cuenta,
                Nit: this.getDatosTercero(nit),
                Nit_Cuenta: nit,
                Tipo_Nit: this.getDatosTercero(nit).Tipo,
                Documento: f.Factura,
                Concepto: 'Pago o Abono Factura Nro. ' + f.Factura,
                Base: 0,
                Debito: this.validarDebeOHaber('D', f.Movimiento, f.Abono),
                Credito: this.validarDebeOHaber('C', f.Movimiento, f.Abono),
                Deb_Niif: this.validarDebeOHaber('D', f.Movimiento, f.Abono),
                Cred_Niif: this.validarDebeOHaber('C', f.Movimiento, f.Abono)
            };
            this.Cuentas_Contables.push(object); // Agregando nueva(s) fila(s)
        });
        this.Cuentas_Contables.push({
            Cuenta: '',
            Nit: '',
            Centro_Costo: '',
            Documento: '',
            Concepto: '',
            Base: 0,
            Debito: 0,
            Credito: 0,
            Deb_Niif: 0,
            Cred_Niif: 0
        });
        this.Mostrar_Facturas = false;
        this.Facturas = [];
        this.Lista_Facturas = [];
        this.Total_Abono = 0;
        setTimeout(() => {
            this.ActualizaValores();
            this.armarDatosBorrador();
        }, 200);
    }
    obtenerPlanPorTipo(tipo) {
        let tipo_facturas = {
            Factura_Venta: {
                Cuenta: '130505',
                Naturaleza: 'Credito'
            },
            Factura_Nopos: {
                Cuenta: '130505',
                Naturaleza: 'Credito'
            },
            Nota_Credito: {
                Cuenta: '130505',
                Naturaleza: 'Debito'
            },
            Factura_Capita: {
                Cuenta: '130505',
                Naturaleza: 'Credito'
            },
            Factura_Acta: {
                Cuenta: '133005',
                Naturaleza: 'Credito'
            },
            Devolucion_Compra: {
                Cuenta: '220501',
                Naturaleza: 'Debito'
            },
            Factura_Proveedor_Mantis: {
                Cuenta: '133005',
                Naturaleza: 'Credito'
            }
        };
        return tipo_facturas[tipo];
    }
    obtenerPlanCuenta(codigo) {
        return this.Cuenta.find(x => x.Codigo_Cuenta === codigo);
    }
    validarDebeOHaber(campo, tipo, valor) {
        if (campo === tipo) {
            return Math.abs(valor);
        }
        return '0';
    }
    validarCampo(campo, event, tipo) {
        if (typeof (campo) != 'object' && campo != '') {
            let id = event.target.id;
            document.getElementById(id).focus();
            let swal = {
                codigo: 'error',
                titulo: 'Incorrecto!',
                mensaje: `El valor ${tipo} no es valido.`
            };
            this.swalService.ShowMessage(swal);
        }
    }
    validarSaldoFactura(pos, event) {
        let saldo = parseFloat(this.Lista_Facturas[pos].Valor_Saldo);
        let abono = parseFloat(this.Lista_Facturas[pos].Abono);
        if (abono > saldo) { // Validando que el abono no pueda ser mayor al saldo de una factura de cartera.
            let id = event.target.id;
            document.getElementById(id).focus();
            let swal = {
                codigo: 'error',
                titulo: 'Incorrecto!',
                mensaje: `El valor del abono no puede ser mayor al saldo de la factura.`
            };
            this.swalService.ShowMessage(swal);
        }
        setTimeout(() => {
            this.calcularTotalAbonoCartera();
        }, 200);
    }
    tab(event, ele) {
        this._notas.tabular(event, ele);
    }
    reloadData() {
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/nit_buscar.php').subscribe((data) => {
            this.Cliente = data;
        });
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprobantes/lista_cuentas.php').subscribe((data) => {
            this.Cuenta = data.Activo;
        });
        this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/notascontables/centrocosto_buscar.php').subscribe((data) => {
            this.Centros = data;
        });
    }
    armarDatosBorrador() {
        let datosCabecera = {
            Fecha: this.Fecha_Nota_Contable,
            Beneficiario: this.Nom_Cliente,
            Id_Cliente: this.Id_Cliente,
            Tipo_Beneficiario: this.Tipo_Beneficiario,
            Nom_Centro_Costo: this.Nom_Centro_Costo,
            Centro_Costo: this.Centro_Costo,
            Documento: this.Documento,
            Concepto: this.Concepto,
        };
        let Datos = {
            Cabecera: datosCabecera,
            Cuentas_Contables: this.Cuentas_Contables
        };
        setTimeout(() => {
            let datosBorrador = {
                Id_Borrador_Contabilidad: this.idBorrador,
                Codigo: this.Codigo,
                Tipo_Comprobante: 'Nota Cartera',
                // Identificacion_Funcionario: this.Funcionario.Identificacion_Funcionario,
                Datos: Datos
            };
            let info = this._notas.Utf8.encode(JSON.stringify(datosBorrador));
            let datos = new FormData();
            datos.append('datos', info);
            this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/contabilidad/guardar_borrador_contable.php', datos)
                .subscribe((data) => {
                if (data.status == 202) {
                    if (this.idBorrador == '')
                        this.idBorrador = data.Id_Borrador;
                }
            });
        }, 300);
    }
    setDatosBorrador(data = null) {
        if (data == 'clean') {
            this.resetModel(); // Reinicilizar Campos.
        }
        else {
            let Datos = JSON.parse(data.Datos);
            this.Fecha_Nota_Contable = Datos.Cabecera.Fecha;
            this.Nom_Cliente = Datos.Cabecera.Beneficiario;
            this.Id_Cliente = Datos.Cabecera.Id_Cliente;
            this.Tipo_Beneficiario = Datos.Cabecera.Tipo_Beneficiario;
            this.Nom_Centro_Costo = Datos.Cabecera.Nom_Centro_Costo;
            this.Centro_Costo = Datos.Cabecera.Centro_Costo;
            this.Documento = Datos.Cabecera.Documento;
            this.Concepto = Datos.Cabecera.Concepto;
            this.Cuentas_Contables = Datos.Cuentas_Contables;
            this.datosCabecera.Codigo = data.Codigo;
            this.idBorrador = data.ID;
        }
        setTimeout(() => {
            this.ActualizaValores();
        }, 200);
    }
    resetModel() {
        this.Fecha_Nota_Contable = this.fechaHoy();
        this.Nom_Cliente = '';
        this.Id_Cliente = '';
        this.Nom_Centro_Costo = '';
        this.Centro_Costo = '';
        this.Documento = '';
        this.Concepto = '';
        this.Cuentas_Contables = [{
                Cuenta: '',
                Nit: '',
                Centro_Costo: '',
                Documento: '',
                Concepto: '',
                Base: 0,
                Debito: 0,
                Credito: 0,
                Deb_Niif: 0,
                Cred_Niif: 0
            }];
        this.datosCabecera.Codigo = this.getCodigoNuevaNota();
    }
    calcularTotalAbonoCartera() {
        this.Total_Abono = this.Lista_Facturas.reduce(this.reducer_abono, 0);
    }
}
NotascarteracrearComponent.ɵfac = function NotascarteracrearComponent_Factory(t) { return new (t || NotascarteracrearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ajustes_informacion_base_services_swal_service__WEBPACK_IMPORTED_MODULE_6__["SwalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_notas_carteras_service__WEBPACK_IMPORTED_MODULE_7__["NotasCarterasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_plan_cuentas_plan_cuentas_service__WEBPACK_IMPORTED_MODULE_8__["PlanCuentasService"])); };
NotascarteracrearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotascarteracrearComponent, selectors: [["app-notascarteracrear"]], viewQuery: function NotascarteracrearComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.FormNotaContable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
    } }, decls: 135, vars: 34, consts: [[1, "page-body"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-md-offset-4"], [1, "card"], [3, "datosCabecera"], [1, "card-body", 2, "padding-bottom", "0px"], ["FormNotaContable", "ngForm"], ["type", "hidden", "name", "Id_Borrador", 3, "ngModel", "ngModelChange"], [1, "row", "invoive-info", 2, "margin-bottom", "0", "padding-bottom", "0px"], [1, "col-md-2"], [1, "form-group"], ["name", "Tipo_Doc", "id", "Tipo_Doc", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["value", "Debito-Cliente"], ["value", "Credito-Cliente"], ["value", "Debito-Proveedor"], ["value", "Credito-Proveedor"], ["type", "date", "name", "Fecha_Documento", "id", "Fecha_Nota_Contable", "required", "", 1, "form-control", "form-control-sm", "tab", 3, "ngModel", "ngModelChange", "keyup", "change"], ["name", "company_id", "id", "company_id", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "Cliente", "id", "Cliente", 1, "form-control", "form-control-sm", "f-9", "tab", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["hidden", "", "name", "Beneficiario", "id", "Beneficiario", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["hidden", "", "name", "Tipo_Beneficiario", "id", "Tipo_Beneficiario", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["for", "Centro_Costo"], ["type", "text", "name", "Nom_Centro_Costo", "id", "Centro_Costo", 1, "form-control", "form-control-sm", "f-9", "tab", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["type", "hidden", "name", "Id_Centro_Costo", 3, "ngModel", "ngModelChange"], ["for", ""], ["type", "text", "name", "Documento", "id", "Documento", 1, "form-control", "form-control-sm", 3, "ngModel", "keyup", "ngModelChange"], [1, "col-md-6"], ["name", "Concepto", "id", "Concepto", "rows", "3", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], [1, "col-md-3"], ["for", "borrador"], [3, "Tipo_Comprobante", "Borrador"], ["class", "row", 4, "ngIf"], [1, "col-md-12"], ["title", "Recargar datos iniciales (Terceros, PUC, Centro Costos)", 1, "btn", "btn-link", "btn-sm", "pull-right", 3, "click"], [1, "fa", "fa-refresh"], [1, "table", "invoice-detail-table", "tabla"], [1, "thead-default"], [2, "width", "200px"], [3, "id", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], [1, "table", "table-responsive", "invoice-table", "invoice-total"], [1, "col-md-8"], [1, "col-md-2", "botonFlotante1"], ["href", "", "type", "button", 1, "btn", "btn-success", "btn-block", "btn-enviar", 3, "routerLink"], [1, "col-md-2", "botonFlotante"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-enviar", 3, "disabled"], ["rt", ""], ["rt1", ""], ["rt2", ""], [3, "value"], [1, "col-md-12", "text-center"], [2, "width", "25px"], [2, "width", "50px"], [2, "width", "60px"], [2, "width", "80px", "text-align", "right"], [2, "width", "20px"], [2, "width", "60px", "text-align", "right"], [4, "ngIf"], [1, "btn", "btn-info", "btn-sm", "pull-left", 3, "click"], ["colspan", "11"], [1, "fa", "fa-exclamation-circle", "fa-5x"], [3, "id"], [1, "text-center", 2, "width", "25px"], ["type", "checkbox", 3, "name", "id", "change"], ["type", "number", 3, "name", "id", "ngModel", "ngModelChange", "blur"], ["colspan", "7"], ["colspan", "3"], ["type", "text", "name", "Cuenta", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "required", "ngModelChange", "keyup", "blur"], ["type", "text", 1, "form-control", "form-control-sm", "f-9", 3, "ngModel", "name", "id", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "keyup", "blur"], ["type", "text", 1, "form-control", "form-control-sm", "text-right", "input-document", 3, "name", "id", "ngModel", "keyup", "ngModelChange", "blur"], ["href", "javascript:;", 3, "click"], [1, "fa", "fa-search", 2, "font-weight", "bold"], [1, "form-control", "form-control-sm", 3, "name", "id", "ngModel", "blur", "keyup", "ngModelChange"], ["readonly", "", 1, "form-control", "form-control-sm", "text-right", 3, "name", "id", "ngModel", "blur", "keyup", "change", "ngModelChange"], ["type", "number", 1, "form-control", "form-control-sm", "text-right", 3, "name", "id", "ngModel", "blur", "keyup", "change", "ngModelChange"], [1, "text-center"], ["href", "javascript:;", 3, "click", 4, "ngIf"], [1, "fa", "fa-trash-o", "text-danger"], [1, "f-9"]], template: function NotascarteracrearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-cabecera", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_8_listener($event) { return ctx.idBorrador = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Tipo Doc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_select_ngModelChange_14_listener($event) { return ctx.Tipo_Documento = $event; })("change", function NotascarteracrearComponent_Template_select_change_14_listener() { return ctx.getCodigoNuevaNota(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Seleccione");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Debito Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Credito Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Debito Proveedor y/o Acreedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Credito Proveedor y/o Acreedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_29_listener($event) { return ctx.Fecha_Nota_Contable = $event; })("keyup", function NotascarteracrearComponent_Template_input_keyup_29_listener($event) { return ctx.tab($event, "Cliente"); })("change", function NotascarteracrearComponent_Template_input_change_29_listener($event) { return ctx.getCodigoNuevaNota($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_select_ngModelChange_34_listener($event) { return ctx.Id_Empresa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, NotascarteracrearComponent_option_35_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Beneficiario Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_40_listener($event) { return ctx.Nom_Cliente = $event; })("keyup", function NotascarteracrearComponent_Template_input_keyup_40_listener($event) { return ctx.tab($event, "Centro_Costo"); })("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_40_listener() { return ctx.BuscarDatosCliente(ctx.Nom_Cliente); })("blur", function NotascarteracrearComponent_Template_input_blur_40_listener($event) { return ctx.validarCampo(ctx.Nom_Cliente, $event, "Beneficiario"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_41_listener($event) { return ctx.Id_Cliente = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_42_listener($event) { return ctx.Tipo_Beneficiario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Centro Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_47_listener($event) { return ctx.Nom_Centro_Costo = $event; })("keyup", function NotascarteracrearComponent_Template_input_keyup_47_listener($event) { return ctx.tab($event, "Documento"); })("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_47_listener() { return ctx.BuscarDatosCentro(ctx.Nom_Centro_Costo); })("blur", function NotascarteracrearComponent_Template_input_blur_47_listener($event) { return ctx.validarCampo(ctx.Nom_Centro_Costo, $event, "Centro de Costo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_48_listener($event) { return ctx.Centro_Costo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function NotascarteracrearComponent_Template_input_keyup_53_listener($event) { return ctx.tab($event, "Concepto"); })("ngModelChange", function NotascarteracrearComponent_Template_input_ngModelChange_53_listener($event) { return ctx.Documento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Concepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function NotascarteracrearComponent_Template_textarea_keyup_58_listener($event) { return ctx.tab($event, "Cuenta0"); })("ngModelChange", function NotascarteracrearComponent_Template_textarea_ngModelChange_58_listener($event) { return ctx.Concepto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Borradores");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "app-borradorcomprobantes", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("Borrador", function NotascarteracrearComponent_Template_app_borradorcomprobantes_Borrador_64_listener($event) { return ctx.setDatosBorrador($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, NotascarteracrearComponent_div_65_Template, 35, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotascarteracrearComponent_Template_button_click_69_listener() { return ctx.reloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " Recargar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Nit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Centro Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Concepto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Debito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Credito");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Deb Niif");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Cred Niif");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, NotascarteracrearComponent_tr_97_Template, 25, 41, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "table", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Total Debito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](107, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Total Credito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](113, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Diferencia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](119, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, " Volver ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](129, NotascarteracrearComponent_ng_template_129_Template, 3, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](131, NotascarteracrearComponent_ng_template_131_Template, 2, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](133, NotascarteracrearComponent_ng_template_133_Template, 2, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](130);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datosCabecera", ctx.datosCabecera);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.idBorrador);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Tipo_Documento);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Fecha_Nota_Contable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Id_Empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Nom_Cliente)("ngbTypeahead", ctx.search)("resultTemplate", _r4)("inputFormatter", ctx.formatter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Id_Cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Tipo_Beneficiario);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Nom_Centro_Costo)("ngbTypeahead", ctx.search2)("resultTemplate", _r8)("inputFormatter", ctx.formatter2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Centro_Costo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Documento);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.Concepto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Tipo_Comprobante", ctx.Tipo_Comprobante);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Mostrar_Facturas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.Cuentas_Contables);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](107, 27, ctx.Total_Debito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](113, 29, ctx.Total_Credito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](119, 31, ctx.Total_Debito - ctx.Total_Credito));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](33, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.Total_Debito != ctx.Total_Credito);
    } }, directives: [_components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_9__["CabeceraComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTypeahead"], _borradorcomprobantes_borradorcomprobantes_component__WEBPACK_IMPORTED_MODULE_13__["BorradorcomprobantesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]], styles: [".btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 10px !important;\n  line-height: 14px !important;\n  font-size: 10px !important;\n}\n\n.form-control-sm[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  padding: 2px 5px !important;\n  height: 22px !important;\n  border-radius: 5px !important;\n}\n\n.f-9[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n}\n\n.tabla[_ngcontent-%COMP%] {\n  font-size: 11px;\n  word-wrap: break-word;\n}\n\n.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: normal;\n  padding: 3px !important;\n  font-size: 10px;\n  line-height: 11px;\n}\n\n.tabla[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n  text-align: left;\n}\n\n.tabla[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-top: 5px !important;\n}\n\n.contenido[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\n\n.botonFlotante[_ngcontent-%COMP%] {\n  position: fixed;\n  display: scroll;\n  bottom: 10px;\n  right: 10px;\n  z-index: 99;\n}\n\n.botonFlotante1[_ngcontent-%COMP%] {\n  position: fixed;\n  display: scroll;\n  bottom: 10px;\n  right: 230px;\n  z-index: 99;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  height: 200px;\n  max-height: 300px;\n  overflow: auto;\n}\n\n.input-document[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 80% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub3Rhc2NhcnRlcmFjcmVhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFBSTs7RUFFSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRVI7O0FBQUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSwwQkFBQTtBQUVSOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6Im5vdGFzY2FydGVyYWNyZWFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweCFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZi05IHtcclxuICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsYSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVuaWRvIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm90b25GbG90YW50ZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBzY3JvbGw7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4uYm90b25GbG90YW50ZTEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogc2Nyb2xsO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDIzMHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uaW5wdXQtZG9jdW1lbnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "z2lZ":
/*!********************************************************************************!*\
  !*** ./src/app/pages/contabilidad/comprobantes/comprobantes-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComprobantesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprobantesRoutingModule", function() { return ComprobantesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notas_contables_notas_contables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notas-contables/notas-contables.component */ "psBj");
/* harmony import */ var _notas_contables_crear_nota_contable_crear_nota_contable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notas-contables/crear-nota-contable/crear-nota-contable.component */ "llSQ");
/* harmony import */ var _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./egresos/egresos.component */ "KlAU");
/* harmony import */ var _egresos_comprobanteegresovarioscrear_comprobanteegresovarioscrear_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./egresos/comprobanteegresovarioscrear/comprobanteegresovarioscrear.component */ "EShg");
/* harmony import */ var _ingresos_comprobanteingresocrear_comprobanteingresocrear_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingresos/comprobanteingresocrear/comprobanteingresocrear.component */ "BScy");
/* harmony import */ var _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingresos/ingresos.component */ "eAy/");
/* harmony import */ var _notas_carteras_notas_carteras_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notas-carteras/notas-carteras.component */ "HT2o");
/* harmony import */ var _notas_carteras_notascarteracrear_notascarteracrear_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notas-carteras/notascarteracrear/notascarteracrear.component */ "yjle");
/* harmony import */ var _notascredito_notascredito_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notascredito/notascredito.component */ "21R5");
/* harmony import */ var _notascredito_notascreditocrear_notascreditocrear_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notascredito/notascreditocrear/notascreditocrear.component */ "4CpT");
/* harmony import */ var _notascredito_notascreditover_notascreditover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notascredito/notascreditover/notascreditover.component */ "Kz+M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: 'notas-contables', component: _notas_contables_notas_contables_component__WEBPACK_IMPORTED_MODULE_1__["NotasContablesComponent"] },
    { path: 'crear-nota-contable', component: _notas_contables_crear_nota_contable_crear_nota_contable_component__WEBPACK_IMPORTED_MODULE_2__["CrearNotaContableComponent"] },
    { path: 'egresos', component: _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_3__["EgresosComponent"] },
    { path: 'comprobanteegresovarioscrear', component: _egresos_comprobanteegresovarioscrear_comprobanteegresovarioscrear_component__WEBPACK_IMPORTED_MODULE_4__["ComprobanteegresovarioscrearComponent"] },
    { path: 'ingresos', component: _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_6__["IngresosComponent"] },
    { path: 'comprobanteingresocrear', component: _ingresos_comprobanteingresocrear_comprobanteingresocrear_component__WEBPACK_IMPORTED_MODULE_5__["ComprobanteingresocrearComponent"] },
    { path: 'notas-cartera', component: _notas_carteras_notas_carteras_component__WEBPACK_IMPORTED_MODULE_7__["NotasCarterasComponent"] },
    { path: 'notas-cartera-crear', component: _notas_carteras_notascarteracrear_notascarteracrear_component__WEBPACK_IMPORTED_MODULE_8__["NotascarteracrearComponent"] },
    { path: 'notas-credito', component: _notascredito_notascredito_component__WEBPACK_IMPORTED_MODULE_9__["NotascreditoComponent"] },
    { path: 'notas-credito/crear', component: _notascredito_notascreditocrear_notascreditocrear_component__WEBPACK_IMPORTED_MODULE_10__["NotascreditocrearComponent"] },
    { path: 'notas-credito/ver/:id', component: _notascredito_notascreditover_notascreditover_component__WEBPACK_IMPORTED_MODULE_11__["NotascreditoverComponent"] },
];
class ComprobantesRoutingModule {
}
ComprobantesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ComprobantesRoutingModule });
ComprobantesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function ComprobantesRoutingModule_Factory(t) { return new (t || ComprobantesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ComprobantesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=comprobantes-comprobantes-module.js.map