(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <!-- <app-bindingsample></app-bindingsample>\r\n  <app-sample></app-sample> -->\r\n\r\n  <!-- <app-school> </app-school> -->\r\n  <!-- <app-ifsample></app-ifsample> -->\r\n  <!-- <app-forsample></app-forsample> -->\r\n  <!-- <app-switchsample> </app-switchsample> -->\r\n\r\n  <h4>Routing Sample</h4>\r\n  <br />\r\n  <a routerLink=\"home\"> Home </a> || <a routerLink=\"contact\"> Contact</a>\r\n  <!-- <a href=\"contact\"> Contact</a> -->\r\n\r\n  <hr />\r\n\r\n  <router-outlet> </router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _classroompractice_bindingsample_bindingsample_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classroompractice/bindingsample/bindingsample.component */ "./src/app/classroompractice/bindingsample/bindingsample.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sample_sample_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sample/sample.component */ "./src/app/sample/sample.component.ts");
/* harmony import */ var _classroompractice_school_school_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classroompractice/school/school.component */ "./src/app/classroompractice/school/school.component.ts");
/* harmony import */ var _classroompractice_student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classroompractice/student/student.component */ "./src/app/classroompractice/student/student.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classroompractice_directives_ifsample_ifsample_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classroompractice/directives/ifsample/ifsample.component */ "./src/app/classroompractice/directives/ifsample/ifsample.component.ts");
/* harmony import */ var _classroompractice_directives_forsample_forsample_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classroompractice/directives/forsample/forsample.component */ "./src/app/classroompractice/directives/forsample/forsample.component.ts");
/* harmony import */ var _classroompractice_directives_switchsample_switchsample_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classroompractice/directives/switchsample/switchsample.component */ "./src/app/classroompractice/directives/switchsample/switchsample.component.ts");
/* harmony import */ var _classroompractice_routing_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./classroompractice/routing/home/home.component */ "./src/app/classroompractice/routing/home/home.component.ts");
/* harmony import */ var _classroompractice_routing_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./classroompractice/routing/contact/contact.component */ "./src/app/classroompractice/routing/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: "home", component: _classroompractice_routing_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: "contact", component: _classroompractice_routing_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _classroompractice_bindingsample_bindingsample_component__WEBPACK_IMPORTED_MODULE_3__["BindingsampleComponent"],
                _sample_sample_component__WEBPACK_IMPORTED_MODULE_5__["SampleComponent"],
                _classroompractice_school_school_component__WEBPACK_IMPORTED_MODULE_6__["SchoolComponent"],
                _classroompractice_student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"],
                _classroompractice_directives_ifsample_ifsample_component__WEBPACK_IMPORTED_MODULE_9__["IfsampleComponent"],
                _classroompractice_directives_forsample_forsample_component__WEBPACK_IMPORTED_MODULE_10__["ForsampleComponent"],
                _classroompractice_directives_switchsample_switchsample_component__WEBPACK_IMPORTED_MODULE_11__["SwitchsampleComponent"],
                _classroompractice_routing_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _classroompractice_routing_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            // bootstrap: [StudentComponent]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classroompractice/bindingsample/bindingsample.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/classroompractice/bindingsample/bindingsample.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classroompractice/bindingsample/bindingsample.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/classroompractice/bindingsample/bindingsample.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4>Welcome to data binding</h4>\n\n  Student ID Test : {{ totalAmount }}\n  <!-- Interpolation-->\n\n  <br />\n  Student Name : <input type=\"text\" [value]=\"stdName\" /> <br />\n  Subject :\n  <input type=\"text\" [value]=\"subject\" (change)=\"hableSubjectChange($event)\" />\n  <br />\n  {{ subject }}\n\n  <br /><br />\n  <h3>Two way binings</h3>\n  Marks : <input type=\"text\" [(ngModel)]=\"marks\" /><br />\n  {{ marks }}\n</div>\n"

/***/ }),

/***/ "./src/app/classroompractice/bindingsample/bindingsample.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/classroompractice/bindingsample/bindingsample.component.ts ***!
  \****************************************************************************/
