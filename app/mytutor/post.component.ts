    import {Component,AfterViewInit} from '@angular/core';
import { Control, ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
import {PostService,postObj} from './post.service'
import {Router} from '@angular/router-deprecated'
import {CoursesService, Course} from '../courses/courses.service';

@Component({
	selector:'post',
	templateUrl: './app/mytutor/post.component.html',
	styleUrls: ['./app/mytutor/post.component.css'],

})




export class PostComponent {

	course_id:string;
	start_time:string;
	end_time:string;
	duration:number;
	capacity:number;
	fee:number;
	address:string;

       public modal: Object = {};
       Courses:any = [];
       // public test: String;

	constructor (private _postservice: PostService, 
    private _router: Router, 
    private _coursesservice: CoursesService) {
	}

       ngOnInit() {
    this.getCoursesList()
};

	ngAfterViewInit() {
  $('#datetimepicker').datetimepicker();
  		$('#datetimepicker').focusout( function() {
       var start_time =  $('#datetimepicker').data("DateTimePicker").date();
  			console.log(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
  		 //  var start_time = $('#datetimepicker').datetimepicker('getValue').toISOString();
  			 $('input[name="start_time"]').val(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
  			// console.log($('#datetimepicker').datetimepicker('getValue').toISOString());
  		});

}

  getCoursesList() {
    this._coursesservice.getCourses().subscribe(data => {
     var listLength = data.courses.length;
      //  this.Courses = data.courses;
      // console.log(this.Courses);
      // this.test = data.courses[0].id;
      // console.log(this.test)
    // console.log(data.courses);
        for (let i = 0; i < listLength; i++){
      this.Courses.push(data.courses[i].id);
      }
    this.Courses.sort();
      console.log(this.Courses);
      });
    }

postSlot(value: any) {
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
  	this._postservice.postTimeslot(postObj).subscribe(data => {
      console.log(data);
      alert("发布成功！");
      this._router.navigate(['Upcoming']);
    },
      err => alert(JSON.stringify(err._body)));
	// console.log("this si invoded");
	// console.log(value);
	
}



}