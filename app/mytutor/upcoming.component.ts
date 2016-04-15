
import {Component,OnInit,AfterViewInit,} from 'angular2/core';
import {TimeslotService,Timeslot} from './timeslot.service';
import { Control, ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {PostService} from './post.service'


@Component({
	selector:'upcoming',
	templateUrl: './app/mytutor/upcoming.component.html',
	styleUrls: ['./app/mytutor/upcoming.component.css'],
	directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES],




})

export class UpcomingComponent implements OnInit, AfterViewInit {

		Timeslots : Timeslot[];
		public modSlot : any = false;

		constructor(private _timeslotservice:TimeslotService, private _postservice: PostService
	) {}

	getTimeSlots() {
		console.log("fuck");

		this._timeslotservice.getTimeslot().subscribe(data => {
			console.log(data.timeslots);
			let slots = data.timeslots;
			for (let i=0;i<slots.length;i++) {  
              slots[i].start_time = Date.parse(slots[i].start_time);
              slots[i].end_time = Date.parse(slots[i].end_time);
          }
        
			this.Timeslots = slots;

			}
			, err=> console.log(err));

		// this._timeslotservice.getTimeslot().then(timeslot => {
		// 	console.log(timeslot);
		// 	this.Timeslots = timeslot;
		 	setTimeout( function() {

			// $('.tooltip').tooltipster();
			$('.modal-trigger').leanModal();
		 }, 500);
		 

	}

	ngOnInit() {
		this.getTimeSlots();
       
	}

	closeModify() {
		this.modSlot = false;
	}

	modifyOpen(timeslot:Timeslot) {
		console.log('fuck');
		this.modSlot = jQuery.extend({}, timeslot);
	
		console.log(this.modSlot);
		this.modSlot.duration = moment(this.modSlot.end_time-this.modSlot.start_time)/1000/60;
		var self = this;
		setTimeout(function() {
			console.log(self.modSlot.start_time);
			$('#datetimepicker').datetimepicker();
			self.modSlot.start_time = moment(self.modSlot.start_time).format('YYYY-MM-DD[T]HH:mm:ss.SSSZ');
			$('#datetimepicker').focusout( function() {
      		var start_time =  $('#datetimepicker').data("DateTimePicker").date();
  			console.log(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
  			$('input[name="start_time"]').val(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
  			});
		},100);

	}

	modify() {
		console.log(this.modSlot);
		let start_time = moment(document.getElementById('datetimepicker').value);
		let end_time = start_time.valueOf() + this.modSlot.duration*60*1000;
		this.modSlot.end_time = moment(end_time).format('YYYY-MM-DD[T]HH:mm:ss.SSSZ');

		this.modSlot.start_time = document.getElementById('datetimepicker').value;

		this._postservice.modifyTimeslot(this.modSlot).subscribe(data =>{
			console.log(data);
			this.closeModify();
			this.getTimeSlots();

		} ,err=>console.log(err));

	}

	deleteSlot(id) {
		this._postservice.deleteSlot(id).subscribe(data=> {
			console.log(data);
			this.closeModify();
			this.Timeslots = this.Timeslots.filter( obj => return obj.id != id);    //O(n)
		}, err=>console.log(err));
	}

	
	ngAfterViewInit() {


	}


}