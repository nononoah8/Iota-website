$(document).ready(function() {
  var originalBGColor = $('body').css('background-color');
  var originalColor = $('.nav2-links').css('color');
  var originalOvalColor = $('.oval').css('background-color');
  var originalButtonColor = $('.apply').css('background-color');
  // var hasScrolled = false; // Add this line

  $('.nav2-links').hover(
    function() { // Mouse over
      $('body').stop().animate({backgroundColor: 'black'}, 300);
      $(this).stop().animate({color: 'white'}, 300);
      $('.oval').stop().animate({backgroundColor: 'white', color: 'black'}, 300);
      $('.oval-text').stop().animate({color: 'black'}, 300);
      $('.apply').stop().animate({backgroundColor: '#DDD8B8'}, 300);
    },
    function() { // Mouse out
      $('body').stop().animate({backgroundColor: originalBGColor}, 300);
      $(this).stop().animate({color: originalColor}, 300);
      $('.oval').stop().animate({backgroundColor: originalOvalColor, color: ''}, 300);
      $('.oval-text').stop().animate({color: ''}, 300);
      $('.apply').stop().animate({backgroundColor: originalButtonColor}, 300);
    }
  );

  $('.bi').click(function(){
    $('html, body').animate({scrollTop: $(window).height()}, 'slow');
  });
});