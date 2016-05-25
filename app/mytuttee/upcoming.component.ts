import {Component,OnInit,AfterViewInit} from '@angular/core';
import {TimeslotService, Timeslot} from '../mytuttee/timeslot.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';


@Component({
	selector:'upcoming',
	templateUrl: './app/mytuttee/upcoming.component.html',
	styleUrls: ['./app/mytuttee/upcoming.component.css'],
             directives: [ROUTER_DIRECTIVES],
             providers: [TimeslotService],
})

export class UpcomingComponent {
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
			this.Timeslots = slots.filter(item => item.timeslot.start_time > Date.now());

			console.log(this.Timeslots);

		}
			, err => console.log(err));

	}
              	
	cancel(id:any) {
		this._timeslotservice.cancel(id).subscribe(data => {
			console.log(data);
			this.getTimeSlots();
			// this.Timeslots = this.Timeslots.filter(obj => return obj.id != id);    
		}, err => console.log(err));
	}
	

	ngOnInit() {
		this.getTimeSlots();
	}
}