System.register(['angular2/core', './courses.service', 'angular2/router', '../services/token.service', './search-pipe'], function(exports_1, context_1) {
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
    var core_1, courses_service_1, router_1, token_service_1, search_pipe_1;
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
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(_router, _coursesservices, _tokenservice) {
                    this._router = _router;
                    this._coursesservices = _coursesservices;
                    this._tokenservice = _tokenservice;
                }
                CoursesComponent.prototype.getCourse = function () {
                    // this._coursesservices.getCourses()
                    // .then(data => this.Courses = data);
                    var _this = this;
                    this._coursesservices.getCourses().subscribe(function (data) {
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
                        pipes: [search_pipe_1.SearchPipe],
                        styleUrls: ['./app/courses/courses.component.css'],
                        templateUrl: './app/courses/courses.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, courses_service_1.CoursesService, token_service_1.TokenService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map