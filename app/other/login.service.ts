import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import { Injectable } from 'angular2/core'


export interface loginObj {
	"confirmed": boolean,
    "expiration": number,
    "id": number,
    "is_tutor": boolean,
    "token": string,
    "username": string
}


@Injectable()
export class LoginService { 

 	constructor(private http: Http) {

	  }

	postLogin(email:string,password:string) {

		var headers = new Headers();
		headers.append('Content-Type','application/json');

		return this.http.post('/login',
			JSON.stringify({email:email,password:password}),headers)
		   .map(res => res.json());
		
	}

	postSignUp(email:string,password:string) {

		var headers = new Headers();
		headers.append('Content-Type','application/json');

		return this.http.post('/register',
			JSON.stringify({email:email,password:password}),{headers:headers})
		   .map(res => res.json());

	}

}
