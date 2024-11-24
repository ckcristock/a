(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["turnero-turnero-module"],{

/***/ "Hgu5":
/*!****************************************************!*\
  !*** ./src/app/pages/turnero/turnero.component.ts ***!
  \****************************************************/
/*! exports provided: TurneroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurneroComponent", function() { return TurneroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TurneroComponent {
    constructor() { }
    ngOnInit() {
    }
}
TurneroComponent.ɵfac = function TurneroComponent_Factory(t) { return new (t || TurneroComponent)(); };
TurneroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TurneroComponent, selectors: [["app-turnero"]], decls: 2, vars: 0, template: function TurneroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " turnero works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXJuZXJvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "IHq3":
/*!**************************************************!*\
  !*** ./src/app/pages/turnero/turnero.routing.ts ***!
  \**************************************************/
/*! exports provided: TurneroRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurneroRoutes", function() { return TurneroRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _turnero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turnero.component */ "Hgu5");


const routes = [
    { path: '', component: _turnero_component__WEBPACK_IMPORTED_MODULE_1__["TurneroComponent"] },
];
const TurneroRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "sXlr":
/*!*************************************************!*\
  !*** ./src/app/pages/turnero/turnero.module.ts ***!
  \*************************************************/
/*! exports provided: TurneroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurneroModule", function() { return TurneroModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _turnero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turnero.component */ "Hgu5");
/* harmony import */ var _turnero_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turnero.routing */ "IHq3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class TurneroModule {
}
TurneroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TurneroModule });
TurneroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function TurneroModule_Factory(t) { return new (t || TurneroModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _turnero_routing__WEBPACK_IMPORTED_MODULE_2__["TurneroRoutes"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TurneroModule, { declarations: [_turnero_component__WEBPACK_IMPORTED_MODULE_1__["TurneroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=turnero-turnero-module.js.map