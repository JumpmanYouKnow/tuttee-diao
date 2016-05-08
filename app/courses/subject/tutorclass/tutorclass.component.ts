import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TutorclassService, Timeslot, Comment,PostObj} from './tutorclass.service'


@Component({
  selector: 'tutorclass',
  styleUrls: ['app/courses/subject/tutorclass/tutorclass.component.css'],
  // template: `
  // <p *ngFor = "#timeslot of Tutorclass">{{timeslot.id}}</p>
  // `
  templateUrl: 'app/courses/subject/tutorclass/tutorclass.component.html',

})


export class TutorclassComponent implements OnInit {
   Timeslots: Timeslot[];
   Subject: string;
   username:string;
   Comment: Comment[];
   timeid: any;
   timecourseid: any;

    constructor(
    private _routeParams: RouteParams,
    private _tutorclassService: TutorclassService
  ) {
  }

  postAppointment(timeslot: Timeslot) {
    
     this.timeid = timeslot.id;
     this.timecourseid = timeslot.course_id;
     // console.log(this.timeid);
     // console.log(this.Subject);
     let PostObj: PostObj = {
       id: this.timeid,
       course_id: this.Subject
     }
     console.log(PostObj);
     this._tutorclassService.postAppointement(PostObj).subscribe(
       data => console.log(data),
 
       err => console.log(err),
       )
      }


  ngOnInit() {
    let subject = this._routeParams.get('subject');
    this.Subject = subject;
    let id = this._routeParams.get('id');

    this._tutorclassService.getTimeslot(id).subscribe(data => {
      this.username = data.username;
        let slots = data.timeslots;
        let timeslots:any = [];
        for (let i=0;i<slots.length;i++) {
          if (slots[i].courses_id == this.Subject || slots[i].courses_id == null) {
             slots[i].start_time = Date.parse(slots[i].start_time);
              slots[i].end_time = Date.parse(slots[i].end_time);
            timeslots.push(slots[i]);

          }
        }
        this.Timeslots = timeslots;
    });
   
  //   this._tutorclassService.getTimeslot(id).then(hero => {
  //   this.Tutorclass = hero;
  // //  console.log(this.Tutorclass);
  //   this.Subject = subject;
  // });
  //   this._tutorclassService.getComment().then(data =>
  // { this.Comment = data 
  //   console.log(this.Comment);
  // })

  };


}

