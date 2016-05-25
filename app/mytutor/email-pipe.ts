import {Pipe} from '@angular/core'
import {tuttee} from './timeslot.service'

@Pipe ({
	name:"email"
})

export class EmailPipe {
	transform(array: tuttee[]) {
		var fuck = "";
		for(var i=0;i<array.length;i++) {
			fuck += array[i].email;
			fuck += " ";
		}
		return fuck;
	}
}



