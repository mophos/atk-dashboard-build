(self["webpackChunkmedical_personal_atk_dashboard"] = self["webpackChunkmedical_personal_atk_dashboard"] || []).push([["default-src_app_atk-dashboard-modal_atk-dashboard-modal_page_ts"],{

/***/ 76125:
/*!*****************************************************************!*\
  !*** ./src/app/atk-dashboard-modal/atk-dashboard-modal.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtkDashboardModalPage": () => (/* binding */ AtkDashboardModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_atk_dashboard_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./atk-dashboard-modal.page.html */ 53665);
/* harmony import */ var _atk_dashboard_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atk-dashboard-modal.page.scss */ 88681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let AtkDashboardModalPage = class AtkDashboardModalPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.name = "";
        this.day = "";
        this.alertDate = "";
        this.updateDate = "";
        this.question1 = false;
        this.question2 = false;
        this.question3 = false;
        this.question4 = false;
        this.riskLevel = "";
        this.atkScreened = false;
        this.resultAtk = "";
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        let item = JSON.parse(localStorage.getItem("item-atk-dashboard-modal"));
        let alert = JSON.parse(localStorage.getItem("alert-atk-dashboard-modal"));
        this.name = item['information']['pname'] + item['information']['fname'] + ' ' + item['information']['lname'];
        this.day = alert['day'];
        this.alertDate = this.dateToTH(alert['date']);
        this.updateDate = this.dateToTH(alert['update_risk_date']);
        this.question1 = alert['risk_assessment_form']['question_1'];
        this.question2 = alert['risk_assessment_form']['question_2'];
        this.question3 = alert['risk_assessment_form']['question_3'];
        this.question4 = alert['risk_assessment_form']['question_4'];
        this.riskLevel = alert['risk_level'];
        this.atkScreened = alert['atk_screened'];
        this.resultAtk = alert['result'];
    }
    closeButton() {
        this.modalController.dismiss();
    }
    dateToTH(date) {
        let y = Number(date.split("-")[0]) + 543;
        let m = date.split("-")[1];
        let d = date.split("-")[2];
        return d + '/' + m + '/' + y;
    }
};
AtkDashboardModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AtkDashboardModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-atk-dashboard-modal',
        template: _raw_loader_atk_dashboard_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_atk_dashboard_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AtkDashboardModalPage);



/***/ }),

