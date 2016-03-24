System.register(['angular2/core', 'angular2/router', './subject.service'], function(exports_1, context_1) {
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
    var core_1, router_1, subject_service_1;
    var SubjectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (subject_service_1_1) {
                subject_service_1 = subject_service_1_1;
            }],
        execute: function() {
            SubjectComponent = (function () {
                function SubjectComponent(_router, _subjectService, _routeParams) {
                    this._router = _router;
                    this._subjectService = _subjectService;
                    this._routeParams = _routeParams;
                }
                SubjectComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var a = this._routeParams.get('subject');
                    this._subjectService.getSubject(a).subscribe(function (data) {
                        console.log(data);
                        _this.Subject = { id: data.name };
                        _this.Teacher = data.tutors;
                        console.log(_this.Teacher);
                        // this.Subject = data;
                        // this.Teacher = this.Subject.teacher;
                    }, function (err) { return console.log(err); });
                };
                SubjectComponent.prototype.gotoDetail = function (subject_id, tutor_id) {
                    this._router.navigate(['Tutorclass', { subject: subject_id, id: tutor_id }]);
                    //this._router.navigate(['About']);
                };
                SubjectComponent = __decorate([
                    core_1.Component({
                        selector: 'subject',
                        styleUrls: ['app/courses/subject/subject.component.css'],
                        templateUrl: 'app/courses/subject/subject.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, subject_service_1.SubjectService, router_1.RouteParams])
                ], SubjectComponent);
                return SubjectComponent;
            }());
            exports_1("SubjectComponent", SubjectComponent);
        }
    }
});
//# sourceMappingURL=subject.component.js.map