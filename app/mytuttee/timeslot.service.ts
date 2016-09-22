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

export interface postObj {
 grad_year: number;
phone: number;
program: string;
wechat: string;
}


@Injectable()
export class TimeslotService {
    constructor(private _tokenservice: TokenService, private _http: Http) { }

    getTimeslotByID (id:Number) {
		this._tokenservice.checkExp();
		console.log(window.btoa(this._tokenservice.getToken() + ":"));
		var headers = new Headers();
		headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));

		return this._http.get('http://tuttee.ca/api/timeslots/' + id, { headers: headers })
			.map(res => res.json());
    }

	getTimeslot() {
		this._tokenservice.checkExp();
		// console.log("fuck you ");
		console.log(window.btoa(this._tokenservice.getToken() + ":"));
		var headers = new Headers();
		headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));

		return this._http.get('http://tuttee.ca/api/profile/appointments', { headers: headers })
			.map(res => res.json());
	}

	cancel(id:any) {
		var headers = new Headers();
		headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));
		return this._http.delete('http://tuttee.ca/api/appointments/' + id, { headers: headers })
			.map(res => res.json());

	}

	PutProfile(postObj: postObj){
		var headers = new Headers();
		let slot = JSON.stringify({
      grad_year: postObj.grad_year,
      phone: postObj.phone,
      program: postObj.program,
      wechat: postObj.wechat
		});

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));

    return this._http.put('http://tuttee.ca/api/profile',slot,{ headers: headers })
      .map(res => res.json());
	}


}