/***/ 88681:
/*!*******************************************************************!*\
  !*** ./src/app/atk-dashboard-modal/atk-dashboard-modal.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: rgb(250, 250, 250);\n  --padding-top: 30px;\n  --padding-bottom: 30px;\n  --padding-start: 30px;\n  --padding-end: 30px;\n}\n\n.nav-container {\n  display: flex;\n  align-items: center;\n}\n\n.nav-container .center {\n  margin-left: 30px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.nav-container .center img {\n  width: 35px;\n  height: 35px;\n}\n\n.nav-container .center .text1 {\n  font-weight: 500;\n  font-size: 20px;\n  color: #547998;\n}\n\n.nav-container .center .text2 {\n  font-size: 20px;\n  color: #547998;\n}\n\n.nav-container ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #547998;\n}\n\n.day {\n  margin-top: 8px;\n  font-weight: 500;\n  font-size: 20px;\n  color: #547998;\n  text-align: center;\n}\n\n.date-container {\n  margin-top: 30px;\n  height: 57px;\n  border-radius: 28.5px;\n  box-shadow: 1px 2px 19px -7px rgba(0, 0, 0, 0.25);\n  display: flex;\n  overflow: hidden;\n}\n\n.date-container .key-container {\n  width: 182px;\n  background: #F5FAFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n}\n\n.date-container .value-container {\n  flex: 1;\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n}\n\n.result-container {\n  margin-top: 30px;\n  height: 57px;\n  border-radius: 28.5px;\n  box-shadow: 1px 2px 19px -7px rgba(0, 0, 0, 0.25);\n  display: flex;\n  overflow: hidden;\n}\n\n.result-container .key-container {\n  width: 182px;\n  background: #F5FAFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n}\n\n.result-container .value-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.result-container .value-container img {\n  margin-left: 20px;\n  width: 45px;\n  height: 45px;\n}\n\n.result-container .value-container .text {\n  margin-left: 20px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n}\n\n.assessment-container {\n  margin-top: 30px;\n  border-radius: 28.5px;\n  box-shadow: 1px 2px 19px -7px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n}\n\n.assessment-container .line {\n  margin-left: 15px;\n  margin-right: 15px;\n  background: #C8E3FF;\n  height: 2px;\n}\n\n.assessment-container .assessment-date-container {\n  height: 57px;\n  display: flex;\n}\n\n.assessment-container .assessment-date-container .key-container {\n  width: 182px;\n  background: #F5FAFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n}\n\n.assessment-container .assessment-date-container .value-container {\n  flex: 1;\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n}\n\n.assessment-container .assessment-detail-container {\n  display: flex;\n}\n\n.assessment-container .assessment-detail-container .key-container {\n  width: 182px !important;\n  background: #F5FAFF;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n  padding: 15px;\n}\n\n.assessment-container .assessment-detail-container .value-container {\n  padding: 15px;\n  flex: 1;\n}\n\n.assessment-container .assessment-detail-container .value-container .question-container .question {\n  font-weight: 300;\n  font-size: 12px;\n  color: #547998;\n}\n\n.assessment-container .assessment-detail-container .value-container .question-container .answer {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.assessment-container .assessment-detail-container .value-container .question-container .answer .ans-key {\n  font-size: 12px;\n  color: #547998;\n}\n\n.assessment-container .assessment-detail-container .value-container .question-container .answer .ans-value {\n  margin-left: 20px;\n  font-weight: 300;\n  font-size: 12px;\n  color: #547998;\n}\n\n.assessment-container .assessment-result-container {\n  height: 57px;\n  display: flex;\n}\n\n.assessment-container .assessment-result-container .key-container {\n  width: 182px;\n  background: #F5FAFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n}\n\n.assessment-container .assessment-result-container .value-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\n.assessment-container .assessment-result-container .value-container img {\n  margin-left: 20px;\n  width: 45px;\n  height: 45px;\n}\n\n.assessment-container .assessment-result-container .value-container .text {\n  margin-left: 20px;\n  font-weight: 500;\n  font-size: 18px;\n  color: #547998;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0ay1kYXNoYm9hcmQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUk7RUFDSSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFSOztBQUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDWjs7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDWjs7QUFDUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ1o7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBUjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBRUEsZ0JBQUE7QUFGSjs7QUFJSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhSOztBQUtJO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpSOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtBQU5KOztBQVFJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUFI7O0FBU0k7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUFI7O0FBUVE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTlo7O0FBUVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFOWjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0FBUko7O0FBU0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBUFI7O0FBU0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVBSOztBQVFRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUFo7O0FBU1E7RUFDSSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUlo7O0FBV0k7RUFDSSxhQUFBO0FBVFI7O0FBVVE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQVRaOztBQVdRO0VBQ0ksYUFBQTtFQUNBLE9BQUE7QUFUWjs7QUFXZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBVHBCOztBQVdnQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVRwQjs7QUFVb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVJ4Qjs7QUFVb0I7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFSeEI7O0FBY0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVpSOztBQWFRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWlo7O0FBY1E7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWlo7O0FBYVk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWGhCOztBQWFZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWGhCIiwiZmlsZSI6ImF0ay1kYXNoYm9hcmQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgIC0tcGFkZGluZy10b3A6IDMwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDMwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMzBweDtcblxufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmNlbnRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW1nIHsgXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dDEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0MiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIH1cbn1cblxuLmRheSB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRhdGUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGhlaWdodDogNTdweDtcbiAgICBib3JkZXItcmFkaXVzOiAyOC41cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxOXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5rZXktY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDE4MnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGQUZGO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIH1cbiAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgfVxufVxuXG4ucmVzdWx0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjguNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTlweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAua2V5LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxODJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y1RkFGRjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICB9XG4gICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYXNzZXNzbWVudC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjguNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTlweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAubGluZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNDOEUzRkY7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgIH1cbiAgICAuYXNzZXNzbWVudC1kYXRlLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNTdweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLmtleS1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDE4MnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RkFGRjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgICAgIH1cbiAgICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXNzZXNzbWVudC1kZXRhaWwtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLmtleS1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDE4MnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGQUZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgLnF1ZXN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFuc3dlciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLmFucy1rZXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFucy12YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXNzZXNzbWVudC1yZXN1bHQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA1N3B4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAua2V5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTgycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGQUZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICAgICAgfVxuICAgICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59Il19 */");

/***/ }),