/*! exports provided: BindingsampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingsampleComponent", function() { return BindingsampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BindingsampleComponent = /** @class */ (function () {
    function BindingsampleComponent() {
        this.totalAmount = 4500;
        this.stdName = "Sasi";
        this.subject = "English";
        this.marks = "300";
    }
    BindingsampleComponent.prototype.ngOnInit = function () { };
    BindingsampleComponent.prototype.hableSubjectChange = function (event) {
        console.log("Changed Value : " + event.target.value);
        this.subject = event.target.value;
    };
    BindingsampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-bindingsample",
            template: __webpack_require__(/*! ./bindingsample.component.html */ "./src/app/classroompractice/bindingsample/bindingsample.component.html"),
            styles: [__webpack_require__(/*! ./bindingsample.component.css */ "./src/app/classroompractice/bindingsample/bindingsample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BindingsampleComponent);
    return BindingsampleComponent;
}());



/***/ }),

/***/ "./src/app/classroompractice/directives/forsample/forsample.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/classroompractice/directives/forsample/forsample.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classroompractice/directives/forsample/forsample.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/classroompractice/directives/forsample/forsample.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4>Student List</h4>\n\n  <ol>\n    <li *ngFor=\"let student of studentList\">\n      {{ student.stdid }} || {{ student.stdName | uppercase }} ||\n      {{ student.stdDob | date }}\n    </li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "./src/app/classroompractice/directives/forsample/forsample.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/classroompractice/directives/forsample/forsample.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForsampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForsampleComponent", function() { return ForsampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForsampleComponent = /** @class */ (function () {
    function ForsampleComponent() {
        this.studentList = [
            { stdid: 10, stdName: "sasi", stdDob: "10-Dec-15" },
            { stdid: 11, stdName: "sarat", stdDob: "10-Dec-15" },
            { stdid: 12, stdName: "John", stdDob: "10-Dec-15" },
            { stdid: 13, stdName: "David", stdDob: "10-Dec-15" }
        ];
    }
    ForsampleComponent.prototype.ngOnInit = function () { };
    ForsampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-forsample",
            template: __webpack_require__(/*! ./forsample.component.html */ "./src/app/classroompractice/directives/forsample/forsample.component.html"),
            styles: [__webpack_require__(/*! ./forsample.component.css */ "./src/app/classroompractice/directives/forsample/forsample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForsampleComponent);
    return ForsampleComponent;
}());



/***/ }),

