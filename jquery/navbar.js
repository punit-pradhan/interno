jQuery.noConflict();
jQuery(document).ready(function($) {
   // Your code using $ as an alias for jQuery
   $('#menu-acces').on('click', function (e) {
      $(".hidden-menu").toggleClass('show');
   });
});