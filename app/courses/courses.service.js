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
var CoursesService = (function () {
    function CoursesService(_http, _tokenservice) {
        this._http = _http;
        this._tokenservice = _tokenservice;
    }
    CoursesService.prototype.getCourses = function () {
        this._tokenservice.checkExp();
        // 		$.get( "http://tuttee.ca/api/courses", function( data ) {
        //   console.log(data);
        // });
        var params = new http_1.URLSearchParams();
        params.set('limit', "100");
        //params.set('_',(new Date().getTime()).toString());
        // params.set('cnt', days.toString());
        //	var headers = new Headers();
        //headers.append('Content-Type','application/json');
        //headers.append('Authorization',this._tokenservice.getToken());
        return this._http.get('http://tuttee.ca/api/courses', { search: params })
            .map(function (res) { return res.json(); });
        //return Promise.resolve(COURSES);
    };
    CoursesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, token_service_1.TokenService])
    ], CoursesService);
    return CoursesService;
}());
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map