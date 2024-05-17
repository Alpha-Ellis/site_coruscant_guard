document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
          link.style.color = '#f39c12';
      });
      
      link.addEventListener('mouseout', function() {
          link.style.color = '#fff';
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
      let offset = window.scrollY;
      header.style.backgroundPositionY = offset * 0.5 + 'px';
  });

  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
          link.style.color = '#f39c12';
      });

      link.addEventListener('mouseout', function() {
          link.style.color = '#fff';
      });
  });
});
