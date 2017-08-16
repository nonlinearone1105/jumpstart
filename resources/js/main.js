$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollDistance = 0;
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if(scrollTop - scrollDistance > 50) {
      var navbarHeight = $(".navbar").css("height");
      $(".navbar").animate({top: "-" + navbarHeight}, 150);
      scrollDistance = scrollTop;
    }
    else if(scrollDistance-scrollTop > 50) {
      $(".navbar").animate({top: "0px"}, 150);
      scrollDistance = scrollTop;
    }
  });
});
