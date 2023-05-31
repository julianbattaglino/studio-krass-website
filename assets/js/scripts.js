$(window).on('load', function () {

  // Isotope INIT
  $('.isotope-grid').isotope({
    itemSelector: '.grid-item',
    filter: '*',
    gutter: 10,
  });

  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $('.isotope-grid').isotope({ filter: filterValue });
    $('.filter-button-group').removeClass('active');
    $(this).addClass('active');
  });

});

$(document).ready(function () {
  $(".hamburger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $('.menu-nav').toggleClass("open");
  });

  $(".princ").click(function (e) {
    e.preventDefault();
    $(".hamburger").removeClass("open");
    $('.menu-nav').removeClass("open");
  });

  $(".bt-cont").click(function (e) {
    e.preventDefault();
    $(".contact-area").toggleClass("open");
    $(this).toggleClass("open");
  });

  $(".gotop").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});

//******************************

var element = 250;
$(window).scroll(function () {
  var y = $(window).scrollTop();
  if (y >= element) {
    $(".styk").addClass("open");
    //$("body").addClass("stk");
  } else if (y < element) {
    $(".styk").removeClass("open");
    //$("body").removeClass("stk");
  }
});


function recaptchaCallback() {
  $('#submitBtn').prop('disabled', false);
  $('#verifica').hide();
  $('#sucess').show();
}

function recaptchaExpiredCallback() {
  // Resetear recaptcha en caso de que el captcha expire
  $('#submitBtn').prop('disabled', true);
  grecaptcha.reset();
  $('#sucess').hide();
}

function recaptchaErrorCallback() {
  // Resetear recaptcha en caso de error por network connectivity
  $('#submitBtn').prop('disabled', true);
  grecaptcha.reset();
}




