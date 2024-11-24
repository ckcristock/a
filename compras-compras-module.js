(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compras-compras-module"],{

/***/ "3K7z":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/compras/compra-nacional/crear-compra-nacional/crear-compra-nacional.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CrearCompraNacionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCompraNacionalComponent", function() { return CrearCompraNacionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/not-data/not-data.component */ "j80Y");
/* harmony import */ var _core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/pipes/image.pipe */ "0gLu");















const _c0 = ["confirmacionSwal"];
const _c1 = ["modalProductos"];
const _c2 = ["FormCompra"];
function CrearCompraNacionalComponent_label_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Bodega");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CrearCompraNacionalComponent_label_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Punto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CrearCompraNacionalComponent_select_48_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Bodega_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", Bodega_r18.Id_Bodega_Nuevo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", Bodega_r18.Nombre, " ");
} }
function CrearCompraNacionalComponent_select_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Seleccione una Bodega");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CrearCompraNacionalComponent_select_48_option_3_Template, 2, 2, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.Bodegas);
} }
function CrearCompraNacionalComponent_select_49_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r21.Id_Punto_Dispensacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r21.Nombre, " ");
} }
function CrearCompraNacionalComponent_select_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Seleccione un Punto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CrearCompraNacionalComponent_select_49_option_3_Template, 2, 2, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.puntos);
} }
function CrearCompraNacionalComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Rotativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CrearCompraNacionalComponent_tr_93_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 81);
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r24 = ctx_r32.index;
    const item_r23 = ctx_r32.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "producto", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "Producto", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r23.producto)("readonly", item_r23.producto != "");
} }
function CrearCompraNacionalComponent_tr_93_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r23.producto);
} }
function CrearCompraNacionalComponent_tr_93_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CrearCompraNacionalComponent_tr_93_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const i_r24 = ctx_r35.index; const item_r23 = ctx_r35.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](127); ctx_r34.searchProduct(i_r24, item_r23.editar); return ctx_r34.openConfirm(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CrearCompraNacionalComponent_tr_93_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Embalaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r23.Embalaje);
} }
function CrearCompraNacionalComponent_tr_93_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r24 = ctx_r38.index;
    const item_r23 = ctx_r38.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "Rotativo", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "Rotativo", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r23.Rotativo);
} }
function CrearCompraNacionalComponent_tr_93_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Impuesto_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", Impuesto_r39.Valor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", Impuesto_r39.Valor, " ");
} }
function CrearCompraNacionalComponent_tr_93_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CrearCompraNacionalComponent_tr_93_button_29_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.deleteProduct(i_r24, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CrearCompraNacionalComponent_tr_93_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CrearCompraNacionalComponent_tr_93_input_3_Template, 1, 4, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CrearCompraNacionalComponent_tr_93_label_4_Template, 2, 1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CrearCompraNacionalComponent_tr_93_button_6_Template, 2, 0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CrearCompraNacionalComponent_tr_93_span_7_Template, 6, 1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CrearCompraNacionalComponent_tr_93_td_12_Template, 2, 3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CrearCompraNacionalComponent_tr_93_Template_input_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const i_r24 = ctx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r44.CalculoTotal(i_r24); ctx_r44.ActualizaValores(); return ctx_r44.CapturarDigitacion(i_r24); })("keyup", function CrearCompraNacionalComponent_tr_93_Template_input_keyup_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const i_r24 = ctx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r46.ActualizaValores(); return ctx_r46.CapturarDigitacion(i_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CrearCompraNacionalComponent_tr_93_Template_input_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const i_r24 = ctx.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r47.CalculoTotal(i_r24); ctx_r47.ActualizaValores(); return ctx_r47.CapturarDigitacion(i_r24); })("keyup", function CrearCompraNacionalComponent_tr_93_Template_input_keyup_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const i_r24 = ctx.index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r48.ActualizaValores(); return ctx_r48.CapturarDigitacion(i_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CrearCompraNacionalComponent_tr_93_Template_select_change_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const i_r24 = ctx.index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r49.CalculoTotal(i_r24); ctx_r49.ActualizaValores(); return ctx_r49.CapturarDigitacion(i_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CrearCompraNacionalComponent_tr_93_option_22_Template, 2, 2, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CrearCompraNacionalComponent_tr_93_Template_p_change_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const i_r24 = ctx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r50.CalculoTotal(i_r24); ctx_r50.ActualizaValores(); return ctx_r50.CapturarDigitacion(i_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CrearCompraNacionalComponent_tr_93_button_29_Template, 2, 0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "fila", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "productoModel", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r23.producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r23.Id_Producto == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r23.Id_Producto != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r23.producto == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r23.producto != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "PresentacionModel", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r23.Presentacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "Presentacion", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "Presentacion", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r23.Presentacion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.Rotativo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "CantidadModel", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r23.Cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "Cantidad", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "Cantidad", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r23.Cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "CostoModel", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r23.Costo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "Costo", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "Costo", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r23.Costo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "IvaModel", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r23.Iva);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "Iva", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "Iva", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r23.Iva);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.Impuestos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "TotalModel", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r23.Total);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "Total", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "Total", i_r24, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](27, 35, item_r23.Total, "COP", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r23.producto != "");
} }
function CrearCompraNacionalComponent_ng_template_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r51 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", r_r51.Nombre, " ");
} }
function CrearCompraNacionalComponent_ng_template_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r53 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r53.NombreProveedor);
} }
function CrearCompraNacionalComponent_ng_template_126_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r61, " ");
} }
function CrearCompraNacionalComponent_ng_template_126_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Lab. Comercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_ng_template_126_div_20_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r62.filtro_lab_com = $event; })("blur", function CrearCompraNacionalComponent_ng_template_126_div_20_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r64.filtros(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r57.filtro_lab_com);
} }
function CrearCompraNacionalComponent_ng_template_126_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Lab. Gen\u00E9rico");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_ng_template_126_div_21_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r65.filtro_lab_gen = $event; })("blur", function CrearCompraNacionalComponent_ng_template_126_div_21_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r67.filtros(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r58.filtro_lab_gen);
} }
function CrearCompraNacionalComponent_ng_template_126_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cum");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_ng_template_126_div_22_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r68.filtro_cum = $event; })("blur", function CrearCompraNacionalComponent_ng_template_126_div_22_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r70.filtros(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r59.filtro_cum);
} }
function CrearCompraNacionalComponent_ng_template_126_table_23_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Lab. Comercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CrearCompraNacionalComponent_ng_template_126_table_23_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Lab. Generico");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CrearCompraNacionalComponent_ng_template_126_table_23_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cum");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", producto_r75.Laboratorio_Comercial, " ");
} }
function CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", producto_r75.Laboratorio_Generico, " ");
} }
function CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", producto_r75.Codigo_Cum, " ");
} }
function CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r84); const i_r76 = ctx.index; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r83.addProduct(i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_td_13_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_td_14_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_td_15_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r75 = ctx.$implicit;
    const i_r76 = ctx.index;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "check", i_r76, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", producto_r75.Producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](producto_r75.Tipo_Catalogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](producto_r75.Nombre_Comercial);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", producto_r75.Nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r74.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r74.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r74.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", producto_r75.Embalaje, " ");
} }
function CrearCompraNacionalComponent_ng_template_126_table_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Foto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Catalogo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CrearCompraNacionalComponent_ng_template_126_table_23_th_11_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CrearCompraNacionalComponent_ng_template_126_table_23_th_12_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CrearCompraNacionalComponent_ng_template_126_table_23_th_13_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Embalaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CrearCompraNacionalComponent_ng_template_126_table_23_tr_17_Template, 18, 9, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r60.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r60.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r60.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r60.ListaProducto);
} }
function CrearCompraNacionalComponent_ng_template_126_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "B\u00FAsqueda de productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CrearCompraNacionalComponent_ng_template_126_Template_button_click_4_listener() { const modal_r55 = ctx.$implicit; return modal_r55.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_ng_template_126_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r86.posicion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Catalogo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "select", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CrearCompraNacionalComponent_ng_template_126_Template_select_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r88.filtros(); })("ngModelChange", function CrearCompraNacionalComponent_ng_template_126_Template_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r89.filtro_catalogo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CrearCompraNacionalComponent_ng_template_126_option_15_Template, 2, 2, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_ng_template_126_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r90.filtro_nombre = $event; })("blur", function CrearCompraNacionalComponent_ng_template_126_Template_input_blur_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r91.filtros(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CrearCompraNacionalComponent_ng_template_126_div_20_Template, 4, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CrearCompraNacionalComponent_ng_template_126_div_21_Template, 4, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CrearCompraNacionalComponent_ng_template_126_div_22_Template, 4, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CrearCompraNacionalComponent_ng_template_126_table_23_Template, 18, 4, "table", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CrearCompraNacionalComponent_ng_template_126_Template_button_click_25_listener() { const modal_r55 = ctx.$implicit; return modal_r55.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CrearCompraNacionalComponent_ng_template_126_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r93.AgregarProducto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Agregar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r12.posicion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r12.filtro_catalogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.tipoMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r12.filtro_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.filtro_catalogo == "Medicamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r12.Cargando && ctx_r12.ListaProducto.length > 0)("ngIfElse", _r15);
} }
function CrearCompraNacionalComponent_ng_template_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-not-data", 115);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loading", ctx_r16.Cargando);
} }
class CrearCompraNacionalComponent {
    constructor(route, http, router, _user, modalService) {
        this.route = route;
        this.http = http;
        this.router = router;
        this._user = _user;
        this.modalService = modalService;
        this.closeResult = '';
        this.tipoMaterial = ['Activo_Fijo', 'Medicamento', 'Material', 'Dotacion_EPP'];
        this.reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Cantidad);
        this.reducer1 = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Costo);
        this.reducer2 = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Iva_Acu);
        this.reducer3 = (accumulator, currentValue) => accumulator + parseFloat(currentValue.Total);
        this.alertOption = {};
        this.Cargando = false;
        this.ListaProductos = [];
        this.Lista_Productos = [
            {
                producto: '',
                Presentacion: '',
                Costo: 0,
                Total: 0,
                Cantidad: null,
                Iva: 0,
                Rotativo: 0,
                Id_Producto: '',
                Iva_Disa: true,
                editar: false,
                delete: false,
                Iva_Acu: 0,
            },
        ];
        this.fecha = new Date();
        this.Bodegas = [];
        this.TipoBodega = 'Bodega';
        this.Proveedores = [];
        this.id = this.route.snapshot.params['id'];
        this.precompra = JSON.parse(localStorage.getItem('Compra'));
        this.Id_Proveedor = '';
        this.Rotativo = false;
        this.Subtotal = 0;
        this.Iva = 0;
        this.Total = 0;
        this.Cantidad_v = 0;
        this.Costo_v = 0;
        this.Iva_v = 0;
        this.Subtotal_F = 0;
        this.Iva_F = 0;
        this.Total_F = 0;
        this.Subtotal_v = 0;
        this.Nombre = '';
        this.NombreProveedor = '';
        this.Iva_Disa = true;
        this.product = [];
        this.Productos = [];
        this.band_editar = false;
        this.filtro_nombre = '';
        this.filtro_lab_com = '';
        this.filtro_lab_gen = '';
        this.filtro_cum = '';
        this.filtro_catalogo = '';
        this.Tipo = '';
        this.ListaProducto = [];
        this.user = '';
        this.posicion = '';
        this.puntos = [];
        //INICIA BUCAR LOS PRODUCTO
        this.search1 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((term) => term.length < 4
            ? []
            : this.ListaProducto.filter((v) => v.Nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        this.formatter1 = (x) => x.Nombre;
        //FIN BUCAR LOS PRODUCTO
        //INICIA BUCAR LOS PROVEEDORES
        this.search2 = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((term) => term.length < 4
            ? []
            : this.Proveedores.filter((v) => v.NombreProveedor.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        this.formatter2 = (x) => x.NombreProveedor;
        this.alertOption = {
            title: '¿Está Seguro?',
            text: 'Se dispone a Generar esta Compra',
            showCancelButton: true,
            cancelButtonText: 'No, Dejame Comprobar!',
            confirmButtonText: 'Si, Guardar',
            showLoaderOnConfirm: true,
            focusCancel: true,
            icon: 'info',
            preConfirm: () => {
                return new Promise((resolve) => {
                    return this.GuardarCompra(this.FormCompra, resolve);
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.isLoading(),
        };
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprasnacionales/proveedor_buscar.php', {
            params: {
                company_id: this._user.user.person.company_worked.id
            }
        })
            .subscribe((data) => {
            this.Proveedores = data;
        });
    }
    openConfirm(confirm) {
        this.modalService.open(confirm, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    //FIN BUCAR LOS PROVEEDORES
    ngOnInit() {
        this.Tipo = 'Recurrente';
        this.userF = this._user.user;
        console.log(this.userF);
        let params = this.route.snapshot.queryParams;
        this.user = this._user.user.person.id;
        console.log(this.user);
        if (params.Pre_Compra != undefined) {
            this.http
                .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/rotativoscompras/detalle_pre_compra.php', {
                params: { id: params.Pre_Compra },
            })
                .subscribe((data) => {
                this.Lista_Productos = data.Productos;
                this.Id_Proveedor = data.Datos.Id_Proveedor;
                this.Lista_Productos.push({
                    producto: '',
                    Costo: 0,
                    Total: 0,
                    Cantidad: null,
                    Iva: 0,
                    Rotativo: 0,
                    Id_Producto: '',
                    Iva_Disa: true,
                    Presentacion: 0,
                    Iva_Acu: 0,
                });
                this.NombreProveedor = data.Proveedor;
                this.ActualizaValores();
                this.Tipo = 'Recurrente';
            });
        }
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/bodega_nuevo/get_bodegas.php', {
            params: {
                company_id: this._user.user.person.company_worked.id
            }
        })
            .subscribe((data) => {
            this.Bodegas = data.Bodegas;
            this.Impuestos = data.impuestoli;
        });
        if (this.id != undefined) {
            this.Rotativo = true;
            //debo llamar al localstore, y decirle cual es el que quiero listar
            this.Lista_Productos.splice(0, 1);
            const proveedor = this.precompra.find((lista) => lista.Id_Proveedor === this.id);
            const index = this.precompra.indexOf(proveedor);
            var idProveedor = this.precompra[index].Id_Proveedor;
            this.Id_Proveedor = idProveedor;
            var productos = this.precompra[index].Productos;
            productos.forEach((element) => {
                if (element != null) {
                    this.Lista_Productos.push({
                        producto: element,
                        Costo: element.Costo,
                        Total: parseFloat(element.Costo) * parseFloat(element.Cantidad),
                        Cantidad: element.Cantidad,
                        Iva: element.Iva,
                        Rotativo: 0,
                        Id_Producto: element.Id_Producto,
                        Iva_Disa: true,
                    });
                }
            });
            //
            this.Lista_Productos.push({
                producto: '',
                Costo: 0,
                Total: 0,
                Cantidad: null,
                Iva: 0,
                Rotativo: 0,
                Id_Producto: '',
                Iva_Disa: true,
            });
            this.Cantidad_v = parseFloat(this.Lista_Productos.reduce(this.reducer, 0));
            this.Costo_v = parseFloat(this.Lista_Productos.reduce(this.reducer1, 0));
            //this.Iva_v = parseFloat(this.Lista_Productos.reduce(this.reducer2, 0));
            this.Subtotal_v = parseFloat(this.Lista_Productos.reduce(this.reducer3, 0));
            this.Subtotal_F = this.Subtotal_v;
            //this.Iva_F=(this.Subtotal_v*this.Iva_v)/100;
            this.Total_F = this.Subtotal_v + this.Iva_v;
            /*var subtotal = parseFloat(this.Lista_Productos.reduce(this.reducer, 0));
              this.Subtotal = subtotal - (subtotal * 0.19)
              this.Iva = (subtotal * 0.19);
              this.Total = subtotal;*/
        }
        /* TODO ACTUALIZAR FUNCIONARIO */
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta +
            'php/inventario_fisico_puntos/lista_punto_funcionario.php', { params: { id: '1' } })
            .subscribe((data) => {
            this.puntos = data.Puntos;
        });
    }
    filtros() {
        let params = {};
        if (this.filtro_lab_com != '' ||
            this.filtro_lab_gen != '' ||
            this.filtro_cum != '' ||
            this.filtro_catalogo) {
            this.Cargando = true;
            this.ListaProducto = [];
            if (this.filtro_nombre != '') {
                params.nom = this.filtro_nombre;
            }
            if (this.filtro_lab_com != '') {
                params.lab_com = this.filtro_lab_com;
            }
            if (this.filtro_lab_gen != '') {
                params.lab_gen = this.filtro_lab_gen;
            }
            if (this.filtro_cum != '') {
                params.cum = this.filtro_cum;
            }
            if (this.filtro_catalogo != '') {
                params.catalogo = this.filtro_catalogo;
            }
            let queryString = Object.keys(params)
                .map((key) => key + '=' + params[key])
                .join('&');
            this.http
                .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta +
                'php/comprasnacionales/lista_productos.php?' +
                queryString, { params: { company_id: this._user.user.person.company_worked.id } })
                .subscribe((data) => {
                this.Cargando = false;
                this.ListaProducto = data;
            });
        }
        else {
            this.filtro_lab_com = '';
            this.filtro_lab_gen = '';
            this.filtro_cum = '';
            this.filtro_catalogo = '';
            this.Cargando = true;
            this.ListaProducto = [];
            this.http
                .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprasnacionales/lista_productos.php', {
                params: { nom: this.filtro_nombre, company_id: this._user.user.person.company_worked.id },
            })
                .subscribe((data) => {
                this.Cargando = false;
                this.ListaProducto = data;
            });
        }
    }
    searchProduct(pos, editar) {
        this.ListaProducto = [];
        this.Productos = [];
        this.filtro_nombre = '';
        this.filtro_lab_com = '';
        this.filtro_lab_gen = '';
        this.filtro_cum = '';
        this.filtro_catalogo = '';
        let producto = document.getElementById('Producto' + pos).value;
        this.filtro_nombre = producto;
        this.posicion = pos;
        this.band_editar = editar;
        this.Cargando = true;
        if (producto != '') {
            this.http
                .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + 'php/comprasnacionales/lista_productos.php', {
                params: { nom: producto, company_id: this._user.user.person.company_worked.id },
            })
                .subscribe((data) => {
                this.Cargando = false;
                this.ListaProducto = data;
            });
        }
        else {
        }
    }
    //INICIA BUCAR LOS PROVEEDORES
    BuscarProveedor(modelo) {
        console.log(modelo);
        if (typeof modelo == 'object') {
            this.NombreProveedor = modelo;
            this.Id_Proveedor = modelo.Id_Proveedor;
        }
        else {
            this.NombreProveedor = '';
            this.Id_Proveedor = '';
        }
    }
    //FIN BUCAR LOS PROVEEDORES
    GuardarCompra(formulario, resolve) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = this.route.snapshot.queryParams;
            //Se  actualiza la precompra con el estado Solicitada
            if (params.Pre_Compra != undefined) {
                let datos = new FormData();
                datos.append('id_pre_compra', params.Pre_Compra);
                this.http
                    .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta + '/php/rotativoscompras/actualizar_estado.php', datos)
                    .subscribe((data) => { });
            }
            if (this.Lista_Productos.length > 1) {
                let info = JSON.stringify(formulario.value);
                let prod = JSON.stringify(this.Lista_Productos);
                let datos = new FormData();
                params.Pre_Compra != undefined
                    ? datos.append('id_pre_compra', params.Pre_Compra)
                    : '';
                datos.append('modulo', 'Orden_Compra_Nacional');
                datos.append('datos', info);
                datos.append('productos', prod);
                datos.append('tipoBodega', this.TipoBodega);
                datos.append('company_id', this._user.user.person.company_worked.id);
                return yield this.http
                    .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ruta +
                    'php/comprasnacionales/guardar_compra_nacional.php', datos)
                    .toPromise()
                    .then((data) => {
                    this.confirmacionSwal.title = 'Creacion de Orden de Compras';
                    this.confirmacionSwal.text = data.mensaje;
                    this.confirmacionSwal.icon = data.tipo;
                    this.confirmacionSwal.fire();
                    formulario.reset();
                    // this.NombreProveedor='';
                    this.VerPantallaLista();
                    //buscar posición proveedor
                    const proveedor = this.precompra.find((lista) => lista.Id_Proveedor === this.id);
                    const index = this.precompra.indexOf(proveedor);
                    //eliminar ese provvedor de la lista
                    this.precompra.splice(index, 1);
                    //decir al localstore que lo que tengo en lista producto será el nuevo localstorage
                    localStorage.setItem('Compra', JSON.stringify(this.precompra));
                }, (error) => {
                    this.confirmacionSwal.title = 'Error';
                    this.confirmacionSwal.text =
                        'Ha ocurrido un error inesperado de conexión.';
                    this.confirmacionSwal.icon = 'error';
                    this.confirmacionSwal.fire();
                });
            }
            else {
                this.confirmacionSwal.title = 'Error ';
                this.confirmacionSwal.text =
                    'No se puede guardar un orden de compra si productos';
                this.confirmacionSwal.icon = 'error';
                this.confirmacionSwal.fire();
            }
        });
    }
    VerPantallaLista() {
        this.router.navigate(['/compras/nacional']);
    }
    addProduct(pos) {
        let checkbox = document.getElementById('check' + pos)
            .checked;
        let modelo = {
            Costo: this.ListaProducto[pos].Costo,
            Presentacion: this.ListaProducto[pos].Cantidad_Presentacion,
            Id_Producto: this.ListaProducto[pos].Id_Producto,
            producto: this.ListaProducto[pos].Nombre,
            Iva_Disa: this.ListaProducto[pos].Gravado == 'Si' ? false : true,
            Embalaje: this.ListaProducto[pos].Embalaje,
        };
        if (checkbox == true) {
            this.Productos.push(modelo);
        }
        else {
            let posicion = this.Productos.indexOf(modelo);
            this.Productos.splice(posicion, 1);
        }
    }
    AgregarProducto() {
        let editar_producto = this.band_editar;
        this.Productos.forEach((valor, i) => {
            if (this.Lista_Productos.length == 1 &&
                this.Lista_Productos[0].Id_Producto == '') {
                // Cuando la lista de productos está vacía o inicializada por primera vez.
                this.Lista_Productos[0].Costo = valor.Costo;
                this.Lista_Productos[0].Presentacion = valor.Presentacion;
                this.Lista_Productos[0].Id_Producto = valor.Id_Producto;
                this.Lista_Productos[0].producto = valor.producto;
                this.Lista_Productos[0].Iva_Disa = valor.Iva_Disa;
                this.Lista_Productos[0].editar = true;
                this.Lista_Productos[0].delete = true;
                this.Lista_Productos[0].Embalaje = valor.Embalaje;
            }
            else if (this.band_editar) {
                // Cuando se quiere editar un producto.
                this.Lista_Productos[this.posicion].Costo = valor.Costo;
                this.Lista_Productos[this.posicion].Presentacion = valor.Presentacion;
                this.Lista_Productos[this.posicion].Id_Producto = valor.Id_Producto;
                this.Lista_Productos[this.posicion].producto = valor.producto;
                this.Lista_Productos[this.posicion].Iva_Disa = valor.Iva_Disa;
                this.Lista_Productos[this.posicion].Embalaje = valor.Embalaje;
                this.Lista_Productos[this.posicion].delete = true;
                this.band_editar = false;
            }
            else {
                // Cuando se quiere agregar nuevos productos.
                if (this.Lista_Productos.length > 1 &&
                    this.Lista_Productos[this.posicion].Id_Producto == '') {
                    // Si la lista de productos estaba llena y la posicion donde se está buscando el producto estaba vacía, edita el campo actual.
                    this.Lista_Productos[this.posicion].Costo = valor.Costo;
                    this.Lista_Productos[this.posicion].Presentacion = valor.Presentacion;
                    this.Lista_Productos[this.posicion].Id_Producto = valor.Id_Producto;
                    this.Lista_Productos[this.posicion].producto = valor.producto;
                    this.Lista_Productos[this.posicion].Iva_Disa = valor.Iva_Disa;
                    this.Lista_Productos[this.posicion].Embalaje = valor.Embalaje;
                    this.Lista_Productos[this.posicion].delete = true;
                }
                else {
                    if (editar_producto) {
                        // Si se editó un producto, se declara esta condicional como bandera para que elimine el ultimo campo en blanco y pueda añadir en la lista de productos sin problema.
                        let last_position = this.Lista_Productos.length - 1;
                        this.Lista_Productos.splice(last_position, 1);
                        editar_producto = false;
                    }
                    this.Lista_Productos.push({
                        // Se agregan nuevos productos.
                        producto: valor.producto,
                        Presentacion: valor.Presentacion,
                        Costo: valor.Costo,
                        Total: 0,
                        Cantidad: null,
                        Iva: 0,
                        Rotativo: 0,
                        Id_Producto: valor.Id_Producto,
                        Iva_Disa: valor.Iva_Disa,
                        editar: true,
                        delete: true,
                        Iva_Acu: 0,
                        Embalaje: valor.Embalaje,
                    });
                }
            }
        });
        let pos = this.Lista_Productos.length - 1;
        if (this.Lista_Productos[pos].producto != '') {
            // Si en la ultima posición del Array ya no es vacío se agrega un nuevo campo para una nueva busqueda.
            this.Lista_Productos.push({
                producto: '',
                Presentacion: '',
                Costo: 0,
                Total: 0,
                Cantidad: null,
                Iva: 0,
                Rotativo: 0,
                Id_Producto: '',
                Iva_Disa: false,
                editar: false,
                delete: false,
                Iva_Acu: 0,
                Embalaje: '',
            });
        }
        this.modalService.dismissAll();
        this.Productos = [];
    }
    deleteProduct(posicion, event) {
        if (event.screenX != 0) {
            this.Lista_Productos.splice(posicion, 1);
            this.ActualizaValores();
        }
    }
    CalculoTotal(pos) {
        var cantidad = document.getElementById('Cantidad' + pos).value;
        var Costo = document.getElementById('Costo' + pos)
            .value;
        var subtotal = parseFloat(Costo) * parseFloat(cantidad);
        var iva = document.getElementById('Iva' + pos).value;
        this.Lista_Productos[pos].Iva_Acu = subtotal * (parseInt(iva) / 100);
        this.Lista_Productos[pos].Total = subtotal;
    }
    CapturarDigitacion(pos) {
        let cantidad = document.getElementById('Cantidad' + pos).value;
        let costo = document.getElementById('Costo' + pos)
            .value;
        let iva = document.getElementById('Iva' + pos).value;
        let subtotal = parseFloat(cantidad) * parseFloat(costo);
        this.Lista_Productos[pos].Cantidad = cantidad;
        this.Lista_Productos[pos].Costo = costo;
        this.Lista_Productos[pos].Iva = iva;
        this.Lista_Productos[pos].Total = subtotal.toFixed();
    }
    ActualizaValores() {
        this.Cantidad_v = parseFloat(this.Lista_Productos.reduce(this.reducer, 0));
        this.Costo_v = parseFloat(this.Lista_Productos.reduce(this.reducer1, 0));
        this.Iva_F = parseFloat(this.Lista_Productos.reduce(this.reducer2, 0));
        this.Subtotal_v = parseFloat(this.Lista_Productos.reduce(this.reducer3, 0));
        this.Subtotal_F = this.Subtotal_v;
        this.Total_F = this.Subtotal_F + this.Iva_F;
    }
}
CrearCompraNacionalComponent.ɵfac = function CrearCompraNacionalComponent_Factory(t) { return new (t || CrearCompraNacionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
CrearCompraNacionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CrearCompraNacionalComponent, selectors: [["app-crear-compra-nacional"]], viewQuery: function CrearCompraNacionalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.confirmacionSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalProductos = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.FormCompra = _t.first);
    } }, decls: 143, vars: 41, consts: [["FormCompra", "ngForm"], [1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "card", "m-0", "p-0", "border-0", "shadow-none"], [1, "card-horizontal"], [1, "img-square-wrapper"], ["alt", "", "height", "45", 3, "src"], [1, "card-body", "p-0", "m-0"], [1, "card-text", 2, "font-size", "x-small"], [1, "text-primary"], [1, "line"], [1, "container", "mt-4"], [1, "row"], [1, "col-6"], [1, "col-5"], [1, "form-group"], ["type", "text", "name", "NombreProveedor", "id", "NombreProveedor", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange"], ["type", "hidden", "name", "Id_Proveedor", "id", "Id_Proveedor", 3, "ngModel"], [1, "form-group", 2, "display", "none"], ["name", "Tipo", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["value", "Recurrente", "selected", ""], ["value", "Ocasional"], [1, "col-7"], [4, "ngIf"], ["name", "Id_Bodega_Nuevo", "class", "form-control form-control-sm", "required", "", "ngModel", "", 4, "ngIf"], ["name", "Id_Punto_Dispensacion", "class", "form-control form-control-sm", "required", "", "ngModel", "", 4, "ngIf"], ["type", "text", "name", "Identificacion_Funcionario", "readonly", "", "hidden", "", 3, "ngModel", "ngModelChange"], ["name", "TipoBodega", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "change"], ["value", "Bodega", "selected", ""], ["value", "Punto"], ["ngModel", "", "type", "date", "name", "Fecha_Entrega_Probable", "placeholder", "", "required", "", 1, "form-control", "form-control-sm"], ["for", ""], ["ngModel", "", "name", "Observaciones", "placeholder", "Digite detalles importantes de la orden de compra", "type", "text", "rows", "4", 1, "form-control"], [1, "container", "mt-4", 2, "font-size", "small"], [1, "font-weight-bold"], [1, "table", "table-bordered", "table-striped", "table-sm"], [1, "col-sm-4"], [1, "col-sm-1"], ["class", "col-sm-1", 4, "ngIf"], [1, "col-sm-2"], [3, "id", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-end"], [1, "col-sm-5"], [1, "table", "table-hover"], [1, "d-flex", "justify-content-end"], [1, "row", "d-flex", "justify-content-center"], [1, "col-sm-12", "text-center"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "swal", "disabled"], [1, "fas", "fa-save"], ["rt", ""], ["rt2", ""], ["add", ""], ["title", "", "text", "", "type", ""], ["confirmacionSwal", ""], [3, "swalOptions"], ["confirmacionGuardar", ""], [1, "row", "invoice-contact", 2, "align-items", "flex-start !important"], [1, "col-md-8"], [1, "invoice-box", "row"], [1, "col-sm-12"], [1, "table", "table-responsive", "invoice-table", "table-borderless", 2, "text-align", "left", "font-size", "12px"], [2, "width", "100px"], ["notData", ""], ["name", "Id_Bodega_Nuevo", "required", "", "ngModel", "", 1, "form-control", "form-control-sm"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "Id_Punto_Dispensacion", "required", "", "ngModel", "", 1, "form-control", "form-control-sm"], [3, "id"], ["type", "hidden", 3, "name", "ngModel"], ["type", "text", "class", "form-control form-control-sm", "autocomplete", "off", 3, "name", "id", "value", "readonly", 4, "ngIf"], [1, "text-center"], ["class", "btn btn-primary btn-sm", "title", "Buscar Producto", 3, "click", 4, "ngIf"], ["class", "mytooltip tooltip-effect-2", 4, "ngIf"], [3, "id", "name"], ["type", "number", "min", "1", 1, "form-control", "form-control-sm", "text-right", "f-9", 3, "id", "name", "value", "change", "keyup"], ["type", "text", "min", "1", "pattern", "[0-9\\.]*", 1, "form-control", "form-control-sm", "text-right", "f-9", 3, "id", "name", "value", "change", "keyup"], [1, "form-control", "form-control-sm", 3, "ngModel", "id", "name", "change"], ["type", "text", "min", "1", "readonly", "", 3, "name", "id", "change"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], ["type", "text", "autocomplete", "off", 1, "form-control", "form-control-sm", 3, "name", "id", "value", "readonly"], ["title", "Buscar Producto", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fa", "fa-search"], [1, "mytooltip", "tooltip-effect-2"], [1, "tooltip-item2"], [1, "tooltip-content4", "clearfix"], [1, "tooltip-text2"], ["readonly", "", "type", "number", "min", "1", 1, "form-control", "form-control-sm", "text-right", "f-9", 3, "id", "name", "ngModel"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fa", "fa-trash"], [1, "f-9"], [1, "modal-content"], [1, "modal-header"], [1, "text-primary", "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-sm", "btn-flash-border-primary", "ri-close-fill", 3, "click"], [1, "modal-body"], [1, "container", 2, "font-size", "small"], ["type", "hidden", "name", "pos", 3, "ngModel", "ngModelChange"], [1, "col-2", "input-group-sm"], [1, "form-control", "form-control-sm", 3, "ngModel", "change", "ngModelChange"], ["value", ""], ["type", "text", "placeholder", "Filtro Nombre", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "blur"], ["class", "col-2 input-group-sm", 4, "ngIf"], ["class", "table table-bordered table-striped table-sm mt-4", 4, "ngIf", "ngIfElse"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "text", "placeholder", "Filtro Lab. Comercial", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "blur"], ["type", "text", "placeholder", "Filtro Lab. Generico", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "blur"], ["type", "text", "placeholder", "Filtro Cum", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "blur"], [1, "table", "table-bordered", "table-striped", "table-sm", "mt-4"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "id", "value", "change"], ["src", "../../../../../assets/images/nofound.png", "alt", "", 1, "rounded-circle", "mx-auto", "img-fluid", "header-profile-user"], [3, "loading"]], template: function CrearCompraNacionalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Nueva orden de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Proveedor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_Template_input_ngModelChange_34_listener($event) { return ctx.NombreProveedor = $event; })("ngModelChange", function CrearCompraNacionalComponent_Template_input_ngModelChange_34_listener() { return ctx.BuscarProveedor(ctx.NombreProveedor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Tipo de compra: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_Template_select_ngModelChange_39_listener($event) { return ctx.Tipo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Recurrente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Ocasional");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, CrearCompraNacionalComponent_label_46_Template, 2, 0, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, CrearCompraNacionalComponent_label_47_Template, 2, 0, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, CrearCompraNacionalComponent_select_48_Template, 4, 2, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, CrearCompraNacionalComponent_select_49_Template, 4, 2, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_Template_input_ngModelChange_50_listener($event) { return ctx.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Tipo de bodega: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CrearCompraNacionalComponent_Template_select_ngModelChange_56_listener($event) { return ctx.TipoBodega = $event; })("change", function CrearCompraNacionalComponent_Template_select_change_56_listener($event) { return ctx.TipoBodega = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Bodega");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Punto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Fecha entrega: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "*Nota: Para hacer m\u00E1s efectiva la busqueda, por favor digite el nombre completo del producto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Presentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, CrearCompraNacionalComponent_th_82_Template, 2, 0, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "IVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, CrearCompraNacionalComponent_tr_93_Template, 30, 39, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "table", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "( = ) Subtotal :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](104, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "( + ) Iva :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](110, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "( = ) Total :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](116, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](120, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, " Realizar Compra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, CrearCompraNacionalComponent_ng_template_122_Template, 2, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, CrearCompraNacionalComponent_ng_template_124_Template, 3, 1, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](126, CrearCompraNacionalComponent_ng_template_126_Template, 29, 9, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](128, "swal", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](130, "swal", 55, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "table", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](139, "td", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](141, CrearCompraNacionalComponent_ng_template_141_Template, 1, 1, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](125);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 26, ctx.userF.person.company_worked.logo, "companies"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" NIT ", ctx.userF.person.company_worked.tin, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](24, 29, ctx.fecha, "longDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.NombreProveedor)("ngbTypeahead", ctx.search2)("resultTemplate", _r9)("inputFormatter", ctx.formatter2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngModel", ctx.Id_Proveedor);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.Tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.TipoBodega == "Bodega");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.TipoBodega == "Punto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.TipoBodega == "Bodega");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.TipoBodega == "Punto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.TipoBodega);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Rotativo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Lista_Productos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](104, 32, ctx.Subtotal_F, "COP"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](110, 35, ctx.Iva_F, "COP"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](116, 38, ctx.Total_F, "COP"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("swal", _r14)("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("swalOptions", ctx.alertOption);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__["SwalDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__["SwalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_12__["NotDataComponent"]], pipes: [_core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_13__["ImagePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: [".card-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWFyLWNvbXByYS1uYWNpb25hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBc0pBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJjcmVhci1jb21wcmEtbmFjaW9uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYnRuLXNtIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4IWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxudGgsXHJcbnRkIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLnRpcG8tZGlzLXNlbGVjdHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gICAgIHBhZGRpbmc6IDJweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4vLyB9XHJcbi5lbnRyZWdhcy1pbnB1dCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDEwcHg7XHJcbn1cclxuXHJcbi5mLTkge1xyXG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5idG4tZW52aWFyOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1zbSB7XHJcbiAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJweCA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9kIHtcclxuICAgIHBhZGRpbmc6IDJweCA1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zd2FsMi1jb25maXJtIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJ0bi14cyB7XHJcbiAgICBoZWlnaHQ6IDIycHghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5wLXhzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtNyB7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGEge1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxhIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmlucHV0LXByb2R1Y3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTMlO1xyXG59XHJcblxyXG4uYnRuLXNlYXJjaCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUtcHJvZHVjdCB7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIC5pbnB1dC1zbSxcclxuICAgICAgICAgICAgLmlucHV0LXNtOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGFibGEtZmlsdHJvIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1hZ2VuIHtcclxuICAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLmJ0bi1lbGltaW5hciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufSAqL1xyXG5cclxuLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Jj59":
/*!****************************************************************************!*\
  !*** ./src/app/pages/compras/compra-nacional/compra-nacional.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompraNacionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraNacionalComponent", function() { return CompraNacionalComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "j14s");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _components_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/modal-basic/modal-basic.component */ "xoca");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/not-data/not-data.component */ "j80Y");
/* harmony import */ var _core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/pipes/image.pipe */ "0gLu");


















const _c0 = ["Formcomprasnacionacrear"];
const _c1 = ["studentChart"];
const _c2 = ["deleteSwal"];
const _c3 = ["PlantillaEstado"];
const _c4 = ["PlantillaBotones"];
const _c5 = ["PlantillaValor"];
const _c6 = ["infoSwal"];
const _c7 = function (a1) { return ["/comprasnacionaleseditar", a1]; };
function CompraNacionalComponent_table_55_tr_17_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const compra_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c7, compra_r13.Id_Orden_Compra_Nacional));
} }
function CompraNacionalComponent_table_55_tr_17_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("confirm", function CompraNacionalComponent_table_55_tr_17_a_31_Template_a_confirm_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const compra_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.anularCompra(compra_r13.Id_Orden_Compra_Nacional, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("swal", _r5);
} }
const _c8 = function (a1) { return ["/compras/ver-nacional", a1]; };
function CompraNacionalComponent_table_55_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Acciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CompraNacionalComponent_table_55_tr_17_a_27_Template, 3, 3, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CompraNacionalComponent_table_55_tr_17_a_31_Template, 3, 1, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const compra_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 15, compra_r13.Imagen, "users"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", compra_r13.Funcionario, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 18, compra_r13.Fecha, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](compra_r13.Codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", compra_r13.Proveedor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate3"]("label ", compra_r13.Estado == "Anulada" ? "label-danger" : "", " ", compra_r13.Estado == "Recibida" ? "label-inverse" : "", " ", compra_r13.Estado == "Pendiente" ? "label-warning" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", compra_r13.Estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](compra_r13.Aprobacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", compra_r13.Estado != "Anulada" && compra_r13.Estado != "Recibida" && compra_r13.Estado_Aprobacion == "Rechazada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c8, compra_r13.Id_Orden_Compra_Nacional));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", compra_r13.Estado != "Anulada");
} }
function CompraNacionalComponent_table_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Aprobaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CompraNacionalComponent_table_55_tr_17_Template, 32, 23, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.comprasnacionales);
} }
function CompraNacionalComponent_ngb_pagination_56_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-pagination", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function CompraNacionalComponent_ngb_pagination_56_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.page = $event; })("pageChange", function CompraNacionalComponent_ngb_pagination_56_Template_ngb_pagination_pageChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.paginacion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collectionSize", ctx_r2.TotalItems)("page", ctx_r2.page)("maxSize", ctx_r2.maxSize)("pageSize", 20)("boundaryLinks", true);
} }
function CompraNacionalComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-not-data", 70);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx_r4.loading);
} }
function CompraNacionalComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "No existe precompras en este momento ");
} }
function CompraNacionalComponent_option_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", func_r23.Identificacion_Funcionario);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", func_r23.Funcionario, " ");
} }
const _c9 = function () { return ["/compras/crear-nacional"]; };
class CompraNacionalComponent {
    constructor(http, location, route, _user) {
        this.http = http;
        this.location = location;
        this.route = route;
        this._user = _user;
        this.comprasnacionales = [];
        this.matPanel = false;
        this.loadingIndicator = true;
        this.dias_anulacion = '';
        this.funcionario_anulacion = '';
        this.funcionarios_anulacion = [];
        this.proveedorPreCompra = [];
        this.indicadores = [];
        this.page = 1;
        this.maxSize = 10;
        this.filtro_cod = '';
        this.filtro_est = '';
        this.filtro_prov = '';
        this.filtro_func = '';
        this.Fecha = new Date();
        this.Actas_Pendientes = [];
        this.Compras_Pendientes = [];
        this.Compras_Rechazadas = [];
        this.Pre_Compras = [];
        /*  public user = JSON.parse(localStorage.getItem('User')); */
        /* TODO ACTUALIZAR FUNCIONARIO */
        this.miPerfil = '1';
        /*     public miPerfil = JSON.parse(localStorage.getItem('miPerfil')); */
        this.loading = false;
        this.requiredParams = { params: { tipo: "todo", funcionario: 1, company_id: '' } };
        this.myDateRangePickerOptions = {
            width: '180px',
            height: '21px',
            selectBeginDateTxt: 'Inicio',
            selectEndDateTxt: 'Fin',
            selectionTxtFontSize: '10px',
            dateFormat: 'yyyy-mm-dd',
        };
        this.filtro_fecha = '';
        this.mes = [];
        this.subtotal = [];
        this.requiredParams.params.company_id = this._user.user.person.company_worked.id;
        this.ListarComprasNacionales();
        this.getDiasAnulacion();
        this.getFuncioriosParaResponsables();
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
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/rotativoscompras/lista_pre_compra.php').subscribe((data) => {
            this.Pre_Compras = data;
        });
    }
    ListarComprasNacionales() {
        this.loading = true;
        let params = this.route.snapshot.queryParams;
        let queryString = '';
        if (Object.keys(params).length > 0) { // Si existe parametros o filtros
            this.page = params.pag ? params.pag : 1;
            this.filtro_cod = params.cod ? params.cod : '';
            this.filtro_func = params.func ? params.func : '';
            this.filtro_est = params.est ? params.est : '';
            this.filtro_prov = params.prov ? params.prov : '';
            queryString = '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/lista_compras.php' + queryString, this.requiredParams).subscribe((data) => {
            this.comprasnacionales = data.compras;
            this.TotalItems = data.numReg;
            this.loading = false;
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
    fechitaF(event) {
        this.fechita = event.target.value;
        if (this.fechita2 != null) {
            this.filtro_fecha = this.fechita + ' - ' + this.fechita2;
            this.filtros();
        }
    }
    fechitaF2(event) {
        this.fechita2 = event.target.value;
        if (this.fechita != null) {
            this.filtro_fecha = this.fechita + ' - ' + this.fechita2;
            this.filtros();
        }
    }
    filtros() {
        let params = {};
        if (this.filtro_fecha != "" || this.filtro_cod != "" || this.filtro_prov != "" || this.filtro_est != '' || this.filtro_func != '') {
            this.loading = true;
            this.page = 1;
            params.pag = this.page;
            if (this.filtro_fecha != "" && this.filtro_fecha != null) {
                params.fecha = this.filtro_fecha;
            }
            if (this.filtro_cod != "") {
                params.cod = this.filtro_cod;
            }
            if (this.filtro_prov != "") {
                params.prov = this.filtro_prov;
            }
            if (this.filtro_est != "") {
                params.est = this.filtro_est;
            }
            if (this.filtro_func != "") {
                params.func = this.filtro_func;
            }
            let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
            this.location.replaceState('/compras/nacional', queryString); // actualizando URL
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?' + queryString, this.requiredParams).subscribe((data) => {
                this.comprasnacionales = data.compras;
                this.TotalItems = data.numReg;
                this.loading = false;
            });
        }
        else {
            this.location.replaceState('/compras/nacional', '');
            this.loading = true;
            this.page = 1;
            this.filtro_cod = '';
            this.filtro_est = '';
            this.filtro_fecha = '';
            this.filtro_prov = '';
            this.filtro_func = '';
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?', this.requiredParams).subscribe((data) => {
                this.comprasnacionales = data.compras;
                this.TotalItems = data.numReg;
                this.loading = false;
            });
        }
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
        if (this.filtro_est != "") {
            params.est = this.filtro_est;
        }
        if (this.filtro_prov != "") {
            params.prov = this.filtro_prov;
        }
        if (this.filtro_func != "") {
            params.func = this.filtro_func;
        }
        let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        this.location.replaceState('/comprasnacionales', queryString); // actualizando URL
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?' + queryString, this.requiredParams).subscribe((data) => {
            this.comprasnacionales = data.compras;
            this.TotalItems = data.numReg;
        });
    }
    anularCompra(id, motivo) {
        let datos = new FormData();
        datos.append("id", id);
        datos.append("funcionario", '1');
        datos.append("estado", "Anulada");
        datos.append("motivo", motivo);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/actualiza_compra.php', datos).subscribe((data) => {
            this.deleteSwal.show();
            this.cargarIndicadores();
            this.ListarComprasNacionales();
        });
    }
    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            // console.log('paged!', event);
        }, 100);
    }
    tablaLocalstorage() {
        if (this.proveedorPreCompra.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    actualiza_filtro(txt) {
        const val = txt.toLowerCase();
        switch (val) {
            case "todos": {
                this.location.replaceState('/comprasnacionales', ''); // Quitar los queryStrings
                this.filtro_cod = '';
                this.filtro_est = '';
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php', this.requiredParams).subscribe((data) => {
                    this.comprasnacionales = data.compras;
                    this.TotalItems = data.numReg;
                });
                break;
            }
            case "pendiente": {
                this.filtro_est = val; // Setear variable global del filtro de estado
                let params = {
                    pag: this.page,
                    est: val
                };
                if (this.filtro_cod != "") {
                    params.cod = this.filtro_cod;
                }
                let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
                this.location.replaceState('/comprasnacionales', queryString);
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?' + queryString, this.requiredParams).subscribe((data) => {
                    this.comprasnacionales = data.compras;
                    this.TotalItems = data.numReg;
                });
                break;
            }
            case "no conforme": {
                this.filtro_est = val; // Setear variable global del filtro de estado
                let params = {
                    pag: this.page,
                    est: val
                };
                if (this.filtro_cod != "") {
                    params.cod = this.filtro_cod;
                }
                let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
                this.location.replaceState('/comprasnacionales', queryString);
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?' + queryString, this.requiredParams).subscribe((data) => {
                    this.comprasnacionales = data.compras;
                    this.TotalItems = data.numReg;
                });
                break;
            }
            case "anulada": {
                this.filtro_est = val; // Setear variable global del filtro de estado
                let params = {
                    pag: this.page,
                    est: val
                };
                if (this.filtro_cod != "") {
                    params.cod = this.filtro_cod;
                }
                let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
                this.location.replaceState('/comprasnacionales', queryString);
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?' + queryString, this.requiredParams).subscribe((data) => {
                    this.comprasnacionales = data.compras;
                    this.TotalItems = data.numReg;
                });
                break;
            }
            case 'codigo': {
                let params = {
                    pag: this.page
                };
                if (this.filtro_cod != "") {
                    params.cod = this.filtro_cod;
                }
                if (this.filtro_est != "") {
                    params.est = this.filtro_est;
                }
                let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
                this.location.replaceState('/comprasnacionales', queryString);
                setTimeout(() => {
                    this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?' + queryString, this.requiredParams).subscribe((data) => {
                        this.comprasnacionales = data.compras;
                        this.TotalItems = data.numReg;
                    });
                }, 500);
                break;
            }
            case 'recibida': {
                this.filtro_est = val; // Setear variable global del filtro de estado
                let params = {
                    pag: this.page,
                    est: val
                };
                if (this.filtro_cod != "") {
                    params.cod = this.filtro_cod;
                }
                let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
                this.location.replaceState('/comprasnacionales', queryString);
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?' + queryString, this.requiredParams).subscribe((data) => {
                    this.comprasnacionales = data.compras;
                    this.TotalItems = data.numReg;
                });
                break;
            }
            case 'devuelta': {
                this.filtro_est = val; // Setear variable global del filtro de estado
                let params = {
                    pag: this.page,
                    est: val
                };
                if (this.filtro_cod != "") {
                    params.cod = this.filtro_cod;
                }
                let queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
                this.location.replaceState('/comprasnacionales', queryString);
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/lista_compras.php?' + queryString, this.requiredParams).subscribe((data) => {
                    this.comprasnacionales = data.compras;
                    this.TotalItems = data.numReg;
                });
                break;
            }
        }
    }
    cargarIndicadores() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/indicadores_conteo_nacional.php').subscribe((data) => {
            this.indicadores = data;
        });
    }
    getDiasAnulacion() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/get_dias_anulacion.php').subscribe((data) => {
            this.dias_anulacion = data['Dias_Anulacion'];
            this.funcionario_anulacion = data['Funcionario_Anulacion'];
        });
    }
    getFuncioriosParaResponsables() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/funcionarios/lista_funcionarios.php?depen=sistemas').subscribe((data) => {
            this.funcionarios_anulacion = data['funcionarios'];
        });
    }
    setDiasAnulacion() {
        if (this.dias_anulacion <= 0) {
            this.infoSwal.type = 'error';
            this.infoSwal.title = '¡Ha ocurrido un error!';
            this.infoSwal.text = 'El valor no puede ser menor a 1';
            this.infoSwal.show();
            return false;
        }
        let params = {};
        params.Dias_Anulacion = this.dias_anulacion;
        params.Funcionario_Anulacion = this.funcionario_anulacion;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + '/php/comprasnacionales/set_dias_anulacion.php', { params: params }).subscribe((data) => {
            this.infoSwal.type = data.type;
            this.infoSwal.title = data.title;
            this.infoSwal.text = data.message;
            this.infoSwal.show();
        });
    }
}
CompraNacionalComponent.ɵfac = function CompraNacionalComponent_Factory(t) { return new (t || CompraNacionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
CompraNacionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompraNacionalComponent, selectors: [["app-compra-nacional"]], viewQuery: function CompraNacionalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.Formcomprasnaciona = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.studentChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.deleteSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.PlantillaEstado = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.PlantillaBotones = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.PlantillaValor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.infoSwal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 97, vars: 14, consts: [[1, "card"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "col-md-6", "px-0"], [1, "text-primary"], [1, "col-md-6", "px-0", "text-right"], [1, "btn-group", "rounded", "w-sm-100"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "line"], ["multi", ""], [1, "mat-elevation-z0"], ["matPanel", ""], [1, "row"], ["appearance", "outline", 1, "col"], ["type", "text", "matInput", "", "name", "nit", "autocomplete", "off", "placeholder", "Busca por funcionario", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "date", "autocomplete", "off", "placeholder", "Busca por fecha", 3, "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "text", "autocomplete", "off", "placeholder", "Busca por c\u00F3digo", 3, "ngModel", "ngModelChange", "blur"], ["type", "text", "matInput", "", "name", "nit", "autocomplete", "off", "placeholder", "Busca por proveedor", 3, "ngModel", "ngModelChange", "blur"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], ["value", "Pendiente"], ["value", "No conforme"], ["value", "Anulada"], ["value", "Recibida"], ["value", "Devuelta"], ["class", "table table-bordered table-striped table-sm table-responsive-sm", "style", "font-size: small", 4, "ngIf", "ngIfElse"], ["class", "pull-right", "size", "sm", 3, "collectionSize", "page", "maxSize", "pageSize", "boundaryLinks", "pageChange", 4, "ngIf"], ["notData", ""], ["title", "\u00BFEst\u00E1 Seguro?", "text", "Ingrese la causal de anulaci\u00F3n", "input", "text", "type", "warning", "showCancelButton", "true", "confirmButtonText", "Si, Eliminar", "cancelButtonText", "No, Dejame Comprobar!"], ["anulacion", ""], ["title", "Orden de Compra Anulada", "text", "Se ha Anulado Correctamente la Orden de Compra", "type", "success"], ["deleteSwal", ""], ["title", "", "text", "", "type", ""], ["infoSwal", ""], ["Message", ""], ["configuracion", ""], [1, "app-modal-header"], ["type", "button", 1, "close", "basic-close", 3, "click"], ["aria-hidden", "true"], [1, "app-modal-body"], [1, "col-sm-6"], [1, "form-group"], ["for", "dias"], ["type", "number", "pattern", "[0-9]+", "placeholder", "numero de d\u00EDas", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["for", "responsable"], ["id", "responsable", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "app-modal-footer"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "table", "table-bordered", "table-striped", "table-sm", "table-responsive-sm", 2, "font-size", "small"], [1, "text-center", "col-md-1"], [4, "ngFor", "ngForOf"], [1, "img-radius", "imagen", 2, "width", "15px", 3, "src"], [1, "text-center"], [1, "label", "label-success"], ["ngbDropdown", "", 1, "dropdown-primary"], ["ngbDropdownToggle", "", "type", "button", 1, "btn-sm", "btn", "btn-secondary", "btn-mini", "waves-effect", "waves-light"], ["ngbDropdownMenu", ""], ["class", "dropdown-item waves-light waves-effect caja-botones", "href", "", 3, "routerLink", 4, "ngIf"], ["href", "", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "routerLink"], [1, "ti-eye"], ["class", "dropdown-item waves-light waves-effect caja-botones", "href", "", 3, "swal", "confirm", 4, "ngIf"], [1, "ti-pencil"], ["href", "", 1, "dropdown-item", "waves-light", "waves-effect", "caja-botones", 3, "swal", "confirm"], [1, "fa", "fa-times"], ["size", "sm", 1, "pull-right", 3, "collectionSize", "page", "maxSize", "pageSize", "boundaryLinks", "pageChange"], [3, "loading"], [3, "value"]], template: function CompraNacionalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D3rdenes de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompraNacionalComponent_Template_button_click_11_listener() { return ctx.openClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Filtros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-accordion", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-expansion-panel", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Funcionario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompraNacionalComponent_Template_input_ngModelChange_22_listener($event) { return ctx.filtro_func = $event; })("input", function CompraNacionalComponent_Template_input_input_22_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Fecha de inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompraNacionalComponent_Template_input_ngModelChange_26_listener($event) { return ctx.fechita = $event; })("input", function CompraNacionalComponent_Template_input_input_26_listener($event) { return ctx.fechitaF($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Fecha de fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompraNacionalComponent_Template_input_ngModelChange_30_listener($event) { return ctx.fechita2 = $event; })("input", function CompraNacionalComponent_Template_input_input_30_listener($event) { return ctx.fechitaF2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompraNacionalComponent_Template_input_ngModelChange_34_listener($event) { return ctx.filtro_cod = $event; })("blur", function CompraNacionalComponent_Template_input_blur_34_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompraNacionalComponent_Template_input_ngModelChange_38_listener($event) { return ctx.filtro_prov = $event; })("blur", function CompraNacionalComponent_Template_input_blur_38_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompraNacionalComponent_Template_mat_select_ngModelChange_42_listener($event) { return ctx.filtro_est = $event; })("selectionChange", function CompraNacionalComponent_Template_mat_select_selectionChange_42_listener() { return ctx.filtros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Pendiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "No Conforme");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Anulada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Recibida");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Devuelta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, CompraNacionalComponent_table_55_Template, 18, 1, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, CompraNacionalComponent_ngb_pagination_56_Template, 1, 5, "ngb-pagination", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, CompraNacionalComponent_ng_template_57_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "swal", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "swal", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "swal", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, CompraNacionalComponent_ng_template_65_Template, 1, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "app-modal-basic", null, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompraNacionalComponent_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](68); return _r10.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Caducidad en la compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Seg\u00FAn el n\u00FAmero de d\u00EDas que escriba se anular\u00E1n las compras sin acta de recepci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Modifique los dias: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompraNacionalComponent_Template_input_ngModelChange_85_listener($event) { return ctx.dias_anulacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " Modifique el responsable: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CompraNacionalComponent_Template_select_ngModelChange_90_listener($event) { return ctx.funcionario_anulacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, CompraNacionalComponent_option_91_Template, 2, 2, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompraNacionalComponent_Template_button_click_93_listener() { return ctx.setDiasAnulacion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Actualizar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompraNacionalComponent_Template_button_click_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](68); return _r10.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Cerrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtro_func);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fechita);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fechita2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtro_cod);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtro_prov);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filtro_est);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.comprasnacionales.length > 0)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.comprasnacionales.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.dias_anulacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.funcionario_anulacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.funcionarios_anulacion);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__["SwalComponent"], _components_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_13__["ModalBasicComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_12__["SwalDirective"], _components_not_data_not_data_component__WEBPACK_IMPORTED_MODULE_15__["NotDataComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], pipes: [_core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_16__["ImagePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["input[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  position: absolute;\n  right: 0;\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tcHJhLW5hY2lvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUlJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREoiLCJmaWxlIjoiY29tcHJhLW5hY2lvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgLy9vcGFjaXR5OjA7ICBcclxuICAgIC8vLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "W/39":
/*!*********************************************************!*\
  !*** ./src/app/pages/compras/compras-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ComprasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasRoutingModule", function() { return ComprasRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compra_nacional_compra_nacional_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compra-nacional/compra-nacional.component */ "Jj59");
/* harmony import */ var _compra_nacional_crear_compra_nacional_crear_compra_nacional_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compra-nacional/crear-compra-nacional/crear-compra-nacional.component */ "3K7z");
/* harmony import */ var _compra_nacional_ver_compra_nacional_ver_compra_nacional_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compra-nacional/ver-compra-nacional/ver-compra-nacional.component */ "Ybu9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'nacional', component: _compra_nacional_compra_nacional_component__WEBPACK_IMPORTED_MODULE_1__["CompraNacionalComponent"] },
    { path: 'crear-nacional', component: _compra_nacional_crear_compra_nacional_crear_compra_nacional_component__WEBPACK_IMPORTED_MODULE_2__["CrearCompraNacionalComponent"] },
    { path: 'ver-nacional/:id', component: _compra_nacional_ver_compra_nacional_ver_compra_nacional_component__WEBPACK_IMPORTED_MODULE_3__["VerCompraNacionalComponent"] },
];
class ComprasRoutingModule {
}
ComprasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ComprasRoutingModule });
ComprasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function ComprasRoutingModule_Factory(t) { return new (t || ComprasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComprasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Ybu9":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/compras/compra-nacional/ver-compra-nacional/ver-compra-nacional.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: VerCompraNacionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerCompraNacionalComponent", function() { return VerCompraNacionalComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/pipes/image.pipe */ "0gLu");
/* harmony import */ var _core_pipes_puntos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/pipes/puntos */ "WZ7M");









const _c0 = ["confirmacionSwal"];
function VerCompraNacionalComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Actividad_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate5"]("badge ", Actividad_r4.Estado == "Creacion" ? "badge-info" : "", " ", Actividad_r4.Estado == "Edicion" ? "badge-warning" : "", "", Actividad_r4.Estado == "Anulada" || Actividad_r4.Estado == "Rechazada" ? "badge-danger" : "", "", Actividad_r4.Estado == "Recepcion" ? "badge-dark" : "", " ", Actividad_r4.Estado == "Aprobacion" ? "badge-success " : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Actividad_r4.Estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 11, Actividad_r4.Imagen, "users"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Actividad_r4.Detalles, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Actividad_r4.Fecha, "");
} }
function VerCompraNacionalComponent_tr_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "puntos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Producto_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "fila", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", Producto_r5.Nombre_Comercial, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Producto_r5.Nombre_Producto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Producto_r5.Embalaje, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 11, Producto_r5.Cantidad)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 13, Producto_r5.Costo, "COP"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", Producto_r5.Iva, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 16, Producto_r5.Total, "COP"), " ");
} }
const _c1 = "Se dispone a rechazar esta Orden de Compra, por favor seleccione un motivo";
const _c2 = function (a4) { return { title: "\u00BFEst\u00E1 Seguro?", text: _c1, icon: "warning", input: "select", inputOptions: a4, inputPlaceholder: "Seleccione un Motivo", showCancelButton: true, confirmButtonText: "Si, Rechazar", cancelButtonText: "No, Dejame Comprobar!" }; };
const _c3 = "Se dispone a aprobar esta orden de compra para proceder a solicitarla.";
const _c4 = function () { return { title: "\u00BFEst\u00E1 Seguro?", text: _c3, icon: "warning", showCancelButton: true, confirmButtonText: "Si, Aprobar", cancelButtonText: "No, Dejame Comprobar!" }; };
function VerCompraNacionalComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("confirm", function VerCompraNacionalComponent_div_110_Template_button_confirm_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.EstadoAprobacion($event, "Rechazada"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " RECHAZAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("confirm", function VerCompraNacionalComponent_div_110_Template_button_confirm_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.EstadoAprobacion("", "Aprobada"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " APROBAR Y PROCEDER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swal", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, ctx_r2.Lista_Rechazo));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swal", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c4));
} }
class VerCompraNacionalComponent {
    constructor(http, router, _user) {
        this.http = http;
        this.router = router;
        this._user = _user;
        this.objeto = { 'Costo Incorrecto': 'Costo Incorrecto', 'Proveedor Incorrecto': 'Proveedor Incorrecto', 'Productos Incorrectos': 'Productos Incorrectos' };
        this.Compra = [];
        this.Productos = [];
        this.Rechazo = [];
        this.Total = 0;
        this.Fecha = new Date();
        this.id = '';
        this.SubTotalFinal = 0;
        this.IvaFinal = 0;
        this.TotalFinal = 0;
        this.Actividades = [];
        /* TODO USR AuTH */
        this.user = { Identificacion_Funcionario: '1' };
        this.permiso = false;
        this.Lista_Rechazo = {};
        this.formatMoney = (n, c = undefined, d = undefined, t = undefined) => {
            var c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
            return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        };
        this.id = this.router.snapshot.params["id"];
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/datos_compras_nacionales.php', { params: { id: this.id } }).subscribe((data) => {
            this.Compra = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/detalles_compras_nacionales.php', { params: { id: this.id } }).subscribe((data) => {
            this.Productos = data.Productos;
            // console.log(this.Productos);
            let subtotal = 0;
            let iva = 0;
            let subt_acumulada = 0;
            let total = 0;
            let iva_acumulada = 0;
            this.Productos.forEach(p => {
                this.Total += parseInt(p.Total);
                subtotal = parseFloat(p.Cantidad) * parseFloat(p.Costo);
                iva = ((parseFloat(p.Cantidad) * parseFloat(p.Costo)) * (parseFloat(p.Iva) / 100));
                subt_acumulada += subtotal;
                iva_acumulada += iva;
                total += subtotal + iva;
            });
            this.IvaFinal = this.formatMoney(iva_acumulada);
            this.SubTotalFinal = this.formatMoney(subt_acumulada);
            this.TotalFinal = this.formatMoney(total);
        });
    }
    ngOnInit() {
        this.userF = this._user.user;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/actividad_orden_compra.php', {
            params: { id: this.id }
        }).subscribe((data) => {
            this.Actividades = data;
            // console.log(this.Actividades);            
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/detalle_perfil.php', { params: { funcionario: this.user.Identificacion_Funcionario } }).subscribe((data) => {
            this.permiso = data.status;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/detalle_rechazo.php', { params: { funcionario: this.user.Identificacion_Funcionario } }).subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                this.Lista_Rechazo[data[i].Id_Tipo_Rechazo] = data[i].Nombre;
            }
        });
    }
    EstadoAprobacion(valor, Estado) {
        let datos = new FormData();
        datos.append('id', this.id);
        datos.append('estado', Estado);
        datos.append('funcionario', this.user.Identificacion_Funcionario);
        datos.append("motivo", valor);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/actualiza_compra.php', datos).subscribe((data) => {
            this.confimracionSwal.title = data.titulo;
            this.confimracionSwal.text = data.mensaje;
            this.confimracionSwal.icon = data.tipo;
            this.confimracionSwal.fire();
            this.init();
        });
    }
    init() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/datos_compras_nacionales.php', { params: { id: this.id } }).subscribe((data) => {
            this.Compra = data;
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/actividad_orden_compra.php', {
            params: { id: this.id }
        }).subscribe((data) => {
            this.Actividades = data;
            // console.log(this.Actividades);            
        });
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ruta + 'php/comprasnacionales/detalle_perfil.php', { params: { funcionario: this.user.Identificacion_Funcionario } }).subscribe((data) => {
            this.permiso = data.status;
        });
    }
}
VerCompraNacionalComponent.ɵfac = function VerCompraNacionalComponent_Factory(t) { return new (t || VerCompraNacionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
VerCompraNacionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VerCompraNacionalComponent, selectors: [["app-ver-compra-nacional"]], viewQuery: function VerCompraNacionalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confimracionSwal = _t.first);
    } }, decls: 113, vars: 28, consts: [[1, "row"], [1, "col-md-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "text-primary"], [1, "line"], [1, "list-group", "list-group-flush"], ["class", "list-group-item px-0", 4, "ngFor", "ngForOf"], [1, "col-md-8"], [1, "card-title", "d-flex", "justify-content-between"], [1, "card", "m-0", "p-0", "border-0", "shadow-none"], [1, "card-horizontal"], [1, "img-square-wrapper"], ["alt", "", "height", "45", 3, "src"], [1, "card-body", "p-0", "m-0"], [1, "card-text", 2, "font-size", "x-small"], [1, "text-right"], [1, "badge", "badge-primary"], [1, "table", "table-bordered", "table-responsive-sm", "table-sm", 2, "font-size", "small"], [1, "bg-light"], [1, "text-center", "text-uppercase"], [1, "text-center"], [1, "card", "bg-light"], ["class", "text-center", 3, "id", 4, "ngFor", "ngForOf"], [1, "table", "d-flex", "justify-content-end"], ["scope", "col"], ["class", "row m-b-20", 4, "ngIf"], ["title", "", "text", "", "icon", ""], ["confirmacionSwal", ""], [1, "list-group-item", "px-0"], ["onerror", "this.src='../../../../assets/images/noprofile.png'", "alt", "", 1, "img-thumbnail", "rounded-circle", "header-profile-user", "img-fluid", 3, "src"], [1, "text-muted"], [1, "text-center", 3, "id"], [1, "align-middle"], [1, "row", "m-b-20"], [1, "col-md-6", "col-sm-6"], [1, "btn", "btn-danger", "btn-block", 3, "swal", "confirm"], [1, "fa", "fa-thumbs-down"], [1, "btn", "btn-success", "btn-block", 3, "swal", "confirm"], [1, "fa", "fa-thumbs-up"]], template: function VerCompraNacionalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, VerCompraNacionalComponent_li_9_Template, 12, 14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "thead", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Bodega");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Fecha de Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Fecha Probable de Entrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Observaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "thead", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Embalaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "IVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "SubTotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, VerCompraNacionalComponent_tr_92_Template, 23, 19, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "SUBTOTAL:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "IVA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "TOTAL:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, VerCompraNacionalComponent_div_110_Template, 9, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "swal", 28, 29);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Actividades);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 19, ctx.userF.person.company_worked.logo, "companies"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" NIT ", ctx.userF.person.company_worked.tin, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.userF.person.company_worked.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Compra.Codigo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Compra.Estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](36, 22, ctx.Fecha, "longDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Compra.Proveedor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Compra.Bodega);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](62, 25, ctx.Compra.Fecha_Compra, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.Compra.Fecha_Probable, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Compra.Observaciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Productos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", ctx.SubTotalFinal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx.IvaFinal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx.TotalFinal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.permiso && ctx.Compra.Aprobacion == "Pendiente");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SwalComponent"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SwalDirective"]], pipes: [_core_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_7__["ImagePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _core_pipes_puntos__WEBPACK_IMPORTED_MODULE_8__["PuntosPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".card-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZlci1jb21wcmEtbmFjaW9uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJ2ZXItY29tcHJhLW5hY2lvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaG9yaXpvbnRhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiAudGFibGF7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NlY2VjZTtcclxuICAgICAgICB0aHtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjNweDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICB9XHJcbiAgICB0ZHtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgcGFkZGluZzozcHg7XHJcbiAgICB9XHJcbiAgICB0aCwgdGQsIHAsIHN0cm9uZyB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogMDsgICAgIFxyXG4gICAgICAgIH1cclxufVxyXG4gKi8iXX0= */"] });


/***/ }),

