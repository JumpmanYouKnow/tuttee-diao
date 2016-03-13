System.register(['angular2/core', 'angular2/router', './tutorclass.service'], function(exports_1, context_1) {
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
    var core_1, router_1, tutorclass_service_1;
    var TutorclassComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tutorclass_service_1_1) {
                tutorclass_service_1 = tutorclass_service_1_1;
            }],
        execute: function() {
            TutorclassComponent = (function () {
                function TutorclassComponent(_routeParams, _tutorclassService) {
                    this._routeParams = _routeParams;
                    this._tutorclassService = _tutorclassService;
                }
                TutorclassComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var subject = this._routeParams.get('subject');
                    var id = this._routeParams.get('id');
                    this._tutorclassService.getTimeslot(id).then(function (hero) {
                        _this.Tutorclass = hero;
                        console.log(_this.Tutorclass);
                    });
                };
                ;
                TutorclassComponent = __decorate([
                    core_1.Component({
                        selector: 'tutorclass',
                        styleUrls: ['app/courses/subject/tutorclass/tutorclass.component.css'],
                        // template: `
                        // <p *ngFor = "#timeslot of Tutorclass">{{timeslot.id}}</p>
                        // `
                        templateUrl: 'app/courses/subject/tutorclass/tutorclass.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, tutorclass_service_1.TutorclassService])
                ], TutorclassComponent);
                return TutorclassComponent;
            }());
            exports_1("TutorclassComponent", TutorclassComponent);
        }
    }
});
//# sourceMappingURL=tutorclass.component.js.map