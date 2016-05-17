System.register(['angular2/core', 'angular2/router', '../courses/courses.service'], function(exports_1, context_1) {
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
    var core_1, router_1, courses_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }],
        execute: function() {
            // declare var jQuery: JQueryStatic;
            HomeComponent = (function () {
                // TypeScript public modifiers
                function HomeComponent(_coursesservice) {
                    this._coursesservice = _coursesservice;
                    // Set our default values
                    this.data = { value: '' };
                    this.courseList = [];
                }
                HomeComponent.prototype.ngOnInit = function () {
                    console.log('hello `Home` component');
                    // this.title.getData().subscribe(data => this.data = data);
                };
                HomeComponent.prototype.ngAfterViewInit = function () {
                    $('nav').addClass("trans");
                    var sectionsPos = $("#main").offset().top;
                    $(window).scroll(function () {
                        var currPos = $(window).scrollTop();
                        if (sectionsPos < currPos) {
                            $('nav').removeClass("trans");
                        }
                        else
                            $('nav').addClass("trans");
                    });
                    this.getCoursesList();
                    var fds = [{ course: 'math135' }, { course: 'psych101' }, { course: 'che102' }];
                };
                HomeComponent.prototype.search = function () {
                    $(".tt-suggestion:first-child").trigger('click');
                };
                HomeComponent.prototype.getCoursesList = function () {
                    var _this = this;
                    this._coursesservice.getCourses().subscribe(function (data) {
                        var listLength = data.courses.length;
                        for (var i = 0; i < listLength; i++) {
                            _this.courseList.push({ course: data.courses[i].id });
                        }
                        console.log(_this.courseList);
                        var courses = new Bloodhound({
                            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('course'),
                            queryTokenizer: Bloodhound.tokenizers.whitespace,
                            // `states` is an array of state names defined in "The Basics"
                            local: _this.courseList
                        });
                        $('.typeahead').typeahead({
                            autoselect: true,
                            hint: true,
                            highlight: true,
                            minLength: 1
                        }, {
                            name: 'courses',
                            source: courses,
                            //course in each object in courses
                            display: 'course',
                            templates: {
                                empty: [
                                    '<div style="color:black" class="empty-message">',
                                    'unable to find any courses that match the current query',
                                    '</div>'
                                ].join('\n'),
                                suggestion: Handlebars.compile('<div><a style="color:red" href="/#/subject/{{course}}"><strong>{{course}}</strong></a></div>')
                            }
                        });
                        $(".tt-menu").css({ width: "422px",
                            margin: "12px 0",
                            padding: "8px 0",
                            "background-color": " #fff",
                            "border": "1px solid rgba(0, 0, 0, 0.2)",
                            "-webkit-border-radius": "8px",
                            " -moz-border-radius": "8px",
                            "border-radius": "8px",
                            "-webkit-box-shadow": " 0 5px 10px rgba(0,0,0,.2)",
                            "-moz-box-shadow": " 0 5px 10px rgba(0,0,0,.2)",
                            "box-shadow": "0 5px 10px rgba(0,0,0,.2)" });
                        // $(".tt-suggestion").css({
                        //   "color":"black",
                        //   "padding": "3px 20px",
                        //  "font-size": "18px",
                        //   "line-height": "24px"
                        // });
                        $(".ttsuggestion.tt-cursor").css({
                            color: "#fff",
                            "background-color": "#0097cf"
                        });
                        $('#searchInput').bind('typeahead:selected', function (obj, datum, name) {
                            console.log(datum);
                            window.location.href = "./#/subject/" + datum.course;
                        });
                        $('#searchInput').bind('typeahead:autocompleted', function (obj, datum, name) {
                            console.log(datum);
                            window.location.href = "./#/subject/" + datum.course;
                        });
                    }, function (err) { return console.log(err); });
                };
                HomeComponent.prototype.ngOnDestroy = function () {
                    $(window).unbind("scroll");
                    $('nav').removeClass("trans");
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        pipes: [],
                        styleUrls: ['app/home/home.css'],
                        templateUrl: 'app/home/home.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CoursesService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map