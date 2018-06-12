webpackJsonp([1],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(102);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
        this.profileData = false;
    }
    EditProfilePage.prototype.ionViewWillEnter = function () {
        if (this.profileData) {
            this.tabBarElement.style.display = 'none';
        }
    };
    EditProfilePage.prototype.ionViewWillLeave = function () {
        if (this.profileData) {
            this.tabBarElement.style.display = 'flex';
        }
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        if (this.profileData) {
            this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
            console.log("tabs element", this.tabBarElement);
        }
    };
    EditProfilePage.prototype.edit = function () {
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"D:\proj\Ionic\gp-user\src\pages\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Edit Profile</ion-title>\n    <ion-buttons end>\n      <button *ngIf="profileData" (click)="edit()" ion-button large clear>\n            <ion-icon name="md-checkmark" style="font-size: 20px;"></ion-icon>&nbsp;Save\n      </button>\n      <button *ngIf="!profileData" (click)="edit()" ion-button large clear>\n            <ion-icon name="md-checkmark" style="font-size: 20px;"></ion-icon>&nbsp;Register\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style=" border:1px solid #CC0000;height: 40rem; width: 100%; margin: auto; border-radius: 25px; padding: 2rem;">\n    <img src="assets/imgs/avatar.png" style="border:1px solid #cccccc; border-radius: 25px; width: 12rem; height: 12rem;">\n    <ion-item>\n      <ion-label color="primary" floating>Name</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input type="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Date Of Birth</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map