import { Injectable } from 'angular2/core';
import {TUTPROFILES} from './mock-tutprofile'
import {HTTP_PROVIDERS,Http,Headers} from 'angular2/http';


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
	getTutProfile() {
		return Promise.resolve(TUTPROFILES);
	}

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