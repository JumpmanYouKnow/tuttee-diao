import {Component,AfterViewInit}  from '@angular/core';

@Component({
	selector: 'rezone',
	styleUrls: ['app/other/rezone.css'], 
	templateUrl: 'app/other/rezone.html',
})

export class RezoneComponent {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `rezone` component');
  }
}