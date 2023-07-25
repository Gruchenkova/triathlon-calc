"use strict";
(self["webpackChunktriathlone_calx_app"] = self["webpackChunktriathlone_calx_app"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/server.component */ 6339);



class AppComponent {
  constructor(translate) {
    this.translate = translate;
    translate.setDefaultLang('de');
    translate.use('de');
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-server");
    }
  },
  dependencies: [_server_server_component__WEBPACK_IMPORTED_MODULE_0__.ServerComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/server.component */ 6339);
/* harmony import */ var _calc_calc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calc/calc.component */ 2899);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _calc_distance_distance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calc/distance/distance.component */ 1201);
/* harmony import */ var _calc_time_time_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calc/time/time.component */ 9810);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _calc_result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calc/result/result.component */ 5364);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./only-number.directive */ 603);
/* harmony import */ var _calc_calc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calc/calc.service */ 9096);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/http-loader */ 614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);



























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_calc_calc_service__WEBPACK_IMPORTED_MODULE_8__.CaclService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClient]
    }
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _server_server_component__WEBPACK_IMPORTED_MODULE_2__.ServerComponent, _calc_calc_component__WEBPACK_IMPORTED_MODULE_3__.CalcComponent, _calc_distance_distance_component__WEBPACK_IMPORTED_MODULE_4__.DistanceComponent, _calc_time_time_component__WEBPACK_IMPORTED_MODULE_5__.TimeComponent, _calc_result_result_component__WEBPACK_IMPORTED_MODULE_6__.ResultComponent, _only_number_directive__WEBPACK_IMPORTED_MODULE_7__.OnlyNumberDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslateModule]
  });
})();
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_25__.TranslateHttpLoader(http);
}

/***/ }),

/***/ 2899:
/*!****************************************!*\
  !*** ./src/app/calc/calc.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcComponent: () => (/* binding */ CalcComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _distance_distance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distance/distance.component */ 1201);
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time/time.component */ 9810);
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result/result.component */ 5364);






class CalcComponent {
  constructor(matIconRegistry, domSanitizer) {
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
    this.matIconRegistry.addSvgIcon("swim", this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/swim.svg'));
    this.matIconRegistry.addSvgIcon("bike", this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/bike.svg'));
    this.matIconRegistry.addSvgIcon("run", this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/run.svg'));
  }
}
CalcComponent.ɵfac = function CalcComponent_Factory(t) {
  return new (t || CalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer));
};
CalcComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CalcComponent,
  selectors: [["app-calc"]],
  decls: 4,
  vars: 0,
  consts: [["id", "calc"]],
  template: function CalcComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-distance")(2, "app-time")(3, "app-result");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_distance_distance_component__WEBPACK_IMPORTED_MODULE_0__.DistanceComponent, _time_time_component__WEBPACK_IMPORTED_MODULE_1__.TimeComponent, _result_result_component__WEBPACK_IMPORTED_MODULE_2__.ResultComponent],
  styles: ["#calc[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.1);\n}\n\n@media screen and (max-width: 1200px) {\n  #calc[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FsYy9jYWxjLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vdHJpYXRobG9uZS1hbmd1bGFyJTIwMi9zcmMvYXBwL2NhbGMvY2FsYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLHNCQUFBO0VDQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiNjYWxjIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2hhZG93OiAwIDAgMjVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEwKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgI2NhbGMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuIiwiI2NhbGMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDAgMCAyNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAjY2FsYyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9096:
/*!**************************************!*\
  !*** ./src/app/calc/calc.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaclService: () => (/* binding */ CaclService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class CaclService {
  constructor() {
    //distance
    this.swimInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.swimUnitSelect$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.bikeInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.bikeUnitSelect$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.runInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.runUnitSelect$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    //time
    this.swimHr$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.swimMin$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.swimSec$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.swimPaceMin$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.swimPaceSec$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.swimUnitValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.bikeHr$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.bikeMin$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.bikeSec$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.bikeSpeed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.bikeUnitValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.runHr$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.runMin$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.runSec$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.runPaceMin$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.runPaceSec$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.runUnitValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.resultValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  changeSwimInput(val) {
    this.swimInput$.next(val);
  }
  changeSwimUnitSelect(val) {
    this.swimUnitSelect$.next(val);
  }
  changeBikeInput(val) {
    this.bikeInput$.next(val);
  }
  changeBikeUnitSelect(val) {
    this.bikeUnitSelect$.next(val);
  }
  changeRunInput(val) {
    this.runInput$.next(val);
  }
  changeRunUnitSelect(val) {
    this.runUnitSelect$.next(val);
  }
  changeResult(val) {
    this.resultValue$.next(val);
  }
}
CaclService.ɵfac = function CaclService_Factory(t) {
  return new (t || CaclService)();
};
CaclService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CaclService,
  factory: CaclService.ɵfac
});

/***/ }),

/***/ 1201:
/*!*****************************************************!*\
  !*** ./src/app/calc/distance/distance.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DistanceComponent: () => (/* binding */ DistanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _calc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calc.service */ 9096);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../only-number.directive */ 603);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 5939);











