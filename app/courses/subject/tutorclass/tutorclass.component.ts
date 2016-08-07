import {Component, OnInit} from '@angular/core';
// import {Router, RouteParams} from '@angular/router-deprecated';
// import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router'
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
   Comments: Comment[];
   timeid: any;
   timecourseid: any;

    constructor(
    private route: ActivatedRoute,
    private _tutorclassService: TutorclassService
  ) {
  }

  postAppointment(timeslot: Timeslot) {
    // if (timeslot.current_apps == timeslot.capacity) {
    //   alert("the class is full");
    // }
    // else {
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
      
      data => { console.log(data);
                alert(data.student.username + ' successfully book this course');},
        err => {console.log(err);
                alert(err._body);
              }

    );
    }



  ngOnInit() {
    this.route.params.subscribe(params => {
       let subject = params['subject'];
       this.Subject = subject;
       let id = params['id'];
           this._tutorclassService.getTimeslot(id).subscribe(data => {
      this.username = data.username;
        let slots = data.timeslots;
        console.log(data);
        let timeslots:any = [];
        for (let i=0;i<slots.length;i++) {
          if (slots[i].course_id == this.Subject || slots[i].course_id == null) {
             slots[i].start_time = Math.floor(Date.parse(slots[i].start_time));
              slots[i].end_time = Math.floor(Date.parse(slots[i].end_time));
            timeslots.push(slots[i]);
          }
        }
        for (let i=0;i<data.courses.length; i++) {
          if (data.courses[i].id == this.Subject) {
             this.Comments = data.courses[i].reviews;
          }
        }
        console.log(this.Comments);
        this.Timeslots = timeslots;
        console.log (this.Timeslots);
    });
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