/***/ "./src/app/classroompractice/directives/ifsample/ifsample.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/classroompractice/directives/ifsample/ifsample.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classroompractice/directives/ifsample/ifsample.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/classroompractice/directives/ifsample/ifsample.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Directive Sample - If</h3>\n\n  <!-- <h4>Simple IF</h4> -->\n\n  Student Result : <input type=\"text\" [(ngModel)]=\"result\" /> <br /><br />\n\n  <h5>Simple IF</h5>\n  <div *ngIf=\"result == 'true'\">The Student passed the exam</div>\n\n  <!-- Reference -->\n  <h5>IF then else</h5>\n  <div *ngIf=\"result == 'true'; then trueRef; else falseRef\">\n    The Student passed the exam\n  </div>\n\n  <!-- True BLOCK -->\n  <ng-template #trueRef>\n    <p>the student successfully passed the exam</p>\n  </ng-template>\n\n  <!-- FALSE BLOCK -->\n\n  <ng-template #falseRef> <p>the student not passed the exam</p> </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/classroompractice/directives/ifsample/ifsample.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/classroompractice/directives/ifsample/ifsample.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IfsampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfsampleComponent", function() { return IfsampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IfsampleComponent = /** @class */ (function () {
    function IfsampleComponent() {
        this.result = false;
    }
    IfsampleComponent.prototype.ngOnInit = function () {
    };
    IfsampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ifsample',
            template: __webpack_require__(/*! ./ifsample.component.html */ "./src/app/classroompractice/directives/ifsample/ifsample.component.html"),
            styles: [__webpack_require__(/*! ./ifsample.component.css */ "./src/app/classroompractice/directives/ifsample/ifsample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IfsampleComponent);
    return IfsampleComponent;
}());



/***/ }),

/***/ "./src/app/classroompractice/directives/switchsample/switchsample.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/classroompractice/directives/switchsample/switchsample.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classroompractice/directives/switchsample/switchsample.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/classroompractice/directives/switchsample/switchsample.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Student Type (primary/secondary/graduate) :\n  <input type=\"text\" [(ngModel)]=\"stdCategory\" />\n\n  <h4>Display the subjects of the student by categoy</h4>\n\n  <div [ngSwitch]=\"stdCategory\">\n    <p *ngSwitchCase=\"primary\">  <!-- \"stdCategory == 'primary'\"-->\n      Primary Subjects are - Englsh, Tamil, Maths etc.,\n    </p>\n    <p *ngSwitchCase=\"'secondary'\">\n      Secondary Subjects are - Englsh, Tamil, Hindi, Maths, Science etc.,\n    </p>\n    <p *ngSwitchCase=\"'graduate'\">\n      Primary Subjects are - Maths, Physics, Chemistry\n    </p>\n    <p *ngSwitchDefault>Pre-schools - basics and games</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/classroompractice/directives/switchsample/switchsample.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/classroompractice/directives/switchsample/switchsample.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SwitchsampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchsampleComponent", function() { return SwitchsampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchsampleComponent = /** @class */ (function () {
    function SwitchsampleComponent() {
        this.stdCategory = "primary"; //primary or secondary or graduate  & default is pre-school
    }
    SwitchsampleComponent.prototype.ngOnInit = function () { };
    SwitchsampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-switchsample",
            template: __webpack_require__(/*! ./switchsample.component.html */ "./src/app/classroompractice/directives/switchsample/switchsample.component.html"),
            styles: [__webpack_require__(/*! ./switchsample.component.css */ "./src/app/classroompractice/directives/switchsample/switchsample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchsampleComponent);
    return SwitchsampleComponent;
}());



/***/ }),

/***/ "./src/app/classroompractice/routing/contact/contact.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/classroompractice/routing/contact/contact.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classroompractice/routing/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/classroompractice/routing/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/classroompractice/routing/contact/contact.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/classroompractice/routing/contact/contact.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/classroompractice/routing/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/classroompractice/routing/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/classroompractice/routing/home/home.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/classroompractice/routing/home/home.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classroompractice/routing/home/home.component.html":
/*!********************************************************************!*\
  !*** ./src/app/classroompractice/routing/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3> About us</hx>\n\n    <p>\n    {{aboutuscxvxc}}\n  </p>\n\n  \n</div>\n"

/***/ }),

/***/ "./src/app/classroompractice/routing/home/home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/classroompractice/routing/home/home.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.aboutus = "This is a sample test site for routing concepts";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/classroompractice/routing/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/classroompractice/routing/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/classroompractice/school/school.component.css":
/*!***************************************************************!*\
  !*** ./src/app/classroompractice/school/school.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classroompractice/school/school.component.html":
/*!****************************************************************!*\
  !*** ./src/app/classroompractice/school/school.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>School Details : {{ schoolName }}</h2>\n\n  <input type=\"text\" [(ngModel)]=\"schoolName\" />\n\n  <hr />\n  <app-student [schoolName]=\"schoolName\"></app-student>\n</div>\n"

/***/ }),

/***/ "./src/app/classroompractice/school/school.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/classroompractice/school/school.component.ts ***!
  \**************************************************************/
/*! exports provided: SchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolComponent", function() { return SchoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../student.service */ "./src/app/classroompractice/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchoolComponent = /** @class */ (function () {
    function SchoolComponent(stdService) {
        // console.log("School : Service Function : " + stdService.getStudentList());
        this.stdService = stdService;
        this.schoolName = "XYZ Public School";
        // this.stdService.setStudentID("Student100");
        // console.log("School : Service Function ID : " + stdService.getStudentID());
    }
    SchoolComponent.prototype.ngOnInit = function () { };
    SchoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-school",
            template: __webpack_require__(/*! ./school.component.html */ "./src/app/classroompractice/school/school.component.html"),
            styles: [__webpack_require__(/*! ./school.component.css */ "./src/app/classroompractice/school/school.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]])
    ], SchoolComponent);
    return SchoolComponent;
}());



