jQuery(document).ready(function($)  {
var sections = $(".section"),
nav = $("nav"),
nav_height = nav.outerHeight();
$(window).on("scroll", function() 
{
var cur_pos = $(this).scrollTop();
sections.each(function() {
var top = $(this).offset().top - nav_height,
bottom = top + $(this).outerHeight();
if (cur_pos >= top && cur_pos <= bottom) {
nav.find("a").removeClass("active");
sections.removeClass("active");
$(this).addClass("active");
nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
}
});
});
nav.find("a").on("click", function() {
var $el = $(this),
id = $el.attr("href");
$("html, body").animate(
{
scrollTop: $(id).offset().top - nav_height +20
},
500
);
return false;
});
var owl = $("#owl-demo-2");
owl.owlCarousel({
items : 4,
loop:true,
margin:10,
autoplay: true,
autoplaySpeed: 2000,
itemsDesktop : [992,3],
itemsDesktopSmall : [768,2], 
itemsTablet: [480,2], 
itemsMobile : [320,1],
responsiveClass:true,
responsive:{
0:{
items:1,
nav: true,
navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
},
600:{
items:2,
nav: true,
navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
},
1000:{
items: 4,
autoplay: true,
nav: true,
navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
}
}
});
$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
$(window).scroll(function(){
if ($(this).scrollTop() > 50) {
$('.back-to-top').fadeIn('slow');
} else {
$('.back-to-top').fadeOut('slow');
}
var scroll = $(window).scrollTop();
var sticky = $('.navbar').outerHeight();
if (scroll >= sticky) {
$('.navbar').addClass('sticky animatable fadeIn');
$('body').css('padding-top', sticky);
} else {
$('.navbar').removeClass('sticky');
$('body').css('padding-top', 0);
}
});
$('.back-to-top').click(function(){
$("html, body").animate({ scrollTop: 0 }, 500);
return false;
});
jQuery(function($) {
var doAnimations = function() {
var offset = $(window).scrollTop() + $(window).height(),
$animatables = $('.animatable');
if ($animatables.length == 0) {
$(window).off('scroll', doAnimations);
}
$animatables.each(function(i) {
var $animatable = $(this);
if (($animatable.offset().top + $animatable.height() - 20) < offset) {
$animatable.removeClass('animatable').addClass('animated');
}
});
};
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');
});