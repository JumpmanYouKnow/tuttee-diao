import {Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {TutProfileService} from './tutprofile.service'
import {TutProfile} from './tutprofile.service'



@Component ({
	selector :'tutprofile',

	 templateUrl:'./app/tutprofile/tutprofile.html',
	 styleUrls:['./app/tutprofile/tutprofile.css'],


})

export class TutProfileComponent implements OnInit{

	public TutProfile: TutProfile ;


	constructor(private _routeParams: RouteParams, private _tutProfileService:TutProfileService
	) {}

	getTutProfile(id:number) {
	
		this._tutProfileService.getTutProfile().then(TutProfiles => this.TutProfile = TutProfiles[id - 1]);

	}

	ngOnInit() {
		 let id = +this._routeParams.get('id');

		this.getTutProfile(id);

	} 



}