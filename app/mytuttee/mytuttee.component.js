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
var favorite_component_1 = require('./favorite.component');
var history_component_1 = require('./history.component');
var setting_component_1 = require('./setting.component');
var MytutteeComponent = (function () {
    function MytutteeComponent() {
    }
    MytutteeComponent = __decorate([
        core_1.Component({
            selector: 'mytuttee',
            templateUrl: './app/mytuttee/mytuttee.component.html',
            styleUrls: ['./app/mytuttee/mytuttee.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/upcoming', name: 'Upcoming', component: upcoming_component_1.UpcomingComponent, useAsDefault: true },
            { path: '/favorite', name: 'Favorite', component: favorite_component_1.FavoriteComponent },
            { path: '/setting', name: 'Setting', component: setting_component_1.SettingComponent },
            { path: '/history', name: 'History', component: history_component_1.HistoryComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], MytutteeComponent);
    return MytutteeComponent;
}());
exports.MytutteeComponent = MytutteeComponent;
//# sourceMappingURL=mytuttee.component.js.map