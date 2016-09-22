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
var router_deprecated_1 = require('@angular/router-deprecated');
var tutprofile_service_1 = require('../../tutprofile/tutprofile.service');
var subject_service_1 = require('./subject.service');
var SubjectComponent = (function () {
    function SubjectComponent(_router, _subjectService, _routeParams, _tutprofileService) {
        this._router = _router;
        this._subjectService = _subjectService;
        this._routeParams = _routeParams;
        this._tutprofileService = _tutprofileService;
        this.loading = true;
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var a = this._routeParams.get('subject');
        this._subjectService.getSubject(a).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            _this.Subject = { id: data.id, name: data.name };
            var _loop_1 = function(i) {
                _this._tutprofileService.getTutProfile(data.tutors[i].id).subscribe(function (profile) {
                    console.log(profile);
                    if (profile.photo) {
                        data.tutors[i].photo = "http://tuttee.ca/photo/" + profile.photo;
                    }
                });
            };
            for (var i = 0; i < data.tutors.length; i++) {
                _loop_1(i);
            }
            _this.Teacher = data.tutors;
            console.log(_this.Teacher);
            // this.Subject = data;
            // this.Teacher = this.Subject.teacher;
        }, function (err) { return console.log(err); });
    };
    SubjectComponent.prototype.gotoDetail = function (subject_id, tutor_id) {
        this._router.navigate(['Tutorclass', { subject: subject_id, id: tutor_id }]);
    };
    SubjectComponent.prototype.seeProfile = function (tutor_id) {
        this._router.navigate(['TutProfile', { id: tutor_id }]);
    };
    SubjectComponent = __decorate([
        core_1.Component({
            selector: 'subject',
            styleUrls: ['app/courses/subject/subject.component.css'],
            templateUrl: 'app/courses/subject/subject.component.html',
            providers: [tutprofile_service_1.TutProfileService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, subject_service_1.SubjectService, router_deprecated_1.RouteParams, tutprofile_service_1.TutProfileService])
    ], SubjectComponent);
    return SubjectComponent;
}());
exports.SubjectComponent = SubjectComponent;
//# sourceMappingURL=subject.component.js.map