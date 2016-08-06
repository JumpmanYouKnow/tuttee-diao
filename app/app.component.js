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
var tutprofile_service_1 = require('./tutprofile/tutprofile.service');
var navbar_component_1 = require('./other/navbar.component');
var footer_component_1 = require('./other/footer.component');
var subject_service_1 = require('./courses/subject/subject.service');
var courses_service_1 = require('./courses/courses.service');
var login_service_1 = require("./other/login.service");
var timeslot_service_1 = require('./mytutor/timeslot.service');
var tutorclass_service_1 = require('./courses/subject/tutorclass/tutorclass.service');
var post_service_1 = require('./mytutor/post.service');
var router_1 = require('@angular/router');
require('./rxjs-operators');
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent() {
        this.token = "";
    }
    AppComponent.prototype.getLogin = function (arg) {
        console.log(arg);
        this.token = arg;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n\t<navbar></navbar>\n\t<router-outlet></router-outlet>\n\t<footer></footer>\n\t",
            directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent],
            providers: [tutprofile_service_1.TutProfileService, courses_service_1.CoursesService, subject_service_1.SubjectService, timeslot_service_1.TimeslotService, tutorclass_service_1.TutorclassService, login_service_1.LoginService, post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map