(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajustes-ajustes-module"],{

/***/ "iWaD":
/*!*************************************************!*\
  !*** ./src/app/pages/ajustes/ajustes.module.ts ***!
  \*************************************************/
/*! exports provided: AjustesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesModule", function() { return AjustesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ajustes_rouring_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustes-rouring.module */ "zxh9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AjustesModule {
}
AjustesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AjustesModule });
AjustesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AjustesModule_Factory(t) { return new (t || AjustesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ajustes_rouring_module__WEBPACK_IMPORTED_MODULE_1__["AjustesRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AjustesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ajustes_rouring_module__WEBPACK_IMPORTED_MODULE_1__["AjustesRoutingModule"]] }); })();


/***/ }),

/***/ "zxh9":
/*!*********************************************************!*\
  !*** ./src/app/pages/ajustes/ajustes-rouring.module.ts ***!
  \*********************************************************/
/*! exports provided: AjustesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesRoutingModule", function() { return AjustesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: 'informacion-base',
        loadChildren: () => Promise.all(/*! import() | informacion-base-informacion-base-module */[__webpack_require__.e("default~compras-compras-module~configuracion-configuracion-module~contabilidad-contabilidad-module~c~d675e945"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~pages-structure-~2f6668f0"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~parametros-param~cab484ad"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~pages-structure-~5fe5341d"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-contracts-eps-contracts-eps-module~infor~0ba2147c"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~parametros-param~4ca53191")]).then(__webpack_require__.bind(null, /*! ./informacion-base/informacion-base.module */ "LGMm")).then(m => m.InformacionBaseModule)
    },
    { path: 'tipos', loadChildren: () => Promise.all(/*! import() | tipos-tipos-module */[__webpack_require__.e("default~compras-compras-module~configuracion-configuracion-module~contabilidad-contabilidad-module~c~d675e945"), __webpack_require__.e("default~configuracion-configuracion-module~parametros-parametros-module~tipos-tipos-module"), __webpack_require__.e("tipos-tipos-module")]).then(__webpack_require__.bind(null, /*! ./tipos/tipos.module */ "lCPu")).then(m => m.TiposModule) },
    { path: 'parametros', loadChildren: () => Promise.all(/*! import() | parametros-parametros-module */[__webpack_require__.e("default~compras-compras-module~configuracion-configuracion-module~contabilidad-contabilidad-module~c~d675e945"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~pages-structure-~2f6668f0"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~parametros-param~cab484ad"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~pages-structure-~5fe5341d"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-contracts-eps-contracts-eps-module~infor~0ba2147c"), __webpack_require__.e("default~configuracion-configuracion-module~parametros-parametros-module~tipos-tipos-module"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~parametros-param~4ca53191"), __webpack_require__.e("default~configuracion-configuracion-module~parametros-parametros-module")]).then(__webpack_require__.bind(null, /*! ./parametros/parametros.module */ "YB9H")).then(m => m.ParametrosModule) },
    { path: 'configuracion', loadChildren: () => Promise.all(/*! import() | configuracion-configuracion-module */[__webpack_require__.e("default~compras-compras-module~configuracion-configuracion-module~contabilidad-contabilidad-module~c~d675e945"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~pages-structure-~2f6668f0"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~parametros-param~cab484ad"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~pages-structure-~5fe5341d"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-contracts-eps-contracts-eps-module~infor~0ba2147c"), __webpack_require__.e("default~configuracion-configuracion-module~parametros-parametros-module~tipos-tipos-module"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~parametros-param~4ca53191"), __webpack_require__.e("default~configuracion-configuracion-module~parametros-parametros-module"), __webpack_require__.e("common"), __webpack_require__.e("configuracion-configuracion-module")]).then(__webpack_require__.bind(null, /*! ./configuracion/configuracion.module */ "4keV")).then(m => m.ConfiguracionModule) },
    { path: 'encuestas', loadChildren: () => __webpack_require__.e(/*! import() | encuestas-encuestas-module */ "encuestas-encuestas-module").then(__webpack_require__.bind(null, /*! ./encuestas/encuestas.module */ "7HoD")).then(m => m.EncuestasModule) },
    { path: 'structure-company', loadChildren: () => Promise.all(/*! import() | pages-structure-company-structure-company-module */[__webpack_require__.e("default~compras-compras-module~configuracion-configuracion-module~contabilidad-contabilidad-module~c~d675e945"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~pages-structure-~2f6668f0"), __webpack_require__.e("default~configuracion-configuracion-module~informacion-base-informacion-base-module~pages-structure-~5fe5341d"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./../../pages/structure-company/structure-company.module */ "E/2/")).then(m => m.StructureCompanyModule) },
];
class AjustesRoutingModule {
}
AjustesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AjustesRoutingModule });
AjustesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AjustesRoutingModule_Factory(t) { return new (t || AjustesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AjustesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=ajustes-ajustes-module.js.map