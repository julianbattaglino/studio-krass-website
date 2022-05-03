$(document).ready(function(){



$(".hamburger").click(function(e) {
  		e.preventDefault();
  		$(this).toggleClass( "open" );
  		$('.menu-nav').toggleClass( "open" );
	   });

$(".princ").click(function(e) {
  		e.preventDefault();
  		$(".hamburger").removeClass( "open" );
  		$('.menu-nav').removeClass( "open" );
	   });

$(".bt-cont").click(function(e) {
      e.preventDefault();
      $(".contact-area").toggleClass( "open" );
      $(this).toggleClass( "open" );
     });

$(".gotop").click(function(e) {
  e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
        }, 800);
        return false;
     });

});

//******************************

var element = 250;
$(window).scroll(function(){
  var y = $(window).scrollTop();
    if (y >= element){
     $(".styk").addClass("open");
     //$("body").addClass("stk");
    }else if (y < element){
     $(".styk").removeClass("open");
     //$("body").removeClass("stk");
    }
});



