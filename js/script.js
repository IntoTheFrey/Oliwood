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

  
});