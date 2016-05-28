import {Component, OnInit,Pipe} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {SubjectService, Subject, Teacher} from './subject.service';


@Component({
	selector: 'subject',
	styleUrls: ['app/courses/subject/subject.component.css'],
	templateUrl: 'app/courses/subject/subject.component.html',

})


export class SubjectComponent implements OnInit{
	Subject: Subject;
  Teacher: Teacher[];
  loading: boolean = true;

    constructor(
    private _router: Router,
    private _subjectService: SubjectService,
    private _routeParams: RouteParams) {
  }


	ngOnInit() {
    let a = this._routeParams.get('subject');

    this._subjectService.getSubject(a).subscribe(data => {
      this.loading = false;
      console.log(data);
      this.Subject = {id:data.id,name:data.name};
      this.Teacher = data.tutors;
      console.log(this.Teacher);
    // this.Subject = data;
    // this.Teacher = this.Subject.teacher;
  },
  err => console.log(err)
  );
  }

  gotoDetail(subject_id: String,tutor_id:number) {
    this._router.navigate(['Tutorclass', {subject: subject_id , id:tutor_id }]);
    //this._router.navigate(['About']);
  }

  seeProfile(tutor_id: number) {
    this._router.navigate(['TutProfile', {id:tutor_id}]);
  }

}