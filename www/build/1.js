webpackJsonp([1],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(414);
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

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(42);
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
    function EditProfilePage(nativeStorage, navCtrl, navParams, authProvider, alertCtrl) {
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.profileData = false;
        this.userImage = null;
        this.userData = this.navParams.get("userData");
        if (this.userData == null) {
            console.log("RegisterPage", this.userData);
            this.profileData = false;
        }
        else {
            console.log("EditProfilePage", this.userData);
            this.profileData = true;
        }
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
    EditProfilePage.prototype.SignUp = function () {
    };
    EditProfilePage.prototype.edit = function () {
        var _this = this;
        var emailForm = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(this.email);
        console.log(this.name);
        console.log(this.password);
        console.log(this.confirmPassword);
        console.log(this.myDate);
        if (this.password == this.confirmPassword && emailForm.test(this.email) && (this.email && this.password && this.confirmPassword && this.myDate && this.name) != undefined) {
            console.log("valid");
            var cerdentials = {
                email: this.email,
                password: this.password,
                resetPasswordToken: "undefined",
                resetPasswordExpires: 0,
                points: [],
                notificationToken: " N/A",
                fullName: this.name,
                userImage: this.userImage
            };
            console.log("Card : ", cerdentials);
            this.authProvider.SignUp(cerdentials).then(function (res) {
                console.log("Sign Up response", res);
                _this.nativeStorage.setItem("token", { jwtUserToken: res.token }).then(function (saved) { return console.log(saved); }, function (error) { return console.error('Error storing item', error); });
            }).catch(function (err) {
                console.log("SignUp error ", err);
            });
        }
        else {
            console.log("Not Valid");
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Check All Fields',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\edit-profile\edit-profile.html"*/'<!--\n\n  Generated template for the EditProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>Edit Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button *ngIf="profileData" (click)="edit()" ion-button large clear>\n\n            <ion-icon name="md-checkmark" style="font-size: 20px;"></ion-icon>&nbsp;Save\n\n      </button>\n\n      <button *ngIf="!profileData" (click)="edit()" ion-button large clear>\n\n            <ion-icon name="md-checkmark" style="font-size: 20px;"></ion-icon>&nbsp;Register\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div style=" border:1px solid #CC0000;height: 52rem; width: 100%; margin: auto; border-radius: 25px; padding: 2rem;">\n\n    <img src="assets/imgs/avatar.png" style="border:1px solid #cccccc; border-radius: 25px; width: 12rem; height: 12rem;">\n\n    <button float-right round small ion-button style="top:5rem">Upload</button>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Name</ion-label>\n\n      <ion-input [(ngModel)]="name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="!profileData">\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Confirm Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n\n    </ion-item>\n\n  </div>\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Date Of Birth</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\proj\Ionic\gp-user-spare\front-end\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map