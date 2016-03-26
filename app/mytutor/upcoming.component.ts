
import {Component,OnInit,AfterViewInit} from 'angular2/core';
import {TimeslotService,Timeslot} from './timeslot.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
	selector:'upcoming',
	templateUrl: './app/mytutor/upcoming.component.html',
	styleUrls: ['./app/mytutor/upcoming.component.css'],
	directives:[ROUTER_DIRECTIVES],




})

export class UpcomingComponent implements OnInit, AfterViewInit {

		Timeslots : Timeslot[];
		modSlot : Timeslot;

		constructor(private _timeslotservice:TimeslotService
	) {}

	getTimeSlots() {
		console.log("fuck");

		this._timeslotservice.getTimeslot().subscribe(data => console.log(data)
			, err=> console.log(err));

		// this._timeslotservice.getTimeslot().then(timeslot => {
		// 	console.log(timeslot);
		// 	this.Timeslots = timeslot;
		// 	setTimeout( function() {

			// $('.tooltip').tooltipster();
			$('.modal-trigger').leanModal();
		// }, 500);
		// });

	}

	ngOnInit() {
		this.getTimeSlots();
       
	}

	closeModify() {
		this.modSlot = undefined;
	}

	modify(timeslot:Timeslot) {
		this.modSlot = timeslot;
		setTimeout( function() {
		$('select').material_select();
		$('#datetimepicker').datetimepicker({ 
			    format:'m-d-Y h:m',
  			});
	}, 100);

	}

	
	ngAfterViewInit() {


	}


}