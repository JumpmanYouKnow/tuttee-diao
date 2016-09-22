"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import {ROUTER_DIRECTIVES,Router} from '@angular/router-deprecated';
var router_1 = require('@angular/router');
var core_2 = require('@angular/core');
var login_service_1 = require('./login.service');
var token_service_1 = require('../services/token.service');
// declare var jQuery: JQueryStatic;
var NavbarComponent = (function () {
    function NavbarComponent(el, _loginservice, _tokenservice) {
        this.el = el;
        this._loginservice = _loginservice;
        this._tokenservice = _tokenservice;
        this.logon = false;
        this.wrong = false;
    }
    NavbarComponent.prototype.tryLogin = function (value) {
        var _this = this;
        var signInfo = window.btoa(value.email + ":" + value.password);
        console.log(signInfo);
        this._loginservice.postLogin(signInfo)
            .subscribe(function (data) {
            _this.username = data.username;
            // console.log(this.username);
            _this._tokenservice.setUsername(data.username);
            if (data.is_tutor) {
                _this.is_tutor = true;
                _this._tokenservice.setIs_tutor(true);
            }
            else {
                _this.is_tutor = false;
                _this._tokenservice.setIs_tutor(false);
            }
            _this.logon = true;
            _this._tokenservice.setToken(data.token);
            _this._tokenservice.setTokenLife(Date.now() + data.expiration * 1000);
            console.log(data);
            console.log(_this.is_tutor);
            $('#modal1').closeModal();
        }, function (err) {
            var error = JSON.parse(err._body).message;
            console.log(error);
            if (error == "Unauthorized access") {
                _this.wrong = true;
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.clear();
        this.logon = false;
        // this._router.navigate(['Home']);
    };
    // logint () {
    //     console.log("fuck");
    //  //   var signInfo = window.btoa(value.email+":"+value.password);
    // 	// this._loginservice.postLogin(signInfo)
    // 	// .subscribe( data => {
    //  //        console.log(data);
    // 	// //this.loginObj = data;
    //  //      //  this.chuan.emit(this.loginObj);
    // 	// });
    // }
    //  register (value:any) {
    // 	this._loginservice.postLogin(value.email,value.password)
    // 	.subscribe( data => {
    // 		console.log(data);
    // 		this.loginObj = data;
    // 	});
    // }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this._tokenservice.initLogin()) {
            this.username = this._tokenservice.getUsername();
            this.is_tutor = this._tokenservice.getIs_tutor();
            this.logon = true;
        }
        ;
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement).find(".button-collapse").sideNav();
        $('.modal-trigger').leanModal();
        $(".dropdown-button").dropdown();
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: 'app/other/nav.html',
            styleUrls: ['app/other/nav.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef, login_service_1.LoginService, token_service_1.TokenService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map