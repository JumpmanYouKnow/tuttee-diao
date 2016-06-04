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
var post_service_1 = require('./post.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var PostComponent = (function () {
    function PostComponent(_postservice, _router) {
        this._postservice = _postservice;
        this._router = _router;
        this.modal = {};
    }
    PostComponent.prototype.ngAfterViewInit = function () {
        $('#datetimepicker').datetimepicker();
        $('#datetimepicker').focusout(function () {
            var start_time = $('#datetimepicker').data("DateTimePicker").date();
            console.log(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
            //  var start_time = $('#datetimepicker').datetimepicker('getValue').toISOString();
            $('input[name="start_time"]').val(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
            // console.log($('#datetimepicker').datetimepicker('getValue').toISOString());
        });
    };
    PostComponent.prototype.postSlot = function (value) {
        var _this = this;
        var start_time = moment(document.getElementById('datetimepicker').value);
        var end_time = start_time.valueOf() + this.duration * 60 * 1000;
        this.end_time = moment(end_time).format('YYYY-MM-DD[T]HH:mm:ss.SSSZ');
        this.start_time = document.getElementById('datetimepicker').value;
        console.log(this.start_time);
        //this.end_time = new Date($('#datetimepicker').datetimepicker('getValue').getMilliseconds + this.duration * 1000*60).toISOString();
        var postObj = {
            course_id: this.course_id,
            capacity: this.capacity,
            start_time: this.start_time,
            end_time: this.end_time,
            address: this.address,
            fee: this.fee,
            duration: this.duration
        };
        console.log(postObj);
        this._postservice.postTimeslot(postObj).subscribe(function (data) {
            console.log(data);
            alert("发布成功！");
            _this._router.navigate(['Upcoming']);
        }, function (err) { return alert(JSON.stringify(err._body)); });
        // console.log("this si invoded");
        // console.log(value);
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post',
            templateUrl: './app/mytutor/post.component.html',
            styleUrls: ['./app/mytutor/post.component.css'],
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, router_deprecated_1.Router])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map