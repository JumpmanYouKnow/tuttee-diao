import {Component,Input,Output,EventEmitter}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from '../about/about.component'
import {AfterViewInit,OnInit, ElementRef} from 'angular2/core'
import { FORM_DIRECTIVES } from 'angular2/common';
import {LoginService,loginObj} from './login.service'
import {TokenService} from '../services/token.service'



// declare var jQuery: JQueryStatic;

@Component({
	selector: 'register',
	templateUrl: 'app/other/nav.html',
	styleUrls: ['app/other/nav.css'], 
	directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES]
	
})

