System.register(['angular2/core', './timeslot.service', 'angular2/common', 'angular2/router', './post.service'], function(exports_1, context_1) {
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
    var core_1, timeslot_service_1, common_1, router_1, post_service_1;
    var UpcomingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timeslot_service_1_1) {
                timeslot_service_1 = timeslot_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            UpcomingComponent = (function () {
                function UpcomingComponent(_timeslotservice, _postservice) {
                    this._timeslotservice = _timeslotservice;
                    this._postservice = _postservice;
                    this.modSlot = false;
                }
                UpcomingComponent.prototype.getTimeSlots = function () {
                    // console.log("fuck");
                    var _this = this;
                    this._timeslotservice.getTimeslot().subscribe(function (data) {
                        console.log(data.timeslots);
                        var slots = data.timeslots;
                        for (var i = 0; i < slots.length; i++) {
                            slots[i].start_time = Date.parse(slots[i].start_time);
                            slots[i].end_time = Date.parse(slots[i].end_time);
                        }
                        _this.Timeslots = slots.filter(function (item) { return item.start_time > Date.now(); });
                    }, function (err) { return console.log(err); });
                    // this._timeslotservice.getTimeslot().then(timeslot => {
                    // 	console.log(timeslot);
                    // 	this.Timeslots = timeslot;
                    setTimeout(function () {
                        // $('.tooltip').tooltipster();
                        $('.modal-trigger').leanModal();
                    }, 500);
                };
                UpcomingComponent.prototype.ngOnInit = function () {
                    this.getTimeSlots();
                };
                UpcomingComponent.prototype.closeModify = function () {
                    this.modSlot = false;
                };
                UpcomingComponent.prototype.modifyOpen = function (timeslot) {
                    console.log('fuck');
                    this.modSlot = jQuery.extend({}, timeslot);
                    console.log(this.modSlot);
                    this.modSlot.duration = moment(this.modSlot.end_time - this.modSlot.start_time) / 1000 / 60;
                    var self = this;
                    setTimeout(function () {
                        console.log(self.modSlot.start_time);
                        $('#datetimepicker').datetimepicker();
                        self.modSlot.start_time = moment(self.modSlot.start_time).format('YYYY-MM-DD[T]HH:mm:ss.SSSZ');
                        $('#datetimepicker').focusout(function () {
                            var start_time = $('#datetimepicker').data("DateTimePicker").date();
                            console.log(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
                            $('input[name="start_time"]').val(start_time.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'));
                        });
                    }, 100);
                };
                UpcomingComponent.prototype.modify = function () {
                    var _this = this;
                    console.log(this.modSlot);
                    var start_time = moment(document.getElementById('datetimepicker').value);
                    var end_time = start_time.valueOf() + this.modSlot.duration * 60 * 1000;
                    this.modSlot.end_time = moment(end_time).format('YYYY-MM-DD[T]HH:mm:ss.SSSZ');
                    this.modSlot.start_time = document.getElementById('datetimepicker').value;
                    this._postservice.modifyTimeslot(this.modSlot).subscribe(function (data) {
                        console.log(data);
                        _this.closeModify();
                        _this.getTimeSlots();
                    }, function (err) { return console.log(err); });
                };
                UpcomingComponent.prototype.deleteSlot = function (id) {
                    var _this = this;
                    this._postservice.deleteSlot(id).subscribe(function (data) {
                        console.log(data);
                        _this.closeModify();
                        _this.Timeslots = _this.Timeslots.filter(function (obj) { return obj.id != id; }); //O(n)
                    }, function (err) { return console.log(err); });
                };
                UpcomingComponent.prototype.ngAfterViewInit = function () {
                };
                UpcomingComponent = __decorate([
                    core_1.Component({
                        selector: 'upcoming',
                        templateUrl: './app/mytutor/upcoming.component.html',
                        styleUrls: ['./app/mytutor/upcoming.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [timeslot_service_1.TimeslotService, post_service_1.PostService])
                ], UpcomingComponent);
                return UpcomingComponent;
            }());
            exports_1("UpcomingComponent", UpcomingComponent);
        }
    }
});
//# sourceMappingURL=upcoming.component.js.map