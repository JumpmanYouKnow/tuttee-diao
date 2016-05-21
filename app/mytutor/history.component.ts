import {Component,OnInit,AfterViewInit,} from 'angular2/core';
import {TimeslotService,Timeslot} from './timeslot.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {PostService} from './post.service'


@Component({
	selector:'history',
	templateUrl: './app/mytutor/history.component.html',
	styleUrls: ['./app/mytutor/history.component.css'],
	directives:[ROUTER_DIRECTIVES]

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
        
		this.Timeslots = slots.filter(item => item.start_time < Date.now());

		}
		, err=> console.log(err));


	 	setTimeout( () =>
			$('.modal-trigger').leanModal(), 500);
		 

	}

	ngOnInit() {
		this.getTimeSlots();
	}

}