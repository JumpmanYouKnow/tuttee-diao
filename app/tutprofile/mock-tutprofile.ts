import {TutProfile,Comment} from './tutprofile.service'


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


var REVIEWS:Reviews[] =
[
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
}]

var COURESES: Courses[] =
[
{
	id: "math137",
	name: "math",
	"number": 137,
	reviews: REVIEWS,
},
{
	id: "math135",
	name: "math",
	"number": 135,
	reviews: REVIEWS,
},
{
	id: "math145",
	name: "math",
	"number": 145,
	reviews: REVIEWS,
}]

var TIMESLOTS :Timeslots[]= [
{
  address: "dajiba",
  capacity: 20,
  course: "math137",
  course_id: 1,
  current_apps: 13,
  end_time: new Date(125424),
  fee: 34.4,
  id: 2,
  start_time: new Date(5424),
  timestamp: new Date(5677)
}]

export var  TUTPROFILES :TutProfile[]=[
{
	courses: COURESES,
	favourite: true,
	id: 1,
	overall_rating: 4.56,
	timeslots: TIMESLOTS,
	username: "老大大",
}]