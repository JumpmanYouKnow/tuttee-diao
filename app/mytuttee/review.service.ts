import { Injectable } from '@angular/core'
import {HTTP_PROVIDERS, Http, Headers, URLSearchParams} from '@angular/http';
import {TokenService} from '../services/token.service'


@Injectable()
export class ReviewService {
    constructor(private _tokenservice: TokenService, private _http: Http) { }

    postReview(rating:Number,course_id:string,tutor_id:Number,comment:string) {
 		this._tokenservice.checkExp();
        let review = JSON.stringify ({
        	rating: rating,
        	course_id: course_id,
        	tutor_id: tutor_id,
        	text: comment
        });

        console.log (review);

        var headers = new Headers();
        headers.append('Content-Type','application/json');
    	headers.append('Authorization',"Basic "+window.btoa(this._tokenservice.getToken()+":"));


        return this._http.post('http://127.0.0.1:5000/api/reviews',
               review ,
            {headers:headers})
           .map(res => res.json());

    }
}