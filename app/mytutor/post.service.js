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
var PostService = (function () {
    function PostService(_http, _tokenservice) {
        this._http = _http;
        this._tokenservice = _tokenservice;
    }
    PostService.prototype.postTimeslot = function (postObj) {
        // let params: URLSearchParams = new URLSearchParams();
        // params.set('start_time', postObj.start_time);
        //  params.set('end_time',postObj.end_time);
        //  params.set('course_id',postObj.course_id);
        //  params.set('capacity',postObj.capacity.toString());
        //  params.set('fee',postObj.fee.toString());
        //  params.set('address',postObj.address);
        var slot = JSON.stringify({ start_time: postObj.start_time,
            end_time: postObj.end_time,
            course_id: postObj.course_id,
            capacity: postObj.capacity,
            fee: postObj.fee,
            address: postObj.address });
        // params.set('cnt', days.toString());
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
        return this._http.post('http://127.0.0.1:5000/api/timeslots', slot, { headers: headers })
            .map(function (res) { return res.json(); });
        //return Promise.resolve(COURSES);
    };
    PostService.prototype.modifyTimeslot = function (modObj) {
        var slot = JSON.stringify({
            id: modObj.id,
            start_time: modObj.start_time,
            end_time: modObj.end_time,
            course_id: modObj.course_id,
            capacity: modObj.capacity,
            fee: modObj.fee,
            address: modObj.address });
        console.log(slot);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
        return this._http.put('http://127.0.0.1:5000/api/timeslots/' + modObj.id, slot, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.deleteSlot = function (id) {
        var headers = new http_1.Headers();
        headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
        return this._http.delete('http://127.0.0.1:5000/api/timeslots/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, token_service_1.TokenService])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map