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
var timeslot_service_1 = require('./timeslot.service');
var router_1 = require('@angular/router');
var HistoryComponent = (function () {
    function HistoryComponent(_timeslotservice) {
        this._timeslotservice = _timeslotservice;
    }
    HistoryComponent.prototype.getTimeSlots = function () {
        var _this = this;
        this._timeslotservice.getTimeslot().subscribe(function (data) {
            console.log(data.timeslots);
            var slots = data.timeslots;
            for (var i = 0; i < slots.length; i++) {
                slots[i].start_time = Date.parse(slots[i].start_time);
                slots[i].end_time = Date.parse(slots[i].end_time);
            }
            _this.Timeslots = slots.filter(function (item) { return item.start_time < Date.now(); });
        }, function (err) { return console.log(err); });
        setTimeout(function () {
            return $('.modal-trigger').leanModal();
        }, 500);
    };
    HistoryComponent.prototype.ngOnInit = function () {
        this.getTimeSlots();
    };
    HistoryComponent = __decorate([
        core_1.Component({
            selector: 'history',
            templateUrl: './app/mytutor/history.component.html',
            styleUrls: ['./app/mytutor/history.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [timeslot_service_1.TimeslotService])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map