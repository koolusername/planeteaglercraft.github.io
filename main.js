// Set the current year in the footer dynamically
window.addEventListener('DOMContentLoaded', function() {
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  var navToggle = document.querySelector('.pmc-nav-toggle');
  var navList = document.querySelector('.pmc-nav ul');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('pmc-nav-open');
    });
  }
});
