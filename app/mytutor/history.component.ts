import {Component,OnInit,AfterViewInit,} from '@angular/core';
import {TimeslotService,Timeslot} from './timeslot.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {PostService} from './post.service'
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
	selector:'history',
	templateUrl: './app/mytutor/history.component.html',
	styleUrls: ['./app/mytutor/history.component.css'],
	directives:[ROUTER_DIRECTIVES,PaginationControlsCmp],
	pipes: [PaginatePipe],
              providers: [PaginationService,TimeslotService]
})




export class HistoryComponent implements OnInit {

		Timeslots : Timeslot[];

		constructor(private _timeslotservice:TimeslotService) {}

	getTimeSlots() {

		this._timeslotservice.getTimeslot().subscribe(data => {
			console.log(data.timeslots);
			let slots = data.timeslots;
			for (let i=0;i<slots.length;i++) {  
              slots[i].start_time = Date.parse(slots[i].start_time);
              slots[i].end_time = Date.parse(slots[i].end_time);
          }
        
		this.Timeslots = slots.filter(item => item.start_time < Date.now())
		.sort((a,b) => a.start_time>b.start_time?-1:1);
		
		if (this.Timeslots.length == 0) {
			this.Timeslots = null;
			}

		}
		, err=> console.log(err));


	 	setTimeout( () =>
			$('.modal-trigger').leanModal(), 500);
		 

	}

	ngOnInit() {
		this.getTimeSlots();
	}

}