import {Component} from 'angular2/core'
import {Course} from '../objects/course'
import {NavbarComponent} from '../other/navbar.component'
import {FooterComponent} from '../other/footer.component'

@Component({
	selector: 'catalog',
	directives: [
		NavbarComponent, FooterComponent
	],
	styleUrls: ['app/catalog/catalog.css'], 
	templateUrl: 'app/catalog/catalog.html',


})

export class Catalog {
	courses: Course[] = [];

	

}