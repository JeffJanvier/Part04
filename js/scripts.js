// DEVELOPER: Jeff Janvier, IS117-007, Fall 2025
// Small utilities for My Food Menu site

// Insert year into each footer placeholder
(function () {
  var year = new Date().getFullYear();
  var ids = ['year-home','year-menu','year-apps','year-main','year-bev','year-spec','year-contact'];
  ids.forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.textContent = year;
  });
}());

// Basic client-side validation for forms (Bootstrap style)
(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Prevent real submit in this demo
        event.preventDefault();
        alert('Thanks — this demo form does not submit. Replace with server endpoint if needed.');
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