/***/ "rIvi":
/*!*************************************************!*\
  !*** ./src/app/pages/compras/compras.module.ts ***!
  \*************************************************/
/*! exports provided: ComprasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasModule", function() { return ComprasModule; });
/* harmony import */ var _compras_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compras-routing.module */ "W/39");
/* harmony import */ var mydaterangepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mydaterangepicker */ "1B6z");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _compra_nacional_compra_nacional_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compra-nacional/compra-nacional.component */ "Jj59");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _compra_nacional_crear_compra_nacional_crear_compra_nacional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compra-nacional/crear-compra-nacional/crear-compra-nacional.component */ "3K7z");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/pipes/pipes.module */ "cqX/");
/* harmony import */ var _compra_nacional_ver_compra_nacional_ver_compra_nacional_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./compra-nacional/ver-compra-nacional/ver-compra-nacional.component */ "Ybu9");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "dCan");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "IRfi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "A2Vd");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "2+6u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class ComprasModule {
}
ComprasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: ComprasModule });
ComprasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function ComprasModule_Factory(t) { return new (t || ComprasModule)(); }, imports: [[
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _compras_routing_module__WEBPACK_IMPORTED_MODULE_0__["ComprasRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            mydaterangepicker__WEBPACK_IMPORTED_MODULE_1__["MyDateRangePickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SweetAlert2Module"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](ComprasModule, { declarations: [_compra_nacional_compra_nacional_component__WEBPACK_IMPORTED_MODULE_4__["CompraNacionalComponent"],
        _compra_nacional_crear_compra_nacional_crear_compra_nacional_component__WEBPACK_IMPORTED_MODULE_7__["CrearCompraNacionalComponent"],
        _compra_nacional_ver_compra_nacional_ver_compra_nacional_component__WEBPACK_IMPORTED_MODULE_11__["VerCompraNacionalComponent"]], imports: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _compras_routing_module__WEBPACK_IMPORTED_MODULE_0__["ComprasRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        mydaterangepicker__WEBPACK_IMPORTED_MODULE_1__["MyDateRangePickerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeaheadModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SweetAlert2Module"]] }); })();


/***/ })

}]);
//# sourceMappingURL=compras-compras-module.js.map