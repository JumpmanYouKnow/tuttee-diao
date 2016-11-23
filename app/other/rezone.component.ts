import {Component,AfterViewInit}  from '@angular/core';

@Component({
	selector: 'rezone',
	styleUrls: ['app/other/rezone.css'], 
	templateUrl: 'app/other/rezone.html',
})

export class RezoneComponent {
  constructor() { }

  ngOnInit() {
  	// location.reload();
  	$(function() {
    $('body').scrollTop(0);
    });
    console.log('hello `rezone` component');
  }
}