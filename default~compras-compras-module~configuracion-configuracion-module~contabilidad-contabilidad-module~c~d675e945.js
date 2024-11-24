(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~compras-compras-module~configuracion-configuracion-module~contabilidad-contabilidad-module~c~d675e945"],{

/***/ "QJFE":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js ***!
  \********************************************************************************************************/
/*! exports provided: SwalComponent, SwalDirective, SwalPortalTargets, SweetAlert2LoaderService, SweetAlert2Module, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalComponent", function() { return SwalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalDirective", function() { return SwalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPortalTargets", function() { return SwalPortalTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2LoaderService", function() { return SweetAlert2LoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2Module", function() { return SweetAlert2Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return provideDefaultSwal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return swalProviderToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return fireOnInitToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return dismissOnDestroyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SwalPortalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return SwalPortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "dpFU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * Generated from: lib/di.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



function SwalPortalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const swalProviderToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#swalProvider');
/** @type {?} */
const fireOnInitToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#fireOnInit');
/** @type {?} */
const dismissOnDestroyToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#dismissOnDestroy');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sweetalert2-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SweetAlert2LoaderService {
    // Using any because Angular metadata generator does not understand a pure TS type here
    /**
     * @param {?} swalProvider
     */
    constructor(swalProvider) {
        this.swalProvider = swalProvider;
    }
    /**
     * @return {?}
     */
    get swal() {
        if (!this.swalPromiseCache) {
            this.preloadSweetAlertLibrary();
        }
        return (/** @type {?} */ (this.swalPromiseCache));
    }
    /**
     * @return {?}
     */
    preloadSweetAlertLibrary() {
        if (this.swalPromiseCache)
            return;
        /** @type {?} */
        const libPromise = isLoader(this.swalProvider)
            ? this.swalProvider()
            : Promise.resolve(this.swalProvider);
        this.swalPromiseCache = libPromise.then((/**
         * @param {?} value
         * @return {?}
         */
        value => isDefaultExport(value) ? value : value.default));
        /**
         * @param {?} value
         * @return {?}
         */
        function isLoader(value) {
            return typeof value === 'function' && ((/** @type {?} */ (value))).version === undefined;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        function isDefaultExport(value) {
            return typeof value === 'function';
        }
    }
}
SweetAlert2LoaderService.ɵfac = function SweetAlert2LoaderService_Factory(t) { return new (t || SweetAlert2LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](swalProviderToken)); };
SweetAlert2LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SweetAlert2LoaderService, factory: SweetAlert2LoaderService.ɵfac });
/** @nocollapse */
SweetAlert2LoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [swalProviderToken,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [swalProviderToken]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/swal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * <swal> component. See the README.md for usage.
 *
 * It contains a bunch of \@Inputs that have a perfect 1:1 mapping with SweetAlert2 options.
 * Their types are directly coming from SweetAlert2 types defintitions, meaning that ngx-sweetalert2 is tightly coupled
 * to SweetAlert2, but also is type-safe.
 *
 * (?) If you want to use an object that declares the SweetAlert2 options all at once rather than many \@Inputs,
 *     take a look at [swalOptions], that lets you pass a full {\@link SweetAlertOptions} object.
 *
 * (?) If you are reading the TypeScript source of this component, you may think that it's a lot of code.
 *     Be sure that a lot of this code is types and Angular boilerplate. Compiled and minified code is much smaller.
 *     If you are really concerned about performance and/or don't care about the API and its convenient integration
 *     with Angular (notably change detection and transclusion), you may totally use SweetAlert2 natively as well ;)
 *
 * /!\ Some SweetAlert options aren't \@Inputs but \@Outputs: onBeforeOpen, onOpen, onClose, onAfterClose and onDestroy
 *     (but without "on*" prefix to respect community standards).
 *     However, preConfirm and inputValidator are still \@Inputs because there are not event handlers, there can't be
 *     multiple listeners and we need the values they can/must return.
 */
