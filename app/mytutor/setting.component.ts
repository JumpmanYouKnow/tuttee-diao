import {Component} from '@angular/core';
import { Control, ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
@Component({
	selector:'setting',
	templateUrl: './app/mytutor/setting.component.html',
	styleUrls: ['./app/mytutor/setting.component.css']
})

export class SettingComponent {
	grad_year: number;
	phone: number;
	program: string;
	wechat: string;
	public modal: Object = {};

	PostProfile(){
		let postObj: postObj =
			{
				grad_year: this.grad_year,
				phone: this.phone,
				program: this.program,
				wechat: this.wechat,

			}
		console.log(postObj);	

      	}

}