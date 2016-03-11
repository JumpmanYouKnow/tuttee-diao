/*
 * Angular 2 decorators and services
 */
System.register(['angular2/core', 'angular2/router', './tutprofile/tutprofile.service', './other/navbar.component', './other/footer.component', './tutprofile/tutprofile.component', './home/home.component', './about/about.component', './courses/courses.component', './mytuttee/mytuttee.component', './courses/subject/subject.component'], function(exports_1, context_1) {
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
    var core_1, router_1, tutprofile_service_1, navbar_component_1, footer_component_1, tutprofile_component_1, home_component_1, about_component_1, courses_component_1, mytuttee_component_1, subject_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tutprofile_service_1_1) {
                tutprofile_service_1 = tutprofile_service_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (tutprofile_component_1_1) {
                tutprofile_component_1 = tutprofile_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (mytuttee_component_1_1) {
                mytuttee_component_1 = mytuttee_component_1_1;
            },
            function (subject_component_1_1) {
                subject_component_1 = subject_component_1_1;
            }],
        execute: function() {
            /*
             * App Component
             * Top Level Component
             */
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    //	jQuery(this.elementRef.nativeElement).find("p").append("fuckjasdjlfdsa");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n\t<navbar></navbar>\n\t<router-outlet></router-outlet>\n\t<footer></footer>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent],
                        providers: [tutprofile_service_1.TutProfileService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        // { path: '/about', component: About, name: 'About' },
                        // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                        { path: '/courses/subject', name: 'Subject', component: subject_component_1.SubjectComponent },
                        { path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent },
                        { path: '/tutor/:id', name: 'TutProfile', component: tutprofile_component_1.TutProfileComponent },
                        { path: '/mytuttee/...', name: 'Mytuttee', component: mytuttee_component_1.MytutteeComponent },
                        { path: '/courses/...', name: 'Courses', component: courses_component_1.CoursesComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
//# sourceMappingURL=app.component.js.map