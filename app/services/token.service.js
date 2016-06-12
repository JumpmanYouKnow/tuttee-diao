"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import {LocalStorage} from "../@angular-localstorage/LocalStorage";
var http_1 = require('@angular/http');
var TokenService = (function () {
    function TokenService(_http) {
        this._http = _http;
    }
    TokenService.prototype.setToken = function (token) {
        this.token = token;
        localStorage.setItem('token', token);
        //	console.log(localStorage.getItem('token'));
    };
    TokenService.prototype.setUsername = function (username) {
        this.username = username;
        localStorage.setItem('username', username);
        //			console.log(localStorage.getItem('username'));
    };
    TokenService.prototype.setIs_tutor = function (is_tutor) {
        this.is_tutor = is_tutor;
        if (is_tutor) {
            localStorage.setItem('is_tutor', 'true');
        }
        else
            localStorage.setItem('is_tutor', 'false');
        //		console.log(localStorage.getItem('is_tutor'));
    };
    TokenService.prototype.setTokenLife = function (life) {
        this.tokenLife = life;
        localStorage.setItem('tokenLife', life.toString());
        //	console.log(localStorage.getItem('tokenLife'));
    };
    TokenService.prototype.getToken = function () {
        return this.token;
    };
    TokenService.prototype.getUsername = function () {
        return this.username;
    };
    TokenService.prototype.getProfile = function () {
        var token = "Basic " + window.btoa(this.getToken() + ":");
        var headers = new http_1.Headers();
        headers.append('Authorization', token);
        return this._http.get("http://localhost:5000/api/profile", { headers: headers }).map(function (res) { return res.json(); });
    };
    TokenService.prototype.getIs_tutor = function () {
        return this.is_tutor;
    };
    TokenService.prototype.initLogin = function () {
        //	console.log(localStorage.getItem('token'));
        //	console.log(localStorage.getItem('fuck'));
        var tokenLife = parseInt(localStorage.getItem('tokenLife'));
        //	console.log(tokenLife);
        //	console.log(Date.now());
        if (tokenLife) {
            if (Date.now() > tokenLife) {
                console.log("cleared"); //not working
                localStorage.clear();
                return false;
            }
            else {
                this.token = localStorage.getItem('token');
                console.log(this.token);
                this.tokenLife = tokenLife;
                if (localStorage.getItem('is_tutor') == 'true') {
                    this.is_tutor = true;
                }
                else
                    this.is_tutor = false;
                this.username = localStorage.getItem('username');
                return true;
            }
        }
        else
            return false;
    };
    TokenService.prototype.checkExp = function () {
        var _this = this;
        if (Date.now() > this.tokenLife) {
            console.log("expired!");
            var headers = new http_1.Headers();
            headers.append('Authorization', this.token);
            this._http.get('/token', { headers: headers }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.token = data.token;
                _this.tokenLife = (Date.now() + data.expiration);
            }, function (err) { return console.log(err); });
        }
    };
    TokenService.prototype.getTokenLife = function () {
        return this.tokenLife;
    };
    TokenService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TokenService);
    return TokenService;
}());
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map