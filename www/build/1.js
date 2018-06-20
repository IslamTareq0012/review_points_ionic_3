webpackJsonp([1],{

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function() { return AddReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_review__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddReviewPageModule = /** @class */ (function () {
    function AddReviewPageModule() {
    }
    AddReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_review__["a" /* AddReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_review__["a" /* AddReviewPage */]),
            ],
        })
    ], AddReviewPageModule);
    return AddReviewPageModule;
}());

//# sourceMappingURL=add-review.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reviews_reviews__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__);
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
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddReviewPage = /** @class */ (function () {
    function AddReviewPage(nativeStorage, navCtrl, profileProvider, reviewProvider, loadingCtrl, alertCtrl) {
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.profileProvider = profileProvider;
        this.reviewProvider = reviewProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.siteArray = [];
        this.categoryArray = [];
        this.categoryBool = false;
        this.reviewData = {};
        this.userData = {};
        this.loading = null;
    }
    AddReviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddReviewPage');
        this.showLoading();
        var subscription = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(this.nativeStorage.getItem('token'));
        subscription.subscribe(function (token) {
            console.log("token from observable", token.jwtUserToken);
            _this.profileProvider.getUser(token.jwtUserToken).then(function (res) {
                _this.userData = res._id;
                _this.userID = res._id;
                _this.userToken = token.jwtUserToken;
                console.log("User ID", _this.userID);
                _this.reviewProvider.GetSites().then(function (res) {
                    console.log(res);
                    _this.siteArray = res;
                }).catch(function (err) {
                    console.log(err);
                });
                _this.dismissLoading();
            }).catch(function (err) {
                console.log("error getting user", err);
            });
        }, function (error) {
            console.log("no token", error);
        });
    };
    AddReviewPage.prototype.setSiteValue = function (siteID) {
        var _this = this;
        console.log(siteID);
        if (siteID) {
            this.categoryBool = true;
            this.showLoading();
            this.reviewProvider.GetCategories(siteID).then(function (res) {
                console.log(res);
                _this.categoryArray = res;
                _this.dismissLoading();
            }).catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.categoryBool = false;
        }
    };
    AddReviewPage.prototype.CheckLanguage = function () {
        var _this = this;
        this.showLoading();
        this.reviewProvider.DetectLanguage(this.review).then(function (res) {
            _this.detectText = res.language;
            console.log("Language is ", _this.detectText);
            _this.reviewProvider.GetSentiment(_this.review, _this.detectText).then(function (res) {
                _this.showLoading();
                if (_this.detectText == 'en') {
                    _this.sentiment = res.probability.pos;
                    console.log("Score is ", _this.sentiment);
                }
                else if (_this.detectText == 'ar') {
                    _this.sentiment = res.score;
                    console.log("Score is ", _this.sentiment);
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Cannot Define your language please write on Arabic or English',
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
                for (var i = 0; i < _this.siteArray.length; i++) {
                    if (_this.siteID == _this.siteArray[i]._id) {
                        console.log(_this.siteArray[i].siteName);
                        _this.siteName = _this.siteArray[i].siteName;
                        break;
                    }
                }
                _this.reviewData = {
                    "invoiceID": _this.invoiceID,
                    "productName": _this.productName,
                    "category": _this.categoryID,
                    "productModel": _this.productModel,
                    "review": _this.review,
                    "site": _this.siteName,
                    "user": _this.userID,
                    "sentiment": _this.sentiment
                };
                console.log(_this.reviewData);
                _this.reviewProvider.AddReview(_this.reviewData, _this.userToken).then(function (res) {
                    console.log(res);
                    var alert = _this.alertCtrl.create({
                        title: 'Alert',
                        subTitle: 'Thanks for your review',
                        buttons: [
                            { text: 'Ok',
                                handler: function () {
                                    _this.navCtrl.pop();
                                } }
                        ]
                    });
                    alert.present();
                    _this.dismissLoading();
                }).catch(function (err) {
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Sorry please try again Later',
                        buttons: ['Ok']
                    });
                    alert.present();
                    console.log("error adding Review ", err);
                });
            }).catch(function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'Cannot Get score of sentiment',
                    buttons: ['Ok']
                });
                alert.present();
                console.log("error getting score ", err);
            });
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Cannot Define your language please write on Arabic or English',
                buttons: ['Ok']
            });
            alert.present();
            _this.dismissLoading();
            console.log("error detecting Language", err);
        });
    };
    AddReviewPage.prototype.AddReview = function () {
        console.log(this.detectText);
        console.log("ssss0", this.CheckLanguage());
        console.log(this.sentiment);
        console.log(this.invoiceID);
        console.log(this.productModel);
        console.log(this.productName);
        console.log(this.siteID);
        console.log(this.categoryID);
        console.log(this.review);
    };
    AddReviewPage.prototype.showLoading = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                spinner: 'dots',
                content: 'Loading...'
            });
            this.loading.present();
        }
    };
    AddReviewPage.prototype.dismissLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    AddReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-review',template:/*ion-inline-start:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\add-review\add-review.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Add Review</ion-title>\n    <ion-buttons end>\n      <button  (click)="AddReview()" ion-button large clear>\n            <ion-icon name="md-checkmark" style="font-size: 20px;"></ion-icon>&nbsp;Add\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style=" border:1px solid #CC0000;height: 52rem; width: 100%; margin: auto; border-radius: 25px; padding: 2rem;">\n    <ion-item>\n      <ion-label color="primary" floating>invoiceID</ion-label>\n      <ion-input [(ngModel)]="invoiceID"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Product Name</ion-label>\n      <ion-input [(ngModel)]="productName"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" floating>Product Model</ion-label>\n        <ion-input [(ngModel)]="productModel"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color="primary" floating>Site</ion-label>\n        <ion-select color="primary" floating (ionChange)="setSiteValue(siteID)" [(ngModel)]="siteID">\n           <ion-option color="primary" floating value={{site._id}} *ngFor="let site of siteArray; let i = index" floating  >{{site.siteName}}</ion-option>\n         </ion-select>\n        </ion-item> \n        <ion-item *ngIf="categoryBool">\n            <ion-label color="primary" floating>Category</ion-label>\n          <ion-select color="primary" floating [(ngModel)]="categoryID" >\n             <ion-option  value={{category.categoryName}} *ngFor="let category of categoryArray; let i = index" floating  >{{category.categoryName}}</ion-option>\n           </ion-select>\n          </ion-item> \n      <ion-item>\n        <ion-label color="primary" floating>Review</ion-label>\n        <ion-textarea [(ngModel)]="review"></ion-textarea>\n      </ion-item>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\add-review\add-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_reviews_reviews__["a" /* ReviewsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddReviewPage);
    return AddReviewPage;
}());

//# sourceMappingURL=add-review.js.map

/***/ })

});
//# sourceMappingURL=1.js.map