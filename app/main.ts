import {provide} from '@angular/core';
import {TokenService} from './services/token.service'
  import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import {MytutorGuard} from './services/mytutor-guard.service';
import {MytutteeGuard} from './services/mytuttee-guard.service';
import {  
  PlatformLocation,  
  Location,  
  LocationStrategy,  
  HashLocationStrategy,  
  PathLocationStrategy,  
  APP_BASE_HREF}  
from '@angular/common';  


bootstrap(AppComponent,[HTTP_PROVIDERS, TokenService, appRouterProviders,
	MytutorGuard, MytutteeGuard,
	provide(LocationStrategy, { useClass: HashLocationStrategy })]);