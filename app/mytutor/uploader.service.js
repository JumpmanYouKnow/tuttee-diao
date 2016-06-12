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
var token_service_1 = require('../services/token.service');
require('rxjs/add/operator/share');
var UploaderService = (function () {
    function UploaderService(_tokenservice) {
        this._tokenservice = _tokenservice;
    }
    UploaderService.prototype.upload = function (url, file) {
        var token = "Basic " + window.btoa(this._tokenservice.getToken() + ":");
        return new Promise(function (resolve, reject) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            formData.append("photo", file);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(xhr.response);
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        console.log(xhr.response);
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('PUT', url, false);
            //xhr.setRequestHeader("Content-Type","multipart/form-data");
            xhr.setRequestHeader("Authorization", token);
            //console.log(formData);
            xhr.send(formData);
        });
    };
    UploaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [token_service_1.TokenService])
    ], UploaderService);
    return UploaderService;
}());
exports.UploaderService = UploaderService;
//# sourceMappingURL=uploader.service.js.map