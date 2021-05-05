$(function(){
  $('.fa-bars').click(function(){
    var $header=$('.header2-nav');
    if($header.hasClass('open')){
      $header.removeClass('open');
      $header.slideUp(500);
    }else{
      $header.addClass('open');
      $header.slideDown(500);
    }
  });

  ScrollReveal().reveal('.text2', { 
    duration: 1600, 
    scale: 4,
    reset: true
  });

  $(window).scroll(function () {
    
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    
    
    $(".skill-item").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;

           
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 250 * i);
        }
    });
});

$(window).scroll(function () {
    
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();
  var effectPos = scrollBottom - 50;
  
  
  $(".service-item").each(function (i) {
      if(effectPos > $(this).offset().top){
          var that = this;

         
          setTimeout(function () {
             $(that).addClass("fadein");
          }, 250 * i);
      }
  });
});
$('header a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;

  $('html,body').animate({
    "scrollTop":position
  },500);
});

$('.header2-nav li a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;

  $('html,body').animate({
    "scrollTop":position
  },500);
});

$('.link').hover(
  function(){
    $(this).animate({
      "font-size":"35px"
    },400);
  },
  function(){
    $(this).animate({
      "font-size":"30px"
    },400);
  }
);
ScrollReveal().reveal('.text6', { 
  duration: 1600, 
  scale: 0.1,
  reset: true
});

ScrollReveal().reveal('.text3', { 
  duration: 3000, 
  origin: 'left', 
  distance: '150px',
  reset: true   
});

ScrollReveal().reveal('.text4', { 
  duration: 3000, 
  origin: 'right', 
  distance: '150px',
  reset: true   
});

$('.fa-chevron-down').click(function(){
  $('html,body').animate({
    'scrollTop':750
  },500)
});

$('.fa-chevron-up').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },800)
});

$('footer a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;

  $('html,body').animate({
    "scrollTop":position
  },500);
});



});