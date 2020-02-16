document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function openNav() {
  document.getElementById('nav-bar').style.width = '215px';
};

function closeNav() {
  document.getElementById('nav-bar').style.width = '0';
};