import {Component,OnInit} from 'angular2/core';
import {Course} from '../objects/course';
import {CoursesService} from './courses.service';
//import {SubjectComponent} from 'subject/subject.component';


@Component({
	selector: 'course',
	styleUrls:[ './app/courses/courses.component.css'],
	templateUrl: './app/courses/courses.component.html'
    
})


export class CoursesComponent implements OnInit{
	public Courses:Course[];

	constructor( private _coursesservices : CoursesService
	) {}

	getCourse(){
		this._coursesservices.getCourses().then(data => this.Courses = data);
	}
	ngOnInit() {
		this.getCourse();
	}
}