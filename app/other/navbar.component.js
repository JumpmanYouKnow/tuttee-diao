System.register(['angular2/core', 'angular2/router', 'angular2/common', './login.service', '../services/token.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, core_2, common_1, login_service_1, token_service_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (token_service_1_1) {
                token_service_1 = token_service_1_1;
            }],
        execute: function() {
            // declare var jQuery: JQueryStatic;
            NavbarComponent = (function () {
                // @Output() private chuan = new EventEmitter();
                function NavbarComponent(el, _loginservice, _tokenservice) {
                    this.el = el;
                    this._loginservice = _loginservice;
                    this._tokenservice = _tokenservice;
                    this.loginObj = {
                        "confirmed": true,
                        "expiration": 3600,
                        "id": 3,
                        "is_tutor": true,
                        "token": "eyJpYXQiOjE0NTgyNjI2MTEsImFsZyI6IkhTMjU2IiwiZXhwIjoxNDU4MjYzMjExfQ.eyJpZCI6M30.eJI6Gashsrn2sUeW6PUtuGJFZ_7u6SRBv9AKV6vRQ5Q",
                        "username": "root"
                    };
                    this.logon = false;
                    this.wrong = false;
                }
                NavbarComponent.prototype.tryLogin = function (value) {
                    var _this = this;
                    localStorage.setItem('fuck', 'fuckedhaha');
                    console.log("fuck is " + localStorage.getItem('fuck'));
                    console.log("shit");
                    var signInfo = window.btoa(value.email + ":" + value.password);
                    console.log(signInfo);
                    this._loginservice.postLogin(signInfo)
                        .subscribe(function (data) {
                        _this.username = data.username;
                        _this._tokenservice.setUsername(data.username);
                        if (data.is_tutor) {
                            _this.is_tutor = true;
                            _this._tokenservice.setIs_tutor(true);
                        }
                        else {
                            _this.is_tutor = false;
                            _this._tokenservice.setIs_tutor(false);
                        }
                        _this.logon = true;
                        _this._tokenservice.setToken(data.token);
                        _this._tokenservice.setTokenLife(Date.now() + data.expiration * 1000);
                        console.log(data);
                        console.log(_this.is_tutor);
                        $('#modal1').closeModal();
                    }, function (err) {
                        var error = JSON.parse(err._body).message;
                        console.log(error);
                        if (error == "Unauthorized access") {
                            _this.wrong = true;
                        }
                    });
                };
                // logint () {
                //     console.log("fuck");
                //  //   var signInfo = window.btoa(value.email+":"+value.password);
                // 	// this._loginservice.postLogin(signInfo)
                // 	// .subscribe( data => {
                //  //        console.log(data);
                // 	// //this.loginObj = data;
                //  //      //  this.chuan.emit(this.loginObj);
                // 	// });
                // }
                //  register (value:any) {
                // 	this._loginservice.postLogin(value.email,value.password)
                // 	.subscribe( data => {
                // 		console.log(data);
                // 		this.loginObj = data;
                // 	});
                // }
                NavbarComponent.prototype.ngOnInit = function () {
                    if (this._tokenservice.initLogin()) {
                        this.username = this._tokenservice.getUsername();
                        this.is_tutor = this._tokenservice.getIs_tutor();
                        this.logon = true;
                        console.log(this.username);
                    }
                    ;
                };
                NavbarComponent.prototype.ngAfterViewInit = function () {
                    $(this.el.nativeElement).find(".button-collapse").sideNav();
                    $('.modal-trigger').leanModal();
                    $(".dropdown-button").dropdown();
                };
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        templateUrl: 'app/other/nav.html',
                        styleUrls: ['app/other/nav.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, login_service_1.LoginService, token_service_1.TokenService])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map