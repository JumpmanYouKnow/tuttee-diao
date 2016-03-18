import {Component,OnInit,AfterViewInit} from 'angular2/core';
import {TimeslotService,Timeslot} from '../mytutor/timeslot.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
	selector:'upcoming',
	templateUrl: './app/mytuttee/upcoming.component.html',
	styleUrls: ['./app/mytuttee/upcoming.component.css']

})

export class UpcomingComponent {
	Timeslots : Timeslot[];
	constructor(private _timeslotservice:TimeslotService
	) {}

	getTimeSlots() {
		this._timeslotservice.getTimeslot().then(timeslot => {
			console.log(timeslot);
			this.Timeslots = timeslot;
			
		});

	}


	ngOnInit() {
		this.getTimeSlots();
       
	}
}