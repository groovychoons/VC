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
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] },
    { path: '**', redirectTo: 'HomeComponent' },
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
exports.push([module.i, "\n.footer {\n\tbackground-color: #f7f7f7;\n\tbottom: 0px;\n\tpadding: 15px 100px 5px 100px;\n}\n\np {\n\tpadding: 0px;\n}\n\n/* footer is currently 168 + 15 (+129)*/\n.content {\n  min-height: calc(100vh - 189px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<br><br>\n\n<div class=\"container content\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>\n\n<br>\n<footer class=\"footer\">\n    <div class=\"container\">\n      <p><a href=\"/\">About us</a> &emsp;&emsp; <a href=\"/\">Contact</a>&emsp;&emsp;&emsp;Zara Siddique © 2018</p>\n    </div>\n</footer>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_moment__ = __webpack_require__("../../../../ngx-moment/esm5/ngx-moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_request_request_component__ = __webpack_require__("../../../../../src/app/components/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_view_request_view_request_component__ = __webpack_require__("../../../../../src/app/components/view-request/view-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_place_service__ = __webpack_require__("../../../../../src/app/services/place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_twitter_service__ = __webpack_require__("../../../../../src/app/services/twitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_ays_blog_service__ = __webpack_require__("../../../../../src/app/services/ays-blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_map_map_component__ = __webpack_require__("../../../../../src/app/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_search_map_search_map_component__ = __webpack_require__("../../../../../src/app/components/search-map/search-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_explore_explore_component__ = __webpack_require__("../../../../../src/app/components/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_cardbyuser_cardbyuser_component__ = __webpack_require__("../../../../../src/app/components/cardbyuser/cardbyuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_create_org_create_org_component__ = __webpack_require__("../../../../../src/app/components/create-org/create-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_view_org_view_org_component__ = __webpack_require__("../../../../../src/app/components/view-org/view-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_explore_org_explore_org_component__ = __webpack_require__("../../../../../src/app/components/explore-org/explore-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_card_org_card_org_component__ = __webpack_require__("../../../../../src/app/components/card-org/card-org.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_card_by_team_card_by_team_component__ = __webpack_require__("../../../../../src/app/components/card-by-team/card-by-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_view_user_view_user_component__ = __webpack_require__("../../../../../src/app/components/view-user/view-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_view_req_as_owner_view_req_as_owner_component__ = __webpack_require__("../../../../../src/app/components/view-req-as-owner/view-req-as-owner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_explore_places_explore_places_component__ = __webpack_require__("../../../../../src/app/components/explore-places/explore-places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_card_place_card_place_component__ = __webpack_require__("../../../../../src/app/components/card-place/card-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_create_place_create_place_component__ = __webpack_require__("../../../../../src/app/components/create-place/create-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_view_place_view_place_component__ = __webpack_require__("../../../../../src/app/components/view-place/view-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_feedback_feedback_component__ = __webpack_require__("../../../../../src/app/components/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_tweets_tweets_component__ = __webpack_require__("../../../../../src/app/components/tweets/tweets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_tweet_tweet_component__ = __webpack_require__("../../../../../src/app/components/tweet/tweet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pipes_tweet_pipe__ = __webpack_require__("../../../../../src/app/pipes/tweet.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pipes_strip_html_tags_pipe__ = __webpack_require__("../../../../../src/app/pipes/strip-html-tags.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_card_news_card_news_component__ = __webpack_require__("../../../../../src/app/components/card-news/card-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_card_latest_requests_card_latest_requests_component__ = __webpack_require__("../../../../../src/app/components/card-latest-requests/card-latest-requests.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_request_request_component__["a" /* RequestComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_view_request_view_request_component__["a" /* ViewRequestComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_search_map_search_map_component__["a" /* SearchMapComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_explore_explore_component__["a" /* ExploreComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_cardbyuser_cardbyuser_component__["a" /* CardbyuserComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_create_org_create_org_component__["a" /* CreateOrgComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_view_org_view_org_component__["a" /* ViewOrgComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_explore_org_explore_org_component__["a" /* ExploreOrgComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_card_org_card_org_component__["a" /* CardOrgComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_card_by_team_card_by_team_component__["a" /* CardByTeamComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_view_user_view_user_component__["a" /* ViewUserComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_view_req_as_owner_view_req_as_owner_component__["a" /* ViewReqAsOwnerComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_explore_places_explore_places_component__["a" /* ExplorePlacesComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_card_place_card_place_component__["a" /* CardPlaceComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_create_place_create_place_component__["a" /* CreatePlaceComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_view_place_view_place_component__["a" /* ViewPlaceComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_feedback_feedback_component__["a" /* FeedbackComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_tweets_tweets_component__["a" /* TweetsComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_tweet_tweet_component__["a" /* TweetComponent */],
            __WEBPACK_IMPORTED_MODULE_46__pipes_tweet_pipe__["a" /* TweetPipe */],
            __WEBPACK_IMPORTED_MODULE_47__pipes_strip_html_tags_pipe__["a" /* StripHtmlTagsPipe */],
            __WEBPACK_IMPORTED_MODULE_48__components_card_news_card_news_component__["a" /* CardNewsComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_card_latest_requests_card_latest_requests_component__["a" /* CardLatestRequestsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBxGnabLzD3YRZK4KbUvDkJXeGgmvYUltg',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_5_ngx_moment__["a" /* MomentModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_20__services_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_21__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_24__services_twitter_service__["a" /* TwitterService */],
            __WEBPACK_IMPORTED_MODULE_22__services_place_service__["a" /* PlaceService */],
            __WEBPACK_IMPORTED_MODULE_23__services_feedback_service__["a" /* FeedbackService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_25__services_ays_blog_service__["a" /* AysBlogService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-by-team/card-by-team.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-columns\">\n  <div class=\"card\" *ngFor=\"let card of (requests ? requests.slice(0,2): [])\" [routerLink]=\"['/request', card.id]\" style=\"width: 15rem;\">\n    <img class=\"card-img-top img-fluid\" src=\"../assets/icons/027-info.png\" alt=\"Card image cap\">\n    \n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ card.title }}</h4>\n      <p class=\"card-text\">{{ card.description | slice:0:75 }}...</p>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Location: {{ card.location | slice:0:30 }}..</small>\n    </div>\n  </div>\n</div>\n\n"

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

/***/ "../../../../../src/app/components/card-latest-requests/card-latest-requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-latest-requests/card-latest-requests.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"list-group\" >\n\n  <div *ngFor=\"let card of (requests ? requests.slice(0,4): [])\" [routerLink]=\"['/request', card.id]\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n    <div class=\"d-flex w-100 justify-content-between\">\n      <h5 class=\"mb-1\">{{ card.title }}</h5>\n      <small class=\"text-muted\">3 days ago</small>\n    </div>\n    <p class=\"mb-1\">{{ card.description | slice:0:50 }}...</p>\n    <small class=\"text-muted\">Location: {{ card.location | slice:0:30 }}..</small>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/card-latest-requests/card-latest-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardLatestRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardLatestRequestsComponent = (function () {
    function CardLatestRequestsComponent(requestService) {
        this.requestService = requestService;
    }
    CardLatestRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewAllRequests().subscribe(function (result) {
            console.log(result);
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return CardLatestRequestsComponent;
}());
CardLatestRequestsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-latest-requests',
        template: __webpack_require__("../../../../../src/app/components/card-latest-requests/card-latest-requests.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-latest-requests/card-latest-requests.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], CardLatestRequestsComponent);

var _a;
//# sourceMappingURL=card-latest-requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-news/card-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-news/card-news.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-deck\" >\n  <div class=\"card\" *ngFor=\"let feed of (feeds ? feeds.slice(0,3): [])\">\n\n    <div class=\"card-block\">\n      <h5 class=\"card-title\">{{ feed.title }}</h5>\n      <p class=\"card-text\"><small class=\"text-muted\">Published on {{ feed.pubDate | date:'short' }}</small></p>\n      <hr>\n      <p class=\"card-text\">{{ feed.description | stripHtmlTags | slice: 0:170}}...</p>\n    \t<a [href]=\"feed.link\"><small>Read more →</small></a>\n  \t\t</div>\n  </div>\n</div>\n\n<br><br>\n\n<div class=\"card-deck\" >\n  <div class=\"card\" *ngFor=\"let feed of (feeds ? feeds.slice(3,6): [])\">\n\n    <div class=\"card-block\">\n      <h5 class=\"card-title\">{{ feed.title }}</h5>\n      <p class=\"card-text\"><small class=\"text-muted\">Published on {{feed.pubDate | date:'short' }}</small></p>\n      <hr>\n      <p class=\"card-text\">{{ feed.description | stripHtmlTags | slice: 0:170}}...</p>\n    \t<a [href]=\"feed.link\"><small>Read more →</small></a>\n  \t\t</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/card-news/card-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ays_blog_service__ = __webpack_require__("../../../../../src/app/services/ays-blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardNewsComponent = (function () {
    function CardNewsComponent(aysBlogService) {
        this.aysBlogService = aysBlogService;
    }
    CardNewsComponent.prototype.ngOnInit = function () {
        this.refreshFeed();
    };
    CardNewsComponent.prototype.refreshFeed = function () {
        var _this = this;
        this.aysBlogService.getFeedContent()
            .subscribe(function (feed) { return _this.feeds = feed.items; }, function (error) { return console.log(error); });
    };
    CardNewsComponent.prototype.openLinkInBrowser = function () {
        window.open(this.feed.link);
    };
    return CardNewsComponent;
}());
CardNewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-card-news',
        template: __webpack_require__("../../../../../src/app/components/card-news/card-news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-news/card-news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ays_blog_service__["a" /* AysBlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ays_blog_service__["a" /* AysBlogService */]) === "function" && _a || Object])
], CardNewsComponent);

var _a;
//# sourceMappingURL=card-news.component.js.map

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
        this.query = "";
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewAllRequests().subscribe(function (result) {
            console.log(result);
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CardComponent.prototype.getCards = function () {
        var _this = this;
        this.requestService.viewRequests(this.query).subscribe(function (result) {
            _this.requests = result;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CardComponent.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (change == "query") {
                this.query = changes.query.currentValue;
            }
        }
        this.getCards();
    };
    return CardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CardComponent.prototype, "query", void 0);
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
exports.push([module.i, "\n\n.explore-options {\n\twidth: 100%;\n}\n\nhr {\n\tmargin-top: 22px;\n\tmargin-bottom: 22px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h3 class=\"page-header\">Manage My Requests</h3>\n<p>Click on a request below to update or delete it.</p>\n<div class=\"container\">\n  <app-cardbyuser></app-cardbyuser>\n</div>\n\n<h3 class=\"page-header\">Manage My Organisations</h3>\n<p>Click on an organisation below to update its details.</p>\n  \n  <br>\n  <h3>Latest News from Are You Syrious</h3>\n  <br>\n  <app-card-news></app-card-news>\n\n<br>"

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

module.exports = "<div class=\"top\">\n\n<div class=\"left-box\">\n\t<h2 class=\"page-header\">Explore Organisations</h2>\n\t<p>Find the team you're looking for.</p>\n</div>\n<div class=\"right-box\">\n\t<button type=\"button\" class=\"btn-sm btn-outline-primary\" [routerLink]=\"['/organisation/add']\">Create an organisation</button>\n    <p></p>\n</div>\n\n</div>\n\n<hr class=\"line\">\n\n<app-card-org></app-card-org>"

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

module.exports = "<div class=\"top\">\n\n<div class=\"left-box\">\n\t<h2 class=\"page-header\">Explore Places</h2>\n\t<p>View important locations and camps across the globe.</p>\n</div>\n<div class=\"right-box\">\n\t<button type=\"button\" class=\"btn-sm btn-outline-primary\" [routerLink]=\"['/place/add']\">Add a place</button>\n    <p></p>\n</div>\n\n</div>\n\n<hr class=\"line\">\n\n<app-card-place></app-card-place>"

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

module.exports = "\n<div class=\"top\">\n\n<div class=\"left-box\">\n\t<h2 class=\"page-header\">Explore</h2>\n\t<p>Find out where help is needed. Search and filter to find what you're looking for and where your skills are being requested.</p>\n</div>\n<div class=\"right-box\">\n\t<button type=\"button\" class=\"btn btn-outline-primary\" [routerLink]=\"['/request']\">Post a Request</button>\n    <p></p>\n    <div class=\"col-lg-8 input-group search-box\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query\" name=\"query\" placeholder=\"Search for...\">\n      <span class=\"input-group-btn\">\n        <button value=\"Submit\" class=\"btn btn-secondary\" type=\"submit\" (click)=\"doSearch()\"> <i class=\"fa fa-search\"></i></button>\n      </span>\n\n  </div>\n</div>\n\n</div>\n\n<hr class=\"line\">\n\n<div class=\"container content-box\">\n\t<app-card [query]=\"query\"></app-card>\n\t<app-map></app-map>\n</div>\n\n<!--\nSmall: 1 column >\n+1: 2 columns\n+1: 2 columns + map\n+1: 3 columns + map >\n\n-->\n\n<router-outlet></router-outlet>\n"

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
    function ExploreComponent(requestService, activatedRoute, router) {
        this.requestService = requestService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.query = "";
    }
    ExploreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams
            .subscribe(function (params) {
            _this.query = params['query'];
        });
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
exports.push([module.i, "\n.carousel img {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.explore-options {\n\twidth: 100%;\n}\n\nhr {\n\tmargin-top: 22px;\n\tmargin-bottom: 22px;\n}\n\n.quote {\n\ttext-align: center;\n\tpadding: 20px 90px;\n}\n\n.quote h3 {\n\tfont-style: italic;\n\tfont-family: Raleway !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\n  <div class=\"col-lg-7\">\n\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-slide-to=\"0\" class=\"active\"></li>\n          <li data-slide-to=\"1\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"../assets/slider-map-image.jpg\" alt=\"What we do\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block\" src=\"../assets/slider-get-verified.jpg\" alt=\"Get verfied\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"/\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"/\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n\n  </div>\n\n  <div class=\"col-lg-5\">\n\n    <h3>Latest Requests</h3>\n    <br>\n     <app-card-latest-requests></app-card-latest-requests>\n     <br>\n  <a [routerLink]=\"['/explore']\">View more requests →</a>\n\n  </div>\n\n</div>\n\n<hr>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n    <a [routerLink]=\"['/explore']\"><img class=\"explore-options\" src=\"../assets/dashboard-requests.jpg\" alt=\"Latest Requests\"></a>\n    </div>\n    <div class=\"col-sm\">\n    <a [routerLink]=\"['/places']\"><img class=\"explore-options\" src=\"../assets/dashboard-places.jpg\" alt=\"Explore Places\"></a>\n    </div>\n    <div class=\"col-sm\">\n    <a [routerLink]=\"['/organisations']\"><img class=\"explore-options\" src=\"../assets/dashboard-organisations.jpg\" alt=\"Explore Organisations\"></a>\n    </div>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"container quote\">\n  <h3>\"There are many borders to dismantle, but the most important are the ones within our own hearts and minds – these are the borders that are dividing humanity from itself.\"</h3>\n  <a class=\"text-muted\" href=\"https://www.theguardian.com/commentisfree/2018/feb/02/refugee-crisis-human-flow-ai-weiwei-china\">- Read artist and activist Ai Weiwei's recent article on refugees</a>\n</div>\n<hr>\n  \n  <br>\n  <h3>Latest News from Are You Syrious</h3>\n  <br>\n  <app-card-news></app-card-news>\n\n<br>"

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
        this.requestService.viewAllRequests().subscribe(function (result) {
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
exports.push([module.i, ".navbar {\n\tmin-height: 56px !important;\n}\n.title {\n\tfont-family: 'Abril Fatface', cursive;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n      <div class=\"collapse navbar-collapse justify-content-between nav-nav\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/explore']\">Explore</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/organisations']\">Organisations</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/places']\">Places</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link title\" [routerLink]=\"['/']\">VolunteerConnect.</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n    \n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Sign in</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Get started</a>\n      </li>\n      \n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

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

module.exports = "\n<div *ngIf=\"user\">\n  <h2 class=\"page-header\">Welcome, {{ user.f_name }} {{ user.l_name }}!</h2>\n  <br>\n  <h4>Your Details</h4>\n  \t<p>Name: {{ user.f_name }} {{ user.l_name }}</p>\n    <p>Email: {{ user.email }}</p>\n\t<br>\n  <a [routerLink]=\"['/organisation/add']\">Create an organisation</a>\n</div>\n\n<br>\n<hr>\n<br>\n\n\n<h4 class=\"page-header\">Delete Your Account</h4>\n<p>Please be sure you want to delete your account and all associated requests before you press this button.</p>\n<button (click)=\"onDelete()\" class=\"btn btn-primary\">Delete</button>\n\n\n<router-outlet></router-outlet>"

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

module.exports = "\n<h2 class=\"page-header\">Add a Request</h2>\n<form (submit)=\"onRequestSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label><i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">Tooltip on right</i>\n\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Posting request as:</label>\n    <select class=\"form-control\" [ngModel]=\"selectedAuthor\" (ngModelChange)=\"onChange($event)\" name=\"selectedAuthor\">\n      <option *ngFor=\"let m of authorOptions\" [ngValue]=\"m\">{{m.name}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Request For</label>\n    <input type=\"text\" [(ngModel)]=\"request_for\" name=\"request_for\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Location</label>\n    <app-search-map></app-search-map>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Urgency</label>\n    <select [(ngModel)]=\"urgency\" name=\"urgency\" class=\"form-control\">\n      <option *ngFor=\"let p of urgencies\" [ngValue]=\"p.name\">{{p.name}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Skills, Interests or Expertise Needed</label>\n    <select [(ngModel)]=\"expertise\" name=\"expertise\" class=\"form-control\">\n      <option *ngFor=\"let q of skills\" [ngValue]=\"q.name\">{{q.name}}</option>\n    </select>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

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
                _this.router.navigate(['/requests']);
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
        this.requestService.viewAllRequests().subscribe(function (result) {
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

/***/ "../../../../../src/app/components/tweet/tweet.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-block\">\n  <div class=\"card-img\" *ngIf=\"hasPhoto(tweet)\">\n      <img [src]=\"tweet.entities?.media[0].media_url_https\" (click)=\"media = true\" />\n  </div>\n  <p class=\"card-text\" [innerHTML]=\"tweet | tweet\"></p>\n</div>\n<div class=\"card-footer\" *ngIf=\"!retweet\">\n    {{tweet.created_at | amTimeAgo}} \n    {{tweet.created_at | date:'medium'}}\n</div>\n<div class=\"card-footer\" *ngIf=\"retweet\">\n    {{retweet.created_at | amTimeAgo}} \n    {{retweet.created_at | date:'medium'}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tweet/tweet.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-header {\n  padding: 0; }\n  .card-header .retweeted {\n    font-size: 0.5rem;\n    font-style: italic; }\n  .card-header .card-header-actions {\n    float: right; }\n\n.card-block {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 300px;\n      grid-template-columns: 1fr 300px;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  grid-template-areas: 'text photo'; }\n\n.card-img {\n  grid-area: photo;\n  text-align: right; }\n  .card-img img {\n    display: inline-block;\n    width: auto;\n    max-width: 300px;\n    max-height: 100px; }\n\n.card-text {\n  grid-area: text; }\n\n::ng-deep .modal-body {\n  text-align: center; }\n  ::ng-deep .modal-body img {\n    max-width: 100%; }\n\n::ng-deep .modal-footer {\n  padding: 0;\n  text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tweet/tweet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tweet__ = __webpack_require__("../../../../../src/app/models/tweet.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetComponent = (function () {
    function TweetComponent() {
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TweetComponent.prototype.hasPhoto = function (tweet) {
        if (tweet.entities.media
            && tweet.entities.media.length
            && tweet.entities.media[0].type === 'photo') {
            return true;
        }
        return false;
    };
    TweetComponent.prototype.toggleAction = function (property) {
        this.action.emit({ property: property, tweet: this.tweet });
    };
    return TweetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_tweet__["a" /* Tweet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_tweet__["a" /* Tweet */]) === "function" && _a || Object)
], TweetComponent.prototype, "tweet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__models_tweet__["a" /* Tweet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_tweet__["a" /* Tweet */]) === "function" && _b || Object)
], TweetComponent.prototype, "retweet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TweetComponent.prototype, "action", void 0);
TweetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tweet',
        template: __webpack_require__("../../../../../src/app/components/tweet/tweet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tweet/tweet.component.scss")]
    })
], TweetComponent);

var _a, _b;
//# sourceMappingURL=tweet.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tweets/tweets.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"tweets\">\n  <div class=\"card\" *ngFor=\"let tweet of tweets; let i = index\">\n    <app-tweet *ngIf=\"tweet.retweeted_status\" [tweet]=\"tweet.retweeted_status\" [retweet]=\"tweet\" (action)=\"action($event, i)\"></app-tweet>\n    <app-tweet *ngIf=\"!tweet.retweeted_status\" [tweet]=\"tweet\" (action)=\"action($event, i)\"></app-tweet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/tweets/tweets.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tweets/tweets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_twitter_service__ = __webpack_require__("../../../../../src/app/services/twitter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetsComponent = (function () {
    function TweetsComponent(twitter) {
        this.twitter = twitter;
        this.inflight = false;
        this.tweets = [];
        this.ids = [];
    }
    TweetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.twitter.user().subscribe(function (user) { return _this.user = user.data; });
        this.getTweets();
        this.timer = setInterval(function () { return _this.getTweets(); }, 61000);
    };
    TweetsComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    TweetsComponent.prototype.getTweets = function () {
        var _this = this;
        this.twitter.home().subscribe(function (tweets) {
            console.log(tweets);
            tweets.data.reverse().forEach.call(function (tweet) {
                if (_this.ids.indexOf(tweet.id_str) < 0) {
                    _this.ids.push(tweet.id_str);
                    _this.tweets.unshift(tweet);
                }
            });
            _this.cleanUp();
        });
    };
    TweetsComponent.prototype.cleanUp = function () {
        if (this.tweets.length > 1000) {
            this.tweets.splice(1000);
            this.ids.splice(1000);
        }
    };
    TweetsComponent.prototype.action = function (action, index) {
        var _this = this;
        if (this.inflight) {
            return;
        }
        var stateKey = (action.property === 'favorite') ? 'favorited' : 'retweeted';
        var newState = !action.tweet[stateKey];
        this.inflight = true;
        this.twitter.action(action.property, action.tweet.id_str, newState).subscribe(function (tweet) {
            _this.tweets[index][stateKey] = newState;
            _this.tweets[index][action.property + '_count'] += (newState) ? 1 : -1;
            _this.inflight = false;
        });
    };
    return TweetsComponent;
}());
TweetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tweets',
        template: __webpack_require__("../../../../../src/app/components/tweets/tweets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tweets/tweets.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_twitter_service__["a" /* TwitterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_twitter_service__["a" /* TwitterService */]) === "function" && _a || Object])
], TweetsComponent);

var _a;
//# sourceMappingURL=tweets.component.js.map

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

module.exports = "\n<a [routerLink]=\"['/explore']\">← Explore</a>\n\n<hr>\n\n<div class=\"container\">\n    <div class=\"colum_left\">\n        <div class=\"description\">\n            <h1 md-line>{{ request.title }}</h1>\n             Posted by: <a [routerLink]=\"['/', request.author_type, request.author_id]\">{{ request.author }}</a>\n             <br>\n            {{ request.description }}\n        </div>\n    </div>\n    <br>\n    <div class=\"colum_right\">\n        <div class=\"info\">\n             <h4 md-line> Request for: {{ request.request_for }}</h4>\n\t\t</div>\n\n        <div class=\"updates\">\n            Location: {{ request.location }}\n            <br>\n            Expertise: {{ request.expertise }}\n            <br>\n            Urgency: {{ request.urgency }}\n        </div>\n    </div>\n</div>\n\n<br>\n<!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n  Respond to request\n</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        By clicking confirm below, your details will be sent to the creator of this request, and they will be in touch about how to get involved.\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Back to request</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onConfirm()\">Confirm</button>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

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
    ViewRequestComponent.prototype.onConfirm = function () {
        this.flashMessage.show('Your details have been sent.', { cssClass: 'alert-success', timeout: 4000 });
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

/***/ "../../../../../src/app/models/tweet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tweet; });
var Tweet = (function () {
    function Tweet() {
    }
    return Tweet;
}());

//# sourceMappingURL=tweet.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/strip-html-tags.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripHtmlTagsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StripHtmlTagsPipe = (function () {
    function StripHtmlTagsPipe() {
        this.tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
        this.tagOrComment = new RegExp('<(?:'
            + '!--(?:(?:-*[^->])*--+|-?)'
            + '|script\\b' + this.tagBody + '>[\\s\\S]*?</script\\s*'
            + '|style\\b' + this.tagBody + '>[\\s\\S]*?</style\\s*'
            + '|/?[a-z]'
            + this.tagBody
            + ')>', 'gi');
    }
    StripHtmlTagsPipe.prototype.transform = function (value) {
        var oldHtml;
        do {
            oldHtml = value;
            value = value.replace(this.tagOrComment, '');
        } while (value !== oldHtml);
        return value.replace(/</g, '&lt;');
    };
    return StripHtmlTagsPipe;
}());
StripHtmlTagsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'stripHtmlTags'
    })
], StripHtmlTagsPipe);

//# sourceMappingURL=strip-html-tags.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/tweet.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetPipe = (function () {
    function TweetPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    TweetPipe.prototype.transform = function (tweet, args) {
        var text = this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].NONE, tweet.full_text);
        // Replace screen names with links
        if (tweet.entities.user_mentions) {
            tweet.entities.user_mentions.forEach(function (mention) {
                text = text.replace(new RegExp("@" + mention.screen_name, 'gi'), "<a href=\"https://twitter.com/" + mention.screen_name + "\" target=\"_blank\">@" + mention.screen_name + "</a>");
            });
        }
        // Replace links with clickable links
        if (tweet.entities.urls) {
            tweet.entities.urls.forEach(function (url) {
                text = text.replace(url.url, "<a href=\"" + url.url + "\" target=\"_blank\">" + url.display_url + "</a>");
            });
        }
        // Remove media urls since we display them
        if (tweet.entities.media) {
            tweet.entities.media.forEach(function (url) {
                text = text.replace(url.url, '');
            });
        }
        // Replace newline characters
        text = text.replace(/\n/gm, '<br />');
        return this.sanitizer.bypassSecurityTrustHtml(text);
    };
    return TweetPipe;
}());
TweetPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'tweet'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], TweetPipe);

var _a;
//# sourceMappingURL=tweet.pipe.js.map

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

/***/ "../../../../../src/app/services/ays-blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AysBlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AysBlogService = (function () {
    function AysBlogService(http) {
        this.http = http;
        this.rssToJsonServiceBaseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40AreYouSyrious';
    }
    AysBlogService.prototype.getFeedContent = function () {
        return this.http.get(this.rssToJsonServiceBaseUrl)
            .map(this.extractFeeds)
            .catch(this.handleError);
    };
    AysBlogService.prototype.extractFeeds = function (res) {
        var feed = res.json();
        return feed || {};
    };
    AysBlogService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return AysBlogService;
}());
AysBlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AysBlogService);

var _a;
//# sourceMappingURL=ays-blog.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    function RequestService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
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
    RequestService.prototype.viewAllRequests = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/requests', { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    RequestService.prototype.viewRequests = function (title) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-Type', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]();
        params = params.append('title', title);
        return this.httpClient.get('/requests', { headers: headers, params: params })
            .map(function (response) {
            return response.data;
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], RequestService);

var _a, _b;
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
    TwitterService.prototype.home = function () {
        return this.http.get('/twitter/api/home');
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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map