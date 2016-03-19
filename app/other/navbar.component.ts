import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from '../about/about.component'
import {AfterViewInit, ElementRef} from 'angular2/core'
import { FORM_DIRECTIVES } from 'angular2/common';
 import {LoginService,loginObj} from './login.service'


// declare var jQuery: JQueryStatic;

@Component({
	selector: 'navbar',
	templateUrl: 'app/other/nav.html',
	styleUrls: ['app/other/nav.css'], 
	directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES]
	
	
})


export class NavbarComponent implements AfterViewInit {

	private loginObj:loginObj


	constructor(private el: ElementRef, private _loginservice: LoginService) {
    }


    login (value:any) {
    	this._loginservice.postLogin(value.email,value.password)
    	.subscribe( data => {
    		this.loginObj = data;
    	});
    }

     register (value:any) {
    	this._loginservice.postLogin(value.email,value.password)
    	.subscribe( data => {
    		this.loginObj = data;
    	});
    }

	ngAfterViewInit () {
		$(this.el.nativeElement).find(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
		$(".dropdown-button").dropdown();
	}

}

