import {Component,OnInit,AfterViewInit} from 'angular2/core';
import {TimeslotService, Timeslot} from '../mytuttee/timeslot.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	selector: 'history',
	templateUrl: './app/mytuttee/history.component.html',
	styleUrls: ['./app/mytuttee/history.component.css'],
	             providers: [TimeslotService],
})


export class HistoryComponent {
	Timeslots : Timeslot[];
	constructor(private _timeslotservice:TimeslotService
	) {}

	getTimeSlots() {
		
		this._timeslotservice.getTimeslot().subscribe(data => {
			// console.log(data.appointments);
			console.log(data);
			let slots = data.appointments;
			console.log(slots);
			for (let i = 0; i < slots.length; i++) {
				slots[i].timeslot.start_time = Date.parse(slots[i].timeslot.start_time);
				slots[i].timeslot.end_time = Date.parse(slots[i].timeslot.end_time);
			}
			this.Timeslots = slots.filter(item => item.timeslot.start_time < Date.now());

			console.log(this.Timeslots);

		}
			, err => console.log(err));

	}

	ngOnInit() {
		this.getTimeSlots();
	}
}