var RaceKind;
(function (RaceKind) {
  RaceKind["Sprint"] = "Sprint";
  RaceKind["Olympic"] = "Olympic";
  RaceKind["Half"] = "Half";
  RaceKind["Full"] = "Full";
})(RaceKind || (RaceKind = {}));
var Units;
(function (Units) {
  Units["Meters"] = "m";
  Units["Yards"] = "yd";
  Units["Kilometers"] = "km";
})(Units || (Units = {}));
const sprint = {
  swim: {
    meters: 750,
    yards: 820.21
  },
  bike: {
    kilometers: 20
  },
  run: {
    kilometers: 5
  }
};
const olympic = {
  swim: {
    meters: 1500,
    yards: 1640.42
  },
  bike: {
    kilometers: 40
  },
  run: {
    kilometers: 10
  }
};
const half = {
  swim: {
    meters: 1930,
    yards: 2077.9
  },
  bike: {
    kilometers: 90.1
  },
  run: {
    kilometers: 21.1
  }
};
const full = {
  swim: {
    meters: 3860,
    yards: 4155.7
  },
  bike: {
    kilometers: 180.2
  },
  run: {
    kilometers: 42.2
  }
};
class DistanceComponent {
  constructor(service) {
    this.service = service;
    this.raceKind = RaceKind;
    this.units = Units;
    this.swimInput = 1500;
    this.bikeInput = 40;
    this.runInput = 10;
    this.swimUnitSelect = this.units.Meters;
    this.bikeUnitSelect = this.units.Kilometers;
    this.runUnitSelect = this.units.Kilometers;
  }
  onRaceKindChange(value) {
    switch (value) {
      case this.raceKind.Sprint:
        this.swimInput = sprint.swim.meters;
        this.swimUnitSelect = this.units.Meters;
        this.bikeInput = sprint.bike.kilometers;
        this.bikeUnitSelect = this.units.Kilometers;
        this.runInput = sprint.run.kilometers;
        this.runUnitSelect = this.units.Kilometers;
        break;
      case this.raceKind.Olympic:
        this.swimInput = olympic.swim.meters;
        this.swimUnitSelect = this.units.Meters;
        this.bikeInput = olympic.bike.kilometers;
        this.bikeUnitSelect = this.units.Kilometers;
        this.runInput = olympic.run.kilometers;
        this.runUnitSelect = this.units.Kilometers;
        break;
      case this.raceKind.Half:
        this.swimInput = half.swim.meters;
        this.swimUnitSelect = this.units.Meters;
        this.bikeInput = half.bike.kilometers;
        this.bikeUnitSelect = this.units.Kilometers;
        this.runInput = half.run.kilometers;
        this.runUnitSelect = this.units.Kilometers;
        break;
      case this.raceKind.Full:
        this.swimInput = full.swim.meters;
        this.swimUnitSelect = this.units.Meters;
        this.bikeInput = full.bike.kilometers;
        this.bikeUnitSelect = this.units.Kilometers;
        this.runInput = full.run.kilometers;
        this.runUnitSelect = this.units.Kilometers;
        break;
      default:
        break;
    }
    this.service.changeSwimInput(this.swimInput);
    this.service.changeSwimUnitSelect(this.swimUnitSelect);
    this.service.changeBikeInput(this.bikeInput);
    this.service.changeBikeUnitSelect(this.bikeUnitSelect);
    this.service.changeRunInput(this.runInput);
    this.service.changeRunUnitSelect(this.runUnitSelect);
  }
  onSwimInputChange() {
    this.service.changeSwimInput(this.swimInput);
  }
  onSwimSelectChange() {
    console.log(this.swimUnitSelect);
    this.service.changeSwimUnitSelect(this.swimUnitSelect);
  }
  onBikeInputChange() {
    this.service.changeBikeInput(this.bikeInput);
  }
  onBikeSelectChange() {
    this.service.changeBikeUnitSelect(this.bikeUnitSelect);
  }
  onRunInputChange() {
    this.service.changeRunInput(this.runInput);
  }
  onRunSelectChange() {
    this.service.changeRunUnitSelect(this.runUnitSelect);
  }
}
DistanceComponent.ɵfac = function DistanceComponent_Factory(t) {
  return new (t || DistanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_calc_service__WEBPACK_IMPORTED_MODULE_0__.CaclService));
};
DistanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DistanceComponent,
  selectors: [["app-distance"]],
  decls: 84,
  vars: 45,
  consts: [[1, "stage-container"], [1, "header"], [1, "stage"], [1, "text"], [1, "buttons", 3, "value", "change"], [3, "value"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M20.5866 6.97283C21.2176 6.35789 22.068 6.00893 22.957 6.00017C23.846 5.99141 24.7034 6.32354 25.3468 6.92592C25.9902 7.5283 26.3689 8.35338 26.4022 9.22565C26.4355 10.0979 26.1209 10.9485 25.5252 11.5965L21.7399 15.6848C21.5539 15.8864 21.454 16.1505 21.4607 16.4224C21.4674 16.6943 21.5802 16.9533 21.7759 17.1458L34.9039 30.0364C35.7801 29.846 36.6932 29.9018 37.5386 30.1974C38.7253 30.6163 40.3133 31.356 41.1653 32.6101C41.2398 32.7173 41.292 32.838 41.3187 32.9652C41.3454 33.0923 41.3462 33.2234 41.321 33.3509C41.2958 33.4783 41.245 33.5996 41.1718 33.7077C41.0985 33.8158 41.0041 33.9085 40.8941 33.9806C40.784 34.0526 40.6605 34.1025 40.5307 34.1273C40.4009 34.1522 40.2674 34.1515 40.1378 34.1253C40.0083 34.0992 39.8853 34.048 39.7761 33.9749C39.6668 33.9017 39.5734 33.8081 39.5013 33.6992C39.0332 33.0093 37.9932 32.4451 36.8612 32.0445C35.8879 31.7003 34.7479 31.9503 33.7746 32.6664L33.3426 32.9845C32.2899 33.7593 30.9969 34.1532 29.6824 34.0995C28.368 34.0458 27.1128 33.5479 26.1293 32.6899C25.4508 32.0981 24.5748 31.7712 23.6673 31.7712C22.7597 31.7712 21.8837 32.0981 21.2052 32.6899C20.2217 33.5479 18.9665 34.0458 17.6521 34.0995C16.3376 34.1532 15.0446 33.7593 13.9919 32.9845L13.5586 32.6664C12.5852 31.9503 11.4466 31.7003 10.4719 32.0445C9.33992 32.4451 8.30125 33.0093 7.83192 33.6992C7.68346 33.9128 7.45522 34.0602 7.19674 34.1095C6.93826 34.1588 6.6704 34.106 6.45132 33.9626C6.23223 33.8192 6.07959 33.5967 6.02653 33.3435C5.97347 33.0903 6.02428 32.8267 6.16792 32.6101C7.01992 31.356 8.60792 30.6163 9.79458 30.1974C10.2475 30.0374 10.7229 29.9473 11.2039 29.9304L17.1613 24.0813C17.4642 23.784 17.6389 23.3835 17.6491 22.963C17.6593 22.5425 17.5041 22.1343 17.2159 21.8232L13.9706 18.3174C13.3369 17.6329 12.9958 16.7352 13.0181 15.8105C13.0405 14.8857 13.4245 14.0049 14.0906 13.3507L20.5866 6.97283ZM13.5546 30.399C13.9839 30.5862 14.3893 30.8232 14.7586 31.0955L15.1906 31.4136C15.8743 31.9168 16.7141 32.1727 17.5679 32.1379C18.4218 32.1031 19.2371 31.7797 19.8759 31.2224C20.9204 30.3111 22.2692 29.8077 23.6666 29.8077C25.0639 29.8077 26.4127 30.3111 27.4573 31.2224C28.0961 31.7797 28.9114 32.1031 29.7652 32.1379C30.619 32.1727 31.4589 31.9168 32.1426 31.4136L32.5746 31.0955C32.6852 31.0143 32.7986 30.9357 32.9159 30.8598L20.3613 18.5347C19.802 17.9853 19.4796 17.2457 19.4607 16.4692C19.4419 15.6928 19.728 14.9389 20.2599 14.364L24.0466 10.2757C24.3053 10.0092 24.4455 9.65275 24.4365 9.28474C24.4275 8.91673 24.27 8.56731 23.9986 8.31334C23.7272 8.05937 23.3641 7.92165 22.9893 7.93049C22.6145 7.93933 22.2586 8.094 21.9999 8.36047L15.5039 14.7384C15.201 15.0357 15.0263 15.4362 15.0161 15.8567C15.0059 16.2772 15.161 16.6854 15.4493 16.9965L18.6946 20.5023C19.3283 21.1868 19.6694 22.0845 19.647 23.0092C19.6247 23.934 19.2407 24.8148 18.5746 25.469L13.5546 30.399Z", "fill", "#21A9FF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M27.9999 19.0819C27.9999 17.9535 28.4565 16.8714 29.2691 16.0735C30.0818 15.2756 31.184 14.8274 32.3333 14.8274C33.4825 14.8274 34.5847 15.2756 35.3974 16.0735C36.21 16.8714 36.6666 17.9535 36.6666 19.0819C36.6666 20.2103 36.21 21.2924 35.3974 22.0903C34.5847 22.8882 33.4825 23.3365 32.3333 23.3365C31.184 23.3365 30.0818 22.8882 29.2691 22.0903C28.4565 21.2924 27.9999 20.2103 27.9999 19.0819ZM32.3333 16.791C31.7144 16.791 31.1209 17.0324 30.6833 17.462C30.2458 17.8916 29.9999 18.4743 29.9999 19.0819C29.9999 19.6895 30.2458 20.2722 30.6833 20.7018C31.1209 21.1315 31.7144 21.3728 32.3333 21.3728C32.9521 21.3728 33.5456 21.1315 33.9832 20.7018C34.4208 20.2722 34.6666 19.6895 34.6666 19.0819C34.6666 18.4743 34.4208 17.8916 33.9832 17.462C33.5456 17.0324 32.9521 16.791 32.3333 16.791Z", "fill", "#21A9FF"], ["d", "M6.44525 37.8988C6.66592 38.0432 6.93597 38.0957 7.19602 38.0446C7.45607 37.9935 7.6848 37.8431 7.83192 37.6265C8.30125 36.9366 9.33992 36.3724 10.4719 35.9718C11.4453 35.6275 12.5866 35.8776 13.5586 36.5936L13.9906 36.9117C15.0433 37.6865 16.3362 38.0804 17.6507 38.0267C18.9652 37.9731 20.2204 37.4751 21.2039 36.6172C21.8824 36.025 22.7587 35.6979 23.6666 35.6979C24.5744 35.6979 25.4507 36.025 26.1293 36.6172C27.1128 37.4751 28.368 37.9731 29.6825 38.0267C30.9969 38.0804 32.2899 37.6865 33.3426 36.9117L33.7746 36.5936C34.7479 35.8776 35.8866 35.6275 36.8613 35.9718C37.9933 36.3724 39.0319 36.9366 39.5013 37.6265C39.6497 37.84 39.878 37.9874 40.1364 38.0367C40.3949 38.086 40.6628 38.0333 40.8819 37.8899C41.1009 37.7465 41.2536 37.524 41.3066 37.2708C41.3597 37.0176 41.3089 36.754 41.1653 36.5373C40.3133 35.2832 38.7253 34.5449 37.5386 34.1247C35.7706 33.4989 33.9333 34.0226 32.5746 35.0227L32.1426 35.3408C31.4589 35.8441 30.619 36.1 29.7652 36.0652C28.9114 36.0303 28.0961 35.7069 27.4573 35.1497C26.4127 34.2384 25.0639 33.735 23.6666 33.735C22.2692 33.735 20.9205 34.2384 19.8759 35.1497C19.2371 35.7069 18.4218 36.0303 17.568 36.0652C16.7141 36.1 15.8743 35.8441 15.1906 35.3408L14.7586 35.0227C13.3999 34.0226 11.5626 33.4989 9.79459 34.1247C8.60792 34.5436 7.01992 35.2832 6.16792 36.5373C6.02083 36.754 5.96741 37.0191 6.01942 37.2745C6.07143 37.5298 6.22461 37.7544 6.44525 37.8988Z", "fill", "#21A9FF"], ["d", "M7.83192 41.5538C7.68346 41.7673 7.45522 41.9147 7.19674 41.964C6.93826 42.0133 6.6704 41.9605 6.45132 41.8171C6.23223 41.6737 6.07959 41.4513 6.02653 41.1981C5.97347 40.9448 6.02428 40.6813 6.16792 40.4646C7.01992 39.2105 8.60792 38.4709 9.79458 38.052C11.5626 37.4262 13.3999 37.9499 14.7586 38.95L15.1906 39.2681C15.8743 39.7714 16.7141 40.0273 17.5679 39.9925C18.4218 39.9576 19.2371 39.6342 19.8759 39.077C20.9204 38.1657 22.2692 37.6623 23.6666 37.6623C25.0639 37.6623 26.4127 38.1657 27.4573 39.077C28.0961 39.6342 28.9114 39.9576 29.7652 39.9925C30.619 40.0273 31.4589 39.7714 32.1426 39.2681L32.5746 38.95C33.9333 37.9499 35.7706 37.4262 37.5386 38.052C38.7253 38.4709 40.3133 39.2105 41.1653 40.4646C41.2398 40.5719 41.292 40.6925 41.3187 40.8197C41.3454 40.9469 41.3462 41.078 41.321 41.2054C41.2958 41.3329 41.245 41.4542 41.1718 41.5623C41.0985 41.6703 41.0041 41.7631 40.8941 41.8351C40.784 41.9071 40.6605 41.957 40.5307 41.9819C40.4009 42.0067 40.2674 42.006 40.1378 41.9799C40.0083 41.9537 39.8853 41.9026 39.7761 41.8294C39.6668 41.7563 39.5734 41.6626 39.5013 41.5538C39.0332 40.8639 37.9932 40.2997 36.8612 39.8991C35.8879 39.5548 34.7479 39.8048 33.7746 40.5209L33.3426 40.839C32.2899 41.6138 30.9969 42.0077 29.6824 41.954C28.368 41.9004 27.1128 41.4024 26.1293 40.5445C25.4508 39.9526 24.5748 39.6257 23.6673 39.6257C22.7597 39.6257 21.8837 39.9526 21.2052 40.5445C20.2217 41.4024 18.9665 41.9004 17.6521 41.954C16.3376 42.0077 15.0446 41.6138 13.9919 40.839L13.5586 40.5209C12.5852 39.8048 11.4466 39.5548 10.4719 39.8991C9.33992 40.2997 8.30125 40.8639 7.83192 41.5538Z", "fill", "#21A9FF"], ["matInput", "", "maxlength", "5", "onlyNumber", "", "name", "swimInput", 3, "ngModel", "ngModelChange"], ["name", "swimUnitSelect", "required", "", 3, "ngModel", "ngModelChange"], ["d", "M37.2354 19.087C36.4865 19.0891 35.7403 19.1754 35.0108 19.3442L33.1891 13.3583H37.5968C37.8807 13.3573 38.1535 13.4693 38.3549 13.6694C38.5564 13.8696 38.6701 14.1416 38.671 14.4256C38.6719 14.7096 38.56 14.9823 38.3598 15.1837C38.1597 15.3852 37.8877 15.4989 37.6037 15.4998L36.5145 15.5064C36.3259 15.5091 36.146 15.5859 36.0138 15.7204C35.8816 15.8548 35.8077 16.036 35.8083 16.2246C35.8088 16.4131 35.8837 16.5939 36.0167 16.7276C36.1497 16.8612 36.33 16.9371 36.5186 16.9386H36.5229L37.6121 16.932C38.2736 16.9264 38.9061 16.6592 39.3712 16.1887C39.8364 15.7183 40.0963 15.0828 40.0942 14.4212C40.0921 13.7596 39.8282 13.1257 39.3602 12.6582C38.8921 12.1906 38.258 11.9274 37.5964 11.926H32.2222C32.1104 11.9261 32.0001 11.9523 31.9002 12.0026C31.8003 12.0529 31.7136 12.126 31.647 12.2158C31.5805 12.3057 31.5358 12.4099 31.5168 12.5201C31.4977 12.6303 31.5047 12.7435 31.5372 12.8505L32.1839 14.9753H18.5159L17.5434 12.6423H18.9113C18.9213 12.6423 18.9319 12.6423 18.942 12.6416C19.3763 12.6262 19.7928 12.4652 20.1245 12.1844C20.4562 11.9037 20.6838 11.5195 20.7707 11.0937C20.8196 10.8494 20.82 10.5979 20.7716 10.3535C20.7233 10.1091 20.6273 9.87666 20.4891 9.6694C20.3509 9.46213 20.1732 9.28413 19.9662 9.14557C19.7591 9.00701 19.5268 8.91061 19.2825 8.86187L15.2165 8.04956C14.8882 7.98385 14.5501 7.98348 14.2216 8.04845C13.8931 8.11343 13.5807 8.24248 13.3021 8.42823C13.0235 8.61399 12.7842 8.85281 12.598 9.13105C12.4117 9.4093 12.2821 9.72151 12.2165 10.0499C12.1549 10.3583 12.1616 10.6765 12.2361 10.9821C12.3106 11.2877 12.4512 11.5733 12.6479 11.8188C12.8495 12.0707 13.1042 12.2752 13.3937 12.4176C13.6832 12.5601 14.0005 12.6372 14.3231 12.6432H15.9918L17.2379 15.6314L14.5292 20.1691C13.1779 19.4882 11.69 19.1223 10.177 19.0986C8.6641 19.075 7.16544 19.3943 5.79352 20.0326C4.4216 20.6709 3.21205 21.6115 2.25562 22.7841C1.29919 23.9566 0.620723 25.3305 0.271122 26.8027C-0.0784793 28.2749 -0.0901332 29.8071 0.237035 31.2845C0.564202 32.7618 1.2217 34.1459 2.16018 35.3328C3.09866 36.5198 4.29377 37.4787 5.65582 38.1378C7.01787 38.7969 8.5115 39.139 10.0246 39.1383C15.3109 39.1383 19.6438 35.023 20.0135 29.8292H20.8676C21.0256 30.4422 21.3824 30.9856 21.8823 31.3741C22.3821 31.7627 22.9967 31.9745 23.6298 31.9764C23.6967 31.9764 23.759 31.9612 23.8253 31.9567L24.7853 34.8408H24.3461C24.1562 34.8408 23.974 34.9162 23.8397 35.0505C23.7054 35.1848 23.63 35.367 23.63 35.5569C23.63 35.7468 23.7054 35.929 23.8397 36.0633C23.974 36.1976 24.1562 36.273 24.3461 36.273H27.1901C27.38 36.273 27.5622 36.1976 27.6965 36.0633C27.8308 35.929 27.9062 35.7468 27.9062 35.5569C27.9062 35.367 27.8308 35.1848 27.6965 35.0505C27.5622 34.9162 27.38 34.8408 27.1901 34.8408H26.2947L25.187 31.5105C25.5313 31.2903 25.824 30.9984 26.0449 30.6545C26.2659 30.3107 26.4099 29.9232 26.467 29.5185C26.5242 29.1139 26.4932 28.7016 26.3762 28.31C26.2591 27.9185 26.0588 27.5568 25.7889 27.2499L32.8893 17.2911L33.6419 19.764C31.3172 20.6659 29.4134 22.4037 28.3036 24.6367C27.1938 26.8696 26.9582 29.4366 27.6429 31.8342C28.3277 34.2319 29.8834 36.2873 32.005 37.5974C34.1267 38.9074 36.6612 39.3777 39.1116 38.9159C41.562 38.4542 43.7515 37.0937 45.2508 35.1013C46.7501 33.1088 47.451 30.6282 47.2161 28.1458C46.9812 25.6633 45.8275 23.3582 43.9811 21.6823C42.1347 20.0065 39.7289 19.0808 37.2354 19.0868V19.087ZM13.6207 10.3303C13.6493 10.1863 13.7061 10.0494 13.7877 9.92741C13.8694 9.8054 13.9743 9.70068 14.0964 9.61924C14.2185 9.53779 14.3555 9.48122 14.4995 9.45276C14.6435 9.4243 14.7917 9.42451 14.9357 9.45337C19.1436 10.3428 19.1071 10.1786 19.2976 10.4639C19.5061 10.7777 19.2762 11.1846 18.8927 11.21L14.342 11.2111C14.2337 11.2092 14.1271 11.1838 14.0296 11.1365C13.9321 11.0893 13.8461 11.0214 13.7774 10.9376C13.7088 10.8538 13.6593 10.7561 13.6322 10.6512C13.6051 10.5464 13.6012 10.4368 13.6207 10.3303ZM17.9234 17.2764L21.909 26.837C21.3963 27.2247 21.0293 27.7738 20.8671 28.3957H20.0131C19.9065 26.9087 19.4694 25.4642 18.7335 24.1676C17.9976 22.8711 16.9815 21.7551 15.7594 20.9013L17.9234 17.2764ZM17.1488 28.3957C17.0476 27.4049 16.7407 26.4462 16.2476 25.5808C15.7546 24.7155 15.0862 23.9626 14.2855 23.3704L15.0224 22.1359C16.0334 22.8594 16.8752 23.7939 17.4895 24.8747C18.1039 25.9555 18.4761 27.1569 18.5805 28.3957H17.1488ZM9.40146 29.4656C9.46395 29.5757 9.5545 29.6672 9.66388 29.7309C9.77327 29.7946 9.89759 29.8282 10.0242 29.8282H15.7031C15.5535 31.0233 15.0311 32.1409 14.2103 33.0224C13.3895 33.9038 12.3119 34.5044 11.1304 34.7387C9.94899 34.973 8.72375 34.8292 7.62864 34.3277C6.53354 33.8263 5.62421 32.9926 5.02975 31.9451C4.43529 30.8975 4.1859 29.6893 4.31698 28.492C4.44807 27.2947 4.95296 26.1691 5.75999 25.275C6.56702 24.3809 7.63519 23.7638 8.81285 23.5111C9.99052 23.2585 11.2178 23.3832 12.3206 23.8676L9.40913 28.745C9.34433 28.8538 9.30948 28.9777 9.30814 29.1043C9.30679 29.2308 9.33899 29.3555 9.40146 29.4656ZM11.2857 28.3957L13.5485 24.605C14.7388 25.5347 15.5133 26.8973 15.7031 28.3957H11.2857ZM10.0242 37.7052C8.7292 37.7088 7.45014 37.4197 6.28261 36.8595C5.11507 36.2993 4.08924 35.4825 3.28181 34.47C2.47437 33.4576 1.9062 32.2758 1.61976 31.0129C1.33332 29.75 1.33602 28.4387 1.62766 27.1769C1.91931 25.9152 2.49234 24.7358 3.30395 23.7267C4.11555 22.7176 5.14474 21.905 6.31457 21.3496C7.48441 20.7942 8.76465 20.5104 10.0596 20.5194C11.3545 20.5284 12.6307 20.8299 13.7927 21.4015L13.0568 22.6344C11.6812 21.992 10.1369 21.8037 8.64729 22.0968C7.15765 22.3899 5.79984 23.1492 4.77023 24.2649C3.74061 25.3806 3.09256 26.7949 2.91978 28.3033C2.74701 29.8116 3.05847 31.3358 3.80912 32.6555C4.55977 33.9751 5.71071 35.0218 7.09549 35.6441C8.48027 36.2665 10.0271 36.4323 11.5123 36.1175C12.9975 35.8027 14.3441 35.0237 15.3574 33.8931C16.3706 32.7625 16.998 31.3389 17.1488 29.8282H18.5805C18.3995 31.974 17.42 33.9737 15.8357 35.4322C14.2514 36.8907 12.1776 37.7018 10.0242 37.7052ZM22.1976 29.1121C22.1976 28.8289 22.2816 28.552 22.439 28.3165C22.5963 28.081 22.82 27.8974 23.0817 27.789C23.3434 27.6806 23.6314 27.6522 23.9092 27.7075C24.187 27.7628 24.4422 27.8992 24.6425 28.0995C24.8427 28.2997 24.9791 28.5549 25.0344 28.8327C25.0897 29.1106 25.0613 29.3985 24.9529 29.6602C24.8445 29.9219 24.6609 30.1456 24.4254 30.3029C24.1899 30.4603 23.913 30.5443 23.6298 30.5443C23.2501 30.5439 22.886 30.3929 22.6175 30.1244C22.349 29.8559 22.198 29.4919 22.1976 29.1121ZM24.6124 26.4324C24.1743 26.2577 23.6963 26.2078 23.2316 26.2881L19.1129 16.4076H31.7605L24.6124 26.4324ZM37.2354 37.7052C35.2373 37.7062 33.3014 37.0105 31.761 35.738C30.2206 34.4654 29.172 32.6956 28.7959 30.7333C28.4197 28.771 28.7395 26.7389 29.7002 24.9869C30.6608 23.2349 32.2023 21.8727 34.0591 21.1348L34.4763 22.5055C32.7672 23.2171 31.3971 24.5585 30.6494 26.2521C29.9018 27.9458 29.8338 29.862 30.4596 31.6044C31.0854 33.3467 32.3571 34.7818 34.0115 35.6127C35.6659 36.4436 37.5764 36.6066 39.3477 36.0682C41.119 35.5297 42.6155 34.3309 43.5275 32.7198C44.4396 31.1087 44.6974 29.2087 44.2475 27.4128C43.7977 25.617 42.6748 24.0628 41.111 23.0718C39.5472 22.0808 37.6623 21.729 35.8463 22.089L35.4279 20.7136C36.606 20.4599 37.8242 20.4569 39.0035 20.7047C40.1828 20.9525 41.2968 21.4456 42.2731 22.152C43.2495 22.8584 44.0663 23.7623 44.6705 24.805C45.2747 25.8476 45.6528 27.0057 45.7803 28.204C45.9078 29.4023 45.7817 30.6141 45.4104 31.7605C45.039 32.9069 44.4307 33.9624 43.6248 34.8584C42.819 35.7544 41.8337 36.4708 40.7329 36.9612C39.6321 37.4516 38.4404 37.7049 37.2354 37.7047V37.7052ZM37.9203 28.9037L36.2672 23.4718C37.7028 23.2262 39.1781 23.537 40.3926 24.3408C41.6072 25.1447 42.4698 26.3812 42.8048 27.7986C43.1398 29.2161 42.9221 30.7079 42.1959 31.9705C41.4697 33.233 40.2897 34.1714 38.896 34.5945C37.5024 35.0177 35.9998 34.8938 34.6942 34.2481C33.3887 33.6025 32.3782 32.4836 31.8686 31.1191C31.359 29.7547 31.3885 28.2474 31.9511 26.9039C32.5137 25.5605 33.5671 24.4819 34.8969 23.8878L36.5504 29.3205C36.5777 29.4104 36.6225 29.4941 36.6822 29.5667C36.7419 29.6394 36.8154 29.6995 36.8983 29.7438C36.9813 29.788 37.0721 29.8155 37.1657 29.8247C37.2593 29.8338 37.3538 29.8244 37.4437 29.7971C37.5337 29.7697 37.6173 29.7249 37.69 29.6652C37.7626 29.6055 37.8228 29.532 37.867 29.4491C37.9113 29.3661 37.9388 29.2753 37.9479 29.1817C37.957 29.0881 37.9477 28.9937 37.9203 28.9037Z", "fill", "#21A9FF"], ["matInput", "", "onlyNumber", "", "maxlength", "5", "name", "bikeInput", 3, "ngModel", "ngModelChange"], ["name", "bikeUnitSelect", "required", "", 3, "ngModel", "ngModelChange"], ["d", "M22.3634 27.7272C22.0779 27.7272 21.7925 27.5845 21.6212 27.299L20.565 25.4435L19.0521 26.4997C18.6524 26.7566 18.1387 26.671 17.8532 26.2713C17.5963 25.8717 17.6819 25.3579 18.0816 25.0724L20.3653 23.5024C20.5651 23.3597 20.7935 23.3311 21.0504 23.3597C21.2788 23.4168 21.4786 23.5595 21.5928 23.7593L23.1342 26.4141C23.3626 26.8137 23.2199 27.356 22.8202 27.5844C22.6774 27.6987 22.5347 27.7272 22.3634 27.7272Z", "fill", "#21A9FF"], ["d", "M34.4096 39.0027C33.9814 39.0027 33.6389 38.6887 33.5533 38.2891V38.2605C33.5247 38.1178 33.4962 38.0036 33.4106 37.8894L28.2152 36.3765C28.1011 36.348 27.9869 36.2623 27.8727 36.1767L27.3303 35.6628C27.2732 35.6343 27.2446 35.5772 27.2161 35.5201L22.2777 28.5549C21.9922 28.1553 22.1064 27.6415 22.4775 27.356C22.8772 27.0706 23.391 27.1848 23.6764 27.5559L28.5292 34.4354L28.8717 34.7494L34.1242 36.2909C34.2669 36.3194 34.3811 36.4051 34.4953 36.5192C34.8949 36.9189 35.1518 37.4327 35.2375 38.0036V38.0322C35.3231 38.4889 34.9806 38.9456 34.5238 39.0027L34.4096 39.0027ZM6.57771 29.5256C6.2637 29.5256 5.97823 29.3543 5.80695 29.0689C5.06473 27.613 5.23601 25.8718 6.2637 24.6158L10.5455 19.3919C10.7168 19.1921 10.9452 19.0779 11.2306 19.0779C11.4876 19.0779 11.7445 19.1921 11.8872 19.3919C12.6294 20.3339 13.029 21.4757 13.029 22.6746V22.7317C13.029 23.217 12.6579 23.5881 12.1727 23.5881C11.6874 23.5881 11.3163 23.217 11.3163 22.7317V22.6746C11.3163 22.2464 11.2307 21.8183 11.088 21.4187L7.6054 25.7005C7.00591 26.4427 6.89173 27.4418 7.34848 28.2981C7.57685 28.7263 7.40557 29.2401 6.97737 29.4399C6.86318 29.4971 6.72045 29.5256 6.57771 29.5256Z", "fill", "#21A9FF"], ["d", "M27.8727 35.8913C27.6158 35.8913 27.3303 35.7771 27.159 35.5202L22.2777 28.555C21.4214 27.3561 20.0511 26.6425 18.5953 26.6425H18.5668L15.3126 26.671H15.284C13.1145 26.671 11.3448 24.9297 11.3162 22.7602V22.7031C11.3162 22.2178 11.6873 21.8468 12.1725 21.8468C12.6293 21.8468 13.0289 22.2179 13.0289 22.7031V22.7602C13.0574 23.9877 14.0565 24.9868 15.284 24.9868L18.5382 24.9583H18.5668C20.5935 24.9583 22.4775 25.9288 23.6479 27.5844L28.5577 34.5496C28.8432 34.9492 28.729 35.463 28.3579 35.7485C28.2152 35.8342 28.044 35.8913 27.8727 35.8913Z", "fill", "#21A9FF"], ["d", "M27.2447 42C25.8174 42 24.4187 41.6289 23.1913 40.9153L3.78028 31.8664C3.52336 31.7522 3.35208 31.5238 3.29498 31.2383C3.23789 30.9529 3.32353 30.6959 3.52336 30.4961L5.94969 28.0698C6.29226 27.7272 6.83457 27.7272 7.14859 28.0698C7.49115 28.4123 7.49115 28.9547 7.14859 29.2687L5.60713 30.8101L23.9333 39.3738C23.9619 39.3738 23.9904 39.4024 23.9904 39.4024C24.9609 39.9733 26.0743 40.2587 27.2161 40.2587L32.3543 40.2301C33.3248 40.1445 33.7816 39.4879 33.7816 38.2319C33.7816 37.7466 34.1527 37.3756 34.6379 37.3756C35.1232 37.3756 35.4942 37.7467 35.4942 38.2319C35.4942 41.4576 33.1535 41.8858 32.4399 41.9429H32.3828L27.2447 42ZM21.136 28.6693C20.879 28.6693 20.6221 28.5551 20.4508 28.3267C20.1654 27.9556 20.251 27.4133 20.6221 27.1278L22.3634 25.8147C22.7345 25.5292 23.2768 25.6149 23.5623 25.986C23.8478 26.3571 23.7621 26.8994 23.391 27.1849L21.6497 28.498C21.4785 28.6122 21.3072 28.6693 21.136 28.6693ZM23.2768 31.1527C22.9914 31.1527 22.7344 31.01 22.5632 30.7816C22.3062 30.3819 22.4204 29.8681 22.8201 29.5827L24.4186 28.5265C24.8183 28.2696 25.3321 28.3838 25.6175 28.7834C25.8744 29.1831 25.7603 29.6969 25.3606 29.9823L23.7621 31.0385C23.5908 31.1241 23.4481 31.1527 23.2768 31.1527ZM25.1323 33.8074C24.8468 33.8074 24.5899 33.6647 24.4186 33.4363C24.1617 33.0366 24.2759 32.5229 24.6756 32.2374L26.2741 31.1812C26.6738 30.9243 27.1875 31.0385 27.473 31.4382C27.7299 31.8378 27.6157 32.3516 27.2161 32.637L25.6175 33.6932C25.4749 33.7503 25.3036 33.8074 25.1323 33.8074ZM11.7445 21.6185C11.5447 21.6185 11.3448 21.5328 11.1735 21.3901C10.831 21.0761 10.8024 20.5338 11.1165 20.1912C12.087 19.1065 12.8863 17.879 13.4572 16.5088L17.7676 6.51792C17.9674 6.08972 18.4527 5.88989 18.8808 6.06117C19.309 6.261 19.5089 6.7463 19.3376 7.17443L15.0272 17.1654C14.3706 18.6783 13.4858 20.077 12.3725 21.3045C12.2012 21.5328 11.9729 21.6185 11.7445 21.6185ZM20.251 25.358H20.1654C19.7086 25.3009 19.3376 24.9012 19.3947 24.416C19.5945 22.1609 20.3937 19.9914 21.6783 18.1074L30.1849 6.37519C30.4703 6.00408 30.9842 5.91844 31.3838 6.17536C31.7549 6.46083 31.8405 6.9746 31.5836 7.37425L23.1055 19.0779C21.9923 20.6765 21.3072 22.5891 21.1359 24.5587C21.0789 25.0154 20.7078 25.358 20.251 25.358Z", "fill", "#21A9FF"], ["d", "M26.6738 42H4.72225C4.23695 42 3.86591 41.6289 3.86591 41.1437C3.86591 40.6584 4.23702 40.2873 4.72225 40.2873H26.6738C27.1591 40.2873 27.5301 40.6584 27.5301 41.1437C27.5302 41.6289 27.1591 42 26.6738 42ZM1.8677 38.2891C1.38241 38.2891 1.01137 37.9179 1.01137 37.4327C1.01137 36.9474 1.38248 36.5764 1.8677 36.5764H8.40465C8.88995 36.5764 9.26099 36.9475 9.26099 37.4327C9.26099 37.918 8.88988 38.2891 8.40465 38.2891H1.8677ZM1.8677 35.149C1.38241 35.149 1.01137 34.7779 1.01137 34.2927C1.01137 33.8075 1.38248 33.4364 1.8677 33.4364C2.353 33.4364 2.72404 33.8075 2.72404 34.2927C2.72404 34.7779 2.353 35.149 1.8677 35.149ZM10.0032 31.4382C9.86047 31.4382 9.71774 31.4096 9.575 31.324L6.14952 29.4114C5.74986 29.183 5.57858 28.6692 5.80696 28.2411C6.03533 27.8414 6.54918 27.6701 6.97731 27.8985L10.4028 29.8111C10.8024 30.0394 10.9737 30.5533 10.7454 30.9814C10.5741 31.2669 10.2887 31.4382 10.0032 31.4382Z", "fill", "#21A9FF"], ["matInput", "", "onlyNumber", "", "maxlength", "5", "name", "runInput", 3, "ngModel", "ngModelChange"], ["name", "runUnitSelect", "required", "", 3, "ngModel", "ngModelChange"]],
  template: function DistanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-button-toggle-group", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DistanceComponent_Template_mat_button_toggle_group_change_8_listener($event) {
        return ctx.onRaceKindChange($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-button-toggle", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-button-toggle", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-button-toggle", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-button-toggle", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "form")(23, "table")(24, "tr")(25, "td")(26, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 7)(29, "path", 8)(30, "path", 9)(31, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td")(33, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td")(37, "mat-form-field")(38, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DistanceComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.swimInput = $event;
      })("ngModelChange", function DistanceComponent_Template_input_ngModelChange_38_listener() {
        return ctx.onSwimInputChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td")(40, "mat-form-field")(41, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DistanceComponent_Template_mat_select_ngModelChange_41_listener($event) {
        return ctx.swimUnitSelect = $event;
      })("ngModelChange", function DistanceComponent_Template_mat_select_ngModelChange_41_listener() {
        return ctx.onSwimSelectChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "yd");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "m");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tr")(47, "td")(48, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td")(52, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td")(56, "mat-form-field")(57, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DistanceComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.bikeInput = $event;
      })("ngModelChange", function DistanceComponent_Template_input_ngModelChange_57_listener() {
        return ctx.onBikeInputChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td")(59, "mat-form-field")(60, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DistanceComponent_Template_mat_select_ngModelChange_60_listener($event) {
        return ctx.bikeUnitSelect = $event;
      })("ngModelChange", function DistanceComponent_Template_mat_select_ngModelChange_60_listener() {
        return ctx.onBikeSelectChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "km");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "tr")(64, "td")(65, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "path", 16)(68, "path", 17)(69, "path", 18)(70, "path", 19)(71, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td")(73, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td")(77, "mat-form-field")(78, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DistanceComponent_Template_input_ngModelChange_78_listener($event) {
        return ctx.runInput = $event;
      })("ngModelChange", function DistanceComponent_Template_input_ngModelChange_78_listener() {
        return ctx.onRunInputChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td")(80, "mat-form-field")(81, "mat-select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DistanceComponent_Template_mat_select_ngModelChange_81_listener($event) {
        return ctx.runUnitSelect = $event;
      })("ngModelChange", function DistanceComponent_Template_mat_select_ngModelChange_81_listener() {
        return ctx.onRunSelectChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "km");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 25, "stage"), " 1:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 27, "distance.description"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.raceKind.Olympic);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.raceKind.Sprint);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 29, "distance.sprint"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.raceKind.Olympic);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 31, "distance.olympic"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.raceKind.Half);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 33, "distance.half"), " (70.3)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.raceKind.Full);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 35, "distance.full"), " (140.6) ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 37, "distance.ironman"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 39, "distance.swim"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.swimInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.swimUnitSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "yd");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "m");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 41, "distance.bike"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bikeInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bikeUnitSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "km");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 43, "distance.run"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.runInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.runUnitSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "km");
    }
  },
  dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__.MatButtonToggle, _only_number_directive__WEBPACK_IMPORTED_MODULE_1__.OnlyNumberDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
  styles: ["[_nghost-%COMP%]     .mat-button-toggle-group {\n  border-radius: 0;\n  border: none;\n}\n[_nghost-%COMP%]     .mat-button-toggle-group .mat-button-toggle {\n  color: var(--black, #1C1B1F);\n  text-align: center;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  background: #C4C4C4;\n  border: none;\n}\n[_nghost-%COMP%]     .mat-button-toggle-group .mat-button-toggle.mat-button-toggle-checked {\n  background: #21A9FF;\n  color: white;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: var(--black, #1C1B1F);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  padding: 0 5px;\n}\n\n.mat-mdc-form-field-type-mat-input[_ngcontent-%COMP%], .mat-mdc-form-field-type-mat-select[_ngcontent-%COMP%] {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FsYy9kaXN0YW5jZS9kaXN0YW5jZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3RyaWF0aGxvbmUtYW5ndWxhciUyMDIvc3JjL2FwcC9jYWxjL2Rpc3RhbmNlL2Rpc3RhbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREtBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsV0FBQTtBQ0hGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2ssICMxQzFCMUYpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjFBOUZGO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrLCAjMUMxQjFGKTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbi5tYXQtbWRjLWZvcm0tZmllbGQtdHlwZS1tYXQtaW5wdXQsIC5tYXQtbWRjLWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0IHtcclxuICB3aWR0aDogODBweDtcclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBjb2xvcjogdmFyKC0tYmxhY2ssICMxQzFCMUYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kOiAjQzRDNEM0O1xuICBib3JkZXI6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIC5tYXQtYnV0dG9uLXRvZ2dsZS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzIxQTlGRjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjaywgIzFDMUIxRik7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLm1hdC1tZGMtZm9ybS1maWVsZC10eXBlLW1hdC1pbnB1dCwgLm1hdC1tZGMtZm9ybS1maWVsZC10eXBlLW1hdC1zZWxlY3Qge1xuICB3aWR0aDogODBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5364:
/*!*************************************************!*\
  !*** ./src/app/calc/result/result.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultComponent: () => (/* binding */ ResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _calc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calc.service */ 9096);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 5939);



