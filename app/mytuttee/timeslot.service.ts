import { Injectable } from '@angular/core'
import {TIMESLOTS} from './mock-timeslot'
import {HTTP_PROVIDERS, Http, Headers, URLSearchParams} from '@angular/http';
import {TokenService} from '../services/token.service'

export interface tuttee {
	name: string;
	email: string;
	wechat: string;
}

export interface Timeslot {
	// id: number,
	// course: string,
	// time: Date,
	// nowPeople: tuttee[];
	// maxPeople: number,
	// duration: number,
	// location: string,
	// tutor_id: number,
	// price: number,
	// description: string
}


@Injectable()
export class TimeslotService {
    constructor(private _tokenservice: TokenService, private _http: Http) { }

	getTimeslot() {
		// console.log("fuck you ");
		console.log(window.btoa(this._tokenservice.getToken() + ":"));
		var headers = new Headers();
		headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));

		return this._http.get('http://127.0.0.1:5000/api/profile/appointments', { headers: headers })
			.map(res => res.json());
	}

	cancel(id:any) {
		var headers = new Headers();
		headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
		return this._http.delete('http://127.0.0.1:5000/api/appointments/' + id, { headers: headers })
			.map(res => res.json());

	}


	
}