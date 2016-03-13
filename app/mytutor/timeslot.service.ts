import { Injectable } from 'angular2/core'
import {TIMESLOTS} from './mock-timeslot'



export interface Timeslot {
	course: string,
	time: Date,
	nowPeople: number;
	maxPeople: number,
	duration: number,
	location: string,
	tutor_id: number,
	price: number,
	description: string
}


@Injectable()
export class TimeslotService { 

	getTimeslot() {
		return Promise.resolve(TIMESLOTS);
	}
}