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
var upcoming_component_1 = require('./upcoming.component');
var history_component_1 = require('./history.component');
var setting_component_1 = require('./setting.component');
var post_component_1 = require('./post.component');
var MytutorComponent = (function () {
    function MytutorComponent() {
    }
    MytutorComponent = __decorate([
        core_1.Component({
            selector: 'mytutor',
            templateUrl: './app/mytutor/mytutor.component.html',
            styleUrls: ['./app/mytutor/mytutor.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/upcoming', name: 'Upcoming', component: upcoming_component_1.UpcomingComponent, useAsDefault: true },
            { path: '/setting', name: 'Setting', component: setting_component_1.SettingComponent },
            { path: '/history', name: 'History', component: history_component_1.HistoryComponent },
            { path: '/post', name: 'Post', component: post_component_1.PostComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], MytutorComponent);
    return MytutorComponent;
}());
exports.MytutorComponent = MytutorComponent;
//# sourceMappingURL=mytutor.component.js.map