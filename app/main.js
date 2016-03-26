System.register(['angular2/platform/browser', './app.component', 'angular2/core', './services/token.service', 'angular2/router', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, core_1, token_service_1, router_1, http_1;
    var appPromise;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            // import {LocalStorageSubscriber} from './angular2-localstorage/LocalStorageEmitter';
            appPromise = browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, token_service_1.TokenService,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                core_1.provide(Window, { useValue: window })]);
        }
    }
});
// LocalStorageSubscriber(appPromise);
// import { bootstrap } from 'angular2/platform/browser';
// import { bind } from 'angular2/core';
// import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
// // import { HTTP_PROVIDERS } from 'angular2/http';
// import { AppComponent } from './app.component';
// bootstrap(AppComponent, [
//     ROUTER_PROVIDERS,
//     bind(LocationStrategy).toClass(HashLocationStrategy)
// ]).then(
//     success => console.log('AppComponent bootstrapped!'),
//     error => console.log(error)
// 	); 
//# sourceMappingURL=main.js.map