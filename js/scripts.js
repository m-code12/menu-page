$(function() {
    $("#acc").accordion();
    $(document).animateScroll();
    $(window).trigger('resize').trigger('scroll');
    $("#menubutton").click(function(){
      $('.navbar-nav').toggleClass('active');
    })
});
