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
// import {Router, RouteParams} from '@angular/router-deprecated';
// import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
var router_1 = require('@angular/router');
var tutorclass_service_1 = require('./tutorclass.service');
var TutorclassComponent = (function () {
    function TutorclassComponent(route, _tutorclassService) {
        this.route = route;
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
        this.route.params.subscribe(function (params) {
            var subject = params['subject'];
            _this.Subject = subject;
            var id = params['id'];
            _this._tutorclassService.getTimeslot(id).subscribe(function (data) {
                _this.username = data.username;
                var slots = data.timeslots;
                console.log(data);
                var timeslots = [];
                for (var i = 0; i < slots.length; i++) {
                    if (slots[i].course_id == _this.Subject || slots[i].course_id == null) {
                        slots[i].start_time = Math.floor(Date.parse(slots[i].start_time));
                        slots[i].end_time = Math.floor(Date.parse(slots[i].end_time));
                        timeslots.push(slots[i]);
                    }
                }
                for (var i = 0; i < data.courses.length; i++) {
                    if (data.courses[i].id == _this.Subject) {
                        _this.Comments = data.courses[i].reviews;
                    }
                }
                console.log(_this.Comments);
                _this.Timeslots = timeslots;
                console.log(_this.Timeslots);
            });
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
        __metadata('design:paramtypes', [router_1.ActivatedRoute, tutorclass_service_1.TutorclassService])
    ], TutorclassComponent);
    return TutorclassComponent;
}());
exports.TutorclassComponent = TutorclassComponent;
//# sourceMappingURL=tutorclass.component.js.map