import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import {TokenService} from './token.service'

@Injectable()
export class MytutorGuard implements CanActivate {
  constructor(private _tokenservice:TokenService
  	,private router:Router){}
  canActivate() {
    if (this._tokenservice.initLogin() && this._tokenservice.getIs_tutor()){
    	console.log ("TURURUURR");
    	return true;
    }
    
    else {
    	console.log ("NONONONONO");
    	this.router.navigate(['']);
    	return false;
  }
}
}