"use strict";
var upcoming_component_1 = require('./upcoming.component');
var history_component_1 = require('./history.component');
var setting_component_1 = require('./setting.component');
var favorite_component_1 = require('./favorite.component');
var mytuttee_component_1 = require('./mytuttee.component');
var mytuttee_guard_service_1 = require('../services/mytuttee-guard.service');
exports.mytutteeRoutes = [
    {
        path: 'mytuttee',
        component: mytuttee_component_1.MytutteeComponent,
        children: [
            { path: '', component: upcoming_component_1.UpcomingComponent, canActivate: [mytuttee_guard_service_1.MytutteeGuard] },
            { path: 'upcoming', component: upcoming_component_1.UpcomingComponent, canActivate: [mytuttee_guard_service_1.MytutteeGuard] },
            { path: 'setting', component: setting_component_1.SettingComponent, canActivate: [mytuttee_guard_service_1.MytutteeGuard] },
            { path: 'history', component: history_component_1.HistoryComponent, canActivate: [mytuttee_guard_service_1.MytutteeGuard] },
            { path: 'favorite', component: favorite_component_1.FavoriteComponent, canActivate: [mytuttee_guard_service_1.MytutteeGuard] },
        ]
    }
];
//# sourceMappingURL=mytuttee.routes.js.map