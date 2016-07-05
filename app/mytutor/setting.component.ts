import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {TimeslotService, postObj} from './timeslot.service'
import {UploaderService} from './uploader.service';

@Component({
	selector:'setting',
	templateUrl: './app/mytutor/setting.component.html',
	styleUrls: ['./app/mytutor/setting.component.css'],
  providers: [UploaderService]
})

export class SettingComponent {

  grad_year: number;
  phone: number;
  program: string;
  wechat: string;

	URL:string = 'http://localhost:5000/api/profile/photo';
	photoToUpload: File;

  constructor  (private _uploader:UploaderService, private _postservice:TimeslotService){}

	fileChangeEvent(fileInput: any) {
    this.photoToUpload = fileInput.target.files[0];
    console.log(this.photoToUpload);
  }

  upload() {
    this._uploader.upload(this.URL,this.photoToUpload)
    .then(data => alert(data))
    .catch(err => alert(err));
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