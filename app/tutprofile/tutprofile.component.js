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
// import {Component, OnInit } from '@angular/core';
// import {ROUTER_DIRECTIVES, RouteParams} from '@angular/router-deprecated';
var tutprofile_service_1 = require('./tutprofile.service');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var TutProfileComponent = (function () {
    function TutProfileComponent(_router, _routeParams, _tutProfileService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._tutProfileService = _tutProfileService;
        this.Courses = [];
    }
    TutProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._routeParams.get('id');
        this._tutProfileService.getTutProfile(id).subscribe(function (data) {
            _this.TutProfile = data;
            _this.photoURL = "http://tuttee.ca/photo/" + data.photo;
            _this.Courses = data.courses;
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    TutProfileComponent.prototype.gotoDetail = function (subject_id, tutor_id) {
        this._router.navigate(['Tutorclass', { subject: subject_id, id: tutor_id }]);
    };
    TutProfileComponent = __decorate([
        core_1.Component({
            selector: 'tutprofile',
            templateUrl: './app/tutprofile/tutprofile.html',
            styleUrls: ['./app/tutprofile/tutprofile.css'],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, tutprofile_service_1.TutProfileService])
    ], TutProfileComponent);
    return TutProfileComponent;
}());
exports.TutProfileComponent = TutProfileComponent;
//# sourceMappingURL=tutprofile.component.js.map