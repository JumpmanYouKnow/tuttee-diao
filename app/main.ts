
// import {AppComponent} from './app.component'
import {provide} from '@angular/core';
// import {bootstrap}    from 'angular2/platform/browser'
import {TokenService} from './services/token.service'
// import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/router-deprecated';
// import {HTTP_PROVIDERS} from 'angular2/http'	
import './rxjs-operators';
// // import {LocalStorageSubscriber} from './angular2-localstorage/LocalStorageEmitter';

// var appPromise = bootstrap(AppComponent, [ROUTER_PROVIDERS,HTTP_PROVIDERS, TokenService,
// 	provide(LocationStrategy, { useClass: HashLocationStrategy }),
// 	provide(Window, {useValue: window})]);

// // import { bootstrap } from 'angular2/platform/browser';
// // import { bind } from 'angular2/core';

import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
  import { HTTP_PROVIDERS } from '@angular/http';
// // import { AppComponent } from './app.component';

// // bootstrap(AppComponent, [
// //     ROUTER_PROVIDERS,


import {  
  PlatformLocation,  
  Location,  
  LocationStrategy,  
  HashLocationStrategy,  
  PathLocationStrategy,  
  APP_BASE_HREF}  
from '@angular/common';  

import { bootstrap }    from '@angular/platform-browser-dynamic';
// import {Component, provide} from '@angular/core';
import { AppComponent } from './app.component';
bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS, TokenService,
	provide(LocationStrategy, { useClass: HashLocationStrategy })]);