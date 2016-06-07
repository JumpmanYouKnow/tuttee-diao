import {Component, AfterViewInit, ElementRef,OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CoursesService,Course} from '../courses/courses.service';

// declare var jQuery: JQueryStatic;


@Component({
  selector: 'home',  // <home></home>
  pipes: [ ],
  styleUrls: ['app/home/home.css'], 
  templateUrl: 'app/home/home.html',
   directives:[ROUTER_DIRECTIVES]
})
export class HomeComponent {
  // Set our default values
  data = { value: '' };
  courseList:any = [];
  // TypeScript public modifiers

  constructor (private _coursesservice: CoursesService) {}


  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }



  ngAfterViewInit() {
  //   $('nav').addClass("trans");
  //   var sectionsPos = $("#main").offset().top;
  //   $(window).scroll(function() {
  //   var currPos = $(window).scrollTop();
  //   if (sectionsPos < currPos) {
       
  //       $('nav').removeClass("trans");
  // }
  //     else $('nav').addClass("trans");
  //   });

    console.log("getting!");

    this.getCoursesList();



    var fds = [{course:'math135'},{course:'psych101'},{course:'che102'}];

   

}

  search() {
        $(".tt-suggestion:first-child").trigger('click');
  }


  getCoursesList () {
    this._coursesservice.getCourses().subscribe(data => {
    var listLength = data.courses.length;
    for(var i=0;i<listLength;i++) {
      this.courseList.push({course:data.courses[i].id})
    }
    console.log(this.courseList);

      var courses = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('course'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // `states` is an array of state names defined in "The Basics"
      local: this.courseList
    });

      $('.typeahead').typeahead({
        autoselect: true,
        hint: true,  
        highlight: true,  
        minLength: 1  
      },
      {
        name: 'courses',
        source: courses,
        //course in each object in courses
        display:'course',
        templates: {
        empty: [
        '<div style="color:black" class="empty-message">',
          'unable to find any courses that match the current query',
        '</div>'
        ].join('\n'),
        suggestion: Handlebars
        .compile('<div><a style="color:black;text-transform: uppercase;" href="/#/subject/{{course}}"><strong>{{course}}</strong></a></div>')
    
      }
      });


      $(".tt-menu").css({  width: "520px",
        margin: "12px 0",
        padding: "8px 0",
       "background-color":" #fff",
        "border": "1px solid rgba(0, 0, 0, 0.2)",
        "-webkit-border-radius": "8px",
          " -moz-border-radius": "8px",
               "border-radius": "8px",
        "-webkit-box-shadow":" 0 5px 10px rgba(0,0,0,.2)",
           "-moz-box-shadow":" 0 5px 10px rgba(0,0,0,.2)",
              "box-shadow": "0 5px 10px rgba(0,0,0,.2)"});

      // $(".tt-suggestion").css({
      //   "color":"black",
      //   "padding": "3px 20px",
      //  "font-size": "18px",
      //   "line-height": "24px"
      // });
      $(".ttsuggestion.tt-cursor").css({
      color: "#fff",
      "background-color": "#0097cf"
      })

      $('#searchInput').bind('typeahead:selected', function(obj, datum, name) { 
        console.log(datum);
        window.location.href = "./#/subject/"+datum.course;
});

        $('#searchInput').bind('typeahead:autocompleted', function(obj,datum,name) { 
          console.log(datum);
          window.location.href = "./#/subject/"+datum.course;
});



        },err => console.log(err)
      );





  }
  

  ngOnDestroy() {
    $(window).unbind("scroll");
    $('nav').removeClass("trans");
   }

  // ngAfterViewInit() {
  //   jQuery(window).scroll(function() {
  //     sectionsPos = jQuery("#main").offset().top;
  //     currPos = $(window).scrollTop();
  //     if (sectionsPos < currPos) jQuery('nav').addClass("down");
  //     else jQuery('nav').removeClass("down");
  //   });
  // }

}
