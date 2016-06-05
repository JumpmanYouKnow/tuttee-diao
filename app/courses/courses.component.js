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
var courses_service_1 = require('./courses.service');
var router_deprecated_1 = require('@angular/router-deprecated');
//import {SubjectComponent} from 'subject/subject.component';
var token_service_1 = require('../services/token.service');
var search_pipe_1 = require('./search-pipe');
// import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';
var CoursesComponent = (function () {
    function CoursesComponent(_router, _coursesservices, _tokenservice) {
        this._router = _router;
        this._coursesservices = _coursesservices;
        this._tokenservice = _tokenservice;
        this.loading = true;
    }
    CoursesComponent.prototype.getCourse = function () {
        var _this = this;
        this._coursesservices.getCourses().subscribe(function (data) {
            _this.loading = false;
            _this.Courses = data.courses;
            //	console.log(data);
            //	console.log("runed");
            _this.test = data.courses[0].name;
            // console.log(data.courses);
            // console.log(data.courses[0].name);
            // this.Courses[0].name = data.courses[0].name;
            // for (var i=0;i<data.courses.length;i++) {
            // 	this.Courses[i].name = data.courses[i].name;
            // 	// this.Courses[i].favorited = data.courses[i].favorited;
            // 	// this.Courses[i].total_tutors = data.courses[i].total_tutors;
            // 	// this.Courses[i].tutors = data.courses[i].tutors;
            // }
            //console.log(this.Courses);
        }, function (err) { return console.log(err); });
    };
    CoursesComponent.prototype.ngOnInit = function () {
        this.getCourse();
        this.categories = ["actsc", "art", "cs", "math", "science", "stat"];
        //this.getCourse();
        // console.log("the token is",this.token);
        //	console.log("the token is : " + this._tokenservice.getToken());
    };
    CoursesComponent.prototype.ngAfterViewInit = function () {
    };
    CoursesComponent.prototype.gotoDetail = function (course_id) {
        console.log(course_id);
        this._router.navigate(['Subject', { subject: course_id }]);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'course',
            styleUrls: ['./app/courses/courses.component.css'],
            templateUrl: './app/courses/courses.component.html',
            // providers: [PaginationService],
            //   directives: [PaginationControlsCmp],
            pipes: [search_pipe_1.SearchPipe]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, courses_service_1.CoursesService, token_service_1.TokenService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map