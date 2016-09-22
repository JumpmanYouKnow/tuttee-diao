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
var router_1 = require('@angular/router');
var token_service_1 = require('../services/token.service');
var MytutorComponent = (function () {
    function MytutorComponent(_tokenservice) {
        this._tokenservice = _tokenservice;
        this.photoURL = "http://placehold.it/150x150";
    }
    MytutorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this._tokenservice.getUsername();
        this._tokenservice.getProfile().subscribe(function (data) {
            _this.photoURL = "http://localhost:5000/photo/" + data.photo;
            _this.username = data.username;
        });
        console.log(this.username);
    };
    MytutorComponent = __decorate([
        core_1.Component({
            selector: 'mytutor',
            templateUrl: './app/mytutor/mytutor.component.html',
            styleUrls: ['./app/mytutor/mytutor.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [token_service_1.TokenService])
    ], MytutorComponent);
    return MytutorComponent;
}());
exports.MytutorComponent = MytutorComponent;
//# sourceMappingURL=mytutor.component.js.map