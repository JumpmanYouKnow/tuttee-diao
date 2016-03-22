System.register(['angular2/core', 'angular2/src/core/zone'], function(exports_1, context_1) {
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
    var core_1, zone_1;
    var LocalStorageEmitter, LocalStorageService;
    function LocalStorageSubscriber(appPromise) {
        appPromise.then(function (bla) {
            bla.injector.resolveAndInstantiate(LocalStorageService);
        });
    }
    exports_1("LocalStorageSubscriber", LocalStorageSubscriber);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zone_1_1) {
                zone_1 = zone_1_1;
            }],
        execute: function() {
            LocalStorageEmitter = (function () {
                function LocalStorageEmitter() {
                }
                LocalStorageEmitter.register = function (ngZone) {
                    var index = LocalStorageEmitter.ngZones.indexOf(ngZone);
                    if (index === -1) {
                        index = LocalStorageEmitter.ngZones.push(ngZone) - 1;
                    }
                    LocalStorageEmitter.subscribed[index] = ngZone.onTurnDone.subscribe(function () {
                        for (var _i = 0, _a = LocalStorageEmitter.subscribers; _i < _a.length; _i++) {
                            var callback = _a[_i];
                            callback();
                        }
                    });
                };
                LocalStorageEmitter.subscribe = function (callback) {
                    LocalStorageEmitter.subscribers.push(callback);
                };
                LocalStorageEmitter.unregister = function (ngZone) {
                    var index = LocalStorageEmitter.ngZones.indexOf(ngZone);
                    if (index >= 0) {
                        LocalStorageEmitter.subscribed[index].unsubscribe();
                    }
                };
                LocalStorageEmitter.subscribed = [];
                LocalStorageEmitter.ngZones = [];
                LocalStorageEmitter.subscribers = [];
                return LocalStorageEmitter;
            }());
            exports_1("LocalStorageEmitter", LocalStorageEmitter);
            LocalStorageService = (function () {
                function LocalStorageService(ngZone) {
                    this.ngZone = ngZone;
                    LocalStorageEmitter.register(this.ngZone);
                }
                LocalStorageService.prototype.ngOnDestroy = function () {
                    LocalStorageEmitter.unregister(this.ngZone);
                };
                LocalStorageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [zone_1.NgZone])
                ], LocalStorageService);
                return LocalStorageService;
            }());
        }
    }
});
//# sourceMappingURL=LocalStorageEmitter.js.map