class ResultComponent {
  constructor(service) {
    this.service = service;
    this.hrs = '00';
    this.mins = '00';
    this.secs = '00';
  }
  ngOnInit() {
    this.service.resultValue$.subscribe(val => {
      this.hrs = val.hr;
      this.mins = val.min;
      this.secs = val.sec;
    });
  }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) {
  return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calc_service__WEBPACK_IMPORTED_MODULE_0__.CaclService));
};
ResultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ResultComponent,
  selectors: [["app-result"]],
  decls: 24,
  vars: 9,
  consts: [[1, "stage-container", "result"], [1, "header"], [1, "stage"], [1, "text"], ["id", "raceTimeResult"], [1, "timeValue"], [1, "time"], [1, "timeUnit"]],
  template: function ResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "p", 5)(10, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "hrs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 5)(15, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "mins");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 5)(20, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "secs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "stage"), " 3:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "result.description"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hrs);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.mins);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.secs);
    }
  },
  dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
  styles: [".result[_ngcontent-%COMP%] {\n  height: calc(100% - 100px);\n  background-color: #21A9FF;\n}\n.result[_ngcontent-%COMP%]   .stage[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.result[_ngcontent-%COMP%]   #raceTimeResult[_ngcontent-%COMP%] {\n  width: 206px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.result[_ngcontent-%COMP%]   #raceTimeResult[_ngcontent-%COMP%]   .timeValue[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n}\n.result[_ngcontent-%COMP%]   #raceTimeResult[_ngcontent-%COMP%]   .timeValue[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 40px;\n}\n.result[_ngcontent-%COMP%]   #raceTimeResult[_ngcontent-%COMP%]   .timeValue[_ngcontent-%COMP%]   .timeUnit[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 27px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FsYy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vdHJpYXRobG9uZS1hbmd1bGFyJTIwMi9zcmMvYXBwL2NhbGMvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRERRO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNHVDtBREZTO0VBQ0csZUFBQTtFQUNBLGlCQUFBO0FDSVo7QURGUztFQUNHLGVBQUE7RUFDQSxpQkFBQTtBQ0laIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMUE5RkY7XHJcbiAgICAuc3RhZ2Uge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgI3JhY2VUaW1lUmVzdWx0IHtcclxuICAgICAgICB3aWR0aDogMjA2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC50aW1lVmFsdWUge1xyXG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnRpbWVVbml0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfVxyXG59XHJcblxyXG4iLCIucmVzdWx0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMUE5RkY7XG59XG4ucmVzdWx0IC5zdGFnZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnJlc3VsdCAjcmFjZVRpbWVSZXN1bHQge1xuICB3aWR0aDogMjA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlc3VsdCAjcmFjZVRpbWVSZXN1bHQgLnRpbWVWYWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucmVzdWx0ICNyYWNlVGltZVJlc3VsdCAudGltZVZhbHVlIC50aW1lIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbi5yZXN1bHQgI3JhY2VUaW1lUmVzdWx0IC50aW1lVmFsdWUgLnRpbWVVbml0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9810:
/*!*********************************************!*\
  !*** ./src/app/calc/time/time.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeComponent: () => (/* binding */ TimeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _calc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calc.service */ 9096);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../only-number.directive */ 603);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 5939);










