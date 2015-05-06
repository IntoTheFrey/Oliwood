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



// Handler for .ready() called.
//$(function() {
  
$nav = $('.mainNav');
$ul = $('.mainNav ul');
$mobileMenu = $('.mobileMenu');
$menuItem = $('.mainNav li a');
$contactMenuItem = $("a[href='#contact']").parent();


  if ( $(window).width() < 480 ) {
    $ul.removeClass('flexRow');
    $ul.addClass('flexColumn');
    $mobileMenu.addClass("menuTop");
    $contactMenuItem.show();
  }else{
    $contactMenuItem.hide();
  }

  
$mobileMenu.click(function(){
  $nav.toggleClass("showThisBlock");
});

$menuItem.click(function(e){
  e.preventDefault();
  var menuID = $(this).attr('href');
  var offset = 0;
    if ( $(window).width() < 480 ) {
      offset = -27;
    } else {
      offset = 0;
    }
    selector = $('div ' + menuID );
    scrollToElement(menuID, 700, offset);
});
  

  
//});