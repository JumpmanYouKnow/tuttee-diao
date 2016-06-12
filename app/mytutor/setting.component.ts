import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {UploaderService} from './uploader.service';


@Component({
	selector:'setting',
	templateUrl: './app/mytutor/setting.component.html',
	styleUrls: ['./app/mytutor/setting.component.css'],
  providers: [UploaderService]
})

export class SettingComponent {
	URL:string = 'http://localhost:5000/api/profile/photo';
	photoToUpload: File;

  constructor  (private _uploader:UploaderService){}

	fileChangeEvent(fileInput: any) {
    this.photoToUpload = fileInput.target.files[0];
    console.log(this.photoToUpload);
  }

  upload() {
    this._uploader.upload(this.URL,this.photoToUpload)
    .then(data => alert(data))
    .catch(err => alert(err));
  }




}