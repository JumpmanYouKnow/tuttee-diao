import { Injectable } from '@angular/core'
import {HTTP_PROVIDERS,Http,Headers,URLSearchParams} from '@angular/http';
import {TokenService} from '../../../services/token.service'

  export interface Timeslot {
  id: number,
  course: string,
  course_id:string,
  time: Date,
  start_time: number,
    end_time: number,
    current_apps: number,
  capacity: number,
  duration: number,
  address: string,
  fee: number,
  timestamp:string,
  description: string
}

export interface Comment {
 // course: string;
  faculty: string;
  time: Date;
  content: string;
}

export interface PostObj {
  id: any;
  course_id: string;
}


@Injectable()
export class TutorclassService { 


    constructor(private _tokenservice:TokenService, private _http:Http){}

    getTimeslot(id: string) {

   
    // params.set('cnt', days.toString());
    var headers = new Headers();
    //headers.append('Content-Type','application/json');
    headers.append('Authorization',this._tokenservice.getToken());


    return this._http.get('http://tuttee.ca/api/tutors/'+id,{headers:headers})
       .map(res => res.json());


    // cons  ole.log(TIMESLOTS);
    //     return Promise.resolve(TIMESLOTS).then(
    //     tuotr => tuotr.filter(hero => hero.id == id)
    //   );   
  }

  postAppointement(PostObj:PostObj){
     this._tokenservice.checkExp();

    let params: URLSearchParams = new URLSearchParams();
    // params.set('id', PostObj.id);
    params.set('course_id', PostObj.course_id);

    let appointment = JSON.stringify
    ({
      // id: PostObj.id,
      course_id: PostObj.course_id
    });
    console.log(appointment);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', "Basic " + window.btoa(this._tokenservice.getToken() + ":"));

    return this._http.post('http://tuttee.ca/api/appointments/' + PostObj.id, appointment, { headers: headers,search:params })
    .map(res => res.json());
  }
  //  getComment() {
  //    return Promise.resolve(COMMENT);
  // }
}

