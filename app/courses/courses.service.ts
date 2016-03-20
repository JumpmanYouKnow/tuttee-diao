import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS,Http,Headers} from 'angular2/http';
import {COURSES} from'./mock-courses';

export interface Course {
	favorited: boolean;
	id: string;
	name: string;
//	imageURL: string;
	description: string;
	total_tutors: number;
//	sales: number;
}

@Injectable()



export class CoursesService {

	
 	constructor(private _http: Http) {
	  }

	getCourses() {
		// var headers = new Headers();
		// headers.append('Content-Type','application/json');
		//headers.append('Authorization','')
		// return this._http.get('/courses')
		//    .map(res => res.json());

		return Promise.resolve(COURSES);
	}
}

