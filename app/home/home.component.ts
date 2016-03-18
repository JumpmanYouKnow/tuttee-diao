import {Component, AfterViewInit, ElementRef,OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


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
  // TypeScript public modifiers


  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }



  ngAfterViewInit() {
    $('nav').addClass("trans");
    var sectionsPos = $("#main").offset().top;
    $(window).scroll(function() {
    var currPos = $(window).scrollTop();
    if (sectionsPos < currPos) {
       
        $('nav').removeClass("trans");
  }
      else $('nav').addClass("trans");
    });
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
