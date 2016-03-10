import {TutProfile,Comment} from './tutprofile.service'


var comment1 = { course: "math135", faculty: "math1A", time: new Date(43214321412), content: "fuckthisshit" };
var comment2 = { course: "math136", faculty: "SE1B", time: new Date(21324324), content: "你是傻逼" };

export var TUTPROFILES: TutProfile[] = [
	{ id: 1, name: "老板", description: "我是老板，老板很帅", comments: [comment1,comment2], courses: ["math135", "math136"] },
	{ id: 2, name: "傻逼", description: "我是傻逼，傻逼很傻", comments: [comment2,comment1], courses: ["cs 135", "cs 138"] }

];  