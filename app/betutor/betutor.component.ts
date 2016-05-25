import {Component} from '@angular/core';
import {HTTP_PROVIDERS,Http,Headers} from '@angular/http';

@Component({
  selector: 'tutor',
  styleUrls: ['app/betutor/beteacher.css'], 
 	templateUrl: 'app/betutor/beteacher.html',
})


export class BetutorComponent {
	Python:string = "Python";
	Node:string = "Node";

	constructor(private _http: Http) {}

	test() {
		this._http.get("http://localhost:5000").toPromise().then(data => {
			console.log(data);
			this.Python = data._body;
		})};

	testA(){
		this._http.get("http://localhost:5500/shit").toPromise().then(data => {
			console.log(data);
			this.Node = data._body;
		// map(res => res.json()).subscribe(data => this.fuck = JSON.stringify(data));
	})
	}
}