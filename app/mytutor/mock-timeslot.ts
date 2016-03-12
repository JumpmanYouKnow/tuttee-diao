import {Timeslot} from './timeslot.service'


export var TIMESLOTS:Timeslot[] = 
	[ {
		course: "math135",
		time:new Date(213131432432),
		nowPeople: [
		{
			name:"shabi",
			email:"dd@qq.com",
			wechat:"fuck"
		},
		{
			name:"baichi",
			email:"qq@dd.com",
				wechat:"fuck"
		}
		],
		maxPeople:5,
		duration:1,
		location:"DC",
		tutor_id:3,
		price: 10,
		description:"Final"
	},
	 {
	 	course: "cs135",
	 	time:new Date(232132131432432),
		nowPeople: [
		{
			name:"erbi",
			email:"erbi@qq.com",
				wechat:"fuck"
		},
		{
			name:"imper",
			email:"qq@qq.com",
				wechat:"fuck"
		}
		],
		maxPeople:5,
		duration:1,
		location:"RCH",
		tutor_id:4,
		price: 20,
		description:"a8"
	 }

	]
