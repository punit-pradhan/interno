$(document).ready(function () {
    // Wait for the document to be fully loaded and ready

    $('#menu-acces').on('click', function (e) {
        // When the element with id "menu-acces" is clicked...

        $(".hidden-menu").toggleClass('show');
        // Toggle the "show" class on elements with class "hidden-menu"
        // This adds the "show" class if it's not present and removes it if it's present
    });
});