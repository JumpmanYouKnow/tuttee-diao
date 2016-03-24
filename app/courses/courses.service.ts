import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS,Http,Headers,URLSearchParams} from 'angular2/http';
import {COURSES} from'./mock-courses';
import {TokenService} from '../services/token.service'

export interface tutor {
	id:number;
	username:string;
}


export interface Course {
	favorited: boolean;
	id: string;
	name: string;
//	imageURL: string;
//	description: string;
	total_tutors: number;
	tutors: tutor[];
//	sales: number;
}


@Injectable()



export class CoursesService {

	
 	constructor(private _http: Http,private _tokenservice:TokenService) {
	  }

	getCourses() {
		 let params: URLSearchParams = new URLSearchParams();
		 params.set('limit', "6");
		// params.set('cnt', days.toString());
		var headers = new Headers();
		//headers.append('Content-Type','application/json');
		headers.append('Authorization',this._tokenservice.getToken());


		return this._http.get('http://127.0.0.1:5000/api/courses',{headers:headers,search:params})
		   .map(res => res.json());

		//return Promise.resolve(COURSES);
	}
}

