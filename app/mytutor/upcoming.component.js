System.register(['angular2/core', './timeslot.service'], function(exports_1, context_1) {
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
    var core_1, timeslot_service_1;
    var UpcomingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timeslot_service_1_1) {
                timeslot_service_1 = timeslot_service_1_1;
            }],
        execute: function() {
            UpcomingComponent = (function () {
                function UpcomingComponent(_timeslotservice) {
                    this._timeslotservice = _timeslotservice;
                }
                UpcomingComponent.prototype.getTimeSlots = function () {
                    var _this = this;
                    this._timeslotservice.getTimeslot().then(function (timeslot) {
                        console.log(timeslot);
                        _this.Timeslots = timeslot;
                        setTimeout(function () {
                            $('.tooltip').tooltipster();
                        }, 500);
                    });
                };
                UpcomingComponent.prototype.ngOnInit = function () {
                    this.getTimeSlots();
                };
                UpcomingComponent.prototype.ngAfterViewInit = function () {
                };
                UpcomingComponent = __decorate([
                    core_1.Component({
                        selector: 'upcoming',
                        templateUrl: './app/mytutor/upcoming.component.html',
                        styleUrls: ['./app/mytutor/upcoming.component.css']
                    }), 
                    __metadata('design:paramtypes', [timeslot_service_1.TimeslotService])
                ], UpcomingComponent);
                return UpcomingComponent;
            }());
            exports_1("UpcomingComponent", UpcomingComponent);
        }
    }
});
//# sourceMappingURL=upcoming.component.js.map