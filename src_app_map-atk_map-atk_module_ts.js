(self["webpackChunkmedical_personal_atk_dashboard"] = self["webpackChunkmedical_personal_atk_dashboard"] || []).push([["src_app_map-atk_map-atk_module_ts"],{

/***/ 481:
/*!***************************************************!*\
  !*** ./src/app/map-atk/map-atk-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapAtkPageRoutingModule": () => (/* binding */ MapAtkPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _map_atk_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-atk.page */ 67320);




const routes = [
    {
        path: '',
        component: _map_atk_page__WEBPACK_IMPORTED_MODULE_0__.MapAtkPage
    }
];
let MapAtkPageRoutingModule = class MapAtkPageRoutingModule {
};
MapAtkPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapAtkPageRoutingModule);



/***/ }),

/***/ 92279:
/*!*******************************************!*\
  !*** ./src/app/map-atk/map-atk.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapAtkPageModule": () => (/* binding */ MapAtkPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _map_atk_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-atk-routing.module */ 481);
/* harmony import */ var _map_atk_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-atk.page */ 67320);







let MapAtkPageModule = class MapAtkPageModule {
};
MapAtkPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_atk_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapAtkPageRoutingModule
        ],
        declarations: [_map_atk_page__WEBPACK_IMPORTED_MODULE_1__.MapAtkPage]
    })
], MapAtkPageModule);



/***/ }),

/***/ 67320:
/*!*****************************************!*\
  !*** ./src/app/map-atk/map-atk.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapAtkPage": () => (/* binding */ MapAtkPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_map_atk_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map-atk.page.html */ 87819);
/* harmony import */ var _map_atk_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-atk.page.scss */ 92514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ 4838);
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ 4714);
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ 86414);
/* harmony import */ var _amcharts_amcharts4_geodata_thailandHigh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/thailandHigh */ 32928);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chart.js */ 71965);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);













