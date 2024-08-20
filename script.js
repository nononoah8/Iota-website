document.getElementById('join-us-btn').addEventListener('click', function() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSd3JrgKDDBYFKH_4OI6k9Pjdx3byXOCZi-0TQ_d7NlzjTkCdA/viewform?vc=0&c=0&w=1&flr=0', '_blank');
});

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
};

function loadPage(event, url) {
  event.preventDefault();
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    })
    .catch(error => console.error('Error loading page:', error));
}

// document.addEventListener('DOMContentLoaded', () => {
//   const pillarCards = document.querySelectorAll('.pillar-card');

//   pillarCards.forEach(card => {
//     card.addEventListener('mouseenter', () => {
//       document.body.classList.add('dimmed-background');
//       card.classList.add('hovered');
//     });

//     card.addEventListener('mouseleave', () => {
//       document.body.classList.remove('dimmed-background');
//       card.classList.remove('hovered');
//     });
//   });
// });