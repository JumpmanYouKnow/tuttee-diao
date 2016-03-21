import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Component, provide} from 'angular2/core';
import {TokenService} from './services/token.service'
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http'

bootstrap(AppComponent, [ROUTER_PROVIDERS,HTTP_PROVIDERS, TokenService,
	provide(LocationStrategy, { useClass: HashLocationStrategy }),
	provide(Window, {useValue: window})]);

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