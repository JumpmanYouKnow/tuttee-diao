import {Component} from '@angular/core';
import {HTTP_PROVIDERS,Http,Headers} from '@angular/http';

@Component({
  selector: 'tutor',
  styleUrls: ['app/betutor/beteacher.css'], 
 	templateUrl: 'app/betutor/beteacher.html',
})


export class BetutorComponent {
	fuck:string = "default";
	constructor(private _http: Http) {}

	test() {
		this._http.get("http://localhost:5000").toPromise().then(data => {
			console.log(data);
			this.fuck = data._body;
		});
		// map(res => res.json()).subscribe(data => this.fuck = JSON.stringify(data));
	}
}