// Set the current year in the footer dynamically
window.addEventListener('DOMContentLoaded', function() {
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
