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
var tutorclass_service_1 = require('./tutorclass.service');
var TutorclassComponent = (function () {
    function TutorclassComponent(_routeParams, _tutorclassService) {
        this._routeParams = _routeParams;
        this._tutorclassService = _tutorclassService;
    }
    TutorclassComponent.prototype.postAppointment = function (timeslot) {
        // if (timeslot.current_apps == timeslot.capacity) {
        //   alert("the class is full");
        // }
        // else {
        this.timeid = timeslot.id;
        this.timecourseid = timeslot.course_id;
        // console.log(this.timeid);
        // console.log(this.Subject);
        var PostObj = {
            id: this.timeid,
            course_id: this.Subject
        };
        console.log(PostObj);
        this._tutorclassService.postAppointement(PostObj).subscribe(function (data) {
            console.log(data);
            alert(data.student.username + ' successfully book this course');
        }, function (err) {
            console.log(err);
            alert(err._body);
        });
    };
    TutorclassComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subject = this._routeParams.get('subject');
        this.Subject = subject;
        var id = this._routeParams.get('id');
        this._tutorclassService.getTimeslot(id).subscribe(function (data) {
            _this.username = data.username;
            var slots = data.timeslots;
            var timeslots = [];
            for (var i = 0; i < slots.length; i++) {
                if (slots[i].courses_id == _this.Subject || slots[i].courses_id == null) {
                    slots[i].start_time = Date.parse(slots[i].start_time);
                    slots[i].end_time = Date.parse(slots[i].end_time);
                    timeslots.push(slots[i]);
                }
            }
            _this.Timeslots = timeslots;
        });
        //   this._tutorclassService.getTimeslot(id).then(hero => {
        //   this.Tutorclass = hero;
        // //  console.log(this.Tutorclass);
        //   this.Subject = subject;
        // });
        //   this._tutorclassService.getComment().then(data =>
        // { this.Comment = data 
        //   console.log(this.Comment);
        // })
    };
    ;
    TutorclassComponent = __decorate([
        core_1.Component({
            selector: 'tutorclass',
            styleUrls: ['app/courses/subject/tutorclass/tutorclass.component.css'],
            // template: `
            // <p *ngFor = "#timeslot of Tutorclass">{{timeslot.id}}</p>
            // `
            templateUrl: 'app/courses/subject/tutorclass/tutorclass.component.html',
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, tutorclass_service_1.TutorclassService])
    ], TutorclassComponent);
    return TutorclassComponent;
}());
exports.TutorclassComponent = TutorclassComponent;
//# sourceMappingURL=tutorclass.component.js.map