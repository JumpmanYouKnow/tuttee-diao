import {Component, AfterViewInit, ElementRef,OnDestroy} from 'angular2/core';


// declare var jQuery: JQueryStatic;


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.

  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element

  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['app/home/home.css'], 
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: 'app/home/home.html'
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