class SwalComponent {
    /**
     * @param {?} sweetAlert2Loader
     * @param {?} moduleLevelFireOnInit
     * @param {?} moduleLevelDismissOnDestroy
     */
    constructor(sweetAlert2Loader, moduleLevelFireOnInit, moduleLevelDismissOnDestroy) {
        this.sweetAlert2Loader = sweetAlert2Loader;
        this.moduleLevelFireOnInit = moduleLevelFireOnInit;
        this.moduleLevelDismissOnDestroy = moduleLevelDismissOnDestroy;
        /**
         * Emits an event when the modal DOM element has been created.
         * Useful to perform DOM mutations before the modal is shown.
         */
        this.beforeOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits an event when the modal is shown.
         */
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits an event when the modal DOM is rendered.
         */
        this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits an event when the modal will be closed.
         * If you just want to know when the user dismissed the modal, prefer the higher-level (cancel) output.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits an event after the modal had been closed.
         * If you just want to know when the user dismissed the modal, prefer the higher-level (cancel) output.
         */
        this.afterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits an event after the modal had been closed.
         * The difference between {\@link destroy} and {\@link afterClose} is that the latter is called for user interactions
         * only (clicks), whereas {\@link destroy} is always called, both for user interactions and popup being closed by
         * another popup.
         */
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Confirm".
         * Bears a value when using "input", resolved "preConfirm", etc.
         *
         * Example:
         *     <swal (confirm)="handleConfirm($event)"></swal>
         *
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
         * By default, it will emit a string representing the reason for which the SweetAlert has been closed.
         * The reason is `undefined` when {\@link dismiss} is called.
         *
         * Example:
         *     <swal (cancel)="handleCancel($event)"></swal>
         *
         *     public handleCancel(reason: DismissReason | undefined): void {
         *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
         *         // ... do something
         *     }
         */
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This Set retains the properties that have been changed from \@Inputs, so we can know precisely
         * what options we have to send to {\@link Swal.fire}.
         */
        this.touchedProps = new Set();
        /**
         * A function of signature `(propName: string): void` that adds a given property name to the list of
         * touched properties, ie. {\@link touchedProps}.
         */
        this.markTouched = this.touchedProps.add.bind(this.touchedProps);
        /**
         * Is the SweetAlert2 modal represented by this component currently opened?
         */
        this.isCurrentlyShown = false;
    }
    /**
     * An object of SweetAlert2 native options, useful if:
     *  - you don't want to use the \@Inputs for practical/philosophical reasons ;
     *  - there are missing \@Inputs because ngx-sweetalert2 isn't up-to-date with SweetAlert2's latest changes.
     *
     * /!\ Please note that setting this property does NOT erase what has been set before unless you specify the
     *     previous properties you want to erase again.
     *     Ie. setting { title: 'Title' } and then { text: 'Text' } will give { title: 'Title', text: 'Text' }.
     *
     * /!\ Be aware that the options defined in this object will override the \@Inputs of the same name.
     * @param {?} options
     * @return {?}
     */
    set swalOptions(options) {
        //=> Update properties
        Object.assign(this, options);
        //=> Mark changed properties as touched
        /** @type {?} */
        const touchedKeys = (/** @type {?} */ (Object.keys(options)));
        touchedKeys.forEach(this.markTouched);
    }
    /**
     * Computes the options object that will get passed to SweetAlert2.
     * Only the properties that have been set at least once on this component will be returned.
     * Mostly for internal usage.
     * @return {?}
     */
    get swalOptions() {
        /** @type {?} */
        const options = {};
        //=> We will compute the options object based on the option keys that are known to have changed.
        //   That avoids passing a gigantic object to SweetAlert2, making debugging easier and potentially
        //   avoiding side effects.
        this.touchedProps.forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            options[prop] = this[(/** @type {?} */ (prop))];
        }));
        return options;
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    set swalVisible(visible) {
        visible ? this.fire() : this.dismiss();
    }
    /**
     * @return {?}
     */
    get swalVisible() {
        return this.isCurrentlyShown;
    }
    /**
     * Angular lifecycle hook.
     * Asks the SweetAlert2 loader service to preload the SweetAlert2 library, so it begins to be loaded only if there
     * is a <swal> component somewhere, and is probably fully loaded when the modal has to be displayed,
     * causing no delay.
     * @return {?}
     */
    ngOnInit() {
        //=> Preload SweetAlert2 library in case this component is activated.
        this.sweetAlert2Loader.preloadSweetAlertLibrary();
    }
    /**
     * Angular lifecycle hook.
     * Fires the modal, if the component or module is configured to do so.
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const fireOnInit = this.swalFireOnInit === undefined
            ? this.moduleLevelFireOnInit
            : this.swalFireOnInit;
        fireOnInit && this.fire();
    }
    /**
     * Angular lifecycle hook.
     * Updates the SweetAlert options, and if the modal is opened, asks SweetAlert to render it again.
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        //=> For each changed @Input that matches a SweetAlert2 option, mark as touched so we can
        //   send it with the next fire() or update() calls.
        Object.keys(changes)
            //=> If the filtering logic becomes more complex here, we can use Swal.isValidParameter
            .filter((/**
         * @param {?} prop
         * @return {?}
         */
        (prop) => !prop.startsWith('swal')))
            .forEach(this.markTouched);
        //=> Eventually trigger re-render if the modal is open.
        void this.update();
    }
    /**
     * Angular lifecycle hook.
     * Closes the SweetAlert when the component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        //=> Release the modal if the component is destroyed and if that behaviour is not disabled.
        /** @type {?} */
        const dismissOnDestroy = this.swalDismissOnDestroy === undefined
            ? this.moduleLevelDismissOnDestroy
            : this.swalDismissOnDestroy;
        dismissOnDestroy && this.dismiss();
    }
    /**
     * Shows the SweetAlert.
     *
     * Returns the SweetAlert2 promise for convenience and use in code behind templates.
     * Otherwise, (confirm)="myHandler($event)" and (cancel)="myHandler($event)" can be used in templates.
     * @return {?}
     */
    fire() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            const swal = yield this.sweetAlert2Loader.swal;
            //=> Build the SweetAlert2 options
            /** @type {?} */
            const options = Object.assign({}, this.swalOptions, { onBeforeOpen: (/**
                 * @param {?} modalElement
                 * @return {?}
                 */
                (modalElement) => {
                    this.beforeOpen.emit({ modalElement });
                }), onOpen: (/**
                 * @param {?} modalElement
                 * @return {?}
                 */
                (modalElement) => {
                    this.isCurrentlyShown = true;
                    this.open.emit({ modalElement });
                }), onRender: (/**
                 * @param {?} modalElement
                 * @return {?}
                 */
                (modalElement) => {
                    this.render.emit({ modalElement });
                }), onClose: (/**
                 * @param {?} modalElement
                 * @return {?}
                 */
                (modalElement) => {
                    this.isCurrentlyShown = false;
                    this.close.emit({ modalElement });
                }), onAfterClose: (/**
                 * @return {?}
                 */
                () => {
                    this.afterClose.emit();
                }), onDestroy: (/**
                 * @return {?}
                 */
                () => {
                    this.destroy.emit();
                }) });
            //=> Show the Swal! And wait for confirmation or dimissal.
            /** @type {?} */
            const result = yield swal.fire(options);
            //=> Emit on (confirm) or (cancel)
            if ('value' in result) {
                this.confirm.emit(result.value);
            }
            else {
                this.cancel.emit(result.dismiss);
            }
            return result;
        });
    }
    /**
     * Closes the modal, if opened.
     *
     * @param {?=} result The value that the modal will resolve with, triggering either (confirm) or (cancel).
     *               If the argument is not passed, (dimiss) will emit `undefined`.
     *               See {\@link Swal.close}
     * @return {?}
     */
    dismiss(result) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isCurrentlyShown)
                return;
            /** @type {?} */
            const swal = yield this.sweetAlert2Loader.swal;
            swal.close(result);
        });
    }
    /**
     * Updates SweetAlert2 options while the modal is opened, causing the modal to re-render.
     * If the modal is not opened, the component options will simply be updated and that's it.
     *
     * /!\ Please note that not all SweetAlert2 options are updatable while the modal is opened.
     *
     * @param {?=} options
     * @return {?}
     */
    update(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (options) {
                this.swalOptions = options;
            }
            if (!this.isCurrentlyShown)
                return;
            /** @type {?} */
            const swal = yield this.sweetAlert2Loader.swal;
            /** @type {?} */
            const allOptions = this.swalOptions;
            /** @type {?} */
            const updatableOptions = Object.keys(allOptions)
                .filter((/**
             * @param {?} key
             * @return {?}
             */
            (key) => swal.isUpdatableParameter(key)))
                .reduce((/**
             * @param {?} obj
             * @param {?} key
             * @return {?}
             */
            (obj, key) => {
                obj[key] = allOptions[key];
                return obj;
            }), (/** @type {?} */ ({})));
            swal.update(updatableOptions);
        });
    }
}
SwalComponent.ɵfac = function SwalComponent_Factory(t) { return new (t || SwalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](fireOnInitToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](dismissOnDestroyToken)); };
SwalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SwalComponent, selectors: [["swal"]], inputs: { swalOptions: "swalOptions", swalVisible: "swalVisible", title: "title", titleText: "titleText", text: "text", html: "html", footer: "footer", icon: "icon", iconHtml: "iconHtml", backdrop: "backdrop", toast: "toast", target: "target", input: "input", width: "width", padding: "padding", background: "background", position: "position", grow: "grow", showClass: "showClass", hideClass: "hideClass", customClass: "customClass", timer: "timer", timerProgressBar: "timerProgressBar", animation: "animation", heightAuto: "heightAuto", allowOutsideClick: "allowOutsideClick", allowEscapeKey: "allowEscapeKey", allowEnterKey: "allowEnterKey", stopKeydownPropagation: "stopKeydownPropagation", keydownListenerCapture: "keydownListenerCapture", showConfirmButton: "showConfirmButton", showCancelButton: "showCancelButton", confirmButtonText: "confirmButtonText", cancelButtonText: "cancelButtonText", confirmButtonColor: "confirmButtonColor", cancelButtonColor: "cancelButtonColor", confirmButtonAriaLabel: "confirmButtonAriaLabel", cancelButtonAriaLabel: "cancelButtonAriaLabel", buttonsStyling: "buttonsStyling", reverseButtons: "reverseButtons", focusConfirm: "focusConfirm", focusCancel: "focusCancel", showCloseButton: "showCloseButton", closeButtonHtml: "closeButtonHtml", closeButtonAriaLabel: "closeButtonAriaLabel", showLoaderOnConfirm: "showLoaderOnConfirm", preConfirm: "preConfirm", imageUrl: "imageUrl", imageWidth: "imageWidth", imageHeight: "imageHeight", imageAlt: "imageAlt", inputPlaceholder: "inputPlaceholder", inputValue: "inputValue", inputOptions: "inputOptions", inputAutoTrim: "inputAutoTrim", inputAttributes: "inputAttributes", inputValidator: "inputValidator", validationMessage: "validationMessage", progressSteps: "progressSteps", currentProgressStep: "currentProgressStep", progressStepsDistance: "progressStepsDistance", scrollbarPadding: "scrollbarPadding", swalFireOnInit: "swalFireOnInit", swalDismissOnDestroy: "swalDismissOnDestroy" }, outputs: { beforeOpen: "beforeOpen", open: "open", render: "render", close: "close", afterClose: "afterClose", destroy: "destroy", confirm: "confirm", cancel: "cancel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function SwalComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
SwalComponent.ctorParameters = () => [
    { type: SweetAlert2LoaderService },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [fireOnInitToken,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [dismissOnDestroyToken,] }] }
];
SwalComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    titleText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    html: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    iconHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    toast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hideClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    timer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    timerProgressBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    heightAuto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowOutsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowEscapeKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowEnterKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stopKeydownPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    keydownListenerCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showConfirmButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    buttonsStyling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    reverseButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showCloseButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    closeButtonHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    closeButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showLoaderOnConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageAlt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputAutoTrim: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputAttributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputValidator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    validationMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    progressSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentProgressStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    progressStepsDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scrollbarPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalFireOnInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalDismissOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    beforeOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    render: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    afterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    confirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'swal',
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: SweetAlert2LoaderService }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [fireOnInitToken]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [dismissOnDestroyToken]
            }] }]; }, { beforeOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], render: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], afterClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], destroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], confirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], swalOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], titleText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], html: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], iconHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], backdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], timer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], timerProgressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], heightAuto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowEscapeKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowEnterKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stopKeydownPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], keydownListenerCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showConfirmButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showCancelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], buttonsStyling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reverseButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showCloseButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], closeButtonHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], closeButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showLoaderOnConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageAlt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputAutoTrim: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputAttributes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputValidator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], validationMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], progressSteps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentProgressStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], progressStepsDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalFireOnInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalDismissOnDestroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/swal.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * [swal] directive. It takes a value that defines the SweetAlert and can be of three types:
 *
 * 1) A simple array of two or three strings defining [title, text, icon] - the icon being optional, ex:
 *
 *    <button [swal]="['Title', 'Text']">Click me</button>
 *
 * 2) A native SweetAlert2 options object, ex:
 *
 *    <button [swal]="{ title: 'Title', text: 'Text' }">Click me</button>
 *
 * 3) A reference to an existing SwalComponent instance for more advanced uses, ex:
 *
 *    <button [swal]="mySwal">Click me</button>
 *    <swal #mySwal title="Title" text="Text"></swal>
 */
class SwalDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} resolver
     */
    constructor(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        /**
         * Emits when the user clicks "Confirm".
         * Bears a value when using "input", resolved "preConfirm", etc.
         *
         * Example:
         *     <swal (confirm)="handleConfirm($event)"></swal>
         *
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
         * By default, it will emit a string representing the reason for which the SweetAlert has been closed.
         * The reason is `undefined` when {\@link dismiss} is called.
         *
         * Example:
         *     <swal (cancel)="handleCancel($event)"></swal>
         *
         *     public handleCancel(reason: DismissReason | undefined): void {
         *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
         *         // ... do something
         *     }
         */
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * SweetAlert2 options or a SwalComponent instance.
     * See the class doc block for more informations.
     * @param {?} options
     * @return {?}
     */
    set swal(options) {
        if (options instanceof SwalComponent) {
            this.swalInstance = options;
        }
        else if (Array.isArray(options)) {
            this.swalOptions = {};
            [this.swalOptions.title, this.swalOptions.text, this.swalOptions.icon] = options;
        }
        else {
            this.swalOptions = options;
        }
    }
    /**
     * OnInit lifecycle handler.
     * Creates a SwalComponent instance if the user didn't provided one and binds on that component (confirm) and
     * (cancel) outputs to reemit on the directive.
     * @return {?}
     */
    ngOnInit() {
        if (!this.swalInstance) {
            /** @type {?} */
            const factory = this.resolver.resolveComponentFactory(SwalComponent);
            this.swalRef = this.viewContainerRef.createComponent(factory);
            this.swalInstance = this.swalRef.instance;
        }
    }
    /**
     * OnDestroy lifecycle handler.
     * Destroys the dynamically-created SwalComponent.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.swalRef) {
            this.swalRef.destroy();
        }
    }
    /**
     * Click handler.
     * The directive listens for onclick events on its host element.
     * When this happens, it shows the <swal> attached to this directive.
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!this.swalInstance)
            return;
        if (this.swalOptions) {
            this.swalInstance.swalOptions = this.swalOptions;
        }
        /** @type {?} */
        const swalClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.swalInstance.confirm.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe((/**
         * @param {?} v
         * @return {?}
         */
        v => this.confirm.emit(v)));
        this.swalInstance.cancel.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe((/**
         * @param {?} v
         * @return {?}
         */
        v => this.cancel.emit(v)));
        this.swalInstance.fire().then((/**
         * @return {?}
         */
        () => swalClosed.next()));
    }
}
SwalDirective.ɵfac = function SwalDirective_Factory(t) { return new (t || SwalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
SwalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SwalDirective, selectors: [["", "swal", ""]], hostBindings: function SwalDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SwalDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { swal: "swal" }, outputs: { confirm: "confirm", cancel: "cancel" } });
/** @nocollapse */
SwalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
SwalDirective.propDecorators = {
    swal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[swal]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, { confirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], swal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], 
    /**
     * Click handler.
     * The directive listens for onclick events on its host element.
     * When this happens, it shows the <swal> attached to this directive.
     * @param {?} event
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/swal-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Emitted when a SweetAlert modal gets created in memory, just before it's displayed.
 * @record
 */
