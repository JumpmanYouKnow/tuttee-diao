/*
 * Angular 2 decorators and services
 */
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
var tutprofile_service_1 = require('./tutprofile/tutprofile.service');
var navbar_component_1 = require('./other/navbar.component');
var footer_component_1 = require('./other/footer.component');
var tutprofile_component_1 = require('./tutprofile/tutprofile.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var subject_service_1 = require('./courses/subject/subject.service');
var courses_service_1 = require('./courses/courses.service');
var login_service_1 = require("./other/login.service");
var mytutor_component_1 = require('./mytutor/mytutor.component');
var betutor_component_1 = require('./betutor/betutor.component');
var courses_component_1 = require('./courses/courses.component');
var mytuttee_component_1 = require('./mytuttee/mytuttee.component');
var subject_component_1 = require('./courses/subject/subject.component');
var timeslot_service_1 = require('./mytutor/timeslot.service');
var tutorclass_component_1 = require('./courses/subject/tutorclass/tutorclass.component');
var tutorclass_service_1 = require('./courses/subject/tutorclass/tutorclass.service');
var post_service_1 = require('./mytutor/post.service');
var register_1 = require('./other/register');
var conditions_1 = require('./other/conditions');
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
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent],
            providers: [tutprofile_service_1.TutProfileService, courses_service_1.CoursesService, subject_service_1.SubjectService, timeslot_service_1.TimeslotService, tutorclass_service_1.TutorclassService, login_service_1.LoginService, post_service_1.PostService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent },
            // { path: '/about', component: About, name: 'About' },
            // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
            { path: '/about', name: 'About', component: about_component_1.AboutComponent },
            { path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent },
            { path: '/subject/:subject', name: 'Subject', component: subject_component_1.SubjectComponent },
            { path: '/betutor', name: 'Betutor', component: betutor_component_1.BetutorComponent },
            { path: '/subject/:subject/:id', name: 'Tutorclass', component: tutorclass_component_1.TutorclassComponent },
            { path: '/tutor/:id', name: 'TutProfile', component: tutprofile_component_1.TutProfileComponent },
            { path: '/mytuttee/...', name: 'Mytuttee', component: mytuttee_component_1.MytutteeComponent },
            { path: '/mytutor/...', name: 'Mytutor', component: mytutor_component_1.MytutorComponent },
            { path: '/register', name: 'Register', component: register_1.RegisterComponent },
            { path: '/conditions', name: 'Conditions', component: conditions_1.ConditionsComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
 * Please review the https://github.com/AngularClass/@angular-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
//# sourceMappingURL=app.component.js.map