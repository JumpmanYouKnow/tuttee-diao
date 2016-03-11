import {Injectable} from 'angular2/core';
import {COURSES} from'./mock-courses';

export interface Course {
	id: number;
	name: string;
	imageURL: string;
	description: string;
	numTutor: number;
	sales: number;
}

@Injectable()

export class CoursesService {
	getCourses() {
		return Promise.resolve(COURSES);
	}
}

