import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Component, provide} from 'angular2/core';

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';


bootstrap(AppComponent, [ROUTER_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })]);

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