function BeforeOpenEvent() { }
if (false) {}
/**
 * Emitted when a SweetAlert modal gets displayed.
 * @record
 */
function OpenEvent() { }
if (false) {}
/**
 * Emitted when a SweetAlert modal gets rendered.
 * @record
 */
function RenderEvent() { }
if (false) {}
/**
 * Emitted when a SweetAlert modal gets closed (because it's been confirmed, cancelled, or for no reason at all).
 * @record
 */
function CloseEvent() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/swal-portal-targets.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SwalPortalTarget() { }
if (false) {}
/**
 * Represents an object of targets for <swal> portals (use with *swalPortal directive).
 * We must use thunks to access the Swal.* functions listed below, because they get created after the first modal is
 * shown, so this object lets us reference those functions safely and in a statically-typed manner.
 */
class SwalPortalTargets {
    constructor() {
        /**
         * Targets the modal close button block contents.
         */
        this.closeButton = {
            element: (/**
             * @param {?} swal
             * @return {?}
             */
            swal => swal.getCloseButton()),
            options: { showCloseButton: true }
        };
        /**
         * Targets the modal title block contents.
         */
        this.title = {
            element: (/**
             * @param {?} swal
             * @return {?}
             */
            swal => swal.getTitle()),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { title: ' ' }
        };
        /**
         * Targets the modal text block contents (that is another block inside the first content block, so you can still
         * use other modal features like Swal inputs, that are situated inside that parent content block).
         */
        this.content = {
            element: (/**
             * @param {?} swal
             * @return {?}
             */
            swal => swal.getHtmlContainer()),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { text: ' ' }
        };
        /**
         * Targets the actions block contents, where are the confirm and cancel buttons in a normal time.
         * /!\ WARNING: using this target destroys some of the native SweetAlert2 modal's DOM, therefore, if you use this
         *     target, do not update the modal via <swal> \@Inputs while the modal is open, or you'll get an error.
         *     We could workaround that inconvenient inside this integration, but that'd be detrimental to memory and
         *     performance of everyone, for a relatively rare use case.
         */
        this.actions = {
            element: (/**
             * @param {?} swal
             * @return {?}
             */
            swal => swal.getActions()),
            // The button will never exist, but SweetAlert2 shows the actions block only if there is at least one button.
            options: { showConfirmButton: true }
        };
        /**
         * Targets the confirm button contents, replacing the text inside it (not the button itself)
         */
        this.confirmButton = {
            element: (/**
             * @param {?} swal
             * @return {?}
             */
            swal => swal.getConfirmButton()),
            options: { showConfirmButton: true }
        };
        /**
         * Targets the cancel button contents, replacing the text inside it (not the button itself)
         */
        this.cancelButton = {
            element: (/**
             * @param {?} swal
             * @return {?}
             */
            swal => swal.getCancelButton()),
            options: { showCancelButton: true }
        };
        /**
         * Targets the modal footer contents.
         */
        this.footer = {
            element: (/**
             * @param {?} swal
             * @return {?}
             */
            swal => swal.getFooter()),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { footer: ' ' }
        };
    }
}
SwalPortalTargets.ɵfac = function SwalPortalTargets_Factory(t) { return new (t || SwalPortalTargets)(); };
SwalPortalTargets.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SwalPortalTargets, factory: SwalPortalTargets.ɵfac, providedIn: 'root' });
/** @nocollapse */ SwalPortalTargets.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function SwalPortalTargets_Factory() { return new SwalPortalTargets(); }, token: SwalPortalTargets, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalTargets, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/swal-portal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@internal
 * Holds a consumer's Angular template and displays it on a Sweet Alert.
 * See SwalPortalDirective for info about the covered feature.
 */
