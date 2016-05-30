"use strict";
// import {AppComponent} from './app.component'
var core_1 = require('@angular/core');
// import {bootstrap}    from 'angular2/platform/browser'
var token_service_1 = require('./services/token.service');
// import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/router-deprecated';
// import {HTTP_PROVIDERS} from 'angular2/http'	
// // import {LocalStorageSubscriber} from './angular2-localstorage/LocalStorageEmitter';
// var appPromise = bootstrap(AppComponent, [ROUTER_PROVIDERS,HTTP_PROVIDERS, TokenService,
// 	provide(LocationStrategy, { useClass: HashLocationStrategy }),
// 	provide(Window, {useValue: window})]);
//  // LocalStorageSubscriber(appPromise);
// // import { bootstrap } from 'angular2/platform/browser';
// // import { bind } from 'angular2/core';
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
// // import { AppComponent } from './app.component';
// // bootstrap(AppComponent, [
// //     ROUTER_PROVIDERS,
// //     bind(LocationStrategy).toClass(HashLocationStrategy)
// // ]).then(
// //     success => console.log('AppComponent bootstrapped!'),
// //     error => console.log(error)
// // 	);
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// import {Component, provide} from '@angular/core';
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, token_service_1.TokenService,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]);
//# sourceMappingURL=main.js.map