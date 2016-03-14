import { Injectable } from 'angular2/core'
import {TIMESLOTS} from './mock-timeslot'

  export interface Timeslot {
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


@Injectable()
export class TutorclassService { 

    getTimeslot(id: number) {
    console.log(TIMESLOTS);
        return Promise.resolve(TIMESLOTS).then(
        tuotr => tuotr.filter(hero => hero.id == id)
      );   
  }
}