class SwalPortalComponent {
    constructor() {
        this.template = null;
    }
}
SwalPortalComponent.ɵfac = function SwalPortalComponent_Factory(t) { return new (t || SwalPortalComponent)(); };
SwalPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SwalPortalComponent, selectors: [["swal-portal"]], inputs: { template: "template" }, decls: 1, vars: 1, consts: [[4, "ngTemplateOutlet"]], template: function SwalPortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SwalPortalComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.template);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
SwalPortalComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'swal-portal',
                template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/swal-portal.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A structural directive that lets you use Angular templates inside of SweetAlerts.
 * There are different targetable zones provided by {\@link SwalPortalTargets}: title, content, confirmButton, etc, but
 * you can also make your own target by implementing {\@link SwalPortalTarget} and giving it to this directive.
 * The default target is the alert text content zone.
 *
 * Usage in your component's TypeScript (if you use another target than {\@link SwalPortalTargets.content}):
 *
 * \@Component({ ... })
 *     export class MyComponent {
 *         public constructor(public readonly swalTargets: SwalPortalTargets) {
 *         }
 *     }
 *
 * Usage in the template:
 *
 *     <swal title="Fill the form" (confirm)="confirmHandler()">
 *         <!-- This form will be displayed as the alert main content
 *              Targets the alert's main content zone by default -->
 *         <form *swalPortal [formControl]="myForm">
 *             ...
 *         </form>
 *
 *         <!-- This targets the confirm button's inner content
 *              Notice the usage of ng-container to avoid creating an useless DOM element inside the button -->
 *         <ng-container *swalPortal="swalTargets.confirmButton">
 *              Send ({{ secondsLeft }} seconds left)
 *         </ng-container>
 *     <swal>
 */
