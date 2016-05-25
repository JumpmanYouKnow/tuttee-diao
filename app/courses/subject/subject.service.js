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
var token_service_1 = require('../../services/token.service');
var SubjectService = (function () {
    function SubjectService(_tokenservice, _http) {
        this._tokenservice = _tokenservice;
        this._http = _http;
    }
    SubjectService.prototype.getSubject = function (id) {
        var params = new http_1.URLSearchParams();
        params.set('limit', "6");
        // params.set('cnt', days.toString());
        var headers = new http_1.Headers();
        //headers.append('Content-Type','application/json');
        headers.append('Authorization', this._tokenservice.getToken());
        return this._http.get('http://127.0.0.1:5000/api/courses/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
        // return	Promise.resolve(SUBJECT).then(
        // 	heroes => heroes.filter(hero => hero.id === id)[0]	 
    };
    SubjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [token_service_1.TokenService, http_1.Http])
    ], SubjectService);
    return SubjectService;
}());
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map