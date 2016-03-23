System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var COURSES;
    return {
        setters:[],
        execute: function() {
            exports_1("COURSES", COURSES = [
                {
                    id: "math135",
                    name: "Math 135",
                    imageURL: "http://placehold.it/500x500",
                    description: "Math's 135's Descriptions",
                    total_tutors: 5,
                    sales: 5
                },
                {
                    id: "math137",
                    name: "Math 137",
                    imageURL: "http://placehold.it/500x500",
                    description: "Math's 137's Descriptions",
                    total_tutors: 3,
                    sales: 9
                },
            ]);
        }
    }
});
//# sourceMappingURL=mock-courses.js.map