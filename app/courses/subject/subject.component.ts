import {Component, OnInit,Pipe} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {SubjectService, Subject, Teacher} from './subject.service';


@Component({
	selector: 'subject',
	styleUrls: ['app/courses/subject/subject.component.css'],
	templateUrl: 'app/courses/subject/subject.component.html',

})


export class SubjectComponent implements OnInit{
	Subject: Subject;
  Teacher: Teacher[];

    constructor(
    private _router: Router,
    private _subjectService: SubjectService,
    private _routeParams: RouteParams) {
  }


	ngOnInit() {
    let a = this._routeParams.get('subject');

    this._subjectService.getSubject(a).subscribe(data => {
      console.log(data);
      this.Subject = {id:data.name};
      this.Teacher = data.tutors;
      console.log(this.Teacher);
    // this.Subject = data;
    // this.Teacher = this.Subject.teacher;
  },
  err => console.log(err)
  );
  }

  gotoDetail(subject_id: String,tutor_id:number) {
    this._router.navigate(['Tutorclass', { subject: subject_id , id:tutor_id }]);
    //this._router.navigate(['About']);
  }

}