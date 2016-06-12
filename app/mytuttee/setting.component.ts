import {Component} from '@angular/core';
import { Control, ControlGroup, FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
import {TimeslotService, postObj} from './timeslot.service'
import {Router} from '@angular/router-deprecated'

@Component({
	selector: 'setting',
	templateUrl: './app/mytuttee/setting.component.html',
	styleUrls: ['./app/mytuttee/setting.component.css'],
       providers: [TimeslotService]
})

export class SettingComponent {
	grad_year: number;
	phone: number;
	program: string;
	wechat: string;
	public modal: Object = {};

  constructor(private _postservice: TimeslotService
       ) {
	}

	PostProfile() {
		let postObj: postObj =
			{
				grad_year: this.grad_year,
				phone: this.phone,
				program: this.program,
				wechat: this.wechat,

			}
		console.log(postObj);
    this._postservice.PutProfile(postObj).subscribe(data => {
      console.log(data);
      alert("发布成功！");
    },
      err => alert(JSON.stringify(err._body)));

    }
	}

