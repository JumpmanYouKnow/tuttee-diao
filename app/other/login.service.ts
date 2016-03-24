import {HTTP_PROVIDERS,Http,Headers} from 'angular2/http';
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

 	constructor(private _http: Http) {

}

	postLogin(signInfo:string) {
		var headers = new Headers();
		headers.append('Authorization','Basic '+signInfo);

		return this._http.post('http://127.0.0.1:5000/api/login','',{headers:headers})
		   .map(res => res.json());		
	}

	postSignUp(email:string,password:string) {

		var headers = new Headers();
		headers.append('Content-Type','application/json');

		return this._http.post('http://127.0.0.1:5000/api/register',
			JSON.stringify({email:email,password:password}),{headers:headers})
		   .map(res => res.json());
	}

}
