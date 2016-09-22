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
var token_service_1 = require('../../../services/token.service');
var TutorclassService = (function () {
    function TutorclassService(_tokenservice, _http) {
        this._tokenservice = _tokenservice;
        this._http = _http;
    }
    TutorclassService.prototype.getTimeslot = function (id) {
        // params.set('cnt', days.toString());
        var headers = new http_1.Headers();
        //headers.append('Content-Type','application/json');
        headers.append('Authorization', this._tokenservice.getToken());
        return this._http.get('http://tuttee.ca/api/tutors/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
        // cons  ole.log(TIMESLOTS);
        //     return Promise.resolve(TIMESLOTS).then(
        //     tuotr => tuotr.filter(hero => hero.id == id)
        //   );   
    };
    TutorclassService.prototype.postAppointement = function (PostObj) {
        this._tokenservice.checkExp();
        var params = new http_1.URLSearchParams();
        // params.set('id', PostObj.id);
        params.set('course_id', PostObj.course_id);
        var appointment = JSON.stringify({
            // id: PostObj.id,
            course_id: PostObj.course_id
        });
        console.log(appointment);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
        return this._http.post('http://tuttee.ca/api/appointments/' + PostObj.id, appointment, { headers: headers, search: params })
            .map(function (res) { return res.json(); });
    };
    TutorclassService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [token_service_1.TokenService, http_1.Http])
    ], TutorclassService);
    return TutorclassService;
}());
exports.TutorclassService = TutorclassService;
//# sourceMappingURL=tutorclass.service.js.map