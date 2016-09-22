import {Component}  from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { FORM_DIRECTIVES } from '@angular/common';
import {LoginService,loginObj} from './login.service'
import {TokenService} from '../services/token.service'



// declare var jQuery: JQueryStatic;

@Component({
	selector: 'login',
	templateUrl: 'app/other/login.html',
	styleUrls: ['app/other/login.css'], 
	directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES]
	
})

export class LoginComponent{
	constructor (private _loginservice:LoginService,
    private _tokenservice:TokenService) {}

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



}

