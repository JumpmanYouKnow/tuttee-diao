import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from '../about/about.component'
import {AfterViewInit, ElementRef} from 'angular2/core'

// declare var jQuery: JQueryStatic;

@Component({
	selector: 'navbar',
	templateUrl: 'app/other/nav.html',
	styleUrls: ['app/other/nav.css'], 
	directives:[ROUTER_DIRECTIVES]
	
	
})


export class NavbarComponent implements AfterViewInit {

	constructor(private el: ElementRef) {
    }

	ngAfterViewInit () {
		$(this.el.nativeElement).find(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
	}

}

