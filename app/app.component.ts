/*
 * Angular 2 decorators and services
 */

import { Component, AfterViewInit} from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import {TutProfileService} from './tutprofile/tutprofile.service'
import {NavbarComponent} from './other/navbar.component'
import {FooterComponent} from './other/footer.component'
import {TutProfileComponent} from './tutprofile/tutprofile.component'
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {SubjectService} from './courses/subject/subject.service'
import {CoursesService} from './courses/courses.service';
import {LoginService,loginObj} from "./other/login.service";
import {MytutorComponent} from './mytutor/mytutor.component'
import {BetutorComponent} from'./betutor/betutor.component'
import {CoursesComponent} from './courses/courses.component';
import {MytutteeComponent} from './mytuttee/mytuttee.component'
import {SubjectComponent} from './courses/subject/subject.component';
import {TimeslotService} from './mytutor/timeslot.service'
import {TutorclassComponent} from'./courses/subject/tutorclass/tutorclass.component';
import {TutorclassService} from'./courses/subject/tutorclass/tutorclass.service'; 
import {PostService} from './mytutor/post.service'
import {RegisterComponent} from './other/register'
import {ConditionsComponent} from './other/conditions'
import './rxjs-operators';
// import {RegisterComponent} from 
//import {PaginationService} from 'ng2-pagination'

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
	providers: [TutProfileService, CoursesService, SubjectService, TimeslotService,TutorclassService,LoginService,PostService]

})


@RouteConfig([
		{ path: '/', name: 'Home',component: HomeComponent},
	// { path: '/about', component: About, name: 'About' },
	// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
		{ path: '/about', name: 'About',component: AboutComponent},
        { path: '/courses', name: 'Courses' ,component: CoursesComponent},
        { path: '/subject/:subject', name: 'Subject',component: SubjectComponent},	
        { path: '/betutor', name: 'Betutor', component: BetutorComponent},
        { path: '/subject/:subject/:id', name: 'Tutorclass', component: TutorclassComponent},
		{ path: '/tutor/:id', name: 'TutProfile', component: TutProfileComponent},
		{ path: '/mytuttee/...', name: 'Mytuttee', component: MytutteeComponent},
		{ path: '/mytutor/...', name: 'Mytutor', component: MytutorComponent},
		{ path: '/register', name: 'Register', component:RegisterComponent},
		{ path: '/conditions', name: 'Conditions', component:ConditionsComponent}


])
export class AppComponent implements AfterViewInit {

	public token:string = "";

	getLogin(arg:any) {
		console.log(arg);
		this.token = arg;

	}


	ngAfterViewInit () {
	//	jQuery(this.elementRef.nativeElement).find("p").append("fuckjasdjlfdsa");
	}
}


/*
 * Please review the https://github.com/AngularClass/@angular-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
