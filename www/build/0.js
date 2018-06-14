webpackJsonp([0],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_long_date_long_date__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_long_date_long_date__["a" /* LongDatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(nativeStorage, navCtrl, profileProvider, loadingCtrl) {
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.profileProvider = profileProvider;
        this.loadingCtrl = loadingCtrl;
        this.loading = null;
        this.userData = {};
        this.reviewsData = [];
        this.totalPoints = 0;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        console.log("tabs element", this.tabBarElement);
        this.showLoading();
        var subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(this.nativeStorage.getItem('token'));
        subscription.subscribe(function (token) {
            console.log("token from observable", token.jwtUserToken);
            _this.profileProvider.getUser(token.jwtUserToken).then(function (res) {
                var Points = 0;
                for (var i = 0; i < res.points.length; i++) {
                    Points = Points + res.points[i].sitePoints;
                }
                _this.totalPoints = Points;
                _this.userData = res;
                _this.profileProvider.getUserReviews(token.jwtUserToken).then(function (res) {
                    _this.reviewsData = res;
                    _this.dismissLoading();
                }).catch(function (err) {
                    console.log("getting user reviews error", err);
                });
            }).catch(function (err) {
                console.log("error getting user", err);
            });
        }, function (error) {
            console.log("no token", error);
        });
    };
    ProfilePage.prototype.showLoading = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                spinner: 'dots',
                content: 'Please Wait...'
            });
            this.loading.present();
        }
    };
    ProfilePage.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    ProfilePage.prototype.editProfileNav = function () {
        this.navCtrl.push('EditProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="editProfileNav()" ion-button large clear>\n\n          <ion-icon name="ios-create-outline" style="font-size: 30px;"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n\n\n  <div style="border:1px solid #CC0000; height: 15rem; width: 100%; margin: auto; border-radius: 25px; margin-bottom: 3rem;">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <img src="{{imageUrl}}{{userData.userImage}}" style="border:1px solid #cccccc; border-radius: 25px; width: 12rem; height: 12rem;">\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          <div style="padding-top: 2rem;">\n\n            <p style=" margin: 2px; font-weight: bold;">\n\n              Reviews:\n\n            </p>\n\n            <p style="margin: 2px; color: #CC0000;">\n\n              {{reviewsData.length}}\n\n            </p>\n\n            <hr>\n\n            <p style=" margin: 2px; font-weight: bold;">\n\n              Points:\n\n            </p>\n\n            <p style=" margin: 2px; color: #CC0000;">\n\n              {{totalPoints}}\n\n            </p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div style="border:1px solid #CC0000;width: 100%; margin: auto; border-radius: 25px; padding-left: 1rem;">\n\n    <ion-slides pager="true">\n\n      <ion-slide>\n\n        <div style="text-align: left;">\n\n          <p style="font-weight: bold;">Name:</p>\n\n          <p style=" margin: 1px; color: #CC0000;">{{userData.fullName}}</p><br>\n\n          <p style="font-weight: bold;">Email:</p>\n\n          <p style=" margin: 1px; color: #CC0000;">{{userData.email}}</p><br>\n\n          <p style="font-weight: bold;">DOB:</p>\n\n          <p style=" margin: 1px; color: #CC0000;">12-2-1997</p><br><br>\n\n        </div>\n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n        <ion-scroll padding scrollY="true" style="height: 30rem; width: 100%;">\n\n          <div *ngFor="let review of reviewsData" style="margin-bottom: 1rem;">\n\n            <div class="container darker">\n\n              <img src="{{imageUrl}}{{userData.userImage}}" alt="Avatar" class="right">\n\n              <h4>\n\n                {{userData.fullName}}\n\n              </h4>\n\n              <hr>\n\n              <div style="width: 80%; word-wrap: break-word;">\n\n                <p>{{review.review}}</p>\n\n              </div>\n\n              <span class="time-left">{{review.dateCreated| longDate}}</span>\n\n            </div>\n\n          </div>\n\n        </ion-scroll>\n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n        <ion-scroll padding scrollY="true" style="height: 30rem; width: 100%;">\n\n          <div *ngFor="let point of userData.points" style="text-align: left;">\n\n            <p style="font-weight: bold; margin: 1px;">{{point.siteName}}:</p>\n\n            <p style=" margin: 1px; color: #CC0000;">{{point.sitePoints}}</p><br>\n\n          </div>\n\n        </ion-scroll>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the LongDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var LongDatePipe = /** @class */ (function () {
    function LongDatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    LongDatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format("MMMM Do YYYY, h:mm:ss a").toString();
    };
    LongDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'longDate',
        })
    ], LongDatePipe);
    return LongDatePipe;
}());

//# sourceMappingURL=long-date.js.map

/***/ })

});
//# sourceMappingURL=0.js.map