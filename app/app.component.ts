/*
 * Angular 2 decorators and services
 */

import { Component, AfterViewInit} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';


import {Home} from './home/home';
import {About} from './about/about';
import {Catalog} from './catalog/catalog';
declare var jQuery: JQueryStatic;
/*
 * App Component
 * Top Level Component
 */

@Component({
	selector: 'app',
	template: `

	<router-outlet></router-outlet>`,
	directives: [ROUTER_DIRECTIVES],
})


@RouteConfig([
		{ path: '/', name: 'Home',component: Home},
	// { path: '/about', component: About, name: 'About' },
	// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
		{ path: '/about', name: 'About',component: About },
		{ path: '/catalog', name: 'Catalog' ,component: Catalog },

])
export class AppComponent implements AfterViewInit{



	ngAfterViewInit () {
	//	jQuery(this.elementRef.nativeElement).find("p").append("fuckjasdjlfdsa");
	}
}


/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
