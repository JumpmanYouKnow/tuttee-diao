System.register(['angular2/core', 'angular2/common', './post.service'], function(exports_1, context_1) {
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
    var core_1, common_1, post_service_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent(_postservice) {
                    this._postservice = _postservice;
                    this.modal = {};
                }
                PostComponent.prototype.ngAfterViewInit = function () {
                    $('#datetimepicker').datetimepicker();
                    // $('#datetimepicker').datetimepicker({ 
                    //     format:'m-d-Y h:m',
                    // 		});
                    // 	setTimeout(function() {
                    // 	   $('select').material_select();
                    // }, 500);
                    // $('#course_id').change (function() {
                    // 	this.course_id = $(this).val();
                    // 	console.log(this.course_id);
                    // });
                    // $('#capacity').change (function() {
                    // 	this.capacity = $(this).val();
                    // 	console.log(this.capacity);
                    // });
                    $('#datetimepicker').focusout(function () {
                        var start_time = $('#datetimepicker').data("DateTimePicker").date();
                        console.log(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
                        //  var start_time = $('#datetimepicker').datetimepicker('getValue').toISOString();
                        $('input[name="start_time"]').val(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
                        // console.log($('#datetimepicker').datetimepicker('getValue').toISOString());
                    });
                };
                PostComponent.prototype.postSlot = function (value) {
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
                    this._postservice.postTimeslot(postObj).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
                    // console.log("this si invoded");
                    // console.log(value);
                };
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'post',
                        templateUrl: './app/mytutor/post.component.html',
                        styleUrls: ['./app/mytutor/post.component.css'],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map