    import {Component,AfterViewInit} from 'angular2/core';
import { Control, ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/common';
import {PostService,postObj} from './post.service'

@Component({
	selector:'post',
	templateUrl: './app/mytutor/post.component.html',
	styleUrls: ['./app/mytutor/post.component.css'],
	directives:[FORM_DIRECTIVES]

})




export class PostComponent {

	course_id:string;
	start_time:string;
	end_time:string;
	duration:number;
	capacity:number;
	fee:number;
	address:string;

	public modal:Object = {};


	constructor (private _postservice: PostService) {

	}

	ngAfterViewInit() {

  $('#datetimepicker').datetimepicker();
			// $('#datetimepicker').datetimepicker({ 
			//     format:'m-d-Y h:m',
  	// 		});

  	// 	setTimeout(function() {
 		// 	   $('select').material_select();
			// }, 500);

  	
  		// $('#course_id').change (function() {
  			
  		// 	this.course_id = $(this).val();
  		// 	console.log(this.course_id);
  		// });


  		// $('#capacity').change (function() {
  			
  		// 	this.capacity = $(this).val();
  		// 	console.log(this.capacity);
  		// });

  		$('#datetimepicker').focusout( function() {

       var start_time =  $('#datetimepicker').data("DateTimePicker").date();
  			console.log(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
  		 //  var start_time = $('#datetimepicker').datetimepicker('getValue').toISOString();
  			 $('input[name="start_time"]').val(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
  			// console.log($('#datetimepicker').datetimepicker('getValue').toISOString());
  		});

}


postSlot(value:any) {
    let start_time = moment(document.getElementById('datetimepicker').value);
    let end_time = start_time.valueOf() + this.duration*60*1000;

    this.end_time = moment(end_time).format('YYYY-MM-DD[T]HH:mm:ss.SSSZ');
	  this.start_time = document.getElementById('datetimepicker').value;

	console.log(this.start_time);
  	//this.end_time = new Date($('#datetimepicker').datetimepicker('getValue').getMilliseconds + this.duration * 1000*60).toISOString();
  	let postObj:postObj = 
{
  		course_id:this.course_id,
  		capacity:this.capacity,
  		start_time:this.start_time,
  		end_time:this.end_time,
  		address:this.address,
  		fee:this.fee,
  		duration:this.duration

  	}

 	console.log(postObj);
  	this._postservice.postTimeslot(postObj).subscribe(data => console.log(data),
      err => console.log(err));
	// console.log("this si invoded");
	// console.log(value);
	
}



}