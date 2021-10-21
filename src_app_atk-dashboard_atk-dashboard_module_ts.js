(self["webpackChunkmedical_personal_atk_dashboard"] = self["webpackChunkmedical_personal_atk_dashboard"] || []).push([["src_app_atk-dashboard_atk-dashboard_module_ts"],{

/***/ 19466:
/*!***************************************************************!*\
  !*** ./src/app/atk-dashboard/atk-dashboard-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtkDashboardPageRoutingModule": () => (/* binding */ AtkDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _atk_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atk-dashboard.page */ 46602);




const routes = [
    {
        path: '',
        component: _atk_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.AtkDashboardPage
    }
];
let AtkDashboardPageRoutingModule = class AtkDashboardPageRoutingModule {
};
AtkDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AtkDashboardPageRoutingModule);



/***/ }),

/***/ 748:
/*!*******************************************************!*\
  !*** ./src/app/atk-dashboard/atk-dashboard.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtkDashboardPageModule": () => (/* binding */ AtkDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _atk_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atk-dashboard-routing.module */ 19466);
/* harmony import */ var _atk_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atk-dashboard.page */ 46602);







let AtkDashboardPageModule = class AtkDashboardPageModule {
};
AtkDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _atk_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.AtkDashboardPageRoutingModule
        ],
        declarations: [_atk_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.AtkDashboardPage]
    })
], AtkDashboardPageModule);



/***/ }),

/***/ 46602:
/*!*****************************************************!*\
  !*** ./src/app/atk-dashboard/atk-dashboard.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtkDashboardPage": () => (/* binding */ AtkDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_atk_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./atk-dashboard.page.html */ 20565);
/* harmony import */ var _atk_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atk-dashboard.page.scss */ 91687);
/* harmony import */ var _atk_dashboard_modal_atk_dashboard_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../atk-dashboard-modal/atk-dashboard-modal.page */ 76125);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api.service */ 51491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ 4838);
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ 4714);
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ 86414);
/* harmony import */ var _amcharts_amcharts4_geodata_thailandHigh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/thailandHigh */ 32928);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ 71965);












chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_8__.registerables);
let AtkDashboardPage = class AtkDashboardPage {
    constructor(api, modalController, alertController, nav
    // private chartjs: Chart
    ) {
        this.api = api;
        this.modalController = modalController;
        this.alertController = alertController;
        this.nav = nav;
        this.year = "";
        this.month = "";
        this.showMapContent = true;
        // set table
        this.maxRow = "5"; // set max row of table
        this.pageTable = 1; // default page 1
        this.listAll = []; // list of all data for table
        this.listShow = []; // list of data for show in table
        this.maxPage = 0;
        this.datamock = [{
                pid: 1234567891111,
                name: "aaaaaa aaaaaaa",
                old: 30,
                gender: "ชาย",
                person_type: "HCW1",
                type: 'lowrisk',
                ATK: 'ไม่พบเชื้อ',
                date: '13/09/2564'
            }, {
                pid: 1234567891111,
                name: "aaaaaa aaaaaaa",
                old: 30,
                gender: "ชาย",
                person_type: "HCW1",
                type: 'lowrisk',
                ATK: 'ไม่พบเชื้อ',
                date: '13/09/2564'
            }];
        this.provinceList = [];
        this.dataType = "all"; //all, positive
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
        this.getUserData();
    }
    getUserData() {
        this.api.getUserData().subscribe(res => {
            console.log(res);
            if (res['code'] == 200) {
                this.selectedPlan('report');
                this.getProvinceList();
                this.api.getAllMedAtk().subscribe(res => {
                    if (res['code'] == 200) {
                        this.listAll = res["med_atk_list"];
                        this.setAlertList(this.listAll);
                        this.maxPage = Math.ceil(this.listAll.length / +this.maxRow);
                        this.setShowTable();
                    }
                });
            }
            else {
                this.nav.navigateBack("/map-atk");
            }
        }, error => {
            this.nav.navigateBack("/map-atk");
        });
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
    onChangeDataType() {
        console.log("dataType", this.dataType);
        this.getMedAtkAnalytic(this.mapType, Number(this.mapDay), this.mapProvinceId, this.dataType);
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
            setTimeout(() => {
                this.nav.navigateBack("/map-atk");
            }, 1000);
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
            setTimeout(() => {
                this.nav.navigateBack("/map-atk");
            }, 1000);
        }
    }
    showMapContentButton(isShow) {
        this.showMapContent = isShow;
    }
    getMedAtkAnalytic(type, day, province_id, data_type) {
        this.api.getMedAtkAnalytic(type, day, province_id, data_type).subscribe(res => {
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
                let colorLevel0 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#eeeeee");
                let colorLevel1 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#C2E9FF");
                let colorLevel2 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#6AC9FF");
                let colorLevel3 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#0084FE");
                let colorLevel4 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#0C30B9");
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
    rowSelected() {
        this.pageTable = 1;
        this.maxPage = Math.ceil(this.listAll.length / +this.maxRow);
        this.setShowTable();
    }
    pagerClick(type) {
        if (type == "add") {
            if (this.pageTable < Math.ceil(this.listAll.length / +this.maxRow)) {
                this.pageTable += 1;
            }
        }
        else if (type == "sub") {
            if (this.pageTable > 1) {
                this.pageTable -= 1;
            }
        }
        this.setShowTable();
    }
    setShowTable() {
        this.listShow = []; // remove all in listShow
        var count = +this.maxRow * (this.pageTable - 1);
        let start = +this.maxRow * (this.pageTable - 1);
        let end = (+this.maxRow * this.pageTable) - 1;
        for (count = start; count <= end; count += 1) {
            if (this.listAll[count] != null) {
                this.listShow.push(this.listAll[count]);
            }
        }
    }
    persentDetailModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _atk_dashboard_modal_atk_dashboard_modal_page__WEBPACK_IMPORTED_MODULE_2__.AtkDashboardModalPage,
                cssClass: 'atk-dashboard-modal'
            });
            return yield modal.present();
        });
    }
    detailButton(item, alert) {
        if (!alert['risk_screened']) {
            this.showAlert();
            return;
        }
        localStorage.setItem("item-atk-dashboard-modal", JSON.stringify(item));
        localStorage.setItem("alert-atk-dashboard-modal", JSON.stringify(alert));
        this.persentDetailModal();
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertController.create({
                header: "แจ้งเตือน",
                message: "ยังไม่ได้ประเมิน",
                buttons: [
                    {
                        text: "ตกลง"
                    }
                ]
            });
            yield alert.present();
        });
    }
    dateToTH(date) {
        let y = Number(date.split("-")[0]) + 543;
        let m = date.split("-")[1];
        let d = date.split("-")[2];
        return d + '/' + m + '/' + y;
    }
    setMap(mapData) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.useTheme(_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__.default);
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.create("chartMap", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__.MapChart);
        chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__.projections.Miller();
        var thaiSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__.MapPolygonSeries());
        thaiSeries.useGeodata = true;
        thaiSeries.geodata = _amcharts_amcharts4_geodata_thailandHigh__WEBPACK_IMPORTED_MODULE_7__.default;
        var worldPolygon = thaiSeries.mapPolygons.template;
        worldPolygon.tooltipText = "{name}";
        worldPolygon.nonScalingStroke = true;
        worldPolygon.strokeOpacity = 0.5;
        worldPolygon.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#eee");
        worldPolygon.propertyFields.fill = "color";
        var hs = worldPolygon.states.create("hover");
        hs.properties.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__.color("#000000");
        hs.properties.strokeWidth = 3;
        var countrySeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__.MapPolygonSeries());
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
        this._chartHCW1 = new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(this.chartHCW1.nativeElement, {
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
        this._chartHCW2 = new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(this.chartHCW2.nativeElement, {
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
        this._chartTop5Province = new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(this.chartTop5Province.nativeElement, {
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
        this._chartTop5Hospital = new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(this.chartTop5Hospital.nativeElement, {
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
        this._chartTop5Department = new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(this.chartTop5Department.nativeElement, {
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
AtkDashboardPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController }
];
AtkDashboardPage.propDecorators = {
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
AtkDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-atk-dashboard',
        template: _raw_loader_atk_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_atk_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AtkDashboardPage);



/***/ }),

/***/ 91687:
/*!*******************************************************!*\
  !*** ./src/app/atk-dashboard/atk-dashboard.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 50px;\n  --padding-bottom: 50px;\n  --padding-start: 50px;\n  --padding-end: 50px;\n  min-width: 650px;\n}\n\n.select-data-type-container {\n  height: 85px;\n  background: #F5FCFF;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.select-data-type-container .text {\n  margin-left: 20px;\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-data-type-container ion-select {\n  width: 550px;\n  height: 47px;\n  border-radius: 10px;\n  margin-left: 10px;\n  background: #FFFFFF;\n  padding-right: 20px;\n  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.15);\n  color: #547998;\n}\n\n.select-plan-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.select-plan-container .select-button {\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.select-plan-container .select-button .button-content .text {\n  font-weight: 500;\n  font-size: 16px;\n  color: #788a99;\n  text-align: center;\n}\n\n.select-plan-container .select-button .status-line {\n  height: 5px;\n  width: 100px;\n  background: #ffffff;\n  border-radius: 2.5px;\n  transition: 0.3s;\n  background: #e0e5e9;\n}\n\n.select-plan-container .select-button .active {\n  background: #547998;\n}\n\n.slides-container {\n  margin-top: 30px;\n  margin-left: -50px;\n  margin-right: -50px;\n}\n\n.slides-container .slide-area {\n  width: 200% !important;\n  display: flex;\n  align-items: flex-start;\n  margin-left: 0%;\n  transition: 0.3s;\n}\n\n.slides-container .slide-area .slide {\n  width: 50%;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.slides-container .index1 {\n  margin-left: -100%;\n}\n\n.head-bar-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 75px;\n  background: #F5FCFF;\n  border-radius: 15px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.head-bar-container .text {\n  font-weight: 500;\n  font-size: 20px;\n  color: #547998;\n}\n\n.head-bar-container .export-button {\n  background: #63A5F3;\n  height: 38px;\n  width: 133px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  font-size: 16px;\n  transition: 0.3s;\n}\n\n.head-bar-container .export-button:active {\n  opacity: 0.5;\n}\n\n.head-sub {\n  font-weight: 500;\n  font-size: 14px;\n  color: #547998;\n  margin-left: 20px;\n  margin-top: 10px;\n}\n\n.select-row-container {\n  margin-top: 10px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.select-row-container .text {\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-row-container ion-select {\n  margin-left: 20px;\n  width: 270px;\n  height: 48px;\n  font-size: 16px;\n  color: #547998;\n  background: #FFFFFF;\n  border: 1px solid #ABDEFB;\n  border-radius: 7px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.table-container {\n  margin-top: 15px;\n  width: 100%;\n  overflow-x: scroll;\n}\n\n.table-container .table-area {\n  border-radius: 20px;\n  overflow: hidden;\n  min-width: 1275px;\n  border: 1px solid #E3F1FF;\n}\n\n.table-container .table-area .head-table {\n  height: 70px;\n  background: #F5FAFF;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.table-container .table-area .head-table .col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 500;\n  font-size: 20px;\n  color: #547998;\n}\n\n.table-container .table-area .content-table {\n  height: 266px;\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.table-container .table-area .content-table .col .detail-container-img {\n  display: flex;\n  align-items: center;\n}\n\n.table-container .table-area .content-table .col .detail-container-img .img {\n  width: 20px;\n  height: 20px;\n}\n\n.table-container .table-area .content-table .col .detail-container-img .text {\n  margin-left: 15px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #547998;\n}\n\n.table-container .table-area .content-table .col .detail-container {\n  display: flex;\n  align-items: center;\n}\n\n.table-container .table-area .content-table .col .detail-container .key {\n  margin-left: 35px;\n  font-size: 16px;\n  color: #8DA0AF;\n}\n\n.table-container .table-area .content-table .col .detail-container .value {\n  margin-left: 10px;\n  font-size: 16px;\n  color: #547998;\n}\n\n.table-container .table-area .content-table .col .detail-button-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.table-container .table-area .content-table .col .detail-button-container .text {\n  font-size: 16px;\n}\n\n.status-container {\n  flex: 1;\n}\n\n.status-container .status {\n  margin-bottom: 15px;\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n  height: 45px;\n}\n\n.status-container .status img {\n  height: 45px;\n  width: 45px;\n}\n\n.status-container .status .text {\n  margin-left: 8px;\n  font-weight: 300;\n  font-size: 14px;\n  color: #547998;\n}\n\n.date-button-container {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.date-button-container .date {\n  font-size: 16px;\n  color: #547998;\n}\n\n.date-button-container .detail-button {\n  font-size: 14px;\n  color: #6BAFFF;\n  transition: 0.3s;\n}\n\n.date-button-container .detail-button:active {\n  opacity: 0.3;\n}\n\n.none-text {\n  font-weight: 300;\n  font-size: 14px;\n  text-align: center;\n  color: #547998;\n}\n\n.select-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.select-container .key {\n  margin-top: 10px;\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-container .select-box {\n  margin-top: 10px;\n  width: 270px;\n  height: 48px;\n  background: #FFFFFF;\n  border: 1px solid #ABDEFB;\n  border-radius: 7px;\n  margin-left: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.select-container .select-box .text {\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-container .select-box ion-icon {\n  color: #547998;\n  width: 25px;\n  height: 25px;\n}\n\n.maps-container {\n  margin-top: 30px;\n  display: flex;\n}\n\n.maps-container .map-area {\n  flex: 1;\n  height: 1335px;\n  border: 1px solid #ABDEFB;\n  border-radius: 30px;\n  padding: 30px;\n}\n\n.maps-container .map-content {\n  overflow: hidden;\n  width: 380px;\n  background: #F5FCFF;\n  border-radius: 15px;\n  padding: 15px;\n  transition: 0.3s;\n}\n\n.maps-container .hide-map-content {\n  padding-left: 0;\n  padding-right: 0;\n  width: 0px;\n  opacity: 0;\n}\n\n.show-map-content-button {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #6BAFFF;\n}\n\n.show-map-content-button ion-icon {\n  height: 30px;\n  width: 30px;\n  color: #ffffff;\n}\n\n.text-header {\n  display: flex;\n  color: #547998;\n  font-size: 16px;\n  align-items: center;\n}\n\n.select-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.select-container .select-box {\n  margin-top: 10px;\n  width: 270px;\n  height: 48px;\n  background: #FFFFFF;\n  border: 1px solid #ABDEFB;\n  border-radius: 7px;\n  margin-left: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.select-container .select-box .text {\n  font-size: 16px;\n  color: #547998;\n}\n\n.select-container .select-box ion-icon {\n  color: #547998;\n  width: 25px;\n  height: 25px;\n}\n\n.display-percent-container {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.display-percent-container .card {\n  flex: 1;\n  background: #FFFFFF;\n  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.1);\n  border-radius: 14px;\n  padding: 10px;\n}\n\n.display-percent-container .card .key {\n  font-size: 12px;\n  text-align: center;\n  color: #565656;\n}\n\n.display-percent-container .card .percent {\n  margin-top: 10px;\n  font-weight: 500;\n  font-size: 25px;\n  color: #547998;\n  text-align: center;\n}\n\n.display-percent-container .card .line {\n  height: 0.5px;\n  background: #547998;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.display-percent-container .card .amount-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-percent-container .card .amount-container img {\n  height: 15px;\n  width: 15px;\n}\n\n.display-percent-container .card .amount-container .text {\n  margin-left: 5px;\n  font-size: 12px;\n  color: #547998;\n}\n\n.detail-map {\n  position: absolute;\n  margin-top: -220px;\n  right: 0;\n  margin-right: 480px;\n  height: 210px;\n  width: 145px;\n  background: chartreuse;\n  background: #F9F9F9;\n  border-radius: 17px;\n  padding: 10px;\n}\n\n.detail-map .title {\n  font-size: 16px;\n  color: #547998;\n  text-align: center;\n}\n\n.detail-map .detail-container {\n  margin-top: 12px;\n  display: flex;\n  align-items: center;\n}\n\n.detail-map .detail-container .key {\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n}\n\n.detail-map .detail-container .value {\n  margin-left: 10px;\n  font-weight: 300;\n  font-size: 14px;\n  color: #547998;\n}\n\n.detail-map2 {\n  margin-right: 150px;\n}\n\n.chart-container {\n  margin-top: 20px;\n  width: 100%;\n  display: flex;\n}\n\n.chart-container .chart {\n  width: 50%;\n}\n\n.chart-container .chart .title-chart {\n  font-size: 14px;\n  color: #547998;\n}\n\n.chart-container .chart canvas {\n  margin-top: 10px;\n}\n\n.chart-full-container {\n  margin-top: 20px;\n}\n\n.chart-full-container .title-chart {\n  font-size: 14px;\n  color: #547998;\n}\n\n.chart-full-container canvas {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0ay1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFRTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBTjs7QUFFRTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLGNBQUE7QUFBTjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBR007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFEUjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGTjs7QUFJSTtFQUNFLG1CQUFBO0FBRk47O0FBT0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFLRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBSUk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZOOztBQUtFO0VBQ0Usa0JBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBTUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSko7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TTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBbEJSOztBQW9CTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFsQlI7O0FBd0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXRCRjs7QUF3QkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBdEJKOztBQXdCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdEJKOztBQXVCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFyQk47O0FBdUJJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBckJOOztBQTBCQTtFQUNFLG1CQUFBO0FBdkJGOztBQTBCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUF2QkY7O0FBeUJFO0VBQ0UsVUFBQTtBQXZCSjs7QUF5Qkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXZCTjs7QUEwQkk7RUFDRSxnQkFBQTtBQXhCTjs7QUE2QkE7RUFDRSxnQkFBQTtBQTFCRjs7QUEyQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXpCSjs7QUEyQkU7RUFDRSxnQkFBQTtBQXpCSiIsImZpbGUiOiJhdGstZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogNTBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1MHB4O1xuICAtLXBhZGRpbmctZW5kOiA1MHB4O1xuXG4gIG1pbi13aWR0aDogNjUwcHg7XG59XG5cbi5zZWxlY3QtZGF0YS10eXBlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogODVweDtcbiAgYmFja2dyb3VuZDogI0Y1RkNGRjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAudGV4dCB7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICB9XG4gIGlvbi1zZWxlY3Qge1xuICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgfVxufVxuXG4uc2VsZWN0LXBsYW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAuc2VsZWN0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLmJ1dHRvbi1jb250ZW50IHtcbiAgICAgIC50ZXh0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzc4OGE5OTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAuc3RhdHVzLWxpbmUge1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMi41cHg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgYmFja2dyb3VuZDogI2UwZTVlOTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNTQ3OTk4O1xuICAgIH1cbiAgfVxufVxuXG4uc2xpZGVzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNTBweDtcbiAgLnNsaWRlLWFyZWEge1xuICAgIHdpZHRoOiAyMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAuc2xpZGUge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgfVxuICB9XG4gIC5pbmRleDEge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgfVxufVxuXG4uaGVhZC1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJhY2tncm91bmQ6ICNGNUZDRkY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAudGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM1NDc5OTg7XG4gIH1cblxuICAuZXhwb3J0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzYzQTVGMztcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDEzM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIC5leHBvcnQtYnV0dG9uOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi5oZWFkLXN1YiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NDc5OTg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VsZWN0LXJvdy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xuICB9XG4gIGlvbi1zZWxlY3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FCREVGQjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG5cbiAgLnRhYmxlLWFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtaW4td2lkdGg6IDEyNzVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTNGMUZGO1xuXG4gICAgLmhlYWQtdGFibGUge1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgYmFja2dyb3VuZDogI0Y1RkFGRjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5jb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudC10YWJsZSB7XG4gICAgICBoZWlnaHQ6IDI2NnB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5jb2wge1xuICAgICAgICAuZGV0YWlsLWNvbnRhaW5lci1pbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWwtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLmtleSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOERBMEFGO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbC1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbn1cblxuLnN0YXR1cy1jb250YWluZXIge1xuICBmbGV4OiAxO1xuXG4gIC5zdGF0dXMge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDVweDtcblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICB9XG4gIH1cbn1cblxuLmRhdGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5kYXRlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM1NDc5OTg7XG4gIH1cbiAgLmRldGFpbC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzZCQUZGRjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIC5kZXRhaWwtYnV0dG9uOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5cbi5ub25lLXRleHQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBjb2xvcjogIzU0Nzk5ODtcbn1cblxuLnNlbGVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5rZXkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xuICB9XG4gIC5zZWxlY3QtYm94IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQUJERUZCO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfSBcbiAgfVxufVxuXG4ubWFwcy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAubWFwLWFyZWEge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMzM1cHg7XG4gICAgLy8gYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQUJERUZCO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuICAubWFwLWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGNUZDRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgLmhpZGUtbWFwLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiAwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uc2hvdy1tYXAtY29udGVudC1idXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzZCQUZGRjtcbiAgaW9uLWljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG4udGV4dC1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjNTQ3OTk4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VsZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnNlbGVjdC1ib3gge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQkRFRkI7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgLnRleHQge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfSBcbiAgfVxuICBcblxufVxuXG4uZGlzcGxheS1wZXJjZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5jYXJkIHtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogLTFweCAycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLmtleSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzU2NTY1NjtcbiAgICB9XG4gICAgLnBlcmNlbnQge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBjb2xvcjogIzU0Nzk5ODtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmxpbmUge1xuICAgICAgaGVpZ2h0OiAwLjVweDtcbiAgICAgIGJhY2tncm91bmQ6ICM1NDc5OTg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLmFtb3VudC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICB9XG4gICAgICAudGV4dCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM1NDc5OTg7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cbi5kZXRhaWwtbWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMjIwcHg7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDQ4MHB4O1xuICBcbiAgaGVpZ2h0OiAyMTBweDtcbiAgd2lkdGg6IDE0NXB4O1xuICBiYWNrZ3JvdW5kOiBjaGFydHJldXNlO1xuICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmtleSB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgLnZhbHVlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIH1cbiAgfVxufVxuXG4uZGV0YWlsLW1hcDIge1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xufVxuXG4uY2hhcnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLmNoYXJ0IHtcbiAgICB3aWR0aDogNTAlO1xuXG4gICAgLnRpdGxlLWNoYXJ0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNTQ3OTk4O1xuICAgIH1cblxuICAgIGNhbnZhcyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uY2hhcnQtZnVsbC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAudGl0bGUtY2hhcnQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU0Nzk5ODtcbiAgfVxuICBjYW52YXMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuIl19 */");

/***/ }),

/***/ 20565:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atk-dashboard/atk-dashboard.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<script src=\"https://cdn.amcharts.com/lib/4/core.js\"></script>\n<script src=\"https://cdn.amcharts.com/lib/4/maps.js\"></script>\n<script src=\"https://cdn.amcharts.com/lib/4/geodata/worldLow.js\"></script>\n<script src=\"https://cdn.amcharts.com/lib/4/geodata/data/countries2.js\"></script>\n<script src=\"https://cdn.amcharts.com/lib/4/themes/animated.js\"></script>\n\n<ion-content>\n\n    <div class=\"select-plan-container\">\n        <div class=\"select-button pointer\" (click)=\"selectedPlan('report')\">\n            <div class=\"button-content\">\n                <div class=\"text\">แผนที่รายงาน</div>\n            </div>\n            <div class=\"status-line\" [class.active]=\"plan == 'report'\"></div>\n        </div>\n        <div class=\"select-button pointer\" (click)=\"selectedPlan('table')\">\n            <div class=\"button-content\">\n                <div class=\"text\">ตารางรายงาน</div>\n            </div>\n            <div class=\"status-line\" [class.active]=\"plan == 'table'\"></div>\n        </div>\n    </div>\n\n    <div class=\"slides-container\">\n        <div class=\"slide-area\" [class.index1]=\"plan == 'table'\">\n\n            <div #report class=\"slide\">\n\n                <div style=\"font-weight: 500; font-size: 20px; color: #547998;\">รายงานการคัดกรองบุคลากรตรวจ ATK</div>\n\n                <div class=\"select-data-type-container\">\n                    <div class=\"text\">เลือก</div>\n                    <ion-select [(ngModel)]=\"dataType\" (ionChange)=\"onChangeDataType()\">\n                        <ion-select-option value=\"all\">ความครอบคลุมการตรวจ ATK ในบุคลากรทางการแพทย์รายจังหวัด\n                        </ion-select-option>\n                        <ion-select-option value=\"positive\">ร้อยละของ ATK positive ในบุคลากรทางการแพทย์รายจังหวัด\n                        </ion-select-option>\n                    </ion-select>\n                </div>\n\n\n                <div class=\"select-container\">\n                    <div class=\"key\">เลือก</div>\n                    <!-- <div class=\"select-box pointer\">\n            <div class=\"text\">เลือกปี</div>\n            <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div>\n        <div class=\"select-box pointer\">\n            <div class=\"text\">เลือกเดือน</div>\n            <ion-icon name=\"caret-down-outline\"></ion-icon>\n        </div> -->\n                    <div class=\"select-box pointer\" (click)=\"clickSelectDay()\">\n                        <div class=\"text\">Day {{ mapDay }}</div>\n                        <ion-icon name=\"caret-down-outline\"></ion-icon>\n                    </div>\n                </div>\n                <div class=\"maps-container\">\n                    <div class=\"map-area\">\n                        <div id=\"chartMap\" style=\"width: 100%; height: 100%;\"></div>\n                        <div class=\"detail-map\" [class.detail-map2]=\"!showMapContent\" *ngIf=\"plan=='report'\">\n                            <div class=\"title\">คำอธิบายสี</div>\n                            <div class=\"detail-container\">\n                                <div class=\"key\" style=\"border: 1px solid #547998; background: #ffffff;\"></div>\n                                <div class=\"value\">ไม่มีการตรวจ</div>\n                            </div>\n                            <div class=\"detail-container\">\n                                <div class=\"key\" style=\"background: #C2E9FF;\"></div>\n                                <div *ngIf=\"dataType == 'all'\" class=\"value\">1-24%</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"value\">0.1-1.9%</div>\n                            </div>\n                            <div class=\"detail-container\">\n                                <div class=\"key\" style=\"background: #6AC9FF;\"></div>\n                                <div *ngIf=\"dataType == 'all'\" class=\"value\">25-49%</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"value\">2.0-4.9%</div>\n                            </div>\n                            <div class=\"detail-container\">\n                                <div class=\"key\" style=\"background: #0084FE;\"></div>\n                                <div *ngIf=\"dataType == 'all'\" class=\"value\">50-74%</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"value\">5.0-9.9%</div>\n                            </div>\n                            <div class=\"detail-container\">\n                                <div class=\"key\" style=\"background: #0C30B9;\"></div>\n                                <div *ngIf=\"dataType == 'all'\" class=\"value\">75% ขึ้นไป</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"value\">10% ขึ้นไป</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"width: 15px;\"></div>\n                    <div *ngIf=\"!showMapContent\" class=\"show-map-content-button\" (click)=\"showMapContentButton(true)\">\n                        <ion-icon name=\"arrow-back\"></ion-icon>\n                    </div>\n                    <div class=\"map-content\" [class.hide-map-content]=\"!showMapContent\">\n                        <div class=\"show-map-content-button\" (click)=\"showMapContentButton(false)\"\n                            style=\"margin-bottom: 10px;\">\n                            <ion-icon name=\"arrow-forward\"></ion-icon>\n                        </div>\n                        <div class=\"text-header\">เลือกพื้นที่</div>\n                        <div class=\"select-container\">\n                            <div class=\"select-box pointer\" style=\"width: 100%; margin-left: 0;\"\n                                (click)=\"clickSelectProvince()\">\n                                <div class=\"text\">{{ mapProvinceName }}</div>\n                                <ion-icon name=\"caret-down-outline\"></ion-icon>\n                            </div>\n                        </div>\n                        <div class=\"text-header\" style=\"margin-top: 20px;\">จำนวนบุคลากรแต่ละกลุ่มเสี่ยง</div>\n\n                        <div class=\"display-percent-container\">\n                            <div class=\"card\">\n                                <div *ngIf=\"dataType == 'all'\" class=\"key\">High risk</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"key\">High risk and Positive</div>\n                                <div class=\"percent\">{{ high_positive_percent }}</div>\n                                <div class=\"line\"></div>\n                                <div class=\"amount-container\">\n                                    <img src=\"./assets/map/person-icon-red.svg\">\n                                    <div class=\"text\">{{ high_positive_amount }}</div>\n                                </div>\n                            </div>\n                            <div style=\"width: 20px;\"></div>\n                            <div class=\"card\">\n                                <div *ngIf=\"dataType == 'all'\" class=\"key\">Low risk</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"key\">Low risk and Positive</div>\n                                <div class=\"percent\">{{ low_positive_percent }}</div>\n                                <div class=\"line\"></div>\n                                <div class=\"amount-container\">\n                                    <img src=\"./assets/map/person-icon-sky.svg\">\n                                    <div class=\"text\">{{ low_positive_amount }}</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"display-percent-container\">\n                            <div class=\"card\">\n                                <div *ngIf=\"dataType == 'all'\" class=\"key\">HCW1</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"key\">HCW1 and Positive</div>\n                                <div class=\"percent\">{{ hcw1_percent }}</div>\n                                <div class=\"line\"></div>\n                                <div class=\"amount-container\">\n                                    <img src=\"./assets/map/person-icon-blue.svg\">\n                                    <div class=\"text\">{{ hcw1_amount }}</div>\n                                </div>\n                            </div>\n                            <div style=\"width: 20px;\"></div>\n                            <div class=\"card\">\n                                <div *ngIf=\"dataType == 'all'\" class=\"key\">HCW2</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"key\">HCW2 and Positive</div>\n                                <div class=\"percent\">{{ hcw2_percent }}</div>\n                                <div class=\"line\"></div>\n                                <div class=\"amount-container\">\n                                    <img src=\"./assets/map/person-icon-blue.svg\">\n                                    <div class=\"text\">{{ hcw2_amount }}</div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"chart-container\">\n                            <div class=\"chart\" style=\"margin-right: 5px;\">\n                                <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">ประเภทของ HCW1</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">ประเภทของ HCW1 and Positive\n                                </div>\n                                <canvas #chartHCW1 height=\"150\"></canvas>\n                            </div>\n                            <div class=\"chart\" style=\"margin-left: 5px;\">\n                                <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">ประเภทของ HCW2</div>\n                                <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">ประเภทของ HCW2 and Positive\n                                </div>\n                                <canvas #chartHCW2 height=\"150\"></canvas>\n                            </div>\n                        </div>\n\n                        <div class=\"chart-full-container\" [hidden]=\"mapProvinceId != 'all'\">\n                            <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">5 จังหวัดที่พบ % การตรวจ ATK มากที่สุด\n                            </div>\n                            <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">5 จังหวัดที่พบ % ATK Positive\n                                มากที่สุด</div>\n                            <canvas #chartTop5Province height=\"150\"></canvas>\n                        </div>\n\n                        <div class=\"chart-full-container\">\n                            <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">5 โรงพยาบาลที่พบ % การตรวจ ATK มากที่สุด\n                            </div>\n                            <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">5 โรงพยาบาลที่พบ % ATK Positive\n                                มากที่สุด</div>\n                            <canvas #chartTop5Hospital height=\"150\"></canvas>\n                        </div>\n\n                        <div class=\"chart-full-container\">\n                            <div *ngIf=\"dataType == 'all'\" class=\"title-chart\">5 แผนกที่พบ % การตรวจ ATK มากที่สุด</div>\n                            <div *ngIf=\"dataType == 'positive'\" class=\"title-chart\">5 แผนกที่พบ % ATK Positive มากที่สุด\n                            </div>\n                            <canvas #chartTop5Department height=\"150\"></canvas>\n                        </div>\n\n\n                    </div>\n                </div>\n\n\n            </div>\n\n            <div #table class=\"slide\">\n\n                <div class=\"head-bar-container\">\n                    <div class=\"text\">รายงานการคัดกรองบุคลากรตรวจ ATK</div>\n                    <div class=\"export-button pointer\" *ngIf=\"false\">Export Excel</div>\n                </div>\n\n                <!-- <div class=\"head-sub\">โรงพยาบาลมหาวิทยาลัยนเรศวร จังหวัดพิษณุโลก</div> -->\n\n\n                <div class=\"select-row-container\">\n                    <div class=\"text\">เลือกการแสดงผล</div>\n                    <ion-select [(ngModel)]=\"maxRow\" (ionChange)=\"rowSelected()\">\n                        <ion-select-option value=1>1 รายชื่อ</ion-select-option>\n                        <ion-select-option value=2>2 รายชื่อ</ion-select-option>\n                        <ion-select-option value=3>3 รายชื่อ</ion-select-option>\n                        <ion-select-option value=5>5 รายชื่อ</ion-select-option>\n                        <ion-select-option value=10>10 รายชื่อ</ion-select-option>\n                    </ion-select>\n                </div>\n\n                <div class=\"table-container\" *ngFor=\"let item of listShow\">\n                    <div class=\"table-area\">\n                        <div class=\"head-table\">\n                            <div class=\"col\" style=\"width: 240px;\">บุคลากร</div>\n                            <div style=\"width: 2px; height: 52px; background: #E3F1FF;\"></div>\n                            <div class=\"col\" style=\"flex: 1;\">Day 0</div>\n                            <div style=\"width: 2px; height: 52px; background: #E3F1FF;\"></div>\n                            <div class=\"col\" style=\"flex: 1;\">Day 7</div>\n                            <div style=\"width: 2px; height: 52px; background: #E3F1FF;\"></div>\n                            <div class=\"col\" style=\"flex: 1;\">Day 14</div>\n                            <div style=\"width: 2px; height: 52px; background: #E3F1FF;\"></div>\n                            <div class=\"col\" style=\"flex: 1;\">Day 21</div>\n                            <div style=\"width: 2px; height: 52px; background: #E3F1FF;\"></div>\n                            <div class=\"col\" style=\"flex: 1;\">Day 28</div>\n                        </div>\n                        <div class=\"content-table\">\n                            <div class=\"col\"\n                                style=\"width: 240px; height: 100%; padding: 20px 10px 15px 10px; display: flex; flex-direction: column; justify-content: space-between;\">\n                                <div class=\"detail-container-img\">\n                                    <img class=\"img\" src=\"./assets/icon/person-circle.svg\">\n                                    <div class=\"text\">{{ item['information']['pname'] + item['information']['fname'] + '\n                                        ' + item['information']['lname'] }}</div>\n                                </div>\n                                <div class=\"detail-container\">\n                                    <div class=\"key\">อายุ</div>\n                                    <div class=\"value\">{{ item['information']['age'] }}</div>\n                                </div>\n                                <div class=\"detail-container\">\n                                    <div class=\"key\">เพศ</div>\n                                    <div class=\"value\" *ngIf=\"item['information']['gender'] == 'male'\">ชาย</div>\n                                    <div class=\"value\" *ngIf=\"item['information']['gender'] == 'female'\">หญิง</div>\n                                </div>\n                                <div class=\"detail-container\">\n                                    <div class=\"key\">ประเภท</div>\n                                    <div class=\"value\" *ngIf=\"item['personal_type']['hcw1']['is_check']\">HCW 1</div>\n                                    <div class=\"value\" *ngIf=\"item['personal_type']['hcw2']['is_check']\">HCW 2</div>\n                                </div>\n                                <div class=\"detail-container-img\">\n                                    <img class=\"img\" src=\"./assets/icon/card.svg\">\n                                    <div class=\"text\">{{ item['information']['pid'] }}</div>\n                                </div>\n\n                                <div style=\"flex: 1;\"></div>\n                                <!-- <div class=\"detail-button-container\">\n                                    <div class=\"text\" style=\"color: #FF8C85;\">High Risk</div>\n                                    <div class=\"text\" style=\"color: #36C0AD;\">Negative</div>\n                                </div> -->\n                            </div>\n                            <div *ngFor=\"let alert of item['result']['alert_list']\"\n                                style=\"display: flex; flex: 1; height: 100%;\">\n                                <!-- display -->\n                                <div *ngIf=\"alert['display'] != 'none'\"\n                                    style=\"width: 2px; height: 245px; background: #E3F1FF; margin-top: 10px;\"></div>\n                                <div *ngIf=\"alert['display'] != 'none'\" class=\"col\"\n                                    style=\"flex: 1; padding: 20px 0px 15px 0px; display: flex; flex-direction: column; justify-content: space-between;\">\n                                    <div class=\"status-container\">\n                                        <div class=\"status\" *ngIf=\"alert['risk_screened']\">\n                                            <img src=\"./assets/atk-status/assessment-green.svg\">\n                                            <div class=\"text\">ประเมินแล้ว</div>\n                                        </div>\n                                        <div class=\"status\" *ngIf=\"!alert['risk_screened']\">\n                                            <img src=\"./assets/atk-status/assessment-gray.svg\">\n                                            <div class=\"text\">ยังไม่ประเมิน</div>\n                                        </div>\n                                        <div class=\"status\" *ngIf=\"!alert['risk_screened']\">\n                                            <img src=\"./assets/atk-status/risk-gray.svg\">\n                                            <div class=\"text\">รอการประเมิน</div>\n                                        </div>\n                                        <div class=\"status\" *ngIf=\"alert['risk_level'] == 'low_risk'\">\n                                            <img src=\"./assets/atk-status/risk-green.svg\">\n                                            <div class=\"text\">Low Risk</div>\n                                        </div>\n                                        <div class=\"status\" *ngIf=\"alert['risk_level'] == 'high_risk'\">\n                                            <img src=\"./assets/atk-status/risk-red.svg\">\n                                            <div class=\"text\">High Risk</div>\n                                        </div>\n                                        <div class=\"status\" *ngIf=\"!alert['atk_screened'] && alert['require_atk']\">\n                                            <img src=\"./assets/atk-status/atk-gray.svg\">\n                                            <div class=\"text\">ยังไม่ได้ตรวจ</div>\n                                        </div>\n                                        <div class=\"status\"\n                                            *ngIf=\"alert['result'] == 'negative' && alert['require_atk']\">\n                                            <img src=\"./assets/atk-status/atk-green.svg\">\n                                            <div class=\"text\">ไม่พบเชื้อ</div>\n                                        </div>\n                                        <div class=\"status\"\n                                            *ngIf=\"alert['result'] == 'positive' && alert['require_atk']\">\n                                            <img src=\"./assets/atk-status/atk-red.svg\">\n                                            <div class=\"text\">พบเชื้อ</div>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"date-button-container\">\n                                        <div class=\"date\">{{ dateToTH(alert['date']) }}</div>\n                                        <div class=\"detail-button pointer\" (click)=\"detailButton(item, alert)\">\n                                            ดูรายละเอียด</div>\n                                    </div>\n                                </div>\n\n                                <!-- display none -->\n                                <div *ngIf=\"alert['display'] == 'none'\"\n                                    style=\"width: 2px; height: 245px; background: #E3F1FF; margin-top: 10px;\"></div>\n                                <div *ngIf=\"alert['display'] == 'none'\"\n                                    style=\"flex: 1; display: flex; align-items: center; justify-content: center; flex-direction: column;\">\n                                    <div class=\"none-text\">บุคลากรเข้ารับการรักษาใน</div>\n                                    <div class=\"none-text\">โรงพยาบาล</div>\n                                    <div class=\"none-text\">หรือกักตัว HI/ CI แล้ว</div>\n                                </div>\n                            </div>\n\n\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"pager-table\">\n                    <div class=\"container\">\n                        <div class=\"nav-pager\">\n                            <ion-icon name=\"chevron-back\" (click)=\"pagerClick('sub')\"></ion-icon>\n                        </div>\n                        <div class=\"num-pager\">{{ pageTable }}/{{ maxPage }}</div>\n                        <div class=\"nav-pager\">\n                            <ion-icon name=\"chevron-forward\" (click)=\"pagerClick('add')\"></ion-icon>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n\n\n\n</ion-content>\n\n<!-- selector -->\n<ion-select #yearSelector style=\"display: none;\">\n    <ion-select-option>-</ion-select-option>\n</ion-select>\n\n<ion-select #monthSelector style=\"display: none;\">\n    <ion-select-option>-</ion-select-option>\n</ion-select>\n\n<ion-select #daySelector style=\"display: none;\" [(ngModel)]=\"mapDay\" (ionChange)=\"selectedMapDay()\">\n    <ion-select-option value=\"0\">Day 0</ion-select-option>\n    <ion-select-option value=\"7\">Day 7</ion-select-option>\n    <ion-select-option value=\"14\">Day 14</ion-select-option>\n    <ion-select-option value=\"21\">Day 21</ion-select-option>\n    <ion-select-option value=\"28\">Day 28</ion-select-option>\n</ion-select>\n\n<ion-select #provinceSelector style=\"display: none;\" [(ngModel)]=\"mapProvinceId\" (ionChange)=\"selectedMapProvinceId()\">\n    <ion-select-option value=\"all\">ทั้งประเทศ</ion-select-option>\n    <ion-select-option *ngFor=\"let item of provinceList\" value=\"{{item['province_id']}}\">{{ item['province_thai'] }}\n    </ion-select-option>\n</ion-select>");

/***/ })

}]);
//# sourceMappingURL=src_app_atk-dashboard_atk-dashboard_module_ts.js.map