class TimeComponent {
  constructor(service) {
    this.service = service;
    this.swimInputDistanceValue = 1500;
    this.swimUnitDistance = 'm';
    this.runInputDistanceValue = 10;
    this.runUnitDistance = 'km';
    this.bikeDistanceInput = 40;
    this.bikeUnitDistance = 'km';
    this.swimUnitValue = "100m";
    this.bikeUnitValue = "kph";
    this.runUnitValue = "mkm";
  }
  ngOnInit() {
    this.service.swimInput$.subscribe(val => this.swimInputDistanceValue = val);
    this.service.swimUnitSelect$.subscribe(val => {
      this.swimUnitDistance = val;
      this.onSwimUnitChange();
    });
    this.service.bikeInput$.subscribe(val => this.bikeDistanceInput = val);
    this.service.bikeUnitSelect$.subscribe(val => {
      this.bikeUnitDistance = val;
      this.onBikeUnitChange();
    });
    this.service.runInput$.subscribe(val => this.runInputDistanceValue = val);
    this.service.runUnitSelect$.subscribe(val => {
      this.runUnitDistance = val;
      this.onRunUnitChange();
    });
  }
  onSwimTimeChange() {
    let speed = 0;
    const hr = this.swimHr ?? 0;
    const min = this.swimMin ? Number(this.swimMin) : 0;
    const sec = this.swimSec ? Number(this.swimSec) : 0;
    let distance = this.swimInputDistanceValue ?? 0;
    const timeInMin = hr * 60 + min + sec / 60;
    if (this.swimUnitDistance === this.swimUnitValue.replace(/[0-9]/g, "")) {
      speed = timeInMin * Number(this.swimUnitValue.replace(/[^+\d]/g, '')) / distance;
    } else if (this.swimUnitDistance === 'yd' && this.swimUnitValue.replace(/[0-9]/g, "") == 'm') {
      distance = this.swimInputDistanceValue * 0.9144;
      speed = timeInMin * Number(this.swimUnitValue.replace(/[^+\d]/g, '')) / distance;
    } else if (this.swimUnitDistance === 'm' && this.swimUnitValue.replace(/[0-9]/g, "") == 'yd') {
      distance = this.swimInputDistanceValue * 1.09361;
      speed = timeInMin * Number(this.swimUnitValue.replace(/[^+\d]/g, '')) / distance;
    }
    const formatTime = timeFormat(speed * 1000 * 60);
    this.swimPaceMin = formatTime.min;
    this.swimPaceSec = formatTime.sec;
    this.sumTimeResult();
    this.swimValue = 'time';
  }
  onBikeTimeChange() {
    let speed = 0;
    const hr = this.bikeHr ? Number(this.bikeHr) : 0;
    const min = this.bikeMin ? Number(this.bikeMin) : 0;
    const sec = this.bikeSec ? Number(this.bikeSec) : 0;
    const time = hr + min / 60 + sec / 3600;
    if (time) {
      speed = this.bikeDistanceInput / time;
      this.bikeSpeed = Math.floor(speed * 100) / 100;
      this.sumTimeResult();
      this.bikeValue = 'time';
    }
  }
  onRunTimeChange() {
    let speed = 0;
    let distance = this.runInputDistanceValue;
    const hr = this.runHr ? Number(this.runHr) : 0;
    const min = this.runMin ? Number(this.runMin) : 0;
    const sec = this.runSec ? Number(this.runSec) : 0;
    const time = hr * 60 + min + sec / 60;
    speed = time / distance;
    const formatTime = timeFormat(1000 * 60 * speed);
    this.runPaceMin = formatTime.min;
    this.runPaceSec = formatTime.sec;
    this.sumTimeResult();
    this.runValue = 'time';
  }
  onBikeSpeedChange() {
    let time = 0;
    let distance = this.bikeDistanceInput;
    const speed = this.bikeSpeed ? Number(this.bikeSpeed) : 0;
    time = distance / speed;
    let formatTime = timeFormat(time * 1000 * 3600);
    this.bikeHr = formatTime.hr;
    this.bikeMin = formatTime.min;
    this.bikeSec = formatTime.sec;
    this.sumTimeResult();
    this.bikeValue = 'pace';
  }
  onRunPaceChange() {
    const paceMin = this.runPaceMin ? Number(this.runPaceMin) : 0;
    const paceSec = this.runPaceSec ? Number(this.runPaceSec) : 0;
    let paceTime = paceMin * 60 + paceSec;
    let distance = this.runInputDistanceValue;
    if (this.runUnitValue === 'mkm') {
      distance = this.runInputDistanceValue / 0.621371;
    }
    const time = distance * paceTime;
    const formatTime = timeFormat(time * 1000);
    this.runHr = formatTime.hr;
    this.runMin = formatTime.min;
    this.runSec = formatTime.sec;
    this.sumTimeResult();
    this.runValue = 'pace';
  }
  onSwimPaceChange() {
    let time = 0;
    let distance = this.swimInputDistanceValue;
    const paceMin = this.swimPaceMin ? Number(this.swimPaceMin) : 0;
    const paceSec = this.swimPaceSec ? Number(this.swimPaceSec) : 0;
    const timeInMin = paceMin + paceSec / 60; //скорость в минутах
    if (this.swimUnitDistance === this.swimUnitValue.replace(/[0-9]/g, "")) {
      time = timeInMin * distance / Number(this.swimUnitValue.replace(/[^+\d]/g, ''));
    } else if (this.swimUnitDistance === 'yd' && this.swimUnitValue.replace(/[0-9]/g, "") == 'm') {
      distance = this.swimInputDistanceValue * 0.9144; //перевели в метры
      time = timeInMin * distance / Number(this.swimUnitValue.replace(/[^+\d]/g, ''));
    } else if (this.swimUnitDistance === 'm' && this.swimUnitValue.replace(/[0-9]/g, "") == 'yd') {
      distance = this.swimInputDistanceValue / 0.9144; //перевели в метры
      time = timeInMin * distance / Number(this.swimUnitValue.replace(/[^+\d]/g, ''));
    }
    const formatTime = timeFormat(time * 1000 * 60);
    this.swimHr = formatTime.hr;
    this.swimMin = formatTime.min;
    this.swimSec = formatTime.sec;
    this.sumTimeResult();
    this.swimValue = 'pace';
  }
  onRunUnitChange() {
    if (this.runValue = 'pace') {
      this.onRunTimeChange();
    } else {
      this.onRunPaceChange();
    }
  }
  onBikeUnitChange() {
    if (this.bikeValue = 'pace') {
      this.onBikeTimeChange();
    } else {
      this.onBikeSpeedChange();
    }
  }
  onSwimUnitChange() {
    if (this.swimValue = 'pace') {
      this.onSwimTimeChange();
    } else {
      this.onSwimPaceChange();
    }
  }
  onT2ValueChange() {
    this.sumTimeResult();
  }
  onT1ValueChange() {
    this.sumTimeResult();
  }
  sumTimeResult() {
    const minT2 = this.t2InputMin ? Number(this.t2InputMin) : 0;
    const secT2 = this.t2InputSec ? Number(this.t2InputSec) : 0;
    const minT1 = this.t1InputMin ? Number(this.t1InputMin) : 0;
    const secT1 = this.t1InputSec ? Number(this.t1InputSec) : 0;
    const swinHr = this.swimHr ? Number(this.swimHr) : 0;
    const swinMin = this.swimMin ? Number(this.swimMin) : 0;
    const swinSec = this.swimSec ? Number(this.swimSec) : 0;
    const bikeHr = this.bikeHr ? Number(this.bikeHr) : 0;
    const bikeMin = this.bikeMin ? Number(this.bikeMin) : 0;
    const bikeSec = this.bikeSec ? Number(this.bikeSec) : 0;
    const runHr = this.runHr ? Number(this.runHr) : 0;
    const runMin = this.runMin ? Number(this.runMin) : 0;
    const runSec = this.runSec ? Number(this.runSec) : 0;
    const resultInSec = minT2 * 60 + secT2 + minT1 * 60 + secT1 + swinHr * 3600 + swinMin * 60 + swinSec + bikeHr * 3600 + bikeMin * 60 + bikeSec + runHr * 3600 + runMin * 60 + runSec;
    const formatTime = timeFormat(resultInSec * 1000);
    this.service.changeResult(formatTime);
  }
}
//время в сек на вход
TimeComponent.ɵfac = function TimeComponent_Factory(t) {
  return new (t || TimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_calc_service__WEBPACK_IMPORTED_MODULE_0__.CaclService));
};
TimeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TimeComponent,
  selectors: [["app-time"]],
  decls: 169,
  vars: 45,
  consts: [[1, "stage-container"], [1, "header"], [1, "stage"], [1, "text"], ["colspan", "5"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M20.5866 6.97283C21.2176 6.35789 22.068 6.00893 22.957 6.00017C23.846 5.99141 24.7034 6.32354 25.3468 6.92592C25.9902 7.5283 26.3689 8.35338 26.4022 9.22565C26.4355 10.0979 26.1209 10.9485 25.5252 11.5965L21.7399 15.6848C21.5539 15.8864 21.454 16.1505 21.4607 16.4224C21.4674 16.6943 21.5802 16.9533 21.7759 17.1458L34.9039 30.0364C35.7801 29.846 36.6932 29.9018 37.5386 30.1974C38.7253 30.6163 40.3133 31.356 41.1653 32.6101C41.2398 32.7173 41.292 32.838 41.3187 32.9652C41.3454 33.0923 41.3462 33.2234 41.321 33.3509C41.2958 33.4783 41.245 33.5996 41.1718 33.7077C41.0985 33.8158 41.0041 33.9085 40.8941 33.9806C40.784 34.0526 40.6605 34.1025 40.5307 34.1273C40.4009 34.1522 40.2674 34.1515 40.1378 34.1253C40.0083 34.0992 39.8853 34.048 39.7761 33.9749C39.6668 33.9017 39.5734 33.8081 39.5013 33.6992C39.0332 33.0093 37.9932 32.4451 36.8612 32.0445C35.8879 31.7003 34.7479 31.9503 33.7746 32.6664L33.3426 32.9845C32.2899 33.7593 30.9969 34.1532 29.6824 34.0995C28.368 34.0458 27.1128 33.5479 26.1293 32.6899C25.4508 32.0981 24.5748 31.7712 23.6673 31.7712C22.7597 31.7712 21.8837 32.0981 21.2052 32.6899C20.2217 33.5479 18.9665 34.0458 17.6521 34.0995C16.3376 34.1532 15.0446 33.7593 13.9919 32.9845L13.5586 32.6664C12.5852 31.9503 11.4466 31.7003 10.4719 32.0445C9.33992 32.4451 8.30125 33.0093 7.83192 33.6992C7.68346 33.9128 7.45522 34.0602 7.19674 34.1095C6.93826 34.1588 6.6704 34.106 6.45132 33.9626C6.23223 33.8192 6.07959 33.5967 6.02653 33.3435C5.97347 33.0903 6.02428 32.8267 6.16792 32.6101C7.01992 31.356 8.60792 30.6163 9.79458 30.1974C10.2475 30.0374 10.7229 29.9473 11.2039 29.9304L17.1613 24.0813C17.4642 23.784 17.6389 23.3835 17.6491 22.963C17.6593 22.5425 17.5041 22.1343 17.2159 21.8232L13.9706 18.3174C13.3369 17.6329 12.9958 16.7352 13.0181 15.8105C13.0405 14.8857 13.4245 14.0049 14.0906 13.3507L20.5866 6.97283ZM13.5546 30.399C13.9839 30.5862 14.3893 30.8232 14.7586 31.0955L15.1906 31.4136C15.8743 31.9168 16.7141 32.1727 17.5679 32.1379C18.4218 32.1031 19.2371 31.7797 19.8759 31.2224C20.9204 30.3111 22.2692 29.8077 23.6666 29.8077C25.0639 29.8077 26.4127 30.3111 27.4573 31.2224C28.0961 31.7797 28.9114 32.1031 29.7652 32.1379C30.619 32.1727 31.4589 31.9168 32.1426 31.4136L32.5746 31.0955C32.6852 31.0143 32.7986 30.9357 32.9159 30.8598L20.3613 18.5347C19.802 17.9853 19.4796 17.2457 19.4607 16.4692C19.4419 15.6928 19.728 14.9389 20.2599 14.364L24.0466 10.2757C24.3053 10.0092 24.4455 9.65275 24.4365 9.28474C24.4275 8.91673 24.27 8.56731 23.9986 8.31334C23.7272 8.05937 23.3641 7.92165 22.9893 7.93049C22.6145 7.93933 22.2586 8.094 21.9999 8.36047L15.5039 14.7384C15.201 15.0357 15.0263 15.4362 15.0161 15.8567C15.0059 16.2772 15.161 16.6854 15.4493 16.9965L18.6946 20.5023C19.3283 21.1868 19.6694 22.0845 19.647 23.0092C19.6247 23.934 19.2407 24.8148 18.5746 25.469L13.5546 30.399Z", "fill", "#21A9FF"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M27.9999 19.0819C27.9999 17.9535 28.4565 16.8714 29.2691 16.0735C30.0818 15.2756 31.184 14.8274 32.3333 14.8274C33.4825 14.8274 34.5847 15.2756 35.3974 16.0735C36.21 16.8714 36.6666 17.9535 36.6666 19.0819C36.6666 20.2103 36.21 21.2924 35.3974 22.0903C34.5847 22.8882 33.4825 23.3365 32.3333 23.3365C31.184 23.3365 30.0818 22.8882 29.2691 22.0903C28.4565 21.2924 27.9999 20.2103 27.9999 19.0819ZM32.3333 16.791C31.7144 16.791 31.1209 17.0324 30.6833 17.462C30.2458 17.8916 29.9999 18.4743 29.9999 19.0819C29.9999 19.6895 30.2458 20.2722 30.6833 20.7018C31.1209 21.1315 31.7144 21.3728 32.3333 21.3728C32.9521 21.3728 33.5456 21.1315 33.9832 20.7018C34.4208 20.2722 34.6666 19.6895 34.6666 19.0819C34.6666 18.4743 34.4208 17.8916 33.9832 17.462C33.5456 17.0324 32.9521 16.791 32.3333 16.791Z", "fill", "#21A9FF"], ["d", "M6.44525 37.8988C6.66592 38.0432 6.93597 38.0957 7.19602 38.0446C7.45607 37.9935 7.6848 37.8431 7.83192 37.6265C8.30125 36.9366 9.33992 36.3724 10.4719 35.9718C11.4453 35.6275 12.5866 35.8776 13.5586 36.5936L13.9906 36.9117C15.0433 37.6865 16.3362 38.0804 17.6507 38.0267C18.9652 37.9731 20.2204 37.4751 21.2039 36.6172C21.8824 36.025 22.7587 35.6979 23.6666 35.6979C24.5744 35.6979 25.4507 36.025 26.1293 36.6172C27.1128 37.4751 28.368 37.9731 29.6825 38.0267C30.9969 38.0804 32.2899 37.6865 33.3426 36.9117L33.7746 36.5936C34.7479 35.8776 35.8866 35.6275 36.8613 35.9718C37.9933 36.3724 39.0319 36.9366 39.5013 37.6265C39.6497 37.84 39.878 37.9874 40.1364 38.0367C40.3949 38.086 40.6628 38.0333 40.8819 37.8899C41.1009 37.7465 41.2536 37.524 41.3066 37.2708C41.3597 37.0176 41.3089 36.754 41.1653 36.5373C40.3133 35.2832 38.7253 34.5449 37.5386 34.1247C35.7706 33.4989 33.9333 34.0226 32.5746 35.0227L32.1426 35.3408C31.4589 35.8441 30.619 36.1 29.7652 36.0652C28.9114 36.0303 28.0961 35.7069 27.4573 35.1497C26.4127 34.2384 25.0639 33.735 23.6666 33.735C22.2692 33.735 20.9205 34.2384 19.8759 35.1497C19.2371 35.7069 18.4218 36.0303 17.568 36.0652C16.7141 36.1 15.8743 35.8441 15.1906 35.3408L14.7586 35.0227C13.3999 34.0226 11.5626 33.4989 9.79459 34.1247C8.60792 34.5436 7.01992 35.2832 6.16792 36.5373C6.02083 36.754 5.96741 37.0191 6.01942 37.2745C6.07143 37.5298 6.22461 37.7544 6.44525 37.8988Z", "fill", "#21A9FF"], ["d", "M7.83192 41.5538C7.68346 41.7673 7.45522 41.9147 7.19674 41.964C6.93826 42.0133 6.6704 41.9605 6.45132 41.8171C6.23223 41.6737 6.07959 41.4513 6.02653 41.1981C5.97347 40.9448 6.02428 40.6813 6.16792 40.4646C7.01992 39.2105 8.60792 38.4709 9.79458 38.052C11.5626 37.4262 13.3999 37.9499 14.7586 38.95L15.1906 39.2681C15.8743 39.7714 16.7141 40.0273 17.5679 39.9925C18.4218 39.9576 19.2371 39.6342 19.8759 39.077C20.9204 38.1657 22.2692 37.6623 23.6666 37.6623C25.0639 37.6623 26.4127 38.1657 27.4573 39.077C28.0961 39.6342 28.9114 39.9576 29.7652 39.9925C30.619 40.0273 31.4589 39.7714 32.1426 39.2681L32.5746 38.95C33.9333 37.9499 35.7706 37.4262 37.5386 38.052C38.7253 38.4709 40.3133 39.2105 41.1653 40.4646C41.2398 40.5719 41.292 40.6925 41.3187 40.8197C41.3454 40.9469 41.3462 41.078 41.321 41.2054C41.2958 41.3329 41.245 41.4542 41.1718 41.5623C41.0985 41.6703 41.0041 41.7631 40.8941 41.8351C40.784 41.9071 40.6605 41.957 40.5307 41.9819C40.4009 42.0067 40.2674 42.006 40.1378 41.9799C40.0083 41.9537 39.8853 41.9026 39.7761 41.8294C39.6668 41.7563 39.5734 41.6626 39.5013 41.5538C39.0332 40.8639 37.9932 40.2997 36.8612 39.8991C35.8879 39.5548 34.7479 39.8048 33.7746 40.5209L33.3426 40.839C32.2899 41.6138 30.9969 42.0077 29.6824 41.954C28.368 41.9004 27.1128 41.4024 26.1293 40.5445C25.4508 39.9526 24.5748 39.6257 23.6673 39.6257C22.7597 39.6257 21.8837 39.9526 21.2052 40.5445C20.2217 41.4024 18.9665 41.9004 17.6521 41.954C16.3376 42.0077 15.0446 41.6138 13.9919 40.839L13.5586 40.5209C12.5852 39.8048 11.4466 39.5548 10.4719 39.8991C9.33992 40.2997 8.30125 40.8639 7.83192 41.5538Z", "fill", "#21A9FF"], ["matInput", "", "onlyNumber", "", "maxlength", "1", "placeholder", "hr", "name", "swimHr", 3, "ngModel", "ngModelChange"], [1, "time-splitter"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "min", "name", "swimMin", 3, "ngModel", "ngModelChange"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "sec", "name", "swimSec", 3, "ngModel", "ngModelChange"], [1, "text-as-icon"], ["colspan", "2"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "min", "name", "t1InputMin", 3, "ngModel", "ngModelChange"], ["colspan", "6"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "sec", "name", "t1InputSec", 3, "ngModel", "ngModelChange"], ["d", "M37.2354 19.087C36.4865 19.0891 35.7403 19.1754 35.0108 19.3442L33.1891 13.3583H37.5968C37.8807 13.3573 38.1535 13.4693 38.3549 13.6694C38.5564 13.8696 38.6701 14.1416 38.671 14.4256C38.6719 14.7096 38.56 14.9823 38.3598 15.1837C38.1597 15.3852 37.8877 15.4989 37.6037 15.4998L36.5145 15.5064C36.3259 15.5091 36.146 15.5859 36.0138 15.7204C35.8816 15.8548 35.8077 16.036 35.8083 16.2246C35.8088 16.4131 35.8837 16.5939 36.0167 16.7276C36.1497 16.8612 36.33 16.9371 36.5186 16.9386H36.5229L37.6121 16.932C38.2736 16.9264 38.9061 16.6592 39.3712 16.1887C39.8364 15.7183 40.0963 15.0828 40.0942 14.4212C40.0921 13.7596 39.8282 13.1257 39.3602 12.6582C38.8921 12.1906 38.258 11.9274 37.5964 11.926H32.2222C32.1104 11.9261 32.0001 11.9523 31.9002 12.0026C31.8003 12.0529 31.7136 12.126 31.647 12.2158C31.5805 12.3057 31.5358 12.4099 31.5168 12.5201C31.4977 12.6303 31.5047 12.7435 31.5372 12.8505L32.1839 14.9753H18.5159L17.5434 12.6423H18.9113C18.9213 12.6423 18.9319 12.6423 18.942 12.6416C19.3763 12.6262 19.7928 12.4652 20.1245 12.1844C20.4562 11.9037 20.6838 11.5195 20.7707 11.0937C20.8196 10.8494 20.82 10.5979 20.7716 10.3535C20.7233 10.1091 20.6273 9.87666 20.4891 9.6694C20.3509 9.46213 20.1732 9.28413 19.9662 9.14557C19.7591 9.00701 19.5268 8.91061 19.2825 8.86187L15.2165 8.04956C14.8882 7.98385 14.5501 7.98348 14.2216 8.04845C13.8931 8.11343 13.5807 8.24248 13.3021 8.42823C13.0235 8.61399 12.7842 8.85281 12.598 9.13105C12.4117 9.4093 12.2821 9.72151 12.2165 10.0499C12.1549 10.3583 12.1616 10.6765 12.2361 10.9821C12.3106 11.2877 12.4512 11.5733 12.6479 11.8188C12.8495 12.0707 13.1042 12.2752 13.3937 12.4176C13.6832 12.5601 14.0005 12.6372 14.3231 12.6432H15.9918L17.2379 15.6314L14.5292 20.1691C13.1779 19.4882 11.69 19.1223 10.177 19.0986C8.6641 19.075 7.16544 19.3943 5.79352 20.0326C4.4216 20.6709 3.21205 21.6115 2.25562 22.7841C1.29919 23.9566 0.620723 25.3305 0.271122 26.8027C-0.0784793 28.2749 -0.0901332 29.8071 0.237035 31.2845C0.564202 32.7618 1.2217 34.1459 2.16018 35.3328C3.09866 36.5198 4.29377 37.4787 5.65582 38.1378C7.01787 38.7969 8.5115 39.139 10.0246 39.1383C15.3109 39.1383 19.6438 35.023 20.0135 29.8292H20.8676C21.0256 30.4422 21.3824 30.9856 21.8823 31.3741C22.3821 31.7627 22.9967 31.9745 23.6298 31.9764C23.6967 31.9764 23.759 31.9612 23.8253 31.9567L24.7853 34.8408H24.3461C24.1562 34.8408 23.974 34.9162 23.8397 35.0505C23.7054 35.1848 23.63 35.367 23.63 35.5569C23.63 35.7468 23.7054 35.929 23.8397 36.0633C23.974 36.1976 24.1562 36.273 24.3461 36.273H27.1901C27.38 36.273 27.5622 36.1976 27.6965 36.0633C27.8308 35.929 27.9062 35.7468 27.9062 35.5569C27.9062 35.367 27.8308 35.1848 27.6965 35.0505C27.5622 34.9162 27.38 34.8408 27.1901 34.8408H26.2947L25.187 31.5105C25.5313 31.2903 25.824 30.9984 26.0449 30.6545C26.2659 30.3107 26.4099 29.9232 26.467 29.5185C26.5242 29.1139 26.4932 28.7016 26.3762 28.31C26.2591 27.9185 26.0588 27.5568 25.7889 27.2499L32.8893 17.2911L33.6419 19.764C31.3172 20.6659 29.4134 22.4037 28.3036 24.6367C27.1938 26.8696 26.9582 29.4366 27.6429 31.8342C28.3277 34.2319 29.8834 36.2873 32.005 37.5974C34.1267 38.9074 36.6612 39.3777 39.1116 38.9159C41.562 38.4542 43.7515 37.0937 45.2508 35.1013C46.7501 33.1088 47.451 30.6282 47.2161 28.1458C46.9812 25.6633 45.8275 23.3582 43.9811 21.6823C42.1347 20.0065 39.7289 19.0808 37.2354 19.0868V19.087ZM13.6207 10.3303C13.6493 10.1863 13.7061 10.0494 13.7877 9.92741C13.8694 9.8054 13.9743 9.70068 14.0964 9.61924C14.2185 9.53779 14.3555 9.48122 14.4995 9.45276C14.6435 9.4243 14.7917 9.42451 14.9357 9.45337C19.1436 10.3428 19.1071 10.1786 19.2976 10.4639C19.5061 10.7777 19.2762 11.1846 18.8927 11.21L14.342 11.2111C14.2337 11.2092 14.1271 11.1838 14.0296 11.1365C13.9321 11.0893 13.8461 11.0214 13.7774 10.9376C13.7088 10.8538 13.6593 10.7561 13.6322 10.6512C13.6051 10.5464 13.6012 10.4368 13.6207 10.3303ZM17.9234 17.2764L21.909 26.837C21.3963 27.2247 21.0293 27.7738 20.8671 28.3957H20.0131C19.9065 26.9087 19.4694 25.4642 18.7335 24.1676C17.9976 22.8711 16.9815 21.7551 15.7594 20.9013L17.9234 17.2764ZM17.1488 28.3957C17.0476 27.4049 16.7407 26.4462 16.2476 25.5808C15.7546 24.7155 15.0862 23.9626 14.2855 23.3704L15.0224 22.1359C16.0334 22.8594 16.8752 23.7939 17.4895 24.8747C18.1039 25.9555 18.4761 27.1569 18.5805 28.3957H17.1488ZM9.40146 29.4656C9.46395 29.5757 9.5545 29.6672 9.66388 29.7309C9.77327 29.7946 9.89759 29.8282 10.0242 29.8282H15.7031C15.5535 31.0233 15.0311 32.1409 14.2103 33.0224C13.3895 33.9038 12.3119 34.5044 11.1304 34.7387C9.94899 34.973 8.72375 34.8292 7.62864 34.3277C6.53354 33.8263 5.62421 32.9926 5.02975 31.9451C4.43529 30.8975 4.1859 29.6893 4.31698 28.492C4.44807 27.2947 4.95296 26.1691 5.75999 25.275C6.56702 24.3809 7.63519 23.7638 8.81285 23.5111C9.99052 23.2585 11.2178 23.3832 12.3206 23.8676L9.40913 28.745C9.34433 28.8538 9.30948 28.9777 9.30814 29.1043C9.30679 29.2308 9.33899 29.3555 9.40146 29.4656ZM11.2857 28.3957L13.5485 24.605C14.7388 25.5347 15.5133 26.8973 15.7031 28.3957H11.2857ZM10.0242 37.7052C8.7292 37.7088 7.45014 37.4197 6.28261 36.8595C5.11507 36.2993 4.08924 35.4825 3.28181 34.47C2.47437 33.4576 1.9062 32.2758 1.61976 31.0129C1.33332 29.75 1.33602 28.4387 1.62766 27.1769C1.91931 25.9152 2.49234 24.7358 3.30395 23.7267C4.11555 22.7176 5.14474 21.905 6.31457 21.3496C7.48441 20.7942 8.76465 20.5104 10.0596 20.5194C11.3545 20.5284 12.6307 20.8299 13.7927 21.4015L13.0568 22.6344C11.6812 21.992 10.1369 21.8037 8.64729 22.0968C7.15765 22.3899 5.79984 23.1492 4.77023 24.2649C3.74061 25.3806 3.09256 26.7949 2.91978 28.3033C2.74701 29.8116 3.05847 31.3358 3.80912 32.6555C4.55977 33.9751 5.71071 35.0218 7.09549 35.6441C8.48027 36.2665 10.0271 36.4323 11.5123 36.1175C12.9975 35.8027 14.3441 35.0237 15.3574 33.8931C16.3706 32.7625 16.998 31.3389 17.1488 29.8282H18.5805C18.3995 31.974 17.42 33.9737 15.8357 35.4322C14.2514 36.8907 12.1776 37.7018 10.0242 37.7052ZM22.1976 29.1121C22.1976 28.8289 22.2816 28.552 22.439 28.3165C22.5963 28.081 22.82 27.8974 23.0817 27.789C23.3434 27.6806 23.6314 27.6522 23.9092 27.7075C24.187 27.7628 24.4422 27.8992 24.6425 28.0995C24.8427 28.2997 24.9791 28.5549 25.0344 28.8327C25.0897 29.1106 25.0613 29.3985 24.9529 29.6602C24.8445 29.9219 24.6609 30.1456 24.4254 30.3029C24.1899 30.4603 23.913 30.5443 23.6298 30.5443C23.2501 30.5439 22.886 30.3929 22.6175 30.1244C22.349 29.8559 22.198 29.4919 22.1976 29.1121ZM24.6124 26.4324C24.1743 26.2577 23.6963 26.2078 23.2316 26.2881L19.1129 16.4076H31.7605L24.6124 26.4324ZM37.2354 37.7052C35.2373 37.7062 33.3014 37.0105 31.761 35.738C30.2206 34.4654 29.172 32.6956 28.7959 30.7333C28.4197 28.771 28.7395 26.7389 29.7002 24.9869C30.6608 23.2349 32.2023 21.8727 34.0591 21.1348L34.4763 22.5055C32.7672 23.2171 31.3971 24.5585 30.6494 26.2521C29.9018 27.9458 29.8338 29.862 30.4596 31.6044C31.0854 33.3467 32.3571 34.7818 34.0115 35.6127C35.6659 36.4436 37.5764 36.6066 39.3477 36.0682C41.119 35.5297 42.6155 34.3309 43.5275 32.7198C44.4396 31.1087 44.6974 29.2087 44.2475 27.4128C43.7977 25.617 42.6748 24.0628 41.111 23.0718C39.5472 22.0808 37.6623 21.729 35.8463 22.089L35.4279 20.7136C36.606 20.4599 37.8242 20.4569 39.0035 20.7047C40.1828 20.9525 41.2968 21.4456 42.2731 22.152C43.2495 22.8584 44.0663 23.7623 44.6705 24.805C45.2747 25.8476 45.6528 27.0057 45.7803 28.204C45.9078 29.4023 45.7817 30.6141 45.4104 31.7605C45.039 32.9069 44.4307 33.9624 43.6248 34.8584C42.819 35.7544 41.8337 36.4708 40.7329 36.9612C39.6321 37.4516 38.4404 37.7049 37.2354 37.7047V37.7052ZM37.9203 28.9037L36.2672 23.4718C37.7028 23.2262 39.1781 23.537 40.3926 24.3408C41.6072 25.1447 42.4698 26.3812 42.8048 27.7986C43.1398 29.2161 42.9221 30.7079 42.1959 31.9705C41.4697 33.233 40.2897 34.1714 38.896 34.5945C37.5024 35.0177 35.9998 34.8938 34.6942 34.2481C33.3887 33.6025 32.3782 32.4836 31.8686 31.1191C31.359 29.7547 31.3885 28.2474 31.9511 26.9039C32.5137 25.5605 33.5671 24.4819 34.8969 23.8878L36.5504 29.3205C36.5777 29.4104 36.6225 29.4941 36.6822 29.5667C36.7419 29.6394 36.8154 29.6995 36.8983 29.7438C36.9813 29.788 37.0721 29.8155 37.1657 29.8247C37.2593 29.8338 37.3538 29.8244 37.4437 29.7971C37.5337 29.7697 37.6173 29.7249 37.69 29.6652C37.7626 29.6055 37.8228 29.532 37.867 29.4491C37.9113 29.3661 37.9388 29.2753 37.9479 29.1817C37.957 29.0881 37.9477 28.9937 37.9203 28.9037Z", "fill", "#21A9FF"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "hr", "name", "bikeHr", 3, "ngModel", "ngModelChange"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "min", "name", "bikeMin", 3, "ngModel", "ngModelChange"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "sec", "name", "bikeSec", 3, "ngModel", "ngModelChange"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "min", "name", "t2InputMin", 3, "ngModel", "ngModelChange"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "sec", "name", "t2InputSec", 3, "ngModel", "ngModelChange"], ["d", "M22.3634 27.7272C22.0779 27.7272 21.7925 27.5845 21.6212 27.299L20.565 25.4435L19.0521 26.4997C18.6524 26.7566 18.1387 26.671 17.8532 26.2713C17.5963 25.8717 17.6819 25.3579 18.0816 25.0724L20.3653 23.5024C20.5651 23.3597 20.7935 23.3311 21.0504 23.3597C21.2788 23.4168 21.4786 23.5595 21.5928 23.7593L23.1342 26.4141C23.3626 26.8137 23.2199 27.356 22.8202 27.5844C22.6774 27.6987 22.5347 27.7272 22.3634 27.7272Z", "fill", "#21A9FF"], ["d", "M34.4096 39.0027C33.9814 39.0027 33.6389 38.6887 33.5533 38.2891V38.2605C33.5247 38.1178 33.4962 38.0036 33.4106 37.8894L28.2152 36.3765C28.1011 36.348 27.9869 36.2623 27.8727 36.1767L27.3303 35.6628C27.2732 35.6343 27.2446 35.5772 27.2161 35.5201L22.2777 28.5549C21.9922 28.1553 22.1064 27.6415 22.4775 27.356C22.8772 27.0706 23.391 27.1848 23.6764 27.5559L28.5292 34.4354L28.8717 34.7494L34.1242 36.2909C34.2669 36.3194 34.3811 36.4051 34.4953 36.5192C34.8949 36.9189 35.1518 37.4327 35.2375 38.0036V38.0322C35.3231 38.4889 34.9806 38.9456 34.5238 39.0027L34.4096 39.0027ZM6.57771 29.5256C6.2637 29.5256 5.97823 29.3543 5.80695 29.0689C5.06473 27.613 5.23601 25.8718 6.2637 24.6158L10.5455 19.3919C10.7168 19.1921 10.9452 19.0779 11.2306 19.0779C11.4876 19.0779 11.7445 19.1921 11.8872 19.3919C12.6294 20.3339 13.029 21.4757 13.029 22.6746V22.7317C13.029 23.217 12.6579 23.5881 12.1727 23.5881C11.6874 23.5881 11.3163 23.217 11.3163 22.7317V22.6746C11.3163 22.2464 11.2307 21.8183 11.088 21.4187L7.6054 25.7005C7.00591 26.4427 6.89173 27.4418 7.34848 28.2981C7.57685 28.7263 7.40557 29.2401 6.97737 29.4399C6.86318 29.4971 6.72045 29.5256 6.57771 29.5256Z", "fill", "#21A9FF"], ["d", "M27.8727 35.8913C27.6158 35.8913 27.3303 35.7771 27.159 35.5202L22.2777 28.555C21.4214 27.3561 20.0511 26.6425 18.5953 26.6425H18.5668L15.3126 26.671H15.284C13.1145 26.671 11.3448 24.9297 11.3162 22.7602V22.7031C11.3162 22.2178 11.6873 21.8468 12.1725 21.8468C12.6293 21.8468 13.0289 22.2179 13.0289 22.7031V22.7602C13.0574 23.9877 14.0565 24.9868 15.284 24.9868L18.5382 24.9583H18.5668C20.5935 24.9583 22.4775 25.9288 23.6479 27.5844L28.5577 34.5496C28.8432 34.9492 28.729 35.463 28.3579 35.7485C28.2152 35.8342 28.044 35.8913 27.8727 35.8913Z", "fill", "#21A9FF"], ["d", "M27.2447 42C25.8174 42 24.4187 41.6289 23.1913 40.9153L3.78028 31.8664C3.52336 31.7522 3.35208 31.5238 3.29498 31.2383C3.23789 30.9529 3.32353 30.6959 3.52336 30.4961L5.94969 28.0698C6.29226 27.7272 6.83457 27.7272 7.14859 28.0698C7.49115 28.4123 7.49115 28.9547 7.14859 29.2687L5.60713 30.8101L23.9333 39.3738C23.9619 39.3738 23.9904 39.4024 23.9904 39.4024C24.9609 39.9733 26.0743 40.2587 27.2161 40.2587L32.3543 40.2301C33.3248 40.1445 33.7816 39.4879 33.7816 38.2319C33.7816 37.7466 34.1527 37.3756 34.6379 37.3756C35.1232 37.3756 35.4942 37.7467 35.4942 38.2319C35.4942 41.4576 33.1535 41.8858 32.4399 41.9429H32.3828L27.2447 42ZM21.136 28.6693C20.879 28.6693 20.6221 28.5551 20.4508 28.3267C20.1654 27.9556 20.251 27.4133 20.6221 27.1278L22.3634 25.8147C22.7345 25.5292 23.2768 25.6149 23.5623 25.986C23.8478 26.3571 23.7621 26.8994 23.391 27.1849L21.6497 28.498C21.4785 28.6122 21.3072 28.6693 21.136 28.6693ZM23.2768 31.1527C22.9914 31.1527 22.7344 31.01 22.5632 30.7816C22.3062 30.3819 22.4204 29.8681 22.8201 29.5827L24.4186 28.5265C24.8183 28.2696 25.3321 28.3838 25.6175 28.7834C25.8744 29.1831 25.7603 29.6969 25.3606 29.9823L23.7621 31.0385C23.5908 31.1241 23.4481 31.1527 23.2768 31.1527ZM25.1323 33.8074C24.8468 33.8074 24.5899 33.6647 24.4186 33.4363C24.1617 33.0366 24.2759 32.5229 24.6756 32.2374L26.2741 31.1812C26.6738 30.9243 27.1875 31.0385 27.473 31.4382C27.7299 31.8378 27.6157 32.3516 27.2161 32.637L25.6175 33.6932C25.4749 33.7503 25.3036 33.8074 25.1323 33.8074ZM11.7445 21.6185C11.5447 21.6185 11.3448 21.5328 11.1735 21.3901C10.831 21.0761 10.8024 20.5338 11.1165 20.1912C12.087 19.1065 12.8863 17.879 13.4572 16.5088L17.7676 6.51792C17.9674 6.08972 18.4527 5.88989 18.8808 6.06117C19.309 6.261 19.5089 6.7463 19.3376 7.17443L15.0272 17.1654C14.3706 18.6783 13.4858 20.077 12.3725 21.3045C12.2012 21.5328 11.9729 21.6185 11.7445 21.6185ZM20.251 25.358H20.1654C19.7086 25.3009 19.3376 24.9012 19.3947 24.416C19.5945 22.1609 20.3937 19.9914 21.6783 18.1074L30.1849 6.37519C30.4703 6.00408 30.9842 5.91844 31.3838 6.17536C31.7549 6.46083 31.8405 6.9746 31.5836 7.37425L23.1055 19.0779C21.9923 20.6765 21.3072 22.5891 21.1359 24.5587C21.0789 25.0154 20.7078 25.358 20.251 25.358Z", "fill", "#21A9FF"], ["d", "M26.6738 42H4.72225C4.23695 42 3.86591 41.6289 3.86591 41.1437C3.86591 40.6584 4.23702 40.2873 4.72225 40.2873H26.6738C27.1591 40.2873 27.5301 40.6584 27.5301 41.1437C27.5302 41.6289 27.1591 42 26.6738 42ZM1.8677 38.2891C1.38241 38.2891 1.01137 37.9179 1.01137 37.4327C1.01137 36.9474 1.38248 36.5764 1.8677 36.5764H8.40465C8.88995 36.5764 9.26099 36.9475 9.26099 37.4327C9.26099 37.918 8.88988 38.2891 8.40465 38.2891H1.8677ZM1.8677 35.149C1.38241 35.149 1.01137 34.7779 1.01137 34.2927C1.01137 33.8075 1.38248 33.4364 1.8677 33.4364C2.353 33.4364 2.72404 33.8075 2.72404 34.2927C2.72404 34.7779 2.353 35.149 1.8677 35.149ZM10.0032 31.4382C9.86047 31.4382 9.71774 31.4096 9.575 31.324L6.14952 29.4114C5.74986 29.183 5.57858 28.6692 5.80696 28.2411C6.03533 27.8414 6.54918 27.6701 6.97731 27.8985L10.4028 29.8111C10.8024 30.0394 10.9737 30.5533 10.7454 30.9814C10.5741 31.2669 10.2887 31.4382 10.0032 31.4382Z", "fill", "#21A9FF"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "hr", "name", "runHr", 3, "ngModel", "ngModelChange"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "min", "name", "runMin", 3, "ngModel", "ngModelChange"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "sec", "name", "runSec", 3, "ngModel", "ngModelChange"], ["colspan", "4"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "min", "name", "swimPaceMin", 3, "ngModel", "ngModelChange"], ["matInput", "", "onlyNumber", "", "maxlength", "2", "placeholder", "sec", "name", "swimPaceSec", 3, "ngModel", "ngModelChange"], ["name", "swimUnitValue", 3, "ngModel", "ngModelChange"], [3, "value"], ["colspan", "3"], [1, "speed"], ["matInput", "", "onlyNumber", "", "maxlength", "5", "placeholder", "speed", "name", "bikeSpeed", 3, "ngModel", "ngModelChange"], ["name", "bikeUnitValue", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "min", "onlyNumber", "", "maxlength", "2", "name", "runPaceMin", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "sec", "onlyNumber", "", "maxlength", "2", "name", "runPaceSec", 3, "ngModel", "ngModelChange"], [3, "value", "valueChange"]],
  template: function TimeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i")(9, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form")(15, "table")(16, "thead")(17, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 4)(20, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tbody")(24, "tr")(25, "td")(26, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 6)(29, "path", 7)(30, "path", 8)(31, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td")(33, "mat-form-field")(34, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_34_listener($event) {
        return ctx.swimHr = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_34_listener() {
        return ctx.onSwimTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td")(38, "mat-form-field")(39, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_39_listener($event) {
        return ctx.swimMin = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_39_listener() {
        return ctx.onSwimTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "mat-form-field")(44, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_44_listener($event) {
        return ctx.swimSec = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_44_listener() {
        return ctx.onSwimTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr")(46, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "T1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td")(50, "mat-form-field")(51, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_51_listener($event) {
        return ctx.t1InputMin = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_51_listener() {
        return ctx.onT1ValueChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td", 17)(55, "mat-form-field")(56, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_56_listener($event) {
        return ctx.t1InputSec = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_56_listener() {
        return ctx.onT1ValueChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tr")(58, "td")(59, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "path", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "td")(63, "mat-form-field")(64, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_64_listener($event) {
        return ctx.bikeHr = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_64_listener() {
        return ctx.onBikeTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td")(68, "mat-form-field")(69, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_69_listener($event) {
        return ctx.bikeMin = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_69_listener() {
        return ctx.onBikeTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td")(73, "mat-form-field")(74, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_74_listener($event) {
        return ctx.bikeSec = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_74_listener() {
        return ctx.onBikeTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "tr")(76, "td", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "T2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td")(80, "mat-form-field")(81, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_81_listener($event) {
        return ctx.t2InputMin = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_81_listener() {
        return ctx.onT2ValueChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "td", 17)(85, "mat-form-field")(86, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_86_listener($event) {
        return ctx.t2InputSec = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_86_listener() {
        return ctx.onT2ValueChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "tr")(88, "td")(89, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "path", 25)(92, "path", 26)(93, "path", 27)(94, "path", 28)(95, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "td")(97, "mat-form-field")(98, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_98_listener($event) {
        return ctx.runHr = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_98_listener() {
        return ctx.onRunTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "td")(102, "mat-form-field")(103, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_103_listener($event) {
        return ctx.runMin = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_103_listener() {
        return ctx.onRunTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "td")(107, "mat-form-field")(108, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_108_listener($event) {
        return ctx.runSec = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_108_listener() {
        return ctx.onRunTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "table")(110, "thead")(111, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "th", 33)(114, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](116, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "tbody")(118, "tr")(119, "td")(120, "mat-form-field")(121, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_121_listener($event) {
        return ctx.swimPaceMin = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_121_listener() {
        return ctx.onSwimTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "td")(125, "mat-form-field")(126, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_126_listener($event) {
        return ctx.swimPaceSec = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_126_listener() {
        return ctx.onSwimTimeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "/");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "td")(130, "mat-form-field")(131, "mat-select", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_mat_select_ngModelChange_131_listener($event) {
        return ctx.swimUnitValue = $event;
      })("ngModelChange", function TimeComponent_Template_mat_select_ngModelChange_131_listener() {
        return ctx.onSwimUnitChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "mat-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "50m");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "mat-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "50yd");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "mat-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "100m");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "mat-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "100yd");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "tr")(142, "td", 38)(143, "mat-form-field", 39)(144, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_144_listener($event) {
        return ctx.bikeSpeed = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_144_listener() {
        return ctx.onBikeSpeedChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "/");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "td")(148, "mat-form-field")(149, "mat-select", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_mat_select_ngModelChange_149_listener($event) {
        return ctx.bikeUnitValue = $event;
      })("ngModelChange", function TimeComponent_Template_mat_select_ngModelChange_149_listener() {
        return ctx.onBikeUnitChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "mat-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "kph");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "tr")(154, "td")(155, "mat-form-field")(156, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_156_listener($event) {
        return ctx.runPaceMin = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_156_listener() {
        return ctx.onRunPaceChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "td")(160, "mat-form-field")(161, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_161_listener($event) {
        return ctx.runPaceSec = $event;
      })("ngModelChange", function TimeComponent_Template_input_ngModelChange_161_listener() {
        return ctx.onRunPaceChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "/");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "td")(165, "mat-form-field")(166, "mat-select", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function TimeComponent_Template_mat_select_valueChange_166_listener($event) {
        return ctx.runUnitValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "mat-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "min/km");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 33, "stage"), " 2:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 35, "time.description1"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 37, "time.or"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 39, "time.description2"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 41, "time.time"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.swimHr);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.swimMin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.swimSec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.t1InputMin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.t1InputSec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bikeHr);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bikeMin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bikeSec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.t2InputMin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.t2InputSec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.runHr);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.runMin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.runSec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](116, 43, "time.pace"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.swimPaceMin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.swimPaceSec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.swimUnitValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "50m");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "50yd");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "100m");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "100yd");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bikeSpeed);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bikeUnitValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "kph");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.runPaceMin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.runPaceSec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.runUnitValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "mkm");
    }
  },
  dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _only_number_directive__WEBPACK_IMPORTED_MODULE_1__.OnlyNumberDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["label[_ngcontent-%COMP%] {\n  color: var(--secondary, #9B9B9B);\n  text-align: center;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 50px; \n\n  letter-spacing: 1.8px;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field-type-mat-input {\n  width: 40px;\n}\n[_nghost-%COMP%]     .mat-mdc-form-field-type-mat-input .mat-mdc-text-field-wrapper {\n  padding: 0 9px !important;\n}\n\n.mat-mdc-form-field-type-mat-select[_ngcontent-%COMP%], .speed.mat-mdc-form-field-type-mat-input[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.text-as-icon[_ngcontent-%COMP%] {\n  color: var(--blue, #21A9FF);\n  text-align: center;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px; \n\n  letter-spacing: 1.8px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n}\n\ntr[_ngcontent-%COMP%] {\n  height: 56px;\n}\n\n.time-splitter[_ngcontent-%COMP%] {\n  color: #000;\n  text-align: center;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 26px; \n\n  letter-spacing: 1.4px;\n}\n\n@media screen and (max-width: 470px) {\n  form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  tr[_ngcontent-%COMP%] {\n    height: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FsYy90aW1lL3RpbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi90cmlhdGhsb25lLWFuZ3VsYXIlMjAyL3NyYy9hcHAvY2FsYy90aW1lL3RpbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQSxFQUFBLGFBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtBQ0NKOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUEsRUFBQSxTQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBLEVBQUEsYUFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLHNCQUFBO0VDQUY7RURHQTtJQUNFLGVBQUE7RUNERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnksICM5QjlCOUIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7IC8qIDI3Ny43NzglICovXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuOHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZC10eXBlLW1hdC1pbnB1dCB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcblxyXG4gIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwIDlweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1tZGMtZm9ybS1maWVsZC10eXBlLW1hdC1zZWxlY3QsIC5zcGVlZC5tYXQtbWRjLWZvcm0tZmllbGQtdHlwZS1tYXQtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnRleHQtYXMtaWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUsICMyMUE5RkYpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7IC8qIDEwMCUgKi9cclxuICBsZXR0ZXItc3BhY2luZzogMS44cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG50ciB7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG4udGltZS1zcGxpdHRlciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjZweDsgLyogMTg1LjcxNCUgKi9cclxuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3MHB4KSB7XHJcbiAgZm9ybSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgdHIge1xyXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbn1cclxuIiwibGFiZWwge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LCAjOUI5QjlCKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7IC8qIDI3Ny43NzglICovXG4gIGxldHRlci1zcGFjaW5nOiAxLjhweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtdHlwZS1tYXQtaW5wdXQge1xuICB3aWR0aDogNDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLXR5cGUtbWF0LWlucHV0IC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtbWRjLWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0LCAuc3BlZWQubWF0LW1kYy1mb3JtLWZpZWxkLXR5cGUtbWF0LWlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4udGV4dC1hcy1pY29uIHtcbiAgY29sb3I6IHZhcigtLWJsdWUsICMyMUE5RkYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMThweDsgLyogMTAwJSAqL1xuICBsZXR0ZXItc3BhY2luZzogMS44cHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMHB4O1xufVxuXG50ciB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLnRpbWUtc3BsaXR0ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7IC8qIDE4NS43MTQlICovXG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDcwcHgpIHtcbiAgZm9ybSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICB0ciB7XG4gICAgaGVpZ2h0OiBpbml0aWFsO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
let timeFormat = function () {
  function num(val) {
    val = Math.floor(val);
    return val < 10 ? '0' + val : val;
  }
  return function (ms /**number*/) {
    var sec = ms / 1000,
      hours = sec / 3600 % 24,
      minutes = sec / 60 % 60,
      seconds = sec % 60;
    return {
      hr: num(hours),
      min: num(minutes),
      sec: num(seconds)
    };
  };
}();

/***/ }),

/***/ 3767:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 5939);


class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 7,
  vars: 6,
  consts: [[1, "title"], [1, "subtitle"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "text"));
    }
  },
  dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
  styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n  margin-left: 10px;\n}\nheader[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--black, #1C1B1F);\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\nheader[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--secondary, #9B9B9B);\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3RyaWF0aGxvbmUtYW5ndWxhciUyMDIvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUoiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLCAjMUMxQjFGKTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnksICM5QjlCOUIpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG59XHJcbiIsImhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaGVhZGVyIC50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1ibGFjaywgIzFDMUIxRik7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnksICM5QjlCOUIpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 603:
/*!******************************************!*\
  !*** ./src/app/only-number.directive.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnlyNumberDirective: () => (/* binding */ OnlyNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);



class OnlyNumberDirective {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.onChange = val => {};
    this.onTouched = () => {};
  }
  onInputChange(value) {
    const filteredValue = filterValue(value);
    this.updateTextInput(filteredValue, this.value !== filteredValue);
  }
  onBlur() {
    this.onTouched();
  }
  updateTextInput(value, propagateChange) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
    if (propagateChange) {
      this.onChange(value);
    }
    this.value = value;
  }
  // ControlValueAccessor Interface
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }
  writeValue(value) {
    value = value ? String(value) : '';
    this.updateTextInput(value, false);
  }
}
OnlyNumberDirective.ɵfac = function OnlyNumberDirective_Factory(t) {
  return new (t || OnlyNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
OnlyNumberDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: OnlyNumberDirective,
  selectors: [["", "onlyNumber", ""]],
  hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OnlyNumberDirective_input_HostBindingHandler($event) {
        return ctx.onInputChange($event.target.value);
      })("blur", function OnlyNumberDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => OnlyNumberDirective),
    multi: true
  }])]
});
function filterValue(value) {
  return value.replace(/[^0-9]*/g, '');
}

/***/ }),

/***/ 6339:
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerComponent: () => (/* binding */ ServerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 3767);
/* harmony import */ var _calc_calc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calc/calc.component */ 2899);



class ServerComponent {}
ServerComponent.ɵfac = function ServerComponent_Factory(t) {
  return new (t || ServerComponent)();
};
ServerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ServerComponent,
  selectors: [["app-server"]],
  decls: 4,
  vars: 0,
  consts: [[1, "app-container"], [1, "wr_container"]],
  template: function ServerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header")(3, "app-calc");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _calc_calc_component__WEBPACK_IMPORTED_MODULE_1__.CalcComponent],
  styles: [".app-container[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.app-container[_ngcontent-%COMP%]   .wr_container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1203px;\n}\n\n@media screen and (max-width: 1200px) {\n  .app-container[_ngcontent-%COMP%] {\n    padding: 50px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3RyaWF0aGxvbmUtYW5ndWxhciUyMDIvc3JjL2FwcC9zZXJ2ZXIvc2VydmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FERUE7RUFDRTtJQUNFLGVBQUE7RUNDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAud3JfY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDNweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFwcC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxufVxuIiwiLmFwcC1jb250YWluZXIge1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFwcC1jb250YWluZXIgLndyX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDNweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5hcHAtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map