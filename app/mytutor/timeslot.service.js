System.register(['angular2/core', 'angular2/http', '../services/token.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, token_service_1;
    var TimeslotService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            }],
        execute: function() {
            TimeslotService = (function () {
                function TimeslotService(_tokenservice, _http) {
                    this._tokenservice = _tokenservice;
                    this._http = _http;
                }
                TimeslotService.prototype.getTimeslot = function () {
                    console.log("fuck");
                    console.log(window.btoa(this._tokenservice.getToken() + ":"));
                    var params = new http_1.URLSearchParams();
                    params.set('limit', "100");
                    // params.set('cnt', days.toString());
                    var headers = new http_1.Headers();
                    //headers.append('Content-Type','application/json');
                    headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
                    return this._http.get('http://127.0.0.1:5000/api/profile/timeslots', { headers: headers }, { search: params })
                        .map(function (res) { return res.json(); });
                    // return Promise.resolve(TIMESLOTS);
                };
                TimeslotService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [token_service_1.TokenService, http_1.Http])
                ], TimeslotService);
                return TimeslotService;
            }());
            exports_1("TimeslotService", TimeslotService);
        }
    }
});
//# sourceMappingURL=timeslot.service.js.map