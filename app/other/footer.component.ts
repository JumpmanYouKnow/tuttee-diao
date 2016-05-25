import {Component,AfterViewInit}  from '@angular/core';

@Component({
	selector: 'footer',
	templateUrl: 'app/other/footer.html',

})

export class FooterComponent {

	ngAfterViewInit() {
		$('#weixin').tooltipster({
			content: $('<span><img src="http://placehold.it/100x100" /> </span>')
		});
	}

}
