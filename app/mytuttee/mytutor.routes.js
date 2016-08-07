"use strict";
var upcoming_component_1 = require('./upcoming.component');
var history_component_1 = require('./history.component');
var setting_component_1 = require('./setting.component');
var post_component_1 = require('./post.component');
var mytutor_component_1 = require('./mytutor.component');
exports.mytutorRoutes = [
    {
        path: 'mytutor',
        component: mytutor_component_1.MytutorComponent,
        children: [
            { path: 'upcoming', component: upcoming_component_1.UpcomingComponent },
            { path: 'setting', component: setting_component_1.SettingComponent },
            { path: 'history', component: history_component_1.HistoryComponent },
            { path: 'post', component: post_component_1.PostComponent },
        ]
    }
];
//# sourceMappingURL=mytutor.routes.js.map