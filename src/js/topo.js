$(document).ready(function(){

   $(window).scroll(function(){
      var altura = $(window).height() * 3/4;
      var i=0;

      if ($(this).scrollTop() > altura) {
         $('a[href="#top"]').fadeIn();
      } else {
         $('a[href="#top"]').fadeOut();
      }
   });

   $('a[href="#top"], .top').click(function(){
      $('html, body').animate({scrollTop : 0},900);
      return false;
   });
});