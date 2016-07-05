
import {Component,OnInit,AfterViewInit,} from '@angular/core';
import {TimeslotService,Timeslot} from './timeslot.service';
import { Control, ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {PostService} from './post.service'
import {CoursesService, Course} from '../courses/courses.service';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';



@Component({
	selector:'upcoming',
	templateUrl: './app/mytutor/upcoming.component.html',
	styleUrls: ['./app/mytutor/upcoming.component.css'],
	directives:[ROUTER_DIRECTIVES,PaginationControlsCmp,FORM_DIRECTIVES],
	pipes: [PaginatePipe],
    providers: [PaginationService,TimeslotService]



})

export class UpcomingComponent implements OnInit, AfterViewInit {

		Timeslots : Timeslot[];
		Courses: any = [];
		public modSlot : any = false;


		constructor(private _coursesservice: CoursesService,
			private _timeslotservice:TimeslotService, 
			private _postservice: PostService
	) {}


		  getCoursesList() {
		    this._coursesservice.getCourses().subscribe(data => {
		     var listLength = data.courses.length;
		        for (let i = 0; i < listLength; i++){
		      this.Courses.push(data.courses[i].id);
		      }
		    this.Courses.sort();
		      console.log(this.Courses);
		      });
		    }

		

	getTimeSlots() {
		// console.log("fuck");

		this._timeslotservice.getTimeslot().subscribe(data => {
			// console.log(data.timeslots);
			let slots = data.timeslots;
			for (let i=0;i<slots.length;i++) {  
              slots[i].start_time = Date.parse(slots[i].start_time);
              slots[i].end_time = Date.parse(slots[i].end_time);
          }
        
		this.Timeslots = slots.filter(item => item.start_time > Date.now())
		.sort((a,b) => a.start_time>b.start_time?-1:1);
		if (this.Timeslots.length == 0) {
			this.Timeslots = null;
			}
			console.log (this.Timeslots);

		setTimeout( function() {
			$('.modal-trigger').leanModal();
			console.log ("triggered!")
		 }, 500);
		}
			, err=> console.log(err));
		 

		};

	ngOnInit() {
		this.getTimeSlots();
		this.getCoursesList() 
		};

	closeModify() {
		this.modSlot = false;
	}

	modifyOpen(timeslot:Timeslot) {
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
			this.Timeslots = this.Timeslots.filter(obj => {
			return obj.id != id;});    //O(n)
		}, err=>console.log(err));
	}

	
	ngAfterViewInit() {


	}


}