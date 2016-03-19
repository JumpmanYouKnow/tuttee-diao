import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import { Injectable } from 'angular2/core'



@Injectable()
export class LoginService { 

 	constructor(private http: Http) {

	  }




	 

	login(username:string,password:string) {

		var headers = new Headers();
		headers.append('Content-Type','application/json')
		this.http.post('/login',)
	}
}
