import {Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, RouteParams} from '@angular/router-deprecated';
import {TutProfileService} from './tutprofile.service';
import {TutProfile, Reviews, Timeslots, Courses} from './tutprofile.service';



@Component({
	selector: 'tutprofile',
	templateUrl: './app/tutprofile/tutprofile.html',
	styleUrls: ['./app/tutprofile/tutprofile.css'],
})

export class TutProfileComponent implements OnInit {

	public TutProfile: TutProfile[];
    public Courses: Courses[];
    public Timeslots: Timeslots[];

	constructor(private _routeParams: RouteParams, private _tutProfileService: TutProfileService
	) { }

	// getTutProfile(id:number) {
	// 	this._tutProfileService.getTutProfile()
	// 		.subscribe( data => {
	//	this.TutProfile = data;
	// }

	


	ngOnInit() {
		let id = +this._routeParams.get('id');
		 this.getTutProfile(id);
	} 

	getTutProfile(id: number) {
		this._tutProfileService.getTutProfile().then(TutProfiles => {
			this.TutProfile = TutProfiles;
			this.Timeslots = TutProfiles[0].timeslots;
			this.Courses = TutProfiles[0].courses;
			
		});
	}
}