(self["webpackChunkmedical_personal_atk_dashboard"] = self["webpackChunkmedical_personal_atk_dashboard"] || []).push([["src_app_atk-dashboard-modal_atk-dashboard-modal_module_ts"],{

/***/ 97440:
/*!***************************************************************************!*\
  !*** ./src/app/atk-dashboard-modal/atk-dashboard-modal-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtkDashboardModalPageRoutingModule": () => (/* binding */ AtkDashboardModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _atk_dashboard_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atk-dashboard-modal.page */ 76125);




const routes = [
    {
        path: '',
        component: _atk_dashboard_modal_page__WEBPACK_IMPORTED_MODULE_0__.AtkDashboardModalPage
    }
];
let AtkDashboardModalPageRoutingModule = class AtkDashboardModalPageRoutingModule {
};
AtkDashboardModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AtkDashboardModalPageRoutingModule);



/***/ }),

/***/ 15127:
/*!*******************************************************************!*\
  !*** ./src/app/atk-dashboard-modal/atk-dashboard-modal.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtkDashboardModalPageModule": () => (/* binding */ AtkDashboardModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _atk_dashboard_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atk-dashboard-modal-routing.module */ 97440);
/* harmony import */ var _atk_dashboard_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atk-dashboard-modal.page */ 76125);







let AtkDashboardModalPageModule = class AtkDashboardModalPageModule {
};
AtkDashboardModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _atk_dashboard_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.AtkDashboardModalPageRoutingModule
        ],
        declarations: [_atk_dashboard_modal_page__WEBPACK_IMPORTED_MODULE_1__.AtkDashboardModalPage]
    })
], AtkDashboardModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_atk-dashboard-modal_atk-dashboard-modal_module_ts.js.map