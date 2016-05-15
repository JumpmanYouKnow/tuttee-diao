import {Pipe}  from 'angular2/core';

@Pipe({
	name:"search"
})
export class SearchPipe{
	transform(value:any,[cat]){
		  if (!value) {
	     	 return null;
	    }
	    else {
	    	console.log(value);
	    	if (cat == "art") {
	    		var artsList = ["econ","afm"];
	    		var courses:string[] = [];
	    		for (var i=0;i<artsList.length;i++) {
	    			courses = courses.concat(value.filter((item:any)=>item.id.startsWith(artsList[i])));
	    		}
	    		return courses;
	    	}
	    	else if (cat == "science") {
	    		var sciList = ["chem","biol","che"];
	    		var courses:string[] = [];
	    		for (var i=0;i<sciList.length;i++) {
	    			courses = courses.concat(value.filter((item:any)=>item.id.startsWith(sciList[i])));
	    		}
	    		return courses;

	    	}

	    else return value.filter((item:any)=>item.id.startsWith(cat));
	    }

	
	}
}