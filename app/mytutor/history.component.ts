
import {Component,OnInit,AfterViewInit} from 'angular2/core';
import {TimeslotService,Timeslot} from './timeslot.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
	selector:'history',

	templateUrl: './app/mytutor/history.component.html',
	styleUrls: ['./app/mytutor/history.component.css'],
	directives:[ROUTER_DIRECTIVES]

})

export class HistoryComponent implements OnInit {

		Timeslots : Timeslot[];
		modSlot : Timeslot;

		constructor(private _timeslotservice:TimeslotService
	) {}

	getTimeSlots() {
		this._timeslotservice.getTimeslot().then(timeslot => {
			console.log(timeslot);
			this.Timeslots = timeslot;
			setTimeout( function() {
			// $('.tooltip').tooltipster();
			$('.modal-trigger').leanModal();
		}, 500);
		});

	}

	ngOnInit() {
		this.getTimeSlots();
       
	}

	




}