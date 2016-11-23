import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

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
  directives: [ROUTER_DIRECTIVES]
})
export class AboutComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `About` component');
  }

}
