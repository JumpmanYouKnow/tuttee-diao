import {Component, OnInit,Pipe} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {TutProfileService} from '../../tutprofile/tutprofile.service'

import {SubjectService, Subject, Teacher} from './subject.service';


@Component({
	selector: 'subject',
	styleUrls: ['app/courses/subject/subject.component.css'],
	templateUrl: 'app/courses/subject/subject.component.html',
  providers: [TutProfileService]
})


export class SubjectComponent implements OnInit{
	Subject: Subject;
  Teacher: Teacher[];
  loading: boolean = true;

    constructor(
    private _router: Router,
    private _subjectService: SubjectService,
    private _tutprofileService: TutProfileService,
    private route: ActivatedRoute) {
  }


	ngOnInit() {
    this.route.params.subscribe(params => {
      
     let subject = params['subject'];
     console.log (subject);
     this._subjectService.getSubject(subject).subscribe(data => {
      this.loading = false;
      console.log(data);
      this.Subject = {id:data.id,name:data.name};
      for (let i = 0; i < data.tutors.length; i++) {
         this._tutprofileService.getTutProfile(data.tutors[i].id).subscribe(profile => {
           console.log(profile);
           if (profile.photo) {
             data.tutors[i].photo = "http://tuttee.ca/photo/" + profile.photo;
           }
           
         });
      }
      this.Teacher = data.tutors;
      console.log(this.Teacher);
    // this.Subject = data;
    // this.Teacher = this.Subject.teacher;
  },
    err => console.log(err)
  );
   });
  }

  gotoDetail(subject_id: String,tutor_id:number) {
    this._router.navigate(['/subject', subject_id , tutor_id ]);
  }

  seeProfile(tutor_id: number) {
    this._router.navigate(['/tutor', tutor_id]);
  }

}