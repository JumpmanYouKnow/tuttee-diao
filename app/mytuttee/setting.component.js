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
var timeslot_service_1 = require('./timeslot.service');
var SettingComponent = (function () {
    function SettingComponent(_postservice) {
        this._postservice = _postservice;
        this.modal = {};
    }
    SettingComponent.prototype.PostProfile = function () {
        var postObj = {
            grad_year: this.grad_year,
            phone: this.phone,
            program: this.program,
            wechat: this.wechat,
        };
        console.log(postObj);
        this._postservice.PutProfile(postObj).subscribe(function (data) {
            console.log(data);
            alert("发布成功！");
        }, function (err) { return alert(JSON.stringify(err._body)); });
    };
    SettingComponent = __decorate([
        core_1.Component({
            selector: 'setting',
            templateUrl: './app/mytuttee/setting.component.html',
            styleUrls: ['./app/mytuttee/setting.component.css'],
            providers: [timeslot_service_1.TimeslotService]
        }), 
        __metadata('design:paramtypes', [timeslot_service_1.TimeslotService])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=setting.component.js.map