/***/ 53665:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atk-dashboard-modal/atk-dashboard-modal.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <div class=\"nav-container\">\n    <div class=\"center\">\n      <img src=\"./assets/icon/person-circle-blue.svg\">\n      <div class=\"text1\" style=\"margin-left: 20px;\">ข้อมูล</div>\n      <div class=\"text2\" style=\"margin-left: 20px;\">{{ name }}</div>\n    </div>\n    <ion-icon name=\"close\" class=\"pointer\" (click)=\"closeButton()\"></ion-icon>\n  </div>\n\n  <div class=\"day\">Day {{ day }}</div>\n\n  <div class=\"date-container\">\n    <div class=\"key-container\">กำหนดการประเมิน</div>\n    <div class=\"value-container\">{{ alertDate }}</div>\n  </div>\n\n  <div class=\"assessment-container\">\n    <div class=\"assessment-date-container\">\n      <div class=\"key-container\">วันที่ประเมิน</div>\n      <div class=\"value-container\">{{ updateDate }}</div>\n    </div>\n    <div class=\"line\"></div>\n    <div class=\"assessment-detail-container\">\n      <div class=\"key-container\">การตอบแบบประเมิน</div>\n      <div class=\"value-container\">\n        <div class=\"question-container\">\n          <div class=\"question\">1. ในช่วง 1 สัปดาห์ที่ผ่านมาท่านมีอาการผิดปกติข้อใดข้อหนึ่งดังต่อไปนี้หรือไม่ (ไข้ ไอ เจ็บคอ น้ำมูก ปวดเมื่อยตามตัว เหนื่อยผิดปกติ จมูกไม่ได้กลิ่น ลิ้นไม่รับรส หรือมีผื่น ตาแดง ท้องเสียโดยไม่ทราบสาเหตุ)  </div>\n          <div class=\"answer\">\n            <div class=\"ans-key\">ตอบ</div>\n            <div class=\"ans-value\" *ngIf=\"question1\">ใช่</div>\n            <div class=\"ans-value\" *ngIf=\"!question1\">ไม่ใช่</div>\n          </div>\n        </div>\n        <div class=\"question-container\">\n          <div class=\"question\">2. ในช่วง 1 สัปดาห์ที่ผ่านมา ท่านมีบุคคลในครอบครัว หรือในที่ทำงาน หรือคนใกล้ชิด ที่มีอาการของการติดเชื้อที่ระบบทางเดินหายใจที่ไม่ทราบสาเหตุ หรือได้รับการวินิจฉัยว่าเป็นโควิด – 19 หรือไม่</div>\n          <div class=\"answer\">\n            <div class=\"ans-key\">ตอบ</div>\n            <div class=\"ans-value\" *ngIf=\"question2\">ใช่</div>\n            <div class=\"ans-value\" *ngIf=\"!question2\">ไม่ใช่</div>\n          </div>\n        </div>\n        <div class=\"question-container\">\n          <div class=\"question\">3. ในช่วง 1 สัปดาห์ที่ผ่านมา ท่านได้ไปสถานที่เสี่ยง เช่น ผับ บาร์ คาราโอเกะ ร้านอาหารที่มีดนตรีแสดงคอนเสิร์ต ปาร์ตี้สังสรรค์ หรือสถานที่ที่มีรายงานผู้ติดเชื้อ แต่ไม่แน่ชัดว่า ณ เวลาที่ท่านไป มีผู้ติดเชื้ออยู่ในสถานที่นั้นหรือไม่</div>\n          <div class=\"answer\">\n            <div class=\"ans-key\">ตอบ</div>\n            <div class=\"ans-value\" *ngIf=\"question3\">ใช่</div>\n            <div class=\"ans-value\" *ngIf=\"!question3\">ไม่ใช่</div>\n          </div>\n        </div>\n        <div class=\"question-container\">\n          <div class=\"question\">4. ท่านมีความเสี่ยงจากการทำงาน คือ สัมผัสหรือดูแลใกล้ชิดกับผู้ป่วยจำนวนหลายคน หรือผู้ป่วยโควิดในระยะน้อยกว่า 1 เมตรเป็นเวลามากกว่า 15 นาที โดยมีการป้องกันไม่เพียงพอหรือไม่</div>\n          <div class=\"answer\">\n            <div class=\"ans-key\">ตอบ</div>\n            <div class=\"ans-value\" *ngIf=\"question4\">ใช่</div>\n            <div class=\"ans-value\" *ngIf=\"!question4\">ไม่ใช่</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"line\"></div>\n    <div class=\"assessment-result-container\">\n      <div class=\"key-container\">ผลการประเมิน</div>\n      <div class=\"value-container\" *ngIf=\"riskLevel == 'high_risk'\">\n        <img src=\"./assets/atk-status/risk-red.svg\">\n        <div class=\"text\">High Risk</div>\n      </div>\n      <div class=\"value-container\" *ngIf=\"riskLevel == 'low_risk'\">\n        <img src=\"./assets/atk-status/risk-green.svg\">\n        <div class=\"text\">Row Risk</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"result-container\">\n    <div class=\"key-container\">ผลการตรวจ ATK</div>\n    <div class=\"value-container\" *ngIf=\"resultAtk == 'negative'\">\n      <img src=\"./assets/atk-status/atk-green.svg\">\n      <div class=\"text\">ไม่พบเชื้อ</div>\n    </div>\n    <div class=\"value-container\" *ngIf=\"resultAtk == 'positive'\">\n      <img src=\"./assets/atk-status/atk-red.svg\">\n      <div class=\"text\">พบเชื้อ</div>\n    </div>\n    <div class=\"value-container\" *ngIf=\"!atkScreened\">\n      <img src=\"./assets/atk-status/atk-gray.svg\">\n      <div class=\"text\">ยังไม่ได้ตรวจ</div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_atk-dashboard-modal_atk-dashboard-modal_page_ts.js.map