chart_js__WEBPACK_IMPORTED_MODULE_7__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_7__.registerables);
let MapAtkPage = class MapAtkPage {
    constructor(api, nav, appComponent, router) {
        this.api = api;
        this.nav = nav;
        this.appComponent = appComponent;
        this.router = router;
        this.year = "";
        this.month = "";
        this.showMapContent = true;
        this.provinceList = [];
        this.dataType = "all"; // all, positive
        this.plan = "report"; // report, table
        this.mapType = "all"; // all, province
        this.mapDay = 0; // 0, 7, 14, 21, 28
        this.mapProvinceId = "all";
        this.mapProvinceName = "ทั้งประเทศ";
        this.high_positive_percent = "-";
        this.high_positive_amount = "- คน";
        this.low_positive_percent = "-";
        this.low_positive_amount = "- คน";
        this.hcw1_percent = "-";
        this.hcw1_amount = "- คน";
        this.hcw2_percent = "-";
        this.hcw2_amount = "- คน";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.appComponent.sideMenu = false;
        // this.getProvinceList()
        this.getMedAtkAnalytic(this.mapType, Number(this.mapDay), this.mapProvinceId, this.dataType);
    }
    onChangeDataType() {
        console.log("dataType", this.dataType);
        this.getMedAtkAnalytic(this.mapType, Number(this.mapDay), this.mapProvinceId, this.dataType);
    }
    loginButton() {
        this.router.navigate(['/login']);
    }
    clickSelectDay() {
        this.daySelector.open();
    }
    clickSelectProvince() {
        this.provinceSelector.open();
    }
    selectedPlan(plan) {
        this.plan = plan;
        if (this.plan == 'report') {
            this.getMedAtkAnalytic(this.mapType, Number(this.mapDay), this.mapProvinceId, this.dataType);
        }
    }
    selectedMapDay() {
        this.getMedAtkAnalytic(this.mapType, Number(this.mapDay), this.mapProvinceId, this.dataType);
    }
    selectedMapProvinceId() {
        if (this.mapProvinceId == "all") {
            this.mapType = "all";
            this.mapProvinceName = "ทั้งประเทศ";
        }
        else {
            this.mapType = "province";
            this.searchProvinceName(this.mapProvinceId);
        }
        this.getMedAtkAnalytic(this.mapType, Number(this.mapDay), this.mapProvinceId, this.dataType);
    }
    searchProvinceName(provinceId) {
        if (localStorage.getItem("address_list")) {
            var addressList = JSON.parse(localStorage.getItem("address_list"));
            addressList.forEach(item => {
                if (item["province_id"] == provinceId) {
                    this.mapProvinceName = item["province_thai"];
                    return;
                }
            });
        }
        else {
            localStorage.clear();
            // setTimeout(() => {
            //   this.nav.navigateBack("/login")
            // }, 1000);
        }
    }
    getProvinceList() {
        if (localStorage.getItem("address_list")) {
            var addressList = JSON.parse(localStorage.getItem("address_list"));
            this.provinceList = [];
            addressList.forEach(item => {
                var have = false;
                this.provinceList.forEach(province => {
                    if (province['province_id'] == item['province_id']) {
                        have = true;
                    }
                });
                if (!have) {
                    this.provinceList.push(item);
                }
            });
        }
        else {
            localStorage.clear();
            // setTimeout(() => {
            //   this.nav.navigateBack("/login")
            // }, 1000);
        }
    }
    showMapContentButton(isShow) {
        this.showMapContent = isShow;
    }
    getMedAtkAnalytic(type, day, province_id, data_type) {
        this.api.getMedAtkAnalyticPublic(type, day, province_id, data_type).subscribe(res => {
            if (res['code'] == 200) {
                console.log(res);
                this.high_positive_percent = this.api.calculatePercentage(res['med_atk']['risk']['amount_high'], res['med_atk']['risk']['amount_all_high'], 0) + "%";
                this.high_positive_amount = res['med_atk']['risk']['amount_high'] + ' / ' + res['med_atk']['risk']['amount_all_high'] + ' คน';
                this.low_positive_percent = this.api.calculatePercentage(res['med_atk']['risk']['amount_low'], res['med_atk']['risk']['amount_all_low'], 0) + "%";
                this.low_positive_amount = res['med_atk']['risk']['amount_low'] + ' / ' + res['med_atk']['risk']['amount_all_low'] + ' คน';
                this.hcw1_percent = this.api.calculatePercentage(res['med_atk']['hcw']['amount_hcw1'], res['med_atk']['hcw']['amount_all'], 0) + "%";
                this.hcw1_amount = res['med_atk']['hcw']['amount_hcw1'] + ' / ' + res['med_atk']['hcw']['amount_all'] + ' คน';
                this.hcw2_percent = this.api.calculatePercentage(res['med_atk']['hcw']['amount_hcw2'], res['med_atk']['hcw']['amount_all'], 0) + "%";
                this.hcw2_amount = res['med_atk']['hcw']['amount_hcw2'] + ' / ' + res['med_atk']['hcw']['amount_all'] + ' คน';
                let colorLevel0 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.color("#eeeeee");
                let colorLevel1 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.color("#C2E9FF");
                let colorLevel2 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.color("#6AC9FF");
                let colorLevel3 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.color("#0084FE");
                let colorLevel4 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.color("#0C30B9");
                var mapDataList = [];
                try {
                    res['med_atk']['map']['province_list'].forEach(province => {
                        var mapData = {
                            id: "TH-" + province['province_id'],
                            province_id: province['province_id'],
                            name_th: province['province_name'],
                            color: colorLevel0
                        };
                        if (this.dataType == 'positive') {
                            if (province['percentage'] == 0) {
                                mapData['color'] = colorLevel0;
                            }
                            else if (province['percentage'] > 0 && province['percentage'] < 2) {
                                mapData['color'] = colorLevel1;
                            }
                            else if (province['percentage'] >= 2 && province['percentage'] < 5) {
                                mapData['color'] = colorLevel2;
                            }
                            else if (province['percentage'] >= 15 && province['percentage'] < 10) {
                                mapData['color'] = colorLevel3;
                            }
                            else if (province['percentage'] >= 10) {
                                mapData['color'] = colorLevel4;
                            }
                            else {
                                mapData['color'] = colorLevel0;
                            }
                        }
                        else if (this.dataType == 'all') {
                            if (province['percentage'] == 0) {
                                mapData['color'] = colorLevel0;
                            }
                            else if (province['percentage'] > 0 && province['percentage'] < 25) {
                                mapData['color'] = colorLevel1;
                            }
                            else if (province['percentage'] >= 25 && province['percentage'] < 50) {
                                mapData['color'] = colorLevel2;
                            }
                            else if (province['percentage'] >= 50 && province['percentage'] < 75) {
                                mapData['color'] = colorLevel3;
                            }
                            else if (province['percentage'] >= 75) {
                                mapData['color'] = colorLevel4;
                            }
                            else {
                                mapData['color'] = colorLevel0;
                            }
                        }
                        mapDataList.push(mapData);
                    });
                }
                catch (_a) {
                }
                this.provinceList.forEach(province => {
                    var haveProvince = false;
                    mapDataList.forEach(map => {
                        if (province['province_id'] == map['province_id']) {
                            haveProvince = true;
                        }
                    });
                    if (!haveProvince) {
                        mapDataList.push({
                            id: "TH-" + province['province_id'],
                            province_id: province['province_id'],
                            name_th: province['province_name'],
                            color: colorLevel0
                        });
                    }
                });
                var hcw1List = [
                    res['med_atk']['hcw']['amount_hcw1_close_to_the_patient'],
                    res['med_atk']['hcw']['amount_608'],
                    res['med_atk']['hcw']['amount_hcw1_key_personal'],
                ];
                var hcw2List = [
                    res['med_atk']['hcw']['amount_hcw2_not_close_to_the_patient'],
                    res['med_atk']['hcw']['amount_hcw2_administrative_personal'],
                    res['med_atk']['hcw']['amount_hcw2_other_support_personal'],
                ];
                var labelProvinceList = [];
                var dataProvinceList = [];
                res['med_atk']['amount_province'].forEach((item, index) => {
                    if (index < 5) {
                        labelProvinceList.push(item['province_name']);
                        dataProvinceList.push(item['amount']);
                    }
                    else {
                        return;
                    }
                });
                if (labelProvinceList.length < 5) {
                    var count = 5 - labelProvinceList.length;
                    for (var i = 0; i < count; i++) {
                        labelProvinceList.push("");
                        dataProvinceList.push(0);
                    }
                }
                var labelHospitalList = [];
                var dataHospitalList = [];
                res['med_atk']['amount_hospital'].forEach((item, index) => {
                    if (index < 5) {
                        labelHospitalList.push(item['hospital_name']);
                        dataHospitalList.push(item['amount']);
                    }
                    else {
                        return;
                    }
                });
                if (labelHospitalList.length < 5) {
                    var count = 5 - labelHospitalList.length;
                    for (var i = 0; i < count; i++) {
                        labelHospitalList.push("");
                        dataHospitalList.push(0);
                    }
                }
                var labelDepartmentList = [];
                var dataDepartmentList = [];
                res['med_atk']['amount_department'].forEach((item, index) => {
                    if (index < 5) {
                        labelDepartmentList.push(item['department']);
                        dataDepartmentList.push(item['amount']);
                    }
                    else {
                        return;
                    }
                });
                if (labelDepartmentList.length < 5) {
                    var count = 5 - labelDepartmentList.length;
                    for (var i = 0; i < count; i++) {
                        labelDepartmentList.push("");
                        dataDepartmentList.push(0);
                    }
                }
                setTimeout(() => {
                    this.setChartHCW1(hcw1List);
                    this.setChartHCW2(hcw2List);
                    if (this.mapProvinceId == "all") {
                        this.setMap(mapDataList);
                        this.setChartTop5Province(labelProvinceList, dataProvinceList);
                    }
                    this.setChartTop5Hospital(labelHospitalList, dataHospitalList);
                    this.setChartTop5Department(labelDepartmentList, dataDepartmentList);
                }, 1000);
            }
            else {
                alert("ผิดพลาด : " + res['message']);
            }
        }, error => {
            alert("ไม่ตอบสนอง");
        });
    }
    setAlertList(list) {
        list.forEach(item => {
            if (item['result']['alert_list'].length < 5) {
                let num = item['result']['alert_list'].length;
                for (let i = 0; i < 5 - num; i += 1) {
                    item['result']['alert_list'].push({ display: "none" });
                }
            }
        });
    }
    dateToTH(date) {
        let y = Number(date.split("-")[0]) + 543;
        let m = date.split("-")[1];
        let d = date.split("-")[2];
        return d + '/' + m + '/' + y;
    }
    setMap(mapData) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.useTheme(_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__.default);
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.create("chartMap", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__.MapChart);
        chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__.projections.Miller();
        var thaiSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__.MapPolygonSeries());
        thaiSeries.useGeodata = true;
        thaiSeries.geodata = _amcharts_amcharts4_geodata_thailandHigh__WEBPACK_IMPORTED_MODULE_5__.default;
        var worldPolygon = thaiSeries.mapPolygons.template;
        worldPolygon.tooltipText = "{name}";
        worldPolygon.nonScalingStroke = true;
        worldPolygon.strokeOpacity = 0.5;
        worldPolygon.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.color("#eee");
        worldPolygon.propertyFields.fill = "color";
        var hs = worldPolygon.states.create("hover");
        hs.properties.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__.color("#000000");
        hs.properties.strokeWidth = 3;
        var countrySeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_4__.MapPolygonSeries());
        countrySeries.useGeodata = true;
        countrySeries.hide();
        countrySeries.geodataSource.events.on("done", function (ev) {
            thaiSeries.hide();
            countrySeries.show();
        });
        thaiSeries.data = mapData;
    }
    setChartHCW1(dataList) {
        try {
            this._chartHCW1.destroy();
        }
        catch (_a) { }
        this._chartHCW1 = new chart_js__WEBPACK_IMPORTED_MODULE_7__.Chart(this.chartHCW1.nativeElement, {
            type: 'bar',
            data: {
                labels: ['ก', 'ข', 'ค'],
                datasets: [{
                        label: '',
                        data: dataList,
                        borderRadius: 100,
                        backgroundColor: [
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)'
                        ],
                        borderColor: [
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0.3)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0)'
                        }
                    }
                }
            }
        });
    }
    setChartHCW2(dataList) {
        try {
            this._chartHCW2.destroy();
        }
        catch (_a) { }
        this._chartHCW2 = new chart_js__WEBPACK_IMPORTED_MODULE_7__.Chart(this.chartHCW2.nativeElement, {
            type: 'bar',
            data: {
                labels: ['ก', 'ข', 'ค'],
                datasets: [{
                        label: '',
                        data: dataList,
                        borderRadius: 100,
                        backgroundColor: [
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)'
                        ],
                        borderColor: [
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0.3)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0)'
                        }
                    }
                }
            }
        });
    }
    setChartTop5Province(labelList, dataList) {
        try {
            this._chartTop5Province.destroy();
        }
        catch (_a) { }
        this._chartTop5Province = new chart_js__WEBPACK_IMPORTED_MODULE_7__.Chart(this.chartTop5Province.nativeElement, {
            type: 'bar',
            data: {
                labels: labelList,
                datasets: [{
                        label: '',
                        data: dataList,
                        borderRadius: 100,
                        backgroundColor: [
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)'
                        ],
                        borderColor: [
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0.3)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0)'
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    setChartTop5Hospital(labelList, dataList) {
        try {
            this._chartTop5Hospital.destroy();
        }
        catch (_a) { }
        this._chartTop5Hospital = new chart_js__WEBPACK_IMPORTED_MODULE_7__.Chart(this.chartTop5Hospital.nativeElement, {
            type: 'bar',
            data: {
                labels: labelList,
                datasets: [{
                        label: '',
                        data: dataList,
                        borderRadius: 100,
                        backgroundColor: [
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)'
                        ],
                        borderColor: [
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                        labels: {
                            font: {
                                size: 3
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0.3)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0)'
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    setChartTop5Department(labelList, dataList) {
        try {
            this._chartTop5Department.destroy();
        }
        catch (_a) { }
        this._chartTop5Department = new chart_js__WEBPACK_IMPORTED_MODULE_7__.Chart(this.chartTop5Department.nativeElement, {
            type: 'bar',
            data: {
                labels: labelList,
                datasets: [{
                        label: '',
                        data: dataList,
                        borderRadius: 100,
                        backgroundColor: [
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)',
                            'rgba(194, 233, 255, 0.6)'
                        ],
                        borderColor: [
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)',
                            'rgba(194, 233, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0.3)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0)'
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
    }
};
MapAtkPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
MapAtkPage.propDecorators = {
    yearSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['yearSelector',] }],
    monthSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['monthSelector',] }],
    daySelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['daySelector',] }],
    provinceSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['provinceSelector',] }],
    chartHCW1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['chartHCW1',] }],
    chartHCW2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['chartHCW2',] }],
    chartTop5Province: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['chartTop5Province',] }],
    chartTop5Hospital: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['chartTop5Hospital',] }],
    chartTop5Department: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['chartTop5Department',] }]
};
MapAtkPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-map-atk',
        template: _raw_loader_map_atk_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_atk_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapAtkPage);



