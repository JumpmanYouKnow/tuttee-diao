import {Component,OnInit} from 'angular2/core';
import {CoursesService,Course} from './courses.service';
import {Router,RouteData} from 'angular2/router';
import {NavbarComponent} from '../other/navbar.component'
//import {SubjectComponent} from 'subject/subject.component';


@Component({
	selector: 'course',
	styleUrls: ['./app/courses/courses.component.css'],
	templateUrl: './app/courses/courses.component.html'

})


export class CoursesComponent implements OnInit {
	public Courses: Course[];
	public token: string;
	constructor(private _router: Router,
	            private _coursesservices: CoursesService,
	            private _data: RouteData
	) { 
		this.token = this._data.get('token');

	}

	getCourse() {
		this._coursesservices.getCourses().then(data => this.Courses = data);
	}
	ngOnInit() {
		this.getCourse();
	}


	gotoDetail(course_id: String) {
		console.log(course_id);
		this._router.navigate(['Subject', {subject: course_id }]);
	}
}
