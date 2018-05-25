(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/app/app.component.html":
/*!*************************************!*\
  !*** ./demo/app/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngk-chart\n<ngk-chart></ngk-chart>\n"

/***/ }),

/***/ "./demo/app/app.component.scss":
/*!*************************************!*\
  !*** ./demo/app/app.component.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/app/app.component.ts":
/*!***********************************!*\
  !*** ./demo/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngk';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngk-root',
            template: __webpack_require__(/*! ./app.component.html */ "./demo/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./demo/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/app/app.module.ts":
/*!********************************!*\
  !*** ./demo/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angeeks_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angeeks/chart */ "./dist/angeeks/chart/fesm5/angeeks-chart.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./demo/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _angeeks_chart__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/environments/environment.ts":
/*!******************************************!*\
  !*** ./demo/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./demo/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./demo/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./dist/angeeks/chart/fesm5/angeeks-chart.js":
/*!***************************************************!*\
  !*** ./dist/angeeks/chart/fesm5/angeeks-chart.js ***!
  \***************************************************/
/*! exports provided: ChartService, ChartComponent, ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartService = /** @class */ (function () {
    function ChartService() {
    }
    ChartService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    ChartService.ctorParameters = function () { return []; };
    /** @nocollapse */ ChartService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ChartService_Factory() { return new ChartService(); }, token: ChartService, providedIn: "root" });
    return ChartService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ChartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngk-chart',
                    template: "\n    <p>\n      chart works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return []; };
    return ChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [ChartComponent],
                    exports: [ChartComponent]
                },] },
    ];
    return ChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5nZWVrcy1jaGFydC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFuZ2Vla3MvY2hhcnQvbGliL2NoYXJ0LnNlcnZpY2UudHMiLCJuZzovL0BhbmdlZWtzL2NoYXJ0L2xpYi9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL0BhbmdlZWtzL2NoYXJ0L2xpYi9jaGFydC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2stY2hhcnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgY2hhcnQgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDaGFydENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaGFydENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3VCQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQixpQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsNkNBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7eUJBVkQ7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCOztzQkFSRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/angeeks/chart/demo/main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map