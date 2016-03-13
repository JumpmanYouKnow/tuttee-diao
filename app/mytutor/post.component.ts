import {Component,AfterViewInit} from 'angular2/core';

@Component({
	selector:'post',
	templateUrl: './app/mytutor/post.component.html',
	styleUrls: ['./app/mytutor/post.component.css']

})

export class PostComponent {

	ngAfterViewInit() {
			jQuery('#datetimepicker').datetimepicker({ 
			    format:'DD.MM.YYYY h:mm a',
  			});
		  $('select').material_select();
	}

}