// import { Injectable } from '@angular/core';
// import {TUTPROFILES} from './mock-tutprofile'
// import {HTTP_PROVIDERS,Http,Headers} from '@angular/http';
import { Injectable } from '@angular/core'
import {HTTP_PROVIDERS, Http, Headers, URLSearchParams} from '@angular/http';
import {TokenService} from '../services/token.service'


export interface Reviews {
	id: number;
	rating: number;
	text: string;
	timestamp: Date;
}

export interface Courses {
	id: string;
	name: string;
	number: number;
	reviews: Reviews[];
}

export interface Timeslots {
  address: string,
  capacity: number,
  course: number,
  course_id: number,
  current_apps: number,
  end_time: Date,
  fee: number,
  id: number,
  start_time: Date,
  timestamp: Date
}

export interface TutProfile {
	courses: Courses[];
	favourite: boolean;
	id: number;
	overall_rating: number;
	timeslots: Timeslots[];
	username: string;
}

@Injectable()
export class TutProfileService { 
	constructor(private _tokenservice: TokenService, private _http: Http) { }

	getTimeslot(id: string) {
		var headers = new Headers();
		headers.append('Authorization', this._tokenservice.getToken());
		return this._http.get('http://127.0.0.1:5000/api/tutors/' + id, { headers: headers })
			.map(res => res.json());
	}
	// 	return Promise.resolve(TUTPROFILES);
	// }

}
// @Injectable()
// export class TutProfileService { 
// 	public token: string;

//     constructor(private _http: Http) {
// 	}

// 	getTutProfile() {
// 		return Promise.resolve(TUTPROFILES);
// 	}

// 	getTutProfile(id:number) {
// 		var headers = new Headers();
// 		headers.append('Authorization',this.token);

// 		return this._http.get('/tutors'+ id,
// 			, { headers: headers })
// 		   .map(res => res.json());		
// 	}

// }