import {Component}  from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { FORM_DIRECTIVES } from '@angular/common';
import {LoginService,loginObj} from './login.service'
import {TokenService} from '../services/token.service'



// declare var jQuery: JQueryStatic;

@Component({
	selector: 'register',
	templateUrl: 'app/other/register.html',
	styleUrls: ['app/other/register.css'], 
	directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES]
	
})

export class RegisterComponent{
	constructor (private _loginservice:LoginService) {}

    tryRegister(value:any) {
      console.log(value.email);
      console.log(value.password);
      this._loginservice.postSignUp(value.email,value.password)
        .subscribe(data => {  
          console.log(data);
          alert(data);
        },
        err => {
          console.log(err);
           alert(err._body);
        }
        )
    }



}

