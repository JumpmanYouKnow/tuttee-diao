import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {TokenService} from '../services/token.service'
import 'rxjs/add/operator/share';

@Injectable()
export class UploaderService {

  constructor (private _tokenservice:TokenService){}


public upload (url: string, file: File): Promise<any> {
    var token = "Basic "+window.btoa(this._tokenservice.getToken()+":");

    return new Promise((resolve, reject) => {
        let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();
        
        formData.append("photo", file);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr.response);
                    resolve(JSON.parse(xhr.response));
                } else {
                    console.log (xhr.response);
                    reject(xhr.response);
                }
            }
        };


        xhr.open('PUT', url, false);

        //xhr.setRequestHeader("Content-Type","multipart/form-data");
        xhr.setRequestHeader("Authorization",token);
        //console.log(formData);
        xhr.send(formData);
    });
}
}