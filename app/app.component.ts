import { Component, AfterViewInit} from '@angular/core';
// import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { provideRouter, RouterConfig } from '@angular/router';
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
import { ROUTER_DIRECTIVES } from '@angular/router';
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

export class AppComponent implements AfterViewInit {

	public token:string = "";

	getLogin(arg:any) {
		console.log(arg);
		this.token = arg;

	}


	ngAfterViewInit () {
	}

}


