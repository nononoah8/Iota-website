function setupCarousel(nextId, prevId, imagesContainerClass) {
  const next = document.getElementById(nextId);
  const prev = document.getElementById(prevId);
  const images = document.querySelector(imagesContainerClass);

  let first_card_clone = images.children[0].cloneNode(true);
  let second_card_clone = images.children[1].cloneNode(true);
  let third_card_clone = images.children[2].cloneNode(true);
  let last_card_clone = images.children[images.children.length - 1].cloneNode(true);

  images.insertBefore(last_card_clone, images.children[0]);
  images.appendChild(first_card_clone);
  images.appendChild(second_card_clone);
  images.appendChild(third_card_clone);

  images.style.transitionDuration = "0.0s";
  images.style.transform = `translate(-450px)`;

  let CurrCard = 1;

  next.addEventListener('click', () => {
    if(CurrCard < images.children.length - 3){
      CurrCard++;
      images.style.transitionDuration = "0.5s";
      images.style.transform = `translate(-${CurrCard * 450}px)`;

      if(CurrCard === images.children.length - 3){
        setTimeout(() => {
          images.style.transitionDuration = "0.0s";
          images.style.transform = `translate(-450px)`;
          CurrCard = 1;
        }, 450);
      }
    }else{
      return;
    }
  });

  prev.addEventListener('click', () => {
    if(CurrCard > 0){
      CurrCard--;
      images.style.transitionDuration = "0.5s";
      images.style.transform = `translate(-${CurrCard * 450}px)`;

      if(CurrCard === 0){
        setTimeout(() => {
          images.style.transitionDuration = "0.0s";
          images.style.transform = `translate(-${(images.children.length - 4) * 450}px)`;
          CurrCard = images.children.length - 4;
        }, 450);
      }
    }else{
      return;
    }
  });
}

$(document).ready(function() {
  var originalBGColor = $('body').css('background-color');
  var originalColor = $('.nav2-links').css('color');
  var originalOvalColor = $('.oval').css('background-color');
  var originalButtonColor = $('.apply').css('background-color');
  const chevrons = document.querySelectorAll('.bi-chevron-double-down');
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

  // $('html, body').animate({scrollTop: $(window).height()}, 'slow');

  $('.bi, .chevron2').click(function(){
    $('html, body').animate({scrollTop: window.pageYOffset + $(window).height()}, 'slow');
  });

  $(document).on('click', '.up_chev', function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
  });

  //* This is all the code for the image carousels.
  setupCarousel("next1", "prev1", ".images-container1");
  setupCarousel("next2", "prev2", ".images-container2");
  // setupCarousel("next3", "prev3", ".images-container3");
  // setupCarousel("next4", "prev4", ".images-container4");
  


  document.querySelector('.community_text').addEventListener('click', function() {
    window.scrollTo({ top: 2 * window.innerHeight, behavior: 'smooth' });
  });
  
  document.querySelector('.development_text').addEventListener('click', function() {
    window.scrollTo({ top: 3 * window.innerHeight, behavior: 'smooth' });
  });
  
  document.querySelector('.ambition_text').addEventListener('click', function() {
    window.scrollTo({ top: 4 * window.innerHeight, behavior: 'smooth' });
  });
  
  document.querySelector('.philanthropy_text').addEventListener('click', function() {
    window.scrollTo({ top: 5 * window.innerHeight, behavior: 'smooth' });
  });
});
