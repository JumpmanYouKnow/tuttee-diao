import {Component,AfterViewInit}  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'footer',
	styleUrls: ['app/other/footer.css'], 
	templateUrl: 'app/other/footer.html',
	directives:[ROUTER_DIRECTIVES]

})

export class FooterComponent {

	ngAfterViewInit() {
		$('#weixin').tooltipster({
			content: $('<span><img src="http://placehold.it/100x100" /> </span>')
		});
	}

}
