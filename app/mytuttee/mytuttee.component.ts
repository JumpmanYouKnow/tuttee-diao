import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import {UpcomingComponent} from './upcoming.component'
import {FavoriteComponent} from './favorite.component'
import {HistoryComponent} from './history.component'
import {SettingComponent} from './setting.component'




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



}