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
var token_service_1 = require('./token.service');
var MytutorGuard = (function () {
    function MytutorGuard(_tokenservice, router) {
        this._tokenservice = _tokenservice;
        this.router = router;
    }
    MytutorGuard.prototype.canActivate = function () {
        if (this._tokenservice.initLogin() && this._tokenservice.getIs_tutor()) {
            console.log("TURURUURR");
            return true;
        }
        else {
            console.log("NONONONONO");
            this.router.navigate(['']);
            return false;
        }
    };
    MytutorGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [token_service_1.TokenService, router_1.Router])
    ], MytutorGuard);
    return MytutorGuard;
}());
exports.MytutorGuard = MytutorGuard;
//# sourceMappingURL=mytutor-guard.service.js.map