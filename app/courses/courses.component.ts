import {Component,OnInit} from 'angular2/core';
import {CoursesService,Course} from './courses.service';
import {Router,RouteData} from 'angular2/router';
import {NavbarComponent} from '../other/navbar.component'
//import {SubjectComponent} from 'subject/subject.component';
import {TokenService} from '../services/token.service'

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
	            private _tokenservice:TokenService
	) {}

	getCourse() {
		this._coursesservices.getCourses()
		.then(data => this.Courses = data);

		//this._coursesservice.getCourses().subscribe(data => this.Courses = data)
	}
	ngOnInit() {
		this.getCourse();
		// console.log("the token is",this.token);
		console.log("the token is : " + this._tokenservice.getToken());
	}


	gotoDetail(course_id: String) {
		console.log(course_id);
		this._router.navigate(['Subject', {subject: course_id }]);
	}
}
