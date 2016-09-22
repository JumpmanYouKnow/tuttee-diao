import {UpcomingComponent} from './upcoming.component';
import {HistoryComponent} from './history.component';
import {SettingComponent} from './setting.component';
import {FavoriteComponent} from './favorite.component';
import {MytutteeComponent} from './mytuttee.component'
import {RouterConfig} from '@angular/router';
import {MytutteeGuard} from '../services/mytuttee-guard.service'
export const mytutteeRoutes: RouterConfig = [
  {
    path: 'mytuttee',
    component: MytutteeComponent,
    children: [
    { path: '', component: UpcomingComponent, canActivate:[MytutteeGuard]},
      	{ path: 'upcoming', component: UpcomingComponent, canActivate:[MytutteeGuard]},
		{ path: 'setting', component: SettingComponent, canActivate:[MytutteeGuard] },
		{ path: 'history', component: HistoryComponent, canActivate:[MytutteeGuard] },
		{ path: 'favorite', component: FavoriteComponent, canActivate:[MytutteeGuard] },
    ]
  }
];

