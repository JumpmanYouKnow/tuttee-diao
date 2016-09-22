import {Component,Input,Output,EventEmitter}  from '@angular/core';
// import {ROUTER_DIRECTIVES,Router} from '@angular/router-deprecated';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AboutComponent} from '../about/about.component'
import {AfterViewInit,OnInit, ElementRef} from '@angular/core'
import { FORM_DIRECTIVES } from '@angular/common';
import {LoginService,loginObj} from './login.service'
import {TokenService} from '../services/token.service'



// declare var jQuery: JQueryStatic;

@Component({
	selector: 'navbar',
	templateUrl: 'app/other/nav.html',
	styleUrls: ['app/other/nav.css'], 
  directives:[ROUTER_DIRECTIVES]
})


export class NavbarComponent implements AfterViewInit,OnInit{
    private username:string;
    private is_tutor:boolean;
    private logon:boolean = false;
    private wrong:boolean = false;


	constructor(private el: ElementRef
        , private _loginservice: LoginService
        ,private _tokenservice :TokenService
        // ,private _router:Router
        ) {

    }
    tryLogin(value:any) {
        var signInfo = window.btoa(value.email+":"+value.password);
        console.log(signInfo);
           this._loginservice.postLogin(signInfo)
              .subscribe( data => {
                  this.username = data.username;
                  // console.log(this.username);
                 

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
          err=> {
            var error = JSON.parse(err._body).message;
            console.log(error);
            if (error == "Unauthorized access") {
              this.wrong = true;
            }

          });
    }

    logout() {
      localStorage.clear();
      this.logon = false;
      // this._router.navigate(['Home']);
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
        };


	}

    ngAfterViewInit() {
        $(this.el.nativeElement).find(".button-collapse").sideNav();
        $('.modal-trigger').leanModal();
        $(".dropdown-button").dropdown();
        
        
    }



}

