System.register(['angular2/core', 'angular2/router', './upcoming.component', './history.component', './setting.component'], function(exports_1, context_1) {
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
    var core_1, router_1, upcoming_component_1, history_component_1, setting_component_1;
    var MytutteeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (upcoming_component_1_1) {
                upcoming_component_1 = upcoming_component_1_1;
            },
            function (history_component_1_1) {
                history_component_1 = history_component_1_1;
            },
            function (setting_component_1_1) {
                setting_component_1 = setting_component_1_1;
            }],
        execute: function() {
            MytutteeComponent = (function () {
                function MytutteeComponent() {
                }
                MytutteeComponent = __decorate([
                    core_1.Component({
                        selector: 'mytuttee',
                        templateUrl: './app/mytuttee/mytuttee.component.html',
                        styleUrls: ['./app/mytuttee/mytuttee.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/upcoming', name: 'Upcoming', component: upcoming_component_1.UpcomingComponent, useAsDefault: true },
                        { path: '/favorite', name: 'Favorite', component: FavoriteComponent },
                        { path: '/setting', name: 'Setting', component: setting_component_1.SettingComponent },
                        { path: '/history', name: 'History', component: history_component_1.HistoryComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MytutteeComponent);
                return MytutteeComponent;
            }());
            exports_1("MytutteeComponent", MytutteeComponent);
        }
    }
});
//# sourceMappingURL=mytutor.component.js.map