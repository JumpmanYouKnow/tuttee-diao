System.register(['angular2/router', 'angular2/src/facade/lang', 'angular2/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var router_1, lang_1, core_1, router_2;
    var RouterActive;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * RouterActive dynamically finds the first element with routerLink and toggles the active class
             *
             * ## Use
             *
             * ```
             * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
             * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
             * ```
             */
            RouterActive = (function () {
                function RouterActive(router, element, renderer, routerLink, routerActiveAttr) {
                    this.router = router;
                    this.element = element;
                    this.renderer = renderer;
                    this.routerLink = routerLink;
                    this.routerActive = null;
                    this.routerActiveAttr = 'active';
                    this.routerActiveAttr = this._defaultAttrValue(routerActiveAttr);
                }
                RouterActive.prototype.ngOnInit = function () {
                    var _this = this;
                    this.routerLink.changes.subscribe(function () {
                        if (_this.routerLink.first) {
                            _this._updateClass();
                            _this._findRootRouter().subscribe(function () {
                                _this._updateClass();
                            });
                        }
                    });
                };
                RouterActive.prototype._findRootRouter = function () {
                    var router = this.router;
                    while (lang_1.isPresent(router.parent)) {
                        router = router.parent;
                    }
                    return router;
                };
                RouterActive.prototype._updateClass = function () {
                    var active = this.routerLink.first.isRouteActive;
                    this.renderer.setElementClass(this.element.nativeElement, this._attrOrProp(), active);
                };
                RouterActive.prototype._defaultAttrValue = function (attr) {
                    return this.routerActiveAttr = attr || this.routerActiveAttr;
                };
                RouterActive.prototype._attrOrProp = function () {
                    return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
                };
                RouterActive = __decorate([
                    core_1.Directive({
                        selector: '[router-active], [routerActive]',
                        inputs: ['routerActive']
                    }),
                    __param(3, core_1.Query(router_2.RouterLink)),
                    __param(4, core_1.Optional()),
                    __param(4, core_1.Attribute('router-active')), 
                    __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object, (typeof (_c = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _c) || Object, String])
                ], RouterActive);
                return RouterActive;
                var _a, _b, _c;
            }());
            exports_1("RouterActive", RouterActive);
        }
    }
});
//# sourceMappingURL=router-active.js.map