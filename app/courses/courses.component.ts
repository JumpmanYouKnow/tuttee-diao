import {Component} from 'angular2/core';
import {Course} from '../objects/course';
import {NavbarComponent} from '../other/navbar.component';
import {FooterComponent} from '../other/footer.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


@Component({
	selector: 'course',
	directives: [
		NavbarComponent, FooterComponent
	],
	styleUrls:[ './app/courses/courses.component.css'],
	templateUrl: './app/courses/courses.component.html'

})


export class CoursesComponent {
	courses: Course[] = [];

}