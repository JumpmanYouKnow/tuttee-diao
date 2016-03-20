import {Injectable} from 'angular2/core';


@Injectable()

export class TokenService {
	
	private token:string;
	private tokenLife: number;

	public setToken(token:string)  {
		this.token = token;
	}

	public setTokenLife (life:number) {
		this.tokenLife = life;
	}

	public getToken() {
		return this.token;
	}



	public getTokenLife() {
		return this.tokenLife;
	}
}