import {Component,Input,Output,EventEmitter}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from '../about/about.component'
import {AfterViewInit, ElementRef} from 'angular2/core'
import { FORM_DIRECTIVES } from 'angular2/common';
 import {LoginService,loginObj} from './login.service'
 import {TokenService} from '../services/token.service'


// declare var jQuery: JQueryStatic;

@Component({
	selector: 'navbar',
	templateUrl: 'app/other/nav.html',
	styleUrls: ['app/other/nav.css'], 
	directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES]
	
	
})


export class NavbarComponent implements AfterViewInit {
    private loginObj:loginObj  = {
    "confirmed": true,
    "expiration": 3600,
    "id": 3,
    "is_tutor": true,
    "token": "eyJpYXQiOjE0NTgyNjI2MTEsImFsZyI6IkhTMjU2IiwiZXhwIjoxNDU4MjYzMjExfQ.eyJpZCI6M30.eJI6Gashsrn2sUeW6PUtuGJFZ_7u6SRBv9AKV6vRQ5Q",
    "username": "root"
}

	@Output() private chuan = new EventEmitter();


	constructor(private el: ElementRef, private _loginservice: LoginService,private _tokenservice :TokenService) {

    }


    login (value:any) {
    	this._loginservice.postLogin(value.email,value.password)
    	.subscribe( data => {
    		this.loginObj = data;
            this.chuan.emit(this.loginObj);
    	});
    }

     register (value:any) {
    	this._loginservice.postLogin(value.email,value.password)
    	.subscribe( data => {
    		console.log(data);
    		this.loginObj = data;
    	});
    }

	ngAfterViewInit () {
		$(this.el.nativeElement).find(".button-collapse").sideNav();
		$('.modal-trigger').leanModal();
		$(".dropdown-button").dropdown();
         this.chuan.emit("whatthefuck");
         this._tokenservice.setToken("fuckyoumotehrfucker");
         this._tokenservice.setTokenLife(3600);
	}



}

