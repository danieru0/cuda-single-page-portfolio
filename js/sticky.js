$(window).scroll(function () {
   if ($(this).scrollTop() > 59) {
       $(".nav").addClass("sticky");
   } else {
       $(".nav").removeClass("sticky");
   }
});