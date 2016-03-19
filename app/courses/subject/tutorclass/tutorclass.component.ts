import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TutorclassService, Timeslot, Comment} from './tutorclass.service'


@Component({
  selector: 'tutorclass',
  styleUrls: ['app/courses/subject/tutorclass/tutorclass.component.css'],
  // template: `
  // <p *ngFor = "#timeslot of Tutorclass">{{timeslot.id}}</p>
  // `
  templateUrl: 'app/courses/subject/tutorclass/tutorclass.component.html',

})


export class TutorclassComponent implements OnInit {
   Tutorclass: Timeslot[];
   Subject: string;
   Comment: Comment[];

    constructor(
    private _routeParams: RouteParams,
    private _tutorclassService: TutorclassService
  ) {
  }


  ngOnInit() {
    let subject = this._routeParams.get('subject');
    let id = this._routeParams.get('id');
   
    this._tutorclassService.getTimeslot(id).then(hero => {
    this.Tutorclass = hero;
  //  console.log(this.Tutorclass);
    this.Subject = subject;
  });
    this._tutorclassService.getComment().then(data =>
  { this.Comment = data 
    console.log(this.Comment);
  })

  };
}

