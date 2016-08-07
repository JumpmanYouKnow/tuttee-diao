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
import {mytutorRoutes} from './mytutor/mytutor.routes';
import {mytutteeRoutes} from './mytuttee/mytuttee.routes';
import {PostService} from './mytutor/post.service'
import {RegisterComponent} from './other/register'
import {LoginComponent} from './other/login';
import {ConditionsComponent} from './other/conditions'

const routes: RouterConfig =[
		...mytutorRoutes,
		...mytutteeRoutes,
		{ path: '', component: HomeComponent},
	// { path: '/about', component: About, name: 'About' },
	// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
		{ path: 'about', component: AboutComponent},
        { path: 'courses',component: CoursesComponent},
        { path: 'subject/:subject', component: SubjectComponent},	
        { path: 'betutor', component: BetutorComponent},
        { path: 'subject/:subject/:id', component: TutorclassComponent},
		{ path: 'tutor/:id', component: TutProfileComponent},
		{ path: 'mytuttee/...', component: MytutteeComponent},
		{ path: 'mytutor/...', component: MytutorComponent},
		{ path: 'register', component:RegisterComponent},
		{ path: 'login', component:LoginComponent},
		{ path: 'conditions', component:ConditionsComponent}


];

export const appRouterProviders = [
  provideRouter(routes)
];

