System.register(['angular2/core', 'angular2/router', '../other/navbar.component', '../other/footer.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, footer_component_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            // declare var jQuery: JQueryStatic;
            Home = (function () {
                function Home() {
                    // Set our default values
                    this.data = { value: '' };
                }
                // TypeScript public modifiers
                Home.prototype.ngOnInit = function () {
                    console.log('hello `Home` component');
                    // this.title.getData().subscribe(data => this.data = data);
                };
                Home.prototype.ngAfterViewInit = function () {
                    $('nav').addClass("trans");
                    var sectionsPos = $("#main").offset().top;
                    $(window).scroll(function () {
                        var currPos = $(window).scrollTop();
                        if (sectionsPos < currPos) {
                            $('nav').addClass("down");
                            $('nav').removeClass("trans");
                        }
                        else
                            $('nav').addClass("trans");
                    });
                };
                Home.prototype.ngOnDestroy = function () {
                    $(window).unbind("scroll");
                };
                Home = __decorate([
                    core_1.Component({
                        // The selector is what angular internally uses
                        // for `document.querySelectorAll(selector)` in our index.html
                        // where, in this case, selector is the string 'app'
                        selector: 'home',
                        // We need to tell Angular's Dependency Injection which providers are in our app.
                        // We need to tell Angular's compiler which directives are in our template.
                        // Doing so will allow Angular to attach our behavior to an element
                        directives: [
                            navbar_component_1.NavbarComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES
                        ],
                        // We need to tell Angular's compiler which custom pipes are in our template.
                        pipes: [],
                        // Our list of styles in our component. We may add more to compose many styles together
                        styleUrls: ['app/home/home.css'],
                        // Every Angular template is first compiled by the browser before Angular runs it's compiler
                        templateUrl: 'app/home/home.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map