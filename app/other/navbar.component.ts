import {Component,Input,Output,EventEmitter}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from '../about/about.component'
import {AfterViewInit,OnInit, ElementRef} from 'angular2/core'
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


export class NavbarComponent implements AfterViewInit,OnInit{
    private loginObj:loginObj  = {
    "confirmed": true,
    "expiration": 3600,
    "id": 3,
    "is_tutor": true,
    "token": "eyJpYXQiOjE0NTgyNjI2MTEsImFsZyI6IkhTMjU2IiwiZXhwIjoxNDU4MjYzMjExfQ.eyJpZCI6M30.eJI6Gashsrn2sUeW6PUtuGJFZ_7u6SRBv9AKV6vRQ5Q",
    "username": "root"
}
    private username:string;
    private is_tutor:boolean;
    private logon:boolean = false;


	// @Output() private chuan = new EventEmitter();


	constructor(private el: ElementRef
        , private _loginservice: LoginService
        ,private _tokenservice :TokenService
        ,private window: Window) {

    }

    tryLogin(value:any) {
        localStorage.setItem('fuck','fuckedhaha');
        console.log("fuck is "+localStorage.getItem('fuck'));


        console.log("shit");
        var signInfo = window.btoa(value.email+":"+value.password);
        console.log(signInfo);
           this._loginservice.postLogin(signInfo)
              .subscribe( data => {
                  this.username = data.username;
                  this._tokenservice.setUsername(data.username);
         
                  if (data.is_tutor) {
                      this.is_tutor = true;
                      this._tokenservice.setIs_tutor(true);
                  }

                  else {
                      this.is_tutor = false;
                      this._tokenservice.setIs_tutor(false);
                  }

                  this.logon = true;
                  this._tokenservice.setToken(data.token);
                  this._tokenservice.setTokenLife(Date.now()+data.expiration*1000);
              

                  console.log(data);
                  console.log(this.is_tutor);
                  
                      $('#modal1').closeModal();

          },
          err=>console.log(JSON.parse(err._body).message));
    }


    // logint () {
    //     console.log("fuck");
    //  //   var signInfo = window.btoa(value.email+":"+value.password);

    // 	// this._loginservice.postLogin(signInfo)
    // 	// .subscribe( data => {
    //  //        console.log(data);
    // 	// //this.loginObj = data;
    //  //      //  this.chuan.emit(this.loginObj);
    // 	// });
    // }

    //  register (value:any) {
    // 	this._loginservice.postLogin(value.email,value.password)
    // 	.subscribe( data => {
    // 		console.log(data);
    // 		this.loginObj = data;
    // 	});
    // }

	ngOnInit () {
	

        if(this._tokenservice.initLogin()) {
            this.username = this._tokenservice.getUsername();
            this.is_tutor = this._tokenservice.getIs_tutor();
            this.logon = true;
            console.log(this.username);
        };


	}

    ngAfterViewInit() {
            $(this.el.nativeElement).find(".button-collapse").sideNav();
        $('.modal-trigger').leanModal();
        $(".dropdown-button").dropdown();
        
        
    }



}

