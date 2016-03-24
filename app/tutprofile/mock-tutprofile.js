System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var REVIEWS, COURESES, TIMESLOTS, TUTPROFILES;
    return {
        setters:[],
        execute: function() {
            //  var comment1 = { course: "math135", 
            //                   faculty: "math1A", 
            //                   time: new Date(43214321412), 
            //                   content: "fuckthisshit" };
            //  var comment2 = { course: "math136", 
            //                   faculty: "SE1B", 
            //                   time: new Date(21324324), 
            //                   content: "你是傻逼" };
            // export var TUTPROFILES: TutProfile[] = [
            // 	{ id: 1, name: "老板",
            // 	 description: "我是老板，老板很帅", 
            // 	 comments: [comment2,comment1],  
            // 	 courses: ["math135", "math136"] },
            // 	{ id: 2, 
            // 	  name: "傻逼", 
            // 	  description: "我是傻逼，傻逼很傻", 
            // 	  comments: [comment2,comment1],  
            // 	  courses: ["cs 135", "cs 138"] }
            // ];  
            REVIEWS = [
                {
                    id: 1,
                    rating: 4.999,
                    text: "用了都说好",
                    timestamp: new Date(12),
                },
                {
                    id: 2,
                    rating: 0.67,
                    text: "大家都说好",
                    timestamp: new Date(124324),
                }];
            COURESES = [
                {
                    id: "math137",
                    name: "math",
                    "number": 137,
                    reviews: REVIEWS,
                }];
            TIMESLOTS = [
                {
                    address: "铁岭",
                    capacity: 20,
                    course: "math137",
                    course_id: 1,
                    current_apps: 13,
                    end_time: new Date(125424),
                    fee: 34.4,
                    id: 2,
                    start_time: new Date(5424),
                    timestamp: new Date(5677)
                }];
            exports_1("TUTPROFILES", TUTPROFILES = [
                {
                    courses: COURESES,
                    favourite: true,
                    id: 1,
                    overall_rating: 4.56,
                    timeslots: TIMESLOTS,
                    username: "老大大",
                }]);
        }
    }
});
//# sourceMappingURL=mock-tutprofile.js.map