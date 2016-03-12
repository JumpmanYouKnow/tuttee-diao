import {Component, OnInit} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import {UpcomingComponent} from './upcoming.component'
import {HistoryComponent} from './history.component'
import {SettingComponent} from './setting.component'
import {PostComponent} from './post.component'
import {TimeslotService,Timeslot} from './timeslot.service'




@Component ({
	selector: 'mytutor',
	templateUrl: './app/mytutor/mytutor.component.html',
	styleUrls: ['./app/mytutor/mytutor.component.css'],
	directives: [ROUTER_DIRECTIVES]
})


@RouteConfig([
	{ path: '/upcoming', name: 'Upcoming', component: UpcomingComponent, useAsDefault: true },
	{ path: '/setting', name: 'Setting', component: SettingComponent },
	{ path: '/history', name: 'History', component: HistoryComponent },
	{ path: '/post', name: 'Post', component: PostComponent },


])

export class MytutorComponent {




}