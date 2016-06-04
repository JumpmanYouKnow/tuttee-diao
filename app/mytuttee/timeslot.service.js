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
var http_1 = require('@angular/http');
var token_service_1 = require('../services/token.service');
var TimeslotService = (function () {
    function TimeslotService(_tokenservice, _http) {
        this._tokenservice = _tokenservice;
        this._http = _http;
    }
    TimeslotService.prototype.getTimeslotByID = function (id) {
        this._tokenservice.checkExp();
        console.log(window.btoa(this._tokenservice.getToken() + ":"));
        var headers = new http_1.Headers();
        headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
        return this._http.get('http://127.0.0.1:5000/api/timeslots/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TimeslotService.prototype.getTimeslot = function () {
        this._tokenservice.checkExp();
        // console.log("fuck you ");
        console.log(window.btoa(this._tokenservice.getToken() + ":"));
        var headers = new http_1.Headers();
        headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
        return this._http.get('http://127.0.0.1:5000/api/profile/appointments', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TimeslotService.prototype.cancel = function (id) {
        var headers = new http_1.Headers();
        headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
        return this._http.delete('http://127.0.0.1:5000/api/appointments/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TimeslotService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [token_service_1.TokenService, http_1.Http])
    ], TimeslotService);
    return TimeslotService;
}());
exports.TimeslotService = TimeslotService;
//# sourceMappingURL=timeslot.service.js.map