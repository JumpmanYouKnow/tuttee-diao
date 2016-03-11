import { Injectable } from 'angular2/core';

export interface Subjectinfo {
	id: string;
	name: string;
	course_description: string;
    teacher_description: string;
    class_number: number;

}

@Injectable()
export class SubjectService { 
	getTutProfile() {
		return Promise.resolve(TUTPROFILES);
	}