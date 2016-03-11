/*
 * Angular 2 decorators and services
 */

import { Component, AfterViewInit} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import {TutProfileService} from './tutprofile/tutprofile.service'
import {NavbarComponent} from './other/navbar.component'
import {FooterComponent} from './other/footer.component'
import {TutProfileComponent} from './tutprofile/tutprofile.component'
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
<<<<<<< HEAD
import {Catalog} from './catalog/catalog.component';
import {MytutteeComponent} from './mytuttee/mytuttee.component'
import {BetutorComponent} from'./betutor/betutor.component'
=======
import {CoursesComponent} from './courses/courses.component';
import {MytutteeComponent} from './mytuttee/mytuttee.component'
import {SubjectComponent} from './courses/subject/subject.component';
>>>>>>> 6f6c1aa1b7541c84c93209d32cbc64aa86895f65


declare var jQuery: JQueryStatic;
/*
 * App Component
 * Top Level Component
 */

@Component({
	selector: 'app',
	template: `
	<navbar></navbar>
	<router-outlet></router-outlet>
	<footer></footer>
	`,

	directives: [ROUTER_DIRECTIVES, NavbarComponent, FooterComponent],
	providers: [TutProfileService]
})


@RouteConfig([
		{ path: '/', name: 'Home',component: HomeComponent},
	// { path: '/about', component: About, name: 'About' },
	// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
		{ path: '/about', name: 'About',component: AboutComponent },
<<<<<<< HEAD
		{ path: '/catalog/', name: 'Catalog' ,component: Catalog },
		{ path: '/tutor/:id',name: 'TutProfile', component: TutProfileComponent},
		{ path: '/mytuttee/...', name: 'Mytuttee', component: MytutteeComponent},
        { path: '/betutor', name: 'Betutor', component: BetutorComponent},
=======
		{ path: '/courses/subject', name: 'Subject',component: SubjectComponent },
		{ path: '/courses', name: 'Courses' ,component: CoursesComponent },
		{ path: '/tutor/:id',name: 'TutProfile', component: TutProfileComponent},
		{ path: '/mytuttee/...', name: 'Mytuttee', component: MytutteeComponent},
		{ path: '/courses/...', name: 'Courses', component: CoursesComponent}

>>>>>>> 6f6c1aa1b7541c84c93209d32cbc64aa86895f65

])
export class AppComponent implements AfterViewInit {



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
