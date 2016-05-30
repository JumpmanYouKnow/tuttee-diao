import {Injectable} from '@angular/core';
// import {LocalStorage} from "../@angular-localstorage/LocalStorage";
import {HTTP_PROVIDERS,Http,Headers} from '@angular/http';

@Injectable()
export class TokenService {
	
	private token:string;
	private username:string;
	private is_tutor:boolean;
	private tokenLife:number;


	constructor (private _http:Http) {}

	public setToken(token:string)  {
		this.token = token;
		localStorage.setItem('token',token);
	//	console.log(localStorage.getItem('token'));
	}

		public setUsername(username:string)  {
		this.username = username;
		localStorage.setItem('username',username);
	//			console.log(localStorage.getItem('username'));
	}

	public setIs_tutor(is_tutor:boolean)  {
		this.is_tutor = is_tutor;
		if(is_tutor) {
			localStorage.setItem('is_tutor','true');
		}
		else localStorage.setItem('is_tutor','false');
	//		console.log(localStorage.getItem('is_tutor'));
	}

	public setTokenLife (life:number) {
		this.tokenLife = life;
		localStorage.setItem('tokenLife',life.toString())
	//	console.log(localStorage.getItem('tokenLife'));
	}

	public getToken() {
		return this.token;
	}

	public getUsername() {
		return this.username;
	}

	public getIs_tutor() {
		return this.is_tutor;
	}





	public initLogin() {
	//	console.log(localStorage.getItem('token'));

	//	console.log(localStorage.getItem('fuck'));

		var tokenLife = parseInt(localStorage.getItem('tokenLife'));
	//	console.log(tokenLife);
	//	console.log(Date.now());
		if(tokenLife) {
		if (Date.now() > tokenLife) {
			console.log("cleared"); //not working
			localStorage.clear();

			return false;
		}
	
		else {
			this.token = localStorage.getItem('token');
			console.log(this.token);
			this.tokenLife = tokenLife;

			if(localStorage.getItem('is_tutor') == 'true') {
                this.is_tutor = true;
            }
            else this.is_tutor = false;

            this.username = localStorage.getItem('username');
            
			return true;
		  }
		}
		else return false;
	
	}

	public checkExp() {

		if (Date.now() > this.tokenLife) {
			console.log("expired!");
			var headers = new Headers();
			headers.append('Authorization',this.token);

			this._http.get('/token',{headers:headers}).map(res=>res.json())
			.subscribe( data => 
				{this.token = data.token;
				 this.tokenLife=(Date.now()+data.expiration);
				},
				err => console.log(err)
				);
		}

	}



	public getTokenLife() {
		return this.tokenLife;
	}
}