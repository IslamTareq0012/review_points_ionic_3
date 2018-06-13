webpackJsonp([0],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(281);
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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(104);
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
    function ProfilePage(navCtrl, navParams, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
        console.log("user data", this.navParams.data);
        this.userData = this.navParams.data;
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        console.log("tabs element", this.tabBarElement);
    };
    ProfilePage.prototype.editProfileNav = function () {
        this.navCtrl.push('EditProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\profile\profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="editProfileNav()" ion-button large clear>\n\n          <ion-icon name="ios-create-outline" style="font-size: 30px;"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="content">\n\n\n\n  <div style="border:1px solid #CC0000; height: 15rem; width: 100%; margin: auto; border-radius: 25px; margin-bottom: 3rem;">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          <img src="{{imageUrl}}{{userData.userImage}}" style="border:1px solid #cccccc; border-radius: 25px; width: 12rem; height: 12rem;">\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          <div style="padding-top: 2rem;">\n\n            <p style=" margin: 2px; font-weight: bold;">\n\n              Reviews:\n\n            </p>\n\n            <p style="margin: 2px; color: #CC0000;">\n\n              50\n\n            </p>\n\n            <hr>\n\n            <p style=" margin: 2px; font-weight: bold;">\n\n              Points:\n\n            </p>\n\n            <p style=" margin: 2px; color: #CC0000;">\n\n              150\n\n            </p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <div style="border:1px solid #CC0000;width: 100%; margin: auto; border-radius: 25px; padding-left: 1rem;">\n\n    <ion-slides pager="true">\n\n      <ion-slide>\n\n        <div style="text-align: left;">\n\n          <p style="font-weight: bold;">Name:</p>\n\n          <p style=" margin: 1px; color: #CC0000;">{{userData.fullName}}</p><br>\n\n          <p style="font-weight: bold;">Email:</p>\n\n          <p style=" margin: 1px; color: #CC0000;">{{userData.email}}</p><br>\n\n          <p style="font-weight: bold;">DOB:</p>\n\n          <p style=" margin: 1px; color: #CC0000;">12-2-1997</p><br><br>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div style="margin-bottom: 1rem;">\n\n          <ion-scroll scrollY="true" style="height: 30rem; width: 100%;">\n\n            <div class="container darker">\n\n              <img src="assets/imgs/avatar.png" alt="Avatar" class="right">\n\n              <h4>\n\n                Islam Tareq\n\n              </h4>\n\n              <hr>\n\n              <div style="width: 80%; word-wrap: break-word;">\n\n                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n\n                  at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n\n                  as opposed to using \'Content here, content here\', making it look like readable English.</p>\n\n              </div>\n\n              <span class="time-left">11:01</span>\n\n            </div>\n\n            <div class="container darker">\n\n              <img src="assets/imgs/avatar.png" alt="Avatar" class="right">\n\n              <h4>\n\n                Islam Tareq\n\n              </h4>\n\n              <hr>\n\n              <div style="width: 80%; word-wrap: break-word;">\n\n                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking\n\n                  at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n\n                  as opposed to using \'Content here, content here\', making it look like readable English.</p>\n\n              </div>\n\n              <span class="time-left">11:01</span>\n\n            </div>\n\n          </ion-scroll>\n\n        </div>\n\n\n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n        <div *ngFor="let point of userData.points" style="text-align: left;">\n\n          <ion-scroll scrollY="true" style="height: 30rem; width: 100%;">\n\n            <p style="font-weight: bold;">{{point.siteName}}:</p>\n\n            <p style=" margin: 1px; color: #CC0000;">{{point.sitePoints}}</p><br>\n\n          </ion-scroll>\n\n        </div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Studies\Graduation Project\Ionic\front-end\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map