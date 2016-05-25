import {Component,Input,Output,EventEmitter}  from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AboutComponent} from '../about/about.component'
import {AfterViewInit,OnInit, ElementRef} from '@angular/core'
import { FORM_DIRECTIVES } from '@angular/common';
import {LoginService,loginObj} from './login.service'
import {TokenService} from '../services/token.service'



// declare var jQuery: JQueryStatic;

@Component({
	selector: 'register',
	templateUrl: 'app/other/nav.html',
	styleUrls: ['app/other/nav.css'], 
	directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES]
	
})

export class Register{}

