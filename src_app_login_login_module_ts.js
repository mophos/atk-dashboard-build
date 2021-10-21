(self["webpackChunkmedical_personal_atk_dashboard"] = self["webpackChunkmedical_personal_atk_dashboard"] || []).push([["src_app_login_login_module_ts"],{

/***/ 51491:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);




let ApiService = class ApiService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    login(username, password) {
        let url = "https://h4u-mhealth.moph.go.th/api/v1/coward/login";
        let body = {
            username: username,
            password: password
        };
        let header = {
            "Content-Type": "application/json"
        };
        return this.httpClient.post(url, body, { headers: header });
    }
    getAllMedAtk() {
        let url = "https://h4u-mhealth.moph.go.th/api/v1/coward/getAllMedAtk";
        let header = {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        };
        return this.httpClient.post(url, {}, { headers: header });
    }
    getMedAtkAnalyticPublic(type, day, province_id, data_type) {
        let url = "https://h4u-mhealth.moph.go.th/api/v1/public/coward/getMedAtkAnalytic";
        let body = {
            type: type,
            day: day,
            province_id: province_id,
            data_type: data_type
        };
        let header = {
            "Content-Type": "application/json"
        };
        return this.httpClient.post(url, body, { headers: header });
    }
    getMedAtkAnalytic(type, day, province_id, data_type) {
        let url = "https://h4u-mhealth.moph.go.th/api/v1/coward/getMedAtkAnalytic";
        let body = {
            type: type,
            day: day,
            province_id: province_id,
            data_type: data_type
        };
        let header = {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        };
        return this.httpClient.post(url, body, { headers: header });
    }
    getAllAddress() {
        let url = "https://h4u-mhealth.moph.go.th/api/v1/public/getAllAddress";
        let body = {};
        let header = {
            "Content-Type": "application/json"
        };
        return this.httpClient.post(url, body, { headers: header });
    }
    getUserData() {
        let url = "https://h4u-mhealth.moph.go.th/api/v1/coward/getUserData";
        let body = {};
        let token = "";
        if (localStorage.getItem("token")) {
            token = localStorage.getItem("token");
        }
        let header = {
            "Content-Type": "application/json",
            "Authorization": token
        };
        return this.httpClient.post(url, body, { headers: header });
    }
    // other service //
    calculatePercentage(amount, all, decimal) {
        if (Number(all) == 0) {
            return "0";
        }
        var result = "";
        if (decimal == 0) {
            result = String(Math.round((Number(amount) / Number(all)) * 100));
        }
        else {
            result = String(((Number(amount) / Number(all)) * 100).toFixed(decimal));
        }
        return result;
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 55041);








let LoginPage = class LoginPage {
    constructor(appComponent, router, api, loadingController) {
        this.appComponent = appComponent;
        this.router = router;
        this.api = api;
        this.loadingController = loadingController;
        // username = "staff"
        // password = "##Staff@$"
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
        this.appComponent.sideMenu = false;
        this.appComponent.setHospitalName();
    }
    ionViewDidLeave() {
        let sideMenu = "true";
        if (localStorage.getItem("side-menu")) {
            localStorage.getItem("side-menu");
        }
        if (sideMenu == "false") {
            this.appComponent.sideMenu = false;
        }
        else if (sideMenu == "true") {
            this.appComponent.sideMenu = true;
        }
    }
    mapButton() {
        this.router.navigate(['/map-atk']);
    }
    loginButton() {
        if (!this.username) {
            alert("กรุณากรอก Username");
            return;
        }
        if (!this.password) {
            alert("กรุณากรอก Password");
            return;
        }
        this.login(this.username, this.password);
    }
    login(username, password) {
        this.presentLoading();
        this.api.login(username, password).subscribe(res => {
            if (res['code'] == 200) {
                localStorage.setItem("token", res['access_token']);
                localStorage.setItem("user_data", JSON.stringify(res['user']));
                this.getAllAddress();
                // this.router.navigate(['/atk-dashboard'])
            }
            else {
                this.dismissLoading();
                alert("ผิดพลาด");
            }
        }, error => {
            this.dismissLoading();
            alert("ไม่ตอบสนอง");
        });
    }
    getAllAddress() {
        console.log("getAllAddress");
        this.api.getAllAddress().subscribe(res => {
            this.dismissLoading();
            localStorage.setItem("address_list", JSON.stringify(res['address']));
            this.router.navigate(['/atk-dashboard']);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create();
            yield this.loading.present();
        });
    }
    dismissLoading() {
        setTimeout(() => {
            this.loading.dismiss();
        }, 500);
    }
};
LoginPage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFFFFF url('bg-2-circle.svg') no-repeat center center / cover;\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\n.logo img {\n  width: 145px;\n  height: 145px;\n}\n\n.map-button {\n  width: 250px;\n  margin-top: 20px;\n  font-size: 16px;\n  color: #788392;\n  text-align: center;\n}\n\n.description-text {\n  text-align: center;\n  margin-top: 100px;\n  color: #788392;\n  font-size: 20px;\n}\n\n.area {\n  width: 100vw;\n  height: 100vh;\n}\n\n.area .content {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.area .content .image-container {\n  width: 340px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.area .content .image-container img {\n  width: 320px;\n}\n\n.area .content .login-container {\n  width: 550px;\n  padding: 20px;\n}\n\n.area .content .login-container .title {\n  font-weight: 500;\n  font-size: 36px;\n  color: #3580DC;\n}\n\n.area .content .login-container .sub-title {\n  font-weight: 500;\n  font-size: 22px;\n  color: #788392;\n}\n\n.area .content .login-container input {\n  padding-left: 15px;\n  padding-right: 25px;\n  margin-top: 20px;\n  background: #FFFFFF;\n  color: #547998;\n  border: 1.5px solid #47A8FC;\n  box-sizing: border-box;\n  border-radius: 10px;\n  height: 50px;\n  width: 340px;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.area .content .login-container .login-button {\n  margin-top: 40px;\n  width: 250px;\n  height: 75px;\n  background: linear-gradient(266.52deg, #47A8FC -0.88%, #545CEB 103.9%);\n  border-radius: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 36px;\n  color: #FFFFFF;\n  transition: 0.3s;\n}\n\n.area .content .login-container .login-button:active {\n  opacity: 0.5;\n}\n\n::placeholder {\n  color: #C8C8C8;\n  opacity: 1;\n  /* Firefox */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRFQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUVSOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQU1JO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSlI7O0FBTVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKWjs7QUFLWTtFQUNJLFlBQUE7QUFIaEI7O0FBTVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUpaOztBQU1ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpoQjs7QUFNWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFKaEI7O0FBT1k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxoQjs7QUFRWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzRUFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7O0FBVVk7RUFDSSxZQUFBO0FBUmhCOztBQWdCQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQVpkIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkYgdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luL2JnLTItY2lyY2xlLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNDVweDtcbiAgICAgICAgaGVpZ2h0OiAxNDVweDtcbiAgICB9XG59XG5cbi5tYXAtYnV0dG9uIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM3ODgzOTI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVzY3JpcHRpb24tdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGNvbG9yOiAjNzg4MzkyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFyZWEge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMzQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzU4MERDO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1Yi10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3ODgzOTI7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzQ3QThGQztcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjY2LjUyZGVnLCAjNDdBOEZDIC0wLjg4JSwgIzU0NUNFQiAxMDMuOSUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9naW4tYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0M4QzhDODtcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xufSJdfQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<!-- <ion-content>\n  <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"username\">\n  <input type=\"text\" [(ngModel)]=\"password\" placeholder=\"password\">\n\n  <div class=\"login-button-container\">\n    <div class=\"login-button\" (click)=\"loginButton()\">Login</div>\n  </div>\n</ion-content> -->\n\n<ion-content>\n\n\n  <div class=\"area\">\n\n    <div class=\"logo\">\n      <img src=\"./assets/icon/health-icon.svg\">\n    </div>\n\n    <div class=\"content\">\n      <div class=\"image-container\">\n        <img src=\"./assets/login/login-image.svg\">\n      </div>\n      <div class=\"login-container\">\n        <div class=\"title\">Dashboard</div>\n        <div class=\"sub-title\">สถิติการคัดกรองการตรวจเชื้อด้วย ATK</div>\n        <div class=\"sub-title\">ของบุคลากรทางการแพทย์และสาธารณสุขทั่วประเทศ</div>\n        <input [(ngModel)]=\"username\" type=\"text\" placeholder=\"Username\">\n        <input [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\">\n        <div class=\"login-button pointer\" (click)=\"loginButton()\">เข้าสู่ระบบ</div>\n        <div class=\"map-button\">\n          <span class=\"pointer\" (click)=\"mapButton()\">ย้อนกลับ</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"description-text\">หมายเหตุ: เจ้าหน้าที่สามารถเข้าสู่ระบบได้ด้วย username และ password ของระบบ coward</div>\n    <div style=\"height: 30px;\"></div>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map