class SwalPortalDirective {
    /**
     * @param {?} resolver
     * @param {?} injector
     * @param {?} app
     * @param {?} templateRef
     * @param {?} sweetAlert2Loader
     * @param {?} swalTargets
     * @param {?} swalComponent
     */
    constructor(resolver, injector, app, templateRef, sweetAlert2Loader, swalTargets, swalComponent) {
        this.resolver = resolver;
        this.injector = injector;
        this.app = app;
        this.templateRef = templateRef;
        this.sweetAlert2Loader = sweetAlert2Loader;
        this.swalTargets = swalTargets;
        this.swalComponent = swalComponent;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Subscribes to the the SweetAlert appearance/disappearance events to create/destroy the SwalPortalComponent
     * that will receive the consumer's template.
     * @return {?}
     */
    ngOnInit() {
        // Can't be set in a default property value, if the customer lets *swalPortal empty, the value we get is undef.
        this.target = this.target || this.swalTargets.content;
        //=> Apply the options provided by the target definition
        void this.swalComponent.update(this.target.options);
        //=> Subscribe to a few hooks frm the parent SwalComponent.
        this.swalComponent.render.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.renderHook.bind(this));
        this.swalComponent.beforeOpen.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.beforeOpenHook.bind(this));
        this.swalComponent.destroy.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.destroyHook.bind(this));
    }
    /**
     * Signal any {\@link destroyed} consumer that this is over, so they can unsubscribe from the
     * parent SwalComponent events.
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * This render hook runs 1..n times (per modal instance), just before the modal is shown (and also before the
     * {\@link beforeOpenHook}), or after Swal.update() is called.
     * This is a good place to render, or re-render, our portal contents.
     * @private
     * @return {?}
     */
    renderHook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //=> Ensure the portal component is created
            if (!this.portalComponentRef) {
                this.portalComponentRef = this.createPortalComponent();
            }
            //=> SweetAlert2 created the modal or just erased all of our content, so we need to install/reinstall it.
            // Swal.update() is synchronous, this observable too, and mountComponentOnTarget too (the promise inside
            // this function is already resolved at this point), so the whole process of re-rendering and re-mounting
            // the portal component is fully synchronous, causing no blinks in the modal contents.
            /** @type {?} */
            const swal = yield this.sweetAlert2Loader.swal;
            //=> Find target element
            /** @type {?} */
            const targetEl = (/** @type {?} */ (this.target)).element(swal);
            //=> Replace target's contents with our component
            // https://jsperf.com/innerhtml-vs-removechild/15
            while (targetEl.firstChild) {
                targetEl.removeChild(targetEl.firstChild);
            }
            targetEl.appendChild(this.portalComponentRef.location.nativeElement);
        });
    }
    /**
     * This beforeOpen hook runs once (per modal instance), just before the modal is shown on the screen.
     * This is a good place to declare our detached view to the Angular app.
     * @private
     * @return {?}
     */
    beforeOpenHook() {
        if (!this.portalComponentRef)
            return;
        //=> Make the Angular app aware of that detached view so rendering and change detection can happen
        this.app.attachView(this.portalComponentRef.hostView);
    }
    /**
     * This afterClose hook runs once (per modal instance), just after the modal closing animation terminated.
     * This is a good place to detach and destroy our content, that is not visible anymore.
     * @private
     * @return {?}
     */
    destroyHook() {
        if (!this.portalComponentRef)
            return;
        //=> Detach the portal component from the app and destroy it
        this.app.detachView(this.portalComponentRef.hostView);
        this.portalComponentRef.destroy();
        this.portalComponentRef = void 0;
    }
    /**
     * Creates the {\@link SwalPortalComponent} and gives it the customer's template ref.
     * @private
     * @return {?}
     */
    createPortalComponent() {
        //=> Create the SwalPortalComponent that will hold our content
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(SwalPortalComponent);
        // Yes, we do not use the third argument that would directly use the target as the component's view
        // (unfortunately, because that would give a cleaner DOM and would avoid dirty and direct DOM manipulations)
        // That's because we want to keep our component safe from SweetAlert2's operations on the DOM, and to be
        // able to restore it at any moment, ie. after the modal has been re-rendered.
        /** @type {?} */
        const componentRef = factory.create(this.injector, []);
        //=> Apply the consumer's template on the component
        componentRef.instance.template = this.templateRef;
        return componentRef;
    }
}
SwalPortalDirective.ɵfac = function SwalPortalDirective_Factory(t) { return new (t || SwalPortalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalPortalTargets), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalComponent, 1)); };
SwalPortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SwalPortalDirective, selectors: [["", "swalPortal", ""]], inputs: { target: ["swalPortal", "target"] } });
/** @nocollapse */
SwalPortalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: SweetAlert2LoaderService },
    { type: SwalPortalTargets },
    { type: SwalComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
];
SwalPortalDirective.propDecorators = {
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['swalPortal',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[swalPortal]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }, { type: SweetAlert2LoaderService }, { type: SwalPortalTargets }, { type: SwalComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }] }]; }, { target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['swalPortal']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sweetalert2.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Sweetalert2ModuleConfig() { }
if (false) {}
/**
 * @return {?}
 */
function provideDefaultSwal() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "PSD3", 7));
}
class SweetAlert2Module {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = {}) {
        return {
            ngModule: SweetAlert2Module,
            providers: [
                SweetAlert2LoaderService,
                { provide: swalProviderToken, useValue: options.provideSwal || provideDefaultSwal },
                { provide: fireOnInitToken, useValue: options.fireOnInit || false },
                { provide: dismissOnDestroyToken, useValue: options.dismissOnDestroy || true }
            ]
        };
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static forChild(options = {}) {
        return {
            ngModule: SweetAlert2Module,
            providers: [
                ...options.provideSwal ? [
                    SweetAlert2LoaderService,
                    { provide: swalProviderToken, useValue: options.provideSwal }
                ] : [],
                ...options.fireOnInit !== undefined ? [
                    { provide: fireOnInitToken, useValue: options.fireOnInit }
                ] : [],
                ...options.dismissOnDestroy !== undefined ? [
                    { provide: dismissOnDestroyToken, useValue: options.dismissOnDestroy }
                ] : []
            ]
        };
    }
}
SweetAlert2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SweetAlert2Module });
SweetAlert2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SweetAlert2Module_Factory(t) { return new (t || SweetAlert2Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SweetAlert2Module, { declarations: function () { return [SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [SwalComponent, SwalPortalDirective, SwalDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                exports: [
                    SwalComponent, SwalPortalDirective, SwalDirective
                ],
                entryComponents: [
                    SwalComponent, SwalPortalComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: sweetalert2-ngx-sweetalert2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=sweetalert2-ngx-sweetalert2.js.map

/***/ })

}]);
//# sourceMappingURL=default~compras-compras-module~configuracion-configuracion-module~contabilidad-contabilidad-module~c~d675e945.js.map