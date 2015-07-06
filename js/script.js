function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body, main').animate({
        scrollTop: offsetTop
    }, time);
}


$(document).ready(function() {
  
//$winWidth = $(window).width();
var $winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
$nav = $('.mainNav');
$ul = $('.mainNav ul');
$mobileMenu = $('.mobileMenu');
$menuItemLI = $('.mainNav li');
$menuItem = $('.mainNav li a');
$contactMenuItem = $("a[href='#contact']").parent();

$topButton = $('.top');


if ( $winWidth < 481 ) {
      //alert($winWidth);

    $ul.removeClass('flexRow');
    $ul.addClass('flexColumn');
    $mobileMenu.addClass("menuTop");
    $contactMenuItem.show();
}else{
    $contactMenuItem.hide();
}

  
$mobileMenu.click(function(){
  if ( $winWidth < 481 ) {
    $nav.toggleClass("mainNav");
    $nav.toggleClass("mainNav2");
    $nav.toggleClass("showThisBlock");
  }
});

$menuItem.click(function(e){
  e.preventDefault();
  var menuID = $(this).attr('href');
  var offset = 0;
    if ( $winWidth < 481 ) {
      $nav.toggleClass("mainNav");
      $nav.toggleClass("mainNav2");
      $nav.toggleClass("showThisBlock");
      offset = -50;
    } else {
      offset = 0;
    }
    selector = $('div ' + menuID );
    scrollToElement(menuID, 700, offset);
});

$topButton.click(function(e){
  e.preventDefault();
  scrollToElement(home, 700, 0);
});

  
  
  // sliders
  var sliders = $('figure[id^="slider"]');

  sliders.each( function(){

    var $thisSlider = $(this);
    var $sliderMagazine = $thisSlider.find('.slider-magazine');
    var $sliderMagazineLastImage = $thisSlider.find('.slider-magazine img:last-of-type');

    var $images = $thisSlider.find('.slider-magazine img');

    var slideCount = $images.length;
	var slideWidth = $images.width();
    
	var slideHeight = $images.height();
	var sliderMagazineWidth = slideCount * slideWidth * 2;

    $thisSlider.css({ width: slideWidth, height: slideHeight });
	$sliderMagazine.css({ width: sliderMagazineWidth, marginLeft: - slideWidth });
    $sliderMagazineLastImage.prependTo($sliderMagazine);
  
  });
  
	
//	$('#slider1').css({ width: slideWidth, height: slideHeight });
//	$('#slider1 .slider-magazine').css({ width: sliderUlWidth, marginLeft: - slideWidth });	
//  $('#slider1 .slider-magazine img:last-of-type').prependTo('#slider1 .slider-magazine');

    function moveLeft(id) {

      var $thisSlider = $("#" + id);
      var $sliderMagazine = $thisSlider.find('.slider-magazine');
      var $sliderMagazineLastImage = $thisSlider.find('.slider-magazine img:last-of-type');
      var $images = $thisSlider.find('.slider-magazine img');
      var slideWidth = $images.width();

      $($sliderMagazine).animate({
          left: + slideWidth
      }, 800, function () {
        $sliderMagazineLastImage.prependTo($sliderMagazine);
        $sliderMagazine.css('left','');


      });
    };

    function moveRight(id) {

      var $thisSlider = $("#" + id);
      var $sliderMagazine = $thisSlider.find('.slider-magazine');
      var $sliderMagazineFirstImage = $thisSlider.find('.slider-magazine img:first-of-type');
      var $images = $thisSlider.find('.slider-magazine img');
      var slideWidth = $images.width();
      
      $sliderMagazine.animate({
            left: - slideWidth
        }, 800, function () {
          $sliderMagazineFirstImage.appendTo($sliderMagazine);
          $sliderMagazine.css('left', '');
        });
    };

  
    $('.control_prev').click(function () {
      var sliderID = $(this).parent().attr("id");
      moveLeft(sliderID);
    });

    $('.control_next').click(function () {
      var sliderID = $(this).parent().attr("id");
      moveRight(sliderID);
    });
  
  
});