webpackJsonp([2],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ranking_ranking__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__["a" /* ReviewsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__ranking_ranking__["a" /* RankingPage */];
    }
    TabsPage.prototype.ionViewWillEnter = function () {
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n\n  <ion-tab [root]="tab1Root" tabTitle="Reviews" tabIcon="ios-chatboxes" [rootParams]="userData"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Ranks" tabIcon="ios-ribbon" [rootParams]="userData"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.loginUrl = 'http://localhost:3000/api/auth/login';
        this.signupUrl = 'http://localhost:3000/api/auth/signup';
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (credentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = { "email": credentials.email, "password": credentials.password };
        return this.http.post(this.loginUrl, body, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    AuthProvider.prototype.SignUp = function (credentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = { "email": credentials.email, "password": credentials.password,
            "resetPasswordToken": credentials.resetPasswordToken,
            "resetPasswordExpires": credentials.resetPasswordExpires,
            "points": credentials.points,
            "notificationToken": credentials.notificationToken,
            "fullName": credentials.fullName,
            "userImage": credentials.userImage };
        return this.http.post(this.signupUrl, body, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(nativeStorage, http) {
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.profileUrl = 'http://localhost:3000/api/users/me';
        this.userReviewsUrl = 'http://localhost:3000/api/users/getReviews';
        console.log('Hello ProfileProvider Provider');
    }
    ProfileProvider.prototype.getUser = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'Authorization');
        headers.append('Authorization', 'Bearer' + ' ' + token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.profileUrl, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ProfileProvider.prototype.getUserReviews = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'Authorization');
        headers.append('Authorization', 'Bearer' + ' ' + token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.userReviewsUrl, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-profile/edit-profile.module": [
		412,
		1
	],
	"../pages/profile/profile.module": [
		413,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(nativeStorage, navCtrl, navParams, authProvider, alertCtrl) {
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var cerdentials = {
            email: this.email,
            password: this.password
        };
        this.authProvider.login(cerdentials).then(function (res) {
            console.log("login response", res);
            _this.nativeStorage.setItem("token", { jwtUserToken: res.token }).then(function (saved) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return console.error('Error storing item', error); });
        }).catch(function (err) {
            console.log("login error ", err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Wrong email or password',
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('EditProfilePage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div style="text-align: center; margin-bottom: 2rem;">\n\n    <img src="assets/imgs/favorite.png" style="width: 14rem; height: 14rem;">\n\n  </div>\n\n\n\n  <div style="bottom: 4rem; height: 20rem; width: 100%; margin: auto; border-radius: 25px; padding: 2rem;">\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Email</ion-label>\n\n      <ion-input [(ngModel)]="email" type="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Password</ion-label>\n\n      <ion-input [(ngModel)]="password" type="password"></ion-input>\n\n    </ion-item>\n\n    <div float-right style="color: gray; font-size: 12px; margin-top: 1rem;" class="text-hover">\n\n      Forgot Your Password?!\n\n    </div>\n\n  </div>\n\n  <div style=" margin-bottom: 2rem;">\n\n    <ion-row>\n\n      <ion-col col-4 offset-1>\n\n        <button float-left (click)="login()" round small ion-button>Login</button>\n\n      </ion-col>\n\n      <ion-col col-4 offset-2>\n\n        <button float-right (click)="register()" round small ion-button>Register</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div style="width: 100%; height: 10px; border-bottom: 1px solid #A9A9A9; text-align: center; margin-bottom: 1rem;">\n\n    <span style="font-size: 12px; background-color: white; padding: 0 10px;">\n\n        Or Connect With \n\n      </span>\n\n  </div>\n\n\n\n  <div style="text-align: center;">\n\n    <button ion-button color="danger"><ion-icon name="logo-facebook" style="font-size: 20px;"></ion-icon>&nbsp;Facebook</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RankingPage = /** @class */ (function () {
    function RankingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RankingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RankingPage');
    };
    RankingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ranking',template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\ranking\ranking.html"*/'<!--\n\n  Generated template for the RankingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>Ranking</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- <br>\n\n    <div class="row header">\n\n      <div class="col">Site</div>\n\n      <div class="col">Postive Review</div>\n\n    </div>\n\n    <div class="row" ng-repeat="data in ctrl.data">\n\n      <div class="col">jjj</div>\n\n      <div class="col">kk</div>\n\n    </div> -->\n\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\ranking\ranking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RankingPage);
    return RankingPage;
}());

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ReviewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewsPage');
    };
    ReviewsPage.prototype.ionViewWillEnter = function () {
        this.userData = this.navParams.data;
    };
    ReviewsPage.prototype.presentSearchPrompt = function () {
        var alert = this.alertCtrl.create({
            title: 'Search',
            inputs: [
                {
                    name: 'siteName',
                    placeholder: 'Site Name'
                },
                {
                    name: 'productName',
                    placeholder: 'Prodct Name',
                },
                {
                    name: 'category',
                    placeholder: 'Category',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Search',
                    handler: function (data) {
                        console.log("search options", data);
                    }
                }
            ]
        });
        alert.present();
    };
    ReviewsPage.prototype.openProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    ReviewsPage.prototype.addReview = function () {
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="height: 6rem;">\n\n      <ion-row>\n\n        <ion-col style="background-color: transparent;  border: none;" col-4>\n\n          <ion-buttons>\n\n            <button (click)="openProfile()" clear ion-button large float-left>\n\n                  <img src="assets/imgs/avatar.png" style=" border-radius: 50%; width: 4rem; height: 4rem;">\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" text-center style="bottom: 1rem;" col-4>\n\n          <h3 text-color="my-custom-color">Reviews</h3>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" col-4>\n\n          <button (click)="presentSearchPrompt()" float-right style="left: 2rem; bottom: 1rem;" ion-button large clear>\n\n                <ion-icon text-color="my-custom-color" name="ios-search-outline"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n  <div class="container darker">\n\n    <img src="assets/imgs/avatar.png" alt="Avatar" class="right">\n\n    <h4>\n\n      Islam Tareq\n\n    </h4>\n\n    <hr>\n\n    <div style="width: 80%; word-wrap: break-word;">\n\n      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its\n\n        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to\n\n        using \'Content here, content here\', making it look like readable English.</p>\n\n    </div>\n\n    <span class="time-left">11:01</span>\n\n  </div>\n\n  <ion-fab bottom right>\n\n    <button color="primary" ion-fab mini (click)="addReview()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\reviews\reviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ranking_ranking__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reviews_reviews__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_short_date_short_date__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_profile_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_reviews_reviews__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ranking_ranking__["a" /* RankingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_short_date_short_date__["a" /* ShortDatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ranking_ranking__["a" /* RankingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_14__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_reviews_reviews__["a" /* ReviewsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_reviews_reviews__["a" /* ReviewsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 164,
	"./af.js": 164,
	"./ar": 165,
	"./ar-dz": 166,
	"./ar-dz.js": 166,
	"./ar-kw": 167,
	"./ar-kw.js": 167,
	"./ar-ly": 168,
	"./ar-ly.js": 168,
	"./ar-ma": 169,
	"./ar-ma.js": 169,
	"./ar-sa": 170,
	"./ar-sa.js": 170,
	"./ar-tn": 171,
	"./ar-tn.js": 171,
	"./ar.js": 165,
	"./az": 172,
	"./az.js": 172,
	"./be": 173,
	"./be.js": 173,
	"./bg": 174,
	"./bg.js": 174,
	"./bm": 175,
	"./bm.js": 175,
	"./bn": 176,
	"./bn.js": 176,
	"./bo": 177,
	"./bo.js": 177,
	"./br": 178,
	"./br.js": 178,
	"./bs": 179,
	"./bs.js": 179,
	"./ca": 180,
	"./ca.js": 180,
	"./cs": 181,
	"./cs.js": 181,
	"./cv": 182,
	"./cv.js": 182,
	"./cy": 183,
	"./cy.js": 183,
	"./da": 184,
	"./da.js": 184,
	"./de": 185,
	"./de-at": 186,
	"./de-at.js": 186,
	"./de-ch": 187,
	"./de-ch.js": 187,
	"./de.js": 185,
	"./dv": 188,
	"./dv.js": 188,
	"./el": 189,
	"./el.js": 189,
	"./en-au": 190,
	"./en-au.js": 190,
	"./en-ca": 191,
	"./en-ca.js": 191,
	"./en-gb": 192,
	"./en-gb.js": 192,
	"./en-ie": 193,
	"./en-ie.js": 193,
	"./en-il": 194,
	"./en-il.js": 194,
	"./en-nz": 195,
	"./en-nz.js": 195,
	"./eo": 196,
	"./eo.js": 196,
	"./es": 197,
	"./es-do": 198,
	"./es-do.js": 198,
	"./es-us": 199,
	"./es-us.js": 199,
	"./es.js": 197,
	"./et": 200,
	"./et.js": 200,
	"./eu": 201,
	"./eu.js": 201,
	"./fa": 202,
	"./fa.js": 202,
	"./fi": 203,
	"./fi.js": 203,
	"./fo": 204,
	"./fo.js": 204,
	"./fr": 205,
	"./fr-ca": 206,
	"./fr-ca.js": 206,
	"./fr-ch": 207,
	"./fr-ch.js": 207,
	"./fr.js": 205,
	"./fy": 208,
	"./fy.js": 208,
	"./gd": 209,
	"./gd.js": 209,
	"./gl": 210,
	"./gl.js": 210,
	"./gom-latn": 211,
	"./gom-latn.js": 211,
	"./gu": 212,
	"./gu.js": 212,
	"./he": 213,
	"./he.js": 213,
	"./hi": 214,
	"./hi.js": 214,
	"./hr": 215,
	"./hr.js": 215,
	"./hu": 216,
	"./hu.js": 216,
	"./hy-am": 217,
	"./hy-am.js": 217,
	"./id": 218,
	"./id.js": 218,
	"./is": 219,
	"./is.js": 219,
	"./it": 220,
	"./it.js": 220,
	"./ja": 221,
	"./ja.js": 221,
	"./jv": 222,
	"./jv.js": 222,
	"./ka": 223,
	"./ka.js": 223,
	"./kk": 224,
	"./kk.js": 224,
	"./km": 225,
	"./km.js": 225,
	"./kn": 226,
	"./kn.js": 226,
	"./ko": 227,
	"./ko.js": 227,
	"./ky": 228,
	"./ky.js": 228,
	"./lb": 229,
	"./lb.js": 229,
	"./lo": 230,
	"./lo.js": 230,
	"./lt": 231,
	"./lt.js": 231,
	"./lv": 232,
	"./lv.js": 232,
	"./me": 233,
	"./me.js": 233,
	"./mi": 234,
	"./mi.js": 234,
	"./mk": 235,
	"./mk.js": 235,
	"./ml": 236,
	"./ml.js": 236,
	"./mn": 237,
	"./mn.js": 237,
	"./mr": 238,
	"./mr.js": 238,
	"./ms": 239,
	"./ms-my": 240,
	"./ms-my.js": 240,
	"./ms.js": 239,
	"./mt": 241,
	"./mt.js": 241,
	"./my": 242,
	"./my.js": 242,
	"./nb": 243,
	"./nb.js": 243,
	"./ne": 244,
	"./ne.js": 244,
	"./nl": 245,
	"./nl-be": 246,
	"./nl-be.js": 246,
	"./nl.js": 245,
	"./nn": 247,
	"./nn.js": 247,
	"./pa-in": 248,
	"./pa-in.js": 248,
	"./pl": 249,
	"./pl.js": 249,
	"./pt": 250,
	"./pt-br": 251,
	"./pt-br.js": 251,
	"./pt.js": 250,
	"./ro": 252,
	"./ro.js": 252,
	"./ru": 253,
	"./ru.js": 253,
	"./sd": 254,
	"./sd.js": 254,
	"./se": 255,
	"./se.js": 255,
	"./si": 256,
	"./si.js": 256,
	"./sk": 257,
	"./sk.js": 257,
	"./sl": 258,
	"./sl.js": 258,
	"./sq": 259,
	"./sq.js": 259,
	"./sr": 260,
	"./sr-cyrl": 261,
	"./sr-cyrl.js": 261,
	"./sr.js": 260,
	"./ss": 262,
	"./ss.js": 262,
	"./sv": 263,
	"./sv.js": 263,
	"./sw": 264,
	"./sw.js": 264,
	"./ta": 265,
	"./ta.js": 265,
	"./te": 266,
	"./te.js": 266,
	"./tet": 267,
	"./tet.js": 267,
	"./tg": 268,
	"./tg.js": 268,
	"./th": 269,
	"./th.js": 269,
	"./tl-ph": 270,
	"./tl-ph.js": 270,
	"./tlh": 271,
	"./tlh.js": 271,
	"./tr": 272,
	"./tr.js": 272,
	"./tzl": 273,
	"./tzl.js": 273,
	"./tzm": 274,
	"./tzm-latn": 275,
	"./tzm-latn.js": 275,
	"./tzm.js": 274,
	"./ug-cn": 276,
	"./ug-cn.js": 276,
	"./uk": 277,
	"./uk.js": 277,
	"./ur": 278,
	"./ur.js": 278,
	"./uz": 279,
	"./uz-latn": 280,
	"./uz-latn.js": 280,
	"./uz.js": 279,
	"./vi": 281,
	"./vi.js": 281,
	"./x-pseudo": 282,
	"./x-pseudo.js": 282,
	"./yo": 283,
	"./yo.js": 283,
	"./zh-cn": 284,
	"./zh-cn.js": 284,
	"./zh-hk": 285,
	"./zh-hk.js": 285,
	"./zh-tw": 286,
	"./zh-tw.js": 286
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
webpackContext.id = 385;

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(nativeStorage, platform, statusBar, splashScreen, profileProvder) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.profileProvder = profileProvder;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        var subscription = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(nativeStorage.getItem('token'));
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            subscription.subscribe(function (token) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]);
                console.log("token from observable", token.jwtUserToken);
            }, function (error) {
                console.log("no token", error);
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__["a" /* ProfileProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortDatePipe; });
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
 * Generated class for the ShortDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ShortDatePipe = /** @class */ (function () {
    function ShortDatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ShortDatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format("DD-MM-YYYY").toString();
    };
    ShortDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'shortDate',
        })
    ], ShortDatePipe);
    return ShortDatePipe;
}());

//# sourceMappingURL=short-date.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReviewsProvider = /** @class */ (function () {
    function ReviewsProvider(http) {
        this.http = http;
        console.log('Hello ReviewsProvider Provider');
    }
    ReviewsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ReviewsProvider);
    return ReviewsProvider;
}());

//# sourceMappingURL=reviews.js.map

/***/ })

},[331]);
//# sourceMappingURL=main.js.map