webpackJsonp([3],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(51);
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
        this.forgotPasswordUrl = 'http://localhost:3000/api/auth/forgot_password';
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
        var body = {
            "email": credentials.email, "password": credentials.password,
            "resetPasswordToken": credentials.resetPasswordToken,
            "resetPasswordExpires": credentials.resetPasswordExpires,
            "points": credentials.points,
            "notificationToken": credentials.notificationToken,
            "fullName": credentials.fullName,
            "userImage": credentials.userImage
        };
        return this.http.post(this.signupUrl, body, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    AuthProvider.prototype.forgotPassword = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.forgotPasswordUrl, email, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-review/add-review.module": [
		415,
		2
	],
	"../pages/edit-profile/edit-profile.module": [
		417,
		1
	],
	"../pages/profile/profile.module": [
		416,
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reviews_reviews__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(35);
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
            selector: 'page-ranking',template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\ranking\ranking.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="height: 6rem;">\n\n      <ion-row>\n\n        <ion-col style="background-color: transparent;  border: none;" col-4>\n\n          <ion-buttons>\n\n            <button (click)="openProfile()" clear ion-button large float-left>\n\n                  <img src="assets/imgs/avatar.png" style=" border-radius: 50%; width: 4rem; height: 4rem;">\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" text-center style="bottom: 1rem;" col-4>\n\n          <h3 text-color="my-custom-color">Ranking</h3>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" col-4>\n\n          <button (click)="presentSearchPrompt()" float-right style="left: 2rem; bottom: 1rem;" ion-button large clear>\n\n                <ion-icon text-color="my-custom-color" name="ios-search-outline"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n  <h2>The Ranking of Sites : </h2>\n\n  <div class="container darker" *ngFor="let site of siteArray ; let i = index">\n\n    <h4>\n\n      {{i+1}}-{{site._id}}\n\n    </h4>\n\n    <hr>\n\n    <div style="width: 80%; word-wrap: break-word;">\n\n      <h6>The Postive Reviews : {{site.postiveReview}}</h6>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\ranking\ranking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_reviews_reviews__["a" /* ReviewsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RankingPage);
    return RankingPage;
}());

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reviews_reviews__ = __webpack_require__(56);
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
    function ReviewsPage(profileProvider, reviewProvider, nativeStorage, loadingCtrl, navCtrl, navParams, alertCtrl) {
        this.profileProvider = profileProvider;
        this.reviewProvider = reviewProvider;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = null;
        this.isSearch = false;
        this.userData = {};
        this.reviewsData = [];
        this.imageUrl = "http://localhost:3000/images/";
    }
    ReviewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoading();
        console.log('ionViewDidLoad ReviewsPage');
        var subscription = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.nativeStorage.getItem('token'));
        subscription.subscribe(function (token) {
            console.log("token in reviews page", token.jwtUserToken);
            _this.profileProvider.getUser(token.jwtUserToken).then(function (res) {
                console.log("user", res);
                _this.userData = res;
                _this.reviewProvider.getAllReviews().then(function (res) {
                    console.log("all reviews", res);
                    _this.reviewsData = res;
                    _this.tempReviews = res;
                    _this.dismissLoading();
                }).catch(function (err) {
                    console.log("getting reviews error", err);
                });
            }).catch(function (err) {
                console.log("getting user error", err);
            });
        }, function (err) {
            console.log("getting token error", err);
        });
    };
    ReviewsPage.prototype.ionViewWillEnter = function () {
    };
    ReviewsPage.prototype.showLoading = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                spinner: 'dots',
                content: 'Loading...'
            });
            this.loading.present();
        }
    };
    ReviewsPage.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    ReviewsPage.prototype.presentSearchPrompt = function () {
        var _this = this;
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
                    role: 'cancel'
                },
                {
                    text: 'Search',
                    handler: function (data) {
                        _this.showLoading();
                        var searchData = {
                            site: null,
                            category: null,
                            productName: null
                        };
                        console.log("search options", data);
                        if (data.productName != "") {
                            searchData.productName = data.productName;
                        }
                        if (data.siteName != "") {
                            searchData.site = data.siteName;
                        }
                        if (data.category != "") {
                            searchData.category = data.category;
                        }
                        var subscription = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(_this.nativeStorage.getItem('token'));
                        subscription.subscribe(function (token) {
                            _this.reviewProvider.search(token.jwtUserToken, searchData)
                                .then(function (res) {
                                console.log("search result", res);
                                if (res.length != 0) {
                                    _this.isSearch = true;
                                    _this.reviewsData = res;
                                    _this.dismissLoading();
                                }
                                else if (res.length == 0) {
                                    var alert_1 = _this.alertCtrl.create({
                                        title: 'No Results!',
                                        subTitle: 'unfortunately no reviews of thise search data',
                                        buttons: [{
                                                text: 'Cancel',
                                                role: 'cancel'
                                            }]
                                    });
                                    alert_1.present();
                                    _this.dismissLoading();
                                }
                            }).catch(function (err) {
                                console.log("search error", err);
                            });
                        }, function (err) {
                            console.log("error getting token", err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ReviewsPage.prototype.cancelSearch = function () {
        this.isSearch = false;
        this.reviewsData = this.tempReviews;
    };
    ReviewsPage.prototype.openProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    ReviewsPage.prototype.addReview = function () {
        this.navCtrl.push('AddReviewPage');
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-grid style="height: 6rem;">\n\n      <ion-row>\n\n        <ion-col style="background-color: transparent;  border: none;" col-4>\n\n          <ion-buttons>\n\n            <button (click)="openProfile()" clear ion-button large float-left>\n\n                  <img src="{{imageUrl}}{{userData.userImage}}" style=" border-radius: 50%; width: 4rem; height: 4rem;">\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" text-center style="bottom: 1rem;" col-4>\n\n          <h3 text-color="my-custom-color">Reviews</h3>\n\n        </ion-col>\n\n        <ion-col style="background-color: transparent; border: none;" col-4>\n\n          <button *ngIf="!isSearch" (click)="presentSearchPrompt()" float-right style="left: 2rem; bottom: 1rem;" ion-button large\n\n            clear>\n\n                <ion-icon text-color="my-custom-color" name="ios-search-outline"></ion-icon>\n\n          </button>\n\n          <button *ngIf="isSearch" (click)="cancelSearch()" float-right style="left: 2rem; bottom: 1rem;" ion-button large clear>\n\n              <ion-icon text-color="my-custom-color" name="ios-close-circle-outline"></ion-icon>\n\n        </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n\n\n  <ion-list [virtualScroll]="reviewsData" [approxItemHeight]="\'120px\'">\n\n    <ion-item *virtualItem="let review">\n\n      <div *ngIf="review.user">\n\n        <div class="container darker">\n\n          <img src="{{imageUrl}}{{review.user.userImage}}" alt="Avatar" class="right">\n\n          <h4>\n\n            {{review.user.fullName}}\n\n          </h4>\n\n          <hr>\n\n          <div style="width: 80%; word-wrap: break-word;">\n\n            <p text-wrap>{{review.review}}</p>\n\n          </div>\n\n          <span class="time-left">{{review.dateCreated| longDate}}</span>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right>\n\n    <button color="primary" ion-fab mini (click)="addReview()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\reviews\reviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_reviews_reviews__["a" /* ReviewsProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(57);
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
    function LoginPage(fcm, profileProvider, toastCtrl, nativeStorage, navCtrl, navParams, authProvider, alertCtrl) {
        this.fcm = fcm;
        this.profileProvider = profileProvider;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var cerdentials = {
            email: this.email,
            password: this.password
        };
        this.authProvider.login(cerdentials).then(function (res) {
            console.log("login response", res);
            // this.fcm.getToken().then(token => {
            // this.profileProvider.updateUserFcmToken(res.token, token)
            //   .then(res => {
            _this.nativeStorage.setItem("token", { jwtUserToken: res.token }).then(function (saved) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return console.error('Error storing item', error); });
            // }).catch(err => {
            //   console.log("update user fcm token error", err);
            // });
            //console.log("user firebase notification token", token);
            //});
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
    LoginPage.prototype.resestPassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Insert your email',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email'
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
                    text: 'Send',
                    handler: function (data) {
                        var emailForm = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (emailForm.test(data.email)) {
                            var body = {
                                email: data.email
                            };
                            _this.authProvider.forgotPassword(body)
                                .then(function (res) {
                                _this.showToast('Kindly check your email for further instructions');
                            }).catch(function (err) {
                                console.log("error reset password", err);
                                _this.showToast("Invalid mail");
                            });
                        }
                        else {
                            _this.showToast("Invalid mail format");
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('EditProfilePage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div style="text-align: center; margin-bottom: 2rem;">\n\n    <img src="assets/imgs/favorite.png" style="width: 14rem; height: 14rem;">\n\n  </div>\n\n\n\n  <div style="bottom: 4rem; height: 20rem; width: 100%; margin: auto; border-radius: 25px; padding: 2rem;">\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Email</ion-label>\n\n      <ion-input [(ngModel)]="email" type="email"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Password</ion-label>\n\n      <ion-input [(ngModel)]="password" type="password"></ion-input>\n\n    </ion-item>\n\n    <div (click)="resestPassword()" float-right style="color: gray; font-size: 12px; margin-top: 1rem;" class="text-hover">\n\n      Forgot Your Password?!\n\n    </div>\n\n  </div>\n\n  <div style=" margin-bottom: 2rem;">\n\n    <ion-row>\n\n      <ion-col col-4 offset-1>\n\n        <button float-left (click)="login()" round small ion-button>Login</button>\n\n      </ion-col>\n\n      <ion-col col-4 offset-2>\n\n        <button float-right (click)="register()" round small ion-button>Register</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n\n\n  <div style="width: 100%; height: 10px; border-bottom: 1px solid #A9A9A9; text-align: center; margin-bottom: 1rem;">\n\n    <span style="font-size: 12px; background-color: white; padding: 0 10px;">\n\n        Or Connect With \n\n      </span>\n\n  </div>\n\n\n\n  <div style="text-align: center;">\n\n    <button ion-button color="danger"><ion-icon name="logo-facebook" style="font-size: 20px;"></ion-icon>&nbsp;Facebook</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 333:
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

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ranking_ranking__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reviews_reviews__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_long_date_long_date__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_reviews_reviews__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_fcm_fcm__ = __webpack_require__(408);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ranking_ranking__["a" /* RankingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_long_date_long_date__["a" /* LongDatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-review/add-review.module#AddReviewPageModule', name: 'AddReviewPage', segment: 'add-review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ranking_ranking__["a" /* RankingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_16__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_reviews_reviews__["a" /* ReviewsProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_reviews_reviews__["a" /* ReviewsProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_18__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 166,
	"./af.js": 166,
	"./ar": 167,
	"./ar-dz": 168,
	"./ar-dz.js": 168,
	"./ar-kw": 169,
	"./ar-kw.js": 169,
	"./ar-ly": 170,
	"./ar-ly.js": 170,
	"./ar-ma": 171,
	"./ar-ma.js": 171,
	"./ar-sa": 172,
	"./ar-sa.js": 172,
	"./ar-tn": 173,
	"./ar-tn.js": 173,
	"./ar.js": 167,
	"./az": 174,
	"./az.js": 174,
	"./be": 175,
	"./be.js": 175,
	"./bg": 176,
	"./bg.js": 176,
	"./bm": 177,
	"./bm.js": 177,
	"./bn": 178,
	"./bn.js": 178,
	"./bo": 179,
	"./bo.js": 179,
	"./br": 180,
	"./br.js": 180,
	"./bs": 181,
	"./bs.js": 181,
	"./ca": 182,
	"./ca.js": 182,
	"./cs": 183,
	"./cs.js": 183,
	"./cv": 184,
	"./cv.js": 184,
	"./cy": 185,
	"./cy.js": 185,
	"./da": 186,
	"./da.js": 186,
	"./de": 187,
	"./de-at": 188,
	"./de-at.js": 188,
	"./de-ch": 189,
	"./de-ch.js": 189,
	"./de.js": 187,
	"./dv": 190,
	"./dv.js": 190,
	"./el": 191,
	"./el.js": 191,
	"./en-au": 192,
	"./en-au.js": 192,
	"./en-ca": 193,
	"./en-ca.js": 193,
	"./en-gb": 194,
	"./en-gb.js": 194,
	"./en-ie": 195,
	"./en-ie.js": 195,
	"./en-il": 196,
	"./en-il.js": 196,
	"./en-nz": 197,
	"./en-nz.js": 197,
	"./eo": 198,
	"./eo.js": 198,
	"./es": 199,
	"./es-do": 200,
	"./es-do.js": 200,
	"./es-us": 201,
	"./es-us.js": 201,
	"./es.js": 199,
	"./et": 202,
	"./et.js": 202,
	"./eu": 203,
	"./eu.js": 203,
	"./fa": 204,
	"./fa.js": 204,
	"./fi": 205,
	"./fi.js": 205,
	"./fo": 206,
	"./fo.js": 206,
	"./fr": 207,
	"./fr-ca": 208,
	"./fr-ca.js": 208,
	"./fr-ch": 209,
	"./fr-ch.js": 209,
	"./fr.js": 207,
	"./fy": 210,
	"./fy.js": 210,
	"./gd": 211,
	"./gd.js": 211,
	"./gl": 212,
	"./gl.js": 212,
	"./gom-latn": 213,
	"./gom-latn.js": 213,
	"./gu": 214,
	"./gu.js": 214,
	"./he": 215,
	"./he.js": 215,
	"./hi": 216,
	"./hi.js": 216,
	"./hr": 217,
	"./hr.js": 217,
	"./hu": 218,
	"./hu.js": 218,
	"./hy-am": 219,
	"./hy-am.js": 219,
	"./id": 220,
	"./id.js": 220,
	"./is": 221,
	"./is.js": 221,
	"./it": 222,
	"./it.js": 222,
	"./ja": 223,
	"./ja.js": 223,
	"./jv": 224,
	"./jv.js": 224,
	"./ka": 225,
	"./ka.js": 225,
	"./kk": 226,
	"./kk.js": 226,
	"./km": 227,
	"./km.js": 227,
	"./kn": 228,
	"./kn.js": 228,
	"./ko": 229,
	"./ko.js": 229,
	"./ky": 230,
	"./ky.js": 230,
	"./lb": 231,
	"./lb.js": 231,
	"./lo": 232,
	"./lo.js": 232,
	"./lt": 233,
	"./lt.js": 233,
	"./lv": 234,
	"./lv.js": 234,
	"./me": 235,
	"./me.js": 235,
	"./mi": 236,
	"./mi.js": 236,
	"./mk": 237,
	"./mk.js": 237,
	"./ml": 238,
	"./ml.js": 238,
	"./mn": 239,
	"./mn.js": 239,
	"./mr": 240,
	"./mr.js": 240,
	"./ms": 241,
	"./ms-my": 242,
	"./ms-my.js": 242,
	"./ms.js": 241,
	"./mt": 243,
	"./mt.js": 243,
	"./my": 244,
	"./my.js": 244,
	"./nb": 245,
	"./nb.js": 245,
	"./ne": 246,
	"./ne.js": 246,
	"./nl": 247,
	"./nl-be": 248,
	"./nl-be.js": 248,
	"./nl.js": 247,
	"./nn": 249,
	"./nn.js": 249,
	"./pa-in": 250,
	"./pa-in.js": 250,
	"./pl": 251,
	"./pl.js": 251,
	"./pt": 252,
	"./pt-br": 253,
	"./pt-br.js": 253,
	"./pt.js": 252,
	"./ro": 254,
	"./ro.js": 254,
	"./ru": 255,
	"./ru.js": 255,
	"./sd": 256,
	"./sd.js": 256,
	"./se": 257,
	"./se.js": 257,
	"./si": 258,
	"./si.js": 258,
	"./sk": 259,
	"./sk.js": 259,
	"./sl": 260,
	"./sl.js": 260,
	"./sq": 261,
	"./sq.js": 261,
	"./sr": 262,
	"./sr-cyrl": 263,
	"./sr-cyrl.js": 263,
	"./sr.js": 262,
	"./ss": 264,
	"./ss.js": 264,
	"./sv": 265,
	"./sv.js": 265,
	"./sw": 266,
	"./sw.js": 266,
	"./ta": 267,
	"./ta.js": 267,
	"./te": 268,
	"./te.js": 268,
	"./tet": 269,
	"./tet.js": 269,
	"./tg": 270,
	"./tg.js": 270,
	"./th": 271,
	"./th.js": 271,
	"./tl-ph": 272,
	"./tl-ph.js": 272,
	"./tlh": 273,
	"./tlh.js": 273,
	"./tr": 274,
	"./tr.js": 274,
	"./tzl": 275,
	"./tzl.js": 275,
	"./tzm": 276,
	"./tzm-latn": 277,
	"./tzm-latn.js": 277,
	"./tzm.js": 276,
	"./ug-cn": 278,
	"./ug-cn.js": 278,
	"./uk": 279,
	"./uk.js": 279,
	"./ur": 280,
	"./ur.js": 280,
	"./uz": 281,
	"./uz-latn": 282,
	"./uz-latn.js": 282,
	"./uz.js": 281,
	"./vi": 283,
	"./vi.js": 283,
	"./x-pseudo": 284,
	"./x-pseudo.js": 284,
	"./yo": 285,
	"./yo.js": 285,
	"./zh-cn": 286,
	"./zh-cn.js": 286,
	"./zh-hk": 287,
	"./zh-hk.js": 287,
	"./zh-tw": 288,
	"./zh-tw.js": 288
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
webpackContext.id = 389;

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__ = __webpack_require__(45);
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

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(409);
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
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FcmProvider = /** @class */ (function () {
    function FcmProvider(http) {
        this.http = http;
        console.log('Hello FcmProvider Provider');
    }
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(35);
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
        this.updateFcmTokenUrl = 'http://localhost:3000/api/users/getReviews';
        console.log('Hello ProfileProvider Provider');
    }
    ProfileProvider.prototype.getUser = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'Authorization');
        headers.append('Authorization', 'Bearer' + ' ' + token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.profileUrl, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ProfileProvider.prototype.editUser = function (token, userData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'Authorization');
        headers.append('Authorization', 'Bearer' + ' ' + token);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.profileUrl, userData, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ProfileProvider.prototype.getUserReviews = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'Authorization');
        headers.append('Authorization', 'Bearer' + ' ' + token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.userReviewsUrl, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ProfileProvider.prototype.updateUserFcmToken = function (userToken, FcmToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Headers', 'Authorization');
        headers.append('Authorization', 'Bearer' + ' ' + userToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.updateFcmTokenUrl, FcmToken, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(35);
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
        this.searchUrl = "http://localhost:3000/api/reviews/search";
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
        var body = {
            "invoiceID": review.invoiceID,
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
    ReviewsProvider.prototype.getAllReviews = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.reviewUrl, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ReviewsProvider.prototype.search = function (token, searchData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.post(this.searchUrl, searchData, { headers: headers }).map(function (res) { return res.json(); }).toPromise();
    };
    ReviewsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ReviewsProvider);
    return ReviewsProvider;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ranking_ranking__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(290);
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

/***/ })

},[335]);
//# sourceMappingURL=main.js.map