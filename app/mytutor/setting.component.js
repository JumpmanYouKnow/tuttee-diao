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
var uploader_service_1 = require('./uploader.service');
var SettingComponent = (function () {
    function SettingComponent(_uploader, _postservice) {
        this._uploader = _uploader;
        this._postservice = _postservice;
        this.URL = 'http://localhost:5000/api/profile/photo';
    }
    SettingComponent.prototype.fileChangeEvent = function (fileInput) {
        this.photoToUpload = fileInput.target.files[0];
        console.log(this.photoToUpload);
    };
    SettingComponent.prototype.upload = function () {
        this._uploader.upload(this.URL, this.photoToUpload)
            .then(function (data) { return alert(data); })
            .catch(function (err) { return alert(err); });
    };
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
            templateUrl: './app/mytutor/setting.component.html',
            styleUrls: ['./app/mytutor/setting.component.css'],
            providers: [uploader_service_1.UploaderService]
        }), 
        __metadata('design:paramtypes', [uploader_service_1.UploaderService, timeslot_service_1.TimeslotService])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=setting.component.js.map