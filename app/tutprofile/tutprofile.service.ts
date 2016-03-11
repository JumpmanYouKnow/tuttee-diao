import { Injectable } from 'angular2/core';
import {TUTPROFILES} from './mock-tutprofile'

  
export interface TutProfile {
	id: number;
	name: string;
	description: string;
	comments: Comment[];
	courses: string[];
}

export interface Comment {
	course: string;
	faculty: string;
	time: Date;
	content: string;
}

@Injectable()
export class TutProfileService { 
	getTutProfile() {
		return Promise.resolve(TUTPROFILES);
	}

}