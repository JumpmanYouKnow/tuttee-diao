import {Component,AfterViewInit}  from 'angular2/core';

@Component({
	selector: 'footer',
	templateUrl: 'app/other/footer.html',

})

export class FooterComponent {

	ngAfterViewInit() {
		$('.tooltip').tooltipster({
			content: $('<span><img src="http://placehold.it/100x100" /> </span>')
		});
	}

}
