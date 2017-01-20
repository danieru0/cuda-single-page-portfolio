$(window).scroll(function () {
   if ($(this).scrollTop() > 59) {
       $(".nav").addClass("sticky");
   } else {
       $(".nav").removeClass("sticky");
   }
});

$(".hamburger").on("click", function (e) {
   e.stopPropagation();
   $(".nav-options").slideToggle(function () {
       $(".nav-options").show;
   }); 
});