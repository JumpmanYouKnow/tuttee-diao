import { Injectable } from 'angular2/core'
import {TIMESLOTS, COMMENT} from './mock-timeslot'


  export interface Timeslot {
  tutor_name: string;
  id: number,
  subject: string,
  time: Date,
  nowPeople: number,
  maxPeople: number,
  duration: number,
  location: string,
  price: number,
  description: string
}

export interface Comment {
 // course: string;
  faculty: string;
  time: Date;
  content: string;
}


@Injectable()
export class TutorclassService { 

    getTimeslot(id: number) {
    console.log(TIMESLOTS);
        return Promise.resolve(TIMESLOTS).then(
        tuotr => tuotr.filter(hero => hero.id == id)
      );   
  }
   getComment() {
     return Promise.resolve(COMMENT);
  }
}