/***/ }),

/***/ 92514:
/*!*******************************************!*\
  !*** ./src/app/map-atk/map-atk.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 50px;\n  --padding-bottom: 50px;\n  --padding-start: 50px;\n  --padding-end: 50px;\n  min-width: 650px;\n}\n\n.select-data-type-container {\n  height: 85px;\n  background: #F5FCFF;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.select-data-type-container .text {\n  margin-left: 20px;\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-data-type-container ion-select {\n  width: 550px;\n  height: 47px;\n  border-radius: 10px;\n  margin-left: 10px;\n  background: #FFFFFF;\n  padding-right: 20px;\n  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.15);\n  color: #547998;\n}\n\n.nav-bar {\n  display: flex;\n  align-items: center;\n}\n\n.nav-bar img {\n  width: 70px;\n  height: 70px;\n}\n\n.nav-bar .login-container {\n  display: flex;\n  align-items: center;\n}\n\n.nav-bar .login-container img {\n  width: 30px;\n  height: 30px;\n}\n\n.nav-bar .login-container .text {\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 25px;\n  color: #547998;\n}\n\n.select-plan-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.select-plan-container .select-button {\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.select-plan-container .select-button .button-content .text {\n  font-weight: 500;\n  font-size: 16px;\n  color: #788a99;\n  text-align: center;\n}\n\n.select-plan-container .select-button .status-line {\n  height: 5px;\n  width: 100px;\n  background: #ffffff;\n  border-radius: 2.5px;\n  transition: 0.3s;\n  background: #e0e5e9;\n}\n\n.select-plan-container .select-button .active {\n  background: #547998;\n}\n\n.slides-container {\n  margin-top: 30px;\n  margin-left: -50px;\n  margin-right: -50px;\n}\n\n.slides-container .slide-area {\n  width: 200% !important;\n  display: flex;\n  align-items: flex-start;\n  margin-left: 0%;\n  transition: 0.3s;\n}\n\n.slides-container .slide-area .slide {\n  width: 50%;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.slides-container .index1 {\n  margin-left: -100%;\n}\n\n.head-bar-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 75px;\n  background: #F5FCFF;\n  border-radius: 15px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.head-bar-container .text {\n  font-weight: 500;\n  font-size: 20px;\n  color: #547998;\n}\n\n.head-bar-container .export-button {\n  background: #63A5F3;\n  height: 38px;\n  width: 133px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-size: 16px;\n  transition: 0.3s;\n}\n\n.head-bar-container .export-button:active {\n  opacity: 0.5;\n}\n\n.head-sub {\n  font-weight: 500;\n  font-size: 14px;\n  color: #547998;\n  margin-left: 20px;\n  margin-top: 10px;\n}\n\n.select-row-container {\n  margin-top: 10px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.select-row-container .text {\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-row-container ion-select {\n  margin-left: 20px;\n  width: 270px;\n  height: 48px;\n  font-size: 16px;\n  color: #547998;\n  background: #FFFFFF;\n  border: 1px solid #ABDEFB;\n  border-radius: 7px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.table-container {\n  margin-top: 15px;\n  width: 100%;\n  overflow-x: scroll;\n}\n\n.table-container .table-area {\n  border-radius: 20px;\n  overflow: hidden;\n  min-width: 1275px;\n  border: 1px solid #E3F1FF;\n}\n\n.table-container .table-area .head-table {\n  height: 70px;\n  background: #F5FAFF;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.table-container .table-area .head-table .col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 20px;\n  color: #547998;\n}\n\n.table-container .table-area .content-table {\n  height: 266px;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.table-container .table-area .content-table .col .detail-container-img {\n  display: flex;\n  align-items: center;\n}\n\n.table-container .table-area .content-table .col .detail-container-img .img {\n  width: 20px;\n  height: 20px;\n}\n\n.table-container .table-area .content-table .col .detail-container-img .text {\n  margin-left: 15px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #547998;\n}\n\n.table-container .table-area .content-table .col .detail-container {\n  display: flex;\n  align-items: center;\n}\n\n.table-container .table-area .content-table .col .detail-container .key {\n  margin-left: 35px;\n  font-size: 16px;\n  color: #8DA0AF;\n}\n\n.table-container .table-area .content-table .col .detail-container .value {\n  margin-left: 10px;\n  font-size: 16px;\n  color: #547998;\n}\n\n.table-container .table-area .content-table .col .detail-button-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.table-container .table-area .content-table .col .detail-button-container .text {\n  font-size: 16px;\n}\n\n.status-container {\n  flex: 1;\n}\n\n.status-container .status {\n  margin-bottom: 15px;\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n  height: 45px;\n}\n\n.status-container .status img {\n  height: 45px;\n  width: 45px;\n}\n\n.status-container .status .text {\n  margin-left: 8px;\n  font-weight: 300;\n  font-size: 14px;\n  color: #547998;\n}\n\n.date-button-container {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.date-button-container .date {\n  font-size: 16px;\n  color: #547998;\n}\n\n.date-button-container .detail-button {\n  font-size: 14px;\n  color: #6BAFFF;\n  transition: 0.3s;\n}\n\n.date-button-container .detail-button:active {\n  opacity: 0.3;\n}\n\n.none-text {\n  font-weight: 300;\n  font-size: 14px;\n  text-align: center;\n  color: #547998;\n}\n\n.select-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.select-container .key {\n  margin-top: 10px;\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-container .select-box {\n  margin-top: 10px;\n  width: 270px;\n  height: 48px;\n  background: #FFFFFF;\n  border: 1px solid #ABDEFB;\n  border-radius: 7px;\n  margin-left: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.select-container .select-box .text {\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-container .select-box ion-icon {\n  color: #547998;\n  width: 25px;\n  height: 25px;\n}\n\n.maps-container {\n  margin-top: 30px;\n  display: flex;\n}\n\n.maps-container .map-area {\n  flex: 1;\n  height: 1335px;\n  border: 1px solid #ABDEFB;\n  border-radius: 30px;\n  padding: 30px;\n}\n\n.maps-container .map-content {\n  overflow: hidden;\n  width: 380px;\n  background: #F5FCFF;\n  border-radius: 15px;\n  padding: 15px;\n  transition: 0.3s;\n}\n\n.maps-container .hide-map-content {\n  padding-left: 0;\n  padding-right: 0;\n  width: 0px;\n  opacity: 0;\n}\n\n.show-map-content-button {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #6BAFFF;\n}\n\n.show-map-content-button ion-icon {\n  height: 30px;\n  width: 30px;\n  color: #ffffff;\n}\n\n.text-header {\n  display: flex;\n  color: #547998;\n  font-size: 16px;\n  align-items: center;\n}\n\n.select-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.select-container .select-box {\n  margin-top: 10px;\n  width: 270px;\n  height: 48px;\n  background: #FFFFFF;\n  border: 1px solid #ABDEFB;\n  border-radius: 7px;\n  margin-left: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.select-container .select-box .text {\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-container .select-box ion-icon {\n  color: #547998;\n  width: 25px;\n  height: 25px;\n}\n\n.display-percent-container {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.display-percent-container .card {\n  flex: 1;\n  background: #FFFFFF;\n  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.1);\n  border-radius: 14px;\n  padding: 10px;\n}\n\n.display-percent-container .card .key {\n  font-size: 12px;\n  text-align: center;\n  color: #565656;\n}\n\n.display-percent-container .card .percent {\n  margin-top: 10px;\n  font-weight: 500;\n  font-size: 25px;\n  color: #547998;\n  text-align: center;\n}\n\n.display-percent-container .card .line {\n  height: 0.5px;\n  background: #547998;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.display-percent-container .card .amount-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-percent-container .card .amount-container img {\n  height: 15px;\n  width: 15px;\n}\n\n.display-percent-container .card .amount-container .text {\n  margin-left: 5px;\n  font-size: 12px;\n  color: #547998;\n}\n\n.detail-map {\n  position: absolute;\n  margin-top: -220px;\n  right: 0;\n  margin-right: 480px;\n  height: 210px;\n  width: 145px;\n  background: chartreuse;\n  background: #F9F9F9;\n  border-radius: 17px;\n  padding: 10px;\n}\n\n.detail-map .title {\n  font-size: 16px;\n  color: #547998;\n  text-align: center;\n}\n\n.detail-map .detail-container {\n  margin-top: 12px;\n  display: flex;\n  align-items: center;\n}\n\n.detail-map .detail-container .key {\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n}\n\n.detail-map .detail-container .value {\n  margin-left: 10px;\n  font-weight: 300;\n  font-size: 14px;\n  color: #547998;\n}\n\n.detail-map2 {\n  margin-right: 150px;\n}\n\n.chart-container {\n  margin-top: 20px;\n  width: 100%;\n  display: flex;\n}\n\n.chart-container .chart {\n  width: 50%;\n}\n\n.chart-container .chart .title-chart {\n  font-size: 14px;\n  color: #547998;\n}\n\n.chart-container .chart canvas {\n  margin-top: 10px;\n}\n\n.chart-full-container {\n  margin-top: 20px;\n}\n\n.chart-full-container .title-chart {\n  font-size: 14px;\n  color: #547998;\n}\n\n.chart-full-container canvas {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,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OztBQXFCSTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBbkJKOztBQXFCSTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFuQko7O0FBcUJJO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFuQko7O0FBb0JJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFsQlI7O0FBb0JJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWxCUjs7QUF3QkE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBdEJBOztBQXdCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF0Qko7O0FBd0JBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF0Qko7O0FBdUJJO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJCSjs7QUF1Qkk7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFyQko7O0FBMEJBO0VBQ0ksbUJBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQXZCSjs7QUF5Qkk7RUFDSSxVQUFBO0FBdkJSOztBQXlCUTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBdkJSOztBQTBCUTtFQUNBLGdCQUFBO0FBeEJSOztBQTZCQTtFQUNJLGdCQUFBO0FBMUJKOztBQTJCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBekJSOztBQTJCSTtFQUNJLGdCQUFBO0FBekJSIiwiZmlsZSI6Im1hcC1hdGsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDUwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDUwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogNTBweDtcbiAgXG4gICAgbWluLXdpZHRoOiA2NTBweDtcbn1cblxuLnNlbGVjdC1kYXRhLXR5cGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgYmFja2dyb3VuZDogI0Y1RkNGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC50ZXh0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgfVxuICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgIGhlaWdodDogNDdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgfVxufVxuXG4ubmF2LWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgfVxuICAgIC5sb2dpbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWxlY3QtcGxhbi1jb250YWluZXIge1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbi5zZWxlY3QtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuYnV0dG9uLWNvbnRlbnQge1xuICAgIC50ZXh0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzc4OGE5OTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICB9XG4gICAgLnN0YXR1cy1saW5lIHtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyLjVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJhY2tncm91bmQ6ICNlMGU1ZTk7XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICM1NDc5OTg7XG4gICAgfVxufVxufVxuXG4uc2xpZGVzLWNvbnRhaW5lciB7XG5tYXJnaW4tdG9wOiAzMHB4O1xubWFyZ2luLWxlZnQ6IC01MHB4O1xubWFyZ2luLXJpZ2h0OiAtNTBweDtcbi5zbGlkZS1hcmVhIHtcbiAgICB3aWR0aDogMjAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgLnNsaWRlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIH1cbn1cbi5pbmRleDEge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbn1cbn1cblxuLmhlYWQtYmFyLWNvbnRhaW5lciB7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmhlaWdodDogNzVweDtcbmJhY2tncm91bmQ6ICNGNUZDRkY7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xucGFkZGluZy1sZWZ0OiAyMHB4O1xucGFkZGluZy1yaWdodDogMjBweDtcblxuLnRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xufVxuXG4uZXhwb3J0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzYzQTVGMztcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDEzM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmV4cG9ydC1idXR0b246YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG59XG5cbi5oZWFkLXN1YiB7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxNHB4O1xuY29sb3I6ICM1NDc5OTg7XG5tYXJnaW4tbGVmdDogMjBweDtcbm1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zZWxlY3Qtcm93LWNvbnRhaW5lciB7XG5tYXJnaW4tdG9wOiAxMHB4O1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzU0Nzk5ODtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FCREVGQjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG59XG5cbi50YWJsZS1jb250YWluZXIge1xubWFyZ2luLXRvcDogMTVweDtcbndpZHRoOiAxMDAlO1xub3ZlcmZsb3cteDogc2Nyb2xsO1xuXG4udGFibGUtYXJlYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1pbi13aWR0aDogMTI3NXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFM0YxRkY7XG5cbiAgICAuaGVhZC10YWJsZSB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGNUZBRkY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmNvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgfVxuICAgIH1cbiAgICAuY29udGVudC10YWJsZSB7XG4gICAgaGVpZ2h0OiAyNjZweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5jb2wge1xuICAgICAgICAuZGV0YWlsLWNvbnRhaW5lci1pbWcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWwtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmtleSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOERBMEFGO1xuICAgICAgICB9XG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbC1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIH1cbn1cblxufVxuXG4uc3RhdHVzLWNvbnRhaW5lciB7XG5mbGV4OiAxO1xuXG4uc3RhdHVzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQ1cHg7XG5cbiAgICBpbWcge1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NDc5OTg7XG4gICAgfVxufVxufVxuXG4uZGF0ZS1idXR0b24tY29udGFpbmVyIHtcbmhlaWdodDogNTBweDtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzU0Nzk5ODtcbn1cbi5kZXRhaWwtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2QkFGRkY7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5kZXRhaWwtYnV0dG9uOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC4zO1xufVxufVxuXG4ubm9uZS10ZXh0IHtcbmZvbnQtd2VpZ2h0OiAzMDA7XG5mb250LXNpemU6IDE0cHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5cbmNvbG9yOiAjNTQ3OTk4O1xufVxuXG4uc2VsZWN0LWNvbnRhaW5lciB7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC13cmFwOiB3cmFwO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbi5rZXkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xufVxuLnNlbGVjdC1ib3gge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQkRFRkI7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgY29sb3I6ICM1NDc5OTg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIH0gXG59XG59XG5cbi5tYXBzLWNvbnRhaW5lciB7XG5tYXJnaW4tdG9wOiAzMHB4O1xuZGlzcGxheTogZmxleDtcbi5tYXAtYXJlYSB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEzMzVweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQkRFRkI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuLm1hcC1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAzODBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjVGQ0ZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmhpZGUtbWFwLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiAwcHg7XG4gICAgb3BhY2l0eTogMDtcbn1cbn1cblxuLnNob3ctbWFwLWNvbnRlbnQtYnV0dG9uIHtcbndpZHRoOiA1MHB4O1xuaGVpZ2h0OiA1MHB4O1xuYm9yZGVyLXJhZGl1czogMTBweDtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5iYWNrZ3JvdW5kOiAjNkJBRkZGO1xuaW9uLWljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbn1cblxuLnRleHQtaGVhZGVye1xuZGlzcGxheTogZmxleDtcbmNvbG9yOiAjNTQ3OTk4O1xuZm9udC1zaXplOiAxNnB4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWxlY3QtY29udGFpbmVyIHtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LXdyYXA6IHdyYXA7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuLnNlbGVjdC1ib3gge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQkRFRkI7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB9IFxufVxuXG5cbn1cblxuLmRpc3BsYXktcGVyY2VudC1jb250YWluZXIge1xubWFyZ2luLXRvcDogMjBweDtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuLmNhcmQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAtMXB4IDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAua2V5IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNTY1NjU2O1xuICAgIH1cbiAgICAucGVyY2VudCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5saW5lIHtcbiAgICBoZWlnaHQ6IDAuNXB4O1xuICAgIGJhY2tncm91bmQ6ICM1NDc5OTg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuYW1vdW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgfVxuICAgIC50ZXh0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICB9XG5cbiAgICB9XG59XG59XG4uZGV0YWlsLW1hcCB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5tYXJnaW4tdG9wOiAtMjIwcHg7XG5yaWdodDogMDtcbm1hcmdpbi1yaWdodDogNDgwcHg7XG5cbmhlaWdodDogMjEwcHg7XG53aWR0aDogMTQ1cHg7XG5iYWNrZ3JvdW5kOiBjaGFydHJldXNlO1xuYmFja2dyb3VuZDogI0Y5RjlGOTtcbmJvcmRlci1yYWRpdXM6IDE3cHg7XG5wYWRkaW5nOiAxMHB4O1xuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmtleSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgLnZhbHVlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICB9XG59XG59XG5cbi5kZXRhaWwtbWFwMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbn1cblxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmNoYXJ0IHtcbiAgICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgICAudGl0bGUtY2hhcnQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgICB9XG5cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNoYXJ0LWZ1bGwtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC50aXRsZS1jaGFydCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgfVxuICAgIGNhbnZhcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxufVxuICBcbiAgIl19 */");

