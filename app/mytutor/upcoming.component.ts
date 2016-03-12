
import {Component,OnInit,AfterViewInit} from 'angular2/core';
import {TimeslotService,Timeslot} from './timeslot.service'

@Component({
	selector:'upcoming',
	templateUrl: './app/mytutor/upcoming.component.html',
	styleUrls: ['./app/mytutor/upcoming.component.css']

})

export class UpcomingComponent implements OnInit, AfterViewInit {

		Timeslots : Timeslot[];

		constructor(private _timeslotservice:TimeslotService
	) {}

	getTimeSlots() {
		this._timeslotservice.getTimeslot().then(timeslot => {
			console.log(timeslot);
			this.Timeslots = timeslot;
			setTimeout( function() {
			$('.tooltip').tooltipster();
		}, 500);
		});

	}

	ngOnInit() {
		this.getTimeSlots();
       
	}

	
	ngAfterViewInit() {

	}


}