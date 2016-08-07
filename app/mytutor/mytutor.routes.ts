import {UpcomingComponent} from './upcoming.component';
import {HistoryComponent} from './history.component';
import {SettingComponent} from './setting.component';
import {PostComponent} from './post.component';
import {MytutorComponent} from './mytutor.component'
import {RouterConfig} from '@angular/router';
import {MytutorGuard} from '../services/mytutor-guard.service'

export const mytutorRoutes: RouterConfig = [
  {
    path: 'mytutor',
    component: MytutorComponent,
    children: [
    { path: '', component: UpcomingComponent,canActivate:[MytutorGuard]},
     { path: 'upcoming', component: UpcomingComponent, canActivate:[MytutorGuard]},
		{ path: 'setting', component: SettingComponent ,canActivate:[MytutorGuard]},
		{ path: 'history', component: HistoryComponent ,canActivate:[MytutorGuard]},
		{ path: 'post', component: PostComponent ,canActivate:[MytutorGuard]},
    ]
  }
];

