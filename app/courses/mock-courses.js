System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var COURSES;
    return {
        setters:[],
        execute: function() {
            exports_1("COURSES", COURSES = [
                {
                    "id": 1,
                    "name": "Math 135",
                    imageURL: "http://placehold.it/500x300",
                    description: "Math's 135's Descriptions",
                    numTutor: 5,
                    sales: 5
                },
                {
                    "id": 2,
                    "name": "Math 137",
                    imageURL: "http://placehold.it/500x300",
                    description: "Math's 137's Descriptions",
                    numTutor: 3888,
                    sales: 9999
                },
            ]);
        }
    }
});
//# sourceMappingURL=mock-courses.js.map