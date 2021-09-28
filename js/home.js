jQuery(document).ready(function() {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  jQuery(".video-btn").click(function() {
    $videoSrc = jQuery(this).attr("data-src");
    console.log(".video-btn clicked" + $videoSrc);
  });

  // when the modal is opened autoplay it
  jQuery("#home-banner-vid").on("shown.bs.modal", function(e) {
    console.log("modal opened" + $videoSrc);
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    jQuery("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
    );
  });

  // stop playing the youtube video when I close the modal
  jQuery("#home-banner-vid").on("hide.bs.modal", function(e) {
    // a poor man's stop video
    jQuery("#video").attr("src", $videoSrc);
  });

  // document ready


  jQuery('body').scrollspy({ 
    target: '.navbar'
  })

  jQuery('.next').click(function (e) {  
      var current = jQuery('.navbar ul li.active');
      var next = jQuery('.navbar ul li.active').next().find('a').attr('href');
      jQuery('html, body').animate({
          scrollTop: jQuery(next).offset().top
      }, 500);
      jQuery('.navbar ul li.active').next().addClass('active');
      jQuery(current).removeClass('active');
  })

  jQuery('.previous').click(function (e) {
      var current = jQuery('.navbar ul li.active');
      var prev = jQuery('.navbar ul li.active').prev().find('a').attr('href');
      jQuery('html, body').animate({
          scrollTop: jQuery(prev).offset().top
      }, 500);
      jQuery('.navbar ul li.active').prev().addClass('active');
      jQuery(current).removeClass('active');
  })
});