/***/ }),

/***/ 87819:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map-atk/map-atk.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<script src=\"https://cdn.amcharts.com/lib/4/core.js\"></script>\n<script src=\"https://cdn.amcharts.com/lib/4/maps.js\"></script>\n<script src=\"https://cdn.amcharts.com/lib/4/geodata/worldLow.js\"></script>\n<script src=\"https://cdn.amcharts.com/lib/4/geodata/data/countries2.js\"></script>\n<script src=\"https://cdn.amcharts.com/lib/4/themes/animated.js\"></script>\n\n<ion-content>\n\n  <div class=\"nav-bar\">\n    <img src=\"./assets/icon/h4u-icon.svg\" style=\"width: 70px; height: 70px;\">\n    <div style=\"flex: 1;\"></div>\n    <div class=\"login-container pointer\" (click)=\"loginButton()\">\n      <img src=\"./assets/icon/person-circle.svg\">\n      <div class=\"text\">เข้าสู่ระบบ</div>\n    </div>\n  </div>\n\n  <div style=\"font-weight: 500; font-size: 20px; color: #547998;\">รายงานการคัดกรองบุคลากรตรวจ ATK</div>\n\n  <div class=\"select-data-type-container\">\n    <div class=\"text\">เลือก</div>\n    <ion-select [(ngModel)]=\"dataType\" (ionChange)=\"onChangeDataType()\">\n      <ion-select-option value=\"all\">ความครอบคลุมการตรวจ ATK ในบุคลากรทางการแพทย์รายจังหวัด</ion-select-option>\n      <ion-select-option value=\"positive\">ร้อยละของ ATK positive ในบุคลากรทางการแพทย์รายจังหวัด</ion-select-option>\n    </ion-select>\n  </div>\n\n\n  <div class=\"select-container\">\n    <div class=\"key\">เลือก</div>\n    <!-- <div class=\"select-box pointer\">\n            <div class=\"text\">เลือกปี</div>\n            <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n        <div class=\"select-box pointer\">\n            <div class=\"text\">เลือกเดือน</div>\n            <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div> -->\n    <div class=\"select-box pointer\" (click)=\"clickSelectDay()\">\n      <div class=\"text\">Day {{ mapDay }}</div>\n      <ion-icon name=\"caret-down-outline\"></ion-icon>\n    </div>\n  </div>\n  <div class=\"maps-container\">\n    <div class=\"map-area\">\n      <div id=\"chartMap\" style=\"width: 100%; height: 100%;\"></div>\n      <div class=\"detail-map\" [class.detail-map2]=\"!showMapContent\" *ngIf=\"plan=='report'\">\n        <div class=\"title\">คำอธิบายสี</div>\n        <div class=\"detail-container\">\n          <div class=\"key\" style=\"border: 1px solid #547998; background: #ffffff;\"></div>\n          <div class=\"value\">ไม่มีการตรวจ</div>\n        </div>\n        <div class=\"detail-container\">\n          <div class=\"key\" style=\"background: #C2E9FF;\"></div>\n          <div *ngIf=\"dataType == 'all'\" class=\"value\">1-24%</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"value\">0.1-1.9%</div>\n        </div>\n        <div class=\"detail-container\">\n          <div class=\"key\" style=\"background: #6AC9FF;\"></div>\n          <div *ngIf=\"dataType == 'all'\" class=\"value\">25-49%</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"value\">2.0-4.9%</div>\n        </div>\n        <div class=\"detail-container\">\n          <div class=\"key\" style=\"background: #0084FE;\"></div>\n          <div *ngIf=\"dataType == 'all'\" class=\"value\">50-74%</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"value\">5.0-9.9%</div>\n        </div>\n        <div class=\"detail-container\">\n          <div class=\"key\" style=\"background: #0C30B9;\"></div>\n          <div *ngIf=\"dataType == 'all'\" class=\"value\">75% ขึ้นไป</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"value\">10% ขึ้นไป</div>\n        </div>\n      </div>\n    </div>\n    <div style=\"width: 15px;\"></div>\n    <div *ngIf=\"!showMapContent\" class=\"show-map-content-button\" (click)=\"showMapContentButton(true)\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </div>\n    <div class=\"map-content\" [class.hide-map-content]=\"!showMapContent\">\n      <div class=\"show-map-content-button\" (click)=\"showMapContentButton(false)\" style=\"margin-bottom: 10px;\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </div>\n      <!-- <div class=\"text-header\">เลือกพื้นที่</div>\n      <div class=\"select-container\">\n        <div class=\"select-box pointer\" style=\"width: 100%; margin-left: 0;\" (click)=\"clickSelectProvince()\">\n          <div class=\"text\">{{ mapProvinceName }}</div>\n          <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n      </div> -->\n      <div class=\"text-header\" style=\"margin-top: 20px;\">จำนวนบุคลากรแต่ละกลุ่มเสี่ยง</div>\n\n      <div class=\"display-percent-container\">\n        <div class=\"card\">\n          <div *ngIf=\"dataType == 'all'\" class=\"key\">High risk</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"key\">High risk and Positive</div>\n          <div class=\"percent\">{{ high_positive_percent }}</div>\n          <div class=\"line\"></div>\n          <div class=\"amount-container\">\n            <img src=\"./assets/map/person-icon-red.svg\">\n            <div class=\"text\">{{ high_positive_amount }}</div>\n          </div>\n        </div>\n        <div style=\"width: 20px;\"></div>\n        <div class=\"card\">\n          <div *ngIf=\"dataType == 'all'\" class=\"key\">Low risk</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"key\">Low risk and Positive</div>\n          <div class=\"percent\">{{ low_positive_percent }}</div>\n          <div class=\"line\"></div>\n          <div class=\"amount-container\">\n            <img src=\"./assets/map/person-icon-sky.svg\">\n            <div class=\"text\">{{ low_positive_amount }}</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"display-percent-container\">\n        <div class=\"card\">\n          <div *ngIf=\"dataType == 'all'\" class=\"key\">HCW1</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"key\">HCW1 and Positive</div>\n          <div class=\"percent\">{{ hcw1_percent }}</div>\n          <div class=\"line\"></div>\n          <div class=\"amount-container\">\n            <img src=\"./assets/map/person-icon-blue.svg\">\n            <div class=\"text\">{{ hcw1_amount }}</div>\n          </div>\n        </div>\n        <div style=\"width: 20px;\"></div>\n        <div class=\"card\">\n          <div *ngIf=\"dataType == 'all'\" class=\"key\">HCW2</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"key\">HCW2 and Positive</div>\n          <div class=\"percent\">{{ hcw2_percent }}</div>\n          <div class=\"line\"></div>\n          <div class=\"amount-container\">\n            <img src=\"./assets/map/person-icon-blue.svg\">\n            <div class=\"text\">{{ hcw2_amount }}</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"chart-container\">\n        <div class=\"chart\" style=\"margin-right: 5px;\">\n          <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">ประเภทของ HCW1</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">ประเภทของ HCW1 and Positive</div>\n          <canvas #chartHCW1 height=\"150\"></canvas>\n        </div>\n        <div class=\"chart\" style=\"margin-left: 5px;\">\n          <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">ประเภทของ HCW2</div>\n          <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">ประเภทของ HCW2 and Positive</div>\n          <canvas #chartHCW2 height=\"150\"></canvas>\n        </div>\n      </div>\n\n      <div class=\"chart-full-container\" [hidden]=\"mapProvinceId != 'all'\">\n        <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">5 จังหวัดที่พบ % การตรวจ ATK มากที่สุด</div>\n        <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">5 จังหวัดที่พบ % ATK Positive มากที่สุด</div>\n        <canvas #chartTop5Province height=\"150\"></canvas>\n      </div>\n\n      <div class=\"chart-full-container\">\n        <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">5 โรงพยาบาลที่พบ % การตรวจ ATK มากที่สุด</div>\n        <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">5 โรงพยาบาลที่พบ % ATK Positive มากที่สุด</div>\n        <canvas #chartTop5Hospital height=\"150\"></canvas>\n      </div>\n\n      <div class=\"chart-full-container\">\n        <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">5 แผนกที่พบ % การตรวจ ATK มากที่สุด</div>\n        <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">5 แผนกที่พบ % ATK Positive มากที่สุด</div>\n        <canvas #chartTop5Department height=\"150\"></canvas>\n      </div>\n\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-select #daySelector style=\"display: none;\" [(ngModel)]=\"mapDay\" (ionChange)=\"selectedMapDay()\">\n  <ion-select-option value=\"0\">Day 0</ion-select-option>\n  <ion-select-option value=\"7\">Day 7</ion-select-option>\n  <ion-select-option value=\"14\">Day 14</ion-select-option>\n  <ion-select-option value=\"21\">Day 21</ion-select-option>\n  <ion-select-option value=\"28\">Day 28</ion-select-option>\n</ion-select>");

/***/ })

}]);
//# sourceMappingURL=src_app_map-atk_map-atk_module_ts.js.map