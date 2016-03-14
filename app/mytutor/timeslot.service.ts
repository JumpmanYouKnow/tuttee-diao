import { Injectable } from 'angular2/core'
import {TIMESLOTS} from './mock-timeslot'

export interface tuttee {
	name:string;
	email:string;
	wechat:string;

}


export interface Timeslot {
	id:number,
	course: string,
	time: Date,
	nowPeople: tuttee[];
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