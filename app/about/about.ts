import {Component} from 'angular2/core';
import {NavbarComponent} from '../other/navbar.component'
import {FooterComponent} from '../other/footer.component'
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styleUrls: ['app/about/about.css'], 
 	templateUrl: 'app/about/about.html',
  directives:[NavbarComponent,FooterComponent]
 
})
export class About {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `About` component');
  }

}
