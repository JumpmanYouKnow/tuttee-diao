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
var BetutorComponent = (function () {
    function BetutorComponent(_http) {
        this._http = _http;
        this.Python = "Python";
        this.Node = "Node";
    }
    BetutorComponent.prototype.test = function () {
        var _this = this;
        this._http.get("http://localhost:5000").toPromise().then(function (data) {
            console.log(data);
            _this.Python = data._body;
        });
    };
    ;
    BetutorComponent.prototype.testA = function () {
        var _this = this;
        this._http.get("http://localhost:5500/shit").toPromise().then(function (data) {
            console.log(data);
            _this.Node = data._body;
            // map(res => res.json()).subscribe(data => this.fuck = JSON.stringify(data));
        });
    };
    BetutorComponent = __decorate([
        core_1.Component({
            selector: 'tutor',
            styleUrls: ['app/betutor/beteacher.css'],
            templateUrl: 'app/betutor/beteacher.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BetutorComponent);
    return BetutorComponent;
}());
exports.BetutorComponent = BetutorComponent;
//# sourceMappingURL=betutor.component.js.map