"use strict";
var upcoming_component_1 = require('./upcoming.component');
var history_component_1 = require('./history.component');
var setting_component_1 = require('./setting.component');
var post_component_1 = require('./post.component');
var mytutor_component_1 = require('./mytutor.component');
var mytutor_guard_service_1 = require('../services/mytutor-guard.service');
exports.mytutorRoutes = [
    {
        path: 'mytutor',
        component: mytutor_component_1.MytutorComponent,
        children: [
            { path: '', component: upcoming_component_1.UpcomingComponent, canActivate: [mytutor_guard_service_1.MytutorGuard] },
            { path: 'upcoming', component: upcoming_component_1.UpcomingComponent, canActivate: [mytutor_guard_service_1.MytutorGuard] },
            { path: 'setting', component: setting_component_1.SettingComponent, canActivate: [mytutor_guard_service_1.MytutorGuard] },
            { path: 'history', component: history_component_1.HistoryComponent, canActivate: [mytutor_guard_service_1.MytutorGuard] },
            { path: 'post', component: post_component_1.PostComponent, canActivate: [mytutor_guard_service_1.MytutorGuard] },
        ]
    }
];
//# sourceMappingURL=mytutor.routes.js.map