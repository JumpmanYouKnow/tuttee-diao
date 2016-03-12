import { Injectable } from 'angular2/core';
import {SUBJECT} from './mock-subject';

export interface Teacher {
	   id: number;
       name: string;
	   teacher_descripition: string;
       imageURL: string;
	   sales: number;
	   avgpr: number;

}
export interface Subject {
	id: string;	
	course_description: string;   
	teacher: Teacher[];
}


@Injectable()
export class SubjectService {
	getSubject(id: string) {
		return	Promise.resolve(SUBJECT).then(
			heroes =>  heroes.filter(hero => hero.id === id)[0]
		);

		 
	}
}