/***/ }),

/***/ "./src/app/classroompractice/student.service.ts":
/*!******************************************************!*\
  !*** ./src/app/classroompractice/student.service.ts ***!
  \******************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentService = /** @class */ (function () {
    function StudentService() {
        this.stdid = 100;
        this.studentList = [
            { stdid: 1000, stdname: "Ram", stddob: "10-Dec-2007" },
            { stdid: 1001, stdname: "Santhi", stddob: "10-Jun-2007" },
            { stdid: 1002, stdname: "Sarath", stddob: "10-Jan-2007" },
            { stdid: 1003, stdname: "Akbar", stddob: "10-Apr-2007" },
            { stdid: 1005, stdname: "John", stddob: "10-May-2007" }
        ];
    }
    StudentService.prototype.getStudentList = function () {
        return this.studentList;
    };
    StudentService.prototype.setStudentID = function (id) {
        this.stdid = id;
    };
    StudentService.prototype.getStudentID = function () {
        return this.stdid;
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], StudentService);
    return StudentService;
}());

var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());


/***/ }),

/***/ "./src/app/classroompractice/student/student.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/classroompractice/student/student.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/classroompractice/student/student.component.html":
/*!******************************************************************!*\
  !*** ./src/app/classroompractice/student/student.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Student Details</h3>\n  School Name : {{ schoolName }} <br />Student ID : {{ stdId }} <br />\n  Student Name : {{ stdName }}\n\n  <hr />\n  Student List\n\n  <ol>\n    <li *ngFor=\"let student of stdList\">\n      {{ student.stdid }} {{ student.stdname | uppercase }} {{ student.stddob }}\n    </li>\n  </ol>\n\n  <hr />\n  User Details :\n  <ol>\n    <li *ngFor=\"let user of userList\">{{ user.name }}</li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "./src/app/classroompractice/student/student.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/classroompractice/student/student.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../student.service */ "./src/app/classroompractice/student.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/classroompractice/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentComponent = /** @class */ (function () {
    function StudentComponent(stdService, userService) {
        this.stdService = stdService;
        this.userService = userService;
        this.stdId = 100;
        this.stdName = "Sarath";
        // console.log("Student : Service Function : " + stdService.getStudentList());
        // this.stdService.setStudentID("Student100");
        // console.log("Student : Service Function ID : " + stdService.getStudentID());
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.stdList = this.stdService.getStudentList();
        console.log("Stuent List : " + JSON.stringify(this.stdList));
        this.loadUser();
    };
    StudentComponent.prototype.loadUser = function () {
        var _this = this;
        console.log("User fetch User list called - start");
        this.userService.getUserList().subscribe(function (data) {
            console.log("User Data received");
            _this.userList = data;
        });
        console.log("User fetch User list called - end");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StudentComponent.prototype, "schoolName", void 0);
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-student",
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/classroompractice/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/classroompractice/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/classroompractice/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/classroompractice/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    //userList ;
    function UserService(httpService) {
        this.httpService = httpService;
    }
    UserService.prototype.getUserList = function () {
        var userURL = "https://jsonplaceholder.typicode.com/users";
        var userListObservable;
        userListObservable = this.httpService.get(userURL);
        return userListObservable;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sample/sample.component.css":
/*!*********************************************!*\
  !*** ./src/app/sample/sample.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sample/sample.component.html":
/*!**********************************************!*\
  !*** ./src/app/sample/sample.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sample works! = Peer component\n</p>\n"

/***/ }),

/***/ "./src/app/sample/sample.component.ts":
/*!********************************************!*\
  !*** ./src/app/sample/sample.component.ts ***!
  \********************************************/
/*! exports provided: SampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleComponent", function() { return SampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
    }
    SampleComponent.prototype.ngOnInit = function () {
    };
    SampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__(/*! ./sample.component.html */ "./src/app/sample/sample.component.html"),
            styles: [__webpack_require__(/*! ./sample.component.css */ "./src/app/sample/sample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\workspace\b4\b4-angular-practice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map