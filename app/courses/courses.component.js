System.register(['angular2/core', './courses.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, courses_service_1, router_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //import {SubjectComponent} from 'subject/subject.component';
            CoursesComponent = (function () {
                function CoursesComponent(_router, _coursesservices) {
                    this._router = _router;
                    this._coursesservices = _coursesservices;
                }
                CoursesComponent.prototype.getCourse = function () {
                    var _this = this;
                    this._coursesservices.getCourses().then(function (data) { return _this.Courses = data; });
                };
                CoursesComponent.prototype.ngOnInit = function () {
                    this.getCourse();
                };
                CoursesComponent.prototype.gotoDetail = function (course_id) {
                    console.log(course_id);
                    this._router.navigate(['Subject', { subject: course_id }]);
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'course',
                        styleUrls: ['./app/courses/courses.component.css'],
                        templateUrl: './app/courses/courses.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, courses_service_1.CoursesService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map