webpackJsonp([3],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(42);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
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
        this.rankingUrl = 'http://localhost:3000/api/reviews/ranking';
        this.detectLanguageUrl = 'https://api.repustate.com/v4/844812bf08eaaed2d09cb8fa5185231c71653a87/detect-language.json';
        this.arabicUrl = 'https://api.repustate.com/v4/844812bf08eaaed2d09cb8fa5185231c71653a87/score.json';
        this.englishUrl = 'http://text-processing.com/api/sentiment/';
        this.reviewUrl = 'http://localhost:3000/api/reviews/';
        console.log('Hello ReviewsProvider Provider');
    }
    ReviewsProvider.prototype.Ranking = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.rankingUrl, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ReviewsProvider.prototype.DetectLanguage = function (text) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = "text=" + text;
        return this.http.post(this.detectLanguageUrl, body, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ReviewsProvider.prototype.GetSentiment = function (text, lang) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        if (lang == 'ar') {
            var body = "text=" + text + "&lang=" + 'ar';
            return this.http.post(this.arabicUrl, body, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
        }
        else if (lang == 'en') {
            var body = "text=" + text;
            return this.http.post(this.englishUrl, body, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
        }
    };
    ReviewsProvider.prototype.AddReview = function (review, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        var body = { "invoiceID": review.invoiceID,
            "productName": review.productName,
            "category": review.category,
            "productModel": review.productModel,
            "review": review.review,
            "site": review.site,
            "user": review.user,
            "sentiment": review.sentiment
        };
        return this.http.post(this.reviewUrl, body, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ReviewsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ReviewsProvider);
    return ReviewsProvider;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
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

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-review/add-review.module": [
		406,
		2
	],
	"../pages/edit-profile/edit-profile.module": [
		407,
		1
	],
	"../pages/profile/profile.module": [
		408,
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reviews_reviews__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(42);
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






var RankingPage = /** @class */ (function () {
    function RankingPage(nativeStorage, navCtrl, reviewProvider, loadingCtrl) {
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.reviewProvider = reviewProvider;
        this.loadingCtrl = loadingCtrl;
        this.siteArray = [];
        this.loading = null;
    }
    RankingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RankingPage');
        this.showLoading();
        var subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(this.nativeStorage.getItem('token'));
        subscription.subscribe(function (token) {
            console.log("token from observable", token.jwtUserToken);
            _this.reviewProvider.Ranking(token.jwtUserToken).then(function (res) {
                _this.siteArray = res;
                console.log("Response : ", _this.siteArray);
                _this.dismissLoading();
            }).catch(function (err) {
                console.log("error getting data", err);
            });
        }, function (error) {
            console.log("no token", error);
        });
    };
    RankingPage.prototype.showLoading = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                spinner: 'dots',
                content: 'Loading...'
            });
            this.loading.present();
        }
    };
    RankingPage.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    RankingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ranking',template:/*ion-inline-start:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\ranking\ranking.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="height: 6rem;">\n\n      <ion-row>\n\n        <ion-col style="background-color: transparent;  border: none;" col-4>\n\n          <ion-buttons>\n\n            <button (click)="openProfile()" clear ion-button large float-left>\n\n                  <img src="assets/imgs/avatar.png" style=" border-radius: 50%; width: 4rem; height: 4rem;">\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" text-center style="bottom: 1rem;" col-4>\n\n          <h3 text-color="my-custom-color">Ranking</h3>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" col-4>\n\n          <button (click)="presentSearchPrompt()" float-right style="left: 2rem; bottom: 1rem;" ion-button large clear>\n\n                <ion-icon text-color="my-custom-color" name="ios-search-outline"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n  <h2>The Ranking of Sites : </h2>\n\n  <div class="container darker" *ngFor="let site of siteArray ; let i = index">\n\n    <h4>\n\n      {{i+1}}-{{site._id}}\n\n    </h4>\n\n    <hr>\n\n    <div style="width: 80%; word-wrap: break-word;">\n\n      <h6>The Postive Reviews : {{site.postiveReview}}</h6>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\ranking\ranking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_reviews_reviews__["a" /* ReviewsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RankingPage);
    return RankingPage;
}());

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 164:
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
        this.navCtrl.push('AddReviewPage');
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="height: 6rem;">\n\n      <ion-row>\n\n        <ion-col style="background-color: transparent;  border: none;" col-4>\n\n          <ion-buttons>\n\n            <button (click)="openProfile()" clear ion-button large float-left>\n\n                  <img src="assets/imgs/avatar.png" style=" border-radius: 50%; width: 4rem; height: 4rem;">\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" text-center style="bottom: 1rem;" col-4>\n\n          <h3 text-color="my-custom-color">Reviews</h3>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" col-4>\n\n          <button (click)="presentSearchPrompt()" float-right style="left: 2rem; bottom: 1rem;" ion-button large clear>\n\n                <ion-icon text-color="my-custom-color" name="ios-search-outline"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n  <div class="container darker">\n\n    <img src="assets/imgs/avatar.png" alt="Avatar" class="right">\n\n    <h4>\n\n      Islam Tareq\n\n    </h4>\n\n    <hr>\n\n    <div style="width: 80%; word-wrap: break-word;">\n\n      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its\n\n        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to\n\n        using \'Content here, content here\', making it look like readable English.</p>\n\n    </div>\n\n    <span class="time-left">11:01</span>\n\n  </div>\n\n  <ion-fab bottom right>\n\n    <button color="primary" ion-fab mini (click)="addReview()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\reviews\reviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(54);
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
            selector: 'page-login',template:/*ion-inline-start:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div style="text-align: center; margin-bottom: 2rem;">\n\n    <img src="assets/imgs/favorite.png" style="width: 14rem; height: 14rem;">\n\n  </div>\n\n\n\n  <div style="bottom: 4rem; height: 20rem; width: 100%; margin: auto; border-radius: 25px; padding: 2rem;">\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Email</ion-label>\n\n      <ion-input [(ngModel)]="email" type="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Password</ion-label>\n\n      <ion-input [(ngModel)]="password" type="password"></ion-input>\n\n    </ion-item>\n\n    <div float-right style="color: gray; font-size: 12px; margin-top: 1rem;" class="text-hover">\n\n      Forgot Your Password?!\n\n    </div>\n\n  </div>\n\n  <div style=" margin-bottom: 2rem;">\n\n    <ion-row>\n\n      <ion-col col-4 offset-1>\n\n        <button float-left (click)="login()" round small ion-button>Login</button>\n\n      </ion-col>\n\n      <ion-col col-4 offset-2>\n\n        <button float-right (click)="register()" round small ion-button>Register</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div style="width: 100%; height: 10px; border-bottom: 1px solid #A9A9A9; text-align: center; margin-bottom: 1rem;">\n\n    <span style="font-size: 12px; background-color: white; padding: 0 10px;">\n\n        Or Connect With \n\n      </span>\n\n  </div>\n\n\n\n  <div style="text-align: center;">\n\n    <button ion-button color="danger"><ion-icon name="logo-facebook" style="font-size: 20px;"></ion-icon>&nbsp;Facebook</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ranking_ranking__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reviews_reviews__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_short_date_short_date__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_profile_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_reviews_reviews__ = __webpack_require__(107);
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
                        { loadChildren: '../pages/add-review/add-review.module#AddReviewPageModule', name: 'AddReviewPage', segment: 'add-review', priority: 'low', defaultHistory: [] },
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

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 165,
	"./af.js": 165,
	"./ar": 166,
	"./ar-dz": 167,
	"./ar-dz.js": 167,
	"./ar-kw": 168,
	"./ar-kw.js": 168,
	"./ar-ly": 169,
	"./ar-ly.js": 169,
	"./ar-ma": 170,
	"./ar-ma.js": 170,
	"./ar-sa": 171,
	"./ar-sa.js": 171,
	"./ar-tn": 172,
	"./ar-tn.js": 172,
	"./ar.js": 166,
	"./az": 173,
	"./az.js": 173,
	"./be": 174,
	"./be.js": 174,
	"./bg": 175,
	"./bg.js": 175,
	"./bm": 176,
	"./bm.js": 176,
	"./bn": 177,
	"./bn.js": 177,
	"./bo": 178,
	"./bo.js": 178,
	"./br": 179,
	"./br.js": 179,
	"./bs": 180,
	"./bs.js": 180,
	"./ca": 181,
	"./ca.js": 181,
	"./cs": 182,
	"./cs.js": 182,
	"./cv": 183,
	"./cv.js": 183,
	"./cy": 184,
	"./cy.js": 184,
	"./da": 185,
	"./da.js": 185,
	"./de": 186,
	"./de-at": 187,
	"./de-at.js": 187,
	"./de-ch": 188,
	"./de-ch.js": 188,
	"./de.js": 186,
	"./dv": 189,
	"./dv.js": 189,
	"./el": 190,
	"./el.js": 190,
	"./en-au": 191,
	"./en-au.js": 191,
	"./en-ca": 192,
	"./en-ca.js": 192,
	"./en-gb": 193,
	"./en-gb.js": 193,
	"./en-ie": 194,
	"./en-ie.js": 194,
	"./en-il": 195,
	"./en-il.js": 195,
	"./en-nz": 196,
	"./en-nz.js": 196,
	"./eo": 197,
	"./eo.js": 197,
	"./es": 198,
	"./es-do": 199,
	"./es-do.js": 199,
	"./es-us": 200,
	"./es-us.js": 200,
	"./es.js": 198,
	"./et": 201,
	"./et.js": 201,
	"./eu": 202,
	"./eu.js": 202,
	"./fa": 203,
	"./fa.js": 203,
	"./fi": 204,
	"./fi.js": 204,
	"./fo": 205,
	"./fo.js": 205,
	"./fr": 206,
	"./fr-ca": 207,
	"./fr-ca.js": 207,
	"./fr-ch": 208,
	"./fr-ch.js": 208,
	"./fr.js": 206,
	"./fy": 209,
	"./fy.js": 209,
	"./gd": 210,
	"./gd.js": 210,
	"./gl": 211,
	"./gl.js": 211,
	"./gom-latn": 212,
	"./gom-latn.js": 212,
	"./gu": 213,
	"./gu.js": 213,
	"./he": 214,
	"./he.js": 214,
	"./hi": 215,
	"./hi.js": 215,
	"./hr": 216,
	"./hr.js": 216,
	"./hu": 217,
	"./hu.js": 217,
	"./hy-am": 218,
	"./hy-am.js": 218,
	"./id": 219,
	"./id.js": 219,
	"./is": 220,
	"./is.js": 220,
	"./it": 221,
	"./it.js": 221,
	"./ja": 222,
	"./ja.js": 222,
	"./jv": 223,
	"./jv.js": 223,
	"./ka": 224,
	"./ka.js": 224,
	"./kk": 225,
	"./kk.js": 225,
	"./km": 226,
	"./km.js": 226,
	"./kn": 227,
	"./kn.js": 227,
	"./ko": 228,
	"./ko.js": 228,
	"./ky": 229,
	"./ky.js": 229,
	"./lb": 230,
	"./lb.js": 230,
	"./lo": 231,
	"./lo.js": 231,
	"./lt": 232,
	"./lt.js": 232,
	"./lv": 233,
	"./lv.js": 233,
	"./me": 234,
	"./me.js": 234,
	"./mi": 235,
	"./mi.js": 235,
	"./mk": 236,
	"./mk.js": 236,
	"./ml": 237,
	"./ml.js": 237,
	"./mn": 238,
	"./mn.js": 238,
	"./mr": 239,
	"./mr.js": 239,
	"./ms": 240,
	"./ms-my": 241,
	"./ms-my.js": 241,
	"./ms.js": 240,
	"./mt": 242,
	"./mt.js": 242,
	"./my": 243,
	"./my.js": 243,
	"./nb": 244,
	"./nb.js": 244,
	"./ne": 245,
	"./ne.js": 245,
	"./nl": 246,
	"./nl-be": 247,
	"./nl-be.js": 247,
	"./nl.js": 246,
	"./nn": 248,
	"./nn.js": 248,
	"./pa-in": 249,
	"./pa-in.js": 249,
	"./pl": 250,
	"./pl.js": 250,
	"./pt": 251,
	"./pt-br": 252,
	"./pt-br.js": 252,
	"./pt.js": 251,
	"./ro": 253,
	"./ro.js": 253,
	"./ru": 254,
	"./ru.js": 254,
	"./sd": 255,
	"./sd.js": 255,
	"./se": 256,
	"./se.js": 256,
	"./si": 257,
	"./si.js": 257,
	"./sk": 258,
	"./sk.js": 258,
	"./sl": 259,
	"./sl.js": 259,
	"./sq": 260,
	"./sq.js": 260,
	"./sr": 261,
	"./sr-cyrl": 262,
	"./sr-cyrl.js": 262,
	"./sr.js": 261,
	"./ss": 263,
	"./ss.js": 263,
	"./sv": 264,
	"./sv.js": 264,
	"./sw": 265,
	"./sw.js": 265,
	"./ta": 266,
	"./ta.js": 266,
	"./te": 267,
	"./te.js": 267,
	"./tet": 268,
	"./tet.js": 268,
	"./tg": 269,
	"./tg.js": 269,
	"./th": 270,
	"./th.js": 270,
	"./tl-ph": 271,
	"./tl-ph.js": 271,
	"./tlh": 272,
	"./tlh.js": 272,
	"./tr": 273,
	"./tr.js": 273,
	"./tzl": 274,
	"./tzl.js": 274,
	"./tzm": 275,
	"./tzm-latn": 276,
	"./tzm-latn.js": 276,
	"./tzm.js": 275,
	"./ug-cn": 277,
	"./ug-cn.js": 277,
	"./uk": 278,
	"./uk.js": 278,
	"./ur": 279,
	"./ur.js": 279,
	"./uz": 280,
	"./uz-latn": 281,
	"./uz-latn.js": 281,
	"./uz.js": 280,
	"./vi": 282,
	"./vi.js": 282,
	"./x-pseudo": 283,
	"./x-pseudo.js": 283,
	"./yo": 284,
	"./yo.js": 284,
	"./zh-cn": 285,
	"./zh-cn.js": 285,
	"./zh-hk": 286,
	"./zh-hk.js": 286,
	"./zh-tw": 287,
	"./zh-tw.js": 287
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
webpackContext.id = 386;

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(54);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Studies\Graduation Project\Ionic\front-end\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\Studies\Graduation Project\Ionic\front-end\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__["a" /* ProfileProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ranking_ranking__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(164);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n\n  <ion-tab [root]="tab1Root" tabTitle="Reviews" tabIcon="ios-chatboxes" [rootParams]="userData"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Ranks" tabIcon="ios-ribbon" [rootParams]="userData"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map