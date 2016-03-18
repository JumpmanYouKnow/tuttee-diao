import {Component} from 'angular2/core';
import {TimeslotService,Timeslot} from '../mytutor/timeslot.service';

@Component({
	selector: 'history',
	templateUrl: './app/mytuttee/history.component.html',
	styleUrls: ['./app/mytuttee/history.component.css']
})

export class HistoryComponent {

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