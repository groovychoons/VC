webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_request_request_component__ = __webpack_require__("../../../../../src/app/components/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_view_request_view_request_component__ = __webpack_require__("../../../../../src/app/components/view-request/view-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_explore_explore_component__ = __webpack_require__("../../../../../src/app/components/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_create_org_create_org_component__ = __webpack_require__("../../../../../src/app/components/create-org/create-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_view_org_view_org_component__ = __webpack_require__("../../../../../src/app/components/view-org/view-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_explore_org_explore_org_component__ = __webpack_require__("../../../../../src/app/components/explore-org/explore-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_view_user_view_user_component__ = __webpack_require__("../../../../../src/app/components/view-user/view-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_view_req_as_owner_view_req_as_owner_component__ = __webpack_require__("../../../../../src/app/components/view-req-as-owner/view-req-as-owner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_create_place_create_place_component__ = __webpack_require__("../../../../../src/app/components/create-place/create-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_view_place_view_place_component__ = __webpack_require__("../../../../../src/app/components/view-place/view-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_explore_places_explore_places_component__ = __webpack_require__("../../../../../src/app/components/explore-places/explore-places.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'explore', component: __WEBPACK_IMPORTED_MODULE_10__components_explore_explore_component__["a" /* ExploreComponent */] },
    { path: 'organisations', component: __WEBPACK_IMPORTED_MODULE_13__components_explore_org_explore_org_component__["a" /* ExploreOrgComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'request', component: __WEBPACK_IMPORTED_MODULE_8__components_request_request_component__["a" /* RequestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'request/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_view_request_view_request_component__["a" /* ViewRequestComponent */] },
    { path: 'request/admin/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_view_req_as_owner_view_req_as_owner_component__["a" /* ViewReqAsOwnerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'organisation/add', component: __WEBPACK_IMPORTED_MODULE_11__components_create_org_create_org_component__["a" /* CreateOrgComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'organisation/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_view_org_view_org_component__["a" /* ViewOrgComponent */] },
    { path: 'place/add', component: __WEBPACK_IMPORTED_MODULE_16__components_create_place_create_place_component__["a" /* CreatePlaceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'places', component: __WEBPACK_IMPORTED_MODULE_18__components_explore_places_explore_places_component__["a" /* ExplorePlacesComponent */] },
    { path: 'place/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_view_place_view_place_component__["a" /* ViewPlaceComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_view_user_view_user_component__["a" /* ViewUserComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<br><br>\n\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        // API Key: AIzaSyBxGnabLzD3YRZK4KbUvDkJXeGgmvYUltg
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_slider_slider_component__ = __webpack_require__("../../../../../src/app/components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_request_request_component__ = __webpack_require__("../../../../../src/app/components/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_view_request_view_request_component__ = __webpack_require__("../../../../../src/app/components/view-request/view-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_twitter_service__ = __webpack_require__("../../../../../src/app/services/twitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_map_map_component__ = __webpack_require__("../../../../../src/app/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_search_map_search_map_component__ = __webpack_require__("../../../../../src/app/components/search-map/search-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_explore_explore_component__ = __webpack_require__("../../../../../src/app/components/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_cardbyuser_cardbyuser_component__ = __webpack_require__("../../../../../src/app/components/cardbyuser/cardbyuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_create_org_create_org_component__ = __webpack_require__("../../../../../src/app/components/create-org/create-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_view_org_view_org_component__ = __webpack_require__("../../../../../src/app/components/view-org/view-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_explore_org_explore_org_component__ = __webpack_require__("../../../../../src/app/components/explore-org/explore-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_card_org_card_org_component__ = __webpack_require__("../../../../../src/app/components/card-org/card-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_card_by_team_card_by_team_component__ = __webpack_require__("../../../../../src/app/components/card-by-team/card-by-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_view_user_view_user_component__ = __webpack_require__("../../../../../src/app/components/view-user/view-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_view_req_as_owner_view_req_as_owner_component__ = __webpack_require__("../../../../../src/app/components/view-req-as-owner/view-req-as-owner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_explore_places_explore_places_component__ = __webpack_require__("../../../../../src/app/components/explore-places/explore-places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_card_place_card_place_component__ = __webpack_require__("../../../../../src/app/components/card-place/card-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_create_place_create_place_component__ = __webpack_require__("../../../../../src/app/components/create-place/create-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_view_place_view_place_component__ = __webpack_require__("../../../../../src/app/components/view-place/view-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_feedback_feedback_component__ = __webpack_require__("../../../../../src/app/components/feedback/feedback.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_request_request_component__["a" /* RequestComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_view_request_view_request_component__["a" /* ViewRequestComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_search_map_search_map_component__["a" /* SearchMapComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_explore_explore_component__["a" /* ExploreComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_cardbyuser_cardbyuser_component__["a" /* CardbyuserComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_create_org_create_org_component__["a" /* CreateOrgComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_view_org_view_org_component__["a" /* ViewOrgComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_explore_org_explore_org_component__["a" /* ExploreOrgComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_card_org_card_org_component__["a" /* CardOrgComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_card_by_team_card_by_team_component__["a" /* CardByTeamComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_view_user_view_user_component__["a" /* ViewUserComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_view_req_as_owner_view_req_as_owner_component__["a" /* ViewReqAsOwnerComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_explore_places_explore_places_component__["a" /* ExplorePlacesComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_card_place_card_place_component__["a" /* CardPlaceComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_create_place_create_place_component__["a" /* CreatePlaceComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_view_place_view_place_component__["a" /* ViewPlaceComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_feedback_feedback_component__["a" /* FeedbackComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_24_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBxGnabLzD3YRZK4KbUvDkJXeGgmvYUltg',
                libraries: ["places"]
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_19__services_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_20__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_23__services_twitter_service__["a" /* TwitterService */],
            __WEBPACK_IMPORTED_MODULE_21__services_place_service__["a" /* PlaceService */],
            __WEBPACK_IMPORTED_MODULE_22__services_feedback_service__["a" /* FeedbackService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-by-team/card-by-team.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let card of requests\" [routerLink]=\"['/request', card.id]\" style=\"width: 15rem;\">\n    <img class=\"card-img-top img-fluid\" src=\"../assets/icons/027-info.png\" alt=\"Card image cap\">\n    \n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ card.title }}</h4>\n      <p class=\"card-text\">{{ card.description | slice:0:75 }}...</p>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Location: {{ card.location | slice:0:30 }}..</small>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/card-by-team/card-by-team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 1;\n            column-count: 1; } }\n\n@media (min-width: 608px) {\n  .card-columns {\n    -webkit-column-count: 1;\n            column-count: 1; } }\n\n.card-columns {\n  margin: 20px !important;\n  float: left; }\n\n.card-img-top {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 15%;\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-by-team/card-by-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardByTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardByTeamComponent = (function () {
    function CardByTeamComponent(requestService, router, route) {
        this.requestService = requestService;
        this.router = router;
        this.route = route;
    }
    CardByTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.getTeamRequests(this.id);
    };
    CardByTeamComponent.prototype.getTeamRequests = function (id) {
        var _this = this;
        this.requestService.viewRequestsByTeam(id).subscribe(function (result) {
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return CardByTeamComponent;
}());
CardByTeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-by-team',
        template: __webpack_require__("../../../../../src/app/components/card-by-team/card-by-team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-by-team/card-by-team.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], CardByTeamComponent);

var _a, _b, _c;
//# sourceMappingURL=card-by-team.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-org/card-org.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let card of requests\" [routerLink]=\"['/organisation', card.id]\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ card.name }}</h4>\n      <p class=\"card-text\">{{ card.description | slice:0:75 }}...</p>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Location: {{ card.base_location | slice:0:50 }}..</small>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/card-org/card-org.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 2;\n            column-count: 2; } }\n\n@media (min-width: 608px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n.card-columns {\n  margin: 20px !important;\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-org/card-org.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardOrgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardOrgComponent = (function () {
    function CardOrgComponent(teamService, router) {
        this.teamService = teamService;
        this.router = router;
    }
    CardOrgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.viewTeams().subscribe(function (result) {
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return CardOrgComponent;
}());
CardOrgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-org',
        template: __webpack_require__("../../../../../src/app/components/card-org/card-org.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-org/card-org.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CardOrgComponent);

var _a, _b;
//# sourceMappingURL=card-org.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-place/card-place.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let card of requests\" [routerLink]=\"['/place', card.id]\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ card.name }}</h4>\n      <p class=\"card-text\">{{ card.description | slice:0:75 }}...</p>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Location: {{ card.location | slice:0:50 }}..</small>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/card-place/card-place.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 2;\n            column-count: 2; } }\n\n@media (min-width: 608px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n.card-columns {\n  margin: 20px !important;\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-place/card-place.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPlaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardPlaceComponent = (function () {
    function CardPlaceComponent(placeService, router) {
        this.placeService = placeService;
        this.router = router;
    }
    CardPlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placeService.viewPlaces().subscribe(function (result) {
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return CardPlaceComponent;
}());
CardPlaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-place',
        template: __webpack_require__("../../../../../src/app/components/card-place/card-place.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-place/card-place.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_place_service__["a" /* PlaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_place_service__["a" /* PlaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CardPlaceComponent);

var _a, _b;
//# sourceMappingURL=card-place.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let card of requests\" [routerLink]=\"['/request', card.id]\">\n    <img class=\"card-img-top img-fluid\" src=\"../assets/icons/027-info.png\" alt=\"Card image cap\">\n    \n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ card.title }}</h4>\n      <p class=\"card-text\">{{ card.description | slice:0:75 }}...</p>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Location: {{ card.location | slice:0:30 }}..</small>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 2;\n            column-count: 2;\n    width: 50%; } }\n\n@media (min-width: 608px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3;\n    width: 50%; } }\n\n.card-columns {\n  margin: 20px !important;\n  float: left; }\n\n.card-img-top {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20%;\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = (function () {
    function CardComponent(requestService, router) {
        this.requestService = requestService;
        this.router = router;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewRequests().subscribe(function (result) {
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return CardComponent;
}());
CardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/components/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card/card.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CardComponent);

var _a, _b;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cardbyuser/cardbyuser.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let card of requests\" [routerLink]=\"['/request/admin', card.id]\">\n    <img class=\"card-img-top img-fluid\" src=\"../assets/icons/027-info.png\" alt=\"Card image cap\">\n    \n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ card.title }}</h4>\n      <p class=\"card-text\">{{ card.description | slice:0:75 }}...</p>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Location: {{ card.location | slice:0:30 }}..</small>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/cardbyuser/cardbyuser.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 2;\n            column-count: 2; } }\n\n@media (min-width: 608px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3; } }\n\n.card-columns {\n  margin: 20px !important;\n  float: left; }\n\n.card-img-top {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 15%;\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cardbyuser/cardbyuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardbyuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardbyuserComponent = (function () {
    function CardbyuserComponent(requestService, router) {
        this.requestService = requestService;
        this.router = router;
    }
    CardbyuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewRequestsByUser().subscribe(function (result) {
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return CardbyuserComponent;
}());
CardbyuserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cardbyuser',
        template: __webpack_require__("../../../../../src/app/components/cardbyuser/cardbyuser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cardbyuser/cardbyuser.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CardbyuserComponent);

var _a, _b;
//# sourceMappingURL=cardbyuser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-org/create-org.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-org/create-org.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page-header\">Add an Organisation</h2>\n<form (submit)=\"onTeamSubmit()\">\n  <div class=\"form-group\">\n    <label>Organisation Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Location</label>\n    <app-search-map></app-search-map>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Website</label>\n    <input type=\"text\" [(ngModel)]=\"website\" name=\"website\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Twitter Handle</label>\n    <input type=\"text\" [(ngModel)]=\"twitter\" name=\"twitter\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Facebook URL</label>\n    <input type=\"text\" [(ngModel)]=\"facebook\" name=\"facebook\" class=\"form-control\" >\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/create-org/create-org.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_map_search_map_component__ = __webpack_require__("../../../../../src/app/components/search-map/search-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateOrgComponent = (function () {
    function CreateOrgComponent(flashMessage, teamService, router) {
        this.flashMessage = flashMessage;
        this.teamService = teamService;
        this.router = router;
    }
    CreateOrgComponent.prototype.ngOnInit = function () {
    };
    CreateOrgComponent.prototype.onTeamSubmit = function () {
        var _this = this;
        var team = {
            name: this.name,
            description: this.description,
            base_location: this.mapsearch.address,
            latitude: this.mapsearch.latitude,
            longitude: this.mapsearch.longitude,
            website: this.website,
            twitter: this.twitter,
            facebook: this.facebook
        };
        // Add organisation
        this.teamService.addTeam(team).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your organisation has been added.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return CreateOrgComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__search_map_search_map_component__["a" /* SearchMapComponent */]),
    __metadata("design:type", Object)
], CreateOrgComponent.prototype, "mapsearch", void 0);
CreateOrgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-org',
        template: __webpack_require__("../../../../../src/app/components/create-org/create-org.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-org/create-org.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CreateOrgComponent);

var _a, _b, _c;
//# sourceMappingURL=create-org.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-place/create-place.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-place/create-place.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page-header\">Add an Place</h2>\n<form (submit)=\"onPlaceSubmit()\">\n  <div class=\"form-group\">\n    <label>Place Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Location</label>\n    <app-search-map></app-search-map>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/create-place/create-place.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePlaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_map_search_map_component__ = __webpack_require__("../../../../../src/app/components/search-map/search-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePlaceComponent = (function () {
    function CreatePlaceComponent(flashMessage, placeService, router) {
        this.flashMessage = flashMessage;
        this.placeService = placeService;
        this.router = router;
    }
    CreatePlaceComponent.prototype.ngOnInit = function () {
    };
    CreatePlaceComponent.prototype.onPlaceSubmit = function () {
        var _this = this;
        var place = {
            name: this.name,
            description: this.description,
            location: this.mapsearch.address,
            latitude: this.mapsearch.latitude,
            longitude: this.mapsearch.longitude,
        };
        // Add place
        this.placeService.addPlace(place).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your place has been added.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return CreatePlaceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__search_map_search_map_component__["a" /* SearchMapComponent */]),
    __metadata("design:type", Object)
], CreatePlaceComponent.prototype, "mapsearch", void 0);
CreatePlaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-place',
        template: __webpack_require__("../../../../../src/app/components/create-place/create-place.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-place/create-place.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_place_service__["a" /* PlaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_place_service__["a" /* PlaceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CreatePlaceComponent);

var _a, _b, _c;
//# sourceMappingURL=create-place.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.explore-options {\n\twidth: 100%;\n}\n\n.left {\n\twidth:50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n\t\t<a [routerLink]=\"['/explore']\"><img class=\"explore-options\" src=\"../assets/dashboard-requests.jpg\" alt=\"Latest Requests\"></a>\n    </div>\n    <div class=\"col-sm\">\n\t\t<a [routerLink]=\"['/places']\"><img class=\"explore-options\" src=\"../assets/dashboard-places.jpg\" alt=\"Explore Places\"></a>\n    </div>\n    <div class=\"col-sm\">\n\t\t<a [routerLink]=\"['/organisations']\"><img class=\"explore-options\" src=\"../assets/dashboard-organisations.jpg\" alt=\"Explore Organisations\"></a>\n    </div>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"row\">\n\n  <div class=\"column left\">\n    <h2>Requests for your skills</h2>\n      \n      Put this section in.\n      <br>\n    - Latest requests?\n    <br><br>\n\n\n    <h2>News / updates</h2>\n\n    - Links to blogs / info pages\n    <br><br>\n    <h3>Important Links</h3>\n    <a [routerLink]=\"['/request']\">Post a Request</a>\n    <br>\n    <a [routerLink]=\"['/organisation/add']\">Create an organisation</a>\n    <br>\n    <a [routerLink]=\"['/place/add']\">Add a place</a>\n\n  </div>\n\n  <div class=\"column right\">\n    <h2>Twitter Feed</h2>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/explore-org/explore-org.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.left-box {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\ttext-align: left;\n}\n\n.right-box {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\ttext-align: right;\n}\n\n.line {\n\tmargin-top: 10px;\n}\n\n.search-box {\n\tfloat: right;\n\tpadding: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/explore-org/explore-org.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n\n<div class=\"left-box\">\n\t<h2 class=\"page-header\">Explore Organisations</h2>\n\t<p>Find the team you're looking for.</p>\n</div>\n<div class=\"right-box\">\n\t<button type=\"button\" class=\"btn-sm btn-outline-primary\" [routerLink]=\"['/organisation/add']\">Create an organisation</button>\n    <p></p>\n    <div class=\"col-lg-8 input-group search-box\">\n\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchParams\" name=\"searchParams\" placeholder=\"Search for...\">\n      <span class=\"input-group-btn\">\n        <button value=\"Submit\" class=\"btn btn-secondary\" type=\"submit\" (click)=\"doSearch()\"> <i class=\"fa fa-search\"></i></button>\n      </span>\n\n  </div>\n</div>\n\n</div>\n\n<hr class=\"line\">\n\n<app-card-org></app-card-org>"

/***/ }),

/***/ "../../../../../src/app/components/explore-org/explore-org.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreOrgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExploreOrgComponent = (function () {
    function ExploreOrgComponent() {
    }
    ExploreOrgComponent.prototype.ngOnInit = function () {
    };
    return ExploreOrgComponent;
}());
ExploreOrgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-explore-org',
        template: __webpack_require__("../../../../../src/app/components/explore-org/explore-org.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/explore-org/explore-org.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExploreOrgComponent);

//# sourceMappingURL=explore-org.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/explore-places/explore-places.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.left-box {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\ttext-align: left;\n}\n\n.right-box {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\ttext-align: right;\n}\n\n.line {\n\tmargin-top: 10px;\n}\n\n.search-box {\n\tfloat: right;\n\tpadding: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/explore-places/explore-places.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n\n<div class=\"left-box\">\n\t<h2 class=\"page-header\">Explore Places</h2>\n\t<p>View important locations and camps across the globe.</p>\n</div>\n<div class=\"right-box\">\n\t<button type=\"button\" class=\"btn-sm btn-outline-primary\" [routerLink]=\"['/place/add']\">Add a place</button>\n    <p></p>\n    <div class=\"col-lg-8 input-group search-box\">\n\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchParams\" name=\"searchParams\" placeholder=\"Search for...\">\n      <span class=\"input-group-btn\">\n        <button value=\"Submit\" class=\"btn btn-secondary\" type=\"submit\" (click)=\"doSearch()\"> <i class=\"fa fa-search\"></i></button>\n      </span>\n\n  </div>\n</div>\n\n</div>\n\n<hr class=\"line\">\n\n<app-card-place></app-card-place>"

/***/ }),

/***/ "../../../../../src/app/components/explore-places/explore-places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExplorePlacesComponent = (function () {
    function ExplorePlacesComponent() {
    }
    ExplorePlacesComponent.prototype.ngOnInit = function () {
    };
    return ExplorePlacesComponent;
}());
ExplorePlacesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-explore-places',
        template: __webpack_require__("../../../../../src/app/components/explore-places/explore-places.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/explore-places/explore-places.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExplorePlacesComponent);

//# sourceMappingURL=explore-places.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/explore/explore.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.left-box {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\ttext-align: left;\n}\n\n.right-box {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\ttext-align: right;\n}\n\n.content-box {\n\tmargin: 0px;\n\tpadding: 0px;\n\tdisplay: inline-block;\n}\n\n.line {\n\tmargin-top: 0px;\n}\n\n.search-box {\n\tfloat: right;\n\tpadding: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/explore/explore.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"top\">\n\n<div class=\"left-box\">\n\t<h2 class=\"page-header\">Explore</h2>\n\t<p>Find out where help is needed. Search and filter to find what you're looking for and where your skills are being requested.</p>\n</div>\n<div class=\"right-box\">\n\t<button type=\"button\" class=\"btn btn-outline-primary\" [routerLink]=\"['/request']\">Post a Request</button>\n    <p></p>\n    <div class=\"col-lg-8 input-group search-box\">\n\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchParams\" name=\"searchParams\" placeholder=\"Search for...\">\n      <span class=\"input-group-btn\">\n        <button value=\"Submit\" class=\"btn btn-secondary\" type=\"submit\" (click)=\"doSearch()\"> <i class=\"fa fa-search\"></i></button>\n      </span>\n\n  </div>\n</div>\n\n</div>\n\n<hr class=\"line\">\n\n<div class=\"container content-box\">\n\t<app-card></app-card>\n\t<app-map></app-map>\n</div>\n\n<!--\nSmall: 1 column >\n+1: 2 columns\n+1: 2 columns + map\n+1: 3 columns + map >\n\n-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/explore/explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExploreComponent = (function () {
    function ExploreComponent(requestService, route, router) {
        this.requestService = requestService;
        this.route = route;
        this.router = router;
    }
    ExploreComponent.prototype.ngOnInit = function () {
    };
    ExploreComponent.prototype.doSearch = function () {
        this.router.navigate(['/explore'], { queryParams: { title: this.searchParams } });
    };
    return ExploreComponent;
}());
ExploreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-explore',
        template: __webpack_require__("../../../../../src/app/components/explore/explore.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/explore/explore.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ExploreComponent);

var _a, _b, _c;
//# sourceMappingURL=explore.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/feedback/feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.comment {\n\tpadding: 12px 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n\n<div class=\"container\" *ngFor=\"let feedback of comments\">\n\t<div class=\"card\">\n\t\n\t\t<div class=\"card-body\">\n\t\t\t<p class=\"card-text comment\">{{ feedback.comment }}</p>\n\t\t</div>\n\n\t\t<div class=\"card-footer text-muted d-flex justify-content-between\">\n\t\t\tPosted by: {{ feedback.user_name }} at {{ feedback.date_created | date:'short' }}\n\t\t\t<button *ngIf=\"belongsToUser(feedback.user_id)\" (click)=\"onFeedbackDelete(feedback.id)\" type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\n\t\t</div>\n\t\t\n\t</div>\n\t<br>\n</div>\n\n<br>\n\n<form *ngIf=\"authService.loggedIn()\" (submit)=\"onFeedbackSubmit()\">\n\n  <div class=\"form-group\">\n    <textarea type=\"text\" placeholder=\"Leave feedback about your experience.\" [(ngModel)]=\"comment\" name=\"comment\" class=\"form-control\"></textarea>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n\n</form>\n\n<br>"

/***/ }),

/***/ "../../../../../src/app/components/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackComponent = (function () {
    function FeedbackComponent(feedbackService, flashMessage, authService, router) {
        this.feedbackService = feedbackService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.userId = this.authService.getUserId();
    }
    FeedbackComponent.prototype.ngOnChanges = function () {
        this.getData();
    };
    FeedbackComponent.prototype.getData = function () {
        var _this = this;
        if (this.page_type == "organisation") {
            this.feedbackService.viewFeedbackByTeam(this.page_id).subscribe(function (result) {
                _this.comments = result.data;
                console.log(_this.comments);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        if (this.page_type == "place") {
            this.feedbackService.viewFeedbackByPlace(this.page_id).subscribe(function (result) {
                _this.comments = result.data;
                console.log(_this.comments);
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    FeedbackComponent.prototype.belongsToUser = function (feedbackUserId) {
        if (feedbackUserId == this.userId) {
            return true;
        }
    };
    // Add comment
    FeedbackComponent.prototype.onFeedbackSubmit = function () {
        var _this = this;
        var feedback = {
            comment: this.comment,
            page_id: this.page_id,
            page_name: this.page_name
        };
        this.feedbackService.addComment(feedback).subscribe(function (data) {
            if (data.success) {
                _this.getData();
            }
            else {
                _this.flashMessage.show('We were unable to add your feedback.', { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    };
    // Delete comment
    FeedbackComponent.prototype.onFeedbackDelete = function (feedbackId) {
        var _this = this;
        this.feedbackService.deleteFeedback(feedbackId).subscribe(function (data) {
            if (data.success) {
                _this.getData();
            }
            else {
                _this.flashMessage.show('We were unable to delete your feedback.', { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    };
    return FeedbackComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FeedbackComponent.prototype, "page_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FeedbackComponent.prototype, "page_name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FeedbackComponent.prototype, "page_type", void 0);
FeedbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-feedback',
        template: __webpack_require__("../../../../../src/app/components/feedback/feedback.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/feedback/feedback.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_feedback_service__["a" /* FeedbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_feedback_service__["a" /* FeedbackService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], FeedbackComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.explore-options {\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n    <a [routerLink]=\"['/explore']\"><img class=\"explore-options\" src=\"../assets/dashboard-requests.jpg\" alt=\"Latest Requests\"></a>\n    </div>\n    <div class=\"col-sm\">\n    <a [routerLink]=\"['/places']\"><img class=\"explore-options\" src=\"../assets/dashboard-places.jpg\" alt=\"Explore Places\"></a>\n    </div>\n    <div class=\"col-sm\">\n    <a [routerLink]=\"['/organisations']\"><img class=\"explore-options\" src=\"../assets/dashboard-organisations.jpg\" alt=\"Explore Organisations\"></a>\n    </div>\n  </div>\n</div>\n\n<hr>\n<!--\n  <app-slider *ngIf=\"!authService.loggedIn()\"></app-slider>\n\n<div class=\"jumbotron text-center\">\n  <h1>VolunteerConnect</h1>\n  <p class=\"lead\">Welcome to my site!</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n-->\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Post Requests</h3>\n    <p>Let others know what you need and where you need it by posting a request for goods or services</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>News</h3>\n    <p>We'll bring you the latest stories, blog posts and updates related to the refugee crisis</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Places and People</h3>\n    <p>Search our site for profiles on organisations or places to help you get a better picture</p>\n  </div>\n</div>\n\n<h2>About us</h2>\netc.\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 2000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\nagm-map {\n  height: 600px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n  \t<agm-marker *ngFor=\"let request of requests\" [latitude]=\"request.latitude\" [longitude]=\"request.longitude\">\n  \t\t<agm-info-window>{{ request.title }}</agm-info-window>\n  \t</agm-marker>\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(requestService, router) {
        this.requestService = requestService;
        this.router = router;
        this.zoom = 4;
        this.lat = 49.4521;
        this.lng = 11.0767;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewRequests().subscribe(function (result) {
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/components/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n    </ul>\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/explore']\">Explore</a>\n      </li>\n    \n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Sign in</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Get started</a>\n      </li>\n      \n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{ user.f_name }} {{ user.l_name }}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Name: {{ user.f_name }}</li>\n    <li class=\"list-group-item\">Email: {{ user.email }}</li>\n  </ul>\n\t<br>\n  <a [routerLink]=\"['/organisation/add']\">Create an organisation</a>\n</div>\n\n<br>\n<br>\n\n<h4 class=\"page-header\">My Requests</h4>\n<div class=\"container\">\n\t<app-cardbyuser></app-cardbyuser>\n</div>\n\n\n<h4 class=\"page-header\">Delete Your Account</h4>\n<p>Please be sure you want to delete your account and all associated requests before you press this button.</p>\n<button (click)=\"onDelete()\" class=\"btn btn-primary\">Delete</button>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Delete Account
    ProfileComponent.prototype.onDelete = function () {
        var _this = this;
        this.authService.deleteUser().subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your account has been deleted', { cssClass: 'alert-success', timeout: 4000 });
                _this.authService.logout();
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>First Name</label>\n    <input type=\"text\" [(ngModel)]=\"f_name\" name=\"f_name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Last Name</label>\n    <input type=\"text\" [(ngModel)]=\"l_name\" name=\"l_name\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            f_name: this.f_name,
            l_name: this.l_name,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/request/request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/request/request.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page-header\">Add a Request</h2>\n<form (submit)=\"onRequestSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Posting request as:</label>\n    <select class=\"form-control\" [ngModel]=\"selectedAuthor\" (ngModelChange)=\"onChange($event)\" name=\"selectedAuthor\">\n      <option *ngFor=\"let m of authorOptions\" [ngValue]=\"m\">{{m.name}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Request For</label>\n    <input type=\"text\" [(ngModel)]=\"request_for\" name=\"request_for\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Location</label>\n    <app-search-map></app-search-map>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Urgency</label>\n    <select [(ngModel)]=\"urgency\" name=\"urgency\" class=\"form-control\">\n      <option *ngFor=\"let p of urgencies\" [ngValue]=\"p.name\">{{p.name}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Skills, Interests or Expertise Needed</label>\n    <select [(ngModel)]=\"expertise\" name=\"expertise\" class=\"form-control\">\n      <option *ngFor=\"let q of skills\" [ngValue]=\"q.name\">{{q.name}}</option>\n    </select>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/request/request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_map_search_map_component__ = __webpack_require__("../../../../../src/app/components/search-map/search-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestComponent = (function () {
    function RequestComponent(flashMessage, requestService, router, authService, teamService) {
        this.flashMessage = flashMessage;
        this.requestService = requestService;
        this.router = router;
        this.authService = authService;
        this.teamService = teamService;
        this.urgencies = [
            { name: "" },
            { name: "High" },
            { name: "Medium" },
            { name: "Low" }
        ];
        this.skills = [
            { name: "", image: "test" },
            { name: "Admin / Coordination" },
            { name: "Arts, Sports and Music" },
            { name: "Construction" },
            { name: "Cooking / Food" },
            { name: "Drivers License" },
            { name: "Education" },
            { name: "Environmental" },
            { name: "General Support" },
            { name: "Help from home" },
            { name: "Language / Translation" },
            { name: "Legal / Info" },
            { name: "Logistics and warehouses" },
            { name: "Medical and health care" },
            { name: "Search and rescue" },
            { name: "Tech and IT" },
            { name: "Work with kids" }
        ];
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile;
            _this.userName = _this.user.f_name + " " + _this.user.l_name;
            _this.userId = _this.user._id;
            _this.authorOptions = [
                { id: _this.userId, name: _this.userName, type: "user" }
            ];
            _this.selectedAuthor = _this.authorOptions[0];
        }, function (err) {
            console.log(err);
            return false;
        });
        this.teamService.viewTeamsByUser().subscribe(function (result) {
            _this.orgs = result;
            for (var _i = 0, _a = _this.orgs; _i < _a.length; _i++) {
                var org = _a[_i];
                _this.authorOptions.push({ id: org.id, name: org.name, type: "organisation" });
            }
            for (var _b = 0, _c = _this.authorOptions; _b < _c.length; _b++) {
                var org = _c[_b];
                console.log(org);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RequestComponent.prototype.onRequestSubmit = function () {
        var _this = this;
        var request = {
            title: this.title,
            request_for: this.request_for,
            description: this.description,
            location: this.mapsearch.address,
            latitude: this.mapsearch.latitude,
            longitude: this.mapsearch.longitude,
            urgency: this.urgency,
            expertise: this.expertise,
            author_id: this.selectedAuthor.id,
            author: this.selectedAuthor.name,
            author_type: this.selectedAuthor.type
        };
        // Add request
        this.requestService.addRequest(request).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your request has been submitted for approval.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/explore']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    RequestComponent.prototype.onChange = function (deviceValue) {
        console.log(this.selectedAuthor);
        this.selectedAuthor = deviceValue;
        console.log(this.selectedAuthor.id + this.selectedAuthor.name);
    };
    return RequestComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__search_map_search_map_component__["a" /* SearchMapComponent */]),
    __metadata("design:type", Object)
], RequestComponent.prototype, "mapsearch", void 0);
RequestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-request',
        template: __webpack_require__("../../../../../src/app/components/request/request.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/request/request.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_team_service__["a" /* TeamService */]) === "function" && _e || Object])
], RequestComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=request.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-map/search-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nagm-map {\n  height: 400px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-map/search-map.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"form-group\">\n    <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n  </div>\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search-map/search-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchMapComponent = (function () {
    function SearchMapComponent(flashMessage, requestService, router, mapsAPILoader, ngZone) {
        this.flashMessage = flashMessage;
        this.requestService = requestService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.onPlaceChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewRequests().subscribe(function (result) {
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 48.8566;
        this.longitude = 2.3522;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.address = place.formatted_address;
                    _this.zoom = 12;
                });
            });
        });
    };
    SearchMapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    SearchMapComponent.prototype.getCoords = function () {
        this.onPlaceChange.emit(this.latitude);
    };
    return SearchMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SearchMapComponent.prototype, "searchElementRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SearchMapComponent.prototype, "onPlaceChange", void 0);
SearchMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-map',
        template: __webpack_require__("../../../../../src/app/components/search-map/search-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-map/search-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object])
], SearchMapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=search-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/slider/MOCK_DATA.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOCK_SLIDER_DATA; });
var MOCK_SLIDER_DATA = {
    data: {
        active: [{
                title: 'Have a project?',
                subtitle: 'Start your journey today.',
                imgSrc: '/assets/slide-02.jpg'
            }, {
                title: 'Introducing Volunteer Connect',
                subtitle: 'The Platform For Change',
                imgSrc: '/assets/slide-01.jpg'
            }, {
                title: 'Less Costs, More Compassion',
                subtitle: 'We have no platform fees, and we never will.',
                imgSrc: '/assets/slide-00.jpg'
            }],
        buffer: [{
                title: 'Explore Today',
                subtitle: 'Find requests in Europe →',
                imgSrc: '/assets/slide-03.jpg'
            }]
    }
};
//# sourceMappingURL=MOCK_DATA.js.map

/***/ }),

/***/ "../../../../../src/app/components/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\n  <div *ngIf=\"active\" class=\"slider__slides\">\n\n    <div\n      *ngFor=\"let slide of active; let i = index;\"\n      (click)=\"onClick(i)\">\n      <div\n        class=\"slider__slide-image\"\n        [style.background-image]=\"'url(' + slide.imgSrc +')'\"\n        >\n        <div class=\"slider__slide-overlay\">\n          <div class=\"slider__slide-content\">\n            <h3 class=\"slider__slide-title\">{{ slide.title }}</h3>\n            <p class=\"slider__slide-subtitle\">{{ slide.subtitle }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/slider/slider.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* slider.component.scss */\n/* Slider */\n.slider {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  font-family: helvetica; }\n\n.slider > * {\n  box-sizing: border-box; }\n\n/* Slides */\n.slider__slides {\n  position: relative;\n  display: table;\n  width: 200%;\n  -webkit-transform: translateX(-35%);\n          transform: translateX(-35%);\n  overflow-x: scroll;\n  overflow-y: hidden; }\n\n/* Slide */\n.slider__slides > * {\n  position: relative;\n  display: table-cell;\n  width: 40%;\n  height: 350px;\n  transition: 0.2s all;\n  cursor: pointer; }\n\n.slider__slide-image {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: 0.2s all; }\n\n.slider__slide-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)); }\n\n.slider__slides > *:first-of-type .slider__slide-overlay {\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.2), white); }\n\n.slider__slides > *:last-of-type .slider__slide-overlay {\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.2), white); }\n\n.slider__slide-content {\n  display: block;\n  width: 60%;\n  padding: 2.5rem;\n  margin: auto;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  -webkit-transform: translateY(-40%);\n          transform: translateY(-40%);\n  text-align: center;\n  color: white;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.slider__slides > *:first-of-type .slider__slide-content,\n.slider__slides > *:last-of-type .slider__slide-content {\n  display: none; }\n\n.slider__slide-title {\n  font-size: 2.8rem;\n  font-weight: 100;\n  margin: 0px;\n  padding: 0px; }\n\n.slider__slide-subtitle {\n  font-size: 1.5rem;\n  font-weight: 200;\n  margin: 10px; }\n\n/* Slide Control */\n.slider__hidden-slide {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_service__ = __webpack_require__("../../../../../src/app/components/slider/slider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = (function () {
    function SliderComponent(sliderService) {
        this.sliderService = sliderService;
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.getActiveSlides();
        this.getBufferSlides();
    };
    SliderComponent.prototype.previous = function () {
        this.active.push(this.buffer.shift());
        this.buffer.push(this.active.shift());
    };
    SliderComponent.prototype.next = function () {
        this.active.unshift(this.buffer.pop());
        this.buffer.unshift(this.active.pop());
    };
    SliderComponent.prototype.getActiveSlides = function () {
        var _this = this;
        this.sliderService.getActiveSlides()
            .then(function (slides) { return _this.active = slides; }); //TODO: Handle errors
    };
    SliderComponent.prototype.getBufferSlides = function () {
        var _this = this;
        this.sliderService.getBufferSlides()
            .then(function (slides) { return _this.buffer = slides; }); //TODO: Handle errors
    };
    SliderComponent.prototype.onClick = function (slideIndex) {
        switch (slideIndex) {
            case 2:
                this.previous();
                break;
            case 0:
                this.next();
                break;
        }
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__("../../../../../src/app/components/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/slider/slider.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__slider_service__["a" /* SliderService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__slider_service__["a" /* SliderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__slider_service__["a" /* SliderService */]) === "function" && _a || Object])
], SliderComponent);

var _a;
//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/slider/slider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MOCK_DATA__ = __webpack_require__("../../../../../src/app/components/slider/MOCK_DATA.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderService = (function () {
    function SliderService() {
    }
    SliderService.prototype.getSlides = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__MOCK_DATA__["a" /* MOCK_SLIDER_DATA */]);
    };
    SliderService.prototype.getActiveSlides = function () {
        return this.getSlides()
            .then(function (slides) { return slides.data.active; })
            .catch(function (e) { return console.error(e); }); // TODO: Handle error
    };
    SliderService.prototype.getBufferSlides = function () {
        return this.getSlides()
            .then(function (slides) { return slides.data.buffer; })
            .catch(function (e) { return console.error(e); }); // TODO: Handle error
    };
    return SliderService;
}());
SliderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SliderService);

//# sourceMappingURL=slider.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-org/view-org.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-org/view-org.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/organisations']\">← Organisation List</a>\n\n<hr>\n\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-9\">\n        <div class=\"description\">\n            <h1 md-line>Organisation: {{ request.name }}</h1>\n             Group Admin: {{ request.admin_names }}\n             <br>\n            {{ request.description }}\n        </div>\n\n    <br>\n\n    <div class=\"updates\">\n        Website: {{ request.website }}\n        <br>\n        Twitter: {{ request.twitter }}\n        <br>\n        Facebook: {{ request.facebook }}\n    </div>\n\n    </div>\n    <div class=\"col-3\">\n        <app-card-by-team></app-card-by-team>\n    </div>\n\n</div>\n</div>\n\n<hr>\n\n<h1>Feedback</h1>\n\n<app-feedback [page_id]=\"id\" [page_name]=\"request.name\" [page_type]=\"page_type\"></app-feedback>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/view-org/view-org.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewOrgComponent = (function () {
    function ViewOrgComponent(teamService, flashMessage, route, router) {
        this.teamService = teamService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
        this.page_type = "organisation";
    }
    ViewOrgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.getTeam(this.id);
    };
    ViewOrgComponent.prototype.getTeam = function (id) {
        var _this = this;
        this.teamService.viewTeam(id).subscribe(function (result) {
            _this.request = result.request;
            console.log(_this.request);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ViewOrgComponent;
}());
ViewOrgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-org',
        template: __webpack_require__("../../../../../src/app/components/view-org/view-org.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/view-org/view-org.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_team_service__["a" /* TeamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ViewOrgComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-org.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-place/view-place.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-place/view-place.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/places']\">← Places List</a>\n\n<hr>\n\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-6\">\n        <h1 md-line>Place: {{ request.name }}</h1>\n        {{ request.description }}\n\n    <br>\n\n    </div>\n    <div class=\"col-6\">\n        <app-map></app-map>\n\n    </div>\n</div>\n</div>\n\n<hr>\n\n<h1>Feedback</h1>\n\n<app-feedback [page_id]=\"id\" [page_name]=\"request.name\" [page_type]=\"page_type\"></app-feedback>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/view-place/view-place.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPlaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewPlaceComponent = (function () {
    function ViewPlaceComponent(placeService, flashMessage, route, router) {
        this.placeService = placeService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
        this.page_type = "place";
    }
    ViewPlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.getPlace(this.id);
    };
    ViewPlaceComponent.prototype.getPlace = function (id) {
        var _this = this;
        this.placeService.viewPlace(id).subscribe(function (result) {
            _this.request = result.request;
            console.log(id);
            console.log(_this.request);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ViewPlaceComponent;
}());
ViewPlaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-place',
        template: __webpack_require__("../../../../../src/app/components/view-place/view-place.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/view-place/view-place.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_place_service__["a" /* PlaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_place_service__["a" /* PlaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ViewPlaceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-place.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-req-as-owner/view-req-as-owner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nform input.viewMode {\n  display: none;\n}\n\nform input.editMode {\n  display:auto;\n}\n\nform textarea.viewMode {\n  display: none;\n}\n\nform textarea.editMode {\n  display:auto;\n}\n\nform select.viewMode {\n  display:none;\n}\n\nform select.editMode {\n  display:auto;\n}\n\nform .displayValue.viewMode{\n  display:auto;\n}\n\nform .displayValue.editMode {\n  display:none;\n}\n\n\n.viewButton.viewMode {\n  display:auto;\n\n}\n\n.viewButton.editMode {\n  display:none;\n\n}\n\n.editButton.viewMode {\n  display:none;\n}\n\n.editButton.editMode {\n  display:auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-req-as-owner/view-req-as-owner.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/profile']\">← Profile</a>\n\n<hr>\n\n\n<button class=\"btn btn-secondary viewButton\" [ngClass]=\"pageMode\" (click)=\"editRequest()\">Edit</button>\n<button class=\"btn btn-secondary editButton\" [ngClass]=\"pageMode\" (click)=\"cancelEdit()\">Cancel</button>\n\n\n<button (click)=\"onDelete()\" class=\"btn btn-danger\">Delete</button>\n\n<br><br>\n\n<div class=\"container\">\n  \n    <form id=\"requestForm\" name=\"requestForm\"  method=\"post\" novalidate (ngSubmit)=\"saveRequest()\" #requestForm=\"ngForm\">\n      \t<h1>\n          <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\"  [ngClass]=\"pageMode\" [(ngModel)]=\"request.title\" required #title=\"ngModel\"/>\n          <span class=\"displayValue\" [ngClass]=\"pageMode\">{{ request.title }}</span>\n      \t</h1>\n        \n        Posted by: <a [routerLink]=\"['/', request.author_type, request.author_id]\">{{ request.author }}</a>\n        <br><br>   \n    \t<p>\n            <textarea type=\"text\" class=\"form-control\" id=\"description\" name=\"description\"  [ngClass]=\"pageMode\" [(ngModel)]=\"request.description\" required #title=\"ngModel\"></textarea>\n            <span class=\"displayValue\" [ngClass]=\"pageMode\">{{ request.description }}</span>\n        </p>\n    <br>\n\n        <h4 md-line> Request for: {{ request.request_for }}</h4>\n\n        <div class=\"updates\">\n            Location: {{ request.location }}\n            <br>\n            Expertise: {{ request.expertise }}\n            <br>\n            Urgency: {{ request.urgency }}\n        </div>\n        <br>\n\n        <button type=\"submit\" class=\"btn btn-primary editButton\" [ngClass]=\"pageMode\" form=\"requestForm\"  [disabled]=\"requestForm.invalid\">Save</button>\n\n  </form> \n  \n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/view-req-as-owner/view-req-as-owner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewReqAsOwnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewReqAsOwnerComponent = (function () {
    function ViewReqAsOwnerComponent(requestService, flashMessage, route, router) {
        this.requestService = requestService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
    }
    ViewReqAsOwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageMode = "viewMode";
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.getRequest(this.id);
        this.requestPrior = new Object();
    };
    ViewReqAsOwnerComponent.prototype.getRequest = function (id) {
        var _this = this;
        this.requestService.viewRequest(id).subscribe(function (result) {
            _this.request = result.request;
            _this.requestPrior = result.request;
            console.log(_this.request);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Delete request
    ViewReqAsOwnerComponent.prototype.onDelete = function () {
        var _this = this;
        this.requestService.deleteRequest(this.id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your request has been deleted', { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ViewReqAsOwnerComponent.prototype.editRequest = function () {
        Object.assign(this.requestPrior, this.request);
        this.pageMode = "editMode";
    };
    ViewReqAsOwnerComponent.prototype.saveRequest = function () {
        this.requestPrior = new Object();
        this.pageMode = "viewMode";
    };
    ViewReqAsOwnerComponent.prototype.cancelEdit = function () {
        Object.assign(this.request, this.requestPrior);
        this.requestPrior = new Object();
        this.pageMode = "viewMode";
    };
    return ViewReqAsOwnerComponent;
}());
ViewReqAsOwnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-req-as-owner',
        template: __webpack_require__("../../../../../src/app/components/view-req-as-owner/view-req-as-owner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/view-req-as-owner/view-req-as-owner.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ViewReqAsOwnerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-req-as-owner.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-request/view-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-request/view-request.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/explore']\">← Explore</a>\n\n<hr>\n\n<div class=\"container\">\n    <div class=\"colum_left\">\n        <div class=\"description\">\n            <h1 md-line>{{ request.title }}</h1>\n             Posted by: <a [routerLink]=\"['/', request.author_type, request.author_id]\">{{ request.author }}</a>\n             <br>\n            {{ request.description }}\n        </div>\n    </div>\n    <br>\n    <div class=\"colum_right\">\n        <div class=\"info\">\n             <h4 md-line> Request for: {{ request.request_for }}</h4>\n\t\t</div>\n\n        <div class=\"updates\">\n            Location: {{ request.location }}\n            <br>\n            Expertise: {{ request.expertise }}\n            <br>\n            Urgency: {{ request.urgency }}\n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/view-request/view-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewRequestComponent = (function () {
    function ViewRequestComponent(requestService, flashMessage, route, router) {
        this.requestService = requestService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
    }
    ViewRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.getRequest(this.id);
    };
    ViewRequestComponent.prototype.getRequest = function (id) {
        var _this = this;
        this.requestService.viewRequest(id).subscribe(function (result) {
            _this.request = result.request;
            console.log(_this.request);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Delete request
    ViewRequestComponent.prototype.onDelete = function () {
        var _this = this;
        this.requestService.deleteRequest(this.id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your request has been deleted', { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return ViewRequestComponent;
}());
ViewRequestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-request',
        template: __webpack_require__("../../../../../src/app/components/view-request/view-request.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/view-request/view-request.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ViewRequestComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-request.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-user/view-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h2 class=\"page-header\">{{ user.f_name }} {{ user.l_name }}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Name: {{ user.f_name }}</li>\n    <li class=\"list-group-item\">Email: {{ user.email }}</li>\n  </ul>\n\t<br>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/view-user/view-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewUserComponent = (function () {
    function ViewUserComponent(authService, flashMessage, route, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log(this.id);
        this.getUser(this.id);
    };
    ViewUserComponent.prototype.getUser = function (id) {
        var _this = this;
        this.authService.getUserById(id).subscribe(function (result) {
            _this.user = result.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ViewUserComponent;
}());
ViewUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-user',
        template: __webpack_require__("../../../../../src/app/components/view-user/view-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/view-user/view-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ViewUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.userId = localStorage.getItem('userId');
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete("users/delete/" + this.userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json().user; });
    };
    AuthService.prototype.getUserById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("users/getbyuser/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('userId', user.id);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.getUserId = function () {
        this.userId = localStorage.getItem('userId');
        return this.userId;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackService = (function () {
    function FeedbackService(http) {
        this.http = http;
    }
    FeedbackService.prototype.addComment = function (comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/feedbacks/add', comment, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FeedbackService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    FeedbackService.prototype.viewFeedback = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("/feedbacks/get/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FeedbackService.prototype.viewFeedbackByTeam = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("/feedbacks/getbyteam/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FeedbackService.prototype.viewFeedbackByPlace = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("/feedbacks/getbyplace/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FeedbackService.prototype.viewFeedbacks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/feedbacks/get', { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    FeedbackService.prototype.deleteFeedback = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete("feedbacks/delete/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return FeedbackService;
}());
FeedbackService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FeedbackService);

var _a;
//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/place.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaceService = (function () {
    function PlaceService(http) {
        this.http = http;
    }
    PlaceService.prototype.addPlace = function (place) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/places/add', place, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlaceService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    PlaceService.prototype.viewPlace = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("/places/get/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PlaceService.prototype.viewPlaces = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/places/get', { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    return PlaceService;
}());
PlaceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PlaceService);

var _a;
//# sourceMappingURL=place.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.addRequest = function (request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/requests/add', request, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.deleteRequest = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete("requests/delete/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    RequestService.prototype.viewRequest = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("requests/get/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.viewRequests = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/requests/get', { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    RequestService.prototype.viewRequestsByUser = function () {
        this.user = localStorage.getItem('userId');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("requests/getbyuser/" + this.user, { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    RequestService.prototype.viewRequestsByTeam = function (teamid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("requests/getbyteam/" + teamid, { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    return RequestService;
}());
RequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
    }
    TeamService.prototype.addTeam = function (team) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('/teams/add', team, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TeamService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    TeamService.prototype.viewTeam = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("teams/get/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TeamService.prototype.viewTeams = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/teams/get', { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    TeamService.prototype.viewTeamsByUser = function () {
        this.user = localStorage.getItem('userId');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("teams/getbyuser/" + this.user, { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    return TeamService;
}());
TeamService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], TeamService);

var _a;
//# sourceMappingURL=team.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/twitter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterService = (function () {
    function TwitterService(http) {
        this.http = http;
    }
    TwitterService.prototype.user = function () {
        return this.http.get('/twitter/api/user');
    };
    TwitterService.prototype.home = function (since) {
        return this.http.get('/twitter/api/home?since=${since}');
    };
    TwitterService.prototype.action = function (property, id, state) {
        return this.http.post('/twitter/api/${property}/${id}', { state: state });
    };
    return TwitterService;
}());
TwitterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], TwitterService);

var _a;
//# sourceMappingURL=twitter.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.f_name == undefined || user.email == undefined || user.l_name == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map