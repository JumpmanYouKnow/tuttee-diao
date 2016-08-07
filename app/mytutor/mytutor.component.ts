import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {UpcomingComponent} from './upcoming.component'
import {HistoryComponent} from './history.component'
import {SettingComponent} from './setting.component'
import {PostComponent} from './post.component'
import {TimeslotService,Timeslot} from './timeslot.service'
import {TokenService} from '../services/token.service'




@Component ({
	selector: 'mytutor',
	templateUrl: './app/mytutor/mytutor.component.html',
	styleUrls: ['./app/mytutor/mytutor.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class MytutorComponent {
	public username: string;
	public photoURL:string = "http://placehold.it/150x150";


	constructor(private _tokenservice: TokenService
	) { }

	ngOnInit() {
		this.username = this._tokenservice.getUsername();
		this._tokenservice.getProfile().subscribe(data => {
			this.photoURL = "http://localhost:5000/photo/"+ data.photo;
			this.username = data.username;
		});
		console.log(this.username)
	}



}