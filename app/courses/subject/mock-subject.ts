import {Subject} from './subject.service';

export var SUBJECT: Subject[] = 
[
    {
		id: "math135",
		course_description: "描述Math 135",
		teacher: [

			{
		    id:1,
            name: "老板",
	        teacher_descripition: "很黄很暴力",
            imageURL: "http://placehold.it/500x300",
            sales: "2344",
			avgpr: "998"
		},

        {
        id:2,
	    name: "老小",
        teacher_descripition: "bu黄很暴力",
        imageURL: "http://placehold.it/500x300",
		sales: "234",
		avgpr: "99",
			}
       ]
   },

	{
    
		id: "math137",
		course_description: "描述Math 137",
		teacher: [
		{
            id:3,
		    name: "老大",
		    teacher_descripition: "很傻很天真",
            imageURL: "http://placehold.it/500x300",
			sales: "299",
			avgpr: "888"
		},
		{
            id:4,
		    name: "老2",
		    teacher_descripition: "no傻很天真",
            imageURL: "http://placehold.it/500x300",
			sales: "299",
			avgpr: "888"
		}
		]
	},
];