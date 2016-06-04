import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import {UpcomingComponent} from './upcoming.component'
import {FavoriteComponent} from './favorite.component'
import {HistoryComponent} from './history.component'
import {SettingComponent} from './setting.component'
import {TokenService} from '../services/token.service'




@Component ({
	selector: 'mytuttee',
	templateUrl: './app/mytuttee/mytuttee.component.html',
	styleUrls: ['./app/mytuttee/mytuttee.component.css'],
	directives: [ROUTER_DIRECTIVES]


})


@RouteConfig([
	{ path: '/upcoming', name: 'Upcoming', component: UpcomingComponent, useAsDefault: true },
	{ path: '/favorite', name: 'Favorite', component: FavoriteComponent },
	{ path: '/setting', name: 'Setting', component: SettingComponent },
	{ path: '/history', name: 'History', component: HistoryComponent },


])

export class MytutteeComponent {
	public username: string;


	constructor( private _tokenservice: TokenService
	) { }

	ngOnInit() {
		this.username = this._tokenservice.getUsername();
		console.log(this.username)
	}

}