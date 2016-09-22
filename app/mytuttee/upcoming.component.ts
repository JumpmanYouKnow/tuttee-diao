import {Component,OnInit,AfterViewInit} from '@angular/core';
import {TimeslotService, Timeslot} from '../mytuttee/timeslot.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';



@Component({
	selector:'upcoming',
	templateUrl: './app/mytuttee/upcoming.component.html',
	styleUrls: ['./app/mytuttee/upcoming.component.css'],
  directives:[ROUTER_DIRECTIVES,PaginationControlsCmp],
	pipes: [PaginatePipe],
    providers: [PaginationService,TimeslotService],

})

export class UpcomingComponent {
	Timeslots : Timeslot[];
	public username: string;
	constructor(private _timeslotservice:TimeslotService) {}

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
			this.Timeslots = slots.filter(item => item.timeslot.start_time > Date.now())
			.sort((a,b) => a.start_time>b.start_time?-1:1);
			if (this.Timeslots.length == 0) {
			this.Timeslots = null;
			}

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