
import {Component,OnInit,AfterViewInit} from 'angular2/core';
import {TimeslotService,Timeslot} from './timeslot.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';
@Component({
	selector:'upcoming',
	templateUrl: './app/mytutor/upcoming.component.html',
	styleUrls: ['./app/mytutor/upcoming.component.css'],
	directives:[ROUTER_DIRECTIVES]

})

export class UpcomingComponent implements OnInit, AfterViewInit {

		Timeslots : Timeslot[];
		modSlot : Timeslot;

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

	modify(timeslot:Timeslot) {
		this.modSlot = timeslot;
		setTimeout( function() {
		$('select').material_select();
		jQuery('#datetimepicker').datetimepicker({
		  format:'DD.MM.YYYY h:mm a',
		  formatTime:'h:mm a',
		  formatDate:'DD.MM.YYYY'
		});
	}, 100);

	}

	
	ngAfterViewInit() {

	}


}