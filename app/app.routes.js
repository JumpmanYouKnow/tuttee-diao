"use strict";
var router_1 = require('@angular/router');
var tutprofile_component_1 = require('./tutprofile/tutprofile.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var mytutor_component_1 = require('./mytutor/mytutor.component');
var betutor_component_1 = require('./betutor/betutor.component');
var courses_component_1 = require('./courses/courses.component');
var mytuttee_component_1 = require('./mytuttee/mytuttee.component');
var subject_component_1 = require('./courses/subject/subject.component');
var tutorclass_component_1 = require('./courses/subject/tutorclass/tutorclass.component');
var mytutor_routes_1 = require('./mytutor/mytutor.routes');
var mytuttee_routes_1 = require('./mytuttee/mytuttee.routes');
var register_1 = require('./other/register');
var login_1 = require('./other/login');
var conditions_1 = require('./other/conditions');
var routes = mytutor_routes_1.mytutorRoutes.concat(mytuttee_routes_1.mytutteeRoutes, [
    { path: '', component: home_component_1.HomeComponent },
    // { path: '/about', component: About, name: 'About' },
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'courses', component: courses_component_1.CoursesComponent },
    { path: 'subject/:subject', component: subject_component_1.SubjectComponent },
    { path: 'betutor', component: betutor_component_1.BetutorComponent },
    { path: 'subject/:subject/:id', component: tutorclass_component_1.TutorclassComponent },
    { path: 'tutor/:id', component: tutprofile_component_1.TutProfileComponent },
    { path: 'mytuttee/...', component: mytuttee_component_1.MytutteeComponent },
    { path: 'mytutor/...', component: mytutor_component_1.MytutorComponent },
    { path: 'register', component: register_1.RegisterComponent },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'conditions', component: conditions_1.ConditionsComponent }
]);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map