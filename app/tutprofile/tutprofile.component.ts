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
	styleUrls: ['./app/tutprofile/tutprofile.css'],
})

export class TutProfileComponent implements OnInit {

    public TutProfile: TutProfile;
    public Courses: Courses[] = [];
    public photoURL: string;

	constructor(private _router: Router, 
		private _routeParams: RouteParams, 
		private _tutProfileService: TutProfileService
	) { }
	


	ngOnInit() {
		 let id = this._routeParams.get('id');
		 this._tutProfileService.getTutProfile(id).subscribe(data => {
			 this.TutProfile = data;
			 this.photoURL = "http://tuttee.ca/photo/"+ data.photo;
			 this.Courses = data.courses;

			 console.log(data);
		 },
			 err => console.log(err)
		 );
	} 


	gotoDetail(subject_id: String, tutor_id: number) {
		this._router.navigate(['Tutorclass', { subject: subject_id, id: tutor_id }]);
	}
}