import {Component,OnInit} from 'angular2/core';
import {CoursesService,Course} from './courses.service';
import {Router } from 'angular2/router';
//import {SubjectComponent} from 'subject/subject.component';


@Component({
	selector: 'course',
	styleUrls: ['./app/courses/courses.component.css'],
	templateUrl: './app/courses/courses.component.html'

})


export class CoursesComponent implements OnInit {
	public Courses: Course[];
	constructor(private _router: Router,
	            private _coursesservices: CoursesService
	) { }

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
