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
var timeslot_service_1 = require('../mytuttee/timeslot.service');
var router_1 = require('@angular/router');
var ng2_pagination_1 = require('ng2-pagination');
var UpcomingComponent = (function () {
    function UpcomingComponent(_timeslotservice) {
        this._timeslotservice = _timeslotservice;
    }
    UpcomingComponent.prototype.getTimeSlots = function () {
        var _this = this;
        this._timeslotservice.getTimeslot().subscribe(function (data) {
            // console.log(data.appointments);
            console.log(data);
            var slots = data.appointments;
            console.log(slots);
            for (var i = 0; i < slots.length; i++) {
                slots[i].timeslot.start_time = Date.parse(slots[i].timeslot.start_time);
                slots[i].timeslot.end_time = Date.parse(slots[i].timeslot.end_time);
            }
            _this.Timeslots = slots.filter(function (item) { return item.timeslot.start_time > Date.now(); })
                .sort(function (a, b) { return a.start_time > b.start_time ? -1 : 1; });
            if (_this.Timeslots.length == 0) {
                _this.Timeslots = null;
            }
            console.log(_this.Timeslots);
        }, function (err) { return console.log(err); });
    };
    UpcomingComponent.prototype.cancel = function (id) {
        var _this = this;
        this._timeslotservice.cancel(id).subscribe(function (data) {
            console.log(data);
            _this.getTimeSlots();
            // this.Timeslots = this.Timeslots.filter(obj => return obj.id != id);    
        }, function (err) { return console.log(err); });
    };
    UpcomingComponent.prototype.ngOnInit = function () {
        this.getTimeSlots();
    };
    UpcomingComponent = __decorate([
        core_1.Component({
            selector: 'upcoming',
            templateUrl: './app/mytuttee/upcoming.component.html',
            styleUrls: ['./app/mytuttee/upcoming.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
            pipes: [ng2_pagination_1.PaginatePipe],
            providers: [ng2_pagination_1.PaginationService, timeslot_service_1.TimeslotService],
        }), 
        __metadata('design:paramtypes', [timeslot_service_1.TimeslotService])
    ], UpcomingComponent);
    return UpcomingComponent;
}());
exports.UpcomingComponent = UpcomingComponent;
//# sourceMappingURL=upcoming.component.js.map