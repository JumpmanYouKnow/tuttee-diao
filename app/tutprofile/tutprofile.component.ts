// import {Component, OnInit } from '@angular/core';
// import {ROUTER_DIRECTIVES, RouteParams} from '@angular/router-deprecated';
import {TutProfileService} from './tutprofile.service';
import {Component, OnInit, Pipe} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {TutProfile, Reviews, Timeslots, Courses} from './tutprofile.service';



@Component({
	selector: 'tutprofile',
	templateUrl: './app/tutprofile/tutprofile.html',
	// template: "<p> a </p>",
	styleUrls: ['./app/tutprofile/tutprofile.css'],
})

export class TutProfileComponent implements OnInit {

    public TutProfile: TutProfile[];
    public Courses: Courses[];
    public Timeslots: Timeslots[];

	constructor(private _router: Router, 
		private _routeParams: RouteParams, 
		private _tutProfileService: TutProfileService
	) { }
	// templateUrl: './app/tutprofile/tutprofile.html',
	// getTutProfile(id:number) {
	// 	this._tutProfileService.getTutProfile()
	// 		.subscribe( data => {
	//	this.TutProfile = data;
	// }

	


	ngOnInit() {
		 let id = this._routeParams.get('id');
		 this._tutProfileService.getTimeslot(id).subscribe(data => {
			 // this.loading = false;
			 // console.log(data);
			 // this.Subject = { id: data.id, name: data.name };
			 // this.Teacher = data.tutors;
			 console.log(data);
			 // this.Subject = data;
			 // this.Teacher = this.Subject.teacher;
		 },
			 err => console.log(err)
		 );
	} 

	// getTutProfile(id: number) {
		// this._tutProfileService.getTutProfile().then(TutProfiles => {
		// 	this.TutProfile = TutProfiles;
		// 	this.Timeslots = TutProfiles[0].timeslots;
		// 	this.Courses = TutProfiles[0].courses;
			
		// });
	// }

	gotoDetail(subject_id: String, tutor_id: number) {
		this._router.navigate(['Tutorclass', { subject: subject_id, id: tutor_id }]);
	}
}