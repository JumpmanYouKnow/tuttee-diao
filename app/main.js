"use strict";
var core_1 = require('@angular/core');
var token_service_1 = require('./services/token.service');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var mytutor_guard_service_1 = require('./services/mytutor-guard.service');
var mytuttee_guard_service_1 = require('./services/mytuttee-guard.service');
var common_1 = require('@angular/common');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, token_service_1.TokenService, app_routes_1.appRouterProviders,
    mytutor_guard_service_1.MytutorGuard, mytuttee_guard_service_1.MytutteeGuard,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]);
//# sourceMappingURL=main.js.map