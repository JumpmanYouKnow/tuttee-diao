import {Component,AfterViewInit} from 'angular2/core';

@Component({
	selector:'post',
	templateUrl: './app/mytutor/post.component.html',
	styleUrls: ['./app/mytutor/post.component.css']

})

export class PostComponent {

	ngAfterViewInit() {
			$('#datetimepicker').datetimepicker({ 
			    format:'m-d-Y h:m',
  			});

		  $('select').material_select();
	}

}